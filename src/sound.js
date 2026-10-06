// Som de fundo. Se houver um arquivo configurado (SITE.musica.src), toca o arquivo em loop.
// Sem arquivo, gera uma trilha ambiente no próprio navegador (Web Audio API).
// Expõe level() para a cena 3D reagir ao som.

const CHORDS = [
  // Ré dórico, acordes abertos (Hz calculados a partir de MIDI)
  [50, 57, 60, 64, 65], // Dm9  (D A C E F)
  [46, 53, 57, 62, 65], // Bbmaj7 (Bb F A D F)
  [48, 55, 60, 64, 69], // C6/9-ish (C G C E A)
  [45, 52, 57, 60, 64], // Am7 (A E A C E)
];
const BELLS = [74, 76, 77, 79, 81, 84, 86];
const mtof = (m) => 440 * Math.pow(2, (m - 69) / 12);

export class Sound {
  constructor(cfg = {}) {
    this.cfg = cfg;
    this.ctx = null;
    this.playing = false;
    this.listeners = new Set();
    this._level = 0;
    this.freq = null;
    this.timer = null;
    this.chordIndex = 0;
    this.ducked = false;
  }

  get hasFile() {
    return Boolean(this.cfg && this.cfg.src);
  }

  onChange(fn) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
  emit() {
    this.listeners.forEach((fn) => fn(this.playing));
  }

  _init() {
    if (this.ctx) return;
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) throw new Error("Web Audio indisponível");
    const ctx = (this.ctx = new AC());

    this.master = ctx.createGain();
    this.master.gain.value = 0;
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 256;
    this.analyser.smoothingTimeConstant = 0.85;
    this.freq = new Uint8Array(this.analyser.frequencyBinCount);
    this.master.connect(this.analyser);
    this.analyser.connect(ctx.destination);

    if (this.hasFile) {
      this.audio = new Audio();
      this.audio.src = this.cfg.src;
      this.audio.loop = true;
      this.audio.preload = "auto";
      this.audio.crossOrigin = "anonymous";
      ctx.createMediaElementSource(this.audio).connect(this.master);
    } else {
      // cadeia da trilha generativa: vozes -> filtro -> (seco + eco) -> master
      this.bus = ctx.createGain();
      this.bus.gain.value = 0.9;
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 1400;
      lp.Q.value = 0.4;
      const delay = ctx.createDelay(2);
      delay.delayTime.value = 0.48;
      const fb = ctx.createGain();
      fb.gain.value = 0.38;
      const wet = ctx.createGain();
      wet.gain.value = 0.35;
      this.bus.connect(lp);
      lp.connect(this.master);
      lp.connect(delay);
      delay.connect(fb);
      fb.connect(delay);
      delay.connect(wet);
      wet.connect(this.master);
      // LFO lento no filtro, para a trilha respirar
      const lfo = ctx.createOscillator();
      const lfoAmt = ctx.createGain();
      lfo.frequency.value = 0.05;
      lfoAmt.gain.value = 500;
      lfo.connect(lfoAmt);
      lfoAmt.connect(lp.frequency);
      lfo.start();
    }
  }

  _voice(midi, t0, dur, gain, type = "triangle", detune = 0) {
    const ctx = this.ctx;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.value = mtof(midi);
    o.detune.value = detune;
    g.gain.setValueAtTime(0, t0);
    g.gain.linearRampToValueAtTime(gain, t0 + dur * 0.35);
    g.gain.setValueAtTime(gain, t0 + dur * 0.6);
    g.gain.linearRampToValueAtTime(0, t0 + dur + 2.5);
    o.connect(g);
    g.connect(this.bus);
    o.start(t0);
    o.stop(t0 + dur + 2.6);
  }

  _chord() {
    if (!this.playing || this.hasFile) return;
    const ctx = this.ctx;
    const t0 = ctx.currentTime + 0.05;
    const dur = 7;
    const notes = CHORDS[this.chordIndex % CHORDS.length];
    this.chordIndex++;
    // baixo
    this._voice(notes[0] - 12, t0, dur, 0.09, "sine");
    notes.forEach((m, i) => {
      this._voice(m, t0 + i * 0.12, dur, 0.035, "triangle", -7);
      this._voice(m, t0 + i * 0.12, dur, 0.03, "sine", 6);
    });
    // sinos esparsos
    const bells = 1 + Math.floor(Math.random() * 3);
    for (let k = 0; k < bells; k++) {
      const m = BELLS[Math.floor(Math.random() * BELLS.length)];
      const t = t0 + 1 + Math.random() * (dur - 2);
      const o = ctx.createOscillator();
      const g = ctx.createGain();
      o.type = "sine";
      o.frequency.value = mtof(m);
      g.gain.setValueAtTime(0, t);
      g.gain.linearRampToValueAtTime(0.045, t + 0.01);
      g.gain.exponentialRampToValueAtTime(0.0001, t + 3.2);
      o.connect(g);
      g.connect(this.bus);
      o.start(t);
      o.stop(t + 3.3);
    }
    this.timer = setTimeout(() => this._chord(), dur * 1000);
  }

  async start() {
    this._init();
    const ctx = this.ctx;
    if (ctx.state === "suspended") await ctx.resume();
    this.playing = true;
    const now = ctx.currentTime;
    const target = this.ducked ? 0.08 : this.hasFile ? 0.9 : 0.8;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(target, now + 1.6);
    if (this.hasFile) {
      try {
        await this.audio.play();
      } catch (e) {
        this.playing = false;
        this.emit();
        throw e;
      }
    } else {
      clearTimeout(this.timer);
      this._chord();
    }
    this.emit();
  }

  stop() {
    if (!this.ctx || !this.playing) return;
    this.playing = false;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(0, now + 0.8);
    clearTimeout(this.timer);
    setTimeout(() => {
      if (this.playing) return;
      if (this.audio) this.audio.pause();
      this.ctx.suspend();
    }, 900);
    this.emit();
  }

  toggle() {
    return this.playing ? (this.stop(), Promise.resolve()) : this.start();
  }

  // abaixa a música enquanto o vídeo toca
  duck(on) {
    this.ducked = on;
    if (!this.ctx || !this.playing) return;
    const now = this.ctx.currentTime;
    this.master.gain.cancelScheduledValues(now);
    this.master.gain.setValueAtTime(this.master.gain.value, now);
    this.master.gain.linearRampToValueAtTime(on ? 0.08 : this.hasFile ? 0.9 : 0.8, now + 0.8);
  }

  /** nível suavizado 0..1 */
  level() {
    if (!this.analyser || !this.playing) {
      this._level *= 0.92;
      return this._level;
    }
    this.analyser.getByteFrequencyData(this.freq);
    let s = 0;
    for (let i = 0; i < this.freq.length; i++) s += this.freq[i];
    const v = Math.min(1, s / this.freq.length / 110);
    this._level += (v - this._level) * 0.15;
    return this._level;
  }

  /** valor de uma faixa de frequência 0..1 */
  band(i, total) {
    if (!this.freq || !this.playing) return 0;
    // a energia da trilha fica abaixo de ~3 kHz: usa só os primeiros bins
    const idx = 1 + Math.floor((i / Math.max(1, total)) * 16);
    return this.freq[idx] / 255;
  }
}
