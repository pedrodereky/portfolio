const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "assets/siteBreak-CKn4vXJu.js",
      "assets/three.module-B-CQE7DZ.js",
      "assets/glyphHeroScene-DAyI_oae.js",
      "assets/WorksView-D-VGwM9j.js",
      "assets/vue-BD3PniFr.js",
      "assets/moreWorks-CX-Gvj0p.js",
      "assets/BackLink-C5odW33y.js",
      "assets/BackLink-B6_uYCfq.css",
      "assets/WorksView-CEhVmLB0.css",
      "assets/CaseView-Danxi1MR.js",
      "assets/CaseView-CngPDQqM.css",
      "assets/PrivacyView-jbqzthsw.js",
      "assets/PrivacyView-DqV982RD.css",
      "assets/NotFoundView-CZUHmFqz.js",
      "assets/NotFoundView-DOvvcQdu.css",
    ]),
) => i.map((i) => d[i]);
import {
  A as e,
  B as t,
  C as n,
  D as r,
  E as i,
  F as a,
  G as o,
  H as s,
  I as c,
  J as l,
  K as u,
  L as d,
  M as f,
  N as p,
  O as m,
  P as h,
  R as g,
  S as _,
  T as v,
  U as y,
  V as b,
  W as x,
  X as S,
  Y as C,
  _ as w,
  a as T,
  b as E,
  c as D,
  d as O,
  f as ee,
  g as k,
  h as A,
  i as j,
  j as M,
  k as N,
  l as te,
  m as ne,
  n as re,
  o as ie,
  q as P,
  r as ae,
  s as oe,
  t as se,
  u as ce,
  v as F,
  w as I,
  x as L,
  y as R,
  z,
} from "./vue-BD3PniFr.js";
(function () {
  let e = document.createElement(`link`).relList;
  if (e && e.supports && e.supports(`modulepreload`)) return;
  for (let e of document.querySelectorAll(`link[rel="modulepreload"]`)) n(e);
  new MutationObserver((e) => {
    for (let t of e)
      if (t.type === `childList`) for (let e of t.addedNodes) e.tagName === `LINK` && e.rel === `modulepreload` && n(e);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(e) {
    let t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      (t.credentials =
        e.crossOrigin === `use-credentials` ? `include` : e.crossOrigin === `anonymous` ? `omit` : `same-origin`),
      t
    );
  }
  function n(e) {
    if (e.ep) return;
    e.ep = !0;
    let n = t(e);
    fetch(e.href, n);
  }
})();
var le = `work-case`,
  ue = window.performance.timeOrigin,
  de = (e) => ({ backdrop: e, session: ue }),
  fe = (e) => (e?.session === ue ? (e.backdrop ?? null) : null),
  pe = oe(`portal`, () => ({ open: o(!1), overlay: o(null) }));
function me() {
  let e = T(),
    n = pe(),
    r = u(e.currentRoute.value);
  return (
    t(
      e.currentRoute,
      (t) => {
        let i = t.name === `work-case` && fe(e.options.history.state) === r.value.fullPath;
        ((n.overlay = i ? t.params.slug : null), i || (r.value = t));
      },
      { flush: `sync` },
    ),
    r
  );
}
var he = {
    __name: `App`,
    setup(e) {
      let t = me();
      return (e, n) => {
        let r = a(`RouterView`);
        return (M(), E(r, { route: P(t) }, null, 8, [`route`]));
      };
    },
  },
  ge = `/work`,
  _e = `/privacy`,
  ve = [`projects`, `about`, `stack`, `experience`, `contact`],
  ye = { projects: ge },
  be = `contact`,
  xe = Symbol(`has-footer`),
  Se = [
    {
      id: `diarioOficialScanner`,
      shot: `diario-oficial-scanner`,
      url: `/projetos/diario-oficial-scanner/`,
      host: `/projetos/diario-oficial-scanner`,
      background: `#f4efe4`,
      embed: !0,
      tags: { type: [`saas`], industry: [`gov`], client: [`own`], tech: [`react`, `ts`, `supabase`, `ai`] },
    },
    {
      id: `assinaAi`,
      shot: `assina-ai`,
      url: `/projetos/assina-ai/`,
      host: `/projetos/assina-ai`,
      background: `#ffffff`,
      embed: !0,
      tags: { type: [`saas`], industry: [`legal`], client: [`own`], tech: [`react`, `ts`, `supabase`] },
    },
    {
      id: `akuraAds`,
      shot: `akura-ads`,
      url: `/projetos/akura-ads/`,
      host: `/projetos/akura-ads`,
      background: `#071a33`,
      embed: !0,
      tags: { type: [`dashboard`], industry: [`marketing`], client: [`own`], tech: [`react`, `ts`, `ai`] },
    },
    {
      id: `myDashboard`,
      shot: `my-dashboard`,
      url: `/projetos/my-dashboard/`,
      host: `/projetos/my-dashboard`,
      background: `#f6f3ff`,
      embed: !0,
      tags: { type: [`dashboard`], industry: [`data`], client: [`own`], tech: [`react`, `ts`, `ai`] },
    },
    {
      id: `liveCoach`,
      shot: `live-coach`,
      url: `/projetos/live-coach/`,
      host: `/projetos/live-coach`,
      background: `#0b0d12`,
      embed: !0,
      tags: { type: [`platform`], industry: [`sales`], client: [`own`], tech: [`react`, `supabase`, `ai`] },
    },
    {
      id: `briefbot`,
      shot: `briefbot`,
      url: `/projetos/briefbot/`,
      host: `/projetos/briefbot`,
      background: `#0f1115`,
      embed: !0,
      tags: { type: [`platform`], industry: [`services`], client: [`own`], tech: [`react`, `supabase`, `ai`] },
    },
    {
      id: `gabineteConectado`,
      shot: `gabinete-conectado`,
      url: `/projetos/gabinete-conectado/`,
      host: `/projetos/gabinete-conectado`,
      background: `#14452f`,
      embed: !0,
      tags: { type: [`platform`], industry: [`gov`], client: [`own`], tech: [`react`, `ts`, `supabase`] },
    },
    {
      id: `juristechAi`,
      shot: `juristech-ai`,
      url: `/projetos/juristech-ai/`,
      host: `/projetos/juristech-ai`,
      background: `#0a0f1a`,
      embed: !0,
      tags: { type: [`saas`], industry: [`legal`], client: [`own`], tech: [`react`, `ts`, `supabase`, `ai`] },
    },
    {
      id: `guerraDeCartas`,
      shot: `guerra-de-cartas`,
      url: `https://guerra-de-cartas-3d.pages.dev/`,
      host: `guerra-de-cartas-3d.pages.dev`,
      background: `#6fb7e6`,
      embed: !0,
      tags: { type: [`game`], industry: [`games`], client: [`own`], tech: [`react`, `ts`, `three`] },
    },
    {
      id: `arqStudio`,
      shot: `arq-studio`,
      url: `/projetos/arq-studio/`,
      host: `/projetos/arq-studio`,
      background: `#fafafa`,
      embed: !0,
      tags: { type: [`saas`], industry: [`design`], client: [`own`], tech: [`react`, `ts`, `three`, `ai`] },
    },
    {
      id: `wasabii`,
      shot: `wasabii`,
      url: `/projetos/wasabii/`,
      host: `/projetos/wasabii`,
      background: `#050505`,
      embed: !0,
      tags: { type: [`saas`], industry: [`design`], client: [`own`], tech: [`react`, `ts`, `three`] },
    },
    {
      id: `megaAutomacao`,
      shot: `mega-automacao`,
      url: `/projetos/mega-automacao/`,
      host: `/projetos/mega-automacao`,
      background: `#0b0b10`,
      embed: !0,
      tags: { type: [`platform`], industry: [`marketing`], client: [`own`], tech: [`react`, `ts`, `ai`] },
    },
    {
      id: `agendaFlow`,
      shot: `agenda-flow`,
      url: `https://pedrodereky.github.io/AgendaFlow/`,
      host: `pedrodereky.github.io/AgendaFlow`,
      background: `#f5f7f4`,
      embed: !0,
      tags: { type: [`platform`], industry: [`services`], client: [`own`], tech: [`js`] },
    },
  ],
  Ce = /([a-z])([A-Z0-9])/g,
  we = /([0-9])([a-zA-Z])/g,
  Te = `/`,
  Ee = `webp`,
  De = `assets/works`,
  Oe = { wide: `wide`, narrow: `narrow` },
  ke = (e, t) => `${e.shot}-${t}.${Ee}`,
  Ae = (e) => e.replace(Ce, `$1-$2`).replace(we, `$1-$2`).toLowerCase(),
  je = (e) => `${ge}${Te}${e}${Te}`,
  Me = Se.map((e) => {
    let t = Ae(e.id);
    return { ...e, slug: t, path: je(t) };
  }),
  Ne = new Map(Me.map((e) => [e.slug, e])),
  Pe = (e) => Ne.get(e) ?? null,
  Fe = { threshold: -6, knee: 0, ratio: 20, attack: 0.003, release: 0.1 },
  Ie = (e) => {
    let t = e.createDynamicsCompressor();
    for (let [e, n] of Object.entries(Fe)) t[e].value = n;
    return (t.connect(e.destination), t);
  },
  Le = () => {
    let e = null,
      t = null,
      n = !1;
    return {
      unlock() {
        return n ? null : (e || ((e = new AudioContext()), (t = Ie(e))), e.resume().catch(() => null), e);
      },
      output() {
        return t;
      },
      unlocked() {
        return !!e;
      },
      dispose() {
        ((n = !0), e?.close(), (e = null), (t = null));
      },
    };
  },
  Re = null,
  ze = (e) => {
    Re = e;
  },
  Be = () => {
    let e = Re;
    return ((Re = null), e);
  },
  Ve = 1024,
  He = 0.001,
  B = (e, t) => {
    let n = e.createGain();
    return ((n.gain.value = t), n);
  },
  Ue = (e, t, n, r = 0) => {
    let i = e.createBiquadFilter();
    return ((i.type = t), (i.frequency.value = n), (i.gain.value = r), i);
  },
  We = (e, t, n = `sine`) => {
    let r = e.createOscillator();
    return ((r.type = n), (r.frequency.value = t), r);
  },
  Ge = (e, t) => {
    let n = e.createDelay();
    return ((n.delayTime.value = t), n);
  },
  Ke = (e, t) => {
    let n = new Float32Array(Ve),
      r = 1 / Math.tanh(t);
    for (let e = 0; e < Ve; e += 1) n[e] = Math.tanh(((e / 1023) * 2 - 1) * t) * r;
    let i = e.createWaveShaper();
    return ((i.curve = n), (i.oversample = `4x`), i);
  },
  qe = (e, t, n) => {
    let r = Ge(e, t);
    return (r.connect(B(e, n)).connect(r), r);
  },
  Je = (e, t) => {
    let n = Math.floor(e.sampleRate * t),
      r = e.createBuffer(1, n, e.sampleRate),
      i = r.getChannelData(0);
    for (let e = 0; e < n; e += 1) i[e] = Math.random() * 2 - 1;
    let a = e.createBufferSource();
    return ((a.buffer = r), a);
  },
  Ye = (e, t, n, r) => {
    let i = B(e, 0);
    return (i.gain.setValueAtTime(t, n), i.gain.exponentialRampToValueAtTime(He, n + r), i);
  },
  Xe = (e, t, n, r, i) => {
    (e.setValueAtTime(t, r), e.exponentialRampToValueAtTime(n, r + i));
  },
  Ze = {
    volume: 0.45,
    drive: 4,
    zapFromHz: 1400,
    zapToHz: 70,
    zapSeconds: 0.28,
    zapGain: 0.6,
    crunchFromHz: 4200,
    crunchToHz: 500,
    crunchSeconds: 0.22,
    crunchGain: 0.7,
    blips: 9,
    blipSpan: 0.3,
    blipMinHz: 300,
    blipMaxHz: 2600,
    blipGain: 0.22,
    echoSeconds: 0.09,
    echoFeedback: 0.35,
    echoMix: 0.3,
  },
  Qe = {
    volume: 0.5,
    drive: 2.5,
    thudFromHz: 150,
    thudToHz: 38,
    thudSeconds: 0.22,
    thudGain: 0.9,
    crashHz: 2600,
    crashSeconds: 0.45,
    crashGain: 0.6,
    shards: 16,
    shardSpan: 0.6,
    shardMinHz: 1800,
    shardMaxHz: 7200,
    shardSeconds: [0.05, 0.22],
    shardGain: 0.16,
    growlFromHz: 420,
    growlToHz: 55,
    growlSeconds: 0.5,
    growlGain: 0.3,
    echoSeconds: 0.11,
    echoFeedback: 0.4,
    echoMix: 0.35,
  },
  $e = {
    volume: 0.3,
    snapSeconds: 0.05,
    snapHz: 3200,
    snapGain: 0.7,
    knockHz: 190,
    knockSeconds: 0.09,
    knockGain: 0.35,
    crackleSeconds: 0.35,
    crackleHz: 5200,
    crackleGain: 0.22,
    tinkleHz: [2400, 6800],
    tinkleSeconds: [0.05, 0.32],
    tinkleSpread: [0.4, 1],
    tinkleGain: 0.09,
    partials: [
      [1, 1],
      [2.76, 0.45],
      [5.4, 0.2],
    ],
    scatterBias: 1.6,
    crackTinkles: 26,
    crackSpan: 0.9,
    debrisTinkles: 34,
    debrisSpan: 1.6,
    debrisGain: 0.06,
    echoSeconds: 0.07,
    echoFeedback: 0.3,
    echoMix: 0.25,
  },
  et = {
    volume: 0.0324,
    fadeSeconds: 2.5,
    dropSeconds: 0.25,
    mainsHz: 50,
    bodyHz: 320,
    hissHz: 4200,
    hissGain: 0.25,
    hissSeconds: 2,
  },
  tt = {
    volume: 0.45,
    fadeSeconds: 0.5,
    rate: 24,
    jitter: 0.5,
    loopSeconds: 2.4,
    tickSeconds: 0.004,
    tickFloor: 0.45,
    toneHz: 2400,
    toneQ: 0.9,
    attackSeconds: 0.02,
    holdSeconds: 0.15,
    releaseSeconds: 0.05,
  },
  nt = {
    volume: 0.22,
    delaySeconds: 0.12,
    thudFromHz: 180,
    thudToHz: 40,
    thudSeconds: 0.55,
    thudGain: 0.8,
    droneHz: [55, 58.5],
    droneCutHz: 480,
    droneSeconds: 2.4,
    droneGain: 0.5,
    glitches: 12,
    glitchDelay: 0.08,
    glitchSeconds: 1.4,
    glitchLength: [0.02, 0.07],
    glitchHz: [500, 2400],
    glitchQ: 2.5,
    glitchGain: 0.5,
  },
  rt = {
    volume: 0.35,
    tickHz: 2200,
    tickQ: 1.2,
    tickSeconds: 0.03,
    tickGain: 0.8,
    thumpFromHz: 160,
    thumpToHz: 70,
    thumpSeconds: 0.07,
    thumpGain: 0.7,
  },
  it = {
    volume: 0.35,
    thumpFromHz: 140,
    thumpToHz: 42,
    thumpSeconds: 0.18,
    thumpGain: 0.9,
    whineFromHz: 5200,
    whineToHz: 110,
    whineSeconds: 0.5,
    whineGain: 0.16,
    crackleFromHz: 2400,
    crackleToHz: 320,
    crackleSeconds: 0.55,
    crackleGain: 0.4,
    popDelay: 0.8,
    popFromHz: 620,
    popToHz: 160,
    popSeconds: 0.09,
    popGain: 0.3,
  },
  V = {
    volume: 0.07,
    startDelay: 1.2,
    fadeInSeconds: 4,
    fadeOutSeconds: 1.2,
    duck: 0.3,
    duckSeconds: 0.8,
    lookAheadSeconds: 2.5,
    tickMs: 400,
    rootHz: 73.42,
    droneDetuneCents: 6,
    droneGain: 0.5,
    droneQ: 0.8,
    droneCutHz: [170, 420],
    droneSweepHz: 0.045,
    subGain: 0.4,
    breathHz: 0.07,
    breathDepth: 0.3,
    padRootHz: 146.83,
    chords: [
      [0, 3, 7],
      [1, 5, 8],
      [-2, 1, 5],
      [-4, 0, 3],
      [-7, -4, 0],
    ],
    homeChance: 0.45,
    firstChord: 2,
    chordEvery: [10, 16],
    chordAttack: 4,
    chordHold: 3,
    chordRelease: 7,
    chordGain: 0.09,
    padCutHz: 900,
    padDetuneCents: 7,
    padSawGain: 0.35,
    padSend: 0.6,
    blipBaseHz: 587.33,
    blipNotes: [0, 1, 3, 5, 7, 8, 10, 12],
    firstBlip: [3, 5],
    blipEvery: [2.5, 7],
    blipPhrase: [1, 3],
    blipStep: 0.24,
    blipSeconds: 0.7,
    blipGain: 0.05,
    blipCutHz: 2200,
    blipSend: 0.5,
    echoSeconds: 0.375,
    echoFeedback: 0.42,
    echoMix: 0.5,
    reverbSeconds: 4.5,
    reverbDecay: 3,
    reverbMix: 0.45,
    hissHz: 3200,
    hissGain: 0.012,
    hissSeconds: 2,
    glitchEvery: [20, 45],
    glitchChops: [3, 6],
    glitchSeconds: [0.02, 0.06],
    glitchGap: [0.02, 0.08],
    glitchHz: [600, 3e3],
    glitchGain: 0.05,
  },
  at = (e, t, n = e.destination) => {
    let r = Ke(e, Ze.drive),
      i = B(e, Ze.volume),
      a = qe(e, Ze.echoSeconds, Ze.echoFeedback),
      o = We(e, Ze.zapFromHz, `sawtooth`);
    (Xe(o.frequency, Ze.zapFromHz, Ze.zapToHz, t, Ze.zapSeconds),
      o.connect(Ye(e, Ze.zapGain, t, Ze.zapSeconds)).connect(r));
    let s = Je(e, Ze.crunchSeconds),
      c = Ue(e, `bandpass`, Ze.crunchFromHz);
    (Xe(c.frequency, Ze.crunchFromHz, Ze.crunchToHz, t, Ze.crunchSeconds),
      s
        .connect(c)
        .connect(Ye(e, Ze.crunchGain, t, Ze.crunchSeconds))
        .connect(r));
    let l = We(e, Ze.blipMinHz, `square`);
    for (let e = 0; e < Ze.blips; e += 1) {
      let n = Ze.blipMinHz + Math.random() * (Ze.blipMaxHz - Ze.blipMinHz);
      l.frequency.setValueAtTime(n, t + (e * Ze.blipSpan) / Ze.blips);
    }
    (l.connect(Ye(e, Ze.blipGain, t, Ze.blipSpan)).connect(r),
      r.connect(i),
      r.connect(a).connect(B(e, Ze.echoMix)).connect(i),
      i.connect(n),
      o.start(t),
      o.stop(t + Ze.zapSeconds),
      s.start(t),
      l.start(t),
      l.stop(t + Ze.blipSpan));
  },
  ot = (e) => ({
    play() {
      let t = e.unlock();
      t && at(t, t.currentTime, e.output());
    },
  }),
  st = `audio/`,
  ct = { uk: ``, ru: `-ru`, en: `-en` },
  lt = {
    file: `greeting.mp3`,
    startDelay: 0.05,
    gapSeconds: 0.5,
    sourcePeak: 0.6,
    pitch: 0.78,
    speed: 0.95,
    subOctaves: 1,
    mainGain: 1,
    subGain: 0.43,
    growlHz: 36,
    growlDepth: 0.21,
    drive: 2.1,
    bassHz: 160,
    bassGainDb: 6,
    presenceHz: 2600,
    presenceGainDb: 5,
    highCutHz: 6500,
    ringHz: 58,
    ringMix: 0.063,
    combSeconds: 0.0065,
    combFeedback: 0.42,
    combMix: 0.19,
    chorusMix: 0.35,
    echoSeconds: 0.16,
    echoFeedback: 0.28,
    echoMix: 0.21,
    reverbSeconds: 1.8,
    reverbDecay: 2.6,
    reverbMix: 0.17,
    volume: 0.9,
    mouthGain: 4.5,
  },
  ut = { file: `provoked.mp3`, hits: 5, windowSeconds: 3, cooldownSeconds: 20 },
  dt = { file: `idle.mp3`, afterSeconds: 30 },
  ft = { files: [`bugs.mp3`, `bugs-2.mp3`, `bugs-3.mp3`], kills: 5 },
  pt = { file: `mute.mp3` },
  mt = { file: `finale.mp3` },
  ht = { greetings: [`return.mp3`], finales: [`count.mp3`] },
  gt = [
    { seconds: 0.018, depth: 0.003, rateHz: 0.6 },
    { seconds: 0.027, depth: 0.004, rateHz: 0.43 },
  ],
  _t = [{ at: 0.4, width: 0.08, depth: 0.18 }],
  vt = { seconds: 0.05, overlap: 4, searchSeconds: 0.008 },
  yt = `pitch shifter stopped`,
  bt = new Map(),
  xt = null,
  St = 0,
  Ct = ({ data: e }) => {
    (bt.get(e.id)?.resolve(e.layers), bt.delete(e.id));
  },
  wt = (e) => {
    for (let { reject: t } of bt.values()) t(e);
    (bt.clear(), xt?.terminate(), (xt = null));
  },
  Tt = () => (
    xt ||
      ((xt = new Worker(new URL(`/assets/pitchWorker-BgcYxovX.js`, `` + import.meta.url), { type: `module` })),
      xt.addEventListener(`message`, Ct),
      xt.addEventListener(`error`, wt)),
    xt
  ),
  Et = () => wt(Error(yt)),
  Dt = (e, t, n, r) =>
    new Promise((i, a) => {
      ((St += 1),
        bt.set(St, { resolve: i, reject: a }),
        Tt().postMessage({ id: St, source: e, shape: t, pitches: n, sags: r }));
    }),
  Ot = 2,
  kt = (e, t, n) => {
    let r = Math.floor(e.sampleRate * t),
      i = e.createBuffer(Ot, r, e.sampleRate);
    for (let e = 0; e < Ot; e += 1) {
      let t = i.getChannelData(e);
      for (let e = 0; e < r; e += 1) t[e] = (Math.random() * 2 - 1) * (1 - e / r) ** n;
    }
    return i;
  },
  At = 512,
  jt = 0.04,
  Mt = 4,
  Nt = (e, t) => {
    let n = e.createBufferSource();
    return ((n.buffer = t), n);
  },
  Pt = (e, t, n = e.destination) => {
    let r = Nt(e, t.main),
      i = Nt(e, t.sub),
      a = We(e, lt.growlHz),
      o = We(e, lt.ringHz),
      s = [a, o],
      c = B(e, 1),
      l = Ue(e, `lowpass`, lt.highCutHz),
      u = B(e, 0),
      d = B(e, 1),
      f = B(e, 1),
      p = qe(e, lt.combSeconds, lt.combFeedback),
      m = qe(e, lt.echoSeconds, lt.echoFeedback),
      h = e.createConvolver(),
      g = e.createAnalyser(),
      _ = e.createDynamicsCompressor(),
      v = B(e, lt.volume),
      y = new Float32Array(At),
      b = Ue(e, `peaking`, lt.presenceHz, lt.presenceGainDb);
    ((g.fftSize = At),
      (h.buffer = kt(e, lt.reverbSeconds, lt.reverbDecay)),
      r.connect(B(e, lt.mainGain)).connect(c),
      i.connect(B(e, lt.subGain)).connect(c),
      r.connect(g),
      a.connect(B(e, lt.growlDepth)).connect(c.gain),
      c
        .connect(Ue(e, `lowshelf`, lt.bassHz, lt.bassGainDb))
        .connect(Ke(e, lt.drive))
        .connect(b)
        .connect(l)
        .connect(d),
      l.connect(u).connect(B(e, lt.ringMix)).connect(d),
      o.connect(u.gain),
      d.connect(f),
      d.connect(p).connect(B(e, lt.combMix)).connect(f));
    for (let { seconds: t, depth: n, rateHz: r } of gt) {
      let i = Ge(e, t),
        a = We(e, r);
      (a.connect(B(e, n)).connect(i.delayTime), d.connect(i).connect(B(e, lt.chorusMix)).connect(f), s.push(a));
    }
    (f.connect(_),
      f.connect(m).connect(B(e, lt.echoMix)).connect(_),
      f.connect(h).connect(B(e, lt.reverbMix)).connect(_),
      _.connect(v).connect(n));
    let x = t.main.duration,
      S = x + lt.reverbSeconds,
      C = 0;
    return {
      seconds: S,
      start(e) {
        ((C = e + x), r.start(e), i.start(e));
        for (let t of s) (t.start(e), t.stop(e + S));
      },
      stop() {
        ((C = 0), v.gain.setTargetAtTime(0, e.currentTime, jt));
        for (let t of [r, i, ...s])
          try {
            t.stop(e.currentTime + jt * Mt);
          } catch {
            continue;
          }
      },
      level() {
        if (e.currentTime > C) return 0;
        g.getFloatTimeDomainData(y);
        let t = 0;
        for (let e of y) t += e * e;
        return Math.min(1, Math.sqrt(t / At) * lt.mouthGain);
      },
    };
  },
  Ft = `content-length`,
  It = async (e, t) => {
    let n = await fetch(e);
    if (!n.ok) return null;
    let r = Number(n.headers.get(Ft));
    if (!n.body || !(r > 0)) return n.arrayBuffer();
    let i = n.body.getReader(),
      a = [],
      o = 0;
    for (;;) {
      let { done: e, value: n } = await i.read();
      if (e) break;
      (a.push(n), (o += n.length), t?.(Math.min(o / r, 1)));
    }
    return new Blob(a).arrayBuffer();
  },
  Lt = 0.03,
  Rt = 0.04,
  zt = (e, t, n) => {
    let r = 0;
    for (let t of e) r = Math.max(r, Math.abs(t));
    if (r === 0) return e;
    let i = r * Lt,
      a = Math.floor(t * Rt),
      o = 0,
      s = e.length - 1;
    for (; Math.abs(e[o]) < i;) o += 1;
    for (; Math.abs(e[s]) < i;) --s;
    let c = e.slice(Math.max(0, o - a), Math.min(e.length, s + a + 1)),
      l = n / r;
    for (let e = 0; e < c.length; e += 1) c[e] *= l;
    return c;
  },
  Bt = 44100,
  Vt = 2,
  Ht = 0.5,
  Ut = (e, t) => {
    let n = new AudioBuffer({ length: e.length, sampleRate: t, numberOfChannels: 1 });
    return (n.copyToChannel(e, 0), n);
  },
  Wt = async (e, t) => {
    let n = await It(e, (e) => t?.(e * Ht));
    if (!n) return null;
    t?.(Ht);
    let r = await new OfflineAudioContext(1, 1, Bt).decodeAudioData(n),
      { sampleRate: i } = r;
    return { samples: zt(r.getChannelData(0), i, lt.sourcePeak), sampleRate: i };
  },
  Gt = async (e, t) => {
    let [n, r] = await Dt(
      e,
      {
        speed: lt.speed,
        grainLength: Math.floor(t * vt.seconds),
        overlap: vt.overlap,
        search: Math.floor(t * vt.searchSeconds),
      },
      [lt.pitch, lt.pitch / Vt ** lt.subOctaves],
      _t,
    );
    return { main: Ut(n, t), sub: Ut(r, t) };
  },
  Kt = async (e, t) => {
    let n = await Wt(e, t);
    return n ? Gt(n.samples, n.sampleRate) : null;
  },
  qt = () => new Promise((e) => setTimeout(e)),
  Jt = (e, t, n) => {
    let r = null,
      i = null,
      a = () => (
        (r ??= Kt(`/${t}`, n)
          .catch(() => null)
          .finally(() => n?.(1))),
        r
      );
    return {
      preload: a,
      async play() {
        let t = e.unlock(),
          n = await a();
        return (
          await qt(),
          !n || !t || t.state === `closed`
            ? 0
            : ((i = Pt(t, n, e.output())), i.start(t.currentTime + lt.startDelay), n.main.duration + lt.startDelay)
        );
      },
      level() {
        return i ? i.level() : 0;
      },
      release() {
        ((r = null), (i = null));
      },
    };
  },
  Yt = 1e3,
  Xt = /\.[^.]+$/,
  Zt = (e, t) => (e.length ? e[Math.floor(Math.random() * e.length)] : t),
  Qt = (e, t, n, r = !1) => {
    let i = ct[n] ?? ``,
      a = (n) => Jt(e, `${st}${n.replace(Xt, `${i}$&`)}`, t?.add()),
      o = a(r ? Zt(ht.greetings, lt.file) : lt.file),
      s = a(ut.file),
      c = a(dt.file),
      l = a(pt.file),
      u = a(r ? Zt(ht.finales, mt.file) : mt.file),
      d = ft.files.map(a),
      f = [o, s, c, l, u, ...d],
      p = [],
      m = [],
      h = !1,
      g = !1,
      _ = !1,
      v = !1,
      y = !1,
      b = 0,
      x = 0,
      S = null,
      C = null,
      w = async (e) => {
        v = !0;
        let t = await e.line.play();
        C = setTimeout(
          () => {
            ((C = null), e.done?.(), p.length > 0 ? w(p.shift()) : (v = !1));
          },
          (t + lt.gapSeconds) * Yt,
        );
      },
      T = (e, t) => {
        (y && e !== u) || (v ? p.some((t) => t.line === e) || p.push({ line: e, done: t }) : w({ line: e, done: t }));
      },
      E = () => {
        ((S = null), !document.hidden && !v && T(c));
      },
      D = () => {
        (clearTimeout(S), (S = setTimeout(E, dt.afterSeconds * Yt)), c.preload());
      },
      O = () => !g && ((g = !0), T(o), !0);
    return {
      preload() {
        for (let e of f) e.preload();
      },
      ready(e) {
        ((h = !0), e && !y && (D(), O()));
      },
      click() {
        h && !y && (D(), O());
      },
      faceHit() {
        if (!h || y) return;
        s.preload();
        let e = performance.now();
        for (m.push(e); m[0] < e - ut.windowSeconds * Yt;) m.shift();
        m.length < ut.hits || e < x || ((m.length = 0), (x = e + ut.cooldownSeconds * Yt), T(s));
      },
      bugKilled() {
        let e = d[Math.floor(b / ft.kills)];
        ((b += 1), e && !y && (e.preload(), b % ft.kills === 0 && T(e)));
      },
      mutePressed() {
        h && !y && (D(), !(O() || _) && ((_ = !0), T(l)));
      },
      hush() {
        ((y = !0), (p.length = 0), clearTimeout(S), (S = null), u.preload());
      },
      sayFinale() {
        return new Promise((e) => {
          T(u, e);
        });
      },
      level() {
        let e = 0;
        for (let t of f) e = Math.max(e, t.level());
        return e;
      },
      dispose() {
        ((y = !0), clearTimeout(S), clearTimeout(C), (S = null), (C = null), (p.length = 0));
        for (let e of f) e.release();
        Et();
      },
    };
  },
  $t = 5,
  en = 3,
  tn = `visibilitychange`,
  nn = ([e, t]) => e + Math.random() * (t - e),
  rn = (e) => {
    let t = Math.floor(e.sampleRate * tt.loopSeconds),
      n = e.createBuffer(1, t, e.sampleRate),
      r = n.getChannelData(0),
      i = e.sampleRate * tt.tickSeconds,
      a = e.sampleRate / tt.rate,
      o = 0;
    for (; o < t;) {
      let e = tt.tickFloor + Math.random() * (1 - tt.tickFloor),
        n = Math.min(Math.floor(i * $t), t - o);
      for (let t = 0; t < n; t += 1) r[o + t] += (Math.random() * 2 - 1) * e * Math.exp(-t / i);
      o += Math.floor(a * (1 - tt.jitter + Math.random() * tt.jitter * 2));
    }
    let s = e.createBufferSource();
    return ((s.buffer = n), (s.loop = !0), s);
  },
  an = (e, t, n) => {
    let r = e.currentTime,
      i = B(e, 0),
      a = We(e, et.mainsHz, `sawtooth`),
      o = Je(e, et.hissSeconds);
    ((o.loop = !0),
      a.connect(Ue(e, `lowpass`, et.bodyHz)).connect(i),
      o
        .connect(Ue(e, `bandpass`, et.hissHz))
        .connect(B(e, et.hissGain))
        .connect(i),
      i.connect(t));
    let s = rn(e),
      c = Ue(e, `bandpass`, tt.toneHz);
    c.Q.value = tt.toneQ;
    let l = B(e, 0),
      u = B(e, +!n);
    (u.gain.setTargetAtTime(1, r, tt.fadeSeconds / en),
      s.connect(c).connect(l).connect(u).connect(t),
      a.start(r),
      o.start(r),
      s.start(r));
    let d = (t) => {
      let n = e.currentTime;
      (i.gain.cancelScheduledValues(n),
        i.gain.setTargetAtTime(t ? et.volume : 0, n, (t ? et.fadeSeconds : et.dropSeconds) / en));
    };
    return {
      hum: d,
      type() {
        let t = e.currentTime;
        (l.gain.cancelScheduledValues(t),
          l.gain.setTargetAtTime(tt.volume, t, tt.attackSeconds),
          l.gain.setTargetAtTime(0, t + tt.holdSeconds, tt.releaseSeconds));
      },
      stop() {
        let t = e.currentTime;
        (d(!1), l.gain.cancelScheduledValues(t), l.gain.setTargetAtTime(0, t, tt.releaseSeconds));
        for (let e of [a, o, s]) e.stop(t + et.dropSeconds * en);
      },
    };
  },
  on = (e, t, n = e.destination) => {
    let r = B(e, it.volume),
      i = We(e, it.thumpFromHz);
    (Xe(i.frequency, it.thumpFromHz, it.thumpToHz, t, it.thumpSeconds),
      i.connect(Ye(e, it.thumpGain, t, it.thumpSeconds)).connect(r));
    let a = We(e, it.whineFromHz, `triangle`);
    (Xe(a.frequency, it.whineFromHz, it.whineToHz, t, it.whineSeconds),
      a.connect(Ye(e, it.whineGain, t, it.whineSeconds)).connect(r));
    let o = Je(e, it.crackleSeconds),
      s = Ue(e, `bandpass`, it.crackleFromHz);
    (Xe(s.frequency, it.crackleFromHz, it.crackleToHz, t, it.crackleSeconds),
      o
        .connect(s)
        .connect(Ye(e, it.crackleGain, t, it.crackleSeconds))
        .connect(r));
    let c = t + it.popDelay,
      l = We(e, it.popFromHz);
    (Xe(l.frequency, it.popFromHz, it.popToHz, c, it.popSeconds),
      l.connect(Ye(e, it.popGain, c, it.popSeconds)).connect(r),
      r.connect(n),
      i.start(t),
      i.stop(t + it.thumpSeconds),
      a.start(t),
      a.stop(t + it.whineSeconds),
      o.start(t),
      l.start(c),
      l.stop(c + it.popSeconds));
  },
  sn = (e, t, n = e.destination) => {
    let r = B(e, rt.volume),
      i = Je(e, rt.tickSeconds),
      a = Ue(e, `bandpass`, rt.tickHz);
    ((a.Q.value = rt.tickQ),
      i
        .connect(a)
        .connect(Ye(e, rt.tickGain, t, rt.tickSeconds))
        .connect(r));
    let o = We(e, rt.thumpFromHz);
    (Xe(o.frequency, rt.thumpFromHz, rt.thumpToHz, t, rt.thumpSeconds),
      o.connect(Ye(e, rt.thumpGain, t, rt.thumpSeconds)).connect(r),
      r.connect(n),
      i.start(t),
      o.start(t),
      o.stop(t + rt.thumpSeconds));
  },
  cn = (e, t, n = e.destination) => {
    let r = B(e, nt.volume),
      i = We(e, nt.thudFromHz);
    (Xe(i.frequency, nt.thudFromHz, nt.thudToHz, t, nt.thudSeconds),
      i.connect(Ye(e, nt.thudGain, t, nt.thudSeconds)).connect(r));
    let a = Ye(e, nt.droneGain, t, nt.droneSeconds),
      o = nt.droneHz.map((t) => We(e, t, `sawtooth`));
    for (let e of o) e.connect(a);
    a.connect(Ue(e, `lowpass`, nt.droneCutHz)).connect(r);
    let s = Je(e, nt.glitchSeconds),
      c = Ue(e, `bandpass`, nt.glitchHz[0]);
    c.Q.value = nt.glitchQ;
    let l = B(e, 0),
      u = nt.glitchSeconds - nt.glitchDelay - nt.glitchLength[1];
    for (let e = 0; e < nt.glitches; e += 1) {
      let e = t + nt.glitchDelay + Math.random() * u;
      (c.frequency.setValueAtTime(nn(nt.glitchHz), e),
        l.gain.setValueAtTime(nt.glitchGain * nn([0.5, 1]), e),
        l.gain.setValueAtTime(0, e + nn(nt.glitchLength)));
    }
    (s.connect(c).connect(l).connect(r), r.connect(n), i.start(t), i.stop(t + nt.thudSeconds));
    for (let e of o) (e.start(t), e.stop(t + nt.droneSeconds));
    s.start(t);
  },
  ln = (e) => {
    let t = null,
      n = !1,
      r = !1,
      i = () => {
        let n = e.unlock();
        n && !t && ((t = an(n, e.output(), !r)), t.hum(!document.hidden), (r = !0));
      },
      a = () => t?.hum(!document.hidden);
    return (
      document.addEventListener(tn, a),
      {
        wake() {
          n && i();
        },
        on() {
          ((n = !0), r && i());
        },
        type() {
          t?.type();
        },
        press() {
          let t = e.unlock();
          t && sn(t, t.currentTime, e.output());
        },
        alarm() {
          let t = r ? e.unlock() : null;
          t && cn(t, t.currentTime + nt.delaySeconds, e.output());
        },
        off() {
          ((n = !1), t?.stop(), (t = null));
          let i = r ? e.unlock() : null;
          i && on(i, i.currentTime, e.output());
        },
        dispose() {
          (document.removeEventListener(tn, a), (t = null));
        },
      }
    );
  },
  un = ([e, t]) => e + Math.random() * (t - e),
  dn = (e, t, n = e.destination) => {
    let r = Ke(e, Qe.drive),
      i = B(e, Qe.volume),
      a = qe(e, Qe.echoSeconds, Qe.echoFeedback),
      o = We(e, Qe.thudFromHz);
    (Xe(o.frequency, Qe.thudFromHz, Qe.thudToHz, t, Qe.thudSeconds),
      o.connect(Ye(e, Qe.thudGain, t, Qe.thudSeconds)).connect(r),
      o.start(t),
      o.stop(t + Qe.thudSeconds));
    let s = Je(e, Qe.crashSeconds);
    (s
      .connect(Ue(e, `highpass`, Qe.crashHz))
      .connect(Ye(e, Qe.crashGain, t, Qe.crashSeconds))
      .connect(r),
      s.start(t));
    let c = We(e, Qe.growlFromHz, `sawtooth`);
    (Xe(c.frequency, Qe.growlFromHz, Qe.growlToHz, t, Qe.growlSeconds),
      c.connect(Ye(e, Qe.growlGain, t, Qe.growlSeconds)).connect(r),
      c.start(t),
      c.stop(t + Qe.growlSeconds));
    for (let n = 0; n < Qe.shards; n += 1) {
      let n = t + Math.random() ** 2 * Qe.shardSpan,
        r = un(Qe.shardSeconds),
        a = We(e, un([Qe.shardMinHz, Qe.shardMaxHz]), `triangle`);
      (a.connect(Ye(e, Qe.shardGain, n, r)).connect(i), a.start(n), a.stop(n + r));
    }
    (r.connect(i), i.connect(n), i.connect(a).connect(B(e, Qe.echoMix)).connect(n));
  },
  fn = (e) => ({
    play() {
      let t = e.unlock();
      t && dn(t, t.currentTime, e.output());
    },
  }),
  pn = [
    { code: `uk`, label: `UA` },
    { code: `ru`, label: `RU` },
    { code: `en`, label: `EN` },
  ],
  mn = {
    uk: {
      start: `Start`,
      enter: `Увійти`,
      mute: `Вимкнути звук`,
      bugs: `Знищено багів`,
      language: `Мова`,
      confirmLines: [`Ви хочете`, `змінити`, `мову?`],
      yes: `Так`,
      no: `Ні`,
      sound: `Звук`,
      demon: `Поговорити з демоном`,
      menu: `Меню`,
      nav: [`Проєкти`, `Про мене`, `Стек`, `Досвід`, `Контакти`],
      cta: `Обговорити проєкт`,
      heroKicker: ` — frontend-інженер`,
      heroTitle: `Код, що оживає`,
      heroText: `Вісім років у вебі та iGaming — складні макети, короткі цикли й дедлайни, що не рухаються. Розробляю проєкти, де дизайн тримається на кожному брейкпоінті: 3D-сцени на Three.js, анімація на GSAP, міні-ігри на PIXI.js та Phaser. Швидкодію міряю під час роботи, а не після. Працюю і сам — від Figma до релізу, і в команді з дизайнерами, бекендом і QA.`,
      heroFacts: [
        [`8`, `років у вебі`],
        [`100+`, `проєктів`],
        [`1:1`, `напряму з клієнтом`],
      ],
      worksKicker: `Роботи`,
      worksTitle: `Крізь розлом`,
      worksHint: `Кожен проєкт — розлом у стіні коду. Натисни — і провалишся всередину.`,
      worksOpen: `відкрити сайт`,
      portalBack: `Назад`,
      portalNewTab: `Відкрити в новій вкладці`,
      caseAbout: `Про проєкт`,
      works: {
        akvareli: {
          title: `Група компаній «Акварель»`,
          text: `Сайт одеського забудовника: житлові комплекси в чотирьох районах, підбір квартир, розстрочка та «єОселя».`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `Промосторінка Slots City — «перший банк, створений для пограбування»: сейфи з призовими фондами, які гравець зламує кодом, слайдер і ліміт спроб.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `Сайт WMG International — програматик-монетизація ігор і застосунків: рекламна біржа, header bidding на Prebid.js, реклама в мобільних іграх, на CTV, Xbox і PlayStation.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `Промосторінка благодійного мегастріму N-iX з «Повернись живим» та OKKO: ціль у 10 000 000 ₴, кнопки донату й трансляції, етапи розвитку української музики.`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `Сайт нью-йоркського агентства нерухомості: пошук житла для купівлі, оренди й продажу, ексклюзивні об’єкти, агенти, блог і чотири мови.`,
        },
        tankHero: {
          title: `Tank Hero`,
          text: `Браузерна гра: танк їде на WASD, башта стежить за курсором, стрільба мишею, з ворогів падають аптечки, набої й важкі снаряди. Мета — 5000 очок.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `Промосторінка стріму N-iX і JustJoin IT про IT-ринок Польщі у 2025: ведучі, гості й теми ефіру, звіт «Co z tym Eldorado» для завантаження.`,
        },
      },
      allWorks: `Усі проєкти`,
      allWorksKicker: `Усі проєкти`,
      allWorksTitle: `Усі роботи`,
      allWorksHint: `Промо, лендинги, сайти, ігри й 3D-сцени — з фільтром за типом, галуззю, замовником і технологіями. Частина проєктів — під NDA, їх тут немає.`,
      allWorksBack: `На головну`,
      pages: `Сторінки проєктів`,
      pagePrev: `Попередня сторінка`,
      pageNext: `Наступна сторінка`,
      page: `Сторінка`,
      workFilter: `Фільтр`,
      workFilterAll: `Усі`,
      workFilterReset: `Скинути фільтр`,
      workFilterFound: `Знайдено`,
      workFilterEmpty: `За цим фільтром робіт немає.`,
      workFilterFacets: { type: `Тип`, industry: `Галузь`, client: `Замовник`, tech: `Технології` },
      workFilterValues: {
        type: {
          landing: `Лендинг`,
          promo: `Промо`,
          site: `Сайт`,
          shop: `Магазин`,
          game: `Гра`,
          email: `Email-лист`,
          ui: `Інтерфейс`,
          scene: `3D-сцена`,
        },
        industry: {
          igaming: `iGaming`,
          it: `IT і HR`,
          charity: `Благодійність`,
          gov: `Держсектор`,
          fintech: `Фінтех`,
          retail: `Рітейл`,
          adtech: `Adtech`,
          services: `Послуги`,
          defense: `Оборона`,
          realestate: `Нерухомість`,
          consulting: `Консалтинг`,
          personal: `Особистий бренд`,
          lab: `Експерименти`,
        },
        client: { akvarel: `Акварель`, water: `Держводагентство`, own: `Власні` },
      },
      moreWorks: {
        gameSlots: { title: `Slots`, text: `Слот-гра в єгипетському сеттингу: барабани, ставки, анімації виграшу.` },
        tankHero: {
          title: `Tank Hero`,
          text: `Браузерна гра: танк їде на WASD, башта стежить за курсором, стрільба мишею, з ворогів падають аптечки, набої й важкі снаряди. Мета — 5000 очок.`,
        },
        breakTheCode: {
          title: `Break the Code`,
          text: `Сайт конференції N-iX для жінок у tech у Медельїні: програма, реєстрація учасниць і менторок.`,
        },
        leadProgram: {
          title: `N-iX Lead Program`,
          text: `Лендинг програми розвитку лідерів N-iX: про програму, результати пілоту і заявка на новий потік.`,
        },
        concert: {
          title: `«Типовий корпоратив»`,
          text: `Всеукраїнський благодійний онлайн-корпоратив N-iX і DOU з живими виступами гуртів.`,
        },
        donationNation: {
          title: `N-iX Donation Nation`,
          text: `Благодійний марафон N-iX і DOU: лічильник зібраних коштів, стрім і донати.`,
        },
        fintiko: {
          title: `Fintiko`,
          text: `Сайт фінтех-сервісу для керування транзакціями: рахунки, оплата за посиланням, відкритий банкінг.`,
        },
        bordoFlowers: {
          title: `Bordo Flowers`,
          text: `Сайт преміальної квіткової крамниці в Чикаго: каталог, підписка, доставка в день замовлення.`,
        },
        ctendo: { title: `Ctendo`, text: `Сайт групи рекламних технологій: напрями, партнери, матеріали.` },
        shargo: {
          title: `Sam Shargo`,
          text: `Особистий сайт коуча Сема Шарго: досвід, благодійність, нотатки й контакти.`,
        },
        screwsAppliance: {
          title: `Screws Appliance Repair`,
          text: `Сайт сервісу ремонту побутової техніки в Нью-Йорку і Джерсі-Сіті: послуги, ремонт у день звернення, онлайн-запис і відгуки.`,
        },
        bubbles: { title: `Bubble Shaders`, text: `Інтерактивна сцена з бульбашками, намальованими шейдерами.` },
        lions: { title: `Lions`, text: `3D-сцена з полігональними левами, яких можна обертати мишею.` },
        tapki: {
          title: `Parimatch × Sports.ru`,
          text: `Промо Parimatch: конкурс на кастомні кросівки за власним ескізом.`,
        },
        tiptoro: { title: `Tiptoro`, text: `Інтерфейс букмекерської лінії: події, коефіцієнти, купон ставки.` },
        gamaBamboo: {
          title: `Gama Casino`,
          text: `Промо Gama Casino: регулярні роздачі фриспінів і бонусів на депозити.`,
        },
        breakTheCode2: {
          title: `Break the Code · AI`,
          text: `Сайт першої в Колумбії конференції з прагматичного ШІ від N-iX, Ruta N і AWS у Медельїні: спікери, програма, таймер і запис на відео сесій.`,
        },
        nix20: {
          title: `What’s Wrong With IT?`,
          text: `Промосторінка 11-годинного самоіронічного благодійного стріму N-iX з блогером Дімою Малєєвим: стереотипи про IT, холівари і збір 2 000 000 ₴ на дрони з «Повернись живим».`,
        },
        itIsFine: {
          title: `It is fine`,
          text: `Промосторінка благодійного стріму N-iX і «Підпільного стендапу»: 20 коміків, п’ять форматів і донати для армії.`,
        },
        onboarding: {
          title: `N-iX Onboarding`,
          text: `Сторінка онбордингу N-iX для нових колег: що зробити до першого дня, як він пройде і що далі.`,
        },
        history23: {
          title: `ПРО100 ГЕРОЇ`,
          text: `Сайт 23 ОМБр до книги історій героїв бригади: інтерактивна карта підрозділів, картки бійців із бойовим шляхом, вакансії й новини.`,
        },
        screwsHvac: {
          title: `Screw’s HVAC Services`,
          text: `Сайт сервісу комерційного HVAC у Нью-Йорку: ремонт, обслуговування й заміна кліматичних систем будівель, ціни та заявка на кошторис.`,
        },
        veraWheel: {
          title: `Vera Casino`,
          text: `Промо Vera Casino: колесо бонусів — фриспіни й бонуси на депозит за один оберт.`,
        },
        dogtraff: {
          title: `DogTraff`,
          text: `Кабінет рекламної платформи DogTraff: баланс, витрати й кліки, графіки трафіку, гео й ОС, кампанії та фінанси.`,
        },
        easyHome: {
          title: `Easy Home`,
          text: `Сайт одеської компанії з управління житловою й комерційною нерухомістю: послуги, відгуки, блог і заявка.`,
        },
        getrtb: {
          title: `GetRTB`,
          text: `Сайт рекламної біржі OpenRTB з white label-рішенням: можливості платформи, дата-центри, інтеграції, кейси й запит демо.`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `Промосторінка Slots City — «перший банк, створений для пограбування»: сейфи з призовими фондами, які гравець зламує кодом, слайдер і ліміт спроб.`,
        },
        slotCityHb: {
          title: `День народження Slots City`,
          text: `Промосторінка благодійного стріму Slots City на день народження: 10 мрій глядачів і 500 дронів з тепловізорами для штурмової бригади.`,
        },
        scaleRight: {
          title: `Scale Right Partners`,
          text: `Сайт консалтингу для власників малого бізнесу: стратегічне планування, коучинг і спільнота за системою P.R.O.F.I.T.`,
        },
        rtUkraine: {
          title: `Rise Technologies`,
          text: `Сайт розробника систем зв’язку для поля бою: цифровий зв’язок, радіомодулі для БпЛА із захистом від РЕБ, перетворювачі частот.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `Сайт WMG International — програматик-монетизація ігор і застосунків: рекламна біржа, header bidding на Prebid.js, реклама в мобільних іграх, на CTV, Xbox і PlayStation.`,
        },
        akvareli: {
          title: `Група компаній «Акварель»`,
          text: `Сайт одеського забудовника: житлові комплекси в чотирьох районах, підбір квартир, розстрочка та «єОселя».`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `Сайт нью-йоркського агентства нерухомості: пошук житла для купівлі, оренди й продажу, ексклюзивні об’єкти, агенти, блог і чотири мови.`,
        },
        oouvr: {
          title: `Басейнове управління водних ресурсів`,
          text: `Сайт Басейнового управління водних ресурсів річок Причорномор’я та нижнього Дунаю: новини, структура, закупівлі, звернення громадян і доступ до публічної інформації.`,
        },
        wmgReport2025: {
          title: `adWMG 2025 Year in Review`,
          text: `HTML-лист з підсумками 2025 року adWMG: дохід +473 %, ключові цифри і кнопка завантаження річного звіту.`,
        },
        wmgLunch: {
          title: `adWMG New Year Lunch`,
          text: `HTML-запрошення на новорічний ланч adWMG у Лондоні: дата, місце, кнопка підтвердження і побажання до меню.`,
        },
        wmgEvents: {
          title: `adWMG at Industry Events`,
          text: `HTML-дайджест участі adWMG у галузевих подіях: Pocket Gamer Connects London, ланч із партнерами, фото.`,
        },
        wmgDecember: {
          title: `WMG International Updates`,
          text: `HTML-розсилка WMG International: нові паблішери з типом медіа, гео й eCPM, оновлення продуктів і запрошення на подію.`,
        },
        wmgDecon: {
          title: `WMG at PG Connects`,
          text: `HTML-лист після PG Connects і Gamesforum: фотозвіт зі стендів і запис на зустріч з командою.`,
        },
        wmgDevcom: {
          title: `adWMG at Gamescom & Devcom`,
          text: `HTML-запрошення на зустріч з adWMG на Devcom і Gamescom 2025 у Кельні: послуги і запис на зустріч.`,
        },
        wmgDmexco: {
          title: `adWMG at DMEXCO 2025`,
          text: `HTML-запрошення на стенд adWMG на DMEXCO 2025 у Кельні: SSP, DSP і запис на зустріч.`,
        },
        wmgNewYear: {
          title: `adWMG Happy New Year 2026`,
          text: `Новорічний HTML-лист adWMG: привітання партнерам і запрошення зустрітися взимку.`,
        },
        wmgMobidictum: {
          title: `adWMG at Mobidictum 2025`,
          text: `HTML-запрошення на зустріч з adWMG на Mobidictum 2025 у Стамбулі: напрями роботи і запис на зустріч.`,
        },
        wmgWhatsNew: {
          title: `What’s New at adWMG`,
          text: `HTML-дайджест новин adWMG: партнерство з Venatus, участь у подіях галузі і кнопки до кейсів.`,
        },
        gamerallNewAccount: {
          title: `GamerAll: New account`,
          text: `Вітальний HTML-лист GamerAll після реєстрації: дані акаунта і кнопка до профілю.`,
        },
        gamerallOrder: {
          title: `GamerAll: Order details`,
          text: `Транзакційний HTML-лист GamerAll з деталями замовлення: товари, ціна, кількість і підсумок.`,
        },
        gamerallPaid: {
          title: `GamerAll: Payment received`,
          text: `Транзакційний HTML-лист GamerAll про отриману оплату: таблиця з даними замовлення і кнопка до історії.`,
        },
        gamerallPaymentError: {
          title: `GamerAll: Payment error`,
          text: `Транзакційний HTML-лист GamerAll про помилку оплати: кошти не списано, допомога в лайв-чаті.`,
        },
        gamerallDelivered: {
          title: `GamerAll: Order delivered`,
          text: `Транзакційний HTML-лист GamerAll про доставку замовлення: кнопка до ключа гри і прохання оцінити на Trustpilot.`,
        },
        gamerallCanceled: {
          title: `GamerAll: Order canceled`,
          text: `Транзакційний HTML-лист GamerAll про скасування замовлення: повернення коштів і кнопка зв’язку з підтримкою.`,
        },
        gamerallRefunded: {
          title: `GamerAll: Refund`,
          text: `Транзакційний HTML-лист GamerAll про повернення коштів за замовлення з кнопкою зв’язку з підтримкою.`,
        },
        gamerallMessage: {
          title: `GamerAll: Message about an order`,
          text: `Транзакційний HTML-лист GamerAll з повідомленням щодо замовлення, на який можна відповісти напряму.`,
        },
        gamerallSupport: {
          title: `GamerAll: Customer support`,
          text: `Транзакційний HTML-лист GamerAll з повідомленням від підтримки і кнопкою відповіді.`,
        },
        gamerallReset: {
          title: `GamerAll: Password reset`,
          text: `Транзакційний HTML-лист GamerAll для скидання пароля: кнопка скидання і поради з безпеки акаунта.`,
        },
        gamerallPassword: {
          title: `GamerAll: Password changed`,
          text: `Транзакційний HTML-лист GamerAll про зміну пароля з кнопкою зв’язку з підтримкою.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `Промосторінка благодійного мегастріму N-iX з «Повернись живим» та OKKO: ціль у 10 000 000 ₴, кнопки донату й трансляції, етапи розвитку української музики.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `Промосторінка стріму N-iX і JustJoin IT про IT-ринок Польщі у 2025: ведучі, гості й теми ефіру, звіт «Co z tym Eldorado» для завантаження.`,
        },
      },
      aboutKicker: `Про мене`,
      aboutTitle: `Верстаю, анімую, запускаю`,
      aboutText: [
        `Я frontend-інженер. Вісім років у вебі, з них шість — в iGaming і беттингу всередині продуктових команд. За плечима вісім років верстки: семантичний HTML, БЕМ, модульний SCSS і макети, що збігаються з дизайном на кожному брейкпоінті й тримаються в усіх браузерах.`,
        `Анімація — моя сильна сторона: Three.js для 3D-сцен та інтерактивних секцій, GSAP для руху інтерфейсу й прокрутки, PIXI.js і Phaser для міні-ігор і playable-реклами з повним циклом анімації. Швидкодію профілюю під час роботи, а не після.`,
        `Поруч із цим — застосунки на Vue, проєкти на Angular, сайти на WordPress від магазинів до нерухомості й Telegram-боти на Python. Від Figma й Photoshop до продакшну — нарізка, спрайти, експорт — у дедлайни, що не рухаються. Claude Code — частина щоденної роботи: швидко заходжу в чужий код і новий стек.`,
      ],
      aboutMeta: [
        [`Де я`, `Кишинів, Молдова — працюю віддалено`],
        [`Мови`, `Українська — рідна, російська — високий рівень, англійська — Upper Intermediate`],
        [`Формат`, `Напряму з клієнтом або в команді з дизайнерами, бекендом і QA`],
      ],
      stackKicker: `Стек`,
      stackTitle: `Чим працюю`,
      stackHint: `Інструменти, з якими здаю проєкти щодня — від верстки до WebGL.`,
      stackGroups: {
        languages: `Мови`,
        graphics: `Графіка`,
        animation: `Анімація`,
        frameworks: `Фреймворки`,
        markup: `Верстка`,
        cms: `CMS`,
        email: `Email`,
        tooling: `Інструменти`,
        design: `Дизайн`,
        ai: `AI`,
      },
      experienceKicker: `Досвід`,
      experienceTitle: `Де я працював`,
      experienceHint: `Продуктові команди, агенції й власні клієнти — вісім років у вебі.`,
      experienceModes: { full: `Повна зайнятість`, part: `Часткова зайнятість`, alongside: `Власні клієнти` },
      experienceAlongside: `Паралельно`,
      experiencePresent: `дотепер`,
      experience: {
        insula: {
          summary: `Продуктова команда в iGaming: лендинги й промо для клієнтів платформи, великий Angular-проєкт і жорсткі дати релізів.`,
          points: [
            `Зайшов у робочий Angular-проєкт із великою кодовою базою й за перші тижні почав закривати задачі в незнайомому коді.`,
            `Розширював наявні компоненти й писав нові, вбудовуючи клієнтські дизайни в стандартні шаблони проєкту.`,
            `Здав понад 30 лендингів для iGaming-клієнтів — з інтерактивними елементами, анімацією й адаптивом під усі екрани.`,
            `Складні макети — у короткі цикли й без технічного боргу у верстці, який зазвичай з’являється в поспіху.`,
            `Оптимізував конвеєр асетів і рендер анімацій, щоб увесь набір сторінок вантажився швидко.`,
            `Працював у великій розподіленій команді з дизайнерами, бекендом і QA під фіксовані дати релізів.`,
          ],
        },
        nix: {
          summary: `Глобальна IT-компанія: сайти подій, промо й продуктові сторінки. Співпраця триває.`,
          points: [
            `Сайти для зовнішніх подій компанії — кожен зі своїм дизайном і функціоналом, від верстки за макетом до робочої збірки на WordPress.`,
            `Інтерактив і анімація під задачу кожної події, а не перенесені з попередньої.`,
            `Налаштував SMTP-розсилки: підтвердження реєстрації й листи тим, хто записався або взаємодіяв із сайтом.`,
            `Підтримую й розвиваю живі сайти подій, коли вимоги змінюються посеред кампанії.`,
            `Працюю над основним сайтом компанії та продуктовими сторінками паралельно з подіями.`,
            `Адаптивна кросбраузерна верстка на кожному проєкті — з однаковою планкою якості.`,
          ],
        },
        wmg: {
          summary: `Програматик-монетизація ігор і застосунків: основний сайт компанії й проєкти для її клієнтів.`,
          points: [
            `Вів основний сайт компанії від і до: стабільність і постійні покращення замість рідкісних редизайнів.`,
            `Проєктував і робив нові модулі й функції, що розширювали можливості сайту.`,
            `Складна анімація: сцени на прокрутці, інтерактивні секції й рух, що тримається на пристроях середнього рівня.`,
            `Адаптивні HTML-розсилки, перевірені в поштових клієнтах, щоб у кожній скриньці виглядали однаково.`,
            `Сайти на замовлення для клієнтів компанії — під їхні вимоги, від верстки до здачі.`,
          ],
        },
        clickable: {
          summary: `Агенція для беттингу та iGaming: сайти, playable-реклама, міні-ігри, банери й листи — найширший спектр задач.`,
          points: [
            `Сайти й лендинги для беттингу та iGaming — від верстки до продакшну.`,
            `Playable-реклама на PIXI.js і Phaser: варіативні сценарії, повний цикл анімації й бюджет рендеру рекламного формату.`,
            `Three.js углиб: завантаження й постановка моделей, керування їхньою анімацією, шейдери для ефектів, які не зробиш текстурами.`,
            `Міні-ігри на чистому JavaScript і PIXI.js — залежно від формату й ліміту ваги.`,
            `Інтерактивні банери, де анімація — суть формату, а не прикраса.`,
            `Застосунки на Vue, сайти на WordPress, Webflow і Tilda для клієнтів, яким важливо самим керувати контентом.`,
            `HTML-листи всіх форматів — промо, транзакційні, розсилки — з перевіркою в поштових клієнтах.`,
          ],
        },
        freelance: {
          company: `Фриланс`,
          role: `Незалежний розробник`,
          summary: `Власні клієнти — від невеликих лендингів до інтерактивних проєктів, напряму й без посередників.`,
          points: [
            `Проєкти від і до: обсяг, верстка, анімація, здача — без передачі на півдорозі.`,
            `Вписуюся в команди з розробниками, з якими не працював раніше, і приймаю їхні конвенції замість того, щоб нав’язувати свої.`,
            `Vue, PIXI.js, Three.js, WordPress, Webflow, Tilda — під те, що клієнту зручно підтримувати потім.`,
            `Claude Code у щоденній роботі: швидко розбираюся в чужому коді й новому стеку, рефакторю, перевіряю своє перед здачею.`,
            `Вчуся на ходу — беру нову технологію й одразу здаю на ній, а не чекаю кінця курсу.`,
            `Напряму з клієнтом: перетворюю розмите завдання на те, що можна зробити, — це частина роботи, а не крок до неї.`,
          ],
        },
      },
      educationKicker: `Освіта`,
      educationTitle: `Де навчався`,
      education: {
        napaMaster: {
          degree: `Магістр`,
          field: `Менеджмент`,
          note: `У 2020 році закінчив повний курс Одеського регіонального інституту державного управління Національної академії державного управління при Президентові України. Кваліфікація — магістр, предметна область «Менеджмент».`,
        },
        napaBachelor: {
          degree: `Бакалавр`,
          field: `Менеджмент`,
          note: `У 2020 році закінчив повний курс інституту НАДУ. Кваліфікація — бакалавр зі спеціалізацією «Менеджмент».`,
        },
        ihuBachelor: {
          degree: `Бакалавр`,
          field: `Комп’ютерна інженерія`,
          note: `У 2018 році закінчив повний курс Міжнародного гуманітарного університету. Кваліфікація — бакалавр, предметна область «Комп’ютерна інженерія», професійна кваліфікація — фахівець з інформаційних технологій.`,
        },
      },
      schools: {
        napa: { name: `Одеський регіональний інститут державного управління НАДУ`, city: `Одеса` },
        ihu: { name: `Міжнародний гуманітарний університет`, city: `Одеса` },
      },
      partnersKicker: `Клієнти`,
      partnersTitle: `З ким працював`,
      partnersHint: `Компанії та бренди, для яких я робив сайти, промо й продукти.`,
      partnerNames: { volunteer: `Волонтерські проєкти для ЗСУ` },
      friendsKicker: `Партнери`,
      friendsTitle: `Працюю в парі`,
      friendsHint: `Люди, з якими роблю проєкти разом: розробка, дизайн, маркетинг. За кожного ручаюся.`,
      friendsSoon: `Coming soon`,
      friendsCard: { hacked: `Hacked`, name: `Ім’я приховано`, role: `Роль засекречено`, status: `Розшифровка даних` },
      hobbiesTitle: `Поза кодом`,
      hobbiesText: `Після роботи я не вимикаюся з екрана повністю — просто змінюю жанр. Ігри вчать тримати увагу й відповідати на кожну дію, LEGO — збирати складне з простих деталей. І те, і інше потім повертається в мої проєкти.`,
      hobbies: {
        games: {
          title: `Комп’ютерні ігри`,
          text: `Граю й дивлюся на ігри очима розробника: як зроблено інтерфейс, звук і відгук на кожне натискання. Звідси чимало ідей для анімацій.`,
        },
        lego: {
          title: `LEGO`,
          text: `Збираю LEGO. Інструкція на сотні кроків — та сама дисципліна, що й у верстці: кожна деталь на своєму місці, інакше далі не зійдеться.`,
        },
        play: {
          title: `Свої іграшки`,
          text: `Іноді механіка з гри не відпускає — і з’являється свій прототип. Зараз це «Ферма»: на комп’ютері можна зіграти просто тут, але це рання альфа — багів і неточностей ще багато.`,
        },
      },
      hobbyPhoto: `Фото скоро`,
      hobbyGame: {
        stage: `Alpha`,
        note: `Рання версія — можливі баги`,
        play: `Грати`,
        full: `На весь екран`,
        close: `Закрити`,
        frame: `гра`,
        soon: `Soon`,
        mobile: `Поки недоступно на мобільних пристроях`,
      },
      hobbySlider: {
        games: { label: `Ігри, в які граю`, prev: `Попередня гра`, next: `Наступна гра` },
        lego: { label: `Моє LEGO`, prev: `Попереднє фото`, next: `Наступне фото` },
      },
      contactKicker: `Контакти`,
      contactTitle: `Напишіть мені`,
      contactHint: `Розкажіть про задачу — відповім особисто, без менеджерів і посередників.`,
      socials: `Соцмережі`,
      owner: ``,
      meta: {
        homeDescription: ` — frontend-інженер: 8 років у вебі та iGaming, 100+ проєктів. 3D-сцени на Three.js, анімація на GSAP, міні-ігри на PIXI.js і Phaser, сайти від Figma до релізу.`,
        worksDescription: `Усі роботи do autor: промо, лендинги, сайти, ігри, email-листи й 3D-сцени для iGaming, IT, благодійності, нерухомості та інших галузей.`,
        privacyDescription: `Які дані збирають форми на site, навіщо, де вони зберігаються і як їх видалити.`,
      },
      like: {
        kicker: `> like.exe`,
        title: `Зачепило?`,
        text: `Тицни в серце з символів — демон порахує. Один лайк з браузера, але для мене він важить більше, ніж здається.`,
        thanks: `Зараховано. Демон задоволено гарчить — дякую, що зазирнули!`,
        button: `Поставити лайк`,
        liked: `Лайк уже стоїть`,
        count: { one: `лайк`, few: `лайки`, many: `лайків`, other: `лайка` },
      },
      cookies: {
        kicker: `> cookies`,
        text: `Сайт рахує відвідування через Google Analytics — знеособлено і без реклами. Дозволите cookies для статистики?`,
        accept: `Дозволити`,
        decline: `Відхилити`,
        more: `Детальніше`,
        label: `Згода на cookies`,
        settings: `Cookies`,
      },
      privacy: `Політика конфіденційності`,
      privacyPage: {
        kicker: `Документи`,
        updated: `Оновлено 29 жовтня 2026 року`,
        sections: [
          {
            title: `Хто обробляє дані`,
            text: [
              `Сайт site і дані, які ви надсилаєте через його форми, належать ao autor. З будь-яких питань щодо ваших даних пишіть у Telegram @site або через форму на сайті.`,
            ],
          },
          {
            title: `Що збирається`,
            text: [
              `Форма «Обговорити проєкт»: ім’я, контакт (email, Telegram або телефон), тип проєкту, бюджет, текст повідомлення, мова сайту та сторінка, з якої надіслано форму.`,
              `Форма «Знайшли баг?»: опис проблеми, контакт (за бажанням), скріншот (за бажанням), адреса сторінки, розмір вікна й екрана, браузер і операційна система, мова сайту.`,
              `Форми захищає від спаму Google reCAPTCHA: коли ви починаєте заповнювати форму, її скрипт отримує від браузера технічні дані (IP-адресу, дані браузера, рухи миші) і може ставити свої cookies. Їх обробляє Google за своєю політикою конфіденційності; мені приходить лише оцінка «людина чи бот».`,
              `Відвідуваність рахує Google Analytics: які сторінки відкривали, звідки прийшли, пристрій, браузер, приблизне місто, прокрутка і кліки за посиланнями. Cookies (_ga) він ставить, лише якщо ви дозволили їх у вікні внизу сайту; без згоди Google отримує тільки знеособлені сигнали без cookies. IP-адресу він не зберігає. Я бачу лише знеособлену статистику; на рекламу ці дані не передаються, реклами на сайті немає. Змінити рішення можна будь-коли кнопкою «Cookies» внизу сайту.`,
            ],
          },
          {
            title: `Навіщо`,
            text: [
              `Тільки щоб відповісти на ваш запит, обговорити й оцінити проєкт або виправити помилку на сайті. Підстава — ваша згода і підготовка до можливої співпраці, а для звітів про баги — мій законний інтерес у справному сайті. Розсилок не роблю, даних нікому не продаю і не передаю для реклами.`,
            ],
          },
          {
            title: `Де зберігаються`,
            text: [
              `Заявки записуються в мою таблицю Google Sheets (Google LLC), а сповіщення про них, разом зі скріншотом бага, приходять мені в Telegram (Telegram Messenger Inc.). Сервери цих сервісів можуть бути за межами України та ЄС; доступ до даних маю лише я.`,
            ],
          },
          {
            title: `Скільки зберігаються`,
            text: [
              `Поки ми спілкуємося або працюємо разом і ще до трьох років після останнього листування — потім видаляю. Раніше — на ваше прохання.`,
            ],
          },
          {
            title: `Що зберігає браузер`,
            text: [
              `Якщо ви поставили лайк, браузер запам’ятовує випадковий код (у cookie та localStorage), а моя таблиця Google Sheets — цей код, дату й мову сайту: так один браузер рахується один раз. Код ні до чого вас не прив’язує. Сайт запам’ятовує у вашому браузері (localStorage) мову, увімкнений звук, те, що вступ уже переглянуто, і лічильник знищених багів. Ці дані не залишають ваш пристрій, і їх можна стерти в налаштуваннях браузера. Хостинг сайту, як і будь-який сервер, може вести технічні журнали запитів (IP-адреса, час, сторінка).`,
            ],
          },
          {
            title: `Ваші права`,
            text: [
              `Ви можете дізнатися, які дані про вас у мене є, виправити чи видалити їх і відкликати згоду — напишіть у Telegram @site, відповім протягом 30 днів. Також ви маєте право звернутися зі скаргою до Уповноваженого Верховної Ради України з прав людини або до органу із захисту даних своєї країни.`,
            ],
          },
          {
            title: `Зміни`,
            text: [`Якщо політика зміниться, нова редакція з’явиться на цій сторінці з новою датою оновлення.`],
          },
        ],
      },
      notFound: {
        title: `Сторінку не знайдено`,
        text: `Такої адреси на сайті немає — можливо, посилання застаріло або в ньому помилка.`,
        home: `На головну`,
      },
      toTop: `Нагору`,
      bugReport: {
        open: `Знайшли баг?`,
        title: `Знайшли баг?`,
        lead: `Опишіть, що пішло не так, і за можливості додайте скріншот. Сторінку, браузер і розмір екрана я побачу сам.`,
        message: `Що сталося`,
        messagePlaceholder: `Що робили, що очікували і що побачили натомість`,
        messageShort: `Опишіть хоча б кількома словами`,
        contact: `Контакт для відповіді`,
        contactPlaceholder: `Необов’язково: email або @нік`,
        contactInvalid: `Вкажіть email, @нік у Telegram або телефон — або залиште поле порожнім`,
        shot: `Скріншот`,
        shotAdd: `Обрати файл`,
        shotHint: `або вставте з буфера: Ctrl+V / ⌘V`,
        shotRemove: `Прибрати скріншот`,
        shotAlt: `Скріншот, який буде надіслано`,
        shotTooBig: `Файл завеликий — до 20 МБ`,
        shotNotImage: `Потрібна картинка: PNG, JPG або WebP`,
        sentTitle: `Дякую, баг у мене!`,
        sentText: `Подивлюся і виправлю. Якщо ви залишили контакт — напишу, коли буде готово.`,
        again: `Ще один баг`,
      },
      form: {
        title: `Обговорити проєкт`,
        lead: `Кілька рядків про задачу — і я повернуся з питаннями або оцінкою.`,
        name: `Ім’я`,
        namePlaceholder: `Як до вас звертатися`,
        contact: `Email або Telegram`,
        contactPlaceholder: `name@mail.com або @nickname`,
        types: `Що потрібно`,
        typeOptions: [`Лендинг`, `Сайт`, `3D / WebGL`, `Гра / playable`, `Анімація`, `Інше`],
        budget: `Бюджет`,
        budgetOptions: [`до $1k`, `$1–3k`, `$3–7k`, `$7k+`, `Поки не знаю`],
        message: `Про проєкт`,
        messagePlaceholder: `Що робимо, терміни, посилання на макети`,
        send: `Надіслати`,
        sending: `Надсилаю…`,
        sentTitle: `Дякую! Бриф у мене.`,
        sentText: `Відповім особисто найближчим часом — на контакт, який ви залишили.`,
        again: `Написати ще`,
        error: `Не вдалося надіслати. Спробуйте ще раз або напишіть у Telegram.`,
        offline: `Форма ще не підключена — напишіть, будь ласка, у Telegram.`,
        required: `Заповніть це поле`,
        contactInvalid: `Вкажіть email, @нік у Telegram або телефон`,
        messageShort: `Напишіть хоча б кілька слів про задачу`,
        nameShort: `Ім’я — хоча б дві літери`,
        nameDigits: `Ім’я — без цифр`,
        consent: `Надсилаючи форму, ви погоджуєтеся з`,
        consentLink: `політикою конфіденційності`,
        captcha: {
          lead: `Сайт захищено reCAPTCHA, діють`,
          privacy: `Політика конфіденційності`,
          and: `та`,
          terms: `Умови використання`,
          tail: `Google.`,
        },
        requiredNote: `Поля із * обов’язкові`,
        close: `Закрити`,
      },
    },
    ru: {
      start: `Start`,
      enter: `Войти`,
      mute: `Выключить звук`,
      bugs: `Уничтожено багов`,
      language: `Язык`,
      confirmLines: [`Вы хотите`, `сменить`, `язык?`],
      yes: `Да`,
      no: `Нет`,
      sound: `Звук`,
      demon: `Поговорить с демоном`,
      menu: `Меню`,
      nav: [`Проекты`, `Обо мне`, `Стек`, `Опыт`, `Контакты`],
      cta: `Обсудить проект`,
      heroKicker: ` — frontend-инженер`,
      heroTitle: `Код, который оживает`,
      heroText: `Восемь лет в вебе и iGaming — сложные макеты, короткие циклы и дедлайны, которые не двигаются. Разрабатываю проекты, где дизайн держится на каждом брейкпоинте: 3D-сцены на Three.js, анимация на GSAP, мини-игры на PIXI.js и Phaser. Скорость меряю во время работы, а не после. Работаю и сам — от Figma до релиза, и в команде с дизайнерами, бэкендом и QA.`,
      heroFacts: [
        [`8`, `лет в вебе`],
        [`100+`, `проектов`],
        [`1:1`, `напрямую с клиентом`],
      ],
      worksKicker: `Работы`,
      worksTitle: `Сквозь разлом`,
      worksHint: `Каждый проект — разлом в стене кода. Нажми — и провалишься внутрь.`,
      worksOpen: `открыть сайт`,
      portalBack: `Назад`,
      portalNewTab: `Открыть в новой вкладке`,
      caseAbout: `О проекте`,
      works: {
        akvareli: {
          title: `Группа компаний «Акварель»`,
          text: `Сайт одесского застройщика: жилые комплексы в четырёх районах, подбор квартир, рассрочка и «єОселя».`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `Промостраница Slots City — «первый банк, созданный для ограбления»: сейфы с призовыми фондами, которые игрок взламывает кодом, слайдер и лимит попыток.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `Сайт WMG International — программатик-монетизация игр и приложений: рекламная биржа, header bidding на Prebid.js, реклама в мобильных играх, на CTV, Xbox и PlayStation.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `Промостраница благотворительного мегастрима N-iX с «Вернись живым» и OKKO: цель в 10 000 000 ₴, кнопки доната и трансляции, этапы развития украинской музыки.`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `Сайт нью-йоркского агентства недвижимости: поиск жилья для покупки, аренды и продажи, эксклюзивные объекты, агенты, блог и четыре языка.`,
        },
        tankHero: {
          title: `Tank Hero`,
          text: `Браузерная игра: танк едет на WASD, башня следит за курсором, стрельба мышью, из врагов выпадают аптечки, патроны и тяжёлые снаряды. Цель — 5000 очков.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `Промостраница стрима N-iX и JustJoin IT о IT-рынке Польши в 2025: ведущие, гости и темы эфира, отчёт «Co z tym Eldorado» для скачивания.`,
        },
      },
      allWorks: `Все проекты`,
      allWorksKicker: `Все проекты`,
      allWorksTitle: `Все работы`,
      allWorksHint: `Промо, лендинги, сайты, игры и 3D-сцены — с фильтром по типу, отрасли, заказчику и технологиям. Часть проектов — под NDA, их здесь нет.`,
      allWorksBack: `На главную`,
      pages: `Страницы проектов`,
      pagePrev: `Предыдущая страница`,
      pageNext: `Следующая страница`,
      page: `Страница`,
      workFilter: `Фильтр`,
      workFilterAll: `Все`,
      workFilterReset: `Сбросить фильтр`,
      workFilterFound: `Найдено`,
      workFilterEmpty: `По этому фильтру работ нет.`,
      workFilterFacets: { type: `Тип`, industry: `Отрасль`, client: `Заказчик`, tech: `Технологии` },
      workFilterValues: {
        type: {
          landing: `Лендинг`,
          promo: `Промо`,
          site: `Сайт`,
          shop: `Магазин`,
          game: `Игра`,
          email: `Email-письмо`,
          ui: `Интерфейс`,
          scene: `3D-сцена`,
        },
        industry: {
          igaming: `iGaming`,
          it: `IT и HR`,
          charity: `Благотворительность`,
          gov: `Госсектор`,
          fintech: `Финтех`,
          retail: `Ритейл`,
          adtech: `Adtech`,
          services: `Услуги`,
          defense: `Оборона`,
          realestate: `Недвижимость`,
          consulting: `Консалтинг`,
          personal: `Личный бренд`,
          lab: `Эксперименты`,
        },
        client: { akvarel: `Акварель`, water: `Госводагентство`, own: `Свои` },
      },
      moreWorks: {
        gameSlots: { title: `Slots`, text: `Слот-игра в египетском сеттинге: барабаны, ставки, анимации выигрыша.` },
        tankHero: {
          title: `Tank Hero`,
          text: `Браузерная игра: танк едет на WASD, башня следит за курсором, стрельба мышью, из врагов выпадают аптечки, патроны и тяжёлые снаряды. Цель — 5000 очков.`,
        },
        breakTheCode: {
          title: `Break the Code`,
          text: `Сайт конференции N-iX для женщин в tech в Медельине: программа, регистрация участниц и менторов.`,
        },
        leadProgram: {
          title: `N-iX Lead Program`,
          text: `Лендинг программы развития лидеров N-iX: о программе, итоги пилота и заявка на новый поток.`,
        },
        concert: {
          title: `«Типовой корпоратив»`,
          text: `Всеукраинский благотворительный онлайн-корпоратив N-iX и DOU с живыми выступлениями групп.`,
        },
        donationNation: {
          title: `N-iX Donation Nation`,
          text: `Благотворительный марафон N-iX и DOU: счётчик собранных средств, стрим и донаты.`,
        },
        fintiko: {
          title: `Fintiko`,
          text: `Сайт финтех-сервиса для управления транзакциями: счета, оплата по ссылке, открытый банкинг.`,
        },
        bordoFlowers: {
          title: `Bordo Flowers`,
          text: `Сайт премиального цветочного магазина в Чикаго: каталог, подписка, доставка в день заказа.`,
        },
        ctendo: { title: `Ctendo`, text: `Сайт группы рекламных технологий: направления, партнёры, материалы.` },
        shargo: {
          title: `Sam Shargo`,
          text: `Личный сайт коуча Сэма Шарго: опыт, благотворительность, заметки и контакты.`,
        },
        screwsAppliance: {
          title: `Screws Appliance Repair`,
          text: `Сайт сервиса ремонта бытовой техники в Нью-Йорке и Джерси-Сити: услуги, ремонт в день обращения, онлайн-запись и отзывы.`,
        },
        bubbles: { title: `Bubble Shaders`, text: `Интерактивная сцена с пузырями, нарисованными шейдерами.` },
        lions: { title: `Lions`, text: `3D-сцена с полигональными львами, которых можно вращать мышью.` },
        tapki: {
          title: `Parimatch × Sports.ru`,
          text: `Промо Parimatch: конкурс на кастомные кроссовки по собственному эскизу.`,
        },
        tiptoro: { title: `Tiptoro`, text: `Интерфейс букмекерской линии: события, коэффициенты, купон ставки.` },
        gamaBamboo: {
          title: `Gama Casino`,
          text: `Промо Gama Casino: регулярные раздачи фриспинов и бонусов на депозиты.`,
        },
        breakTheCode2: {
          title: `Break the Code · AI`,
          text: `Сайт первой в Колумбии конференции по прагматичному ИИ от N-iX, Ruta N и AWS в Медельине: спикеры, программа, таймер и запись на видео сессий.`,
        },
        nix20: {
          title: `What’s Wrong With IT?`,
          text: `Промостраница 11-часового самоироничного благотворительного стрима N-iX с блогером Димой Малеевым: стереотипы об IT, холивары и сбор 2 000 000 ₴ на дроны с «Вернись живым».`,
        },
        itIsFine: {
          title: `It is fine`,
          text: `Промостраница благотворительного стрима N-iX и «Подпольного стендапа»: 20 комиков, пять форматов и донаты для армии.`,
        },
        onboarding: {
          title: `N-iX Onboarding`,
          text: `Страница онбординга N-iX для новых коллег: что сделать до первого дня, как он пройдёт и что дальше.`,
        },
        history23: {
          title: `ПРО100 ГЕРОЇ`,
          text: `Сайт 23 ОМБр к книге историй героев бригады: интерактивная карта подразделений, карточки бойцов с боевым путём, вакансии и новости.`,
        },
        screwsHvac: {
          title: `Screw’s HVAC Services`,
          text: `Сайт сервиса коммерческого HVAC в Нью-Йорке: ремонт, обслуживание и замена климатических систем зданий, цены и заявка на смету.`,
        },
        veraWheel: {
          title: `Vera Casino`,
          text: `Промо Vera Casino: колесо бонусов — фриспины и бонусы на депозит за один оборот.`,
        },
        dogtraff: {
          title: `DogTraff`,
          text: `Кабинет рекламной платформы DogTraff: баланс, расходы и клики, графики трафика, гео и ОС, кампании и финансы.`,
        },
        easyHome: {
          title: `Easy Home`,
          text: `Сайт одесской компании по управлению жилой и коммерческой недвижимостью: услуги, отзывы, блог и заявка.`,
        },
        getrtb: {
          title: `GetRTB`,
          text: `Сайт рекламной биржи OpenRTB с white label-решением: возможности платформы, дата-центры, интеграции, кейсы и запрос демо.`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `Промостраница Slots City — «первый банк, созданный для ограбления»: сейфы с призовыми фондами, которые игрок взламывает кодом, слайдер и лимит попыток.`,
        },
        slotCityHb: {
          title: `День рождения Slots City`,
          text: `Промостраница благотворительного стрима Slots City в день рождения: 10 мечт зрителей и 500 дронов с тепловизорами для штурмовой бригады.`,
        },
        scaleRight: {
          title: `Scale Right Partners`,
          text: `Сайт консалтинга для владельцев малого бизнеса: стратегическое планирование, коучинг и сообщество по системе P.R.O.F.I.T.`,
        },
        rtUkraine: {
          title: `Rise Technologies`,
          text: `Сайт разработчика систем связи для поля боя: цифровая связь, радиомодули для БпЛА с защитой от РЭБ, преобразователи частот.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `Сайт WMG International — программатик-монетизация игр и приложений: рекламная биржа, header bidding на Prebid.js, реклама в мобильных играх, на CTV, Xbox и PlayStation.`,
        },
        akvareli: {
          title: `Группа компаний «Акварель»`,
          text: `Сайт одесского застройщика: жилые комплексы в четырёх районах, подбор квартир, рассрочка и «єОселя».`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `Сайт нью-йоркского агентства недвижимости: поиск жилья для покупки, аренды и продажи, эксклюзивные объекты, агенты, блог и четыре языка.`,
        },
        oouvr: {
          title: `Бассейновое управление водных ресурсов`,
          text: `Сайт Бассейнового управления водных ресурсов рек Причерноморья и нижнего Дуная: новости, структура, закупки, обращения граждан и доступ к публичной информации.`,
        },
        wmgReport2025: {
          title: `adWMG 2025 Year in Review`,
          text: `HTML-письмо с итогами 2025 года adWMG: доход +473 %, ключевые цифры и кнопка загрузки годового отчёта.`,
        },
        wmgLunch: {
          title: `adWMG New Year Lunch`,
          text: `HTML-приглашение на новогодний ланч adWMG в Лондоне: дата, место, кнопка подтверждения и пожелания к меню.`,
        },
        wmgEvents: {
          title: `adWMG at Industry Events`,
          text: `HTML-дайджест участия adWMG в отраслевых событиях: Pocket Gamer Connects London, ланч с партнёрами, фото.`,
        },
        wmgDecember: {
          title: `WMG International Updates`,
          text: `HTML-рассылка WMG International: новые паблишеры с типом медиа, гео и eCPM, обновления продуктов и приглашение на событие.`,
        },
        wmgDecon: {
          title: `WMG at PG Connects`,
          text: `HTML-письмо после PG Connects и Gamesforum: фотоотчёт со стендов и запись на встречу с командой.`,
        },
        wmgDevcom: {
          title: `adWMG at Gamescom & Devcom`,
          text: `HTML-приглашение на встречу с adWMG на Devcom и Gamescom 2025 в Кёльне: услуги и запись на встречу.`,
        },
        wmgDmexco: {
          title: `adWMG at DMEXCO 2025`,
          text: `HTML-приглашение на стенд adWMG на DMEXCO 2025 в Кёльне: SSP, DSP и запись на встречу.`,
        },
        wmgNewYear: {
          title: `adWMG Happy New Year 2026`,
          text: `Новогоднее HTML-письмо adWMG: поздравление партнёрам и приглашение встретиться зимой.`,
        },
        wmgMobidictum: {
          title: `adWMG at Mobidictum 2025`,
          text: `HTML-приглашение на встречу с adWMG на Mobidictum 2025 в Стамбуле: направления работы и запись на встречу.`,
        },
        wmgWhatsNew: {
          title: `What’s New at adWMG`,
          text: `HTML-дайджест новостей adWMG: партнёрство с Venatus, участие в отраслевых событиях и кнопки к кейсам.`,
        },
        gamerallNewAccount: {
          title: `GamerAll: New account`,
          text: `Приветственное HTML-письмо GamerAll после регистрации: данные аккаунта и кнопка в профиль.`,
        },
        gamerallOrder: {
          title: `GamerAll: Order details`,
          text: `Транзакционное HTML-письмо GamerAll с деталями заказа: товары, цена, количество и итог.`,
        },
        gamerallPaid: {
          title: `GamerAll: Payment received`,
          text: `Транзакционное HTML-письмо GamerAll о полученной оплате: таблица с данными заказа и кнопка к истории.`,
        },
        gamerallPaymentError: {
          title: `GamerAll: Payment error`,
          text: `Транзакционное HTML-письмо GamerAll об ошибке оплаты: деньги не списаны, помощь в лайв-чате.`,
        },
        gamerallDelivered: {
          title: `GamerAll: Order delivered`,
          text: `Транзакционное HTML-письмо GamerAll о доставке заказа: кнопка к ключу игры и просьба оценить на Trustpilot.`,
        },
        gamerallCanceled: {
          title: `GamerAll: Order canceled`,
          text: `Транзакционное HTML-письмо GamerAll об отмене заказа: возврат денег и кнопка связи с поддержкой.`,
        },
        gamerallRefunded: {
          title: `GamerAll: Refund`,
          text: `Транзакционное HTML-письмо GamerAll о возврате денег за заказ с кнопкой связи с поддержкой.`,
        },
        gamerallMessage: {
          title: `GamerAll: Message about an order`,
          text: `Транзакционное HTML-письмо GamerAll с сообщением по заказу, на которое можно ответить напрямую.`,
        },
        gamerallSupport: {
          title: `GamerAll: Customer support`,
          text: `Транзакционное HTML-письмо GamerAll с сообщением от поддержки и кнопкой ответа.`,
        },
        gamerallReset: {
          title: `GamerAll: Password reset`,
          text: `Транзакционное HTML-письмо GamerAll для сброса пароля: кнопка сброса и советы по безопасности аккаунта.`,
        },
        gamerallPassword: {
          title: `GamerAll: Password changed`,
          text: `Транзакционное HTML-письмо GamerAll о смене пароля с кнопкой связи с поддержкой.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `Промостраница благотворительного мегастрима N-iX с «Вернись живым» и OKKO: цель в 10 000 000 ₴, кнопки доната и трансляции, этапы развития украинской музыки.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `Промостраница стрима N-iX и JustJoin IT о IT-рынке Польши в 2025: ведущие, гости и темы эфира, отчёт «Co z tym Eldorado» для скачивания.`,
        },
      },
      aboutKicker: `Обо мне`,
      aboutTitle: `Верстаю, анимирую, запускаю`,
      aboutText: [
        `Я frontend-инженер. Восемь лет в вебе, из них шесть — в iGaming и беттинге внутри продуктовых команд. За плечами восемь лет вёрстки: семантический HTML, БЭМ, модульный SCSS и макеты, которые совпадают с дизайном на каждом брейкпоинте и держатся во всех браузерах.`,
        `Анимация — моя сильная сторона: Three.js для 3D-сцен и интерактивных секций, GSAP для движения интерфейса и прокрутки, PIXI.js и Phaser для мини-игр и playable-рекламы с полным циклом анимации. Скорость профилирую во время работы, а не после.`,
        `Рядом с этим — приложения на Vue, проекты на Angular, сайты на WordPress от магазинов до недвижимости и Telegram-боты на Python. От Figma и Photoshop до продакшна — нарезка, спрайты, экспорт — в дедлайны, которые не двигаются. Claude Code — часть ежедневной работы: быстро захожу в чужой код и новый стек.`,
      ],
      aboutMeta: [
        [`Где я`, `Кишинёв, Молдова — работаю удалённо`],
        [`Языки`, `Украинский — родной, русский — высокий уровень, английский — Upper Intermediate`],
        [`Формат`, `Напрямую с клиентом или в команде с дизайнерами, бэкендом и QA`],
      ],
      stackKicker: `Стек`,
      stackTitle: `Чем работаю`,
      stackHint: `Инструменты, с которыми сдаю проекты каждый день — от вёрстки до WebGL.`,
      stackGroups: {
        languages: `Языки`,
        graphics: `Графика`,
        animation: `Анимация`,
        frameworks: `Фреймворки`,
        markup: `Вёрстка`,
        cms: `CMS`,
        email: `Email`,
        tooling: `Инструменты`,
        design: `Дизайн`,
        ai: `AI`,
      },
      experienceKicker: `Опыт`,
      experienceTitle: `Где я работал`,
      experienceHint: `Продуктовые команды, агентства и свои клиенты — восемь лет в вебе.`,
      experienceModes: { full: `Полная занятость`, part: `Частичная занятость`, alongside: `Свои клиенты` },
      experienceAlongside: `Параллельно`,
      experiencePresent: `по сей день`,
      experience: {
        insula: {
          summary: `Продуктовая команда в iGaming: лендинги и промо для клиентов платформы, большой Angular-проект и жёсткие даты релизов.`,
          points: [
            `Зашёл в рабочий Angular-проект с большой кодовой базой и за первые недели начал закрывать задачи в незнакомом коде.`,
            `Расширял существующие компоненты и писал новые, встраивая клиентские дизайны в стандартные шаблоны проекта.`,
            `Сдал больше 30 лендингов для iGaming-клиентов — с интерактивными элементами, анимацией и адаптивом под все экраны.`,
            `Сложные макеты — в короткие циклы и без технического долга в вёрстке, который обычно появляется в спешке.`,
            `Оптимизировал конвейер ассетов и рендер анимаций, чтобы весь набор страниц грузился быстро.`,
            `Работал в большой распределённой команде с дизайнерами, бэкендом и QA под фиксированные даты релизов.`,
          ],
        },
        nix: {
          summary: `Глобальная IT-компания: сайты событий, промо и продуктовые страницы. Сотрудничество продолжается.`,
          points: [
            `Сайты для внешних событий компании — каждый со своим дизайном и функционалом, от вёрстки по макету до рабочей сборки на WordPress.`,
            `Интерактив и анимация под задачу каждого события, а не перенесённые с предыдущего.`,
            `Настроил SMTP-рассылки: подтверждение регистрации и письма тем, кто записался или взаимодействовал с сайтом.`,
            `Поддерживаю и развиваю живые сайты событий, когда требования меняются посреди кампании.`,
            `Работаю над основным сайтом компании и продуктовыми страницами параллельно с событиями.`,
            `Адаптивная кроссбраузерная вёрстка на каждом проекте — с одинаковой планкой качества.`,
          ],
        },
        wmg: {
          summary: `Программатик-монетизация игр и приложений: основной сайт компании и проекты для её клиентов.`,
          points: [
            `Вёл основной сайт компании от и до: стабильность и постоянные улучшения вместо редких редизайнов.`,
            `Проектировал и делал новые модули и функции, расширявшие возможности сайта.`,
            `Сложная анимация: сцены на прокрутке, интерактивные секции и движение, которое держится на устройствах среднего уровня.`,
            `Адаптивные HTML-рассылки, проверенные в почтовых клиентах, чтобы в каждом ящике выглядели одинаково.`,
            `Сайты на заказ для клиентов компании — под их требования, от вёрстки до сдачи.`,
          ],
        },
        clickable: {
          summary: `Агентство для беттинга и iGaming: сайты, playable-реклама, мини-игры, баннеры и письма — самый широкий спектр задач.`,
          points: [
            `Сайты и лендинги для беттинга и iGaming — от вёрстки до продакшна.`,
            `Playable-реклама на PIXI.js и Phaser: вариативные сценарии, полный цикл анимации и бюджет рендера рекламного формата.`,
            `Three.js вглубь: загрузка и постановка моделей, управление их анимацией, шейдеры для эффектов, которые не сделаешь текстурами.`,
            `Мини-игры на чистом JavaScript и PIXI.js — в зависимости от формата и лимита веса.`,
            `Интерактивные баннеры, где анимация — суть формата, а не украшение.`,
            `Приложения на Vue, сайты на WordPress, Webflow и Tilda для клиентов, которым важно самим управлять контентом.`,
            `HTML-письма всех форматов — промо, транзакционные, рассылки — с проверкой в почтовых клиентах.`,
          ],
        },
        freelance: {
          company: `Фриланс`,
          role: `Независимый разработчик`,
          summary: `Свои клиенты — от небольших лендингов до интерактивных проектов, напрямую и без посредников.`,
          points: [
            `Проекты от и до: объём, вёрстка, анимация, сдача — без передачи на полпути.`,
            `Встраиваюсь в команды с разработчиками, с которыми не работал раньше, и принимаю их конвенции вместо того, чтобы навязывать свои.`,
            `Vue, PIXI.js, Three.js, WordPress, Webflow, Tilda — под то, что клиенту удобно поддерживать потом.`,
            `Claude Code в ежедневной работе: быстро разбираюсь в чужом коде и новом стеке, рефакторю, проверяю своё перед сдачей.`,
            `Учусь на ходу — беру новую технологию и сразу сдаю на ней, а не жду конца курса.`,
            `Напрямую с клиентом: превращаю размытую задачу в то, что можно сделать, — это часть работы, а не шаг перед ней.`,
          ],
        },
      },
      educationKicker: `Образование`,
      educationTitle: `Где учился`,
      education: {
        napaMaster: {
          degree: `Магистр`,
          field: `Менеджмент`,
          note: `В 2020 году окончил полный курс Одесского регионального института государственного управления Национальной академии государственного управления при Президенте Украины. Квалификация — магистр, предметная область «Менеджмент».`,
        },
        napaBachelor: {
          degree: `Бакалавр`,
          field: `Менеджмент`,
          note: `В 2020 году окончил полный курс института НАГУ. Квалификация — бакалавр со специализацией «Менеджмент».`,
        },
        ihuBachelor: {
          degree: `Бакалавр`,
          field: `Компьютерная инженерия`,
          note: `В 2018 году окончил полный курс Международного гуманитарного университета. Квалификация — бакалавр, предметная область «Компьютерная инженерия», профессиональная квалификация — специалист по информационным технологиям.`,
        },
      },
      schools: {
        napa: { name: `Одесский региональный институт государственного управления НАГУ`, city: `Одесса` },
        ihu: { name: `Международный гуманитарный университет`, city: `Одесса` },
      },
      partnersKicker: `Клиенты`,
      partnersTitle: `С кем работал`,
      partnersHint: `Компании и бренды, для которых я делал сайты, промо и продукты.`,
      partnerNames: { volunteer: `Волонтёрские проекты для ВСУ` },
      friendsKicker: `Партнёры`,
      friendsTitle: `Работаю в паре`,
      friendsHint: `Люди, с которыми делаю проекты вместе: разработка, дизайн, маркетинг. За каждого ручаюсь.`,
      friendsSoon: `Coming soon`,
      friendsCard: { hacked: `Hacked`, name: `Имя скрыто`, role: `Роль засекречена`, status: `Расшифровка данных` },
      hobbiesTitle: `Вне кода`,
      hobbiesText: `После работы я не выключаюсь из экрана полностью — просто меняю жанр. Игры учат держать внимание и отвечать на каждое действие, LEGO — собирать сложное из простых деталей. И то и другое потом возвращается в мои проекты.`,
      hobbies: {
        games: {
          title: `Компьютерные игры`,
          text: `Играю и смотрю на игры глазами разработчика: как сделан интерфейс, звук и отклик на каждое нажатие. Отсюда немало идей для анимаций.`,
        },
        lego: {
          title: `LEGO`,
          text: `Собираю LEGO. Инструкция на сотни шагов — та же дисциплина, что и в вёрстке: каждая деталь на своём месте, иначе дальше не сойдётся.`,
        },
        play: {
          title: `Свои игрушки`,
          text: `Иногда механика из игры не отпускает — и появляется свой прототип. Сейчас это «Ферма»: на компьютере можно сыграть прямо здесь, но это ранняя альфа — багов и неточностей пока много.`,
        },
      },
      hobbyPhoto: `Фото скоро`,
      hobbyGame: {
        stage: `Alpha`,
        note: `Ранняя версия — возможны баги`,
        play: `Играть`,
        full: `На весь экран`,
        close: `Закрыть`,
        frame: `игра`,
        soon: `Soon`,
        mobile: `Пока недоступно на мобильных устройствах`,
      },
      hobbySlider: {
        games: { label: `Игры, в которые играю`, prev: `Предыдущая игра`, next: `Следующая игра` },
        lego: { label: `Моё LEGO`, prev: `Предыдущее фото`, next: `Следующее фото` },
      },
      contactKicker: `Контакты`,
      contactTitle: `Напишите мне`,
      contactHint: `Расскажите о задаче — отвечу лично, без менеджеров и посредников.`,
      socials: `Соцсети`,
      owner: ``,
      meta: {
        homeDescription: ` — frontend-инженер: 8 лет в вебе и iGaming, 100+ проектов. 3D-сцены на Three.js, анимация на GSAP, мини-игры на PIXI.js и Phaser, сайты от Figma до релиза.`,
        worksDescription: `Все работы do autor: промо, лендинги, сайты, игры, email-письма и 3D-сцены для iGaming, IT, благотворительности, недвижимости и других отраслей.`,
        privacyDescription: `Какие данные собирают формы на site, зачем, где они хранятся и как их удалить.`,
      },
      like: {
        kicker: `> like.exe`,
        title: `Зацепило?`,
        text: `Ткни в сердце из символов — демон посчитает. Один лайк с браузера, но для меня он весит больше, чем кажется.`,
        thanks: `Засчитано. Демон довольно рычит — спасибо, что заглянули!`,
        button: `Поставить лайк`,
        liked: `Лайк уже стоит`,
        count: { one: `лайк`, few: `лайка`, many: `лайков`, other: `лайка` },
      },
      cookies: {
        kicker: `> cookies`,
        text: `Сайт считает посещения через Google Analytics — обезличенно и без рекламы. Разрешите cookies для статистики?`,
        accept: `Разрешить`,
        decline: `Отклонить`,
        more: `Подробнее`,
        label: `Согласие на cookies`,
        settings: `Cookies`,
      },
      privacy: `Политика конфиденциальности`,
      privacyPage: {
        kicker: `Документы`,
        updated: `Обновлено 29 октября 2026 года`,
        sections: [
          {
            title: `Кто обрабатывает данные`,
            text: [
              `Сайт site и данные, которые вы отправляете через его формы, принадлежат ao autor. По любым вопросам о ваших данных пишите в Telegram @site или через форму на сайте.`,
            ],
          },
          {
            title: `Что собирается`,
            text: [
              `Форма «Обсудить проект»: имя, контакт (email, Telegram или телефон), тип проекта, бюджет, текст сообщения, язык сайта и страница, с которой отправлена форма.`,
              `Форма «Нашли баг?»: описание проблемы, контакт (по желанию), скриншот (по желанию), адрес страницы, размер окна и экрана, браузер и операционная система, язык сайта.`,
              `Формы защищает от спама Google reCAPTCHA: когда вы начинаете заполнять форму, её скрипт получает от браузера технические данные (IP-адрес, данные браузера, движения мыши) и может ставить свои cookies. Их обрабатывает Google по своей политике конфиденциальности; мне приходит только оценка «человек или бот».`,
              `Посещаемость считает Google Analytics: какие страницы открывали, откуда пришли, устройство, браузер, примерный город, прокрутка и клики по ссылкам. Cookies (_ga) он ставит, только если вы разрешили их в окне внизу сайта; без согласия Google получает только обезличенные сигналы без cookies. IP-адрес он не хранит. Я вижу только обезличенную статистику; для рекламы эти данные не передаются, рекламы на сайте нет. Изменить решение можно в любой момент кнопкой «Cookies» внизу сайта.`,
            ],
          },
          {
            title: `Зачем`,
            text: [
              `Только чтобы ответить на ваш запрос, обсудить и оценить проект или исправить ошибку на сайте. Основание — ваше согласие и подготовка к возможному сотрудничеству, а для отчётов о багах — мой законный интерес в исправном сайте. Рассылок не делаю, данные никому не продаю и не передаю для рекламы.`,
            ],
          },
          {
            title: `Где хранятся`,
            text: [
              `Заявки записываются в мою таблицу Google Sheets (Google LLC), а уведомления о них, вместе со скриншотом бага, приходят мне в Telegram (Telegram Messenger Inc.). Серверы этих сервисов могут находиться за пределами Украины и ЕС; доступ к данным есть только у меня.`,
            ],
          },
          {
            title: `Сколько хранятся`,
            text: [
              `Пока мы общаемся или работаем вместе и ещё до трёх лет после последней переписки — потом удаляю. Раньше — по вашей просьбе.`,
            ],
          },
          {
            title: `Что хранит браузер`,
            text: [
              `Если вы поставили лайк, браузер запоминает случайный код (в cookie и localStorage), а моя таблица Google Sheets — этот код, дату и язык сайта: так один браузер считается один раз. Код ни к чему вас не привязывает. Сайт запоминает в вашем браузере (localStorage) язык, включённый звук, то, что вступление уже просмотрено, и счётчик уничтоженных багов. Эти данные не покидают ваше устройство, их можно стереть в настройках браузера. Хостинг сайта, как и любой сервер, может вести технические журналы запросов (IP-адрес, время, страница).`,
            ],
          },
          {
            title: `Ваши права`,
            text: [
              `Вы можете узнать, какие данные о вас у меня есть, исправить или удалить их и отозвать согласие — напишите в Telegram @site, отвечу в течение 30 дней. Также вы вправе подать жалобу Уполномоченному Верховной Рады Украины по правам человека или в орган по защите данных своей страны.`,
            ],
          },
          {
            title: `Изменения`,
            text: [`Если политика изменится, новая редакция появится на этой странице с новой датой обновления.`],
          },
        ],
      },
      notFound: {
        title: `Страница не найдена`,
        text: `Такого адреса на сайте нет — возможно, ссылка устарела или в ней ошибка.`,
        home: `На главную`,
      },
      toTop: `Наверх`,
      bugReport: {
        open: `Нашли баг?`,
        title: `Нашли баг?`,
        lead: `Опишите, что пошло не так, и по возможности приложите скриншот. Страницу, браузер и размер экрана я увижу сам.`,
        message: `Что случилось`,
        messagePlaceholder: `Что делали, что ожидали и что увидели вместо этого`,
        messageShort: `Опишите хотя бы парой слов`,
        contact: `Контакт для ответа`,
        contactPlaceholder: `Необязательно: email или @ник`,
        contactInvalid: `Укажите email, @ник в Telegram или телефон — или оставьте поле пустым`,
        shot: `Скриншот`,
        shotAdd: `Выбрать файл`,
        shotHint: `или вставьте из буфера: Ctrl+V / ⌘V`,
        shotRemove: `Убрать скриншот`,
        shotAlt: `Скриншот, который будет отправлен`,
        shotTooBig: `Файл слишком большой — до 20 МБ`,
        shotNotImage: `Нужна картинка: PNG, JPG или WebP`,
        sentTitle: `Спасибо, баг у меня!`,
        sentText: `Посмотрю и исправлю. Если вы оставили контакт — напишу, когда будет готово.`,
        again: `Ещё один баг`,
      },
      form: {
        title: `Обсудить проект`,
        lead: `Несколько строк о задаче — и я вернусь с вопросами или оценкой.`,
        name: `Имя`,
        namePlaceholder: `Как к вам обращаться`,
        contact: `Email или Telegram`,
        contactPlaceholder: `name@mail.com или @nickname`,
        types: `Что нужно`,
        typeOptions: [`Лендинг`, `Сайт`, `3D / WebGL`, `Игра / playable`, `Анимация`, `Другое`],
        budget: `Бюджет`,
        budgetOptions: [`до $1k`, `$1–3k`, `$3–7k`, `$7k+`, `Пока не знаю`],
        message: `О проекте`,
        messagePlaceholder: `Что делаем, сроки, ссылки на макеты`,
        send: `Отправить`,
        sending: `Отправляю…`,
        sentTitle: `Спасибо! Бриф у меня.`,
        sentText: `Отвечу лично в ближайшее время — на контакт, который вы оставили.`,
        again: `Написать ещё`,
        error: `Не удалось отправить. Попробуйте ещё раз или напишите в Telegram.`,
        offline: `Форма ещё не подключена — напишите, пожалуйста, в Telegram.`,
        required: `Заполните это поле`,
        contactInvalid: `Укажите email, @ник в Telegram или телефон`,
        messageShort: `Напишите хотя бы пару слов о задаче`,
        nameShort: `Имя — хотя бы две буквы`,
        nameDigits: `Имя — без цифр`,
        consent: `Отправляя форму, вы соглашаетесь с`,
        consentLink: `политикой конфиденциальности`,
        captcha: {
          lead: `Сайт защищён reCAPTCHA, действуют`,
          privacy: `Политика конфиденциальности`,
          and: `и`,
          terms: `Условия использования`,
          tail: `Google.`,
        },
        requiredNote: `Поля со * обязательны`,
        close: `Закрыть`,
      },
    },
    en: {
      start: `Start`,
      enter: `Enter`,
      mute: `Mute sound`,
      bugs: `Bugs squashed`,
      language: `Language`,
      confirmLines: [`Do you want`, `to change`, `language?`],
      yes: `Yes`,
      no: `No`,
      sound: `Sound`,
      demon: `Talk to the demon`,
      menu: `Menu`,
      nav: [`Projects`, `About`, `Stack`, `Experience`, `Contact`],
      cta: `Start a project`,
      heroKicker: `Autor — frontend engineer`,
      heroTitle: `Code that comes alive`,
      heroText: `Eight years in web and iGaming — complex designs, short cycles and deadlines that do not move. I develop projects that hold the design at every breakpoint: 3D scenes in Three.js, motion in GSAP, mini-games in PIXI.js and Phaser. I profile performance while I build, not after. I work both solo, from Figma to release, and in teams alongside designers, backend and QA.`,
      heroFacts: [
        [`8`, `years on the web`],
        [`100+`, `projects`],
        [`1:1`, `direct with the client`],
      ],
      worksKicker: `Work`,
      worksTitle: `Through the breach`,
      worksHint: `Every project is a breach in the wall of code. Click it and fall right in.`,
      worksOpen: `open the site`,
      portalBack: `Back`,
      portalNewTab: `Open in a new tab`,
      caseAbout: `About the project`,
      works: {
        akvareli: {
          title: `Akvarel Group`,
          text: `A site for an Odesa developer: residential complexes in four districts, apartment search, instalments and the state єОселя mortgage.`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `A Slots City promo page — “the first bank built to be robbed”: vaults with prize pools the player cracks with a code, a slider and a limited number of tries.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `The site of WMG International, programmatic monetization for games and apps: an ad exchange, Prebid.js header bidding, in-game ads on mobile, CTV, Xbox and PlayStation.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `A promo page for the N-iX charity mega stream with Come Back Alive and OKKO: a ₴10,000,000 goal, donate and watch buttons, the stages of Ukrainian music.`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `The site of a New York real estate agency: homes to buy, rent and sell, exclusive listings, agents, a blog and four languages.`,
        },
        tankHero: {
          title: `Tank Hero`,
          text: `A browser game: drive the tank with WASD, the turret follows the cursor, shoot with the mouse, enemies drop repair kits, ammo and heavy shells. Goal: 5,000 points.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `A promo page for the N-iX and JustJoin IT stream on the Polish IT market in 2025: hosts, guests and topics, plus the “Co z tym Eldorado” report to download.`,
        },
      },
      allWorks: `All projects`,
      allWorksKicker: `All projects`,
      allWorksTitle: `All work`,
      allWorksHint: `Promos, landing pages, websites, games and 3D scenes — filter by type, industry, client and tech. Some projects are under NDA and are not shown.`,
      allWorksBack: `Back to home`,
      pages: `Project pages`,
      pagePrev: `Previous page`,
      pageNext: `Next page`,
      page: `Page`,
      workFilter: `Filter`,
      workFilterAll: `All`,
      workFilterReset: `Reset filter`,
      workFilterFound: `Found`,
      workFilterEmpty: `No works match this filter.`,
      workFilterFacets: { type: `Type`, industry: `Industry`, client: `Client`, tech: `Tech` },
      workFilterValues: {
        type: {
          landing: `Landing page`,
          promo: `Promo`,
          site: `Website`,
          shop: `Shop`,
          game: `Game`,
          email: `Email`,
          ui: `Interface`,
          scene: `3D scene`,
        },
        industry: {
          igaming: `iGaming`,
          it: `IT & HR`,
          charity: `Charity`,
          gov: `Public sector`,
          fintech: `Fintech`,
          retail: `Retail`,
          adtech: `Adtech`,
          services: `Services`,
          defense: `Defense`,
          realestate: `Real estate`,
          consulting: `Consulting`,
          personal: `Personal brand`,
          lab: `Experiments`,
        },
        client: { akvarel: `Akvarel`, water: `State Water Agency`, own: `Own` },
      },
      moreWorks: {
        gameSlots: { title: `Slots`, text: `An Egyptian-themed slot game: reels, bets and win animations.` },
        tankHero: {
          title: `Tank Hero`,
          text: `A browser game: drive the tank with WASD, the turret follows the cursor, shoot with the mouse, enemies drop repair kits, ammo and heavy shells. Goal: 5,000 points.`,
        },
        breakTheCode: {
          title: `Break the Code`,
          text: `Site of the N-iX conference for women in tech in Medellín: the programme and sign-up for attendees and mentors.`,
        },
        leadProgram: {
          title: `N-iX Lead Program`,
          text: `Landing page of the N-iX leadership programme: what it is, the pilot results and applications for the next run.`,
        },
        concert: {
          title: `“Typical Corporate Party”`,
          text: `N-iX and DOU’s nationwide charity online party with live sets from Ukrainian bands.`,
        },
        donationNation: {
          title: `N-iX Donation Nation`,
          text: `N-iX and DOU charity marathon: a live counter of funds raised, a stream and donations.`,
        },
        fintiko: {
          title: `Fintiko`,
          text: `Site of a fintech service for managing transactions: invoicing, pay by link, open banking.`,
        },
        bordoFlowers: {
          title: `Bordo Flowers`,
          text: `Site of a premium flower shop in Chicago: catalogue, subscriptions, same-day delivery.`,
        },
        ctendo: {
          title: `Ctendo`,
          text: `Site of an advertising technology group: what it does, partners, resources.`,
        },
        shargo: {
          title: `Sam Shargo`,
          text: `Personal site of coach Sam Shargo: experience, philanthropy, insights and contacts.`,
        },
        screwsAppliance: {
          title: `Screws Appliance Repair`,
          text: `Site of an appliance repair service in New York and Jersey City: services, same-day repair, online booking and reviews.`,
        },
        bubbles: { title: `Bubble Shaders`, text: `An interactive scene of bubbles drawn with shaders.` },
        lions: { title: `Lions`, text: `A 3D scene of low-poly lions you can rotate with the mouse.` },
        tapki: {
          title: `Parimatch × Sports.ru`,
          text: `Parimatch promo: a contest for custom sneakers made from your own sketch.`,
        },
        tiptoro: { title: `Tiptoro`, text: `A sportsbook interface: events, odds and a bet slip.` },
        gamaBamboo: {
          title: `Gama Casino`,
          text: `Gama Casino promo: regular giveaways of free spins and deposit bonuses.`,
        },
        breakTheCode2: {
          title: `Break the Code · AI`,
          text: `Site of Colombia’s first pragmatic AI conference by N-iX, Ruta N and AWS in Medellín: speakers, agenda, countdown and sign-up for the session recordings.`,
        },
        nix20: {
          title: `What’s Wrong With IT?`,
          text: `Promo page of an 11-hour self-ironic N-iX charity stream with blogger Dima Malieiev: IT stereotypes, holy wars and a ₴2,000,000 drive for drones with Come Back Alive.`,
        },
        itIsFine: {
          title: `It is fine`,
          text: `Promo page of a charity stream by N-iX and Underground Stand-up: 20 comedians, five formats and donations for the army.`,
        },
        onboarding: {
          title: `N-iX Onboarding`,
          text: `N-iX onboarding page for new colleagues: what to do before day one, how it goes and what comes next.`,
        },
        history23: {
          title: `PRO100 HEROES`,
          text: `Site of the 23rd Mechanized Brigade for its book of heroes’ stories: an interactive map of units, soldier cards with their combat path, vacancies and news.`,
        },
        screwsHvac: {
          title: `Screw’s HVAC Services`,
          text: `Site of a commercial HVAC service in New York: repair, maintenance and replacement of building climate systems, pricing and an estimate request.`,
        },
        veraWheel: {
          title: `Vera Casino`,
          text: `Vera Casino promo: a bonus wheel — free spins and deposit bonuses in one spin.`,
        },
        dogtraff: {
          title: `DogTraff`,
          text: `Dashboard of the DogTraff ad platform: balance, spend and clicks, traffic charts, geo and OS, campaigns and finance.`,
        },
        easyHome: {
          title: `Easy Home`,
          text: `Site of an Odesa company managing residential and commercial property: services, reviews, blog and a request form.`,
        },
        getrtb: {
          title: `GetRTB`,
          text: `Site of an OpenRTB ad exchange with a white-label solution: platform features, data centres, integrations, case studies and a demo request.`,
        },
        slotsBank: {
          title: `Slots City Bank`,
          text: `A Slots City promo page — “the first bank built to be robbed”: vaults with prize pools the player cracks with a code, a slider and a limited number of tries.`,
        },
        slotCityHb: {
          title: `Slots City Birthday`,
          text: `Promo page of the Slots City birthday charity stream: 10 viewers’ dreams and 500 drones with thermal cameras for an assault brigade.`,
        },
        scaleRight: {
          title: `Scale Right Partners`,
          text: `Site of a consultancy for small business owners: strategic planning, coaching and a community built on the P.R.O.F.I.T. system.`,
        },
        rtUkraine: {
          title: `Rise Technologies`,
          text: `Site of a maker of battlefield communication systems: digital links, anti-jamming radio modules for drones, frequency converters.`,
        },
        adwmg: {
          title: `adWMG`,
          text: `The site of WMG International, programmatic monetization for games and apps: an ad exchange, Prebid.js header bidding, in-game ads on mobile, CTV, Xbox and PlayStation.`,
        },
        akvareli: {
          title: `Akvarel Group`,
          text: `A site for an Odesa developer: residential complexes in four districts, apartment search, instalments and the state єОселя mortgage.`,
        },
        upton: {
          title: `Upton Realty Group`,
          text: `The site of a New York real estate agency: homes to buy, rent and sell, exclusive listings, agents, a blog and four languages.`,
        },
        oouvr: {
          title: `Basin Water Resources Department`,
          text: `Site of the Basin Water Resources Department of the Black Sea and Lower Danube rivers: news, structure, procurement, citizens’ requests and access to public information.`,
        },
        wmgReport2025: {
          title: `adWMG 2025 Year in Review`,
          text: `HTML email with adWMG’s 2025 results: +473% revenue, key figures and a button to download the annual report.`,
        },
        wmgLunch: {
          title: `adWMG New Year Lunch`,
          text: `HTML invitation to the adWMG New Year lunch in London: date, venue, a confirm button and dietary requests.`,
        },
        wmgEvents: {
          title: `adWMG at Industry Events`,
          text: `HTML digest of adWMG at industry events: Pocket Gamer Connects London, a partner lunch, photos.`,
        },
        wmgDecember: {
          title: `WMG International Updates`,
          text: `WMG International HTML newsletter: new publishers with media type, geos and eCPM, product updates and an event invitation.`,
        },
        wmgDecon: {
          title: `WMG at PG Connects`,
          text: `HTML email after PG Connects and Gamesforum: a photo report from the booths and a meeting request.`,
        },
        wmgDevcom: {
          title: `adWMG at Gamescom & Devcom`,
          text: `HTML invitation to meet adWMG at Devcom and Gamescom 2025 in Cologne: services and a meeting request.`,
        },
        wmgDmexco: {
          title: `adWMG at DMEXCO 2025`,
          text: `HTML invitation to the adWMG booth at DMEXCO 2025 in Cologne: SSP, DSP and a meeting request.`,
        },
        wmgNewYear: {
          title: `adWMG Happy New Year 2026`,
          text: `adWMG New Year HTML email: greetings to partners and an invitation to meet this winter.`,
        },
        wmgMobidictum: {
          title: `adWMG at Mobidictum 2025`,
          text: `HTML invitation to meet adWMG at Mobidictum 2025 in Istanbul: focus areas and a meeting request.`,
        },
        wmgWhatsNew: {
          title: `What’s New at adWMG`,
          text: `adWMG HTML news digest: the Venatus partnership, industry events and buttons to case studies.`,
        },
        gamerallNewAccount: {
          title: `GamerAll: New account`,
          text: `GamerAll welcome HTML email after sign-up: account details and a button to the profile.`,
        },
        gamerallOrder: {
          title: `GamerAll: Order details`,
          text: `GamerAll transactional HTML email with order details: products, price, quantity and total.`,
        },
        gamerallPaid: {
          title: `GamerAll: Payment received`,
          text: `GamerAll transactional HTML email confirming payment: an order table and a button to order history.`,
        },
        gamerallPaymentError: {
          title: `GamerAll: Payment error`,
          text: `GamerAll transactional HTML email about a failed payment: nothing charged, help in live chat.`,
        },
        gamerallDelivered: {
          title: `GamerAll: Order delivered`,
          text: `GamerAll transactional HTML email for a delivered order: a button to the game key and a Trustpilot review request.`,
        },
        gamerallCanceled: {
          title: `GamerAll: Order canceled`,
          text: `GamerAll transactional HTML email for a canceled order: refund note and a contact support button.`,
        },
        gamerallRefunded: {
          title: `GamerAll: Refund`,
          text: `GamerAll transactional HTML email about an order refund with a contact support button.`,
        },
        gamerallMessage: {
          title: `GamerAll: Message about an order`,
          text: `GamerAll transactional HTML email with a message about an order that can be answered directly.`,
        },
        gamerallSupport: {
          title: `GamerAll: Customer support`,
          text: `GamerAll transactional HTML email with a message from support and a reply button.`,
        },
        gamerallReset: {
          title: `GamerAll: Password reset`,
          text: `GamerAll transactional HTML email for a password reset: a reset button and account security tips.`,
        },
        gamerallPassword: {
          title: `GamerAll: Password changed`,
          text: `GamerAll transactional HTML email confirming a password change with a contact support button.`,
        },
        cultureCode: {
          title: `IT is Culture Code`,
          text: `A promo page for the N-iX charity mega stream with Come Back Alive and OKKO: a ₴10,000,000 goal, donate and watch buttons, the stages of Ukrainian music.`,
        },
        eldorado: {
          title: `Eldorado czy Biedorado?`,
          text: `A promo page for the N-iX and JustJoin IT stream on the Polish IT market in 2025: hosts, guests and topics, plus the “Co z tym Eldorado” report to download.`,
        },
      },
      aboutKicker: `About`,
      aboutTitle: `Markup, motion, shipped`,
      aboutText: [
        `I am a frontend engineer. Eight years in web, the last six in iGaming and betting inside product teams. Eight years of markup behind me: semantic HTML, BEM, modular SCSS and layouts that match the design at every breakpoint and hold across browsers.`,
        `Motion is where I am strongest: Three.js for 3D scenes and interactive sections, GSAP for interface and scroll motion, PIXI.js and Phaser for mini-games and playable ads with full animation cycles. I profile performance while I build, not after.`,
        `Alongside that: Vue applications, Angular projects, WordPress sites from stores to real estate, and Telegram bots in Python. Figma and Photoshop to production — cutting assets, sprites, exports — on deadlines that do not move. Claude Code is part of the daily workflow: I get into unfamiliar code and new stacks fast.`,
      ],
      aboutMeta: [
        [`Based in`, `Chișinău, Moldova — working remotely`],
        [`Languages`, `Ukrainian — native, Russian — advanced, English — upper intermediate`],
        [`Format`, `Directly with the client, or in a team with designers, backend and QA`],
      ],
      stackKicker: `Stack`,
      stackTitle: `What I work with`,
      stackHint: `The tools I ship projects with every day — from markup to WebGL.`,
      stackGroups: {
        languages: `Languages`,
        graphics: `Graphics`,
        animation: `Animation`,
        frameworks: `Frameworks`,
        markup: `Markup`,
        cms: `CMS`,
        email: `Email`,
        tooling: `Tooling`,
        design: `Design`,
        ai: `AI`,
      },
      experienceKicker: `Experience`,
      experienceTitle: `Where I have worked`,
      experienceHint: `Product teams, agencies and my own clients — eight years in web.`,
      experienceModes: { full: `Full-time`, part: `Part-time`, alongside: `My own clients` },
      experienceAlongside: `Alongside`,
      experiencePresent: `present`,
      experience: {
        insula: {
          summary: `An iGaming product team: landing pages and promos for the platform’s clients, a large Angular project and fixed release dates.`,
          points: [
            `Joined a running Angular project with a large codebase and was closing tasks in unfamiliar code within the first weeks.`,
            `Extended existing components and wrote new ones, fitting client designs into the project’s default templates.`,
            `Delivered 30+ landing pages for iGaming clients — with interactive elements, animation and layouts for every screen.`,
            `Complex designs turned around on short cycles, without the layout debt that usually comes with rushing.`,
            `Optimised the asset pipeline and animation rendering to keep the whole set of pages loading fast.`,
            `Worked in a large distributed team alongside designers, backend and QA, to fixed release dates.`,
          ],
        },
        nix: {
          summary: `A global IT company: event sites, promos and product pages. The collaboration is ongoing.`,
          points: [
            `Sites for the company’s external events — each with its own design and features, from layout against the mockup to a working WordPress build.`,
            `Interactive features and animation shaped around each event, not carried over from the last one.`,
            `Set up SMTP delivery: registration confirmations and follow-up mail to people who signed up or interacted with the site.`,
            `Maintaining and extending live event sites as requirements shift during a campaign.`,
            `Working on the company’s main website and product pages alongside the events.`,
            `Responsive, cross-browser layouts on every project, held to the same standard.`,
          ],
        },
        wmg: {
          summary: `Programmatic monetization for games and apps: the company’s main website and projects for its clients.`,
          points: [
            `Owned the company’s main website end to end: kept it stable and kept improving it instead of occasional redesigns.`,
            `Designed and built new modules and features that extended what the site could do.`,
            `Complex motion: scroll-driven sequences, interactive sections and animation that holds up on mid-range devices.`,
            `Responsive HTML email campaigns, tested across mail clients so they render the same in every inbox.`,
            `Custom sites for the company’s clients, built to their requirements from layout to delivery.`,
          ],
        },
        clickable: {
          summary: `An agency for betting and iGaming: sites, playable ads, mini-games, banners and email — the widest range of work.`,
          points: [
            `Websites and landing pages for betting and iGaming, from layout to production.`,
            `Playable ads in PIXI.js and Phaser: variative scenarios, full animation cycles and the render budget of an ad unit.`,
            `Three.js in depth: loading and staging models, driving their animation, shaders for effects textures alone cannot do.`,
            `Mini-games in vanilla JavaScript and PIXI.js, depending on the format and the weight limit.`,
            `Interactive banners where animation is the point of the format, not decoration.`,
            `Vue applications, WordPress, Webflow and Tilda builds for clients who need to own their content.`,
            `HTML email in every format — promotional, transactional, newsletters — tested across mail clients.`,
          ],
        },
        freelance: {
          company: `Freelance`,
          role: `Independent developer`,
          summary: `My own clients — from small landing pages to interactive projects, directly and with no middlemen.`,
          points: [
            `Projects end to end: scope, layout, motion, delivery — no handover halfway.`,
            `Fitting into teams with developers I had not worked with before, following their conventions instead of imposing mine.`,
            `Vue, PIXI.js, Three.js, WordPress, Webflow, Tilda — whatever the client can maintain afterwards.`,
            `Claude Code in the daily workflow: getting into unfamiliar code and new stacks fast, refactoring, reviewing my work before it ships.`,
            `Learning in place — picking up a technology while delivering with it, not waiting for a course to end.`,
            `Direct client contact: turning a vague request into something buildable is part of the job, not a step before it.`,
          ],
        },
      },
      educationKicker: `Education`,
      educationTitle: `Where I studied`,
      education: {
        napaMaster: {
          degree: `Master’s degree`,
          field: `Management`,
          note: `Completed the full course of the Odesa Regional Institute for Public Administration of the National Academy for Public Administration under the President of Ukraine in 2020. Master’s degree, program subject area: Management.`,
        },
        napaBachelor: {
          degree: `Bachelor’s degree`,
          field: `Management`,
          note: `Completed the full course of the NAPA institute in 2020. Bachelor’s degree, specialized in Management.`,
        },
        ihuBachelor: {
          degree: `Bachelor’s degree`,
          field: `Computer engineering`,
          note: `Completed the full course of the International Humanitarian University in 2018. Bachelor’s degree, program subject area: Computer engineering; professional qualification: Information Technology Specialist.`,
        },
      },
      schools: {
        napa: { name: `Odesa Regional Institute for Public Administration, NAPA`, city: `Odesa` },
        ihu: { name: `International Humanitarian University`, city: `Odesa` },
      },
      partnersKicker: `Clients`,
      partnersTitle: `Who I have worked with`,
      partnersHint: `Companies and brands I have built sites, promos and products for.`,
      partnerNames: { volunteer: `Volunteer projects for the Armed Forces of Ukraine` },
      friendsKicker: `Partners`,
      friendsTitle: `Who I pair with`,
      friendsHint: `People I build projects with: development, design, marketing. I vouch for every one of them.`,
      friendsSoon: `Coming soon`,
      friendsCard: { hacked: `Hacked`, name: `Name hidden`, role: `Role classified`, status: `Decrypting data` },
      hobbiesTitle: `Off the code`,
      hobbiesText: `After work I do not leave the screen entirely — I just switch genres. Games teach holding attention and answering every action, LEGO teaches building the complex out of simple parts. Both find their way back into my projects.`,
      hobbies: {
        games: {
          title: `Video games`,
          text: `I play, and I look at games with a developer’s eye: how the interface, the sound and the response to every press are made. Many of my animation ideas come from there.`,
        },
        lego: {
          title: `LEGO`,
          text: `I build LEGO. Instructions hundreds of steps long are the same discipline as markup: every piece in its place, or nothing fits further on.`,
        },
        play: {
          title: `Toys of my own`,
          text: `Sometimes a game mechanic will not let go — and a prototype of my own appears. Right now it is “Farm”: on a computer you can play it right here, but it is an early alpha with plenty of bugs and rough edges.`,
        },
      },
      hobbyPhoto: `Photo soon`,
      hobbyGame: {
        stage: `Alpha`,
        note: `Early build — expect bugs`,
        play: `Play`,
        full: `Full screen`,
        close: `Close`,
        frame: `game`,
        soon: `Soon`,
        mobile: `Not available on mobile devices yet`,
      },
      hobbySlider: {
        games: { label: `Games I play`, prev: `Previous game`, next: `Next game` },
        lego: { label: `My LEGO`, prev: `Previous photo`, next: `Next photo` },
      },
      contactKicker: `Contact`,
      contactTitle: `Get in touch`,
      contactHint: `Tell me about the task — I answer myself, no managers or middlemen.`,
      socials: `Social links`,
      owner: `Autor`,
      meta: {
        homeDescription: `Autor, frontend engineer: 8 years in web and iGaming, 100+ projects. 3D scenes in Three.js, GSAP animation, mini-games in PIXI.js and Phaser, websites from Figma to release.`,
        worksDescription: `All of the author’s work: promos, landing pages, websites, games, HTML emails and 3D scenes for iGaming, IT, charity, real estate and more.`,
        privacyDescription: `What data the forms on site collect, why, where it is stored and how to have it deleted.`,
      },
      like: {
        kicker: `> like.exe`,
        title: `Liked what you saw?`,
        text: `Tap the heart made of glyphs — the demon keeps count. One like per browser, but it means more to me than you’d think.`,
        thanks: `Counted. The demon growls with pleasure — thanks for stopping by!`,
        button: `Like`,
        liked: `Already liked`,
        count: { one: `like`, other: `likes` },
      },
      cookies: {
        kicker: `> cookies`,
        text: `The site counts visits with Google Analytics — anonymously and with no ads. Allow cookies for statistics?`,
        accept: `Allow`,
        decline: `Decline`,
        more: `Details`,
        label: `Cookie consent`,
        settings: `Cookies`,
      },
      privacy: `Privacy policy`,
      privacyPage: {
        kicker: `Legal`,
        updated: `Updated 29 October 2026`,
        sections: [
          {
            title: `Who handles the data`,
            text: [
              `The site website and the data you send through its forms belong to the author. For any question about your data, message @site on Telegram or use the form on the site.`,
            ],
          },
          {
            title: `What is collected`,
            text: [
              `The “Discuss a project” form: name, contact (email, Telegram or phone), project type, budget, message, site language and the page the form was sent from.`,
              `The “Found a bug?” form: a description of the problem, a contact (optional), a screenshot (optional), the page address, window and screen size, browser and operating system, site language.`,
              `The forms are protected from spam by Google reCAPTCHA: once you start filling in a form, its script receives technical data from your browser (IP address, browser details, mouse movement) and may set its own cookies. Google processes this under its own privacy policy; I only receive a “human or bot” score.`,
              `Traffic is measured by Google Analytics: which pages were opened, where visitors came from, device, browser, approximate city, scrolling and link clicks. It sets cookies (_ga) only if you allow them in the banner at the bottom of the site; without consent Google receives only anonymous cookieless signals. It does not store IP addresses. I only see anonymous statistics; the data is not shared for advertising, and the site has no ads. You can change your choice at any time with the “Cookies” button at the bottom of the site.`,
            ],
          },
          {
            title: `Why`,
            text: [
              `Only to answer your request, discuss and estimate a project, or fix a bug on the site. The legal basis is your consent and steps taken before a possible contract; for bug reports, my legitimate interest in a working site. I send no newsletters and never sell or share your data for advertising.`,
            ],
          },
          {
            title: `Where it is stored`,
            text: [
              `Requests are saved to my Google Sheets spreadsheet (Google LLC), and notifications about them, including a bug’s screenshot, reach me on Telegram (Telegram Messenger Inc.). Their servers may be outside Ukraine and the EU; only I have access to the data.`,
            ],
          },
          {
            title: `How long it is kept`,
            text: [
              `While we are talking or working together and for up to three years after our last message, then it is deleted. Sooner if you ask.`,
            ],
          },
          {
            title: `What your browser stores`,
            text: [
              `If you leave a like, your browser keeps a random code (in a cookie and localStorage), and my Google Sheets spreadsheet keeps that code, the date and the site language, so each browser is counted once. The code is not tied to you in any way. The site remembers in your browser (localStorage) your language, whether sound is on, that you have seen the intro, and the bug-kill counter. This never leaves your device, and you can clear it in your browser settings. Like any server, the site’s hosting may keep technical request logs (IP address, time, page).`,
            ],
          },
          {
            title: `Your rights`,
            text: [
              `You can ask what data I hold about you, have it corrected or deleted, and withdraw your consent: message @site on Telegram and I will reply within 30 days. You may also complain to the Ukrainian Parliament Commissioner for Human Rights or to the data protection authority of your country.`,
            ],
          },
          {
            title: `Changes`,
            text: [`If this policy changes, the new version will appear on this page with a new date.`],
          },
        ],
      },
      notFound: {
        title: `Page not found`,
        text: `There is no such address on this site — the link may be outdated or mistyped.`,
        home: `Home`,
      },
      toTop: `Back to top`,
      bugReport: {
        open: `Found a bug?`,
        title: `Found a bug?`,
        lead: `Tell me what went wrong and add a screenshot if you can. I will see the page, the browser and the screen size myself.`,
        message: `What happened`,
        messagePlaceholder: `What you did, what you expected and what you saw instead`,
        messageShort: `Describe it in at least a few words`,
        contact: `Contact for a reply`,
        contactPlaceholder: `Optional: email or @handle`,
        contactInvalid: `Enter an email, a Telegram @handle or a phone — or leave it empty`,
        shot: `Screenshot`,
        shotAdd: `Choose a file`,
        shotHint: `or paste it: Ctrl+V / ⌘V`,
        shotRemove: `Remove the screenshot`,
        shotAlt: `The screenshot that will be sent`,
        shotTooBig: `The file is too large — up to 20 MB`,
        shotNotImage: `An image is needed: PNG, JPG or WebP`,
        sentTitle: `Thanks, the bug is with me!`,
        sentText: `I will look into it and fix it. If you left a contact, I will write when it is done.`,
        again: `Another bug`,
      },
      form: {
        title: `Start a project`,
        lead: `A few lines about the task — and I will come back with questions or an estimate.`,
        name: `Name`,
        namePlaceholder: `How should I call you`,
        contact: `Email or Telegram`,
        contactPlaceholder: `name@mail.com or @nickname`,
        types: `What you need`,
        typeOptions: [`Landing page`, `Website`, `3D / WebGL`, `Game / playable`, `Animation`, `Other`],
        budget: `Budget`,
        budgetOptions: [`under $1k`, `$1–3k`, `$3–7k`, `$7k+`, `Not sure yet`],
        message: `About the project`,
        messagePlaceholder: `What we are building, timing, links to designs`,
        send: `Send`,
        sending: `Sending…`,
        sentTitle: `Thank you! I have your brief.`,
        sentText: `I will reply myself shortly — to the contact you left.`,
        again: `Write again`,
        error: `Could not send. Try again or message me on Telegram.`,
        offline: `The form is not connected yet — please message me on Telegram.`,
        required: `Please fill this in`,
        contactInvalid: `Add an email, a Telegram @handle or a phone number`,
        messageShort: `Write at least a few words about the task`,
        nameShort: `A name needs at least two letters`,
        nameDigits: `A name can’t contain digits`,
        consent: `By sending the form you agree to the`,
        consentLink: `privacy policy`,
        captcha: {
          lead: `This site is protected by reCAPTCHA and the Google`,
          privacy: `Privacy Policy`,
          and: `and`,
          terms: `Terms of Service`,
          tail: `apply.`,
        },
        requiredNote: `Fields marked * are required`,
        close: `Close`,
      },
    },
  },
  hn = { storageKey: `site.consent`, granted: `granted`, denied: `denied`, showDelayMs: 2500 },
  gn = (...e) => window.gtag?.(...e),
  _n = (e, t = {}) => gn(`event`, e, t),
  vn = (e) => gn(`consent`, `update`, { analytics_storage: e ? hn.granted : hn.denied }),
  yn =
    /googlebot|google-inspectiontool|storebot-google|bingbot|yandex\w*bot|duckduckbot|applebot|baiduspider|slurp|petalbot|facebookexternalhit|twitterbot|telegrambot|linkedinbot|slackbot|discordbot|whatsapp|vkshare|skypeuripreview/i,
  bn = () => yn.test(window.navigator.userAgent),
  xn = `site.language`,
  Sn = () => (bn(), `en`),
  Cn = () => {
    try {
      let e = window.localStorage.getItem(xn);
      return pn.some((t) => t.code === e) ? e : Sn();
    } catch {
      return Sn();
    }
  },
  wn = (e) => {
    try {
      window.localStorage.setItem(xn, e);
    } catch {
      return;
    }
  },
  Tn = oe(`locale`, () => {
    let e = o(Cn()),
      t = F(() => pn.find((t) => t.code === e.value)),
      n = F(() => pn.filter((t) => t.code !== e.value)),
      r = () => {
        document.documentElement.lang = e.value;
      };
    return (
      r(),
      {
        code: e,
        language: t,
        others: n,
        t: (t) => mn[e.value][t],
        set: (t) => {
          mn[t] && (_n(`language_change`, { from: e.value, to: t }), (e.value = t), wn(t), r());
        },
      }
    );
  }),
  En = (e, t) => {
    let n = e.__vccOpts || e;
    for (let [e, r] of t) n[e] = r;
    return n;
  },
  Dn = [`aria-label`],
  On = [`viewBox`],
  kn = [`d`],
  An = { class: `bug-counter__count`, "aria-hidden": `true` },
  jn = En(
    {
      __name: `BugCounter`,
      props: { count: { type: Number, default: 0 }, relief: { type: Boolean, default: !1 } },
      setup(e, { expose: t }) {
        let n = {
            box: 24,
            paths: [
              `M8 10.5h8V16a4 4 0 0 1-8 0z`,
              `M9.5 10.5a2.5 2.5 0 0 1 5 0`,
              `M12 10.5V20`,
              `M10.5 8.5L8.5 5.5`,
              `M13.5 8.5l2-3`,
              `M8 13H5`,
              `M16 13h3`,
              `M8 16.5l-3 1.5`,
              `M16 16.5l3 1.5`,
            ],
          },
          r = e,
          i = Tn();
        return (
          t({ plate: F(() => ({ icon: { ...n, text: String(r.count) }, calm: !0 })) }),
          (t, r) => (
            M(),
            _(
              `div`,
              {
                class: l([`bug-counter`, { "bug-counter--relief": e.relief }]),
                role: `status`,
                "aria-label": `${P(i).t(`bugs`)}: ${e.count}`,
              },
              [
                (M(),
                _(
                  `svg`,
                  { class: `bug-counter__icon`, viewBox: `0 0 ${n.box} ${n.box}`, "aria-hidden": `true` },
                  [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(n.paths, (e) => (M(), _(`path`, { key: e, d: e }, null, 8, kn))),
                      128,
                    )),
                  ],
                  8,
                  On,
                )),
                R(`span`, An, S(e.count), 1),
              ],
              10,
              Dn,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-4dab84a1`]],
  ),
  Mn = `:focus-visible`,
  Nn = [`Enter`, ` `],
  Pn = () => {
    let e = o(!1),
      t = o(!1),
      n = o(!1),
      r = () => {
        n.value = !1;
      };
    return {
      hot: F(() => e.value || t.value),
      pressed: n,
      handlers: {
        pointerenter: () => {
          e.value = !0;
        },
        pointerleave: () => {
          ((e.value = !1), r());
        },
        pointerdown: () => {
          n.value = !0;
        },
        pointerup: r,
        pointercancel: r,
        keydown: (e) => {
          n.value = n.value || Nn.includes(e.key);
        },
        keyup: r,
        focus: (e) => {
          t.value = e.target.matches(Mn);
        },
        blur: () => {
          ((t.value = !1), r());
        },
      },
    };
  },
  Fn = En(
    {
      __name: `EnterButton`,
      props: { relief: { type: Boolean, default: !1 } },
      emits: [`press`],
      setup(e, { expose: t, emit: n }) {
        let r = n,
          a = Tn(),
          { hot: o, pressed: s, handlers: c } = Pn(),
          l = F(() => a.t(`enter`));
        return (
          t({ plate: F(() => ({ text: l.value, accent: !0, hot: o.value, pressed: s.value })) }),
          (t, n) => (
            M(),
            _(
              `button`,
              i({ type: `button`, class: [`enter-button`, { "enter-button--relief": e.relief }] }, d(P(c), !0), {
                onClick: (n[0] ||= A((e) => r(`press`), [`stop`])),
              }),
              S(l.value),
              17,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-60a9687e`]],
  ),
  In = En(
    {
      __name: `LangButton`,
      props: {
        label: { type: String, required: !0 },
        order: { type: Number, default: 0 },
        relief: { type: Boolean, default: !1 },
      },
      emits: [`press`],
      setup(e, { expose: t, emit: n }) {
        let r = e,
          a = n,
          { hot: o, pressed: s, handlers: c } = Pn();
        return (
          t({ plate: F(() => ({ text: r.label, swift: r.order > 0, hot: o.value, pressed: s.value })) }),
          (t, n) => (
            M(),
            _(
              `button`,
              i(
                {
                  type: `button`,
                  class: [`lang-button`, { "lang-button--relief": e.relief }],
                  style: { "--drop": e.order },
                },
                d(P(c), !0),
                { onClick: (n[0] ||= A((e) => a(`press`), [`stop`])) },
              ),
              S(e.label),
              17,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-b54d9c5d`]],
  ),
  Ln = [`aria-label`],
  Rn = [`data-line`],
  zn = [`aria-label`, `title`],
  Bn = [`viewBox`],
  Vn = [`d`],
  Hn = [`aria-label`, `title`],
  Un = [`viewBox`],
  Wn = [`d`],
  Gn = En(
    {
      __name: `LangConfirm`,
      props: {
        lines: { type: Array, required: !0 },
        yesLabel: { type: String, required: !0 },
        noLabel: { type: String, required: !0 },
        relief: { type: Boolean, default: !1 },
      },
      emits: [`confirm`, `cancel`, `miss`, `touch`],
      setup(e, { expose: t, emit: n }) {
        let r = { box: 24, paths: [`M5 12.5l4.5 4.5L19 7.5`] },
          a = { box: 24, paths: [`M6.5 6.5l11 11`, `M17.5 6.5l-11 11`] },
          o = e,
          s = n,
          c = z(`panel`),
          u = z(`lineElements`),
          f = z(`yes`),
          m = z(`no`),
          h = Pn(),
          g = Pn(),
          v = F(() =>
            o.lines.map((e, t) => ({
              el: u.value?.find((e) => Number(e.dataset.line) === t) ?? null,
              plate: { text: e, bare: !0, front: !0, swift: !0, stack: t > 0 },
            })),
          );
        return (
          t({
            plates: F(() => [
              { el: c.value, plate: { front: !0, swift: !0 } },
              ...v.value,
              {
                el: f.value,
                follow: !0,
                plate: {
                  icon: r,
                  accent: !0,
                  calm: !0,
                  keepShape: !0,
                  front: !0,
                  swift: !0,
                  hot: h.hot.value,
                  pressed: h.pressed.value,
                },
              },
              {
                el: m.value,
                follow: !0,
                plate: {
                  icon: a,
                  alarm: !0,
                  calm: !0,
                  keepShape: !0,
                  front: !0,
                  swift: !0,
                  hot: g.hot.value,
                  pressed: g.pressed.value,
                },
              },
            ]),
          }),
          N(() => {
            m.value?.focus({ preventScroll: !0 });
          }),
          (t, n) => (
            M(),
            _(
              `div`,
              {
                class: l([`lang-confirm`, { "lang-confirm--relief": e.relief }]),
                onClick: (n[4] ||= A((e) => s(`miss`, e), [`stop`])),
              },
              [
                R(
                  `div`,
                  {
                    ref_key: `panel`,
                    ref: c,
                    class: `lang-confirm__panel`,
                    role: `dialog`,
                    "aria-modal": `true`,
                    "aria-label": e.lines.join(` `),
                    onClick: (n[2] ||= A((e) => s(`touch`, e), [`stop`])),
                    onKeydown: (n[3] ||= ne((e) => s(`cancel`), [`esc`])),
                  },
                  [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        e.lines,
                        (e, t) => (
                          M(),
                          _(
                            `p`,
                            {
                              key: t,
                              ref_for: !0,
                              ref_key: `lineElements`,
                              ref: u,
                              class: `lang-confirm__line`,
                              "data-line": t,
                              style: C({ "--line": t }),
                            },
                            S(e),
                            13,
                            Rn,
                          )
                        ),
                      ),
                      128,
                    )),
                    R(
                      `button`,
                      i(
                        {
                          ref_key: `yes`,
                          ref: f,
                          type: `button`,
                          class: `lang-confirm__button lang-confirm__button--yes`,
                          "aria-label": e.yesLabel,
                          title: e.yesLabel,
                        },
                        d(P(h).handlers, !0),
                        { onClick: (n[0] ||= A((e) => s(`confirm`), [`stop`])) },
                      ),
                      [
                        (M(),
                        _(
                          `svg`,
                          { class: `lang-confirm__icon`, viewBox: `0 0 ${r.box} ${r.box}`, "aria-hidden": `true` },
                          [
                            (M(!0),
                            _(
                              k,
                              null,
                              p(r.paths, (e) => (M(), _(`path`, { key: e, d: e }, null, 8, Vn))),
                              128,
                            )),
                          ],
                          8,
                          Bn,
                        )),
                      ],
                      16,
                      zn,
                    ),
                    R(
                      `button`,
                      i(
                        {
                          ref_key: `no`,
                          ref: m,
                          type: `button`,
                          class: `lang-confirm__button lang-confirm__button--no`,
                          "aria-label": e.noLabel,
                          title: e.noLabel,
                        },
                        d(P(g).handlers, !0),
                        { onClick: (n[1] ||= A((e) => s(`cancel`), [`stop`])) },
                      ),
                      [
                        (M(),
                        _(
                          `svg`,
                          { class: `lang-confirm__icon`, viewBox: `0 0 ${a.box} ${a.box}`, "aria-hidden": `true` },
                          [
                            (M(!0),
                            _(
                              k,
                              null,
                              p(a.paths, (e) => (M(), _(`path`, { key: e, d: e }, null, 8, Wn))),
                              128,
                            )),
                          ],
                          8,
                          Un,
                        )),
                      ],
                      16,
                      Hn,
                    ),
                  ],
                  40,
                  Ln,
                ),
              ],
              2,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-a9d8161d`]],
  ),
  Kn = [`aria-label`, `aria-pressed`, `title`],
  qn = [`viewBox`],
  Jn = [`d`],
  Yn = En(
    {
      __name: `MuteButton`,
      props: { alarmed: { type: Boolean, default: !1 }, relief: { type: Boolean, default: !1 } },
      emits: [`press`],
      setup(e, { expose: t, emit: n }) {
        let r = { box: 24, paths: [`M4 9h4l5-4v14l-5-4H4z`, `M16 8.5a5 5 0 0 1 0 7`, `M18.5 6a8.5 8.5 0 0 1 0 12`] },
          a = e,
          s = n,
          c = Tn(),
          { hot: l, pressed: u, handlers: f } = Pn(),
          m = o(!1);
        t({ plate: F(() => ({ icon: r, alarm: a.alarmed, jolt: m.value, hot: l.value, pressed: u.value })) });
        let h = () => {
          ((m.value = !0), s(`press`));
        };
        return (t, n) => (
          M(),
          _(
            `button`,
            i(
              {
                type: `button`,
                class: [
                  `mute-button`,
                  {
                    "mute-button--refusing": m.value,
                    "mute-button--alarmed": e.alarmed,
                    "mute-button--relief": e.relief,
                  },
                ],
                "aria-label": P(c).t(`mute`),
                "aria-pressed": e.alarmed,
                title: P(c).t(`mute`),
              },
              d(P(f), !0),
              { onClick: A(h, [`stop`]), onAnimationend: (n[0] ||= (e) => (m.value = !1)) },
            ),
            [
              (M(),
              _(
                `svg`,
                { class: `mute-button__icon`, viewBox: `0 0 ${r.box} ${r.box}`, "aria-hidden": `true` },
                [
                  (M(!0),
                  _(
                    k,
                    null,
                    p(r.paths, (e) => (M(), _(`path`, { key: e, d: e }, null, 8, Jn))),
                    128,
                  )),
                ],
                8,
                qn,
              )),
            ],
            16,
            Kn,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-743eb540`]],
  ),
  Xn = { class: `scramble__shown`, "aria-hidden": `true` },
  Zn = { class: `scramble__mask` },
  Qn = { class: `scramble__noise` },
  $n = { key: 1, class: `scramble__ghost`, "aria-hidden": `true` },
  er = { class: `scramble__label` },
  tr = `ABCDEFGHJKLMNPQRSTUVWXYZ0123456789#$%&*+=<>/?{}[]АБВГДЕЄЖИІЇКЛМНПРСТФХЦЧШЩЮЯ`,
  nr = `abcdeghknopqrsuvwxyz0123456789#%&*+=<>/?авгдежиклмнопрстухцчшюя`,
  rr = 850,
  ir = 0.6,
  ar = 0.3,
  or = 0.1,
  sr = 45,
  cr = ` `,
  lr = 2,
  ur = `(prefers-reduced-motion: reduce)`,
  H = En(
    {
      __name: `ScrambleText`,
      props: {
        text: { type: String, required: !0 },
        typeDelay: { type: Number, default: -1 },
        typeDuration: { type: Number, default: 600 },
        ready: { type: Boolean, default: !0 },
      },
      setup(e) {
        let n = e,
          r = n.typeDelay >= 0 && !window.matchMedia(ur).matches,
          i = o(r ? `` : n.text),
          a = o(``),
          s = o(``),
          c = o(r ? n.text : ``),
          u = o(!1),
          d = 0,
          f = 0,
          p = !r,
          h = (e) => !!e && e !== e.toUpperCase(),
          g = (e) => {
            let t = e ? nr : tr;
            return t[Math.floor(Math.random() * t.length)];
          },
          v = () => window.matchMedia(ur).matches,
          y = (e, t, n) => {
            p = !0;
            let r = n / Math.max(e.length, 1),
              o = performance.now() + t,
              l = null,
              u = 0;
            ((i.value = ``), (a.value = ``), (s.value = ``), (c.value = e));
            let m = (t) => {
                let n = t < o ? -1 : Math.floor((t - o) / r);
                if (n >= e.length + lr) {
                  ((i.value = e), (a.value = ``), (s.value = ``), (c.value = ``));
                  return;
                }
                if (n === l && t - u < sr) {
                  d = requestAnimationFrame(m);
                  return;
                }
                ((l = n), (u = t));
                let f = Math.max(Math.min(n, e.length), 0),
                  p = n < 0 ? 0 : Math.min(f + lr, e.length);
                ((a.value = e.slice(f, p)),
                  (s.value = [...a.value].map((e) => (e === cr ? e : g(h(e)))).join(``)),
                  (i.value = e.slice(0, f)),
                  (c.value = e.slice(p)),
                  (d = requestAnimationFrame(m)));
              },
              _ = () => {
                ((f = 0), (d = requestAnimationFrame(m)));
              };
            t > 0 ? (f = window.setTimeout(_, t)) : _();
          },
          b = (e, t) => {
            (cancelAnimationFrame(d), window.clearTimeout(f), (a.value = ``), (s.value = ``), (c.value = ``));
            let n = Math.max(e.length, t.length),
              r = Array.from({ length: n }, (e, t) => or + (t / n) * ir + Math.random() * ar),
              o = Array.from({ length: n }, (n, r) => h(t[r] ?? e[r])),
              l = o.map(g),
              p = performance.now(),
              m = p;
            u.value = !0;
            let _ = (e) => {
              let n = (e - p) / rr;
              if (n >= 1) {
                ((i.value = t), (u.value = !1));
                return;
              }
              (e - m >= sr &&
                ((m = e),
                l.forEach((e, t) => {
                  l[t] = g(o[t]);
                })),
                (i.value = r
                  .map((e, r) => {
                    let i = t[r] ?? ``;
                    return n >= e || i === cr || (!i && n > e / 2) ? i : l[r];
                  })
                  .join(``)),
                (d = requestAnimationFrame(_)));
            };
            d = requestAnimationFrame(_);
          };
        return (
          t(
            () => n.text,
            (e, t) => {
              if (!p) {
                c.value = e;
                return;
              }
              if (v()) {
                i.value = e;
                return;
              }
              b(t, e);
            },
          ),
          N(() => {
            r && n.ready && y(n.text, n.typeDelay, n.typeDuration);
          }),
          t(
            () => n.ready,
            (e) => {
              e && !p && y(n.text, n.typeDelay, n.typeDuration);
            },
          ),
          m(() => {
            (cancelAnimationFrame(d), window.clearTimeout(f));
          }),
          (t, n) => (
            M(),
            _(
              `span`,
              { class: l([`scramble`, { "scramble--glitch": u.value }]) },
              [
                R(`span`, Xn, S(i.value), 1),
                a.value
                  ? (M(),
                    _(`span`, { key: i.value.length, class: `scramble__head`, "aria-hidden": `true` }, [
                      R(`span`, Zn, S(a.value), 1),
                      R(`span`, Qn, S(s.value), 1),
                    ]))
                  : L(``, !0),
                c.value ? (M(), _(`span`, $n, S(c.value), 1)) : L(``, !0),
                R(`span`, er, S(e.text), 1),
              ],
              2,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-e7237423`]],
  ),
  dr = [`aria-label`],
  fr = [`aria-label`],
  pr = [`src`],
  mr = [`src`, `alt`],
  hr = { class: `game-slider__title`, "aria-hidden": `true` },
  gr = { class: `game-slider__soon` },
  _r = [`aria-label`],
  vr = [`aria-label`],
  yr = { class: `game-slider__caption`, "aria-live": `polite` },
  br = { class: `game-slider__count` },
  xr = `(prefers-reduced-motion: reduce)`,
  Sr = 1,
  Cr = En(
    {
      __name: `GameSlider`,
      props: {
        slides: { type: Array, required: !0 },
        label: { type: String, required: !0 },
        prevLabel: { type: String, required: !0 },
        nextLabel: { type: String, required: !0 },
        soonLabel: { type: String, required: !0 },
      },
      setup(e) {
        let t = e,
          r = z(`track`),
          i = o(0),
          a = 0,
          s = -1,
          c = (e) => String(e).padStart(2, `0`),
          u = () => {
            a = 0;
            let e = r.value?.clientWidth ?? 0;
            if (!(e <= 0)) {
              if (s >= 0) {
                if (Math.abs(r.value.scrollLeft - s * e) > Sr) return;
                s = -1;
              }
              i.value = Math.min(Math.max(Math.round(r.value.scrollLeft / e), 0), t.slides.length - 1);
            }
          },
          d = () => {
            a ||= requestAnimationFrame(u);
          },
          f = () => {
            s = -1;
          },
          h = () => {
            (f(), u());
          },
          g = (e) => {
            let n = t.slides.length,
              a = (i.value + e + n) % n;
            ((i.value = a),
              (s = a),
              r.value.scrollTo({
                left: a * r.value.clientWidth,
                behavior: window.matchMedia(xr).matches ? `auto` : `smooth`,
              }));
          };
        return (
          m(() => {
            cancelAnimationFrame(a);
          }),
          (t, a) => (
            M(),
            _(
              `div`,
              { class: `game-slider`, role: `group`, "aria-roledescription": `carousel`, "aria-label": e.label },
              [
                R(
                  `ul`,
                  {
                    ref_key: `track`,
                    ref: r,
                    class: `game-slider__track`,
                    onScrollPassive: d,
                    onScrollend: h,
                    onPointerdown: f,
                    onWheelPassive: f,
                  },
                  [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        e.slides,
                        (t, n) => (
                          M(),
                          _(
                            `li`,
                            {
                              key: t.id,
                              class: `game-slider__slide`,
                              role: `group`,
                              "aria-roledescription": `slide`,
                              "aria-label": t.title
                                ? `${n + 1} / ${e.slides.length}: ${t.title}`
                                : `${n + 1} / ${e.slides.length}`,
                            },
                            [
                              t.photo
                                ? (M(),
                                  _(
                                    k,
                                    { key: 0 },
                                    [
                                      t.fit === `contain`
                                        ? (M(),
                                          _(
                                            `img`,
                                            {
                                              key: 0,
                                              class: `game-slider__image game-slider__image--haze`,
                                              src: t.photo,
                                              alt: ``,
                                              loading: `lazy`,
                                              decoding: `async`,
                                            },
                                            null,
                                            8,
                                            pr,
                                          ))
                                        : L(``, !0),
                                      R(
                                        `img`,
                                        {
                                          class: l([
                                            `game-slider__image`,
                                            { "game-slider__image--contain": t.fit === `contain` },
                                          ]),
                                          src: t.photo,
                                          alt: t.title || `${e.label} ${n + 1}`,
                                          loading: `lazy`,
                                          decoding: `async`,
                                        },
                                        null,
                                        10,
                                        mr,
                                      ),
                                    ],
                                    64,
                                  ))
                                : (M(),
                                  _(
                                    k,
                                    { key: 1 },
                                    [R(`span`, hr, S(t.title), 1), R(`span`, gr, S(e.soonLabel), 1)],
                                    64,
                                  )),
                            ],
                            8,
                            fr,
                          )
                        ),
                      ),
                      128,
                    )),
                  ],
                  544,
                ),
                R(
                  `button`,
                  {
                    type: `button`,
                    class: `game-slider__arrow game-slider__arrow--prev`,
                    "aria-label": e.prevLabel,
                    onClick: (a[0] ||= (e) => g(-1)),
                  },
                  [
                    ...(a[2] ||= [
                      R(
                        `svg`,
                        { viewBox: `0 0 24 24`, "aria-hidden": `true` },
                        [R(`path`, { d: `M15 5.5 8.5 12l6.5 6.5` })],
                        -1,
                      ),
                    ]),
                  ],
                  8,
                  _r,
                ),
                R(
                  `button`,
                  {
                    type: `button`,
                    class: `game-slider__arrow game-slider__arrow--next`,
                    "aria-label": e.nextLabel,
                    onClick: (a[1] ||= (e) => g(1)),
                  },
                  [
                    ...(a[3] ||= [
                      R(
                        `svg`,
                        { viewBox: `0 0 24 24`, "aria-hidden": `true` },
                        [R(`path`, { d: `M9 5.5 15.5 12 9 18.5` })],
                        -1,
                      ),
                    ]),
                  ],
                  8,
                  vr,
                ),
                R(`p`, yr, [
                  R(`span`, br, S(c(i.value + 1)) + ` / ` + S(c(e.slides.length)), 1),
                  n(` ` + S(e.slides[i.value].title ?? ``), 1),
                ]),
              ],
              8,
              dr,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-f24b7e27`]],
  ),
  wr = [`src`, `alt`],
  Tr = { class: `hobby-game__badge` },
  Er = { class: `hobby-game__stage` },
  Dr = { class: `hobby-game__note` },
  Or = [`src`, `title`],
  kr = { class: `hobby-game__bar` },
  Ar = { class: `hobby-game__stage` },
  jr = [`href`],
  Mr = `(min-width: 1025px) and (pointer: fine)`,
  Nr = 960,
  Pr = En(
    {
      __name: `HobbyGame`,
      props: { game: { type: Object, required: !0 }, title: { type: String, required: !0 } },
      setup(e) {
        let t = e,
          i = Tn(),
          a = z(`frame`),
          s = z(`screen`),
          c = o({ width: Nr, height: 0, scale: 1 }),
          u = o(!1),
          d = window.matchMedia(Mr),
          f = o(d.matches),
          p = () => {
            let e = s.value;
            if (!e) return;
            let t = e.clientWidth / Nr;
            c.value = { width: Nr, height: e.clientHeight / t, scale: t };
          },
          h = new ResizeObserver(p),
          g = async () => {
            (_n(`game_play`), (u.value = !0), await r(), p(), h.observe(s.value));
          },
          v = () => {
            (h.disconnect(), (u.value = !1), (c.value = { width: Nr, height: 0, scale: 1 }));
          },
          y = () => {
            ((f.value = d.matches), !f.value && u.value && v());
          };
        (N(() => d.addEventListener(`change`, y)),
          m(() => {
            (h.disconnect(), d.removeEventListener(`change`, y));
          }));
        let b = () => a.value?.focus();
        return (r, o) => (
          M(),
          _(
            `div`,
            { class: l([`hobby-game`, { "hobby-game--playing": u.value }]) },
            [
              u.value
                ? (M(),
                  _(
                    k,
                    { key: 1 },
                    [
                      R(
                        `div`,
                        { ref_key: `screen`, ref: s, class: `hobby-game__screen` },
                        [
                          c.value.height > 0
                            ? (M(),
                              _(
                                `iframe`,
                                {
                                  key: 0,
                                  ref_key: `frame`,
                                  ref: a,
                                  class: `hobby-game__frame`,
                                  src: t.game.url,
                                  title: `${e.title} — ${P(i).t(`hobbyGame`).frame}`,
                                  style: C({
                                    width: `${c.value.width}px`,
                                    height: `${c.value.height}px`,
                                    transform: `scale(${c.value.scale})`,
                                  }),
                                  allow: `fullscreen; autoplay; gamepad`,
                                  onLoad: b,
                                },
                                null,
                                44,
                                Or,
                              ))
                            : L(``, !0),
                        ],
                        512,
                      ),
                      R(`div`, kr, [
                        R(`span`, Ar, S(P(i).t(`hobbyGame`).stage), 1),
                        R(
                          `a`,
                          { class: `hobby-game__action`, href: t.game.url, target: `_blank`, rel: `noopener` },
                          [
                            n(S(P(i).t(`hobbyGame`).full) + ` `, 1),
                            (o[1] ||= R(`span`, { "aria-hidden": `true` }, `↗`, -1)),
                          ],
                          8,
                          jr,
                        ),
                        R(`button`, { type: `button`, class: `hobby-game__action`, onClick: v }, [
                          n(S(P(i).t(`hobbyGame`).close) + ` `, 1),
                          (o[2] ||= R(`span`, { "aria-hidden": `true` }, `×`, -1)),
                        ]),
                      ]),
                    ],
                    64,
                  ))
                : (M(),
                  _(
                    k,
                    { key: 0 },
                    [
                      R(
                        `img`,
                        {
                          class: `hobby-game__poster`,
                          src: t.game.poster,
                          alt: e.title,
                          loading: `lazy`,
                          decoding: `async`,
                        },
                        null,
                        8,
                        wr,
                      ),
                      R(`span`, Tr, [
                        R(`span`, Er, S(f.value ? P(i).t(`hobbyGame`).stage : P(i).t(`hobbyGame`).soon), 1),
                        R(`span`, Dr, S(f.value ? P(i).t(`hobbyGame`).note : P(i).t(`hobbyGame`).mobile), 1),
                      ]),
                      f.value
                        ? (M(),
                          _(`button`, { key: 0, type: `button`, class: `hobby-game__play`, onClick: g }, [
                            (o[0] ||= R(`span`, { "aria-hidden": `true` }, `▶`, -1)),
                            n(` ` + S(P(i).t(`hobbyGame`).play), 1),
                          ]))
                        : L(``, !0),
                    ],
                    64,
                  )),
            ],
            2,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-3b80c764`]],
  ),
  Fr = [`auto`, `scroll`, `overlay`];
function Ir(e) {
  for (let t = e?.parentElement; t; t = t.parentElement) if (Fr.includes(getComputedStyle(t).overflowY)) return t;
  return document.scrollingElement;
}
var Lr = `(prefers-reduced-motion: reduce)`;
function Rr(e, t, n = `0px`) {
  let r = o(window.matchMedia(Lr).matches),
    i = null;
  return (
    N(() => {
      if (r.value) return;
      let a = Ir(e.value);
      ((i = new IntersectionObserver(
        ([e]) => {
          e.isIntersecting && ((r.value = !0), i.disconnect());
        },
        { root: a === document.scrollingElement ? null : a, threshold: t, rootMargin: n },
      )),
        i.observe(e.value));
    }),
    m(() => {
      i?.disconnect();
    }),
    r
  );
}
var zr = {
    __name: `SeenBlock`,
    props: {
      tag: { type: String, default: `div` },
      threshold: { type: Number, default: 0.2 },
      margin: { type: String, default: `0px 0px -18% 0px` },
    },
    setup(e) {
      let t = e,
        n = z(`root`),
        r = Rr(n, t.threshold, t.margin);
      return (t, i) => (
        M(),
        E(
          c(e.tag),
          { ref_key: `root`, ref: n, class: l({ "site--seen": P(r) }) },
          { default: s(() => [h(t.$slots, `default`, { seen: P(r) })]), _: 3 },
          8,
          [`class`],
        )
      );
    },
  },
  Br = 400,
  Vr = {
    meter: 150,
    logo: 200,
    toggle: 400,
    nav: 380,
    navStep: 110,
    navDuration: 380,
    cta: 880,
    ctaDuration: 480,
    languages: 1050,
    demon: 1115,
    sound: 1180,
    kicker: 700,
    kickerDuration: 520,
    title: 950,
    titleDuration: 820,
    text: 1650,
    textDuration: 1250,
    facts: 2300,
    factStep: 180,
    factDuration: 420,
  },
  Hr = { kicker: 0, kickerDuration: 260, title: 90, titleDuration: Br, hint: 370, hintDuration: 680 },
  Ur = {
    number: 500,
    numberDuration: 240,
    name: 700,
    nameDuration: Br,
    text: 1100,
    textDuration: 1300,
    open: 1900,
    openDuration: 420,
    more: 150,
    moreDuration: 420,
  },
  Wr = {
    button: 550,
    buttonStep: 120,
    label: 100,
    labelDuration: 380,
    value: 250,
    valueDuration: 380,
    statusDuration: 520,
  },
  Gr = { text: 300, textStep: 700, textDuration: 2100, meta: 900, metaStep: 350, metaDuration: Br },
  Kr = { label: 0, labelDuration: Br, item: 350, itemStep: 120, itemDuration: 420 },
  qr = {
    period: 0,
    periodDuration: 360,
    company: 150,
    companyDuration: Br,
    role: 350,
    roleDuration: 380,
    summary: 550,
    summaryDuration: 1100,
    point: 1300,
    pointStep: 320,
    pointDuration: 1100,
  },
  Jr = {
    years: 0,
    yearsDuration: 420,
    degree: 250,
    degreeDuration: Br,
    field: 450,
    fieldDuration: 450,
    school: 500,
    schoolDuration: Br,
    note: 900,
    noteDuration: 1500,
  },
  Yr = { card: 150, cardStep: 160, status: 700, statusDuration: 900 },
  Xr = {
    text: 200,
    textDuration: 1600,
    card: 300,
    cardStep: 200,
    title: 500,
    titleDuration: Br,
    caption: 750,
    captionDuration: 1300,
  },
  Zr = {
    link: 300,
    linkStep: 160,
    linkDuration: 380,
    logo: 0,
    nav: 150,
    navStep: 90,
    navDuration: 320,
    copy: 450,
    copyDuration: 480,
  },
  Qr = { kicker: 150, kickerDuration: 260, title: 300, titleDuration: Br, text: 600, textDuration: 900, count: 900 },
  $r = (e) => ({ "--appear": `${e}ms` }),
  ei = { key: 0, class: `section-head__hint` },
  ti = 0.4,
  ni = En(
    {
      __name: `SectionHead`,
      props: {
        titleId: { type: String, required: !0 },
        kicker: { type: String, required: !0 },
        title: { type: String, required: !0 },
        hint: { type: String, default: `` },
        headingTag: { type: String, default: `h2` },
      },
      setup(e) {
        return (t, n) => (
          M(),
          E(
            zr,
            { class: `section-head`, threshold: ti },
            {
              default: s(({ seen: t }) => [
                R(
                  `p`,
                  { class: `section-head__kicker`, style: C(P($r)(P(Hr).kicker)) },
                  [
                    I(
                      H,
                      { text: e.kicker, "type-delay": P(Hr).kicker, "type-duration": P(Hr).kickerDuration, ready: t },
                      null,
                      8,
                      [`text`, `type-delay`, `type-duration`, `ready`],
                    ),
                  ],
                  4,
                ),
                (M(),
                E(
                  c(e.headingTag),
                  { id: e.titleId, class: `section-head__title` },
                  {
                    default: s(() => [
                      I(
                        H,
                        { text: e.title, "type-delay": P(Hr).title, "type-duration": P(Hr).titleDuration, ready: t },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]),
                    _: 2,
                  },
                  1032,
                  [`id`],
                )),
                e.hint
                  ? (M(),
                    _(`p`, ei, [
                      I(
                        H,
                        { text: e.hint, "type-delay": P(Hr).hint, "type-duration": P(Hr).hintDuration, ready: t },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]))
                  : L(``, !0),
              ]),
              _: 1,
            },
          )
        );
      },
    },
    [[`__scopeId`, `data-v-38b2a32f`]],
  ),
  ri = [],
  ii = { id: `about`, class: `site-about`, "aria-labelledby": `about-title` },
  ai = { class: `site-about__body` },
  oi = { class: `site-about__meta-label` },
  si = { class: `site-about__meta-value` },
  ci = { class: `site-about__hobbies` },
  li = { class: `site-about__hobbies-title` },
  ui = { class: `site-about__hobbies-text` },
  di = { class: `site-about__hobby-photo` },
  fi = [`src`, `alt`],
  pi = { class: `site-about__hobby-emblem`, "aria-hidden": `true` },
  mi = { class: `site-about__hobby-soon` },
  hi = { class: `site-about__hobby-title` },
  gi = { class: `site-about__hobby-text` },
  _i = 0.15,
  vi = En(
    {
      __name: `SiteAbout`,
      setup(e) {
        let t = { games: `>_`, lego: `[o o]`, play: `{ }` },
          n = (e) => Xr.card + e * Xr.cardStep,
          r = Tn();
        return (e, i) => (
          M(),
          _(`section`, ii, [
            I(ni, { "title-id": `about-title`, kicker: P(r).t(`aboutKicker`), title: P(r).t(`aboutTitle`) }, null, 8, [
              `kicker`,
              `title`,
            ]),
            R(`div`, ai, [
              I(
                zr,
                { class: `site-about__text`, threshold: _i },
                {
                  default: s(({ seen: e }) => [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        P(r).t(`aboutText`),
                        (t, n) => (
                          M(),
                          _(`p`, { key: n, class: `site-about__paragraph` }, [
                            I(
                              H,
                              {
                                text: t,
                                "type-delay": P(Gr).text + n * P(Gr).textStep,
                                "type-duration": P(Gr).textDuration,
                                ready: e,
                              },
                              null,
                              8,
                              [`text`, `type-delay`, `type-duration`, `ready`],
                            ),
                          ])
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ),
              I(
                zr,
                { tag: `dl`, class: `site-about__meta` },
                {
                  default: s(({ seen: e }) => [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        P(r).t(`aboutMeta`),
                        ([t, n], r) => (
                          M(),
                          _(
                            `div`,
                            { key: r, class: `site-about__meta-row`, style: C(P($r)(P(Gr).meta + r * P(Gr).metaStep)) },
                            [
                              R(`dt`, oi, [
                                I(
                                  H,
                                  {
                                    text: t,
                                    "type-delay": P(Gr).meta + r * P(Gr).metaStep,
                                    "type-duration": P(Gr).metaDuration,
                                    ready: e,
                                  },
                                  null,
                                  8,
                                  [`text`, `type-delay`, `type-duration`, `ready`],
                                ),
                              ]),
                              R(`dd`, si, [
                                I(
                                  H,
                                  {
                                    text: n,
                                    "type-delay": P(Gr).meta + r * P(Gr).metaStep,
                                    "type-duration": P(Gr).metaDuration,
                                    ready: e,
                                  },
                                  null,
                                  8,
                                  [`text`, `type-delay`, `type-duration`, `ready`],
                                ),
                              ]),
                            ],
                            4,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ]),
            R(`div`, ci, [
              I(
                zr,
                { class: `site-about__hobbies-head` },
                {
                  default: s(({ seen: e }) => [
                    R(`h3`, li, [
                      I(
                        H,
                        {
                          text: P(r).t(`hobbiesTitle`),
                          "type-delay": 0,
                          "type-duration": P(Xr).titleDuration,
                          ready: e,
                        },
                        null,
                        8,
                        [`text`, `type-duration`, `ready`],
                      ),
                    ]),
                    R(`p`, ui, [
                      I(
                        H,
                        {
                          text: P(r).t(`hobbiesText`),
                          "type-delay": P(Xr).text,
                          "type-duration": P(Xr).textDuration,
                          ready: e,
                        },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]),
                  ]),
                  _: 1,
                },
              ),
              I(
                zr,
                { tag: `ul`, class: `site-about__hobby-list`, threshold: _i },
                {
                  default: s(({ seen: e }) => [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        P(ri),
                        (i, a) => (
                          M(),
                          _(
                            `li`,
                            { key: i.id, class: `site-about__hobby`, style: C(P($r)(n(a))) },
                            [
                              R(`div`, di, [
                                i.slides
                                  ? (M(),
                                    E(
                                      Cr,
                                      {
                                        key: 0,
                                        slides: i.slides,
                                        label: P(r).t(`hobbySlider`)[i.id].label,
                                        "prev-label": P(r).t(`hobbySlider`)[i.id].prev,
                                        "next-label": P(r).t(`hobbySlider`)[i.id].next,
                                        "soon-label": P(r).t(`hobbyPhoto`),
                                      },
                                      null,
                                      8,
                                      [`slides`, `label`, `prev-label`, `next-label`, `soon-label`],
                                    ))
                                  : i.game
                                    ? (M(),
                                      E(Pr, { key: 1, game: i.game, title: P(r).t(`hobbies`)[i.id].title }, null, 8, [
                                        `game`,
                                        `title`,
                                      ]))
                                    : i.photo
                                      ? (M(),
                                        _(
                                          `img`,
                                          {
                                            key: 2,
                                            class: `site-about__hobby-image`,
                                            src: i.photo,
                                            alt: P(r).t(`hobbies`)[i.id].title,
                                            loading: `lazy`,
                                            decoding: `async`,
                                          },
                                          null,
                                          8,
                                          fi,
                                        ))
                                      : (M(),
                                        _(
                                          k,
                                          { key: 3 },
                                          [R(`span`, pi, S(t[i.id]), 1), R(`span`, mi, S(P(r).t(`hobbyPhoto`)), 1)],
                                          64,
                                        )),
                              ]),
                              R(`h4`, hi, [
                                I(
                                  H,
                                  {
                                    text: P(r).t(`hobbies`)[i.id].title,
                                    "type-delay": n(a) + P(Xr).title,
                                    "type-duration": P(Xr).titleDuration,
                                    ready: e,
                                  },
                                  null,
                                  8,
                                  [`text`, `type-delay`, `type-duration`, `ready`],
                                ),
                              ]),
                              R(`p`, gi, [
                                I(
                                  H,
                                  {
                                    text: P(r).t(`hobbies`)[i.id].text,
                                    "type-delay": n(a) + P(Xr).caption,
                                    "type-duration": P(Xr).captionDuration,
                                    ready: e,
                                  },
                                  null,
                                  8,
                                  [`text`, `type-delay`, `type-duration`, `ready`],
                                ),
                              ]),
                            ],
                            4,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ]),
          ])
        );
      },
    },
    [[`__scopeId`, `data-v-4bb52d3f`]],
  ),
  yi = [
    { id: `frontend`, items: [`React`, `TypeScript`, `JavaScript`, `HTML / CSS`, `Tailwind CSS`, `shadcn/ui`, `Vite`] },
    { id: `backend`, items: [`Node.js`, `Python`, `PHP`, `SQL`, `PostgreSQL`, `Supabase`, `Edge Functions`] },
    { id: `ai`, items: [`Claude`, `Gemini`, `GPT`, `Prompt engineering`, `RAG`, `AI automation`] },
    { id: `product`, items: [`PRD`, `User flows`, `Prototyping`, `Design systems`] },
    { id: `tooling`, items: [`Git`, `GitHub`, `AWS`, `REST APIs`, `C / C++`] },
  ],
  bi = [
    { id: `viver`, company: `Viver de IA`, role: ``, from: `08.2026`, to: `08.2026`, mode: `part`, tags: [`WhatsApp API`, `AI agents`, `Automation`] },
    { id: `eldorado`, company: `Instituto Eldorado`, role: ``, from: `12.2025`, to: `12.2025`, mode: `part`, tags: [`Cybersecurity`] },
    { id: `cloud`, company: `AWS Training`, role: ``, from: `12.2025`, to: `12.2025`, mode: `part`, tags: [`AWS`, `Cloud`] },
    { id: `genai`, company: `DIO · AWS Nexa`, role: ``, from: `11.2025`, to: `12.2025`, mode: `full`, tags: [`Bedrock`, `SageMaker`, `GenAI`] },
    { id: `santander`, company: `Santander · Alura · DIO`, role: ``, from: `06.2025`, to: `01.2026`, mode: `full`, tags: [`Java`, `Spring Boot`, `Angular`, `Git`, `SQL`] },
    { id: `others`, company: `Outros cursos`, role: ``, from: ``, to: ``, mode: `alongside`, tags: [`Office`, `Gestão`] },
  ],
  xi = [{ id: `udf`, school: `udf`, from: `2025`, to: `2028` }],
  Si = { id: `education`, class: `site-education`, "aria-labelledby": `education-title` },
  Ci = { class: `site-education__list` },
  wi = { class: `site-education__years` },
  Ti = { class: `site-education__degree-box` },
  Ei = { class: `site-education__degree` },
  Di = { class: `site-education__field` },
  Oi = { class: `site-education__school-box` },
  ki = { class: `site-education__school` },
  Ai = { class: `site-education__note` },
  ji = ` — `,
  Mi = `, `,
  Ni = En(
    {
      __name: `SiteEducation`,
      setup(e) {
        let t = Tn(),
          n = (e) => t.t(`schools`)[e.school],
          r = (e) => t.t(`education`)[e.id];
        return (e, i) => (
          M(),
          _(`section`, Si, [
            I(
              ni,
              { "title-id": `education-title`, kicker: P(t).t(`educationKicker`), title: P(t).t(`educationTitle`) },
              null,
              8,
              [`kicker`, `title`],
            ),
            R(`ol`, Ci, [
              (M(!0),
              _(
                k,
                null,
                p(
                  P(xi),
                  (e) => (
                    M(),
                    E(
                      zr,
                      { key: e.id, tag: `li`, class: `site-education__entry`, style: C(P($r)(P(Jr).years)) },
                      {
                        default: s(({ seen: t }) => [
                          R(`span`, wi, [
                            I(
                              H,
                              {
                                text: `${e.from}${ji}${e.to}`,
                                "type-delay": P(Jr).years,
                                "type-duration": P(Jr).yearsDuration,
                                ready: t,
                              },
                              null,
                              8,
                              [`text`, `type-delay`, `type-duration`, `ready`],
                            ),
                          ]),
                          R(`div`, Ti, [
                            R(`span`, Ei, [
                              I(
                                H,
                                {
                                  text: r(e).degree,
                                  "type-delay": P(Jr).degree,
                                  "type-duration": P(Jr).degreeDuration,
                                  ready: t,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`span`, Di, [
                              I(
                                H,
                                {
                                  text: r(e).field,
                                  "type-delay": P(Jr).field,
                                  "type-duration": P(Jr).fieldDuration,
                                  ready: t,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                          ]),
                          R(`div`, Oi, [
                            R(`span`, ki, [
                              I(
                                H,
                                {
                                  text: `${n(e).name}${Mi}${n(e).city}`,
                                  "type-delay": P(Jr).school,
                                  "type-duration": P(Jr).schoolDuration,
                                  ready: t,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`span`, Ai, [
                              I(
                                H,
                                {
                                  text: r(e).note,
                                  "type-delay": P(Jr).note,
                                  "type-duration": P(Jr).noteDuration,
                                  ready: t,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                          ]),
                        ]),
                        _: 2,
                      },
                      1032,
                      [`style`],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      },
    },
    [[`__scopeId`, `data-v-89e583ef`]],
  ),
  Pi = { id: `experience`, class: `site-experience`, "aria-labelledby": `experience-title` },
  Fi = { class: `site-experience__list` },
  Ii = { class: `site-experience__when` },
  Li = { class: `site-experience__period` },
  Ri = { class: `site-experience__mode` },
  zi = { class: `site-experience__what` },
  Bi = { class: `site-experience__company` },
  Vi = { class: `site-experience__role` },
  Hi = { class: `site-experience__summary` },
  Ui = { class: `site-experience__points` },
  Wi = ` — `,
  Gi = En(
    {
      __name: `SiteExperience`,
      setup(e) {
        let t = Tn(),
          n = (e) => t.t(`experience`)[e.id],
          r = (e) => (e.from ? (e.to === e.from ? e.from : `${e.from}${Wi}${e.to || t.t(`experiencePresent`)}`) : t.t(`experienceAlongside`));
        return (e, i) => (
          M(),
          _(`section`, Pi, [
            I(
              ni,
              {
                "title-id": `experience-title`,
                kicker: P(t).t(`experienceKicker`),
                title: P(t).t(`experienceTitle`),
                hint: P(t).t(`experienceHint`),
              },
              null,
              8,
              [`kicker`, `title`, `hint`],
            ),
            R(`ol`, Fi, [
              (M(!0),
              _(
                k,
                null,
                p(
                  P(bi),
                  (e) => (
                    M(),
                    E(
                      zr,
                      { key: e.id, tag: `li`, class: `site-experience__job`, style: C(P($r)(P(qr).period)) },
                      {
                        default: s(({ seen: i }) => [
                          R(`div`, Ii, [
                            R(`span`, Li, [
                              I(
                                H,
                                {
                                  text: r(e),
                                  "type-delay": P(qr).period,
                                  "type-duration": P(qr).periodDuration,
                                  ready: i,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`span`, Ri, [
                              I(
                                H,
                                {
                                  text: P(t).t(`experienceModes`)[e.mode],
                                  "type-delay": P(qr).period,
                                  "type-duration": P(qr).periodDuration,
                                  ready: i,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                          ]),
                          R(`div`, zi, [
                            R(`h3`, Bi, [
                              I(
                                H,
                                {
                                  text: n(e).company ?? e.company,
                                  "type-delay": P(qr).company,
                                  "type-duration": P(qr).companyDuration,
                                  ready: i,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`p`, Vi, [
                              I(
                                H,
                                {
                                  text: n(e).role ?? e.role,
                                  "type-delay": P(qr).role,
                                  "type-duration": P(qr).roleDuration,
                                  ready: i,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`p`, Hi, [
                              I(
                                H,
                                {
                                  text: n(e).summary,
                                  "type-delay": P(qr).summary,
                                  "type-duration": P(qr).summaryDuration,
                                  ready: i,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`ul`, Ui, [
                              (M(!0),
                              _(
                                k,
                                null,
                                p(
                                  n(e).points,
                                  (e, t) => (
                                    M(),
                                    _(
                                      `li`,
                                      {
                                        key: t,
                                        class: `site-experience__point`,
                                        style: C(P($r)(P(qr).point + t * P(qr).pointStep)),
                                      },
                                      [
                                        I(
                                          H,
                                          {
                                            text: e,
                                            "type-delay": P(qr).point + t * P(qr).pointStep,
                                            "type-duration": P(qr).pointDuration,
                                            ready: i,
                                          },
                                          null,
                                          8,
                                          [`text`, `type-delay`, `type-duration`, `ready`],
                                        ),
                                      ],
                                      4,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                            R(
                              `ul`,
                              {
                                class: `site-experience__tags`,
                                style: C(P($r)(P(qr).point + n(e).points.length * P(qr).pointStep)),
                              },
                              [
                                (M(!0),
                                _(
                                  k,
                                  null,
                                  p(e.tags, (e) => (M(), _(`li`, { key: e, class: `site-experience__tag` }, S(e), 1))),
                                  128,
                                )),
                              ],
                              4,
                            ),
                          ]),
                        ]),
                        _: 2,
                      },
                      1032,
                      [`style`],
                    )
                  ),
                ),
                128,
              )),
            ]),
          ])
        );
      },
    },
    [[`__scopeId`, `data-v-2e6fe251`]],
  ),
  Ki = `50% 0px`;
function qi(e, t = Ki) {
  let n = o(!0),
    r = null;
  return (
    N(() => {
      let i = e.value?.$el ?? e.value,
        a = Ir(i);
      ((r = new IntersectionObserver(
        (e) => {
          n.value = e[e.length - 1].isIntersecting;
        },
        { root: a === document.scrollingElement ? null : a, rootMargin: t },
      )),
        r.observe(i));
    }),
    m(() => {
      r?.disconnect();
    }),
    n
  );
}
var Ji = 60,
  Yi = [220, 900],
  Xi = [30, 65],
  Zi = [3, 7],
  Qi = [1, 3],
  $i = [0.6, 3],
  ea = [7, 24],
  ta = 0.4,
  na = [3, 24],
  ra = 0.65,
  ia = 0.45,
  aa = [1, 6],
  oa = 100,
  sa = ([e, t]) => e + Math.random() * (t - e),
  ca = (e) => Math.round(sa(e)),
  la = () => (Math.random() < 0.5 ? -1 : 1),
  ua = (e) => `${e.toFixed(1)}%`,
  da = () =>
    `polygon(${Array.from({ length: ca(Qi) }, () => {
      let e = sa(Math.random() < ta ? ea : $i),
        t = Math.random() * (oa - e);
      return [t, t + e];
    })
      .sort((e, t) => e[0] - t[0])
      .flatMap(([e, t]) => [`0% ${ua(e)}`, `100% ${ua(e)}`, `100% ${ua(t)}`, `0% ${ua(t)}`])
      .join(`, `)})`;
function fa(e) {
  let t = e.querySelector(`img`),
    n = [...e.querySelectorAll(`[data-glitch-layer]`)],
    r = 0,
    i = () => {
      (n.forEach((e) => {
        e.style.opacity = `0`;
      }),
        (t.style.transform = ``));
    },
    a = () => {
      (n.forEach((e) => {
        if (Math.random() > ra) {
          e.style.opacity = `0`;
          return;
        }
        ((e.style.opacity = `1`),
          (e.style.clipPath = da()),
          (e.style.transform = `translateX(${(la() * sa(na)).toFixed(1)}px)`));
      }),
        (t.style.transform = Math.random() < ia ? `translateX(${(la() * sa(aa)).toFixed(1)}px)` : ``));
    },
    o = (e) => {
      if (e === 0) {
        (i(), (r = window.setTimeout(() => o(ca(Zi)), sa(Yi))));
        return;
      }
      (a(), (r = window.setTimeout(() => o(e - 1), sa(Xi))));
    };
  return (
    (r = window.setTimeout(() => o(ca(Zi)), Ji)),
    () => {
      (window.clearTimeout(r),
        i(),
        n.forEach((e) => {
          ((e.style.clipPath = ``), (e.style.transform = ``));
        }));
    }
  );
}
var pa = ``,
  ma = ``,
  ha = ``,
  ga = ``,
  _a = [
    { id: `linkedin`, name: `LinkedIn`, url: `https://www.linkedin.com/in/pedro-guimarães-8b1411372/`, handle: `in/pedro-guimarães`, icon: [`M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z`, `M7.5 10.5V17`, `M7.5 7.2v.1`, `M11.5 17v-6.5`, `M11.5 13.6c0-1.9 1.2-3.1 2.8-3.1s2.4 1.1 2.4 3V17`] },
    { id: `github`, name: `GitHub`, url: `https://github.com/pedrodereky`, handle: `pedrodereky`, icon: [`M9 19c-5 1.5-5-2.5-7-3`, `M16 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`] },
    { id: `email`, name: `E-mail`, url: `mailto:pedro.derek@icloud.com`, handle: `pedro.derek@icloud.com`, icon: [`M3 5h18v14H3z`, `M3 7l9 6 9-6`] },
  ],
  va = [
    `M9 19c-5 1.5-5-2.5-7-3`,
    `M16 22v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22`,
  ],
  ya = [
    `M2 12a10 10 0 1 0 20 0a10 10 0 1 0 -20 0`,
    `M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32`,
  ],
  ba = _a[0].icon,
  xa = _a[0].icon,
  Sa = _a[0].icon,
  Ca = [],
  wa = { class: `site-friends__head` },
  Ta = [`onMouseenter`],
  Ea = [`src`, `alt`],
  Da = { class: `site-friends__soon` },
  Oa = { class: `site-friends__stamp` },
  ka = { class: `site-friends__index` },
  Aa = { class: `site-friends__name` },
  ja = [`aria-label`],
  Ma = { class: `site-friends__role` },
  Na = { key: 0, class: `site-friends__links` },
  Pa = [`href`, `aria-label`, `title`],
  Fa = { class: `site-friends__icon`, viewBox: `0 0 24 24`, "aria-hidden": `true` },
  Ia = [`d`],
  La = { key: 1, class: `site-friends__status` },
  Ra = 0.15,
  za = `(prefers-reduced-motion: reduce)`,
  Ba = En(
    {
      __name: `SiteFriends`,
      setup(e) {
        let t = [
            [64, 36],
            [48, 52],
            [72, 26],
            [42, 50],
          ],
          r = Tn(),
          i = qi(z(`root`)),
          a = (e) => e.name?.[r.code] ?? ``,
          o = (e) => Yr.card + e * Yr.cardStep,
          c = (e) => t[e % t.length],
          u = new Map(),
          d = (e, t) => {
            let n = e.currentTarget;
            !t.photo ||
              u.has(n) ||
              window.matchMedia(za).matches ||
              u.set(n, fa(n.querySelector(`.site-friends__photo`)));
          },
          f = (e) => {
            (u.get(e.currentTarget)?.(), u.delete(e.currentTarget));
          };
        return (
          m(() => {
            (u.forEach((e) => e()), u.clear());
          }),
          (e, t) => (
            M(),
            _(
              `section`,
              {
                id: `friends`,
                ref: `root`,
                class: l([`site-friends`, { "site-friends--idle": !P(i) }]),
                "aria-labelledby": `friends-title`,
              },
              [
                R(`div`, wa, [
                  I(
                    ni,
                    {
                      "title-id": `friends-title`,
                      kicker: P(r).t(`friendsKicker`),
                      title: P(r).t(`friendsTitle`),
                      hint: P(r).t(`friendsHint`),
                    },
                    null,
                    8,
                    [`kicker`, `title`, `hint`],
                  ),
                ]),
                I(
                  zr,
                  { tag: `ul`, class: `site-friends__cards`, threshold: Ra },
                  {
                    default: s(({ seen: e }) => [
                      (M(!0),
                      _(
                        k,
                        null,
                        p(
                          P(Ca),
                          (i, s) => (
                            M(),
                            _(
                              `li`,
                              {
                                key: i.id,
                                class: l([`site-friends__card`, { "site-friends__card--filled": i.name }]),
                                style: C(P($r)(o(s))),
                                onMouseenter: (e) => d(e, i),
                                onMouseleave: f,
                              },
                              [
                                (t[7] ||= R(
                                  `span`,
                                  { class: `site-friends__corners`, "aria-hidden": `true` },
                                  null,
                                  -1,
                                )),
                                R(
                                  `div`,
                                  {
                                    class: l([`site-friends__photo`, { "site-friends__photo--real": i.photo }]),
                                    style: C(i.photo ? { "--photo": `url(${i.photo})` } : null),
                                  },
                                  [
                                    i.photo
                                      ? (M(),
                                        _(
                                          k,
                                          { key: 0 },
                                          [
                                            R(
                                              `img`,
                                              {
                                                class: `site-friends__image`,
                                                src: i.photo,
                                                alt: a(i),
                                                loading: `lazy`,
                                                decoding: `async`,
                                              },
                                              null,
                                              8,
                                              Ea,
                                            ),
                                            (M(),
                                            _(
                                              k,
                                              null,
                                              p([`raw`, `ink`, `alarm`], (e) =>
                                                R(
                                                  `span`,
                                                  {
                                                    key: e,
                                                    class: l(`site-friends__split site-friends__split--${e}`),
                                                    "data-glitch-layer": ``,
                                                    "aria-hidden": `true`,
                                                  },
                                                  null,
                                                  2,
                                                ),
                                              ),
                                              64,
                                            )),
                                            (t[0] ||= R(
                                              `span`,
                                              { class: `site-friends__noise`, "aria-hidden": `true` },
                                              null,
                                              -1,
                                            )),
                                            (t[1] ||= R(
                                              `span`,
                                              { class: `site-friends__scan`, "aria-hidden": `true` },
                                              null,
                                              -1,
                                            )),
                                          ],
                                          64,
                                        ))
                                      : (M(),
                                        _(
                                          k,
                                          { key: 1 },
                                          [
                                            R(`span`, Da, [
                                              (t[2] ||= R(
                                                `span`,
                                                { class: `site-friends__soon-dot`, "aria-hidden": `true` },
                                                null,
                                                -1,
                                              )),
                                              n(` ` + S(P(r).t(`friendsSoon`)), 1),
                                            ]),
                                            (t[3] ||= R(
                                              `span`,
                                              { class: `site-friends__noise`, "aria-hidden": `true` },
                                              null,
                                              -1,
                                            )),
                                            (t[4] ||= R(
                                              `span`,
                                              { class: `site-friends__glyph`, "aria-hidden": `true` },
                                              `?`,
                                              -1,
                                            )),
                                            R(`span`, Oa, S(P(r).t(`friendsCard`).hacked), 1),
                                          ],
                                          64,
                                        )),
                                  ],
                                  6,
                                ),
                                R(`p`, ka, ` #` + S(String(s + 1).padStart(2, `0`)), 1),
                                R(`h3`, Aa, [
                                  i.name
                                    ? (M(), _(k, { key: 0 }, [n(S(a(i)), 1)], 64))
                                    : (M(),
                                      _(
                                        `span`,
                                        {
                                          key: 1,
                                          class: `site-friends__redacted`,
                                          role: `img`,
                                          "aria-label": P(r).t(`friendsCard`).name,
                                        },
                                        [
                                          (M(!0),
                                          _(
                                            k,
                                            null,
                                            p(
                                              c(s),
                                              (e, t) => (
                                                M(),
                                                _(
                                                  `span`,
                                                  { key: t, class: `site-friends__bar`, style: C({ width: `${e}%` }) },
                                                  null,
                                                  4,
                                                )
                                              ),
                                            ),
                                            128,
                                          )),
                                        ],
                                        8,
                                        ja,
                                      )),
                                ]),
                                R(`p`, Ma, S(i.role ?? P(r).t(`friendsCard`).role), 1),
                                i.links.length
                                  ? (M(),
                                    _(`ul`, Na, [
                                      (M(!0),
                                      _(
                                        k,
                                        null,
                                        p(
                                          i.links,
                                          (e) => (
                                            M(),
                                            _(`li`, { key: e.id }, [
                                              R(
                                                `a`,
                                                {
                                                  class: `site-friends__link`,
                                                  href: e.url,
                                                  target: `_blank`,
                                                  rel: `noopener`,
                                                  "aria-label": `${e.name} — ${a(i)}`,
                                                  title: e.name,
                                                },
                                                [
                                                  (M(),
                                                  _(`svg`, Fa, [
                                                    (M(!0),
                                                    _(
                                                      k,
                                                      null,
                                                      p(
                                                        e.icon,
                                                        (e, t) => (M(), _(`path`, { key: t, d: e }, null, 8, Ia)),
                                                      ),
                                                      128,
                                                    )),
                                                  ])),
                                                ],
                                                8,
                                                Pa,
                                              ),
                                            ])
                                          ),
                                        ),
                                        128,
                                      )),
                                    ]))
                                  : L(``, !0),
                                i.name
                                  ? L(``, !0)
                                  : (M(),
                                    _(`p`, La, [
                                      (t[5] ||= R(`span`, { "aria-hidden": `true` }, `> `, -1)),
                                      I(
                                        H,
                                        {
                                          text: P(r).t(`friendsCard`).status,
                                          "type-delay": o(s) + P(Yr).status,
                                          "type-duration": P(Yr).statusDuration,
                                          ready: e,
                                        },
                                        null,
                                        8,
                                        [`text`, `type-delay`, `type-duration`, `ready`],
                                      ),
                                      (t[6] ||= R(
                                        `span`,
                                        { class: `site-friends__cursor`, "aria-hidden": `true` },
                                        `_`,
                                        -1,
                                      )),
                                    ])),
                              ],
                              46,
                              Ta,
                            )
                          ),
                        ),
                        128,
                      )),
                    ]),
                    _: 1,
                  },
                ),
              ],
              2,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-4b19b13a`]],
  ),
  Va = {
    siteKey: `RECAPTCHA_SITE_KEY`,
    src: `https://www.google.com/recaptcha/api.js?render=`,
    privacyUrl: `https://policies.google.com/privacy`,
    termsUrl: `https://policies.google.com/terms`,
  },
  Ha = `captcha`,
  Ua = null,
  Wa = () =>
    new Promise((e, t) => {
      let n = document.createElement(`script`);
      ((n.src = `${Va.src}${encodeURIComponent(Va.siteKey)}`),
        (n.async = !0),
        (n.onload = () => window.grecaptcha.ready(() => e(window.grecaptcha))),
        (n.onerror = () => {
          (n.remove(), t(Error(Ha)));
        }),
        document.head.append(n));
    });
function Ga() {
  return Va.siteKey
    ? ((Ua ??= Wa().catch((e) => {
        throw ((Ua = null), e);
      })),
      Ua)
    : null;
}
var Ka = () => {
  Ga()?.catch(() => {});
};
async function qa(e) {
  return Va.siteKey ? (await Ga()).execute(Va.siteKey, { action: e }) : ``;
}
var Ja = { key: 0, class: `site-form__consent` },
  Ya = [`href`],
  Xa = [`href`],
  Za = {
    __name: `RecaptchaNote`,
    setup(e) {
      let t = Tn(),
        r = F(() => t.t(`form`).captcha);
      return (e, t) =>
        P(Va).siteKey
          ? (M(),
            _(`p`, Ja, [
              n(S(r.value.lead) + ` `, 1),
              R(`a`, { href: P(Va).privacyUrl, target: `_blank`, rel: `noopener` }, S(r.value.privacy), 9, Ya),
              n(` ` + S(r.value.and) + ` `, 1),
              R(`a`, { href: P(Va).termsUrl, target: `_blank`, rel: `noopener` }, S(r.value.terms), 9, Xa),
              n(` ` + S(r.value.tail), 1),
            ]))
          : L(``, !0);
    },
  },
  Qa = {
    url: `FORM_ENDPOINT`,
    timeoutMs: 3e4,
    demoMs: 900,
  },
  $a = `not-configured`,
  eo = `rejected`;
async function to(e) {
  if (!Qa.url) throw Error($a);
  let t = await qa(e.kind),
    n = new AbortController(),
    r = window.setTimeout(() => n.abort(), Qa.timeoutMs);
  try {
    let r = await fetch(Qa.url, {
      method: `POST`,
      headers: { "Content-Type": `text/plain;charset=utf-8` },
      body: JSON.stringify({ ...e, captcha: t }),
      signal: n.signal,
    });
    if (!r.ok) throw Error(String(r.status));
    let i = await r.json();
    if (!i.ok) throw Error(i.error ?? eo);
    return i;
  } finally {
    window.clearTimeout(r);
  }
}
async function no() {
  if (!Qa.url) throw Error($a);
  let e = await fetch(Qa.url, { signal: AbortSignal.timeout(Qa.timeoutMs) });
  if (!e.ok) throw Error(String(e.status));
  return e.json();
}
var ro = { maxFileBytes: 20971520, maxSide: 1920, type: `image/jpeg`, quality: 0.85, extension: `.jpg`, fill: `#fff` },
  io = `too-big`,
  ao = `not-image`,
  oo = /^image\//,
  so = /\.[^.]+$/,
  co = `screenshot`;
async function lo(e) {
  if (!oo.test(e.type)) throw Error(ao);
  if (e.size > ro.maxFileBytes) throw Error(io);
  let t = await createImageBitmap(e).catch(() => {
      throw Error(ao);
    }),
    n = Math.min(1, ro.maxSide / Math.max(t.width, t.height)),
    r = document.createElement(`canvas`);
  ((r.width = Math.round(t.width * n)), (r.height = Math.round(t.height * n)));
  let i = r.getContext(`2d`);
  ((i.fillStyle = ro.fill), i.fillRect(0, 0, r.width, r.height), i.drawImage(t, 0, 0, r.width, r.height), t.close());
  let a = r.toDataURL(ro.type, ro.quality);
  return {
    name: `${(e.name || co).replace(so, ``)}${ro.extension}`,
    type: ro.type,
    data: a.slice(a.indexOf(`,`) + 1),
    preview: a,
  };
}
var uo = (e) => [...(e.clipboardData?.files ?? [])].find((e) => oo.test(e.type)) ?? null,
  fo = () => ({
    url: window.location.href,
    userAgent: navigator.userAgent,
    viewport: `${window.innerWidth}×${window.innerHeight}`,
    screen: `${window.screen.width}×${window.screen.height} @${window.devicePixelRatio}x`,
  }),
  po = async (e) => {
    (await to({ kind: `bug`, ...e, ...fo() }), _n(`bug_report`, { screenshot: !!e.screenshot }));
  },
  mo = { nameLetters: 2, messageMin: 10, messageLetters: 6, phoneDigitsMin: 10, phoneDigitsMax: 15 },
  ho = `brief`,
  go = /^[^\s@]+@[^\s@.]+(\.[^\s@.]+)*\.[a-z]{2,}$/i,
  _o = /^@[A-Za-z0-9_]{5,32}$/,
  vo = /^\+?[\d\s()-]+$/,
  yo = /^(https?:\/\/)?(t\.me|wa\.me|instagram\.com|www\.instagram\.com|linkedin\.com|www\.linkedin\.com)\/\S+$/i,
  bo = /\p{L}/gu,
  xo = /\D/g,
  So = /\p{N}/u,
  Co = (e) => e.match(bo)?.length ?? 0,
  wo = (e) => {
    let t = e.replace(xo, ``).length;
    return vo.test(e) && t >= mo.phoneDigitsMin && t <= mo.phoneDigitsMax;
  },
  To = (e) => {
    let t = e.trim();
    return [go, _o, yo].some((e) => e.test(t)) || wo(t);
  },
  Eo = (e) => So.test(e),
  Do = (e) => Co(e) >= mo.nameLetters && !Eo(e),
  Oo = (e) => e.trim().length >= mo.messageMin && Co(e) >= mo.messageLetters,
  ko = async (e) => {
    (await to({ kind: ho, ...e }),
      _n(`generate_lead`, { form: e.source, budget: e.budget ?? ``, language: e.language }));
  },
  Ao = { key: 0, class: `site-form__sent`, role: `status` },
  jo = { class: `site-form__sent-title` },
  Mo = { class: `site-form__sent-text` },
  No = { class: `site-form__field` },
  Po = [`for`],
  Fo = [`id`, `placeholder`, `aria-invalid`, `aria-describedby`],
  Io = [`id`],
  Lo = { class: `site-form__field` },
  Ro = { class: `site-form__label` },
  zo = { key: 0, class: `bug-form__shot` },
  Bo = [`src`, `alt`],
  Vo = [`aria-label`],
  Ho = { key: 1, class: `bug-form__pick` },
  Uo = [`aria-describedby`],
  Wo = [`id`],
  Go = [`id`],
  Ko = { class: `site-form__field` },
  qo = [`for`],
  Jo = [`id`, `placeholder`, `aria-invalid`, `aria-describedby`],
  Yo = [`id`],
  Xo = { class: `site-form__actions` },
  Zo = [`disabled`],
  Qo = { class: `site-form__hint` },
  $o = { class: `site-form__consent` },
  es = [`href`],
  ts = { key: 0, class: `site-form__note`, role: `alert` },
  ns = `bug`,
  rs = En(
    {
      __name: `BugForm`,
      props: { active: { type: Boolean, default: !1 } },
      emits: [`sent`],
      setup(e, { emit: t }) {
        let i = e,
          a = t,
          s = { idle: `idle`, sending: `sending`, sent: `sent`, failed: `failed`, offline: `offline` },
          c = { [io]: `shotTooBig`, [ao]: `shotNotImage` },
          u = Tn(),
          d = F(() => u.t(`bugReport`)),
          f = F(() => u.t(`form`)),
          p = z(`messageInput`),
          h = z(`fileInput`),
          g = () => ({ message: ``, contact: ``, company: `` }),
          v = x(g()),
          b = x({ message: !1, contact: !1 }),
          C = o(!1),
          w = o(s.idle),
          T = o(null),
          E = o(``),
          D = o(!1),
          O = F(() => {
            let e = v.message.trim(),
              t = v.contact.trim(),
              n = ``;
            return (
              e ? Oo(e) || (n = d.value.messageShort) : (n = f.value.required),
              { message: n, contact: t && !To(t) ? d.value.contactInvalid : `` }
            );
          }),
          j = (e) => (C.value || b[e] ? O.value[e] : ``),
          te = async (e) => {
            if (e) {
              ((E.value = ``), (D.value = !0));
              try {
                T.value = await lo(e);
              } catch (e) {
                E.value = d.value[c[e.message] ?? c[`not-image`]];
              } finally {
                D.value = !1;
              }
            }
          },
          ne = (e) => {
            (te(e.target.files?.[0]), (e.target.value = ``));
          },
          re = (e) => {
            let t = i.active && w.value !== s.sent ? uo(e) : null;
            t && (e.preventDefault(), te(t));
          },
          ie = () => {
            ((T.value = null), (E.value = ``), h.value?.focus());
          },
          ae = async () => {
            if (((C.value = !0), O.value.message)) {
              p.value?.focus();
              return;
            }
            if (!(O.value.contact || D.value)) {
              if (v.company) {
                w.value = s.sent;
                return;
              }
              w.value = s.sending;
              try {
                (await po({
                  message: v.message.trim(),
                  contact: v.contact.trim(),
                  language: u.code,
                  screenshot: T.value && { name: T.value.name, type: T.value.type, data: T.value.data },
                }),
                  (w.value = s.sent),
                  a(`sent`));
              } catch (e) {
                w.value = e.message === `not-configured` ? s.offline : s.failed;
              }
            }
          },
          oe = async () => {
            (Object.assign(v, g()),
              (b.message = !1),
              (b.contact = !1),
              (C.value = !1),
              (T.value = null),
              (E.value = ``),
              (w.value = s.idle),
              await r(),
              p.value?.focus());
          };
        return (
          N(() => {
            window.addEventListener(`paste`, re);
          }),
          m(() => {
            window.removeEventListener(`paste`, re);
          }),
          (e, t) => (
            M(),
            _(
              `form`,
              {
                class: `site-form`,
                novalidate: ``,
                onFocusinOnce: (t[5] ||= (...e) => P(Ka) && P(Ka)(...e)),
                onSubmit: A(ae, [`prevent`]),
              },
              [
                w.value === s.sent
                  ? (M(),
                    _(`div`, Ao, [
                      R(`p`, jo, [
                        I(H, { text: d.value.sentTitle, "type-delay": 0, "type-duration": 700 }, null, 8, [`text`]),
                      ]),
                      R(`p`, Mo, S(d.value.sentText), 1),
                      R(`button`, { type: `button`, class: `site-form__again`, onClick: oe }, [
                        I(H, { text: d.value.again }, null, 8, [`text`]),
                        (t[6] ||= n()),
                        (t[7] ||= R(`span`, { "aria-hidden": `true` }, `↺`, -1)),
                      ]),
                    ]))
                  : (M(),
                    _(
                      k,
                      { key: 1 },
                      [
                        R(`div`, No, [
                          R(
                            `label`,
                            { class: `site-form__label`, for: `${ns}-message` },
                            [
                              I(H, { text: d.value.message }, null, 8, [`text`]),
                              (t[8] ||= R(`span`, { class: `site-form__star`, "aria-hidden": `true` }, `*`, -1)),
                            ],
                            8,
                            Po,
                          ),
                          y(
                            R(
                              `textarea`,
                              {
                                id: `${ns}-message`,
                                ref_key: `messageInput`,
                                ref: p,
                                "onUpdate:modelValue": (t[0] ||= (e) => (v.message = e)),
                                class: `site-form__input site-form__input--area`,
                                name: `message`,
                                rows: `4`,
                                placeholder: d.value.messagePlaceholder,
                                "aria-required": `true`,
                                "aria-invalid": !!j(`message`),
                                "aria-describedby": j(`message`) ? `${ns}-message-error` : void 0,
                                onBlur: (t[1] ||= (e) => (b.message = !0)),
                              },
                              null,
                              40,
                              Fo,
                            ),
                            [[ee, v.message]],
                          ),
                          j(`message`)
                            ? (M(),
                              _(
                                `p`,
                                { key: 0, id: `${ns}-message-error`, class: `site-form__error` },
                                S(j(`message`)),
                                9,
                                Io,
                              ))
                            : L(``, !0),
                        ]),
                        R(`div`, Lo, [
                          R(`span`, Ro, [I(H, { text: d.value.shot }, null, 8, [`text`])]),
                          T.value
                            ? (M(),
                              _(`div`, zo, [
                                R(
                                  `img`,
                                  { class: `bug-form__preview`, src: T.value.preview, alt: d.value.shotAlt },
                                  null,
                                  8,
                                  Bo,
                                ),
                                R(
                                  `button`,
                                  {
                                    type: `button`,
                                    class: `bug-form__remove`,
                                    "aria-label": d.value.shotRemove,
                                    onClick: ie,
                                  },
                                  [...(t[9] ||= [R(`span`, { "aria-hidden": `true` }, `×`, -1)])],
                                  8,
                                  Vo,
                                ),
                              ]))
                            : (M(),
                              _(`div`, Ho, [
                                R(
                                  `label`,
                                  { class: l([`bug-form__add`, { "bug-form__add--busy": D.value }]) },
                                  [
                                    R(
                                      `input`,
                                      {
                                        ref_key: `fileInput`,
                                        ref: h,
                                        class: `bug-form__file`,
                                        type: `file`,
                                        name: `screenshot`,
                                        accept: `image/png,image/jpeg,image/webp,image/gif`,
                                        "aria-describedby": E.value ? `${ns}-shot-error` : `${ns}-shot-hint`,
                                        onChange: ne,
                                      },
                                      null,
                                      40,
                                      Uo,
                                    ),
                                    (t[10] ||= R(`span`, { class: `bug-form__plus`, "aria-hidden": `true` }, `+`, -1)),
                                    I(H, { text: d.value.shotAdd }, null, 8, [`text`]),
                                  ],
                                  2,
                                ),
                                R(
                                  `span`,
                                  { id: `${ns}-shot-hint`, class: `site-form__hint` },
                                  S(d.value.shotHint),
                                  9,
                                  Wo,
                                ),
                              ])),
                          E.value
                            ? (M(),
                              _(
                                `p`,
                                { key: 2, id: `${ns}-shot-error`, class: `site-form__error`, role: `alert` },
                                S(E.value),
                                9,
                                Go,
                              ))
                            : L(``, !0),
                        ]),
                        R(`div`, Ko, [
                          R(
                            `label`,
                            { class: `site-form__label`, for: `${ns}-contact` },
                            [I(H, { text: d.value.contact }, null, 8, [`text`])],
                            8,
                            qo,
                          ),
                          y(
                            R(
                              `input`,
                              {
                                id: `${ns}-contact`,
                                "onUpdate:modelValue": (t[2] ||= (e) => (v.contact = e)),
                                class: `site-form__input`,
                                type: `text`,
                                name: `contact`,
                                autocomplete: `email`,
                                inputmode: `email`,
                                placeholder: d.value.contactPlaceholder,
                                "aria-invalid": !!j(`contact`),
                                "aria-describedby": j(`contact`) ? `${ns}-contact-error` : void 0,
                                onBlur: (t[3] ||= (e) => (b.contact = !0)),
                              },
                              null,
                              40,
                              Jo,
                            ),
                            [[ee, v.contact]],
                          ),
                          j(`contact`)
                            ? (M(),
                              _(
                                `p`,
                                { key: 0, id: `${ns}-contact-error`, class: `site-form__error` },
                                S(j(`contact`)),
                                9,
                                Yo,
                              ))
                            : L(``, !0),
                        ]),
                        y(
                          R(
                            `input`,
                            {
                              "onUpdate:modelValue": (t[4] ||= (e) => (v.company = e)),
                              class: `site-form__trap`,
                              type: `text`,
                              name: `company`,
                              tabindex: `-1`,
                              autocomplete: `off`,
                              "aria-hidden": `true`,
                            },
                            null,
                            512,
                          ),
                          [[ee, v.company]],
                        ),
                        R(`div`, Xo, [
                          R(
                            `button`,
                            {
                              type: `submit`,
                              class: l([`site-form__send`, { "site-form__send--busy": w.value === s.sending }]),
                              disabled: w.value === s.sending,
                            },
                            [
                              I(H, { text: w.value === s.sending ? f.value.sending : f.value.send }, null, 8, [`text`]),
                              (t[11] ||= R(`span`, { class: `site-form__send-arrow`, "aria-hidden": `true` }, `→`, -1)),
                            ],
                            10,
                            Zo,
                          ),
                          R(`p`, Qo, S(f.value.requiredNote), 1),
                          R(`p`, $o, [
                            n(S(f.value.consent) + ` `, 1),
                            R(`a`, { href: P(_e), target: `_blank`, rel: `noopener` }, S(f.value.consentLink), 9, es),
                          ]),
                          I(Za),
                          w.value === s.failed || w.value === s.offline
                            ? (M(), _(`p`, ts, S(w.value === s.offline ? f.value.offline : f.value.error), 1))
                            : L(``, !0),
                        ]),
                      ],
                      64,
                    )),
              ],
              32,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-a638f37c`]],
  ),
  is = [`aria-labelledby`],
  as = [`aria-label`],
  os = { class: `site-modal__kicker`, "aria-hidden": `true` },
  ss = [`id`],
  cs = { key: 0, class: `site-modal__lead` },
  ls = 600,
  us = `(prefers-reduced-motion: reduce)`,
  ds = En(
    {
      __name: `SiteModal`,
      props: {
        open: { type: Boolean, required: !0 },
        kicker: { type: String, required: !0 },
        title: { type: String, required: !0 },
        lead: { type: String, default: `` },
        titleId: { type: String, required: !0 },
        closeLabel: { type: String, required: !0 },
      },
      emits: [`close`],
      setup(e, { emit: n }) {
        let r = e,
          i = n,
          a = z(`dialog`),
          s = o(!1),
          c = 0,
          u = () => {
            (window.clearTimeout(c), (s.value = !1), a.value?.open && a.value.close());
          };
        t(
          () => r.open,
          (e) => {
            let t = a.value;
            if (t) {
              if (e) {
                (u(), t.showModal());
                return;
              }
              if (t.open && !s.value) {
                if (window.matchMedia(us).matches) {
                  u();
                  return;
                }
                ((s.value = !0), (c = window.setTimeout(u, ls)));
              }
            }
          },
        );
        let d = (e) => {
            s.value && e.target === e.currentTarget && u();
          },
          f = (e) => {
            e.target === a.value && i(`close`);
          };
        return (
          m(() => {
            (window.clearTimeout(c), i(`close`));
          }),
          (t, n) => (
            M(),
            E(w, { to: `body` }, [
              R(
                `dialog`,
                {
                  ref_key: `dialog`,
                  ref: a,
                  class: l([`site-modal`, { "site-modal--closing": s.value }]),
                  "aria-labelledby": e.titleId,
                  onCancel: (n[1] ||= A((e) => i(`close`), [`prevent`])),
                  onClose: (n[2] ||= (e) => i(`close`)),
                  onClick: f,
                },
                [
                  R(
                    `div`,
                    { class: `site-modal__panel`, onAnimationend: d },
                    [
                      (n[4] ||= R(`span`, { class: `site-modal__corners`, "aria-hidden": `true` }, null, -1)),
                      R(
                        `button`,
                        {
                          type: `button`,
                          class: `site-modal__close`,
                          "aria-label": e.closeLabel,
                          onClick: (n[0] ||= (e) => i(`close`)),
                        },
                        [...(n[3] ||= [R(`span`, { "aria-hidden": `true` }, `×`, -1)])],
                        8,
                        as,
                      ),
                      R(`p`, os, S(e.kicker), 1),
                      R(
                        `h2`,
                        { id: e.titleId, class: `site-modal__title` },
                        [I(H, { text: e.title }, null, 8, [`text`])],
                        8,
                        ss,
                      ),
                      e.lead ? (M(), _(`p`, cs, S(e.lead), 1)) : L(``, !0),
                      h(t.$slots, `default`, {}, void 0, !0),
                    ],
                    32,
                  ),
                ],
                42,
                is,
              ),
            ])
          )
        );
      },
    },
    [[`__scopeId`, `data-v-624bfcfa`]],
  ),
  fs = oe(`bugReport`, () => {
    let e = o(!1);
    return {
      open: e,
      show: () => {
        (_n(`bug_report_open`), (e.value = !0));
      },
      hide: () => {
        e.value = !1;
      },
    };
  }),
  ps = `site://bug-report`,
  ms = {
    __name: `BugModal`,
    setup(e) {
      let t = fs(),
        n = Tn(),
        r = F(() => n.t(`bugReport`));
      return (e, i) => (
        M(),
        E(
          ds,
          {
            open: P(t).open,
            kicker: ps,
            title: r.value.title,
            lead: r.value.lead,
            "close-label": P(n).t(`form`).close,
            "title-id": `bug-modal-title`,
            onClose: (i[0] ||= (e) => P(t).hide()),
          },
          { default: s(() => [I(rs, { active: P(t).open }, null, 8, [`active`])]), _: 1 },
          8,
          [`open`, `title`, `lead`, `close-label`],
        )
      );
    },
  },
  hs = { key: 0, class: `site-form__sent`, role: `status` },
  gs = { class: `site-form__sent-title` },
  _s = { class: `site-form__sent-text` },
  vs = { class: `site-form__row` },
  ys = { class: `site-form__field` },
  bs = [`for`],
  xs = [`id`, `autofocus`, `placeholder`, `aria-invalid`, `aria-describedby`],
  Ss = [`id`],
  Cs = { class: `site-form__field` },
  ws = [`for`],
  Ts = [`id`, `placeholder`, `aria-invalid`, `aria-describedby`],
  Es = [`id`],
  Ds = { class: `site-form__group` },
  Os = { class: `site-form__label` },
  ks = { class: `site-form__chips` },
  As = [`value`],
  js = { class: `site-form__chip-face` },
  Ms = { class: `site-form__group` },
  Ns = { class: `site-form__label` },
  Ps = { class: `site-form__chips` },
  Fs = [`name`, `value`],
  Is = { class: `site-form__chip-face` },
  Ls = { class: `site-form__field` },
  Rs = [`for`],
  zs = [`id`, `placeholder`, `aria-invalid`, `aria-describedby`],
  Bs = [`id`],
  Vs = { class: `site-form__actions` },
  Hs = [`disabled`],
  Us = { class: `site-form__hint` },
  Ws = { class: `site-form__consent` },
  Gs = [`href`],
  Ks = { key: 0, class: `site-form__note`, role: `alert` },
  qs = {
    __name: `ContactForm`,
    props: {
      source: { type: String, required: !0 },
      idPrefix: { type: String, required: !0 },
      autofocus: { type: Boolean, default: !1 },
    },
    emits: [`sent`],
    setup(e, { emit: t }) {
      let i = e,
        a = t,
        s = { idle: `idle`, sending: `sending`, sent: `sent`, failed: `failed`, offline: `offline` },
        c = [`name`, `contact`, `message`],
        u = Tn(),
        d = F(() => u.t(`form`)),
        f = { name: z(`name`), contact: z(`contact`), message: z(`message`) },
        m = () => ({ name: ``, contact: ``, message: ``, types: [], budget: null, company: `` }),
        h = x(m()),
        g = x({ name: !1, contact: !1, message: !1 }),
        v = o(!1),
        b = o(s.idle),
        C = F(() => {
          let { required: e, nameShort: t, nameDigits: n, contactInvalid: r, messageShort: i } = d.value,
            a = (t, n, r) => (t.trim() ? (n(t) ? `` : r) : e);
          return {
            name: a(h.name, Do, Eo(h.name) ? n : t),
            contact: a(h.contact, To, r),
            message: a(h.message, Oo, i),
          };
        }),
        w = (e) => (v.value || g[e] ? C.value[e] : ``),
        T = (e) => `${i.idPrefix}-${e}`,
        E = async () => {
          v.value = !0;
          let e = c.find((e) => C.value[e]);
          if (e) {
            f[e].value?.focus();
            return;
          }
          if (h.company) {
            b.value = s.sent;
            return;
          }
          b.value = s.sending;
          let { typeOptions: t, budgetOptions: n } = d.value;
          try {
            (await ko({
              name: h.name.trim(),
              contact: h.contact.trim(),
              types: h.types.map((e) => t[e]),
              budget: h.budget === null ? null : n[h.budget],
              message: h.message.trim(),
              language: u.code,
              source: i.source,
              page: window.location.pathname,
            }),
              (b.value = s.sent),
              a(`sent`));
          } catch (e) {
            b.value = e.message === `not-configured` ? s.offline : s.failed;
          }
        },
        D = async () => {
          (Object.assign(h, m()),
            c.forEach((e) => {
              g[e] = !1;
            }),
            (v.value = !1),
            (b.value = s.idle),
            await r(),
            f.name.value?.focus());
        };
      return (t, r) => (
        M(),
        _(
          `form`,
          {
            class: `site-form`,
            novalidate: ``,
            onFocusinOnce: (r[9] ||= (...e) => P(Ka) && P(Ka)(...e)),
            onSubmit: A(E, [`prevent`]),
          },
          [
            b.value === s.sent
              ? (M(),
                _(`div`, hs, [
                  R(`p`, gs, [
                    I(H, { text: d.value.sentTitle, "type-delay": 0, "type-duration": 700 }, null, 8, [`text`]),
                  ]),
                  R(`p`, _s, S(d.value.sentText), 1),
                  R(`button`, { type: `button`, class: `site-form__again`, onClick: D }, [
                    I(H, { text: d.value.again }, null, 8, [`text`]),
                    (r[10] ||= n()),
                    (r[11] ||= R(`span`, { "aria-hidden": `true` }, `↺`, -1)),
                  ]),
                ]))
              : (M(),
                _(
                  k,
                  { key: 1 },
                  [
                    R(`div`, vs, [
                      R(`div`, ys, [
                        R(
                          `label`,
                          { class: `site-form__label`, for: T(`name`) },
                          [
                            I(H, { text: d.value.name }, null, 8, [`text`]),
                            (r[12] ||= R(`span`, { class: `site-form__star`, "aria-hidden": `true` }, `*`, -1)),
                          ],
                          8,
                          bs,
                        ),
                        y(
                          R(
                            `input`,
                            {
                              id: T(`name`),
                              ref: `name`,
                              "onUpdate:modelValue": (r[0] ||= (e) => (h.name = e)),
                              class: `site-form__input`,
                              type: `text`,
                              name: `name`,
                              autocomplete: `name`,
                              autofocus: e.autofocus,
                              placeholder: d.value.namePlaceholder,
                              "aria-required": `true`,
                              "aria-invalid": !!w(`name`),
                              "aria-describedby": w(`name`) ? T(`name-error`) : void 0,
                              onBlur: (r[1] ||= (e) => (g.name = !0)),
                            },
                            null,
                            40,
                            xs,
                          ),
                          [[ee, h.name]],
                        ),
                        w(`name`)
                          ? (M(),
                            _(`p`, { key: 0, id: T(`name-error`), class: `site-form__error` }, S(w(`name`)), 9, Ss))
                          : L(``, !0),
                      ]),
                      R(`div`, Cs, [
                        R(
                          `label`,
                          { class: `site-form__label`, for: T(`contact`) },
                          [
                            I(H, { text: d.value.contact }, null, 8, [`text`]),
                            (r[13] ||= R(`span`, { class: `site-form__star`, "aria-hidden": `true` }, `*`, -1)),
                          ],
                          8,
                          ws,
                        ),
                        y(
                          R(
                            `input`,
                            {
                              id: T(`contact`),
                              ref: `contact`,
                              "onUpdate:modelValue": (r[2] ||= (e) => (h.contact = e)),
                              class: `site-form__input`,
                              type: `text`,
                              name: `contact`,
                              autocomplete: `email`,
                              inputmode: `email`,
                              placeholder: d.value.contactPlaceholder,
                              "aria-required": `true`,
                              "aria-invalid": !!w(`contact`),
                              "aria-describedby": w(`contact`) ? T(`contact-error`) : void 0,
                              onBlur: (r[3] ||= (e) => (g.contact = !0)),
                            },
                            null,
                            40,
                            Ts,
                          ),
                          [[ee, h.contact]],
                        ),
                        w(`contact`)
                          ? (M(),
                            _(
                              `p`,
                              { key: 0, id: T(`contact-error`), class: `site-form__error` },
                              S(w(`contact`)),
                              9,
                              Es,
                            ))
                          : L(``, !0),
                      ]),
                    ]),
                    R(`fieldset`, Ds, [
                      R(`legend`, Os, [I(H, { text: d.value.types }, null, 8, [`text`])]),
                      R(`div`, ks, [
                        (M(!0),
                        _(
                          k,
                          null,
                          p(
                            d.value.typeOptions,
                            (e, t) => (
                              M(),
                              _(`label`, { key: t, class: `site-form__chip` }, [
                                y(
                                  R(
                                    `input`,
                                    {
                                      "onUpdate:modelValue": (r[4] ||= (e) => (h.types = e)),
                                      class: `site-form__check`,
                                      type: `checkbox`,
                                      name: `types`,
                                      value: t,
                                    },
                                    null,
                                    8,
                                    As,
                                  ),
                                  [[ce, h.types]],
                                ),
                                R(`span`, js, S(e), 1),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                    R(`fieldset`, Ms, [
                      R(`legend`, Ns, [I(H, { text: d.value.budget }, null, 8, [`text`])]),
                      R(`div`, Ps, [
                        (M(!0),
                        _(
                          k,
                          null,
                          p(
                            d.value.budgetOptions,
                            (e, t) => (
                              M(),
                              _(`label`, { key: t, class: `site-form__chip` }, [
                                y(
                                  R(
                                    `input`,
                                    {
                                      "onUpdate:modelValue": (r[5] ||= (e) => (h.budget = e)),
                                      class: `site-form__check`,
                                      type: `radio`,
                                      name: T(`budget`),
                                      value: t,
                                    },
                                    null,
                                    8,
                                    Fs,
                                  ),
                                  [[O, h.budget]],
                                ),
                                R(`span`, Is, S(e), 1),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ]),
                    ]),
                    R(`div`, Ls, [
                      R(
                        `label`,
                        { class: `site-form__label`, for: T(`message`) },
                        [
                          I(H, { text: d.value.message }, null, 8, [`text`]),
                          (r[14] ||= R(`span`, { class: `site-form__star`, "aria-hidden": `true` }, `*`, -1)),
                        ],
                        8,
                        Rs,
                      ),
                      y(
                        R(
                          `textarea`,
                          {
                            id: T(`message`),
                            ref: `message`,
                            "onUpdate:modelValue": (r[6] ||= (e) => (h.message = e)),
                            class: `site-form__input site-form__input--area`,
                            name: `message`,
                            rows: `4`,
                            placeholder: d.value.messagePlaceholder,
                            "aria-required": `true`,
                            "aria-invalid": !!w(`message`),
                            "aria-describedby": w(`message`) ? T(`message-error`) : void 0,
                            onBlur: (r[7] ||= (e) => (g.message = !0)),
                          },
                          null,
                          40,
                          zs,
                        ),
                        [[ee, h.message]],
                      ),
                      w(`message`)
                        ? (M(),
                          _(`p`, { key: 0, id: T(`message-error`), class: `site-form__error` }, S(w(`message`)), 9, Bs))
                        : L(``, !0),
                    ]),
                    y(
                      R(
                        `input`,
                        {
                          "onUpdate:modelValue": (r[8] ||= (e) => (h.company = e)),
                          class: `site-form__trap`,
                          type: `text`,
                          name: `company`,
                          tabindex: `-1`,
                          autocomplete: `off`,
                          "aria-hidden": `true`,
                        },
                        null,
                        512,
                      ),
                      [[ee, h.company]],
                    ),
                    R(`div`, Vs, [
                      R(
                        `button`,
                        {
                          type: `submit`,
                          class: l([`site-form__send`, { "site-form__send--busy": b.value === s.sending }]),
                          disabled: b.value === s.sending,
                        },
                        [
                          I(H, { text: b.value === s.sending ? d.value.sending : d.value.send }, null, 8, [`text`]),
                          (r[15] ||= R(`span`, { class: `site-form__send-arrow`, "aria-hidden": `true` }, `→`, -1)),
                        ],
                        10,
                        Hs,
                      ),
                      R(`p`, Us, S(d.value.requiredNote), 1),
                      R(`p`, Ws, [
                        n(S(d.value.consent) + ` `, 1),
                        R(`a`, { href: P(_e), target: `_blank`, rel: `noopener` }, S(d.value.consentLink), 9, Gs),
                      ]),
                      I(Za),
                      b.value === s.failed || b.value === s.offline
                        ? (M(), _(`p`, Ks, S(b.value === s.offline ? d.value.offline : d.value.error), 1))
                        : L(``, !0),
                    ]),
                  ],
                  64,
                )),
          ],
          32,
        )
      );
    },
  },
  Js = oe(`contact`, () => {
    let e = o(!1);
    return {
      open: e,
      show: () => {
        (_n(`brief_open`), (e.value = !0));
      },
      hide: () => {
        e.value = !1;
      },
    };
  }),
  Ys = `site://brief`,
  Xs = {
    __name: `ContactModal`,
    setup(e) {
      let t = Js(),
        n = Tn(),
        r = F(() => n.t(`form`));
      return (e, n) => (
        M(),
        E(
          ds,
          {
            open: P(t).open,
            kicker: Ys,
            title: r.value.title,
            lead: r.value.lead,
            "close-label": r.value.close,
            "title-id": `contact-modal-title`,
            onClose: (n[0] ||= (e) => P(t).hide()),
          },
          { default: s(() => [I(qs, { source: `header`, "id-prefix": `modal`, autofocus: `` })]), _: 1 },
          8,
          [`open`, `title`, `lead`, `close-label`],
        )
      );
    },
  },
  Zs = () => {
    try {
      let e = window.localStorage.getItem(hn.storageKey);
      return e === hn.granted || e === hn.denied ? e : null;
    } catch {
      return null;
    }
  },
  Qs = (e) => {
    try {
      window.localStorage.setItem(hn.storageKey, e);
    } catch {
      return;
    }
  },
  $s = oe(`consent`, () => {
    let e = o(Zs()),
      t = o(e.value === null && !bn());
    return {
      choice: e,
      asking: t,
      decide: (n) => {
        ((e.value = n ? hn.granted : hn.denied), Qs(e.value), vn(n), (t.value = !1));
      },
      ask: () => {
        t.value = !0;
      },
    };
  }),
  ec = [`aria-label`],
  tc = { class: `cookie-banner__kicker` },
  nc = { class: `cookie-banner__text` },
  rc = { class: `cookie-banner__actions` },
  ic = En(
    {
      __name: `CookieBanner`,
      setup(e) {
        let t = $s(),
          r = Tn(),
          i = pe(),
          c = F(() => r.t(`cookies`)),
          l = o(!1),
          u = 0,
          d = F(() => t.asking && l.value && !i.open);
        return (
          N(() => {
            u = window.setTimeout(() => {
              l.value = !0;
            }, hn.showDelayMs);
          }),
          m(() => {
            window.clearTimeout(u);
          }),
          (e, r) => {
            let i = a(`RouterLink`);
            return (
              M(),
              E(
                D,
                { name: `cookie-banner` },
                {
                  default: s(() => [
                    d.value
                      ? (M(),
                        _(
                          `section`,
                          { key: 0, class: `cookie-banner`, "aria-label": c.value.label },
                          [
                            R(`p`, tc, S(c.value.kicker), 1),
                            R(`p`, nc, [
                              n(S(c.value.text) + ` `, 1),
                              I(
                                i,
                                { class: `cookie-banner__more`, to: P(_e) },
                                { default: s(() => [n(S(c.value.more), 1)]), _: 1 },
                                8,
                                [`to`],
                              ),
                            ]),
                            R(`div`, rc, [
                              R(
                                `button`,
                                {
                                  type: `button`,
                                  class: `cookie-banner__button cookie-banner__button--accept`,
                                  onClick: (r[0] ||= (e) => P(t).decide(!0)),
                                },
                                S(c.value.accept),
                                1,
                              ),
                              R(
                                `button`,
                                {
                                  type: `button`,
                                  class: `cookie-banner__button`,
                                  onClick: (r[1] ||= (e) => P(t).decide(!1)),
                                },
                                S(c.value.decline),
                                1,
                              ),
                            ]),
                          ],
                          8,
                          ec,
                        ))
                      : L(``, !0),
                  ]),
                  _: 1,
                },
              )
            );
          }
        );
      },
    },
    [[`__scopeId`, `data-v-b7061dc6`]],
  ),
  ac = `1.3.26`;
function oc(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function sc(e, t, n) {
  return (1 - n) * e + n * t;
}
function cc(e, t, n, r) {
  return sc(e, t, 1 - Math.exp(-n * r));
}
function lc(e, t) {
  return ((e % t) + t) % t;
}
var uc = class {
  isRunning = !1;
  value = 0;
  from = 0;
  to = 0;
  currentTime = 0;
  lerp;
  duration;
  easing;
  onUpdate;
  advance(e) {
    if (!this.isRunning) return;
    let t = !1;
    if (this.duration && this.easing) {
      this.currentTime += e;
      let n = oc(0, this.currentTime / this.duration, 1);
      t = n >= 1;
      let r = t ? 1 : this.easing(n);
      this.value = this.from + (this.to - this.from) * r;
    } else
      this.lerp
        ? ((this.value = cc(this.value, this.to, this.lerp * 60, e)),
          Math.round(this.value) === Math.round(this.to) && ((this.value = this.to), (t = !0)))
        : ((this.value = this.to), (t = !0));
    (t && this.stop(), this.onUpdate?.(this.value, t));
  }
  stop() {
    this.isRunning = !1;
  }
  fromTo(e, t, { lerp: n, duration: r, easing: i, onStart: a, onUpdate: o }) {
    ((this.from = this.value = e),
      (this.to = t),
      (this.lerp = n),
      (this.duration = r),
      (this.easing = i),
      (this.currentTime = 0),
      (this.isRunning = !0),
      a?.(),
      (this.onUpdate = o));
  }
};
function dc(e, t) {
  let n;
  return function (...r) {
    (clearTimeout(n),
      (n = setTimeout(() => {
        ((n = void 0), e.apply(this, r));
      }, t)));
  };
}
var fc = class {
    width = 0;
    height = 0;
    scrollHeight = 0;
    scrollWidth = 0;
    debouncedResize;
    wrapperResizeObserver;
    contentResizeObserver;
    constructor(e, t, { autoResize: n = !0, debounce: r = 250 } = {}) {
      ((this.wrapper = e),
        (this.content = t),
        n &&
          ((this.debouncedResize = dc(this.resize, r)),
          this.wrapper instanceof Window
            ? window.addEventListener(`resize`, this.debouncedResize)
            : ((this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize)),
              this.wrapperResizeObserver.observe(this.wrapper)),
          (this.contentResizeObserver = new ResizeObserver(this.debouncedResize)),
          this.contentResizeObserver.observe(this.content)),
        this.resize());
    }
    destroy() {
      (this.wrapperResizeObserver?.disconnect(),
        this.contentResizeObserver?.disconnect(),
        this.wrapper === window && this.debouncedResize && window.removeEventListener(`resize`, this.debouncedResize));
    }
    resize = () => {
      (this.onWrapperResize(), this.onContentResize());
    };
    onWrapperResize = () => {
      this.wrapper instanceof Window
        ? ((this.width = window.innerWidth), (this.height = window.innerHeight))
        : ((this.width = this.wrapper.clientWidth), (this.height = this.wrapper.clientHeight));
    };
    onContentResize = () => {
      this.wrapper instanceof Window
        ? ((this.scrollHeight = this.content.scrollHeight), (this.scrollWidth = this.content.scrollWidth))
        : ((this.scrollHeight = this.wrapper.scrollHeight), (this.scrollWidth = this.wrapper.scrollWidth));
    };
    get limit() {
      return { x: this.scrollWidth - this.width, y: this.scrollHeight - this.height };
    }
  },
  pc = class {
    events = {};
    emit(e, ...t) {
      let n = this.events[e] || [];
      for (let e = 0, r = n.length; e < r; e++) n[e]?.(...t);
    }
    on(e, t) {
      return (
        this.events[e] ? this.events[e].push(t) : (this.events[e] = [t]),
        () => {
          this.events[e] = this.events[e]?.filter((e) => t !== e);
        }
      );
    }
    off(e, t) {
      this.events[e] = this.events[e]?.filter((e) => t !== e);
    }
    destroy() {
      this.events = {};
    }
  },
  mc = 100 / 6,
  hc = { passive: !1 };
function gc(e, t) {
  return e === 1 ? mc : e === 2 ? t : 1;
}
var _c = class {
    touchStart = { x: 0, y: 0 };
    lastDelta = { x: 0, y: 0 };
    window = { width: 0, height: 0 };
    emitter = new pc();
    constructor(e, t = { wheelMultiplier: 1, touchMultiplier: 1 }) {
      ((this.element = e),
        (this.options = t),
        window.addEventListener(`resize`, this.onWindowResize),
        this.onWindowResize(),
        this.element.addEventListener(`wheel`, this.onWheel, hc),
        this.element.addEventListener(`touchstart`, this.onTouchStart, hc),
        this.element.addEventListener(`touchmove`, this.onTouchMove, hc),
        this.element.addEventListener(`touchend`, this.onTouchEnd, hc));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    destroy() {
      (this.emitter.destroy(),
        window.removeEventListener(`resize`, this.onWindowResize),
        this.element.removeEventListener(`wheel`, this.onWheel, hc),
        this.element.removeEventListener(`touchstart`, this.onTouchStart, hc),
        this.element.removeEventListener(`touchmove`, this.onTouchMove, hc),
        this.element.removeEventListener(`touchend`, this.onTouchEnd, hc));
    }
    onTouchStart = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: 0, y: 0 }),
        this.emitter.emit(`scroll`, { deltaX: 0, deltaY: 0, event: e }));
    };
    onTouchMove = (e) => {
      let { clientX: t, clientY: n } = e.targetTouches ? e.targetTouches[0] : e,
        r = -(t - this.touchStart.x) * this.options.touchMultiplier,
        i = -(n - this.touchStart.y) * this.options.touchMultiplier;
      ((this.touchStart.x = t),
        (this.touchStart.y = n),
        (this.lastDelta = { x: r, y: i }),
        this.emitter.emit(`scroll`, { deltaX: r, deltaY: i, event: e }));
    };
    onTouchEnd = (e) => {
      this.emitter.emit(`scroll`, { deltaX: this.lastDelta.x, deltaY: this.lastDelta.y, event: e });
    };
    onWheel = (e) => {
      let { deltaX: t, deltaY: n, deltaMode: r } = e,
        i = gc(r, this.window.width),
        a = gc(r, this.window.height);
      ((t *= i),
        (n *= a),
        (t *= this.options.wheelMultiplier),
        (n *= this.options.wheelMultiplier),
        this.emitter.emit(`scroll`, { deltaX: t, deltaY: n, event: e }));
    };
    onWindowResize = () => {
      this.window = { width: window.innerWidth, height: window.innerHeight };
    };
  },
  vc = (e) => Math.min(1, 1.001 - 2 ** (-10 * e)),
  yc = class {
    _isScrolling = !1;
    _isStopped = !1;
    _isLocked = !1;
    _preventNextNativeScrollEvent = !1;
    _resetVelocityTimeout = null;
    _rafId = null;
    _isDraggingSelection = !1;
    reducedMotionMediaQuery = window.matchMedia(`(prefers-reduced-motion: reduce)`);
    isTouching;
    isIos;
    time = 0;
    userData = {};
    lastVelocity = 0;
    velocity = 0;
    direction = 0;
    options;
    targetScroll;
    animatedScroll;
    animate = new uc();
    emitter = new pc();
    dimensions;
    virtualScroll;
    constructor({
      wrapper: e = window,
      content: t = document.documentElement,
      eventsTarget: n = e,
      smoothWheel: r = !0,
      syncTouch: i = !1,
      syncTouchLerp: a = 0.075,
      touchInertiaExponent: o = 1.7,
      duration: s,
      easing: c,
      lerp: l = 0.1,
      infinite: u = !1,
      orientation: d = `vertical`,
      gestureOrientation: f = d === `horizontal` ? `both` : `vertical`,
      touchMultiplier: p = 1,
      wheelMultiplier: m = 1,
      autoResize: h = !0,
      prevent: g,
      virtualScroll: _,
      overscroll: v = !0,
      autoRaf: y = !1,
      anchors: b = !1,
      autoToggle: x = !1,
      allowNestedScroll: S = !1,
      __experimental__naiveDimensions: C = !1,
      naiveDimensions: w = C,
      stopInertiaOnNavigate: T = !1,
      respectReducedMotion: E = !0,
    } = {}) {
      ((window.lenisVersion = ac),
        window.lenis || (window.lenis = {}),
        (window.lenis.version = ac),
        d === `horizontal` && (window.lenis.horizontal = !0),
        i === !0 && (window.lenis.touch = !0),
        (this.isIos = /(iPad|iPhone|iPod)/g.test(navigator.userAgent)),
        (!e || e === document.documentElement) && (e = window),
        typeof s == `number` && typeof c != `function`
          ? (c = vc)
          : typeof c == `function` && typeof s != `number` && (s = 1),
        (this.options = {
          wrapper: e,
          content: t,
          eventsTarget: n,
          smoothWheel: r,
          syncTouch: i,
          syncTouchLerp: a,
          touchInertiaExponent: o,
          duration: s,
          easing: c,
          lerp: l,
          infinite: u,
          gestureOrientation: f,
          orientation: d,
          touchMultiplier: p,
          wheelMultiplier: m,
          autoResize: h,
          prevent: g,
          virtualScroll: _,
          overscroll: v,
          autoRaf: y,
          anchors: b,
          autoToggle: x,
          allowNestedScroll: S,
          naiveDimensions: w,
          stopInertiaOnNavigate: T,
          respectReducedMotion: E,
        }),
        (this.dimensions = new fc(e, t, { autoResize: h })),
        this.updateClassName(),
        (this.targetScroll = this.animatedScroll = this.actualScroll),
        this.options.wrapper.addEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.addEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.addEventListener(`click`, this.onClick),
        this.options.wrapper.addEventListener(`pointerdown`, this.onPointerDown),
        (this.virtualScroll = new _c(n, { touchMultiplier: p, wheelMultiplier: m })),
        this.virtualScroll.on(`scroll`, this.onVirtualScroll),
        this.options.autoToggle &&
          (this.checkOverflow(), this.rootElement.addEventListener(`transitionend`, this.onTransitionEnd)),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
    }
    destroy() {
      (this.emitter.destroy(),
        this.options.wrapper.removeEventListener(`scroll`, this.onNativeScroll),
        this.options.wrapper.removeEventListener(`scrollend`, this.onScrollEnd, { capture: !0 }),
        this.options.wrapper.removeEventListener(`pointerdown`, this.onPointerDown),
        (this.options.anchors || this.options.stopInertiaOnNavigate) &&
          this.options.wrapper.removeEventListener(`click`, this.onClick),
        this.virtualScroll.destroy(),
        this.dimensions.destroy(),
        this.cleanUpClassName(),
        this._rafId && cancelAnimationFrame(this._rafId));
    }
    on(e, t) {
      return this.emitter.on(e, t);
    }
    off(e, t) {
      return this.emitter.off(e, t);
    }
    onScrollEnd = (e) => {
      e instanceof CustomEvent || ((this.isScrolling === `smooth` || this.isScrolling === !1) && e.stopPropagation());
    };
    dispatchScrollendEvent = () => {
      this.options.wrapper.dispatchEvent(
        new CustomEvent(`scrollend`, { bubbles: this.options.wrapper === window, detail: { lenisScrollEnd: !0 } }),
      );
    };
    get overflow() {
      let e = this.isHorizontal ? `overflow-x` : `overflow-y`;
      return getComputedStyle(this.rootElement)[e];
    }
    checkOverflow() {
      [`hidden`, `clip`].includes(this.overflow) ? this.internalStop() : this.internalStart();
    }
    onTransitionEnd = (e) => {
      e.propertyName?.includes(`overflow`) && e.target === this.rootElement && this.checkOverflow();
    };
    setScroll(e) {
      this.isHorizontal
        ? this.options.wrapper.scrollTo({ left: e, behavior: `instant` })
        : this.options.wrapper.scrollTo({ top: e, behavior: `instant` });
    }
    onClick = (e) => {
      let t = e
          .composedPath()
          .filter((e) => e instanceof HTMLAnchorElement && e.href)
          .map((e) => new URL(e.href)),
        n = new URL(window.location.href);
      if (this.options.anchors) {
        let e = t.find((e) => n.host === e.host && n.pathname === e.pathname && e.hash);
        if (e) {
          let t = typeof this.options.anchors == `object` && this.options.anchors ? this.options.anchors : void 0,
            n = decodeURIComponent(e.hash);
          this.scrollTo(n, t);
          return;
        }
      }
      if (this.options.stopInertiaOnNavigate && t.some((e) => n.host === e.host && n.pathname !== e.pathname)) {
        this.reset();
        return;
      }
    };
    onPointerDown = (e) => {
      e.button === 1 && this.reset();
    };
    isTouchOnSelectionHandle(e) {
      let t = window.getSelection();
      if (!t || t.isCollapsed || t.rangeCount === 0) return !1;
      let n = e.targetTouches[0] ?? e.changedTouches[0];
      if (!n) return !1;
      let r = t.getRangeAt(0).getClientRects();
      if (r.length === 0) return !1;
      let i = r[0],
        a = r[r.length - 1],
        o = Math.hypot(n.clientX - i.left, n.clientY - i.top) <= 40,
        s = Math.hypot(n.clientX - a.right, n.clientY - a.bottom) <= 40;
      return o || s;
    }
    onVirtualScroll = (e) => {
      if (typeof this.options.virtualScroll == `function` && this.options.virtualScroll(e) === !1) return;
      let { deltaX: t, deltaY: n, event: r } = e;
      if (
        (this.emitter.emit(`virtual-scroll`, { deltaX: t, deltaY: n, event: r }), r.ctrlKey || r.lenisStopPropagation)
      )
        return;
      let i = r.type.includes(`touch`),
        a = r.type.includes(`wheel`);
      if (
        i &&
        this.isIos &&
        (r.type === `touchstart` && (this._isDraggingSelection = this.isTouchOnSelectionHandle(r)),
        this._isDraggingSelection)
      ) {
        r.type === `touchend` && (this._isDraggingSelection = !1);
        return;
      }
      this.isTouching = r.type === `touchstart` || r.type === `touchmove`;
      let o = t === 0 && n === 0;
      if (this.options.syncTouch && i && r.type === `touchstart` && o && !this.isStopped && !this.isLocked) {
        this.reset();
        return;
      }
      let s =
        (this.options.gestureOrientation === `vertical` && n === 0) ||
        (this.options.gestureOrientation === `horizontal` && t === 0);
      if (o || s) return;
      let c = r.composedPath();
      c = c.slice(0, c.indexOf(this.rootElement));
      let l = this.options.prevent,
        u = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`;
      if (
        c.find(
          (e) =>
            e instanceof HTMLElement &&
            ((typeof l == `function` && l?.(e)) ||
              e.hasAttribute?.(`data-lenis-prevent`) ||
              (u === `vertical` && e.hasAttribute?.(`data-lenis-prevent-vertical`)) ||
              (u === `horizontal` && e.hasAttribute?.(`data-lenis-prevent-horizontal`)) ||
              (i && e.hasAttribute?.(`data-lenis-prevent-touch`)) ||
              (a && e.hasAttribute?.(`data-lenis-prevent-wheel`)) ||
              (this.options.allowNestedScroll && this.hasNestedScroll(e, { deltaX: t, deltaY: n }))),
        )
      )
        return;
      if (this.isStopped || this.isLocked) {
        r.cancelable && r.preventDefault();
        return;
      }
      if (!((this.options.syncTouch && i) || (this.options.smoothWheel && a))) {
        ((this.isScrolling = `native`), this.animate.stop(), (r.lenisStopPropagation = !0));
        return;
      }
      let d = n;
      (this.options.gestureOrientation === `both`
        ? (d = Math.abs(n) > Math.abs(t) ? n : t)
        : this.options.gestureOrientation === `horizontal` && (d = t),
        (!this.options.overscroll ||
          this.options.infinite ||
          (this.options.wrapper !== window &&
            this.limit > 0 &&
            ((this.animatedScroll > 0 && this.animatedScroll < this.limit) ||
              (this.animatedScroll === 0 && n > 0) ||
              (this.animatedScroll === this.limit && n < 0)))) &&
          (r.lenisStopPropagation = !0),
        r.cancelable && r.preventDefault());
      let f = i && this.options.syncTouch,
        p = i && r.type === `touchend`;
      (p && (d = Math.sign(d) * Math.abs(this.velocity) ** this.options.touchInertiaExponent),
        this.scrollTo(this.targetScroll + d, {
          programmatic: !1,
          ...(f
            ? { lerp: p ? this.options.syncTouchLerp : 1 }
            : { lerp: this.options.lerp, duration: this.options.duration, easing: this.options.easing }),
        }));
    };
    resize() {
      (this.dimensions.resize(), (this.animatedScroll = this.targetScroll = this.actualScroll), this.emit());
    }
    emit() {
      this.emitter.emit(`scroll`, this);
    }
    onNativeScroll = () => {
      if (
        (this._resetVelocityTimeout !== null &&
          (clearTimeout(this._resetVelocityTimeout), (this._resetVelocityTimeout = null)),
        this._preventNextNativeScrollEvent)
      ) {
        this._preventNextNativeScrollEvent = !1;
        return;
      }
      if (this.isScrolling === !1 || this.isScrolling === `native`) {
        let e = this.animatedScroll;
        ((this.animatedScroll = this.targetScroll = this.actualScroll),
          (this.lastVelocity = this.velocity),
          (this.velocity = this.animatedScroll - e),
          (this.direction = Math.sign(this.animatedScroll - e)),
          this.isStopped || (this.isScrolling = `native`),
          this.emit(),
          this.velocity !== 0 &&
            (this._resetVelocityTimeout = setTimeout(() => {
              ((this.lastVelocity = this.velocity), (this.velocity = 0), (this.isScrolling = !1), this.emit());
            }, 400)));
      }
    };
    reset() {
      ((this.isLocked = !1),
        (this.isScrolling = !1),
        (this.animatedScroll = this.targetScroll = this.actualScroll),
        (this.lastVelocity = this.velocity = 0),
        this.animate.stop());
    }
    start() {
      if (this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.removeProperty(`overflow`);
          return;
        }
        this.internalStart();
      }
    }
    internalStart() {
      this.isStopped && (this.reset(), (this.isStopped = !1), this.emit());
    }
    stop() {
      if (!this.isStopped) {
        if (this.options.autoToggle) {
          this.rootElement.style.setProperty(`overflow`, `clip`);
          return;
        }
        this.internalStop();
      }
    }
    internalStop() {
      this.isStopped || (this.reset(), (this.isStopped = !0), this.emit());
    }
    raf = (e) => {
      let t = e - (this.time || e);
      ((this.time = e),
        this.animate.advance(t * 0.001),
        this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf)));
    };
    scrollTo(
      e,
      {
        offset: t = 0,
        immediate: n = !1,
        lock: r = !1,
        programmatic: i = !0,
        lerp: a = i ? this.options.lerp : void 0,
        duration: o = i ? this.options.duration : void 0,
        easing: s = i ? this.options.easing : void 0,
        onStart: c,
        onComplete: l,
        force: u = !1,
        userData: d,
      } = {},
    ) {
      if (
        (this.prefersReducedMotion && (i ? (n = !0) : ((a = 1), (o = void 0), (s = void 0))),
        (this.isStopped || this.isLocked) && !u)
      )
        return;
      let f = e,
        p = t;
      if (typeof f == `string` && [`top`, `left`, `start`, `#`].includes(f)) f = 0;
      else if (typeof f == `string` && [`bottom`, `right`, `end`].includes(f)) f = this.limit;
      else {
        let e = null;
        if (
          (typeof f == `string`
            ? ((e = f.startsWith(`#`) ? document.getElementById(f.slice(1)) : document.querySelector(f)),
              e || (f === `#top` ? (f = 0) : console.warn(`Lenis: Target not found`, f)))
            : f instanceof HTMLElement && f?.nodeType && (e = f),
          e)
        ) {
          if (this.options.wrapper !== window) {
            let e = this.rootElement.getBoundingClientRect();
            p -= this.isHorizontal ? e.left : e.top;
          }
          let t = e.getBoundingClientRect(),
            n = getComputedStyle(e),
            r = this.isHorizontal ? Number.parseFloat(n.scrollMarginLeft) : Number.parseFloat(n.scrollMarginTop),
            i = getComputedStyle(this.rootElement),
            a = this.isHorizontal ? Number.parseFloat(i.scrollPaddingLeft) : Number.parseFloat(i.scrollPaddingTop);
          f =
            (this.isHorizontal ? t.left : t.top) +
            this.animatedScroll -
            (Number.isNaN(r) ? 0 : r) -
            (Number.isNaN(a) ? 0 : a);
        }
      }
      if (typeof f == `number`) {
        if (((f += p), this.options.infinite)) {
          if (i) {
            this.targetScroll = this.animatedScroll = this.scroll;
            let e = f - this.animatedScroll;
            e > this.limit / 2 ? (f -= this.limit) : e < -this.limit / 2 && (f += this.limit);
          }
        } else f = oc(0, f, this.limit);
        if (f === this.targetScroll) {
          (c?.(this), l?.(this));
          return;
        }
        if (((this.userData = d ?? {}), n)) {
          ((this.animatedScroll = this.targetScroll = f),
            this.setScroll(this.scroll),
            this.reset(),
            this.preventNextNativeScrollEvent(),
            this.emit(),
            l?.(this),
            (this.userData = {}),
            requestAnimationFrame(() => {
              this.dispatchScrollendEvent();
            }));
          return;
        }
        (i || (this.targetScroll = f),
          typeof o == `number` && typeof s != `function`
            ? (s = vc)
            : typeof s == `function` && typeof o != `number` && (o = 1),
          this.animate.fromTo(this.animatedScroll, f, {
            duration: o,
            easing: s,
            lerp: a,
            onStart: () => {
              (r && (this.isLocked = !0), (this.isScrolling = `smooth`), c?.(this));
            },
            onUpdate: (e, t) => {
              ((this.isScrolling = `smooth`),
                (this.lastVelocity = this.velocity),
                (this.velocity = e - this.animatedScroll),
                (this.direction = Math.sign(this.velocity)),
                (this.animatedScroll = e),
                this.setScroll(this.scroll),
                i && (this.targetScroll = e),
                t || this.emit(),
                t &&
                  (this.reset(),
                  this.emit(),
                  l?.(this),
                  (this.userData = {}),
                  requestAnimationFrame(() => {
                    this.dispatchScrollendEvent();
                  }),
                  this.preventNextNativeScrollEvent()));
            },
          }));
      }
    }
    preventNextNativeScrollEvent() {
      ((this._preventNextNativeScrollEvent = !0),
        requestAnimationFrame(() => {
          this._preventNextNativeScrollEvent = !1;
        }));
    }
    hasNestedScroll(e, { deltaX: t, deltaY: n }) {
      let r = Date.now();
      e._lenis ||= {};
      let i = e._lenis,
        a,
        o,
        s,
        c,
        l,
        u,
        d,
        f,
        p,
        m;
      if (r - (i.time ?? 0) > 2e3) {
        i.time = Date.now();
        let t = window.getComputedStyle(e);
        if (
          ((i.computedStyle = t),
          (a = [`auto`, `overlay`, `scroll`].includes(t.overflowX)),
          (o = [`auto`, `overlay`, `scroll`].includes(t.overflowY)),
          (l = [`auto`].includes(t.overscrollBehaviorX)),
          (u = [`auto`].includes(t.overscrollBehaviorY)),
          (i.hasOverflowX = a),
          (i.hasOverflowY = o),
          !(a || o))
        )
          return !1;
        ((d = e.scrollWidth),
          (f = e.scrollHeight),
          (p = e.clientWidth),
          (m = e.clientHeight),
          (s = d > p),
          (c = f > m),
          (i.isScrollableX = s),
          (i.isScrollableY = c),
          (i.scrollWidth = d),
          (i.scrollHeight = f),
          (i.clientWidth = p),
          (i.clientHeight = m),
          (i.hasOverscrollBehaviorX = l),
          (i.hasOverscrollBehaviorY = u));
      } else
        ((s = i.isScrollableX),
          (c = i.isScrollableY),
          (a = i.hasOverflowX),
          (o = i.hasOverflowY),
          (d = i.scrollWidth),
          (f = i.scrollHeight),
          (p = i.clientWidth),
          (m = i.clientHeight),
          (l = i.hasOverscrollBehaviorX),
          (u = i.hasOverscrollBehaviorY));
      if (!((a && s) || (o && c))) return !1;
      let h = Math.abs(t) >= Math.abs(n) ? `horizontal` : `vertical`,
        g,
        _,
        v,
        y,
        b,
        x;
      if (h === `horizontal`) ((g = Math.round(e.scrollLeft)), (_ = d - p), (v = t), (y = a), (b = s), (x = l));
      else if (h === `vertical`) ((g = Math.round(e.scrollTop)), (_ = f - m), (v = n), (y = o), (b = c), (x = u));
      else return !1;
      return (!x && (g >= _ || g <= 0)) || ((v > 0 ? g < _ : g > 0) && y && b);
    }
    get rootElement() {
      return this.options.wrapper === window ? document.documentElement : this.options.wrapper;
    }
    get limit() {
      return this.options.naiveDimensions
        ? this.isHorizontal
          ? this.rootElement.scrollWidth - this.rootElement.clientWidth
          : this.rootElement.scrollHeight - this.rootElement.clientHeight
        : this.dimensions.limit[this.isHorizontal ? `x` : `y`];
    }
    get isHorizontal() {
      return this.options.orientation === `horizontal`;
    }
    get actualScroll() {
      let e = this.options.wrapper;
      return this.isHorizontal ? (e.scrollX ?? e.scrollLeft) : (e.scrollY ?? e.scrollTop);
    }
    get scroll() {
      return this.options.infinite ? lc(this.animatedScroll, this.limit) : this.animatedScroll;
    }
    get progress() {
      return this.limit === 0 ? 1 : this.scroll / this.limit;
    }
    get isScrolling() {
      return this._isScrolling;
    }
    set isScrolling(e) {
      this._isScrolling !== e && ((this._isScrolling = e), this.updateClassName());
    }
    get isStopped() {
      return this._isStopped;
    }
    set isStopped(e) {
      this._isStopped !== e && ((this._isStopped = e), this.updateClassName());
    }
    get isLocked() {
      return this._isLocked;
    }
    set isLocked(e) {
      this._isLocked !== e && ((this._isLocked = e), this.updateClassName());
    }
    get isSmooth() {
      return this.isScrolling === `smooth`;
    }
    get prefersReducedMotion() {
      return this.options.respectReducedMotion && this.reducedMotionMediaQuery.matches;
    }
    get className() {
      let e = `lenis`;
      return (
        this.options.autoToggle && (e += ` lenis-autoToggle`),
        this.isStopped && (e += ` lenis-stopped`),
        this.isLocked && (e += ` lenis-locked`),
        this.isScrolling && (e += ` lenis-scrolling`),
        this.isScrolling === `smooth` && (e += ` lenis-smooth`),
        e
      );
    }
    updateClassName() {
      (this.cleanUpClassName(),
        this.className.split(` `).forEach((e) => {
          this.rootElement.classList.add(e);
        }));
    }
    cleanUpClassName() {
      for (let e of Array.from(this.rootElement.classList))
        (e === `lenis` || e.startsWith(`lenis-`)) && this.rootElement.classList.remove(e);
    }
  },
  bc = { scroll: 0, scene: 1 },
  xc = [],
  Sc = 0,
  Cc = (e) => {
    Sc = requestAnimationFrame(Cc);
    for (let t of [...xc]) xc.includes(t) && t.callback(e);
  };
function wc(e, t) {
  let n = { callback: e, order: t };
  return (
    xc.push(n),
    xc.sort((e, t) => e.order - t.order),
    (Sc ||= requestAnimationFrame(Cc)),
    () => {
      let e = xc.indexOf(n);
      (e >= 0 && xc.splice(e, 1), xc.length === 0 && Sc && (cancelAnimationFrame(Sc), (Sc = 0)));
    }
  );
}
var Tc = Symbol(`smoothScroll`),
  Ec = 0,
  Dc = 0.06,
  Oc = 0.9,
  kc = 1.6,
  Ac = (e) => (e === 1 ? 1 : 1 - 2 ** (-10 * e));
function jc(e) {
  let t = u(null),
    n = null,
    r = null;
  f(Tc, t);
  let i = (n) => {
    let r = n.button === Ec && !n.metaKey && !n.ctrlKey && !n.shiftKey && !n.altKey,
      i = n.target.closest?.(`a[href^="#"]`);
    if (!r || n.defaultPrevented || !i || !t.value) return;
    let a = document.getElementById(decodeURIComponent(i.hash.slice(1)));
    a &&
      (n.preventDefault(),
      t.value.scrollTo(a === e.value ? 0 : a, { duration: kc, easing: Ac }),
      window.history.replaceState(window.history.state, ``, i.hash));
  };
  return (
    N(() => {
      let a = e.value;
      ((t.value = new yc({ wrapper: a, content: a, autoRaf: !1, lerp: Dc, wheelMultiplier: Oc })),
        (r = wc((e) => t.value?.raf(e), bc.scroll)),
        (n = new ResizeObserver(() => t.value?.resize())),
        [...a.children].forEach((e) => n.observe(e)),
        a.addEventListener(`click`, i));
    }),
    m(() => {
      (e.value?.removeEventListener(`click`, i), n?.disconnect(), r?.(), t.value?.destroy(), (t.value = null));
    }),
    t
  );
}
var Mc = 10,
  Nc = 3,
  Pc = 0,
  Fc = En(
    {
      __name: `ScrollMeter`,
      setup(e) {
        let t = v(Tc, null),
          n = z(`bar`),
          r = z(`rail`),
          i = o(0),
          a = o(0),
          s = o(!1),
          c = null,
          u = null,
          d = 0,
          f = 0,
          p = 0,
          h = F(() => ({
            ...$r(Vr.meter),
            "--block": `${Mc}px`,
            "--step": `13px`,
            width: `${Math.max(i.value * 13 - Nc, 0)}px`,
          })),
          g = F(() => `${Math.max(a.value * 13 - Nc, 0)}px`),
          y = () => {
            d = 0;
            let e = p > 0 ? Math.min(Math.max(c.scrollTop / p, 0), 1) : 0;
            ((i.value = Math.max(Math.floor((f + Nc) / 13), 1)), (a.value = Math.round(e * i.value)));
          },
          b = () => {
            let e = getComputedStyle(n.value);
            ((f = n.value.clientWidth - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)),
              (p = c.scrollHeight - c.clientHeight),
              x());
          },
          x = () => {
            d ||= requestAnimationFrame(y);
          },
          S = (e, n) => {
            let i = r.value.getBoundingClientRect(),
              a = Math.min(Math.max((e - i.left) / i.width, 0), 1) * (c.scrollHeight - c.clientHeight);
            t?.value ? t.value.scrollTo(a, { immediate: n }) : (c.scrollTop = a);
          },
          w = (e) => {
            e.button === Pc && ((s.value = !0), n.value.setPointerCapture(e.pointerId), S(e.clientX, !1));
          },
          T = (e) => {
            s.value && S(e.clientX, !0);
          },
          E = () => {
            s.value = !1;
          };
        return (
          N(() => {
            ((c = Ir(n.value)),
              c.addEventListener(`scroll`, x, { passive: !0 }),
              (u = new ResizeObserver(b)),
              [n.value, c, ...c.children].forEach((e) => u.observe(e)),
              b());
          }),
          m(() => {
            (cancelAnimationFrame(d), c?.removeEventListener(`scroll`, x), u?.disconnect());
          }),
          (e, t) => (
            M(),
            _(
              `div`,
              {
                ref_key: `bar`,
                ref: n,
                class: l([`scroll-meter`, { "scroll-meter--grabbed": s.value }]),
                "aria-hidden": `true`,
                onPointerdown: w,
                onPointermove: T,
                onPointerup: E,
                onPointercancel: E,
              },
              [
                R(
                  `span`,
                  { ref_key: `rail`, ref: r, class: `scroll-meter__rail`, style: C(h.value) },
                  [R(`span`, { class: `scroll-meter__fill`, style: C({ width: g.value }) }, null, 4)],
                  4,
                ),
              ],
              34,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-f4def31c`]],
  ),
  Ic = [`aria-label`, `tabindex`],
  Lc = 1.2,
  Rc = 1.6,
  zc = En(
    {
      __name: `ScrollTopButton`,
      setup(e) {
        let t = (e) => (e === 1 ? 1 : 1 - 2 ** (-10 * e)),
          n = Tn(),
          r = pe(),
          i = v(Tc, null),
          a = z(`button`),
          s = o(!1),
          c = null,
          u = 0,
          d = () => {
            ((u = 0), (s.value = c.scrollTop > c.clientHeight * Lc));
          },
          f = () => {
            u ||= requestAnimationFrame(d);
          },
          p = () => {
            i?.value ? i.value.scrollTo(0, { duration: Rc, easing: t }) : c.scrollTo({ top: 0, behavior: `smooth` });
          };
        return (
          N(() => {
            ((c = Ir(a.value)), c.addEventListener(`scroll`, f, { passive: !0 }), d());
          }),
          m(() => {
            (cancelAnimationFrame(u), c?.removeEventListener(`scroll`, f));
          }),
          (e, t) => (
            M(),
            _(
              `button`,
              {
                ref_key: `button`,
                ref: a,
                type: `button`,
                class: l([`scroll-top`, { "scroll-top--shown": s.value && !P(r).open }]),
                "aria-label": P(n).t(`toTop`),
                tabindex: s.value ? 0 : -1,
                onClick: p,
              },
              [
                ...(t[0] ||= [
                  R(
                    `svg`,
                    { class: `scroll-top__arrow`, viewBox: `0 0 24 24`, "aria-hidden": `true` },
                    [R(`path`, { d: `M12 19V5M5.5 11.5 12 5l6.5 6.5` })],
                    -1,
                  ),
                ]),
              ],
              10,
              Ic,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-b84a88c4`]],
  ),
  Bc = 16,
  Vc = 1025,
  Hc = () => parseFloat(getComputedStyle(document.documentElement).fontSize) / Bc,
  Uc = (e) => (e >= Vc ? Hc() : null),
  Wc = `#$%&*+=<>/?{}[]()@!~^|;:_\\`.repeat(2) + `ABDEKMRSX0137`,
  Gc = {
    maxPixelRatio: 2,
    overscanCoarse: 0.3,
    overscanFine: 0.05,
    maxDeltaSeconds: 0.1,
    narrowWidth: 600,
    narrowScale: 0.65,
    restageRows: 2,
    settleMs: 150,
    glitchSeconds: 0.7,
    glitchStrips: 2,
    glitchShift: 2.2,
    glitchChance: 0.45,
    glitchRate: 30,
  },
  Kc = {
    designWidth: 1920,
    sceneScale: 0.85,
    shiftX: 0.05,
    handScale: 0.9,
    fixedFrom: 1025,
    textGapRows: 1,
    handHalfRows: 8,
    handReachRows: 20,
    betweenRows: 3,
    eyesHalfRows: 9,
    eyesBandRows: 5,
    edgeShare: 0.06,
    minScale: 0.35,
    scaleStep: 0.01,
  },
  qc = { site: `"Science Gothic", system-ui, sans-serif`, siteWeight: 600 },
  Jc = {
    glyphs: Wc,
    count: 50,
    countNarrow: 32,
    depthBias: 1.6,
    topBand: 0.12,
    topBandDepth: 0.35,
    cellMargin: 0.15,
    color: [
      [40, 17, 5],
      [214, 94, 24],
    ],
    size: [12, 92],
    sizeCurve: 2,
    lift: [12, 44],
    drift: 18,
    tilt: 0.22,
    period: [15, 7],
    weight: [1, 2.4],
    reach: 46,
    reachSize: 0.55,
    push: 2400,
    grip: 14,
    carry: 1.1,
    friction: 1.15,
    settleSpeed: 6,
    calmSeconds: 1.6,
    spinGain: 0.012,
    spinFriction: 1.4,
    straighten: 0.6,
    pointerGap: 0.12,
    pointerSmoothing: 0.05,
    touchSeconds: 0.35,
    returnBelow: 0.6,
    returnEvery: [1.5, 4],
    returnMargin: 40,
    returnSpin: 2.5,
    landing: [0.08, 0.92],
  },
  Yc = {
    glyphs: Wc,
    count: 10,
    countNarrow: 5,
    color: [
      [34, 14, 4],
      [168, 72, 16],
    ],
    size: [10, 34],
    speed: [22, 70],
    sway: 10,
    swayPeriod: [5, 9],
    spin: 0.6,
    fade: 0.12,
    respawnDelay: [0, 5],
  },
  U = {
    cellsPerShortSide: 56,
    designShortSide: 900,
    cellRange: [11, 20],
    scale: 1.2,
    cellAspect: 0.5,
    font: `ui-monospace, "Cascadia Mono", Consolas, "SF Mono", Menlo, "Roboto Mono", "Courier New", monospace`,
    fontWeight: 600,
    fontScale: 0.8,
    letters: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`,
    digits: `0123456789`,
    symbols: `.,:;!?-_+=*/\\|<>()[]{}#%&@$^~`,
    digitShare: 0.14,
    brightness: 0.95,
    brightnessSpread: 0.4,
    dim: 0.4,
    blockInset: [0.12, 0.14],
    fringeShift: 0.09,
    fringeCool: 0.55,
    fringeWarm: 0.35,
    glowFrom: 0.6,
    glowBlur: 0.5,
  },
  Xc = {
    ink: [228, 114, 28],
    hot: [255, 170, 56],
    red: [236, 12, 4],
    redHot: [240, 84, 12],
    haze: [118, 54, 14],
    hazeRed: [120, 18, 6],
    fringeWarm: [255, 178, 13],
    fringeCool: [0, 82, 77],
    hotFrom: 0.5,
    hotTo: 1.6,
    exposure: 2.2,
  },
  Zc = {
    max: 4,
    firstDelay: [7.5, 9],
    interval: [2.5, 5.8],
    band: [0.06, 0.94],
    scale: [0.5, 1.3],
    opacity: [0.35, 1],
    rowsPerSecond: [5, 10],
    spin: [0.6, 2.4],
    level: 2.4,
    frameSeconds: 0.11,
    wakeCells: 7,
    wakeRed: 0.7,
    wakeRate: 18,
    fade: 0.15,
    keepScreens: 2,
  },
  W = {
    wide: { centre: [0.74, 0.5], spacingRows: 12 },
    narrow: { centre: [0.5, 0.5], spacingRows: 12 },
    visibility: 0.8,
    scale: 3.2,
    coreRows: 1.1,
    coreSoft: 0.7,
    coreMin: 0.9,
    aspect: [0.78, 1.32],
    harmonics: [2, 7],
    harmonicAmp: 0.13,
    bites: [2, 4],
    biteReach: [0.85, 1.35],
    biteRadius: [0.28, 0.6],
    cracks: [18, 30],
    crackLength: 0.75,
    crackRange: [1.2, 8],
    crackWidth: [0.5, 1.7],
    crackJitter: 0.9,
    crackWobble: 0.22,
    forkChance: 0.75,
    forkAt: [0.25, 0.7],
    forkTurn: [0.3, 0.9],
    forkLength: [0.35, 0.8],
    forkWidth: 0.6,
    slashes: [3, 6],
    slashOffset: [0.2, 1.8],
    slashLength: [3, 6.5],
    slashWidth: [0.5, 1.1],
    slashWobble: 0.35,
    slashWaves: [2, 5],
    microCracks: [22, 38],
    microFrom: [0.95, 1.3],
    microLength: [0.4, 1.5],
    microTurn: 0.5,
    microWidth: [0.3, 0.6],
    microWobble: 0.15,
    innerChance: 0.14,
    innerFrom: 0.55,
    innerTo: 0.92,
    innerLevel: 0.45,
    innerRed: 0.6,
    chipChance: 0.35,
    shardJitter: 0.5,
    bold: 0.7,
    boldGain: 1.3,
    boldReach: 0.6,
    glintWidth: 1.6,
    glintLevel: 1.8,
    darken: 0.97,
    rimAt: 1.3,
    rimWidth: 0.4,
    rimGain: 0.9,
    rimPush: 0.8,
    patchReach: 8.5,
    patchReachNarrow: 6,
    fadeFrom: 0.3,
    sparseCurve: 1.4,
    level: 0.85,
    haze: 0.75,
    hazeBlur: 0.9,
    liveMax: 120,
    liveFadeFrom: 0.5,
    churnRate: [0.3, 3],
    churnFlash: 1.1,
    churnFlashDecay: 6,
  },
  Qc = {
    floatersSpread: 3,
    glyphFade: 0.8,
    wallStart: 1.2,
    wallSpread: 3,
    wallRandom: 0.55,
    wallFade: 0.35,
    impacts: [4.8, 5.3],
    crackSeconds: 0.14,
    crackReach: 4.5,
    heatSpeed: 0.65,
    heatReach: 0.55,
    heatRowSpread: 2.6,
    heatRowShortest: 0.2,
    heatRowCost: 2.5,
    heatDropout: 0.12,
    heatCoolSeconds: 1,
    heatRedHold: 0.4,
    heatGain: 2.2,
    heatFlicker: 18,
    heatFadeSeconds: 1.2,
    eyesAt: 6.2,
    eyesSeconds: 1.2,
    eyesDrop: 0.75,
    end: 8.6,
  },
  $c = {
    level: 0.85,
    irisRows: 1.3,
    coreThreshold: 0.55,
    redThreshold: 0.12,
    glow: 3.6,
    faceLevel: 0.45,
    gazeRange: [2.2, 1.5],
    fullDeflection: 0.3,
    followSmoothing: 7,
    touchReleaseSeconds: 1.5,
    wanderSpeedX: 0.43,
    wanderSpeedY: 0.29,
    wanderPhase: 1.3,
    wanderReachX: 0.8,
    wanderReachY: 0.3,
    pulse: 0.12,
    pulseSpeed: 2.3,
    halo: 0.3,
    haloReach: 2.6,
    shimmerRate: 3,
  },
  G = {
    wide: { hole: [0.45, 0.8], catchY: 0.5 },
    narrow: { hole: [0.5, 0.9], catchY: 0.52 },
    firstAfterEyes: 2,
    interval: [14, 24],
    bugRowsPerSecond: 7,
    openLead: 1.6,
    openSeconds: 0.35,
    heatSeconds: 0.8,
    reachSeconds: 0.75,
    overshoot: 1.6,
    grabSeconds: 0.26,
    holdSeconds: 0.7,
    retractSeconds: 1.1,
    closeDelay: 2,
    dragSteps: 9,
    tearRate: 14,
    tearShare: 0.3,
    tearBand: 2,
    tearShift: 0.6,
    tearRed: 0.7,
    dropChance: 0.15,
    sceneGlitch: 0.5,
    crumbleSeconds: 1.8,
    closeCurve: 2,
    closeSoft: 0.35,
    crumbleShare: 0.18,
    crumbleSpeed: [1, 4],
    crumbleGravity: 30,
    crumbleSpin: 6,
    size: 3.5,
    holeScale: 4,
    holeReach: 6.5,
    facing: -1,
    grab: [0, 1.7],
    palm: { top: 2.3, bottom: 1.4, half: 1.65, round: 0.5 },
    thenar: { from: [-1.35, -0.15], to: [-0.8, -1.35], radius: 0.62 },
    arm: 11,
    armRadius: [0.9, 1.55],
    muscle: 0.14,
    muscleWaves: 0.55,
    sinewSlant: 0.45,
    sinewWaves: 0.7,
    ridgeLevel: 0.35,
    fingers: [-1.55, -0.52, 0.54, 1.52],
    fist: [-1.45, -0.48, 0.48, 1.42],
    fistSwell: 1.15,
    fingerRise: [0, 0.2, 0.06, -0.32],
    fingerLength: [0.95, 1.06, 1, 0.78],
    fingerBase: 1.6,
    fingerFan: 0.17,
    phalanx: [1.85, 1.3, 0.95],
    fingerRadius: [0.34, 0.31, 0.27, 0.2],
    knuckle: 1.35,
    claw: [1.4, 0.22, 0],
    clawSplit: 0.5,
    clawHook: 0.45,
    clawHide: 1.6,
    thumb: { at: [-1.5, -0.4], angle: -0.8, phalanx: [1.55, 1.2], radius: [0.44, 0.36, 0.26] },
    curlRest: [0.15, 0.2, 0.15],
    curlFist: [1.45, 1.85, 1.25],
    thumbRest: [0.05, 0.15],
    thumbFist: [1.45, 0.95],
    thumbDepth: 2,
    frontFrom: 0.3,
    seamWidth: 0.2,
    seamLevel: 0.12,
    frontGain: 0.35,
    bugHide: [0.45, 0.9],
    wiggle: 0.07,
    wiggleSpeed: 7,
    wigglePhase: 1.7,
    taperLength: 9,
    rim: 0.35,
    level: 0.4,
    rimLevel: 1.2,
    shade: 0.5,
    clawLevel: 1.1,
    clawRed: 1,
    bodyRed: 0.12,
    shimmerRate: 1.5,
    afterglow: 0.18,
    trail: 0.4,
    flash: 0.5,
    flashDecay: 9,
    dropHeat: 0.04,
    wallErase: 0.7,
    fadeRows: 3,
    sinkRows: 4,
    preyRelease: 0.4,
  },
  el = Math.PI * 2,
  K = (e) => Math.min(Math.max(e, 0), 1),
  q = ([e, t], n) => e + (t - e) * n,
  tl = ([e, t], n) => e.map((e, r) => e + (t[r] - e) * n),
  nl = (e, t) => `rgb(${e.map((e) => Math.round(e * t)).join(`, `)})`,
  J = (e) => q(e, Math.random()),
  rl = (e) => (Math.random() * 2 - 1) * e,
  il = (e) => e[Math.floor(Math.random() * e.length)],
  Y = (e) => {
    let t = Math.sin(e * 12.9898) * 43758.5453;
    return t - Math.floor(t);
  },
  al = (e, t, n) => {
    let r = K((n - e) / (t - e));
    return r * r * (3 - 2 * r);
  },
  ol = (e) => {
    for (let t = e.length - 1; t > 0; --t) {
      let n = Math.floor(Math.random() * (t + 1));
      [e[t], e[n]] = [e[n], e[t]];
    }
    return e;
  },
  sl = (e, t, n) => e + (t - e) * n,
  cl = (e) => `rgba(${e.map(Math.round).join(`, `)}, `,
  ll = cl(Xc.fringeCool),
  ul = cl(Xc.fringeWarm),
  dl = (e) => 1 - Math.exp(-e * Xc.exposure),
  fl = (e, t, n, r) => Math.round(sl(sl(Xc.ink[e], Xc.hot[e], t), r ? Xc.red[e] : sl(Xc.red[e], Xc.redHot[e], t), n));
function pl(e, t, n, r) {
  let i = K((e - Xc.hotFrom) / (Xc.hotTo - Xc.hotFrom));
  return `rgba(${fl(0, i, t, r)}, ${fl(1, i, t, r)}, ${fl(2, i, t, r)}, ${n})`;
}
function ml(e) {
  let t = e * U.cellAspect;
  return {
    row: e,
    column: t,
    font: `${U.fontWeight} ${e * U.fontScale}px ${U.font}`,
    centreX: (e) => (e + 0.5) * t,
    centreY: (t) => (t + 0.5) * e,
    columnAt: (e) => Math.floor(e / t),
    rowAt: (t) => Math.floor(t / e),
  };
}
var hl = (e, t, n = null) =>
    ml(
      n === null
        ? Math.min(Math.max(Math.min(e, t) / U.cellsPerShortSide, U.cellRange[0]), U.cellRange[1]) * U.scale
        : (U.designShortSide / U.cellsPerShortSide) * U.scale * n,
    ),
  gl = () => (Math.random() < U.digitShare ? il(U.digits) : il(U.letters + U.symbols));
function _l(e, t, n, r = !1, i = n.fade ?? 1) {
  let a = n.red ?? 0,
    o = dl(n.level) * i;
  if (o === 0) return;
  let s = pl(n.level, a, o, n.pure),
    c = r && n.level >= U.glowFrom;
  if (n.block) {
    let [r, i] = U.blockInset;
    (c && ((e.shadowColor = s), (e.shadowBlur = t.row * U.glowBlur)),
      (e.fillStyle = s),
      e.fillRect(n.x - t.column * (0.5 - r), n.y - t.row * (0.5 - i), t.column * (1 - r * 2), t.row * (1 - i * 2)),
      c && (e.shadowBlur = 0));
    return;
  }
  let l = t.column * U.fringeShift,
    u = o * U.fringeWarm * (1 - a);
  ((e.fillStyle = `${ll}${o * U.fringeCool})`),
    e.fillText(n.char, n.x - l, n.y),
    u > 0 && ((e.fillStyle = `${ul}${u})`), e.fillText(n.char, n.x + l, n.y)),
    c && ((e.shadowColor = s), (e.shadowBlur = t.row * U.glowBlur)),
    (e.fillStyle = s),
    e.fillText(n.char, n.x, n.y),
    c && (e.shadowBlur = 0));
}
function vl(e, t) {
  ((e.font = t.font), (e.textAlign = `center`), (e.textBaseline = `middle`));
}
var yl = 1e-4,
  bl = `touch`,
  xl = 2,
  Sl = 3,
  Cl = 73.1,
  wl = 19.7,
  Tl = 3.3,
  El = 41.3,
  Dl = 0.35,
  Ol = U.letters + U.digits + U.symbols,
  kl = (e, t, n) => Ol[Math.floor(Y(e * Cl + t * wl + n * Tl) * Ol.length)];
function Al(e, t, n, r, i) {
  let a = r * $c.haloReach,
    o = e.createRadialGradient(t, n, 0, t, n, a);
  (o.addColorStop(0, `rgba(${Xc.red.join(`, `)}, ${$c.halo * i})`),
    o.addColorStop(1, `rgba(${Xc.red.join(`, `)}, 0)`),
    (e.fillStyle = o),
    e.fillRect(t - a, n - a, a * 2, a * 2));
}
function jl() {
  let e = [],
    t = null,
    n = 1,
    r = { x: 0, y: 0 },
    i = { x: 0, y: 0 },
    a = { x: 0, y: 0, expires: -1 / 0 },
    o = 0,
    s = (e) => {
      let i = $c.irisRows * t.row,
        a = r.x - e.x,
        o = r.y - e.y,
        s = Math.max(Math.hypot(a, o), yl),
        c = Math.min(s / n, 1) / s;
      ((e.gazeX = a * c * $c.gazeRange[0] * i), (e.gazeY = o * c * $c.gazeRange[1] * i));
    },
    c = (e, n, r, i, a) => {
      let o = $c.irisRows * t.row,
        s = n.x + n.gazeX + a,
        c = n.y + n.gazeY;
      Al(e, s, c, o, i);
      let l = Math.floor(r * $c.shimmerRate);
      for (let n = t.rowAt(c - o * xl); n <= t.rowAt(c + o * xl); n += 1)
        for (let r = t.columnAt(s - o * xl); r <= t.columnAt(s + o * xl); r += 1) {
          let a = t.centreX(r),
            u = t.centreY(n),
            d = Math.exp(-((a - s) ** 2 + (u - c) ** 2) / (o * o)),
            f = al($c.redThreshold, $c.redThreshold * Sl, d);
          f <= 0 ||
            _l(
              e,
              t,
              {
                x: a,
                y: u,
                char: kl(r, n, l),
                block: d >= $c.coreThreshold,
                level: ($c.faceLevel + $c.glow * d) * i,
                red: 1,
                pure: !0,
                fade: f,
              },
              !0,
            );
        }
    };
  return {
    layout(a, o, s) {
      ((t = o),
        (n = $c.fullDeflection * s),
        (e = a.map((e) => ({ ...e, gazeX: 0, gazeY: 0 }))),
        (i.x = e.reduce((e, t) => e + t.x, 0) / e.length),
        (i.y = e.reduce((e, t) => e + t.y, 0) / e.length),
        (r.x = i.x),
        (r.y = i.y));
    },
    look(e, t, n) {
      ((a.x = e), (a.y = t), (a.expires = n === bl ? o + $c.touchReleaseSeconds : 1 / 0));
    },
    update(t, c) {
      o = c;
      let l = c < a.expires,
        u = l ? a.x : i.x + Math.sin(c * $c.wanderSpeedX) * $c.wanderReachX * n,
        d = l ? a.y : i.y + Math.sin(c * $c.wanderSpeedY + $c.wanderPhase) * $c.wanderReachY * n,
        f = 1 - Math.exp(-$c.followSmoothing * t);
      ((r.x += (u - r.x) * f), (r.y += (d - r.y) * f), e.forEach(s));
    },
    draw(n, r, i = 0) {
      let a = K((r - Qc.eyesAt) / Qc.eyesSeconds);
      if (a <= 0) return;
      let o = Math.max(i, 1 - a),
        s = Math.floor(r * Gc.glitchRate),
        l = o > 0 && Y(s * El) < Math.max(Gc.glitchChance * i, 1 - a);
      if (l && Y(s) < (a < 1 ? Qc.eyesDrop : Dl)) return;
      let u = l ? (Y(s + 1) * 2 - 1) * Gc.glitchShift * t.row * o : 0,
        d = $c.level * a * (1 + $c.pulse * Math.sin(r * $c.pulseSpeed));
      (vl(n, t), e.forEach((e) => c(n, e, r, d, u)));
    },
  };
}
var Ml = [
    [` \\\\ // `, `~(###@>`, ` // \\\\ `],
    [` // \\\\ `, `~(###@>`, ` \\\\ // `],
  ],
  Nl = { "/": `\\`, "\\": `/`, "(": `)`, ")": `(`, "<": `>`, ">": `<` },
  Pl = `#`,
  Fl = ` `,
  Il = Ml[0][0].length,
  Ll = Ml[0].length,
  Rl = 0.5,
  zl = 7.3,
  Bl = 13.1,
  Vl = 29.9,
  Hl = 100,
  Ul = U.letters + U.digits + U.symbols,
  Wl = [
    Ml,
    Ml.map((e) =>
      e.map((e) =>
        [...e]
          .reverse()
          .map((e) => Nl[e] ?? e)
          .join(``),
      ),
    ),
  ],
  Gl = () => (Math.random() < Rl ? -1 : 1) * J(Zc.spin),
  Kl = Ll;
function ql(e, t, n) {
  let { body: r } = t,
    [i, a, o] = t.angles,
    s = Wl[t.facing][Math.floor(t.age / Zc.frameSeconds) % 2];
  (vl(e, r),
    e.save(),
    e.translate(t.x, t.y),
    e.rotate(o),
    e.scale(Math.cos(a), Math.cos(i)),
    s.forEach((t, i) => {
      [...t].forEach((t, a) => {
        t !== Fl &&
          _l(
            e,
            r,
            {
              x: (a - (Il - 1) / 2) * r.column,
              y: (i - (Ll - 1) / 2) * r.row,
              char: t,
              block: t === Pl,
              level: Zc.level,
              fade: n,
            },
            !0,
          );
      });
    }),
    e.restore());
}
function Jl() {
  let e = [],
    t = null,
    n = 0,
    r = 0,
    i = 0,
    a = J(Zc.firstDelay),
    o = (r) => {
      let i = J(Zc.scale),
        a = ml(t.row * i);
      e.push({
        body: a,
        x: q(Zc.band, Math.random()) * n,
        y: r.top - a.row * (Ll + 1),
        speed: J(Zc.rowsPerSecond) * a.row,
        opacity: J(Zc.opacity),
        facing: Math.random() < Rl ? 0 : 1,
        seed: Math.random() * Hl,
        angles: [Math.random() * el, Math.random() * el, Math.random() * el],
        spins: [Gl(), Gl(), Gl()],
        age: 0,
      });
    },
    s = (e, t, n, r) => {
      let { body: i } = t,
        a = Math.floor(r * Zc.wakeRate);
      for (let r = 1; r <= Zc.wakeCells; r += 1)
        Y(t.seed + r * Bl + a * zl) < r / Zc.wakeCells ||
          _l(e, i, {
            x: t.x,
            y: t.y - i.row * (Ll / 2 + r),
            char: Ul[Math.floor(Y(t.seed + r + a * Vl) * Ul.length)],
            level: U.brightness,
            red: Zc.wakeRed,
            fade: n,
          });
    };
  return {
    layout(i, a, o) {
      ((n = i), (r = a), (t = o), (e.length = 0));
    },
    update(t, n) {
      ((i += t), i >= a && e.length < Zc.max && (o(n), (a = i + J(Zc.interval))));
      for (let i = e.length - 1; i >= 0; --i) {
        let a = e[i];
        ((a.age += t), (a.y += a.speed * t), (a.angles = a.angles.map((e, n) => e + a.spins[n] * t)));
        let o = a.y - a.body.row * (Ll + Zc.wakeCells);
        (o > r || o > n.top + n.height * Zc.keepScreens) && e.splice(i, 1);
      }
    },
    draw(t, n, i) {
      let a = i.height * Zc.fade;
      for (let o of e) {
        if (o.y < i.top - o.body.row * (Ll + Zc.wakeCells) || o.y > i.bottom + o.body.row * Ll) continue;
        let e = o.opacity * K((r - o.y) / a);
        (vl(t, o.body), s(t, o, e, n), ql(t, o, e));
      }
    },
  };
}
var Yl = (e, t) => {
    if (typeof document > `u`) return new OffscreenCanvas(e, t);
    let n = document.createElement(`canvas`);
    return ((n.width = e), (n.height = t), n);
  },
  Xl = [-1, 1],
  Zl = 100,
  Ql = 1.7,
  $l = 1e-4,
  eu = 0.9,
  tu = 0.3,
  nu = 0.6,
  ru = 13.7,
  iu = 5.1,
  au = 71.3,
  ou = 13.9,
  su = 3.7,
  cu = 0.6,
  lu = 4,
  uu = 255,
  du = 2,
  fu = 3,
  pu = 0.25,
  mu = 1,
  hu = 2,
  gu = (e) => Math.atan2(Math.sin(e), Math.cos(e)),
  _u = (e, t) => e.impact + Qc.crackSeconds * K(t / (e.core * Qc.crackReach));
function vu(e, t, n) {
  let r = null,
    i = 1 / 0;
  for (let a of e) {
    let e = Math.max(Math.hypot(t - a.x, n - a.y), $l);
    e < i && ((r = a), (i = e));
  }
  return { hole: r, span: i };
}
function yu(e, t, n, r, i, a, o) {
  let s = n - e,
    c = r - t;
  return {
    x1: e,
    y1: t,
    dx: s,
    dy: c,
    length: Math.hypot(s, c),
    width: i,
    wobble: a,
    waves: o,
    phase: Math.random() * el,
  };
}
function bu(e, t, n, r, i, a) {
  let o = Math.round(J(W.cracks)),
    s = Array.from({ length: o }, (e, t) => ({
      angle: ((t + 0.5 + rl(W.crackJitter / 2)) / o) * el,
      length: r * W.crackLength * J(W.crackRange),
      width: J(W.crackWidth),
      phase: Math.random() * el,
    })),
    c = [];
  for (let n of s) {
    if (Math.random() > W.forkChance) continue;
    let r = J(W.forkAt) * n.length,
      i = n.angle + (Math.random() < 0.5 ? -1 : 1) * J(W.forkTurn),
      a = J(W.forkLength) * (n.length - r),
      o = e + Math.cos(n.angle) * r,
      s = t + Math.sin(n.angle) * r;
    c.push(yu(o, s, o + Math.cos(i) * a, s + Math.sin(i) * a, n.width * W.forkWidth, 0, 0));
  }
  for (let n = Math.round(J(W.slashes)); n > 0; --n) {
    let n = Math.random() * el,
      a = rl(1) * q(W.slashOffset, Math.random()) * r,
      o = J(W.slashLength) * r,
      s = e - Math.sin(n) * a + Math.cos(n) * rl(r),
      l = t + Math.cos(n) * a + Math.sin(n) * rl(r),
      u = (Math.cos(n) * o) / 2,
      d = (Math.sin(n) * o) / 2;
    c.push(yu(s - u, l - d, s + u, l + d, J(W.slashWidth), W.slashWobble * i.row, Math.round(J(W.slashWaves))));
  }
  for (let n = Math.round(J(W.microCracks)); n > 0; --n) {
    let n = Math.random() * el,
      a = J(W.microFrom) * r,
      o = n + rl(W.microTurn),
      s = J(W.microLength) * r,
      l = e + Math.cos(n) * a,
      u = t + Math.sin(n) * a;
    c.push(yu(l, u, l + Math.cos(o) * s, u + Math.sin(o) * s, J(W.microWidth), W.microWobble * i.row, du));
  }
  return {
    x: e,
    y: t,
    side: n,
    core: r,
    impact: a,
    key: Math.random() * Zl,
    tilt: Math.random() * Math.PI,
    aspect: J(W.aspect),
    harmonics: Array.from({ length: W.harmonics[1] - W.harmonics[0] + 1 }, (e, t) => {
      let n = W.harmonics[0] + t;
      return { waves: n, amp: (rl(W.harmonicAmp) * W.harmonics[0]) / n, phase: Math.random() * el };
    }),
    bites: Array.from({ length: Math.round(J(W.bites)) }, () => {
      let n = Math.random() * el,
        i = J(W.biteReach) * r;
      return { x: e + Math.cos(n) * i, y: t + Math.sin(n) * i, radius: J(W.biteRadius) * r };
    }),
    rays: s,
    segments: c,
  };
}
function xu(e, t) {
  return 0.5 * (t.row * Math.abs(Math.cos(e)) + t.column * Math.abs(Math.sin(e)));
}
function Su(e, t, n) {
  return (
    (e.hairRow !== n.row || e.hairColumn !== n.column) &&
      ((e.hair = xu(t(e), n)), (e.hairRow = n.row), (e.hairColumn = n.column)),
    e.hair
  );
}
var Cu = (e) => e.angle,
  wu = (e) => Math.atan2(e.dy, e.dx);
function Tu(e, t, n, r, i, a, o, s) {
  let c = 0,
    l = 0,
    u = Math.atan2(i, r),
    d = a >= o;
  for (let t of e.rays) {
    let e = gu(u - t.angle + W.crackWobble * Math.sin((a / s.row) * Ql + t.phase)),
      n = a * Math.cos(e);
    if (!(n >= 0 && n <= t.length)) continue;
    let r = Su(t, Cu, s),
      i = 1 - al(0, W.boldReach, n / t.length),
      o = Math.abs(a * Math.sin(e)),
      f = r * t.width * (1 + W.bold * W.boldGain * i);
    o < f ? (c = 1) : o <= f + r * W.glintWidth && d && (l = 1);
  }
  for (let r of e.segments) {
    let e = ((t - r.x1) * r.dx + (n - r.y1) * r.dy) / (r.length * r.length);
    if (!(e >= 0 && e <= 1)) continue;
    let i = ((t - r.x1) * r.dy - (n - r.y1) * r.dx) / r.length,
      a = Math.abs(i - Math.sin(e * r.waves * el + r.phase) * r.wobble),
      o = Su(r, wu, s),
      u = o * r.width * (1 - nu * (2 * e - 1) ** 2);
    a < u ? (c = 1) : a <= u + o * W.glintWidth && d && (l = 1);
  }
  return { cut: c, edge: l };
}
function Eu(e, t, n) {
  let r = Math.cos(e.tilt),
    i = Math.sin(e.tilt),
    a = (t * r + n * i) / e.aspect,
    o = -t * i + n * r,
    s = Math.atan2(o, a),
    c = e.harmonics.reduce((e, { waves: t, amp: n, phase: r }) => e + n * Math.sin(t * s + r), 0);
  return { span: Math.hypot(a, o), radius: e.core * Math.max(W.coreMin, 1 + c) };
}
function Du(e, t, n, r, i, a = 1) {
  let o = 0;
  for (let i of e) o = Math.max(o, 1 - al(W.fadeFrom * r, r, Math.max(Math.hypot(t - i.x, n - i.y), $l)));
  if (o <= 0 || Math.random() > 1 - (1 - o ** W.sparseCurve) ** a) return null;
  let s = 0,
    c = 0,
    l = 0,
    u = 0,
    d = 0,
    f = null,
    p = 1 / 0,
    m = 0,
    h = !1,
    g = vu(e, t, n);
  for (let r of e) {
    let e = t - r.x,
      a = n - r.y,
      o = Math.max(Math.hypot(e, a), $l),
      g = Eu(r, e, a),
      _ = Tu(r, t, n, e, a, o, g.radius, i),
      v = +!!r.bites.some((e) => Math.hypot(t - e.x, n - e.y) < e.radius),
      y = 1 - al(g.radius * W.coreSoft, g.radius, g.span),
      b = (g.span - g.radius * W.rimAt) / (g.radius * W.rimWidth),
      x = Math.exp(-b * b),
      S = +(x > tu && Math.random() < W.chipChance * x),
      C = Math.max(y, _.cut, v, S),
      w = Math.max(Math.max(y, v, S) * hu, _.cut, _.edge, x);
    w > m && ((f = r), (p = o), (m = w));
    let T = g.span / g.radius;
    ((h ||= y >= eu && T >= W.innerFrom && T <= W.innerTo),
      (c = Math.max(c, _.edge * W.bold * (1 - C))),
      (s = Math.max(s, C)),
      (l += x * W.rimGain),
      (u += ((e / o) * W.rimPush + rl(W.shardJitter)) * i.row * x),
      (d += ((a / o) * W.rimPush + rl(W.shardJitter)) * i.row * x));
  }
  f || ((f = g.hole), (p = g.span));
  let _ = gl(),
    v = U.brightness * (1 - U.brightnessSpread * Math.random()) * U.dim,
    y = { x: t, y: n, char: _, level: v * W.level, base: v * W.level, red: 0, fade: o },
    b = v * (1 - W.darken * s) * (1 + l),
    x = q([b, Math.max(b, U.brightness * W.glintLevel)], c) * W.level,
    S = h && Math.random() < W.innerChance,
    C = v * W.innerLevel * W.level,
    w = S ? { x: t, y: n, char: _, level: C, base: C, red: W.innerRed, fade: o } : null;
  return {
    intact: y,
    broken: s >= eu ? w : { x: t + u, y: n + d, char: _, level: x, base: x, red: c, fade: o },
    x: t,
    y: n,
    switchAt: _u(f, p),
    span: g.span,
    hole: f,
    fracture: s,
  };
}
function Ou(e, t, n, r) {
  let i = Yl(n.columns, n.rows),
    a = i.getContext(`2d`),
    o = a.createImageData(n.columns, n.rows);
  for (let e of t) {
    let t = (e.row * n.columns + e.column) * lu,
      r = Xc.haze.map((t, n) => q([t, Xc.hazeRed[n]], e.red));
    o.data.set([...r, K(W.haze * dl(e.level) * e.fade) * uu], t);
  }
  (a.putImageData(o, 0, 0),
    e.save(),
    (e.imageSmoothingEnabled = !0),
    (e.filter = `blur(${r.row * W.hazeBlur}px)`),
    e.drawImage(i, n.left, n.top, n.columns * r.column, n.rows * r.row),
    e.restore());
}
function ku(e) {
  let t = document.createElement(`canvas`);
  ((t.width = e.columns), (t.height = e.rows));
  let n = t.getContext(`2d`);
  return { canvas: t, context: n, image: n.createImageData(e.columns, e.rows) };
}
function Au() {
  let e = document.createElement(`canvas`),
    t = document.createElement(`canvas`),
    n = document.createElement(`canvas`),
    r = document.createElement(`canvas`),
    i = { left: 0, top: 0, width: 0, height: 0 },
    a = { left: 0, top: 0, columns: 0, rows: 0 },
    o = null,
    s = [],
    c = [],
    l = [],
    u = [],
    d = null,
    f = 1,
    p = null,
    m = [],
    h = (e) => e.setTransform(f, 0, 0, f, -i.left * f, -i.top * f),
    g = (e, t) => {
      ((e.width = Math.ceil(i.width * f)), (e.height = Math.ceil(i.height * f)));
      let n = e.getContext(`2d`);
      (h(n), Ou(n, t, o, d), vl(n, d), t.filter((e) => !e.live).forEach((e) => _l(n, d, e, !0)));
    },
    _ = (e, t) => K((t - e.appearAt) / Qc.wallFade),
    v = (e, t) => Qc.wallStart + q([K(e / t), Math.random()], Qc.wallRandom) * Qc.wallSpread,
    y = (e, t, n) => {
      n.context.putImageData(n.image, 0, 0);
      let o = r.getContext(`2d`);
      (o.setTransform(1, 0, 0, 1, 0, 0),
        (o.globalCompositeOperation = `copy`),
        o.drawImage(t, 0, 0),
        (o.globalCompositeOperation = `destination-in`),
        (o.imageSmoothingEnabled = !0),
        h(o),
        o.drawImage(n.canvas, a.left, a.top, a.columns * d.column, a.rows * d.row),
        (o.globalCompositeOperation = `source-over`),
        e.drawImage(r, i.left, i.top, i.width, i.height));
    },
    b = (e, t) => {
      let n = t - e.hole.impact;
      if (n <= 0) return 0;
      let r = m[e.row],
        i = Math.abs(e.x - e.hole.x),
        a = (e.y - e.hole.y) / (Qc.heatRowSpread * d.row * Math.sqrt(W.scale)),
        o = r.reach * Math.exp(-a * a);
      if (i > o || e.dropout) return 0;
      let s = n - (i + Math.abs(e.y - e.hole.y) * Qc.heatRowCost) / r.speed;
      return s < 0 ? 0 : Math.exp(-s / Qc.heatCoolSeconds) * (1 - (cu * i) / Math.max(o, $l));
    },
    x = (r, a) => {
      let o = Math.floor(a * Qc.heatFlicker),
        s = 1 - al(Qc.end - Qc.heatFadeSeconds, Qc.end, a),
        { intact: l, broken: u, heat: d } = p,
        f = !1,
        m = !1,
        h = !0;
      (c.forEach((e, t) => {
        let n = t * lu + fu,
          r = _(e, a),
          i = a >= e.switchAt;
        ((l.image.data[n] = i ? 0 : r * uu), (u.image.data[n] = i ? r * uu : 0));
        let c = i && e.broken ? b(e, a) * (0.75 + pu * Y(e.row * su + e.column + o)) * s : 0;
        ((d.image.data[n] = al(0, Qc.heatRedHold, c) * r * uu),
          (f ||= !i && r > 0),
          (m ||= c > 0),
          (h = h && i && r >= 1));
      }),
        f && y(r, e, l),
        h ? r.drawImage(t, i.left, i.top, i.width, i.height) : y(r, t, u),
        m && y(r, n, d));
    },
    S = (e, n, r) => {
      if (r <= 0) {
        e.drawImage(t, i.left, i.top, i.width, i.height);
        return;
      }
      let a = d.row * Gc.glitchStrips,
        o = Math.floor(n * Gc.glitchRate);
      for (let n = 0, s = 0; n < i.height; n += a, s += 1) {
        let c = Y(o + s * ru) < Gc.glitchChance * r ? (Y(o * iu + s) * 2 - 1) * Gc.glitchShift * d.row * r : 0,
          l = Math.min(a, i.height - n);
        e.drawImage(t, 0, n * f, t.width, l * f, i.left + c, i.top + n, i.width, l);
      }
    },
    C = (e, t, n) => {
      vl(e, d);
      for (let r of l) {
        let i = _(r, t);
        if (i <= 0) continue;
        let a = t >= r.switchAt ? r.broken : r.intact,
          o = Math.floor(t * r.rate + r.intact.base * Zl);
        (r.tick < 0
          ? (r.tick = o)
          : (o !== r.tick || n > 0) &&
            ((r.tick = o), (r.intact.char = gl()), (r.broken.char = r.intact.char), (r.flashAt = t)),
          (a.level = a.base * (1 + W.churnFlash * Math.exp(-(t - r.flashAt) * W.churnFlashDecay))),
          _l(e, d, a, !1, a.fade * i));
      }
    },
    w = () => {
      let e = s.filter((e) => e.broken && e.broken.red === 0 && e.broken.fade >= W.liveFadeFrom);
      l = e.filter(() => Math.random() < W.liveMax / Math.max(e.length, 1)).slice(0, W.liveMax);
      for (let e of l)
        ((e.intact.live = !0),
          (e.broken.live = !0),
          Object.assign(e, { rate: J(W.churnRate), tick: -1, flashAt: -1 / 0 }));
    },
    T = (e, t, n, r, i) => {
      let l = new Map(s.map((e) => [e.row * o.columns + e.column, e]));
      c = [];
      for (let s = 0; s < a.rows; s += 1)
        for (let f = 0; f < a.columns; f += 1) {
          let a = f - n,
            p = s - r,
            m = a >= 0 && a < o.columns && p >= 0 && p < o.rows ? l.get(p * o.columns + a) : null;
          if (m) {
            c.push(m);
            continue;
          }
          let { hole: h, span: g } = vu(u, d.centreX(e + a), d.centreY(t + p));
          c.push({ appearAt: v(g, i), switchAt: _u(h, g), broken: null });
        }
    };
  return {
    layout(c, l, h, _, y = null, b = null) {
      ((d = _), (f = h));
      let x = c < l,
        S = x ? W.narrow : W.wide,
        C = W.coreRows * d.row * W.scale,
        E = (S.spacingRows * d.row) / 2,
        D = y ?? S.centre[1] * l,
        O = b ?? S.centre[0] * c;
      u = Xl.map((e, t) => bu(O + e * E, D, e, C, d, Qc.impacts[t]));
      let ee = (x ? W.patchReachNarrow : W.patchReach) * C,
        k = Math.max(d.columnAt(Math.min(...u.map((e) => e.x)) - ee), 0),
        A = Math.min(d.columnAt(Math.max(...u.map((e) => e.x)) + ee), d.columnAt(c)),
        j = Math.max(d.rowAt(u[0].y - ee), 0),
        M = Math.min(d.rowAt(u[0].y + ee), d.rowAt(Math.max(l, D + ee)));
      o = { left: k * d.column, top: j * d.row, columns: A - k + 1, rows: M - j + 1 };
      let N = d.row * (W.rimPush + W.shardJitter) * 2;
      Object.assign(i, {
        left: o.left - N,
        top: o.top - N,
        width: o.columns * d.column + N * 2,
        height: o.rows * d.row + N * 2,
      });
      let te = Math.ceil(N / d.column) + mu,
        ne = Math.ceil(N / d.row) + mu;
      (Object.assign(a, {
        left: o.left - te * d.column,
        top: o.top - ne * d.row,
        columns: o.columns + te * 2,
        rows: o.rows + ne * 2,
      }),
        (m = Array.from({ length: o.rows }, (e, t) => ({
          reach: Qc.heatReach * l * q([Qc.heatRowShortest, 1], Y(t * au + u[0].key)),
          speed: Qc.heatSpeed * l,
        }))),
        (s = []));
      for (let e = j; e <= M; e += 1)
        for (let t = k; t <= A; t += 1) {
          let n = Du(u, d.centreX(t), d.centreY(e), ee, d);
          n &&
            s.push(
              Object.assign(n, {
                column: t - k,
                row: e - j,
                appearAt: v(n.span, ee),
                dropout: Y(t * ou + e) < Qc.heatDropout,
              }),
            );
        }
      (T(k, j, te, ne, ee), w());
      let re = (e, t) => Object.assign(e, { column: t.column, row: t.row }),
        ie = s.filter((e) => e.broken);
      return (
        g(
          e,
          s.map((e) => re(e.intact, e)),
        ),
        g(
          t,
          ie.map((e) => re(e.broken, e)),
        ),
        g(
          n,
          ie.map((e) => ({
            ...e.broken,
            level: Math.max(e.broken.level, U.brightness) * Qc.heatGain,
            red: 1,
            live: !1,
          })),
        ),
        (r.width = e.width),
        (r.height = e.height),
        (p = { intact: ku(a), broken: ku(a), heat: ku(a) }),
        u.map(({ x: e, y: t, core: n, side: r }) => ({ x: e, y: t, core: n, side: r }))
      );
    },
    draw(e, t, n = 0) {
      t < Qc.wallStart || (t < Qc.end ? x(e, t) : S(e, t, n), C(e, t, n));
    },
  };
}
var ju = U.letters + U.digits + U.symbols,
  Mu = 73.1,
  Nu = 19.7,
  Pu = 3.3,
  Fu = 5.9,
  Iu = 4096,
  Lu = 29.1,
  Ru = 47.7,
  zu = 0.5,
  Bu = 0.6,
  Vu = 1,
  Hu = 5,
  Uu = -1,
  Wu = 1,
  Gu = 1e-6,
  Ku = [3, 1.6],
  qu = 6,
  Ju = (e) => 1 - (1 - e) ** 3,
  Yu = (e) => e ** 3,
  Xu = (e) => 1 + (G.overshoot + 1) * (e - 1) ** 3 + G.overshoot * (e - 1) ** 2,
  Zu = (e, t, n) => K((e - t) / n),
  Qu = (e, t, n) => {
    let r = Math.floor(n * G.shimmerRate + Y(e * Fu + t));
    return ju[Math.floor(Y(e * Mu + t * Nu + r * Pu) * ju.length)];
  },
  $u = Math.max(...G.armRadius) + G.muscle + Gu,
  ed =
    G.fingerBase +
    Math.max(...G.fingerRise) +
    G.phalanx.reduce((e, t) => e + t, 0) * Math.max(...G.fingerLength) +
    G.claw[0],
  td = G.fingers.length + 1,
  nd = td + 1,
  rd = new Float64Array(nd),
  id = G.palm;
function ad(e, t, n, r, i, a, o, s = !1) {
  return { ax: e, ay: t, bx: e + Math.sin(n) * r, by: t + Math.cos(n) * r, ra: i, rb: a, group: o, claw: s };
}
var od = {
    ax: G.thenar.from[0],
    ay: G.thenar.from[1],
    bx: G.thenar.to[0],
    by: G.thenar.to[1],
    ra: G.thenar.radius,
    rb: G.thenar.radius,
  },
  sd = { x: 0, y: 0, char: ``, level: 0, red: 0, fade: 1 };
function cd(e, t, n) {
  let r = n.bx - n.ax,
    i = n.by - n.ay,
    a = K(((e - n.ax) * r + (t - n.ay) * i) / Math.max(r * r + i * i, Gu));
  return Math.hypot(e - n.ax - r * a, t - n.ay - i * a) - q([n.ra, n.rb], a);
}
function ld(e, t, n, r, i) {
  let a = Math.abs(e),
    o = r - n,
    s = i * 2,
    c = a - Math.min(a, t < 0 ? n : r),
    l = Math.abs(t) - i,
    u = K(((r - a) * o + (i - t) * s) / (o * o + s * s)),
    d = a - r + o * u,
    f = t - i + s * u;
  return (d < 0 && l < 0 ? -1 : 1) * Math.sqrt(Math.min(c * c + l * l, d * d + f * f));
}
var ud = (e, t) =>
  Math.min(ld(e, t, id.bottom - id.round, id.top - id.round, id.half - id.round) - id.round, cd(e, t, od));
function dd(e, t, n, r, i, a, o) {
  let [s, c, l] = G.claw,
    u = q([c, l], G.clawSplit),
    d = ad(n, r, i, s * G.clawSplit * a, c, u, t, !0);
  (e.parts.push(d), e.parts.push(ad(d.bx, d.by, i + o, s * (1 - G.clawSplit) * a, u, l, t, !0)));
}
function fd(e, t, n, r, i, a, o, s, c) {
  let [l, u] = n,
    d = 0,
    f = G.fingerRadius.map((e) => e * o);
  i.forEach((n, i) => {
    d += a[i];
    let o = ad(l, u, r, n * Math.cos(d), f[i], f[i + 1], t);
    (e.parts.push(o), e.knuckles.push({ x: l, y: u, r: f[i] * G.knuckle, group: t }), (l = o.bx), (u = o.by));
  });
  let p = s * Math.max(Math.cos(d), 0);
  p > 0 && dd(e, t, l, u, r, p, c);
}
function pd(e, t, n) {
  let { at: r, angle: i, phalanx: a, radius: o } = G.thumb,
    [s, c] = r,
    l = i;
  (a.forEach((n, r) => {
    l += t[r];
    let i = ad(s, c, l, n, o[r], o[r + 1], td);
    (e.parts.push(i), e.knuckles.push({ x: s, y: c, r: o[r] * G.knuckle, group: td }), (s = i.bx), (c = i.by));
  }),
    n > 0 && dd(e, td, s, c, l, n, G.clawHook));
}
function md(e, t) {
  let n = { parts: [], knuckles: [], depth: new Float64Array(nd) },
    r = K(1 - e * G.clawHide);
  return (
    G.fingers.forEach((i, a) => {
      let o = a + 1,
        s = G.wiggle * (1 - e) * Math.sin(t * G.wiggleSpeed + a * G.wigglePhase),
        c = G.curlRest.map((t, n) => q([t, G.curlFist[n]], e) + s),
        l = G.phalanx.map((e) => e * G.fingerLength[a]),
        u = [q([i, G.fist[a]], e), G.fingerBase + G.fingerRise[a]];
      (fd(n, o, u, G.fingerFan * i * (1 - e), l, c, q([1, G.fistSwell], e), r, -Math.sign(i) * G.clawHook),
        (n.depth[o] = e));
    }),
    pd(
      n,
      G.thumbRest.map((t, n) => q([t, G.thumbFist[n]], e)),
      r,
    ),
    (n.depth[td] = e * G.thumbDepth),
    n
  );
}
function hd(e) {
  let t = { left: -id.top, right: id.top, bottom: -id.half, top: id.half },
    n = (e, n, r, i, a) => {
      ((t.left = Math.min(t.left, e - a)),
        (t.right = Math.max(t.right, n + a)),
        (t.bottom = Math.min(t.bottom, r - a)),
        (t.top = Math.max(t.top, i + a)));
    };
  for (let t of e.knuckles) n(t.x, t.x, t.y, t.y, t.r);
  for (let t of [od, ...e.parts])
    n(Math.min(t.ax, t.bx), Math.max(t.ax, t.bx), Math.min(t.ay, t.by), Math.max(t.ay, t.by), Math.max(t.ra, t.rb));
  return ((t.left -= Gu), (t.right += Gu), (t.bottom -= Gu), (t.top += Gu), t);
}
var gd = (e, t, n) =>
  (e >= n.left && e <= n.right && t >= n.bottom && t <= n.top) || (t < 0 && t > -G.arm && Math.abs(e) <= $u);
function _d(e, t, n) {
  let r = ud(e, t),
    i = !1,
    a = !1;
  if (t < 0 && t > -G.arm) {
    let n = G.muscle * Math.sin(-t * G.muscleWaves),
      i = Math.abs(e) - q(G.armRadius, K(-t / G.taperLength)) - n;
    i < r && ((r = i), (a = !0));
  }
  rd.fill(1 / 0);
  for (let i of n.knuckles) {
    let n = Math.hypot(e - i.x, t - i.y) - i.r;
    ((rd[i.group] = Math.min(rd[i.group], n)), (r = Math.min(r, n)));
  }
  for (let o of n.parts) {
    let n = cd(e, t, o);
    ((rd[o.group] = Math.min(rd[o.group], n)), n < r && ((r = n), (i = o.claw), (a = !1)));
  }
  let o = 0;
  for (let e = 1; e < nd; e += 1) rd[e] < 0 && n.depth[e] > G.frontFrom && n.depth[e] > n.depth[o] && (o = e);
  return { distance: r, claw: i, arm: a, edge: o ? rd[o] : null, depth: n.depth[o] };
}
function vd() {
  let e = null,
    t = new Map(),
    n = document.createElement(`canvas`),
    r = n.getContext(`2d`),
    i = 0,
    a = 0,
    o = 0,
    s = 0,
    c = null,
    l = 1,
    u = document.createElement(`canvas`),
    d = u.getContext(`2d`),
    f = null,
    p = Qc.eyesAt + Qc.eyesSeconds + G.firstAfterEyes,
    m = (t, n, r, i) => {
      ((t.width = Math.ceil(i.width * l)), (t.height = Math.ceil(i.height * l)));
      let a = t.getContext(`2d`);
      (a.setTransform(l, 0, 0, l, -i.left * l, -i.top * l),
        Ou(a, n, r, e),
        vl(a, e),
        n.forEach((t) => _l(a, e, t, !0)));
    },
    h = (t) => {
      let n = e.column * Ku[0],
        r = e.row * Ku[1],
        i = Math.max(Math.ceil(Math.sqrt(t.length)), 1),
        a = document.createElement(`canvas`);
      ((a.width = Math.ceil(i * n * l)), (a.height = Math.max(Math.ceil(Math.ceil(t.length / i) * r * l), 1)));
      let o = a.getContext(`2d`);
      return (
        o.setTransform(l, 0, 0, l, 0, 0),
        vl(o, e),
        t.forEach((t, a) => {
          ((t.slotX = (a % i) * n),
            (t.slotY = Math.floor(a / i) * r),
            _l(o, e, { ...t, x: t.slotX + n / 2, y: t.slotY + r / 2 }));
        }),
        { canvas: a, slotWidth: n, slotHeight: r }
      );
    };
  function* g(t) {
    let n = W.coreRows * e.row * G.holeScale,
      r = n * G.holeReach,
      i = bu(c.x, c.y, Vu, n, e, t),
      a = e.columnAt(c.x - r),
      o = e.rowAt(c.y - r),
      s = { left: a * e.column, top: o * e.row, columns: e.columnAt(c.x + r) - a + 1, rows: e.rowAt(c.y + r) - o + 1 },
      l = e.row * (W.rimPush + W.shardJitter) * 2,
      u = { left: s.left - l, top: s.top - l, width: s.columns * e.column + l * 2, height: s.rows * e.row + l * 2 },
      d = [];
    for (let t = 0; t < s.rows; t += 1) {
      for (let n = 0; n < s.columns; n += 1) {
        let s = Du([i], e.centreX(a + n), e.centreY(o + t), r, e);
        s?.broken && d.push(Object.assign(s.broken, { column: n, row: t }));
      }
      (t + 1) % qu === 0 && (yield);
    }
    yield;
    let f = document.createElement(`canvas`),
      p = document.createElement(`canvas`);
    (m(f, d, s, u),
      yield,
      m(
        p,
        d.map((e) => ({ ...e, level: Math.max(e.level, U.brightness) * Qc.heatGain, red: Wu })),
        s,
        u,
      ),
      yield);
    let g = d
      .filter(() => Math.random() < G.crumbleShare)
      .map((t) => {
        let n = Math.random() * el,
          r = J(G.crumbleSpeed) * e.row;
        return { ...t, vx: Math.cos(n) * r, vy: Math.sin(n) * r, spin: rl(G.crumbleSpin) };
      });
    return { layer: f, heat: p, box: u, reach: r, crumbs: g, atlas: h(g) };
  }
  let _ = () => {
      let e = f.building.next();
      if (e.done) {
        let t = e.value;
        ((f.hole = t),
          (f.building = null),
          Promise.all([t.layer, t.heat, t.atlas.canvas].map((e) => createImageBitmap(e))).then(
            ([e, n, r]) => {
              if (f?.hole !== t) {
                [e, n, r].forEach((e) => e.close());
                return;
              }
              (Object.assign(t, { layer: e, heat: n, bitmaps: [e, n, r] }), (t.atlas.canvas = r));
            },
            () => {},
          ));
      }
    },
    v = () => {
      (f?.hole?.bitmaps?.forEach((e) => e.close()), (f = null));
    },
    y = (t) => {
      let n = e.row * G.size,
        r = ml(e.row),
        { catchY: i } = c,
        a = -r.row * (Kl + 1),
        o = G.bugRowsPerSecond * e.row,
        s = t + (i - a) / o,
        l = s - G.openLead,
        u = s + G.grabSeconds + G.holdSeconds,
        d = u + G.retractSeconds + G.closeDelay;
      return {
        start: t,
        unit: n,
        startY: a,
        speed: o,
        catchAt: s,
        openAt: l,
        reachAt: s - G.reachSeconds,
        retractAt: u,
        closeAt: d,
        end: d + G.crumbleSeconds,
        hidden: c.y + G.sinkRows * e.row + (ed + Bu) * n,
        raised: i + G.grab[1] * n,
        hole: null,
        building: g(l),
        bug: { body: r, x: c.x, y: a, angles: [0, 0, 0], facing: Math.random() < zu ? 0 : 1, age: 0 },
      };
    },
    b = (e) =>
      e < f.catchAt
        ? q([f.hidden, f.raised], Xu(Zu(e, f.reachAt, G.reachSeconds)))
        : q([f.raised, f.hidden], Yu(Zu(e, f.retractAt, G.retractSeconds))),
    x = (e, t, n, r) => {
      let i = Math.max(c.x - r, n.left),
        a = Math.max(c.y - r, n.top),
        o = Math.min(c.x + r, n.left + n.width),
        s = Math.min(c.y + r, n.top + n.height);
      if (o <= i || s <= a) return;
      let l = t.width / n.width,
        u = t.height / n.height;
      e.drawImage(t, (i - n.left) * l, (a - n.top) * u, (o - i) * l, (s - a) * u, i, a, o - i, s - a);
    },
    S = (t, n, r) => {
      let { hole: i } = f,
        { box: a } = i;
      if (n < f.closeAt) {
        let e = Ju(Zu(n, f.openAt, G.openSeconds));
        (t.save(), t.beginPath(), t.arc(c.x, c.y, i.reach * e, 0, el), t.clip(), x(t, i.layer, a, i.reach * e));
        let r = 1 - Zu(n, f.openAt, G.heatSeconds);
        (r > 0 && ((t.globalAlpha = r), x(t, i.heat, a, i.reach * e)), t.restore());
        return;
      }
      let o = n - f.closeAt,
        s = o / G.crumbleSeconds,
        p = al(0, 1, s),
        m = i.reach * (1 - p) ** G.closeCurve,
        h = Math.max(c.x - m, a.left),
        g = Math.max(c.y - m, a.top),
        _ = Math.min(c.x + m, a.left + a.width),
        v = Math.min(c.y + m, a.top + a.height);
      if (_ > h && v > g) {
        let e = i.layer.width / a.width,
          n = Math.ceil((_ - h) * e),
          r = Math.ceil((v - g) * e);
        ((u.width < n || u.height < r) && ((u.width = Math.max(u.width, n)), (u.height = Math.max(u.height, r))),
          (d.globalCompositeOperation = `copy`),
          d.drawImage(i.layer, (h - a.left) * e, (g - a.top) * e, n, r, 0, 0, n, r),
          (d.globalCompositeOperation = `destination-in`));
        let o = (c.x - h) * e,
          s = (c.y - g) * e,
          l = d.createRadialGradient(o, s, 0, o, s, m * e);
        (l.addColorStop(0, `#fff`),
          l.addColorStop(G.closeSoft, `#fff`),
          l.addColorStop(1, `rgba(255, 255, 255, 0)`),
          (d.fillStyle = l),
          d.fillRect(0, 0, n, r),
          t.save(),
          (t.globalAlpha = 1 - p * p),
          t.drawImage(u, 0, 0, n, r, h, g, n / e, r / e),
          t.restore());
      }
      let { atlas: y } = i,
        b = 0.5 * G.crumbleGravity * e.row * o * o;
      (t.save(), (t.globalAlpha = 1 - s));
      for (let e of i.crumbs) {
        let n = e.spin * o,
          i = Math.cos(n) * l,
          a = Math.sin(n) * l;
        (t.setTransform(i, a, -a, i, (e.x + e.vx * o) * l, (e.y + e.vy * o + b - r) * l),
          t.drawImage(
            y.canvas,
            e.slotX * l,
            e.slotY * l,
            y.slotWidth * l,
            y.slotHeight * l,
            -y.slotWidth / 2,
            -y.slotHeight / 2,
            y.slotWidth,
            y.slotHeight,
          ));
      }
      t.restore();
    },
    C = (e, n, r, a, o) => {
      let s = n * Iu + e,
        c = t.get(s);
      if (!c) {
        t.set(s, { column: e, row: n, level: r, red: a, claw: o, heat: 1, flash: G.flash, seen: i });
        return;
      }
      (c.seen !== i - 1 && (c.flash = G.flash), Object.assign(c, { level: r, red: a, claw: o, heat: 1, seen: i }));
    },
    w = (t) => 1 - al(c.y - G.fadeRows * e.row, c.y + G.sinkRows * e.row, t),
    T = (a) => {
      (r.clearRect(0, 0, n.width, n.height), (r.fillStyle = `#fff`));
      for (let n of t.values())
        n.seen === i && ((r.globalAlpha = w(e.centreY(n.row))), r.fillRect(n.column, n.row, 1, 1));
      ((r.globalAlpha = 1),
        a.save(),
        (a.globalCompositeOperation = `destination-out`),
        (a.globalAlpha = G.wallErase),
        (a.imageSmoothingEnabled = !0),
        a.drawImage(n, 0, 0, n.width * e.column, n.height * e.row),
        a.restore());
    },
    E = (t, n, r) => {
      let i = Math.floor(t / G.tearBand);
      return Y(i * Lu + n) >= G.tearShare
        ? 0
        : Math.round(((Y(i + n * Lu) * 2 - 1) * G.tearShift * r) / e.column) * e.column;
    },
    D = (n, r, o, s, l, u) => {
      let { unit: d } = f,
        p = md(s, l),
        m = hd(p),
        h = Math.max(l - a, 0);
      ((a = l), (i += 1));
      let g = Math.floor(l * G.tearRate),
        _ = u && Y(g * Ru) < G.dropChance,
        v = Math.max(e.rowAt(o - (ed + Bu) * d), 0),
        y = e.rowAt(Math.min(c.y + G.sinkRows * e.row, o + G.arm * d));
      for (let t = v; t <= (_ ? v - 1 : y); t += 1) {
        let n = e.centreY(t),
          i = u ? E(t, g, d) : 0,
          a = (o - n) / d,
          s = r + i;
        for (let n = Math.max(e.columnAt(s - Hu * d), 0); n <= e.columnAt(s + Hu * d); n += 1) {
          let r = (G.facing * (e.centreX(n) - s)) / d;
          if (!gd(r, a, m)) continue;
          let { distance: o, claw: c, arm: l, edge: u, depth: f } = _d(r, a, p);
          if (o > 0) continue;
          let h = u !== null && u > -G.seamWidth,
            g = h ? 0 : Math.exp(-((o / G.rim) ** 2)),
            _ = l && a < Uu ? G.ridgeLevel * Math.abs(Math.sin((a + r * G.sinewSlant) * Math.PI * G.sinewWaves)) : 0,
            v = 1 - G.shade * K((r + id.top) / (id.top * 2));
          C(
            n,
            t,
            c ? G.clawLevel : (G.level * (h ? G.seamLevel : 1 + G.frontGain * f) + G.rimLevel * g + _) * v,
            c ? G.clawRed : i ? G.tearRed : G.bodyRed,
            c,
          );
        }
      }
      let b = Math.exp(-h / G.afterglow),
        x = Math.exp(-h * G.flashDecay);
      for (let [e, n] of t)
        ((n.flash *= x),
          n.seen !== i && ((n.heat = (n.seen === i - 1 ? G.trail : n.heat) * b), n.heat < G.dropHeat && t.delete(e)));
      (T(n), vl(n, e));
      for (let r of t.values()) {
        let t = e.centreY(r.row);
        ((sd.x = e.centreX(r.column)),
          (sd.y = t),
          (sd.char = Qu(r.column, r.row, l)),
          (sd.level = r.level + r.flash),
          (sd.red = r.red),
          (sd.fade = r.heat * w(t)),
          _l(n, e, sd, !0));
      }
    };
  return {
    layout(r, i, a, u, d = null) {
      ((o = r), (s = i), (e = a), (l = u));
      let f = o < s ? G.narrow : G.wide;
      ((c = d ?? { x: f.hole[0] * o, y: f.hole[1] * s, catchY: f.catchY * s }),
        (n.width = Math.ceil(o / e.column)),
        (n.height = Math.ceil(s / e.row)),
        v(),
        t.clear());
    },
    update(e, n) {
      (!f && n >= p && ((f = y(n)), t.clear(), (a = n)),
        f && n > f.end && (v(), (p = n + J(G.interval))),
        f?.building && _(),
        f && (f.bug.age += e * (n >= f.catchAt ? 2 : 1)));
    },
    dragging(e) {
      return !!f && e >= f.retractAt && e < f.retractAt + G.retractSeconds;
    },
    prey(e) {
      return !f || e > f.closeAt + G.preyRelease ? null : { x: f.bug.x, y: f.bug.y };
    },
    draw(t, n, r = 0) {
      if (!f) return;
      let { bug: i } = f;
      if (n < f.openAt) {
        ((i.y = f.startY + f.speed * (n - f.start)), ql(t, i, 1));
        return;
      }
      for (; f.building;) _();
      if ((S(t, n, r), n >= f.closeAt)) return;
      let a = n >= f.catchAt,
        s = Ju(Zu(n, f.catchAt - G.grabSeconds / 2, G.grabSeconds)),
        l = n >= f.retractAt,
        u = Math.floor((n - f.retractAt) * G.dragSteps),
        d = l ? f.retractAt + u / G.dragSteps : n,
        p = c.x - G.facing * G.grab[0] * f.unit,
        m = b(d);
      ((i.x = c.x),
        (i.y = a ? m - G.grab[1] * f.unit : f.startY + f.speed * (n - f.start)),
        t.save(),
        t.beginPath(),
        t.rect(0, 0, o, c.y + G.sinkRows * e.row),
        t.clip(),
        ql(t, i, w(i.y) * (1 - al(G.bugHide[0], G.bugHide[1], s))),
        n >= f.reachAt && D(t, p, m, s, n, l),
        t.restore());
    },
  };
}
function yd() {
  let e = [],
    t = 0,
    n = 0,
    r = 1,
    i = (e, i) => {
      let a = Math.random(),
        o = q(Yc.size, a) * r;
      return (
        Object.assign(e, {
          char: il(Yc.glyphs),
          size: o,
          font: `${qc.siteWeight} ${o}px ${qc.site}`,
          color: tl(Yc.color, a),
          speed: q(Yc.speed, a) * r,
          x: Math.random() * t,
          y: i ? Math.random() * n : -o,
          wait: i ? Math.random() * Qc.floatersSpread : J(Yc.respawnDelay),
          sway: rl(Yc.sway) * r,
          swayPeriod: J(Yc.swayPeriod),
          spin: rl(Yc.spin),
          angle: Math.random() * el,
          phase: Math.random() * el,
          age: 0,
        }),
        e
      );
    };
  return {
    layout(a, o, s, c, l) {
      ((t = a), (n = o), (r = c));
      let u = Math.round(((l ? Yc.countNarrow : Yc.count) * n) / s);
      e = Array.from({ length: u }, () => i({}, !0));
    },
    update(t) {
      for (let r of e) {
        if (r.wait > 0) {
          r.wait -= t;
          continue;
        }
        ((r.age += t), (r.y += r.speed * t), (r.angle += r.spin * t), r.y - r.size > n && i(r, !1));
      }
    },
    draw(t, r) {
      let i = r.height * Yc.fade;
      ((t.textAlign = `center`), (t.textBaseline = `middle`));
      for (let a of e) {
        let e = K(a.y / i) * K((n - a.y) / i);
        a.wait > 0 ||
          e <= 0 ||
          a.y < r.top - a.size ||
          a.y > r.bottom + a.size ||
          (t.save(),
          t.translate(a.x + Math.sin((el * a.age) / a.swayPeriod + a.phase) * a.sway, a.y),
          t.rotate(a.angle),
          (t.fillStyle = nl(a.color, e * K(a.age / Qc.glyphFade))),
          (t.font = a.font),
          t.fillText(a.char, 0, 0),
          t.restore());
      }
    },
  };
}
var bd = 1.7,
  xd = 1.3,
  Sd = 1,
  Cd = 1e3,
  wd = `touch`,
  Td = 4,
  Ed = 0.001,
  Dd = 0.5,
  Od = 1.6,
  kd = `loadingdone`,
  Ad = 2,
  jd = 1;
function Md() {
  let e = [],
    t = 0,
    n = 0,
    r = 0,
    i = 0,
    a = 0,
    o = 0,
    s = 0,
    c = { x: 0, y: 0, fromX: 0, fromY: 0, vx: 0, vy: 0, at: -1 / 0, until: -1 / 0 },
    l = (e, t, a, o) => {
      let s = [Jc.cellMargin, 1 - Jc.cellMargin],
        c = (((e % t) + q(s, Math.random())) / t) * n,
        l = ((Math.floor(e / t) + q(s, Math.random())) / a) * r,
        u = l < i * Jc.topBand ? Jc.topBandDepth : 1,
        d = Math.random() ** Jc.depthBias * u,
        f = q(Jc.size, d ** Jc.sizeCurve) * o;
      return {
        char: il(Jc.glyphs),
        x: c,
        y: l,
        vx: 0,
        vy: 0,
        angle: 0,
        spin: 0,
        calm: 1,
        gone: !1,
        arriving: !1,
        size: f,
        weight: q(Jc.weight, d),
        font: `${qc.siteWeight} ${f}px ${qc.site}`,
        color: tl(Jc.color, d),
        lift: q(Jc.lift, d) * o,
        drift: rl(Jc.drift) * o,
        tilt: rl(Jc.tilt),
        period: q(Jc.period, d),
        phase: Math.random() * el,
        appearAt: Math.random() * Qc.floatersSpread,
      };
    },
    u = (e, n) => e.sprite?.ratio === n && e.sprite.generation === t,
    d = (e, n) => {
      if (u(e, n)) return e.sprite;
      let r = e.size * Od,
        i = Math.ceil(r * n),
        a = document.createElement(`canvas`);
      ((a.width = i), (a.height = i));
      let o = a.getContext(`2d`);
      return (
        o.scale(i / r, i / r),
        (o.font = e.font),
        (o.fillStyle = nl(e.color, 1)),
        (o.textAlign = `center`),
        (o.textBaseline = `middle`),
        o.fillText(e.char, r / 2, r / 2),
        (e.sprite = { canvas: a, side: r, ratio: n, generation: t }),
        e.sprite
      );
    },
    f = () => {
      t += 1;
    };
  document.fonts?.addEventListener(kd, f);
  let p = (e, t) => (el * t) / e.period + e.phase,
    m = (e, t) => Math.sin(t / bd) * e.drift * e.calm,
    h = (e, t) => Math.sin(t) * e.lift * e.calm,
    g = (e, t) => {
      if (e.calm === 0) return;
      let n = p(e, t),
        r = m(e, n),
        i = h(e, n);
      ((e.x += r), (e.y += i), (e.angle += Math.sin(p(e, t) / xd) * e.tilt * e.calm), (e.calm = 0));
    },
    _ = (e, t, n) => {
      let r = p(e, n),
        i = m(e, r),
        a = h(e, r),
        o = c.x - c.fromX,
        s = c.y - c.fromY,
        l = K(((e.x + i - c.fromX) * o + (e.y + a - c.fromY) * s) / Math.max(o * o + s * s, Ed)),
        u = e.x + i - c.fromX - o * l,
        d = e.y + a - c.fromY - s * l,
        f = Math.max(Math.hypot(u, d), Ed),
        _ = Jc.reach + e.size * Jc.reachSize;
      if (f >= _) return;
      g(e, n);
      let v = (1 - f / _) ** 2,
        y = (Jc.push * v * t) / e.weight;
      if (((e.vx += (u / f) * y), (e.vy += (d / f) * y), Math.hypot(c.vx, c.vy) > Math.hypot(e.vx, e.vy))) {
        let n = Math.min((Jc.grip * v * t) / e.weight, 1);
        ((e.vx += (c.vx * Jc.carry - e.vx) * n), (e.vy += (c.vy * Jc.carry - e.vy) * n));
      }
      e.spin += ((u * e.vy - d * e.vx) / f) * Jc.spinGain * t;
    },
    v = (e, t) => {
      let i = Math.exp(-Jc.friction * t);
      ((e.x += e.vx * t),
        (e.y += e.vy * t),
        (e.vx *= i),
        (e.vy *= i),
        (e.angle += e.spin * t),
        (e.spin *= Math.exp(-Jc.spinFriction * t)));
      let a = e.size,
        o = e.x < -a || e.x > n + a || e.y < -a || e.y > r + a;
      if (o && !e.arriving) {
        e.gone = !0;
        return;
      }
      (o || (e.arriving = !1), Math.hypot(e.vx, e.vy) < Jc.settleSpeed && ((e.vx = 0), (e.vy = 0)));
    },
    y = (e, t) => {
      ((e.calm = Math.min(e.calm + t / Jc.calmSeconds, 1)), (e.angle *= Math.exp(-Jc.straighten * t)));
    },
    b = (e, t) => {
      let r = J(Jc.landing) * n,
        i = t.top + J(Jc.landing) * t.height,
        a = Math.floor(Math.random() * Td),
        o = e.size + Jc.returnMargin,
        s = Math.random(),
        c = t.top + s * t.height,
        l = [
          [s * n, t.top - o],
          [n + o, c],
          [s * n, t.top + t.height + o],
          [-o, c],
        ];
      (([e.x, e.y] = l[a]),
        (e.vx = (r - e.x) * Jc.friction),
        (e.vy = (i - e.y) * Jc.friction),
        (e.spin = rl(Jc.returnSpin)),
        (e.calm = 0),
        (e.gone = !1),
        (e.arriving = !0));
    },
    x = (t, n) => {
      if (t < s) return;
      let r = (e) => !e.gone && e.y > n.top && e.y < n.top + n.height,
        i = a * Jc.returnBelow,
        o = 0;
      for (let t of e) if (r(t) && ((o += 1), o >= i)) return;
      let c = e.filter((e) => e.gone),
        l = c.length > 0 ? c : e.filter((e) => !r(e) && !e.arriving);
      (l.length > 0 && b(il(l), n), (s = t + J(Jc.returnEvery)));
    };
  return {
    layout(t, o, s, c, u) {
      ((n = t), (r = o), (i = s), (a = u ? Jc.countNarrow : Jc.count));
      let d = Math.round((a * r) / i),
        f = Math.max(1, Math.round(Math.sqrt((d * n) / r))),
        p = Math.ceil(d / f) + Sd;
      e = ol(Array.from({ length: f * p }, (e, t) => t))
        .slice(0, d)
        .map((e) => l(e, f, p, c));
    },
    point(e, t, n) {
      let r = performance.now() / Cd,
        i = r - c.at;
      if (i > 0 && i < Jc.pointerGap) {
        let n = K(i / Jc.pointerSmoothing);
        ((c.vx += ((e - c.x) / i - c.vx) * n), (c.vy += ((t - c.y) / i - c.vy) * n));
      } else ((c.vx = 0), (c.vy = 0));
      (r - c.at > Jc.pointerGap && ((c.fromX = e), (c.fromY = t)),
        Object.assign(c, { x: e, y: t, at: r }),
        (c.until = n === wd ? o + Jc.touchSeconds : 1 / 0));
    },
    update(t, n, r) {
      o = n;
      let i = n < c.until;
      performance.now() / Cd - c.at > Jc.pointerGap && ((c.vx = 0), (c.vy = 0));
      for (let r of e)
        r.gone ||
          (i && K((n - r.appearAt) / Qc.glyphFade) > Dd && _(r, t, n),
          r.calm < 1 && v(r, t),
          !r.gone && r.vx === 0 && r.vy === 0 && y(r, t));
      ((c.fromX = c.x), (c.fromY = c.y), x(n, r));
    },
    draw(t, n, r) {
      let i = t.getTransform().a;
      for (let a of e) {
        let e = a.size + a.lift;
        if (a.gone || a.y < r.top - e || a.y > r.bottom + e) continue;
        let o = p(a, n);
        (t.save(), t.translate(a.x + m(a, o), a.y + h(a, o)), t.rotate(a.angle + Math.sin(o / xd) * a.tilt * a.calm));
        let s = d(a, i);
        ((t.globalAlpha = K((n - a.appearAt) / Qc.glyphFade)),
          t.drawImage(s.canvas, -s.side / 2, -s.side / 2, s.side, s.side),
          t.restore());
      }
    },
    prepare(t, n, r) {
      let i = t.height * Ad,
        a = 0;
      for (let o of e)
        if (!(o.gone || o.y <= t.top - i || o.y >= t.top + t.height + i || u(o, n))) {
          if (a > 0 && r.timeRemaining() <= jd) return !1;
          (d(o, n), (a += 1));
        }
      return !0;
    },
    dispose() {
      document.fonts?.removeEventListener(kd, f);
    },
  };
}
var Nd = (e, t, n) => e.bottom > t && e.top < n,
  Pd = (e, t, n) => Math.max(0, ...e.filter((e) => Nd(e, t, n)).map((e) => e.right)),
  Fd = (e, t, n) => Math.min(Math.max(e, t), n);
function Id(e, t) {
  return {
    eyesX: (W.wide.centre[0] + Kc.shiftX) * e,
    eyesY: W.wide.centre[1] * t,
    handX: (G.wide.hole[0] + Kc.shiftX) * e,
    catchY: G.wide.catchY * t,
    holeY: G.wide.hole[1] * t,
  };
}
function Ld(e, t, n, r, i, a) {
  let o = n * i,
    s = Kc.textGapRows * n,
    c = Id(e, t),
    l = Pd(r, c.eyesY - Kc.eyesBandRows * o, c.eyesY + Kc.eyesBandRows * o) + s,
    u = a ? Pd(r, c.catchY - Kc.handReachRows * o, t) + s : 0,
    d = Kc.eyesHalfRows * o,
    f = Kc.handHalfRows * o * Kc.handScale,
    p = u + f,
    m = Math.max(a ? p + f + Kc.betweenRows * o + d : 0, l + d),
    h = e * (1 - Kc.edgeShare) - d;
  if (m > h) return null;
  let g = Fd(c.eyesX, m, h),
    _ = Fd(c.handX, p, g - d - Kc.betweenRows * o - f);
  return { ...c, scale: i, hand: a, eyesX: g, handX: _ };
}
function Rd(e, t, n, r) {
  if (e >= Kc.fixedFrom) return { ...Id(e, t), scale: (Kc.sceneScale * e) / Kc.designWidth / Hc(), hand: !0 };
  let i = r();
  for (let r of [!0, !1])
    for (let a = Kc.sceneScale; a >= Kc.minScale - 1e-6; a -= Kc.scaleStep) {
      let o = Ld(e, t, n.row, i, a, r);
      if (o) return o;
    }
  return null;
}
var zd = 1e3,
  Bd = [`pointermove`, `pointerdown`],
  Vd = { passive: !0 },
  Hd = `touch`,
  Ud = { timeout: 120 },
  Wd = `absolute`,
  Gd = `(pointer: coarse)`,
  Kd = 2;
function qd(
  e,
  {
    layer: t = e,
    still: n = !1,
    scroller: r = null,
    page: i = null,
    stage: a = null,
    copy: o = null,
    demon: s = !0,
  } = {},
) {
  let c = Array.from({ length: Kd }, () => {
      let e = document.createElement(`canvas`);
      return { canvas: e, context: e.getContext(`2d`), band: null, dirty: !1 };
    }),
    l = Md(),
    u = yd(),
    d = Jl(),
    f = Au(),
    p = jl(),
    m = vd(),
    h = { left: 0, top: 0, width: 0, height: 0 },
    g = { top: 0, height: 0 },
    _ = { top: 0, bottom: 0, height: 0 },
    v = 1,
    y = 0,
    b = 0,
    x = 0,
    S = 0,
    C = n ? Qc.end : 0,
    w = null,
    T = null,
    E = 0,
    D = null,
    O = -1 / 0,
    ee = !1,
    k = !1,
    A = null,
    j = 0,
    M = !0;
  c.forEach((e) => t.appendChild(e.canvas));
  let N = () => r?.scrollTop ?? 0,
    te = () => {
      let e = a?.getBoundingClientRect();
      return !e || e.height <= 0 ? null : e.top - (r?.getBoundingClientRect().top ?? 0) + N() + e.height / 2;
    },
    ne = (e) => {
      let t = document.createTreeWalker(e, NodeFilter.SHOW_TEXT),
        n = document.createRange(),
        r = { left: 1 / 0, right: 0, top: 1 / 0, bottom: -1 / 0 };
      for (let e = t.nextNode(); e; e = t.nextNode()) {
        if (getComputedStyle(e.parentElement).position === Wd) continue;
        n.selectNodeContents(e);
        let t = n.getBoundingClientRect();
        t.width > 0 &&
          t.height > 0 &&
          ((r.left = Math.min(r.left, t.left)),
          (r.right = Math.max(r.right, t.right)),
          (r.top = Math.min(r.top, t.top)),
          (r.bottom = Math.max(r.bottom, t.bottom)));
      }
      return r;
    },
    re = () =>
      Array.from(o?.children ?? [], ne)
        .filter((e) => e.right > 0)
        .map((e) => ({
          left: e.left - h.left,
          right: e.right - h.left,
          top: e.top - h.top + N(),
          bottom: e.bottom - h.top + N(),
        })),
    ie = () => ((t.style.height = `0`), (b = Math.max(i?.scrollHeight ?? 0, h.height)), (t.style.height = `${b}px`), b),
    P = () => {
      let e = Math.max(Math.round((g.top + g.height / 2) / S) - 1, 0),
        t = Array.from({ length: Kd }, (t, n) => e + n),
        n = t.filter((e) => !c.some((t) => t.band === e));
      c.forEach((e) => {
        t.includes(e.band) || ((e.band = n.shift()), (e.canvas.style.transform = `translate3d(0, ${e.band * S}px, 0)`));
      });
    },
    ae = (e, t) => {
      let { canvas: n, context: r } = e,
        i = e.band * S;
      ((_.top = Math.max(g.top - x, i)),
        (_.bottom = Math.min(g.top + g.height + x, i + S, b)),
        (e.dirty &&= (r.setTransform(1, 0, 0, 1, 0, 0), r.clearRect(0, 0, n.width, n.height), !1)),
        !(_.bottom <= _.top) &&
          ((e.dirty = !0),
          r.setTransform(v, 0, 0, v, 0, -i * v),
          s && _.top < j && ((r.globalAlpha = W.visibility), f.draw(r, C, t), (r.globalAlpha = 1), p.draw(r, C, t)),
          l.draw(r, C, _),
          u.draw(r, _),
          d.draw(r, C, _),
          s && M && _.top < h.height && m.draw(r, C, i)));
    },
    oe = () => {
      ((g.top = N()), P(), (_.height = g.height));
      let e = K((O - C) / Gc.glitchSeconds);
      c.forEach((t) => ae(t, e));
    },
    se = () => {
      let e = h.width <= Gc.narrowWidth,
        t = e ? Gc.narrowScale : Hc();
      ((y = ie()),
        l.layout(h.width, y, h.height, t, e),
        u.layout(h.width, y, h.height, t, e),
        d.layout(h.width, y, hl(h.width, h.height, Uc(h.width))));
    },
    ce = () => {
      if (!s) return;
      let e = hl(h.width, h.height, Uc(h.width));
      ((A = te()), (j = A === null ? h.height : A + h.height / 2));
      let t = A === null && o ? Rd(h.width, h.height, e, re) : null,
        n = ml(e.row * (t?.scale ?? Kc.sceneScale));
      M = A === null && (t?.hand ?? !0);
      let r = t?.hand ? { x: t.handX, y: t.holeY, catchY: t.catchY } : null;
      (m.layout(h.width, h.height, ml(n.row * Kc.handScale), v, r),
        p.layout(f.layout(h.width, h.height, v, n, t?.eyesY ?? A, t?.eyesX), n, h.height));
    },
    F = () => {
      let t = e.getBoundingClientRect();
      (Object.assign(h, { left: t.left, top: t.top, width: t.width, height: t.height }),
        !(h.width <= 0 || h.height <= 0) &&
          ((g.height = h.height),
          (v = Math.min(window.devicePixelRatio || 1, Gc.maxPixelRatio)),
          (x = Math.round(h.height * (window.matchMedia(Gd).matches ? Gc.overscanCoarse : Gc.overscanFine))),
          (S = h.height + x * 2),
          c.forEach((e) => {
            (Object.assign(e, { band: null, dirty: !1 }),
              (e.canvas.width = Math.round(h.width * v)),
              (e.canvas.height = Math.round(S * v)),
              (e.canvas.style.width = `${h.width}px`),
              (e.canvas.style.height = `${S}px`));
          }),
          se(),
          ce(),
          (ee = !0),
          n && oe()));
    },
    I = (e) => {
      let t = 0;
      return {
        run() {
          (window.clearTimeout(t),
            (t = window.setTimeout(() => {
              ((t = 0), ee && e(), n && oe());
            }, Gc.settleMs)));
        },
        cancel() {
          window.clearTimeout(t);
        },
      };
    },
    L = I(() => {
      let e = ie();
      Math.abs(e - y) >= 1 && se();
    }),
    R = I(() => {
      let e = te(),
        t = hl(h.width, h.height, Uc(h.width)).row;
      ((e === null) != (A === null) || (e !== null && Math.abs(e - A) >= Gc.restageRows * t)) && ce();
    }),
    z = I(ce),
    le = (e) => {
      ((E = 0), l.prepare(g, v, e) && (D = g.top));
    },
    ue = (e) => {
      if (!ee) return;
      let t = w === null ? 0 : Math.min((e - w) / zd, Gc.maxDeltaSeconds);
      if (((w = e), (C += t), (g.top = N()), l.update(t, C, g), u.update(t), d.update(t, g), s && M)) {
        (m.update(t, C), m.dragging(C) && (O = Math.max(O, C + Gc.glitchSeconds * G.sceneGlitch)));
        let e = m.prey(C);
        e && p.look(e.x, e.y, Hd);
      }
      (s && p.update(t, C),
        oe(),
        !E && g.top !== D && window.requestIdleCallback && (E = window.requestIdleCallback(le, Ud)));
    },
    de = (e) => {
      let t = e.clientX - h.left,
        n = e.clientY - h.top + N();
      (l.point(t, n, e.pointerType), p.look(t, n, e.pointerType));
    },
    fe = new ResizeObserver(F);
  fe.observe(e);
  let pe = new ResizeObserver(L.run);
  i && pe.observe(i);
  let me = new ResizeObserver(() => {
    ee && ie();
  });
  Array.from(i?.children ?? [])
    .filter((n) => n !== e && n !== t)
    .forEach((e) => me.observe(e));
  let he = new ResizeObserver(() => {
    ee && h.width < Kc.fixedFrom && z.run();
  });
  s && o && Array.from(o.children).forEach((e) => he.observe(e));
  let ge = new ResizeObserver(R.run);
  return (
    a && (ge.observe(a), a.previousElementSibling && ge.observe(a.previousElementSibling)),
    n
      ? r && r.addEventListener(`scroll`, oe, Vd)
      : (Bd.forEach((e) => window.addEventListener(e, de, Vd)), (T = wc(ue, bc.scene))),
    {
      glitch() {
        O = C + Gc.glitchSeconds;
      },
      pause(e) {
        n || e === k || ((k = e), T?.(), (T = null), (w = null), e || (T = wc(ue, bc.scene)));
      },
      dispose() {
        (T?.(),
          E && window.cancelIdleCallback(E),
          fe.disconnect(),
          pe.disconnect(),
          me.disconnect(),
          ge.disconnect(),
          he.disconnect(),
          L.cancel(),
          R.cancel(),
          z.cancel(),
          Bd.forEach((e) => window.removeEventListener(e, de, Vd)),
          r?.removeEventListener(`scroll`, oe, Vd),
          l.dispose(),
          c.forEach((e) => e.canvas.remove()));
      },
    }
  );
}
var Jd = `(prefers-reduced-motion: reduce)`,
  Yd = En(
    {
      __name: `SiteBackdrop`,
      props: { demon: { type: Boolean, default: !0 } },
      setup(e) {
        let n = Tn(),
          r = pe(),
          i = z(`host`),
          a = z(`layer`),
          o = null;
        return (
          N(() => {
            o = qd(i.value, {
              layer: a.value,
              still: window.matchMedia(Jd).matches,
              scroller: Ir(i.value),
              page: i.value.parentElement,
              stage: i.value.parentElement.querySelector(`[data-backdrop-stage]`),
              copy: i.value.parentElement.querySelector(`[data-backdrop-copy]`),
              demon: e.demon,
            });
          }),
          t(
            () => n.code,
            () => o?.glitch(),
          ),
          t(
            () => r.open,
            (e) => o?.pause(e),
          ),
          m(() => {
            (o?.dispose(), (o = null));
          }),
          (e, t) => (
            M(),
            _(
              k,
              null,
              [
                R(`div`, { ref_key: `host`, ref: i, class: `site-backdrop`, "aria-hidden": `true` }, null, 512),
                R(`div`, { ref_key: `layer`, ref: a, class: `site-backdrop__layer`, "aria-hidden": `true` }, null, 512),
              ],
              64,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-56047e8e`]],
  ),
  Xd = {
    maxPixelRatio: 2,
    maxDeltaSeconds: 0.1,
    minRows: 6,
    maxRows: 9,
    shape: { left: -1.22, right: 1.22, top: 1.28, bottom: -1.08 },
    supersample: 3,
    fill: 0.45,
    padRows: 6,
    padColumns: 14,
  },
  Zd = {
    level: 0.75,
    edge: 0.75,
    liked: 0.35,
    light: 0.35,
    lightDirection: [-0.45, 0.6],
    red: 0.1,
    hover: 0.3,
    changeRate: 0.5,
    hoverChangeRate: 3,
    glyphs: `01<>{}[]/\\|=+*#%&$@!?;:`,
  },
  Qd = { seconds: 0.9, sweep: 0.6, flash: 1.3, flashDecay: 7 },
  $d = {
    seconds: 1.6,
    hoverSeconds: 0.95,
    likedSeconds: 1.25,
    second: 0.24,
    width: 0.07,
    secondStrength: 0.6,
    scale: 0.035,
    glow: 0.35,
  },
  ef = {
    waveSpeed: 34,
    waveFade: 0.12,
    unlikeSeconds: 0.45,
    flash: 1.4,
    flashDecay: 4.5,
    kick: 0.2,
    kickDecay: 6,
    kickTurns: 17,
    tearSeconds: 0.35,
    tearShare: 0.35,
    tearRate: 24,
    particles: 30,
    speed: [3, 8],
    lift: 4,
    gravity: 10,
    life: [0.8, 1.4],
    plusRows: 4,
    plusSeconds: 1.1,
    plus: `+1`,
    particleGlyphs: `+*#<3♥%&!`,
  },
  tf = {
    6: [`.##.##.`, `#######`, `#######`, `.#####.`, `..###..`, `...#...`],
    7: [`.###.###.`, `#########`, `#########`, `.#######.`, `..#####..`, `...###...`, `....#....`],
    8: [`.###.###.`, `#########`, `#########`, `#########`, `.#######.`, `..#####..`, `...###...`, `....#....`],
    9: [
      `.###...###.`,
      `#####.#####`,
      `###########`,
      `###########`,
      `.#########.`,
      `..#######..`,
      `...#####...`,
      `....###....`,
      `.....#.....`,
    ],
  },
  nf = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ],
  rf = `#`,
  af = (e, t) => (e * e + t * t - 1) ** 3 - e * e * t ** 3 <= 0,
  of = (e) => [...e.values()].map((t) => ({ ...t, edge: nf.some(([n, r]) => !e.has(`${t.column + n}:${t.row + r}`)) }));
function sf(e, t) {
  let n = Math.max(Math.round(1 / t), 1),
    r = e[0].length,
    i = e.length,
    a = new Map();
  return (
    e.forEach((e, t) => {
      [...e].forEach((e, o) => {
        if (e !== rf) return;
        let s = ((o + 0.5) / r) * 2 - 1,
          c = 1 - ((t + 0.5) / i) * 2;
        for (let e = 0; e < n; e += 1) {
          let r = o * n + e;
          a.set(`${r}:${t}`, { column: r, row: t, x: s, y: c });
        }
      });
    }),
    { columns: r * n, rows: i, cells: of(a) }
  );
}
function cf(e, t) {
  let { left: n, right: r, top: i, bottom: a } = Xd.shape,
    o = r - n,
    s = i - a,
    c = Math.round(((o / s) * e) / t),
    l = Xd.supersample,
    u = new Map();
  for (let t = 0; t < e; t += 1)
    for (let d = 0; d < c; d += 1) {
      let f = 0;
      for (let r = 0; r < l; r += 1)
        for (let a = 0; a < l; a += 1) {
          let u = n + ((d + (a + 0.5) / l) / c) * o,
            p = i - ((t + (r + 0.5) / l) / e) * s;
          f += +!!af(u, p);
        }
      if (f / (l * l) >= Xd.fill) {
        let l = n + ((d + 0.5) / c) * o,
          f = i - ((t + 0.5) / e) * s;
        u.set(`${d}:${t}`, { column: d, row: t, x: l / Math.max(-n, r), y: f / Math.max(i, -a) });
      }
    }
  return { columns: c, rows: e, cells: of(u) };
}
function lf(e, t) {
  let n = tf[e];
  return n ? sf(n, t) : cf(e, t);
}
var uf = 17.3,
  df = 5.1,
  ff = 0.5,
  pf = 0.5,
  mf = 1.5,
  hf = (e, t, n) => Math.exp(-(((e - t) / n) ** 2));
function gf(e, { height: t, liked: n = !1, hidden: r = !1, reducedMotion: i = !1, onLayout: a = () => {} } = {}) {
  let o = e.getContext(`2d`),
    s = { x: 0, y: 0, char: ``, level: 0, red: 0, pure: !1 },
    c = null,
    l = 1,
    u = 0,
    d = 0,
    f = { x: 0, y: 0 },
    p = 0,
    m = [],
    h = [],
    g = t,
    _ = 0,
    v = 0,
    y = 0,
    b = 0,
    x = !1,
    S = !1,
    C = n,
    w = -1 / 0,
    T = -1 / 0,
    E = { x: 0, y: 0 },
    D = r && !i ? 1 / 0 : -1 / 0,
    O = () => il(Zd.glyphs),
    ee = () => hl(window.innerWidth, window.innerHeight, Uc(window.innerWidth)),
    k = () => {
      ((l = Math.min(window.devicePixelRatio || 1, Xd.maxPixelRatio)), (c = ee()));
      let t = lf(Math.min(Math.max(Math.round(g / c.row), Xd.minRows), Xd.maxRows), U.cellAspect),
        { padColumns: n, padRows: r } = Xd;
      ((u = (t.columns + n * 2) * c.column), (d = (t.rows + r * 2) * c.row));
      let i = { left: n * c.column, top: r * c.row, width: t.columns * c.column, height: t.rows * c.row };
      ((f = { x: i.left + i.width / 2, y: i.top + i.height / 2 }),
        (p = i.top),
        (E = f),
        (e.width = Math.round(u * l)),
        (e.height = Math.round(d * l)),
        (e.style.width = `${u}px`),
        (e.style.height = `${d}px`),
        (e.style.left = `${-i.left}px`),
        (e.style.top = `${-i.top}px`));
      let [o, s] = Zd.lightDirection;
      ((m = t.cells.map((e) => ({
        x: c.centreX(n + e.column),
        y: c.centreY(r + e.row),
        row: e.row,
        edge: e.edge,
        char: O(),
        delay: Qd.seconds * (Qd.sweep * (1 - e.row / Math.max(t.rows - 1, 1)) + (1 - Qd.sweep) * Math.random()),
        base: Zd.level + (e.edge ? Zd.edge : 0) + Zd.light * (e.x * o + e.y * s),
      }))),
        (h = []),
        a({ width: i.width, height: i.height }));
    },
    A = () => {
      let e = (b % 1) * $d.seconds;
      return hf(e, $d.width * mf, $d.width) + $d.secondStrength * hf(e, $d.second, $d.width);
    },
    j = (e) => {
      if (!C) return 1 - K((_ - T) / ef.unlikeSeconds);
      let t = Math.hypot(e.x - E.x, e.y - E.y) / c.row;
      return K((_ - w - t / ef.waveSpeed) / ef.waveFade);
    },
    M = (e, t) => {
      if (t < 0 || t > ef.tearSeconds) return 0;
      let n = Math.floor(_ * ef.tearRate);
      return Y(e * uf + n) >= ef.tearShare ? 0 : (Y(e + n * df) < ff ? -1 : 1) * c.column * Math.ceil(Y(n + e) * 2);
    },
    N = () => {
      let e = m.filter((e) => e.edge);
      h = Array.from({ length: ef.particles }, () => {
        let t = il(e),
          n = t.x - f.x,
          r = t.y - f.y,
          i = Math.hypot(n, r) || 1,
          a = J(ef.speed) * c.row;
        return {
          x: t.x,
          y: t.y,
          vx: (n / i) * a,
          vy: (r / i) * a - ef.lift * c.row,
          age: 0,
          life: J(ef.life),
          char: il(ef.particleGlyphs),
        };
      });
    },
    te = (e) => {
      _ += e;
      let t = C ? $d.likedSeconds : S ? $d.hoverSeconds : $d.seconds;
      _ >= D + Qd.seconds && (b += e / t);
      let n = (S ? Zd.hoverChangeRate : Zd.changeRate) * e;
      (m.forEach((e) => {
        Math.random() < n && (e.char = O());
      }),
        (h = h.filter(
          (t) => ((t.age += e), (t.x += t.vx * e), (t.y += t.vy * e), (t.vy += ef.gravity * c.row * e), t.age < t.life),
        )));
    },
    ne = () => {
      (o.setTransform(l, 0, 0, l, 0, 0), o.clearRect(0, 0, u, d), vl(o, c));
      let e = _ - w,
        t = C && Number.isFinite(e) && e >= 0,
        n = i ? 0 : A(),
        r = t && !i ? ef.kick * Math.exp(-e * ef.kickDecay) * Math.sin(e * ef.kickTurns) : 0,
        a = t && !i ? ef.flash * Math.exp(-e * ef.flashDecay) : 0,
        g = 1 + n * $d.scale + r;
      if (
        (o.save(),
        o.translate(f.x, f.y),
        o.scale(g, g),
        o.translate(-f.x, -f.y),
        m.forEach((r) => {
          let l = _ - D - r.delay;
          if (l < 0) return;
          let u = j(r);
          ((s.x = r.x + (t && !i ? M(r.row, e) : 0)),
            (s.y = r.y),
            (s.char = r.char),
            (s.level =
              r.base + n * $d.glow + (S ? Zd.hover : 0) + a + u * Zd.liked + Qd.flash * Math.exp(-l * Qd.flashDecay)),
            (s.red = Zd.red + (1 - Zd.red) * u),
            (s.pure = u > pf),
            _l(o, c, s));
        }),
        o.restore(),
        h.forEach((e) => {
          let t = 1 - e.age / e.life;
          _l(o, c, { x: e.x, y: e.y, char: e.char, level: 1 + t, red: 0.4 + 0.6 * t, pure: t > pf, fade: t });
        }),
        t && e < ef.plusSeconds && !i)
      ) {
        let t = e / ef.plusSeconds,
          n = p - c.row * (1 + ef.plusRows * t);
        [...ef.plus].forEach((e, r) => {
          _l(o, c, { x: f.x + (r - 0.5) * c.column, y: n, char: e, level: 1.6, red: 1, pure: !0, fade: 1 - t });
        });
      }
    },
    re = (e) => {
      y = 0;
      let t = v ? Math.min((e - v) / 1e3, Xd.maxDeltaSeconds) : 0;
      ((v = e), te(t), ne(), x && (y = requestAnimationFrame(re)));
    },
    ie = () => {
      if (i) {
        ne();
        return;
      }
      x && !y && ((v = 0), (y = requestAnimationFrame(re)));
    };
  return (
    k(),
    ne(),
    {
      fit: (e) => {
        (Math.abs(e - g) >= c.row || ee().row !== c.row) && ((g = e), k(), ne());
      },
      setActive(e) {
        ((x = e), x || (cancelAnimationFrame(y), (y = 0)), ie());
      },
      reveal() {
        D === 1 / 0 && ((D = _), ie());
      },
      setHover(e) {
        ((S = e), ie());
      },
      setLiked(t, n = null) {
        if (t !== C) {
          if (((C = t), C)) {
            if (((w = i ? -1 / 0 : _), n)) {
              let t = e.getBoundingClientRect();
              E = { x: (n.x - t.left) * (u / t.width), y: (n.y - t.top) * (d / t.height) };
            } else E = f;
            i || N();
          } else T = i ? -1 / 0 : _;
          ie();
        }
      },
      dispose() {
        ((x = !1), cancelAnimationFrame(y), (e.width = 0));
      },
    }
  );
}
var _f = { storageKey: `site.like`, kind: `like`, cookieDays: 400, idBytes: 16 },
  vf = 86400,
  yf = 16,
  bf = RegExp(`(?:^|; )${_f.storageKey.replace(`.`, `\\.`)}=([^;]+)`),
  xf = () => bf.exec(document.cookie)?.[1] ?? null,
  Sf = () => {
    try {
      return window.localStorage.getItem(_f.storageKey);
    } catch {
      return null;
    }
  },
  Cf = () =>
    window.crypto.randomUUID?.() ??
    [...window.crypto.getRandomValues(new Uint8Array(_f.idBytes))].map((e) => e.toString(yf).padStart(2, `0`)).join(``),
  wf = (e) => {
    try {
      e(window.localStorage);
    } catch {
      return;
    }
  },
  Tf = (e) => {
    (wf((t) => t.setItem(_f.storageKey, e)),
      (document.cookie = `${_f.storageKey}=${e}; max-age=${_f.cookieDays * vf}; path=/; samesite=lax; secure`));
  },
  Ef = () => {
    (wf((e) => e.removeItem(_f.storageKey)),
      (document.cookie = `${_f.storageKey}=; max-age=0; path=/; samesite=lax; secure`));
  },
  Df = () => Sf() ?? xf(),
  Of = async () => {
    let e = await no();
    return typeof e.likes == `number` ? e.likes : null;
  };
async function kf(e) {
  let t = Df() ?? Cf();
  Tf(t);
  try {
    let n = await to({ kind: _f.kind, id: t, language: e });
    return (_n(_f.kind), typeof n?.likes == `number` ? n.likes : null);
  } catch (e) {
    throw (Ef(), e);
  }
}
var Af = oe(`likes`, () => {
    let e = o(null),
      t = o(!!Df()),
      n = o(!1),
      r = null,
      i = (t) => {
        e.value !== null && (e.value += t);
      };
    return {
      count: e,
      liked: t,
      sending: n,
      load: () => (
        (r ??= Of()
          .then((t) => {
            t !== null && !n.value && (e.value = t);
          })
          .catch(() => {
            r = null;
          })),
        r
      ),
      like: async (r) => {
        if (t.value || n.value) return !1;
        ((t.value = !0), (n.value = !0), i(1));
        try {
          let t = await kf(r);
          return (t !== null && (e.value = t), !0);
        } catch {
          return ((t.value = !1), i(-1), !1);
        } finally {
          n.value = !1;
        }
      },
    };
  }),
  jf = { class: `site-like__side` },
  Mf = [`aria-pressed`, `aria-label`],
  Nf = { class: `site-like__number` },
  Pf = { class: `site-like__label` },
  Ff = { class: `site-like__kicker` },
  If = { class: `site-like__title` },
  Lf = { class: `site-like__text` },
  Rf = `(prefers-reduced-motion: reduce)`,
  zf = `0px`,
  Bf = 0.4,
  Vf = 0.3,
  Hf = En(
    {
      __name: `LikeHeart`,
      setup(e) {
        let n = Af(),
          r = Tn(),
          i = pe(),
          a = z(`root`),
          s = z(`canvas`),
          c = z(`copy`),
          u = qi(a, zf),
          d = Rr(a, Bf, zf),
          f = o({ width: 0, height: 0 }),
          p = F(() => r.t(`like`)),
          h = F(() => new Intl.PluralRules(r.code)),
          g = F(() => (n.count === null ? `` : (p.value.count[h.value.select(n.count)] ?? p.value.count.other))),
          v = null,
          y = null,
          b = () => Math.min(c.value.offsetHeight, a.value.clientWidth * Vf),
          x = () => {
            v?.setActive(u.value && !i.open);
          },
          w = (e) => {
            if ((Ka(), n.liked)) return;
            let t = e.detail > 0 ? { x: e.clientX, y: e.clientY } : null;
            (v?.setLiked(!0, t), n.like(r.code));
          },
          T = (e) => {
            (e && Ka(), v?.setHover(e));
          };
        return (
          N(() => {
            ((v = gf(s.value, {
              height: b(),
              liked: n.liked,
              hidden: !d.value,
              reducedMotion: window.matchMedia(Rf).matches,
              onLayout: (e) => {
                f.value = e;
              },
            })),
              (y = new ResizeObserver(() => v?.fit(b()))),
              y.observe(c.value),
              y.observe(a.value),
              x(),
              n.load());
          }),
          m(() => {
            (y?.disconnect(), v?.dispose(), (v = null));
          }),
          t(
            () => n.liked,
            (e) => v?.setLiked(e),
          ),
          t(d, () => v?.reveal()),
          t([u, () => i.open], x),
          (e, t) => (
            M(),
            _(
              `div`,
              {
                ref_key: `root`,
                ref: a,
                class: l([`site-like`, { "site-like--liked": P(n).liked }]),
                style: C(P($r)(P(Qr).count)),
              },
              [
                R(`div`, jf, [
                  R(
                    `button`,
                    {
                      type: `button`,
                      class: `site-like__heart`,
                      style: C({ width: `${f.value.width}px`, height: `${f.value.height}px` }),
                      "aria-pressed": P(n).liked,
                      "aria-label": P(n).liked ? p.value.liked : p.value.button,
                      onClick: w,
                      onPointerenter: (t[0] ||= (e) => T(!0)),
                      onPointerleave: (t[1] ||= (e) => T(!1)),
                      onFocus: (t[2] ||= (e) => T(!0)),
                      onBlur: (t[3] ||= (e) => T(!1)),
                    },
                    [
                      R(
                        `canvas`,
                        { ref_key: `canvas`, ref: s, class: `site-like__canvas`, "aria-hidden": `true` },
                        null,
                        512,
                      ),
                    ],
                    44,
                    Mf,
                  ),
                  R(
                    `p`,
                    {
                      class: l([`site-like__count`, { "site-like__count--shown": P(n).count !== null && P(d) }]),
                      "aria-live": `polite`,
                    },
                    [
                      R(`span`, Nf, [
                        I(H, { text: P(n).count === null ? `0` : P(n).count.toLocaleString(P(r).code) }, null, 8, [
                          `text`,
                        ]),
                      ]),
                      R(`span`, Pf, S(g.value), 1),
                    ],
                    2,
                  ),
                ]),
                R(
                  `div`,
                  { ref_key: `copy`, ref: c, class: `site-like__copy` },
                  [
                    R(`p`, Ff, [
                      I(
                        H,
                        {
                          text: p.value.kicker,
                          "type-delay": P(Qr).kicker,
                          "type-duration": P(Qr).kickerDuration,
                          ready: P(d),
                        },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]),
                    R(`h3`, If, [
                      I(
                        H,
                        {
                          text: p.value.title,
                          "type-delay": P(Qr).title,
                          "type-duration": P(Qr).titleDuration,
                          ready: P(d),
                        },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]),
                    R(`p`, Lf, [
                      I(
                        H,
                        {
                          text: P(n).liked ? p.value.thanks : p.value.text,
                          "type-delay": P(Qr).text,
                          "type-duration": P(Qr).textDuration,
                          ready: P(d),
                        },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`, `ready`],
                      ),
                    ]),
                  ],
                  512,
                ),
              ],
              6,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-cf5f1091`]],
  ),
  Uf = Object.keys(ae);
function Wf() {
  let e = v(j);
  return Object.defineProperties({}, Object.fromEntries(Uf.map((t) => [t, { get: () => e.value[t], enumerable: !0 }])));
}
var Gf = [`href`],
  Kf = {
    __name: `SectionLink`,
    props: { section: { type: String, required: !0 } },
    setup(e) {
      let t = Wf(),
        n = v(xe, !0),
        r = F(() => ye[e.section] ?? null),
        i = F(() => !r.value && (t.path === `/` || (e.section === `contact` && n))),
        o = F(() => (r.value ? r.value : e.section === `top` ? `/` : { path: `/`, hash: `#${e.section}` }));
      return (t, n) => {
        let r = a(`RouterLink`);
        return i.value
          ? (M(), _(`a`, { key: 0, href: `#${e.section}` }, [h(t.$slots, `default`)], 8, Gf))
          : (M(), E(r, { key: 1, to: o.value }, { default: s(() => [h(t.$slots, `default`)]), _: 3 }, 8, [`to`]));
      };
    },
  },
  qf = `#f3ece6`,
  Jf = {
    viewBox: `-4 -118 572.5 120`,
    paper: qf,
    letters: [
      `M5.2 -19.86 28.44 -22.46V-16.64L28.44 -16.64H59.05L59.05 -16.64V-26.69L59.05 -26.69H26.19Q21.67 -26.69 18.04 -27.37Q14.41 -28.04 11.89 -29.85Q9.38 -31.66 8.04 -34.86Q6.7 -38.07 6.7 -43.12V-54.9Q6.7 -59.85 8.15 -62.92Q9.6 -66 12.23 -67.73Q14.86 -69.47 18.5 -70.08Q22.14 -70.7 26.48 -70.7H61.7Q66.1 -70.7 69.7 -70.1Q73.3 -69.51 75.88 -67.79Q78.46 -66.08 79.87 -63.02Q81.29 -59.96 81.29 -55.05V-50.84L58.05 -48.34V-53.36L58.05 -53.36H29.94L29.94 -53.36V-44.03L29.94 -44.03H62.63Q67.03 -44.03 70.63 -43.44Q74.23 -42.84 76.83 -41.14Q79.43 -39.44 80.86 -36.39Q82.29 -33.33 82.29 -28.38V-15.7Q82.29 -5.55 77.05 -2.42Q71.8 0.7 62.63 0.7H24.76Q20.25 0.7 16.61 0.03Q12.98 -0.63 10.45 -2.42Q7.92 -4.22 6.56 -7.39Q5.2 -10.57 5.2 -15.63Z`,
      `M97.28 0V-70H121.62V-46.72H154.54V-70H178.89V0H154.54V-25.84H121.62V0Z`,
      `M287.82 -54.83Q287.82 -64.13 292.95 -67.42Q298.08 -70.7 307.45 -70.7H347.09Q356.49 -70.7 361.65 -67.42Q366.82 -64.13 366.82 -54.83V-50.93L342.48 -46.32V-51.99L342.48 -51.99H312.16L312.16 -51.99V-18.01L312.16 -18.01H342.78L342.78 -18.01V-25.64H327.44V-42.4H367.12V-15.77Q367.12 -6.1 362.15 -2.7Q357.17 0.7 347.39 0.7H307.45Q297.66 0.7 292.74 -2.72Q287.82 -6.14 287.82 -15.77Z`,
      `M475.58 0V-70H493.66L534.59 -34.04V-70H557.21V0H539.05L498.2 -35.55V0Z`,
    ],
    horns: [
      {
        d: `M223.25 0 L188.15 -70 C180.98 -84.3 152.45 -89.8 154.15 -114 C164.35 -97.28 208.29 -86.72 215.96 -70 L235.35 -27.75 L254.36 -70 L279.74 -70 L245.84 0 Z`,
        from: [202.1, -70],
        to: [154.2, -114],
      },
      {
        d: `M409.8 0 L374.7 -70 L402.51 -70 L421.9 -27.75 L440.91 -70 C448.46 -86.78 490.09 -97.28 500.29 -114 C501.99 -89.8 473.26 -84.4 466.29 -70 L432.39 0 Z`,
        from: [453.6, -70],
        to: [500.3, -114],
      },
    ],
    stops: [
      [0, qf],
      [0.06, qf],
      [0.45, `#ff6a14`],
      [1, `#ff3d10`],
    ],
  },
  Yf = [`viewBox`],
  Xf = [`id`, `x1`, `y1`, `x2`, `y2`],
  Zf = [`offset`, `stop-color`],
  Qf = [`d`, `fill`],
  $f = [`d`, `fill`],
  ep = En(
    {
      __name: `SiteLogo`,
      setup(e) {
        return (e, t) => (
          M(),
          _(`svg`, { class: `site-logo`, viewBox: `0 0 150 120`, "aria-hidden": `true`, focusable: `false` }, [
            R(`text`, { x: 0, y: 100, "font-size": 118, "font-weight": 700, fill: `#ff6a14` }, `JP`),
          ])
        );
      },
    },
    [[`__scopeId`, `data-v-03989b67`]],
  ),
  tp = [`id`],
  np = { class: `site-footer__contact` },
  rp = { class: `site-footer__intro` },
  ip = [`href`],
  ap = { class: `site-footer__icon`, viewBox: `0 0 24 24`, "aria-hidden": `true` },
  op = [`d`],
  sp = { class: `site-footer__social-name` },
  cp = { class: `site-footer__social-handle` },
  lp = { class: `site-footer__brief-title` },
  up = { class: `site-footer__brief-lead` },
  dp = [`aria-label`],
  fp = { class: `site-footer__copy` },
  pp = 0.5,
  mp = `0px`,
  hp = En(
    {
      __name: `SiteFooter`,
      setup(e) {
        let t = new Date().getFullYear(),
          n = Tn(),
          r = fs(),
          i = $s();
        return (e, o) => {
          let c = a(`RouterLink`);
          return (
            M(),
            _(
              `footer`,
              { id: P(be), class: `site-footer`, "aria-labelledby": `contact-title` },
              [
                R(`div`, np, [
                  R(`div`, rp, [
                    I(
                      ni,
                      {
                        "title-id": `contact-title`,
                        kicker: P(n).t(`contactKicker`),
                        title: P(n).t(`contactTitle`),
                        hint: P(n).t(`contactHint`),
                      },
                      null,
                      8,
                      [`kicker`, `title`, `hint`],
                    ),
                    I(
                      zr,
                      { tag: `ul`, class: `site-footer__socials`, margin: mp, "aria-label": P(n).t(`socials`) },
                      {
                        default: s(({ seen: e }) => [
                          (M(!0),
                          _(
                            k,
                            null,
                            p(
                              P(_a),
                              (t, n) => (
                                M(),
                                _(
                                  `li`,
                                  {
                                    key: t.id,
                                    class: `site-footer__social`,
                                    style: C(P($r)(P(Zr).link + n * P(Zr).linkStep)),
                                  },
                                  [
                                    R(
                                      `a`,
                                      {
                                        class: `site-footer__social-link`,
                                        href: t.url,
                                        target: `_blank`,
                                        rel: `noopener noreferrer`,
                                      },
                                      [
                                        (M(),
                                        _(`svg`, ap, [
                                          (M(!0),
                                          _(
                                            k,
                                            null,
                                            p(t.icon, (e, t) => (M(), _(`path`, { key: t, d: e }, null, 8, op))),
                                            128,
                                          )),
                                        ])),
                                        R(`span`, sp, [
                                          I(
                                            H,
                                            {
                                              text: t.name,
                                              "type-delay": P(Zr).link + n * P(Zr).linkStep,
                                              "type-duration": P(Zr).linkDuration,
                                              ready: e,
                                            },
                                            null,
                                            8,
                                            [`text`, `type-delay`, `type-duration`, `ready`],
                                          ),
                                        ]),
                                        R(`span`, cp, [
                                          I(
                                            H,
                                            {
                                              text: t.handle,
                                              "type-delay": P(Zr).link + n * P(Zr).linkStep,
                                              "type-duration": P(Zr).linkDuration,
                                              ready: e,
                                            },
                                            null,
                                            8,
                                            [`text`, `type-delay`, `type-duration`, `ready`],
                                          ),
                                        ]),
                                        (o[2] ||= R(
                                          `span`,
                                          { class: `site-footer__social-arrow`, "aria-hidden": `true` },
                                          `↗`,
                                          -1,
                                        )),
                                      ],
                                      8,
                                      ip,
                                    ),
                                  ],
                                  4,
                                )
                              ),
                            ),
                            128,
                          )),
                        ]),
                        _: 1,
                      },
                      8,
                      [`aria-label`],
                    ),
                  ]),
                  I(
                    zr,
                    { class: `site-footer__brief`, margin: mp },
                    {
                      default: s(() => [
                        (o[3] ||= R(`span`, { class: `site-footer__corners`, "aria-hidden": `true` }, null, -1)),
                        R(`h3`, lp, [I(H, { text: P(n).t(`form`).title }, null, 8, [`text`])]),
                        R(`p`, up, S(P(n).t(`form`).lead), 1),
                        I(qs, { source: `footer`, "id-prefix": `footer` }),
                      ]),
                      _: 1,
                    },
                  ),
                ]),
                I(Hf, { class: `site-footer__like` }),
                I(
                  zr,
                  { class: `site-footer__bar`, threshold: pp, margin: mp },
                  {
                    default: s(({ seen: e }) => [
                      I(
                        Kf,
                        {
                          class: `site-footer__logo`,
                          section: P(`top`),
                          "aria-label": `site`,
                          style: C(P($r)(P(Zr).logo)),
                        },
                        { default: s(() => [I(ep)]), _: 1 },
                        8,
                        [`section`, `style`],
                      ),
                      R(
                        `nav`,
                        { class: `site-footer__nav`, "aria-label": P(n).t(`menu`) },
                        [
                          (M(!0),
                          _(
                            k,
                            null,
                            p(
                              P(n).t(`nav`),
                              (t, n) => (
                                M(),
                                E(
                                  Kf,
                                  { key: P(ve)[n], class: `site-footer__link`, section: P(ve)[n] },
                                  {
                                    default: s(() => [
                                      I(
                                        H,
                                        {
                                          text: t,
                                          "type-delay": P(Zr).nav + n * P(Zr).navStep,
                                          "type-duration": P(Zr).navDuration,
                                          ready: e,
                                        },
                                        null,
                                        8,
                                        [`text`, `type-delay`, `type-duration`, `ready`],
                                      ),
                                    ]),
                                    _: 2,
                                  },
                                  1032,
                                  [`section`],
                                )
                              ),
                            ),
                            128,
                          )),
                        ],
                        8,
                        dp,
                      ),
                      R(
                        `button`,
                        {
                          type: `button`,
                          class: `site-footer__bug`,
                          "aria-haspopup": `dialog`,
                          onClick: (o[0] ||= (e) => P(r).show()),
                        },
                        [
                          (o[4] ||= R(`span`, { class: `site-footer__bug-mark`, "aria-hidden": `true` }, `>_`, -1)),
                          I(
                            H,
                            {
                              text: P(n).t(`bugReport`).open,
                              "type-delay": P(Zr).copy,
                              "type-duration": P(Zr).copyDuration,
                              ready: e,
                            },
                            null,
                            8,
                            [`text`, `type-delay`, `type-duration`, `ready`],
                          ),
                        ],
                      ),
                      R(`p`, fp, [
                        I(
                          H,
                          {
                            text: `© ${P(t)} ${P(n).t(`owner`)}`,
                            "type-delay": P(Zr).copy,
                            "type-duration": P(Zr).copyDuration,
                            ready: e,
                          },
                          null,
                          8,
                          [`text`, `type-delay`, `type-duration`, `ready`],
                        ),
                        I(
                          c,
                          { class: `site-footer__privacy`, to: P(_e) },
                          {
                            default: s(() => [
                              I(
                                H,
                                {
                                  text: P(n).t(`privacy`),
                                  "type-delay": P(Zr).copy,
                                  "type-duration": P(Zr).copyDuration,
                                  ready: e,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            _: 2,
                          },
                          1032,
                          [`to`],
                        ),
                        R(
                          `button`,
                          {
                            type: `button`,
                            class: `site-footer__privacy site-footer__cookies`,
                            onClick: (o[1] ||= (e) => P(i).ask()),
                          },
                          [
                            I(
                              H,
                              {
                                text: P(n).t(`cookies`).settings,
                                "type-delay": P(Zr).copy,
                                "type-duration": P(Zr).copyDuration,
                                ready: e,
                              },
                              null,
                              8,
                              [`text`, `type-delay`, `type-duration`, `ready`],
                            ),
                          ],
                        ),
                      ]),
                    ]),
                    _: 1,
                  },
                ),
              ],
              8,
              tp,
            )
          );
        };
      },
    },
    [[`__scopeId`, `data-v-0f453ad2`]],
  ),
  gp = 3,
  _p = 1e3,
  vp = 2 ** (1 / 12),
  yp = 2 ** (1 / 1200),
  bp = 1e-4,
  xp = 0.008,
  Sp = 2,
  Cp = 0.3,
  wp = [-2, -1, 1, 2],
  Tp = [-1, 1],
  Ep = [
    { type: `triangle`, gain: 1, side: -1 },
    { type: `sawtooth`, gain: V.padSawGain, side: 1 },
  ],
  Dp = `visibilitychange`,
  Op = ([e, t]) => e + Math.random() * (t - e),
  kp = (e) => e[Math.floor(Math.random() * e.length)],
  Ap = (e, t) => e * vp ** t,
  jp = (e, t) => {
    let n = e.currentTime,
      r = [],
      i = (e) => {
        (e.start(n), r.push(e));
      },
      a = B(e, 0),
      o = B(e, 1);
    a.connect(o).connect(t);
    let s = B(e, 1);
    s.connect(a);
    let c = e.createConvolver();
    ((c.buffer = kt(e, V.reverbSeconds, V.reverbDecay)), c.connect(B(e, V.reverbMix)).connect(a));
    let [l, u] = V.droneCutHz,
      d = B(e, V.droneGain),
      f = Ue(e, `lowpass`, (l + u) / 2);
    ((f.Q.value = V.droneQ), f.connect(d).connect(s));
    for (let t of Tp) {
      let n = We(e, V.rootHz * yp ** (t * V.droneDetuneCents), `sawtooth`);
      (n.connect(f), i(n));
    }
    let p = We(e, V.rootHz / 2);
    (p.connect(B(e, V.subGain)).connect(d), i(p));
    let m = We(e, V.droneSweepHz);
    (m.connect(B(e, (u - l) / 2)).connect(f.frequency), i(m));
    let h = We(e, V.breathHz);
    (h.connect(B(e, V.droneGain * V.breathDepth)).connect(d.gain), i(h));
    let g = Ue(e, `lowpass`, V.padCutHz);
    (g.connect(s), g.connect(B(e, V.padSend)).connect(c));
    let _ = Ue(e, `lowpass`, V.blipCutHz);
    (_.connect(s), _.connect(B(e, V.blipSend)).connect(c));
    let v = qe(e, V.echoSeconds, V.echoFeedback);
    (_.connect(v), v.connect(B(e, V.echoMix)).connect(s));
    let y = Je(e, V.hissSeconds);
    ((y.loop = !0),
      y
        .connect(Ue(e, `bandpass`, V.hissHz))
        .connect(B(e, V.hissGain))
        .connect(a),
      i(y));
    let b = Je(e, V.hissSeconds);
    b.loop = !0;
    let x = Ue(e, `bandpass`, V.glitchHz[0]),
      S = B(e, 0);
    (b.connect(x).connect(S).connect(a), i(b));
    let C = 0,
      w = 0,
      T = n + V.firstChord,
      E = n + Op(V.firstBlip),
      D = n + Op(V.glitchEvery),
      O = () => (C !== 0 && Math.random() < V.homeChance ? 0 : kp(V.chords.map((e, t) => t).filter((e) => e !== C))),
      ee = (t) => {
        C = O();
        let n = t + V.chordAttack,
          r = n + V.chordHold + V.chordRelease * Sp,
          i = B(e, 0);
        (i.gain.setValueAtTime(0, t),
          i.gain.linearRampToValueAtTime(V.chordGain, n),
          i.gain.setTargetAtTime(0, n + V.chordHold, V.chordRelease / gp),
          i.connect(g));
        for (let n of V.chords[C])
          for (let { type: a, gain: o, side: s } of Ep) {
            let c = We(e, Ap(V.padRootHz, n) * yp ** (s * V.padDetuneCents), a);
            (c.connect(B(e, o)).connect(i), c.start(t), c.stop(r));
          }
      },
      k = (t) => {
        let n = t;
        for (let t = Math.round(Op(V.blipPhrase)); t > 0; --t) {
          w = Math.min(Math.max(w + kp(wp), 0), V.blipNotes.length - 1);
          let t = We(e, Ap(V.blipBaseHz, V.blipNotes[w]), `square`),
            r = B(e, 0);
          (r.gain.setValueAtTime(0, n),
            r.gain.linearRampToValueAtTime(V.blipGain, n + xp),
            r.gain.exponentialRampToValueAtTime(bp, n + V.blipSeconds),
            t.connect(r).connect(_),
            t.start(n),
            t.stop(n + V.blipSeconds),
            (n += V.blipStep * (Math.random() < Cp ? 2 : 1)));
        }
      },
      A = (e) => {
        let t = e;
        for (let e = Math.round(Op(V.glitchChops)); e > 0; --e)
          (x.frequency.setValueAtTime(Op(V.glitchHz), t),
            S.gain.setValueAtTime(V.glitchGain * Op([0.5, 1]), t),
            (t += Op(V.glitchSeconds)),
            S.gain.setValueAtTime(0, t),
            (t += Op(V.glitchGap)));
      },
      j = () => {
        let t = e.currentTime,
          n = t + V.lookAheadSeconds;
        for (T = Math.max(T, t), E = Math.max(E, t), D = Math.max(D, t); T < n; T += Op(V.chordEvery)) ee(T);
        for (; E < n; E += Op(V.blipEvery)) k(E);
        for (; D < n; D += Op(V.glitchEvery)) A(D);
      };
    j();
    let M = window.setInterval(j, V.tickMs);
    return {
      level(t, n, r = 0) {
        (a.gain.cancelScheduledValues(e.currentTime), a.gain.setTargetAtTime(t, e.currentTime + r, n / gp));
      },
      duck(t) {
        let n = e.currentTime;
        (o.gain.cancelScheduledValues(n), o.gain.setTargetAtTime(t ? V.duck : 1, n, V.duckSeconds / gp));
      },
      stop() {
        window.clearInterval(M);
        for (let e of r) e.stop();
        a.disconnect();
      },
    };
  },
  Mp = (e) => {
    let t = null,
      n = !1,
      r = !1,
      i = 0,
      a = (e = 0) => {
        let r = n && !document.hidden;
        t?.level(r ? V.volume : 0, r ? V.fadeInSeconds : V.fadeOutSeconds, e);
      },
      o = () => a();
    return (
      document.addEventListener(Dp, o),
      {
        play() {
          if (((n = !0), window.clearTimeout(i), t)) {
            a();
            return;
          }
          let o = e.unlock();
          o && ((t = jp(o, e.output())), t.duck(r), a(V.startDelay));
        },
        stop() {
          ((n = !1),
            a(),
            window.clearTimeout(i),
            (i = window.setTimeout(
              () => {
                n || (t?.stop(), (t = null));
              },
              V.fadeOutSeconds * Sp * _p,
            )));
        },
        duck(e) {
          ((r = e), t?.duck(e));
        },
        dispose() {
          (window.clearTimeout(i), document.removeEventListener(Dp, o), t?.stop(), (t = null));
        },
      }
    );
  },
  Np = `site.sound`,
  Pp = `on`,
  Fp = `off`,
  Ip = () => {
    try {
      return window.localStorage.getItem(Np) !== Fp;
    } catch {
      return !0;
    }
  },
  Lp = (e) => {
    try {
      window.localStorage.setItem(Np, e ? Pp : Fp);
    } catch {
      return;
    }
  },
  Rp = oe(`sound`, () => {
    let e = o(Ip());
    return {
      enabled: e,
      toggle: () => {
        ((e.value = !e.value), Lp(e.value), _n(`sound_toggle`, { enabled: e.value }));
      },
    };
  }),
  zp = Symbol(`audioHub`),
  Bp = [`click`, `keydown`],
  Vp = 1e3;
function Hp() {
  let e = Rp(),
    n = pe(),
    r = v(zp, null),
    i = r ?? Le(),
    a = Mp(i),
    o = !1,
    s = 0,
    c = () => o || !!navigator.userActivation?.hasBeenActive,
    l = () => {
      e.enabled ? c() && a.play() : a.stop();
    },
    u = () => {
      (i.unlocked() && i.unlock(),
        !o &&
          ((o = !0),
          e.enabled &&
            (i.unlock(),
            (s = window.setTimeout(() => {
              ((s = 0), e.enabled && a.play());
            }, Vp)))));
    };
  (t(() => e.enabled, l),
    t(
      () => n.open,
      (e) => a.duck(e),
    ),
    N(() => {
      (Bp.forEach((e) => window.addEventListener(e, u)), e.enabled && c() && a.play());
    }),
    m(() => {
      (window.clearTimeout(s), Bp.forEach((e) => window.removeEventListener(e, u)), a.dispose(), r || i.dispose());
    }));
}
var Up = {
    viewBox: `0 0 32 32`,
    head: `M24.63 18L24.6 17.35L24.52 16.71L24.39 16.07L24.2 15.45L23.97 14.84L23.68 14.25L23.35 13.69L22.98 13.15L22.56 12.64L22.1 12.17L21.6 11.73L21.07 11.33L20.51 10.97L19.92 10.65L19.3 10.38L18.67 10.15L18.01 9.98L17.35 9.85L16.68 9.78L16 9.75L15.32 9.78L14.65 9.85L13.99 9.98L13.33 10.15L12.7 10.38L12.08 10.65L11.49 10.97L10.93 11.33L10.4 11.73L9.9 12.17L9.44 12.64L9.02 13.15L8.65 13.69L8.32 14.25L8.03 14.84L7.8 15.45L7.61 16.07L7.48 16.71L7.4 17.35L7.38 18L7.39 18.33L7.42 18.66L7.47 18.99L7.53 19.33L7.59 19.66L7.67 19.99L7.76 20.32L7.85 20.65L7.95 20.98L8.07 21.31L8.19 21.64L8.31 21.98L8.45 22.31L8.59 22.64L8.74 22.97L8.89 23.3L9.06 23.63L9.23 23.96L9.4 24.29L9.59 24.63L9.78 24.96L9.97 25.29L10.17 25.62L10.38 25.95L10.6 26.28L10.82 26.61L11.05 26.94L11.28 27.28L11.53 27.61L11.78 27.94L12.04 28.27L12.31 28.6L12.59 28.93L12.88 29.26L13.19 29.59L13.52 29.93L13.89 30.26L14.3 30.59L14.82 30.92L16 31.25L17.18 30.92L17.7 30.59L18.11 30.26L18.48 29.93L18.81 29.59L19.12 29.26L19.41 28.93L19.69 28.6L19.96 28.27L20.22 27.94L20.47 27.61L20.72 27.28L20.95 26.94L21.18 26.61L21.4 26.28L21.62 25.95L21.83 25.62L22.03 25.29L22.22 24.96L22.41 24.63L22.6 24.29L22.77 23.96L22.94 23.63L23.11 23.3L23.26 22.97L23.41 22.64L23.55 22.31L23.69 21.98L23.81 21.64L23.93 21.31L24.05 20.98L24.15 20.65L24.24 20.32L24.33 19.99L24.41 19.66L24.47 19.33L24.53 18.99L24.58 18.66L24.61 18.33Z`,
    horns: [
      `M20.25 13.25Q18.59 11.21 20.49 10.24Q22.39 9.27 22.01 7.68Q21.63 6.1 23.37 3.52Q25.11 0.94 25.25 1Q25.39 1.06 24.88 3.73Q24.37 6.4 25.24 8.57Q26.11 10.73 24.01 13.01Q21.91 15.29 20.25 13.25Z`,
      `M11.75 13.25Q10.09 15.29 7.99 13.01Q5.89 10.73 6.76 8.57Q7.63 6.4 7.12 3.73Q6.61 1.06 6.75 1Q6.89 0.94 8.63 3.52Q10.37 6.1 9.99 7.68Q9.61 9.27 11.51 10.24Q13.41 11.21 11.75 13.25Z`,
    ],
    hollows: [
      `M9.6 18.3Q12.6 17.6 15.6 18.3Q15.7 21.5 12.6 21.6Q9.5 21.5 9.6 18.3Z`,
      `M16.4 18.3Q19.4 17.6 22.4 18.3Q22.5 21.5 19.4 21.6Q16.3 21.5 16.4 18.3Z`,
    ],
    sockets: [
      `M10.7 19.6a1.9 1.45 0 1 0 3.8 0a1.9 1.45 0 1 0 -3.8 0Z`,
      `M17.5 19.6a1.9 1.45 0 1 0 3.8 0a1.9 1.45 0 1 0 -3.8 0Z`,
    ],
    eyes: [`M11.6 19.7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0Z`, `M18.4 19.7a1 1 0 1 0 2 0a1 1 0 1 0 -2 0Z`],
    pupils: [
      `M12.18 19.7a0.42 0.42 0 1 0 0.84 0a0.42 0.42 0 1 0 -0.84 0Z`,
      `M18.98 19.7a0.42 0.42 0 1 0 0.84 0a0.42 0.42 0 1 0 -0.84 0Z`,
    ],
    mouth: `M13.5 27Q16 27 18.5 27`,
  },
  Wp = `site.intro`,
  Gp = `seen`,
  Kp = () => {
    try {
      return window.localStorage.getItem(Wp) === Gp;
    } catch {
      return !1;
    }
  },
  qp = () => {
    try {
      window.localStorage.setItem(Wp, Gp);
    } catch {
      return;
    }
  },
  Jp = oe(`intro`, () => {
    let e = o(Kp() || bn()),
      t = o(!1);
    return {
      passed: e,
      replay: t,
      complete: () => {
        ((e.value = !0), qp());
      },
      requestReplay: () => {
        ((e.value = !1), (t.value = !0));
      },
      takeReplay: () => {
        let e = t.value;
        return ((t.value = !1), e);
      },
    };
  }),
  Yp = `modulepreload`,
  Xp = function (e) {
    return `/` + e;
  },
  Zp = {},
  Qp = function (e, t, n) {
    let r = Promise.resolve();
    if (t && t.length > 0) {
      let e = document.getElementsByTagName(`link`),
        i = document.querySelector(`meta[property=csp-nonce]`),
        a = i?.nonce || i?.getAttribute(`nonce`);
      function o(e) {
        return Promise.all(
          e.map((e) =>
            Promise.resolve(e).then(
              (e) => ({ status: `fulfilled`, value: e }),
              (e) => ({ status: `rejected`, reason: e }),
            ),
          ),
        );
      }
      function s(e) {
        return import.meta.resolve ? import.meta.resolve(e) : new URL(e, import.meta.url).href;
      }
      r = o(
        t.map((t) => {
          if (((t = Xp(t, n)), (t = s(t)), t in Zp)) return;
          Zp[t] = !0;
          let r = t.endsWith(`.css`);
          for (let n = e.length - 1; n >= 0; n--) {
            let i = e[n];
            if (i.href === t && (!r || i.rel === `stylesheet`)) return;
          }
          let i = document.createElement(`link`);
          if (
            ((i.rel = r ? `stylesheet` : Yp),
            r || (i.as = `script`),
            (i.crossOrigin = ``),
            (i.href = t),
            a && i.setAttribute(`nonce`, a),
            document.head.appendChild(i),
            r)
          )
            return new Promise((e, n) => {
              (i.addEventListener(`load`, e),
                i.addEventListener(`error`, () => n(Error(`Unable to preload CSS for ${t}`))));
            });
        }),
      );
    }
    function i(e) {
      let t = new Event(`vite:preloadError`, { cancelable: !0 });
      if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented)) throw e;
    }
    return r.then((t) => {
      for (let e of t || []) e.status === `rejected` && i(e.reason);
      return e().catch(i);
    });
  },
  $p = [`aria-label`, `title`],
  em = [`viewBox`],
  tm = { class: `demon-button__head` },
  nm = [`d`],
  rm = [`d`],
  im = [`d`],
  am = [`d`],
  om = [`d`],
  sm = { class: `demon-button__eyes` },
  cm = [`d`],
  lm = [`d`],
  um = `(prefers-reduced-motion: reduce)`,
  dm = En(
    {
      __name: `DemonButton`,
      setup(e) {
        let t = Tn(),
          n = Jp(),
          r = T(),
          i = v(zp, null),
          a = !1,
          o = () => {
            (n.requestReplay(), r.push(`/`));
          },
          s = () => {
            Qp(
              async () => {
                let { warmSiteBreak: e } = await import(`./siteBreak-CKn4vXJu.js`);
                return { warmSiteBreak: e };
              },
              __vite__mapDeps([0, 1]),
            )
              .then(({ warmSiteBreak: e }) => e())
              .catch(() => null);
          },
          c = (e) => {
            e.button !== 0 ||
              a ||
              window.matchMedia(um).matches ||
              Qp(
                async () => {
                  let { prepareSiteBreak: e } = await import(`./siteBreak-CKn4vXJu.js`);
                  return { prepareSiteBreak: e };
                },
                __vite__mapDeps([0, 1]),
              )
                .then(({ prepareSiteBreak: e }) => e())
                .catch(() => null);
          },
          l = async () => {
            if (a) return;
            ((a = !0), _n(`demon_open`));
            let e = i ?? Le();
            if ((e.unlock(), i || ze(e), window.matchMedia(um).matches)) {
              o();
              return;
            }
            let t = { x: window.innerWidth / 2, y: window.innerHeight / 2 },
              { breakSite: n } = await Qp(
                async () => {
                  let { breakSite: e } = await import(`./siteBreak-CKn4vXJu.js`);
                  return { breakSite: e };
                },
                __vite__mapDeps([0, 1]),
              );
            n(t, o, e);
          };
        return (e, n) => (
          M(),
          _(
            `button`,
            {
              type: `button`,
              class: `demon-button`,
              "aria-label": P(t).t(`demon`),
              title: P(t).t(`demon`),
              onPointerdown: c,
              onClick: l,
              onPointerenter: s,
              onFocus: s,
            },
            [
              (M(),
              _(
                `svg`,
                { class: `demon-button__icon`, viewBox: P(Up).viewBox, "aria-hidden": `true` },
                [
                  R(`g`, tm, [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(P(Up).horns, (e, t) => (M(), _(`path`, { key: `horn-${t}`, d: e }, null, 8, nm))),
                      128,
                    )),
                    R(`path`, { d: P(Up).head }, null, 8, rm),
                  ]),
                  (M(!0),
                  _(
                    k,
                    null,
                    p(
                      P(Up).hollows,
                      (e, t) => (
                        M(),
                        _(`path`, { key: `hollow-${t}`, class: `demon-button__hollow`, d: e }, null, 8, im)
                      ),
                    ),
                    128,
                  )),
                  (M(!0),
                  _(
                    k,
                    null,
                    p(
                      P(Up).sockets,
                      (e, t) => (
                        M(),
                        _(`path`, { key: `socket-${t}`, class: `demon-button__socket`, d: e }, null, 8, am)
                      ),
                    ),
                    128,
                  )),
                  R(`path`, { class: `demon-button__mouth`, d: P(Up).mouth }, null, 8, om),
                  R(`g`, sm, [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(P(Up).eyes, (e, t) => (M(), _(`path`, { key: t, d: e }, null, 8, cm))),
                      128,
                    )),
                  ]),
                  (M(!0),
                  _(
                    k,
                    null,
                    p(
                      P(Up).pupils,
                      (e, t) => (
                        M(),
                        _(`path`, { key: `pupil-${t}`, class: `demon-button__pupil`, d: e }, null, 8, lm)
                      ),
                    ),
                    128,
                  )),
                ],
                8,
                em,
              )),
            ],
            40,
            $p,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-00ae2fb1`]],
  ),
  fm = [`aria-label`],
  pm = [`aria-pressed`, `lang`, `onClick`],
  mm = En(
    {
      __name: `LanguagePlate`,
      setup(e) {
        let t = Tn();
        return (e, n) => (
          M(),
          _(
            `div`,
            { class: `language-plate`, role: `group`, "aria-label": P(t).t(`language`) },
            [
              (M(!0),
              _(
                k,
                null,
                p(
                  P(pn),
                  (e) => (
                    M(),
                    _(
                      `button`,
                      {
                        key: e.code,
                        type: `button`,
                        class: l([
                          `language-plate__option`,
                          { "language-plate__option--active": e.code === P(t).code },
                        ]),
                        "aria-pressed": e.code === P(t).code,
                        lang: e.code,
                        onClick: (n) => P(t).set(e.code),
                      },
                      S(e.label),
                      11,
                      pm,
                    )
                  ),
                ),
                128,
              )),
            ],
            8,
            fm,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-92b5027e`]],
  ),
  hm = [`aria-pressed`, `aria-label`, `title`],
  gm = { class: `sound-toggle__icon`, viewBox: `0 0 24 24`, "aria-hidden": `true` },
  _m = { key: 0 },
  vm = { key: 1, d: `M15.5 9.5l5 5M20.5 9.5l-5 5` },
  ym = En(
    {
      __name: `SoundToggle`,
      setup(e) {
        let t = Tn(),
          n = Rp();
        return (e, r) => (
          M(),
          _(
            `button`,
            {
              type: `button`,
              class: l([`sound-toggle`, { "sound-toggle--off": !P(n).enabled }]),
              "aria-pressed": P(n).enabled,
              "aria-label": P(t).t(`sound`),
              title: P(t).t(`sound`),
              onClick: (r[0] ||= (e) => P(n).toggle()),
            },
            [
              (M(),
              _(`svg`, gm, [
                (r[2] ||= R(`path`, { d: `M4 9.5h3.5L12 5.5v13l-4.5-4H4z` }, null, -1)),
                P(n).enabled
                  ? (M(),
                    _(`g`, _m, [
                      ...(r[1] ||= [
                        R(`path`, { class: `sound-toggle__wave`, d: `M15.5 9.5a3.5 3.5 0 0 1 0 5` }, null, -1),
                        R(
                          `path`,
                          { class: `sound-toggle__wave sound-toggle__wave--far`, d: `M18 7a7 7 0 0 1 0 10` },
                          null,
                          -1,
                        ),
                      ]),
                    ]))
                  : (M(), _(`path`, vm)),
              ])),
            ],
            10,
            hm,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-f137b684`]],
  ),
  bm = [`aria-label`],
  xm = { class: `site-header__controls` },
  Sm = [`aria-expanded`, `aria-label`],
  Cm = `Escape`,
  wm = En(
    {
      __name: `SiteHeader`,
      props: { pinned: { type: Boolean, default: !1 } },
      setup(e) {
        let t = Tn(),
          n = Js(),
          r = o(!1),
          i = () => {
            r.value = !1;
          },
          a = () => {
            (i(), n.show());
          },
          c = (e) => {
            e.key === Cm && i();
          };
        return (
          N(() => {
            window.addEventListener(`keydown`, c);
          }),
          m(() => {
            window.removeEventListener(`keydown`, c);
          }),
          (n, o) => (
            M(),
            _(
              `header`,
              { class: l([`site-header`, { "site-header--open": r.value, "site-header--pinned": e.pinned }]) },
              [
                I(
                  Kf,
                  {
                    class: `site-header__logo`,
                    section: P(`top`),
                    "aria-label": `site`,
                    style: C(P($r)(P(Vr).logo)),
                  },
                  { default: s(() => [I(ep)]), _: 1 },
                  8,
                  [`section`, `style`],
                ),
                R(
                  `nav`,
                  { id: `site-menu`, class: `site-header__nav`, "aria-label": P(t).t(`menu`) },
                  [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        P(t).t(`nav`),
                        (e, t) => (
                          M(),
                          E(
                            Kf,
                            { key: P(ve)[t], class: `site-header__link`, section: P(ve)[t], onClick: i },
                            {
                              default: s(() => [
                                I(
                                  H,
                                  {
                                    text: e,
                                    "type-delay": P(Vr).nav + t * P(Vr).navStep,
                                    "type-duration": P(Vr).navDuration,
                                  },
                                  null,
                                  8,
                                  [`text`, `type-delay`, `type-duration`],
                                ),
                              ]),
                              _: 2,
                            },
                            1032,
                            [`section`],
                          )
                        ),
                      ),
                      128,
                    )),
                    R(
                      `button`,
                      {
                        type: `button`,
                        class: `site-header__cta`,
                        "aria-haspopup": `dialog`,
                        style: C(P($r)(P(Vr).cta)),
                        onClick: a,
                      },
                      [
                        I(
                          H,
                          { text: P(t).t(`cta`), "type-delay": P(Vr).cta, "type-duration": P(Vr).ctaDuration },
                          null,
                          8,
                          [`text`, `type-delay`, `type-duration`],
                        ),
                      ],
                      4,
                    ),
                  ],
                  8,
                  bm,
                ),
                R(`div`, xm, [
                  I(mm, { class: `site-header__flicker`, style: C(P($r)(P(Vr).languages)) }, null, 8, [`style`]),
                  I(dm, { class: `site-header__flicker`, style: C(P($r)(P(Vr).demon)) }, null, 8, [`style`]),
                  I(ym, { class: `site-header__flicker`, style: C(P($r)(P(Vr).sound)) }, null, 8, [`style`]),
                ]),
                R(
                  `button`,
                  {
                    type: `button`,
                    class: `site-header__toggle site-header__flicker`,
                    style: C(P($r)(P(Vr).toggle)),
                    "aria-controls": `site-menu`,
                    "aria-expanded": r.value,
                    "aria-label": P(t).t(`menu`),
                    onClick: (o[0] ||= (e) => (r.value = !r.value)),
                  },
                  [
                    ...(o[1] ||= [
                      R(`span`, { class: `site-header__bar` }, null, -1),
                      R(`span`, { class: `site-header__bar` }, null, -1),
                    ]),
                  ],
                  12,
                  Sm,
                ),
              ],
              2,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-779b5bbd`]],
  ),
  Tm = 8,
  Em = 500,
  Dm = En(
    {
      __name: `SitePage`,
      props: {
        demon: { type: Boolean, default: !0 },
        followHash: { type: Boolean, default: !1 },
        footer: { type: Boolean, default: !0 },
      },
      setup(e) {
        f(xe, e.footer);
        let t = Wf(),
          n = z(`root`),
          r = z(`headerSlot`),
          i = o(!1),
          a = o(0),
          s = null,
          c = 0,
          l = jc(n);
        Hp();
        let u = () => {
            !i.value && !c && (a.value = r.value.firstElementChild.offsetHeight);
          },
          d = () => {
            let e = n.value.scrollTop > Tm;
            e !== i.value &&
              ((i.value = e),
              window.clearTimeout(c),
              (c = window.setTimeout(() => {
                ((c = 0), u());
              }, Em)));
          },
          p = () => {
            let e = t.hash && document.getElementById(decodeURIComponent(t.hash.slice(1)));
            e && n.value.contains(e) && e !== n.value && l.value?.scrollTo(e, { immediate: !0, force: !0 });
          };
        return (
          N(() => {
            (n.value.addEventListener(`scroll`, d, { passive: !0 }),
              (s = new ResizeObserver(u)),
              s.observe(r.value.firstElementChild),
              u(),
              e.followHash && p());
          }),
          m(() => {
            (window.clearTimeout(c), s?.disconnect(), n.value?.removeEventListener(`scroll`, d));
          }),
          (t, o) => (
            M(),
            _(
              `div`,
              {
                id: `top`,
                ref_key: `root`,
                ref: n,
                class: `site-page`,
                style: C({ "--site-header-slot": `${a.value}px` }),
              },
              [
                I(Yd, { demon: e.demon }, null, 8, [`demon`]),
                I(Fc),
                R(
                  `div`,
                  { ref_key: `headerSlot`, ref: r, class: `site-page__header`, style: C({ height: `${a.value}px` }) },
                  [I(wm, { pinned: i.value }, null, 8, [`pinned`])],
                  4,
                ),
                h(t.$slots, `default`, {}, void 0, !0),
                e.footer ? (M(), E(hp, { key: 0 })) : L(``, !0),
                I(zc),
                I(Xs),
                I(ms),
              ],
              4,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-c949be77`]],
  ),
  Om = [
    { id: `nix`, name: `N-iX`, logo: null, keepCase: !0 },
    { id: `wmg`, name: `WMG International`, logo: null },
    { id: `insula`, name: `InsulaLabs`, logo: null },
    { id: `clickable`, name: `Clickable`, logo: null },
    { id: `slots-city`, name: `Slots City`, logo: null },
    { id: `akvarel`, name: `Akvarel Group`, logo: null },
    { id: `upton`, name: `Upton Realty Group`, logo: null },
    { id: `asgard`, name: `Asgard`, logo: null },
    { id: `melbet`, name: `Melbet`, logo: null },
    { id: `volunteer`, name: null, logo: null },
  ],
  km = [
    { seconds: 38, reverse: !1 },
    { seconds: 46, reverse: !0 },
  ],
  Am = { class: `site-partners__move` },
  jm = [`aria-hidden`],
  Mm = [`src`, `alt`],
  Nm = 2,
  Pm = En(
    {
      __name: `SitePartners`,
      setup(e) {
        let t = Tn(),
          n = qi(z(`root`)),
          r = (e) => (e % 2 ? [...Om].reverse() : Om);
        return (e, i) => (
          M(),
          _(
            `section`,
            {
              id: `partners`,
              ref: `root`,
              class: l([`site-partners`, { "site-partners--idle": !P(n) }]),
              "aria-labelledby": `partners-title`,
            },
            [
              I(
                ni,
                {
                  "title-id": `partners-title`,
                  kicker: P(t).t(`partnersKicker`),
                  title: P(t).t(`partnersTitle`),
                  hint: P(t).t(`partnersHint`),
                },
                null,
                8,
                [`kicker`, `title`, `hint`],
              ),
              I(
                zr,
                { class: `site-partners__rails` },
                {
                  default: s(() => [
                    (M(!0),
                    _(
                      k,
                      null,
                      p(
                        P(km),
                        (e, n) => (
                          M(),
                          _(
                            `div`,
                            {
                              key: n,
                              class: l([`site-partners__rail`, { "site-partners__rail--reverse": e.reverse }]),
                              style: C({ "--seconds": `${e.seconds}s` }),
                            },
                            [
                              R(`div`, Am, [
                                (M(),
                                _(
                                  k,
                                  null,
                                  p(Nm, (e) =>
                                    R(
                                      `ul`,
                                      {
                                        key: e,
                                        class: `site-partners__list`,
                                        "aria-hidden": e > 1 || n > 0 ? `true` : void 0,
                                      },
                                      [
                                        (M(!0),
                                        _(
                                          k,
                                          null,
                                          p(
                                            r(n),
                                            (e) => (
                                              M(),
                                              _(`li`, { key: e.id, class: `site-partners__item` }, [
                                                e.logo
                                                  ? (M(),
                                                    _(
                                                      `img`,
                                                      {
                                                        key: 0,
                                                        class: `site-partners__logo`,
                                                        src: e.logo,
                                                        alt: e.name ?? P(t).t(`partnerNames`)[e.id],
                                                        loading: `lazy`,
                                                        decoding: `async`,
                                                      },
                                                      null,
                                                      8,
                                                      Mm,
                                                    ))
                                                  : (M(),
                                                    _(
                                                      `span`,
                                                      {
                                                        key: 1,
                                                        class: l([
                                                          `site-partners__name`,
                                                          { "site-partners__name--keep-case": e.keepCase },
                                                        ]),
                                                      },
                                                      S(e.name ?? P(t).t(`partnerNames`)[e.id]),
                                                      3,
                                                    )),
                                              ])
                                            ),
                                          ),
                                          128,
                                        )),
                                      ],
                                      8,
                                      jm,
                                    ),
                                  ),
                                  64,
                                )),
                              ]),
                            ],
                            6,
                          )
                        ),
                      ),
                      128,
                    )),
                  ]),
                  _: 1,
                },
              ),
            ],
            2,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-de0dd63b`]],
  ),
  Fm = {
    maxPixelRatio: 2,
    maxDeltaSeconds: 0.1,
    rowsAcross: 44,
    frameAspect: 1.2,
    sideBleed: 0.2,
    rowRange: [9, 16],
    glyphs: `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#$%&*+=<>/?{}[]`,
    blinkSeconds: 0.53,
  },
  Im = {
    half: 0.4,
    top: 0.02,
    bottom: 0.4,
    bezelColumns: 4,
    bezelTop: 2,
    chinRows: 3,
    neckHalf: 0.03,
    neckBottom: 0.44,
    baseHalf: 0.17,
    baseTop: 0.75,
    shadowSpread: 1.15,
    brand: `Site`,
    brandStep: 2,
    plate: 2,
    camera: `o`,
    led: `o`,
    buttons: [`=`, `=`],
    buttonStep: 3,
    hinge: `=`,
    shadow: `.`,
  },
  Lm = {
    top: 0.475,
    rowStep: 2,
    edgeRows: 2,
    pitch: [4.4, 5.6],
    fill: 0.9,
    slack: 0.5,
    units: 15,
    frontRows: 2,
    ledStep: 2,
    ledInset: 4,
    leds: 3,
    led: `o`,
    face: `-`,
    shadow: `.`,
    rows: [
      [..."`1234567890-=".split(``).map((e) => ({ id: e })), { id: `\b`, text: `<-`, units: 2 }],
      [
        { id: `	`, text: `TAB`, units: 1.5 },
        ...`QWERTYUIOP[]`.split(``).map((e) => ({ id: e })),
        { id: `\\`, units: 1.5 },
      ],
      [
        { id: `Caps`, text: `CAPS`, units: 1.8 },
        ...`ASDFGHJKL;'`.split(``).map((e) => ({ id: e })),
        {
          id: `
`,
          text: `ENTER`,
          units: 2.2,
        },
      ],
      [
        { id: `Shift`, text: `SHIFT`, units: 2.3 },
        ...`ZXCVBNM,./`.split(``).map((e) => ({ id: e })),
        { id: `ShiftRight`, text: `SHIFT`, units: 2.7 },
      ],
      [
        { id: `Ctrl`, text: `CTRL`, units: 1.6 },
        { id: `Alt`, text: `ALT`, units: 1.4 },
        { id: ` `, text: ``, units: 9 },
        { id: `AltRight`, text: `ALT`, units: 1.4 },
        { id: `CtrlRight`, text: `CTRL`, units: 1.6 },
      ],
    ],
    homeKey: `A`,
  },
  X = {
    bezelBody: 0.24,
    bezelFall: 0.3,
    bezelLight: 0.95,
    bezelDark: 0.42,
    innerShadow: 0.1,
    innerLight: 0.85,
    brand: 0.85,
    camera: 0.6,
    button: 0.4,
    ledOff: 0.25,
    ledOn: 1.4,
    ledRed: 1,
    ledPulse: 1.6,
    neck: 0.32,
    neckEdge: 0.2,
    neckLight: 0.6,
    hinge: 0.5,
    baseTop: 0.6,
    base: 0.34,
    shadow: 0.1,
    caseTop: 0.55,
    caseSide: 0.38,
    caseBottom: 0.3,
    caseFront: 0.16,
    bracket: 0.22,
    key: 0.48,
    keyFace: 0.13,
    keyLed: 0.2,
    keyLedOn: 1.3,
    glass: `rgba(255, 106, 20, 0.05)`,
    glassEdge: `rgba(255, 106, 20, 0)`,
    scanline: `rgba(255, 106, 20, 0.03)`,
    glare: `rgba(255, 210, 170, 0.045)`,
    glareFrom: 0.18,
    glareTo: 0.36,
    tabActive: 0.9,
    tabIdle: 0.28,
    tabRule: 0.16,
    status: 0.34,
    statusMode: 0.75,
    statusModeRed: 0.6,
    gutter: 0.14,
    lineNumber: 0.28,
    plain: 0.75,
    call: 1,
    keyword: 0.85,
    keywordRed: 0.9,
    string: 1.35,
    number: 1.1,
    numberRed: 0.4,
    punctuation: 0.45,
    cursor: 1.1,
    typedFlash: 0.9,
    typedFlashSeconds: 0.3,
    keyFlash: 1.4,
    keyFlashRed: 0.35,
    keyFlashSeconds: 0.22,
    flyer: 1.5,
    flyerRed: 0.25,
    flyerGrow: 1.8,
    flyerRise: 2.5,
  },
  Rm = {
    tabs: [` demon.js x `, ` bugs.js `, ` eyes.js `],
    tabRule: `_`,
    gutter: `|`,
    typing: `-- INSERT --`,
    idle: `-- NORMAL --`,
    line: `Ln `,
    column: `, Col `,
    encoding: `JS  UTF-8  `,
    padColumns: 2,
    numberColumns: 4,
    roomyRows: 15,
    gapRows: 13,
    barRows: 11,
  },
  zm = {
    buildSpread: 1.3,
    buildRandom: 0.55,
    buildFade: 0.3,
    buildFlicker: 22,
    screenOnAt: 1.5,
    screenOnSeconds: 0.35,
    screenOnLevel: 1.3,
    handsInAt: 1.75,
    handsInSeconds: 0.75,
    typingAt: 2.6,
    charsPerSecond: 24,
    charJitter: [0.5, 1.5],
    spaceShare: 0.6,
    enterAt: 0.5,
    lineBreakPause: 0.3,
    blankLinePause: 0.12,
    flight: 0.26,
    holdAfterTyping: 0.5,
    ledBlink: 9,
  },
  Z = {
    unitsAcross: 12,
    restSpread: 3.3,
    armRadius: [1, 1.35],
    pivotDrop: 1.5,
    armMinDrop: 2.5,
    palm: { y: 0.8, half: [1.6, 1], round: 0.5 },
    fingerBase: 1.6,
    fingers: [-1.3, -0.44, 0.44, 1.3],
    fingerLength: [2.4, 3.1, 3.3, 2.9],
    fingerFan: 0.2,
    fingerRadius: [0.33, 0.22],
    phalanges: [0.45, 0.3, 0.25],
    flex: [1, 1.4, 0.9],
    restCurl: 0.18,
    curlMax: 0.8,
    view: 0.45,
    knuckle: 1.3,
    jointSwell: 1.15,
    jointGlow: 0.9,
    bendShade: 0.35,
    thumb: {
      base: [1.4, 0.2],
      angle: 0.85,
      length: 2.1,
      phalanges: [0.55, 0.45],
      flex: [0.7, 0.9],
      radius: [0.44, 0.26],
    },
    claw: { length: 1, bend: 0, radius: [0.3, 0.06] },
    spikes: { at: [1.1, 1.9, 2.7], length: [0.55, 0.8, 0.6], rake: 0.75, sink: 0.7, radius: [0.2, 0.04] },
    handLag: 0.18,
    travel: 0.85,
    travelLimit: [3, 2],
    lookBack: 0.25,
    lookAhead: 0.4,
    focus: 0.2,
    restWeight: 0.12,
    stiffness: 70,
    damping: 12,
    kick: 2.4,
    kickDown: 0.6,
    tilt: 0.3,
    sway: 0.05,
    swayLimit: 0.3,
    turnFollow: 9,
    bob: 0.08,
    bobSpeed: 2.1,
    drift: 0.07,
    driftSpeed: 0.73,
    idleCurl: 0.07,
    idleSpeed: [0.8, 1.7],
    tapLift: 0.12,
    liftCurl: 0.3,
    tapDown: 0.06,
    tapHold: 0.03,
    tapUp: 0.14,
    sympathyCurl: 0.12,
    strikeCurl: 0.12,
    overshoot: 1.4,
    level: 0.13,
    rim: 0.3,
    rimLevel: 1.5,
    sinewFrom: 0.8,
    ridgeLevel: 0.3,
    sinewSlant: 0.45,
    sinewWaves: 0.7,
    veins: [
      { offset: -0.3, amp: 0.16, freq: 2.2, phase: 0 },
      { offset: 0.38, amp: 0.12, freq: 2.9, phase: 1.7 },
    ],
    veinWidth: 0.11,
    veinFrom: 0.4,
    veinRamp: 0.6,
    veinLevel: 0.55,
    veinRed: 0.85,
    pulseWaves: 0.35,
    pulseSpeed: 1.2,
    pulseShare: 0.6,
    tendonSpread: 0.35,
    tendonFrom: 0.1,
    tendonWidth: 0.14,
    tendonLevel: 0.22,
    tendonFlex: 0.9,
    knuckleGlow: 0.3,
    knuckleFlex: 0.4,
    creaseWidth: 0.2,
    creaseDim: 0.4,
    shade: 0.5,
    shadowShift: [0.3, 0.5],
    shadowSoft: 0.3,
    shadowDepth: 0.85,
    clawLevel: 1.1,
    clawRed: 1,
    bodyRed: 0.35,
    shimmerRate: 1.5,
    afterglow: 0.09,
    trail: 0.15,
    flash: 0.35,
    flashDecay: 9,
    dropHeat: 0.04,
    fadeRows: 6,
    tearRate: 16,
    tearShare: 0.3,
    tearBand: 2,
    tearShift: 0.6,
    tearRed: 0.7,
    dropChance: 0.15,
  },
  Bm = {
    centre: [0.5, 0.86],
    spread: 3.6,
    scale: 3,
    reach: 5,
    openLead: 0.6,
    openSeconds: 0.35,
    heatSeconds: 0.8,
    heatGain: 2.2,
    heatHold: 0.4,
    sinkRows: 3,
    fadeRows: 2,
    clearance: 1,
    retractSeconds: 1.1,
    dragSteps: 9,
    closeDelay: 0.6,
    closeSeconds: 1.6,
    closeCurve: 2,
    closeSoft: 0.35,
    crumbleShare: 0.2,
    crumbleSpeed: [1, 4],
    crumbleGravity: 30,
    crumbleSpin: 6,
  },
  Vm = {
    lines: [
      `import { summon } from './demon';`,
      `const demon = summon('site');`,
      `demon.eyes.follow(cursor);`,
      ``,
      `while (bugs.length > 0) {`,
      `  demon.hand.catch(bugs.pop());`,
      `}`,
      `scene.add(new Glyphs(4096));`,
      `renderer.render(scene, camera);`,
    ],
    keywords: [`import`, `from`, `const`, `let`, `while`, `new`, `return`, `export`, `default`],
  },
  Hm = () => Fm.glyphs[Math.floor(Math.random() * Fm.glyphs.length)],
  Um = (e, t, n, r, i, a = 0) => ({ column: t, row: n, char: r, level: i, red: a, x: e.centreX(t), y: e.centreY(n) }),
  Wm = (e, t) => `${e}:${t}`,
  Gm = /'[^']*'|\d+|[A-Za-z_$][\w$]*|\s+|./g,
  Km = new Set(Vm.keywords),
  qm = ` `,
  Jm = `(`,
  Ym = {
    "(": `9`,
    ")": `0`,
    "{": `[`,
    "}": `]`,
    '"': `'`,
    ":": `;`,
    "<": `,`,
    ">": `.`,
    _: `-`,
    "+": `=`,
    "!": `1`,
    "~": "`",
    $: `4`,
  };
function Xm(e, t) {
  return e.startsWith(`'`)
    ? { level: X.string, red: 0 }
    : /^\d/.test(e)
      ? { level: X.number, red: X.numberRed }
      : Km.has(e)
        ? { level: X.keyword, red: X.keywordRed }
        : /^[A-Za-z_$]/.test(e)
          ? { level: t === Jm ? X.call : X.plain, red: 0 }
          : { level: X.punctuation, red: 0 };
}
function Zm(e) {
  let t = e.match(Gm) ?? [],
    n = [];
  return (
    t.forEach((e, r) => {
      let i = Xm(e, t[r + 1]);
      for (let t of e) n.push({ char: t, ...i });
    }),
    n
  );
}
function Qm(e) {
  return e === qm ||
    e ===
      `
`
    ? e
    : (Ym[e] ?? e.toUpperCase());
}
function $m(e) {
  let t = [],
    n = 0;
  return (
    e.forEach((r, i) => {
      let a = Zm(r);
      a.forEach((e, r) => {
        let a = (1 / zm.charsPerSecond) * J(zm.charJitter) * (e.char === qm ? zm.spaceShare : 1);
        ((n += a), t.push({ line: i, column: r, at: n, ...e }));
      });
      let o = r ? zm.lineBreakPause : zm.blankLinePause;
      (i < e.length - 1 &&
        t.push({
          line: i,
          column: a.length,
          at: n + o * zm.enterAt,
          char: `
`,
          level: 0,
          red: 0,
        }),
        (n += o));
    }),
    { strokes: t, duration: n }
  );
}
var eh = 14,
  th = Z.fingers.length,
  nh = th + 1,
  rh = Z.fingerBase + Math.max(...Z.fingerLength) + Z.claw.length;
function ih(e) {
  if (e === th) {
    let { thumb: e } = Z;
    return { base: e.base, angle: e.angle, length: e.length, phalanges: e.phalanges, flex: e.flex, radius: e.radius };
  }
  let t = Z.fingers[e];
  return {
    base: [t, Z.fingerBase],
    angle: t * Z.fingerFan,
    length: Z.fingerLength[e],
    phalanges: Z.phalanges,
    flex: Z.flex,
    radius: Z.fingerRadius,
  };
}
var ah = Array.from({ length: nh }, (e, t) => ih(t)),
  oh = (e) => ah[e],
  sh = (e, t = 0) => ({ angle: ah[e].angle, curl: Z.restCurl + t }),
  ch = (e, t, n) => ({ angle: q([e.angle, t.angle], n), curl: q([e.curl, t.curl], n) }),
  lh = (e, t, n, r) => [e * Math.cos(n) * r, (t * Math.cos(n) - Math.sin(n) * Z.view) * r];
function uh(e, { angle: t, curl: n }) {
  let r = ah[e],
    i = Math.sin(t),
    a = Math.cos(t),
    [o, s] = r.base,
    c = 0,
    l = [[o, s]],
    u = [];
  r.phalanges.forEach((e, t) => {
    c += r.flex[t] * n;
    let [d, f] = lh(i, a, c, r.length * e);
    ((o += d), (s += f), l.push([o, s]), u.push(c));
  });
  let [d, f] = lh(i, a, c + Z.claw.bend, Z.claw.length);
  return { points: l, bends: u, claw: [o + d, s + f] };
}
var dh = (e) => uh(e, sh(e)).points.at(-1);
function fh(e, [t, n]) {
  let r = ah[e],
    i = t - r.base[0],
    a = n - r.base[1],
    o = (e) => {
      let t = 0,
        n = 0,
        o = 0;
      r.phalanges.forEach((i, a) => {
        ((o += r.flex[a] * e), (t += Math.cos(o) * i * r.length), (n += Math.sin(o) * i * r.length));
      });
      let s = a + n * Z.view;
      return { gap: t - Math.hypot(i, s), angle: Math.atan2(i, s) };
    },
    s = 0,
    c = Z.curlMax;
  if (o(s).gap <= 0) return { angle: o(s).angle, curl: s };
  if (o(c).gap >= 0) return { angle: o(c).angle, curl: c };
  for (let e = 0; e < eh; e += 1) {
    let e = (s + c) / 2;
    o(e).gap > 0 ? (s = e) : (c = e);
  }
  let l = (s + c) / 2;
  return { angle: o(l).angle, curl: l };
}
var ph = 61.3,
  mh = 23.9,
  hh = 4.1,
  gh = 7.7,
  _h = 31.7,
  vh = 53.3,
  yh = 4096,
  bh = 1e-6,
  xh = 1e-6,
  Sh = `#000`,
  Ch = Z.palm,
  wh = `arm`,
  Th = `palm`,
  Eh = `knuckle`,
  Dh = `digit`,
  Oh = `claw`,
  kh = { x: 0, y: 0, char: ``, level: 0, red: 0, fade: 1 },
  Ah = 0,
  jh = null,
  Mh = (e, t, n) => {
    let r = Math.floor(n * Z.shimmerRate + Y(e * gh + t));
    return Fm.glyphs[Math.floor(Y(e * ph + t * mh + r * hh) * Fm.glyphs.length)];
  },
  Nh = (e, t, n, r, i, a, o, s = -1) => ({
    ax: e,
    ay: t,
    bx: n,
    by: r,
    ra: i,
    rb: a,
    kind: o,
    finger: s,
    left: Math.min(e, n),
    right: Math.max(e, n),
    bottom: Math.min(t, r),
    top: Math.max(t, r),
    reach: Math.max(i, a),
  });
function Ph(e, t, n, r, i, a) {
  let o = i - n,
    s = a - r;
  return (
    (Ah = K(((e - n) * o + (t - r) * s) / Math.max(o * o + s * s, bh))),
    Math.hypot(e - n - o * Ah, t - r - s * Ah)
  );
}
function Fh(e, t, n) {
  return Ph(e, t, n.ax, n.ay, n.bx, n.by) - (n.ra + (n.rb - n.ra) * Ah);
}
function Ih(e, t) {
  let [n, r] = Ch.half,
    i = Math.abs(e) - n + Ch.round,
    a = Math.abs(t - Ch.y) - r + Ch.round;
  return Math.hypot(Math.max(i, 0), Math.max(a, 0)) + Math.min(Math.max(i, a), 0) - Ch.round;
}
function Lh(e, t, n) {
  let r = (t - e.palmX) / e.unit,
    i = (e.palmY - n) / e.unit,
    a = Math.cos(e.angle),
    o = Math.sin(e.angle);
  return [e.side * (r * a + i * o), i * a - r * o];
}
function Rh(e, t, n) {
  let r = e.side * t,
    i = Math.cos(e.angle),
    a = Math.sin(e.angle);
  return [e.palmX + (r * i - n * a) * e.unit, e.palmY - (r * a + n * i) * e.unit];
}
function zh(e, t, n) {
  let { points: r, bends: i, claw: a } = uh(t, n),
    { radius: o, phalanges: s } = oh(t),
    c = 0,
    l = [o[0], ...s.map((e) => ((c += e), q(o, c)))];
  l[1] *= Z.jointSwell;
  let [u] = r,
    d = o[0] * Z.knuckle;
  e.parts.push(Object.assign(Nh(u[0], u[1], u[0], u[1], d, d, Eh, t), { glow: Z.knuckleGlow }));
  for (let n = 0; n < i.length; n += 1) {
    let [a, o] = r[n],
      [s, c] = r[n + 1];
    e.parts.push(Object.assign(Nh(a, o, s, c, l[n], l[n + 1], Dh, t), { bend: i[n] }));
  }
  let [f, p] = r[1],
    m = Math.max(Math.sin(i[1] - i[0]), 0);
  (e.parts.push(Object.assign(Nh(f, p, f, p, l[1], l[1], Eh, t), { glow: Z.jointGlow * m })),
    (e.joints[t] = r.slice(1, -1)));
  let [h, g] = r.at(-1);
  e.parts.push(Nh(h, g, a[0], a[1], Z.claw.radius[0], Z.claw.radius[1], Oh, t));
}
function Bh(e, t) {
  let n = Math.max(Math.hypot(t[0], t[1]), bh),
    r = [t[0] / n, t[1] / n],
    i = [-r[1], r[0]];
  ((e.arm = { along: r, normal: i, length: n }),
    e.parts.push(Nh(0, 0, t[0], t[1], Z.armRadius[0], Z.armRadius[1], wh)));
  let { spikes: a } = Z;
  a.at.forEach((t, o) => {
    if (t > n) return;
    let s = q(Z.armRadius, t / n) * a.sink,
      c = r[0] * t - i[0] * s,
      l = r[1] * t - i[1] * s,
      u = -i[0] + r[0] * a.rake,
      d = -i[1] + r[1] * a.rake,
      f = a.length[o] / Math.hypot(u, d);
    e.parts.push(Nh(c, l, c + u * f, l + d * f, a.radius[0], a.radius[1], Oh));
  });
}
function Vh(e, t) {
  let n = { parts: [], joints: [], arm: null, box: null };
  (Bh(n, t), e.forEach((e, t) => zh(n, t, e)));
  let r = { left: -Ch.half[0], right: Ch.half[0], bottom: Ch.y - Ch.half[1], top: Ch.y + Ch.half[1] };
  for (let e of n.parts) {
    let t = Math.max(e.ra, e.rb);
    ((r.left = Math.min(r.left, e.ax - t, e.bx - t)),
      (r.right = Math.max(r.right, e.ax + t, e.bx + t)),
      (r.bottom = Math.min(r.bottom, e.ay - t, e.by - t)),
      (r.top = Math.max(r.top, e.ay + t, e.by + t)));
  }
  return ((n.box = r), n);
}
function Hh(e, t, n) {
  let r = Ih(e, t),
    i = null;
  for (let a of n) {
    let n = Math.max(a.left - e, e - a.right, 0),
      o = Math.max(a.bottom - t, t - a.top, 0),
      s = r + a.reach + xh;
    if (s > 0 && n * n + o * o > s * s) continue;
    let c = Fh(e, t, a);
    c < r && ((r = c), (i = a));
  }
  return ((jh = i), r);
}
var Uh = (e, t, n, r) => {
  let i = Math.floor(e / Z.tearBand);
  return Y(i * _h + t) >= Z.tearShare
    ? 0
    : Math.round(((Y(i + t * _h) * 2 - 1) * Z.tearShift * n) / r.column) * r.column;
};
function Wh(e, t, n, r) {
  let i = e * n.along[0] + t * n.along[1],
    a = e * n.normal[0] + t * n.normal[1],
    o = i > Z.sinewFrom ? Z.ridgeLevel * Math.abs(Math.sin((i + a * Z.sinewSlant) * Math.PI * Z.sinewWaves)) : 0,
    s = 0;
  for (let e of Z.veins) {
    let t = a - e.offset - e.amp * Math.sin(i * e.freq + e.phase);
    s = Math.max(s, Math.exp(-((t / Z.veinWidth) ** 2)));
  }
  s *= al(Z.veinFrom, Z.veinFrom + Z.veinRamp, i);
  let c = (Math.sin((i * Z.pulseWaves + r * Z.pulseSpeed) * el) + 1) / 2,
    l = q([1 - Z.pulseShare, 1], c);
  return { level: o + Z.veinLevel * s * l, red: q([Z.bodyRed, Z.veinRed * l], s) };
}
function Gh(e, t, n) {
  let r = 0;
  return (
    Z.fingers.forEach((i, a) => {
      let o = Ph(e, t, i * Z.tendonSpread, Z.tendonFrom, i, Z.fingerBase);
      r += Math.exp(-((o / Z.tendonWidth) ** 2)) * (Z.tendonLevel + n[a] * Z.tendonFlex);
    }),
    r
  );
}
function Kh(e, t, n, r, i, a) {
  let { shape: o, flex: s } = i,
    c = Math.exp(-((n / Z.rim) ** 2)),
    l = Z.level + Z.rimLevel * c,
    u = Z.bodyRed,
    d = r ? r.kind : Th;
  if (d === wh) {
    let n = Wh(e, t, o.arm, a);
    ((l += n.level), (u = n.red));
  } else if (d === Th) l += Gh(e, t, s);
  else if (d === Eh) l += r.glow + s[r.finger] * Z.tendonFlex * Z.knuckleFlex;
  else if (d === Dh) {
    let n = 0;
    for (let [i, a] of o.joints[r.finger])
      n = Math.max(n, Math.exp(-((Math.hypot(e - i, t - a) / Z.creaseWidth) ** 2)));
    l *= (1 - (1 - Z.creaseDim) * n) * (1 - Z.bendShade * K(Math.sin(r.bend)));
  }
  let f = 1 - Z.shade * K((e + Ch.half[0]) / (Ch.half[0] * 2));
  return { level: l * f, red: u };
}
function qh(e) {
  let { box: t } = e.shape,
    n = [
      [t.left, t.bottom],
      [t.left, t.top],
      [t.right, t.bottom],
      [t.right, t.top],
    ].map(([t, n]) => Rh(e, t, n));
  return {
    left: Math.min(...n.map(([e]) => e)),
    right: Math.max(...n.map(([e]) => e)),
    top: Math.min(...n.map(([, e]) => e)),
    bottom: Math.max(...n.map(([, e]) => e)),
  };
}
function Jh(e, t, n, r, i) {
  let { unit: a, shape: o, torn: s, sink: c, palmX: l, palmY: u, side: d } = t,
    f = Math.cos(t.angle),
    p = Math.sin(t.angle),
    m = Math.floor(n * Z.tearRate);
  if (s && Y(m * vh + t.side) < Z.dropChance) return;
  let { box: h } = o,
    g = qh(t),
    _ = Math.max(e.rowAt(g.top), 0),
    v = Math.min(e.rowAt(g.bottom + Z.shadowShift[1] * a), e.rowAt(Math.min(r, c.clip))),
    y = r - Z.fadeRows * e.row,
    b = s ? Z.tearShift * a : 0,
    [x, S] = Z.shadowShift.map((e) => e * a),
    C = Z.shadowSoft;
  for (let w = _; w <= v; w += 1) {
    let _ = e.centreY(w),
      v = s ? Uh(w, m, a, e) : 0,
      T = (1 - al(y, r, _)) * (1 - al(c.from, c.clip, _));
    if (T <= 0) continue;
    let E = e.columnAt(g.right + b + x);
    for (let r = e.columnAt(g.left - b); r <= E; r += 1) {
      let s = e.centreX(r),
        c = (s - v - l) / a,
        m = (u - _) / a,
        g = d * (c * f + m * p),
        y = m * f - c * p,
        b = y <= h.top && y >= h.bottom && g >= h.left && g <= h.right,
        E = b ? Hh(g, y, o.parts) : 1 / 0,
        D = b ? jh : null;
      if (E > 0) {
        let e = (s - v - x - l) / a,
          t = (u - (_ - S)) / a,
          n = d * (e * f + t * p),
          r = t * f - e * p;
        if (r <= h.top + C && r >= h.bottom - C && n >= h.left - C && n <= h.right + C) {
          let e = Hh(n, r, o.parts);
          e < C && i.erased.push({ x: s, y: _, fade: T * Z.shadowDepth * al(C, -C, e) });
        }
        continue;
      }
      i.erased.push({ x: s, y: _, fade: T });
      let O = D?.kind === Oh,
        ee = O ? null : Kh(g, y, E, D, t, n);
      i.painted.push({
        column: r,
        row: w,
        x: s,
        y: _,
        fade: T,
        claw: O,
        level: O ? Z.clawLevel : ee.level,
        red: O ? Z.clawRed : v ? Z.tearRed : ee.red,
      });
    }
  }
}
function Yh() {
  let e = new Map(),
    t = 0;
  return {
    clear() {
      e.clear();
    },
    paint(n, r, { erased: i, painted: a }, o, s) {
      t += 1;
      for (let n of a) {
        let r = n.row * yh + n.column,
          i = e.get(r);
        if (!i) {
          ((n.heat = 1), (n.flash = Z.flash), (n.seen = t), e.set(r, n));
          continue;
        }
        let a = i.seen >= t - 1 ? i.flash : Z.flash;
        ((i.x = n.x),
          (i.y = n.y),
          (i.fade = n.fade),
          (i.claw = n.claw),
          (i.level = n.level),
          (i.red = n.red),
          (i.heat = 1),
          (i.flash = a),
          (i.seen = t));
      }
      let c = Math.exp(-s / Z.afterglow),
        l = Math.exp(-s * Z.flashDecay);
      for (let [n, r] of e)
        ((r.flash *= l),
          r.seen !== t && ((r.heat = (r.seen === t - 1 ? Z.trail : r.heat) * c), r.heat < Z.dropHeat && e.delete(n)));
      (n.save(), (n.globalCompositeOperation = `destination-out`), (n.fillStyle = Sh));
      for (let e of i) ((n.globalAlpha = e.fade), n.fillRect(e.x - r.column / 2, e.y - r.row / 2, r.column, r.row));
      n.restore();
      for (let t of e.values())
        ((kh.x = t.x),
          (kh.y = t.y),
          (kh.char = Mh(t.column, t.row, o)),
          (kh.level = t.level + t.flash),
          (kh.red = t.red),
          (kh.fade = t.heat * t.fade),
          _l(n, r, kh, t.claw));
    },
  };
}
var Xh = `[`,
  Zh = `]`,
  Qh = 3;
function $h(e, t, n, r) {
  let i = [],
    a = Math.round(n * Lm.top),
    o = a + Lm.edgeRows * 2 + (Lm.rows.length - 1) * Lm.rowStep,
    s = Math.max(o - a, 1),
    c = Math.min(1, (t * Lm.fill) / (Lm.units * Lm.pitch[1] + Lm.slack * 2)),
    l = (e) => q(Lm.pitch, (e - a) / s) * c,
    u = (e) => Math.round(((Lm.units + Lm.slack * 2) * l(e)) / 2);
  for (let t = a; t <= o; t += 1) {
    let n = u(t);
    if (t === a || t === o)
      for (let o = r - n; o <= r + n; o += 1) i.push(Um(e, o, t, Hm(), t === a ? X.caseTop : X.caseBottom));
    else (i.push(Um(e, r - n, t, Hm(), X.caseSide)), i.push(Um(e, r + n, t, Hm(), X.caseSide)));
  }
  let d = u(o);
  for (let t = 1; t <= Lm.frontRows; t += 1) {
    let n = d - (t - 1);
    for (let a = r - n; a <= r + n; a += 1) i.push(Um(e, a, o + t, Hm(), X.caseFront));
  }
  for (let t = r - d; t <= r + d; t += 1) i.push(Um(e, t, o + Lm.frontRows + 1, Lm.shadow, X.shadow));
  let f = Array.from({ length: Lm.leds }, (t, n) =>
    Um(e, r + u(a) - Lm.ledInset - n * Lm.ledStep, a + 1, Lm.led, X.keyLed),
  );
  i.push(...f);
  let p = [];
  Lm.rows.forEach((t, n) => {
    let o = a + Lm.edgeRows + n * Lm.rowStep,
      s = l(o),
      c = r - (t.reduce((e, t) => e + (t.units ?? 1), 0) * s) / 2;
    for (let n of t) {
      let t = (n.units ?? 1) * s,
        r = Math.round(c),
        a = Math.round(c + t) - 1;
      c += t;
      let l = n.text ?? n.id,
        u = { id: n.id, row: o, column: Math.round((r + a) / 2), cells: [], faces: [] };
      a - r + 1 >= Qh && u.cells.push(Um(e, r, o, Xh, X.bracket), Um(e, a, o, Zh, X.bracket));
      let d = Math.max(a - r - 1, 1),
        f = l.slice(0, d),
        m = Math.round((r + a) / 2 - (f.length - 1) / 2);
      [...f].forEach((t, n) => u.cells.push(Um(e, m + n, o, t, X.key)));
      for (let t = r; t <= a; t += 1) u.faces.push(Um(e, t, o + 1, Lm.face, X.keyFace));
      ((u.x = e.centreX(u.column)), (u.y = e.centreY(o)), i.push(...u.cells, ...u.faces), p.push(u));
    }
  });
  let m = p.find((e) => e.id === Lm.homeKey);
  return { cells: i, keys: p, leds: f, homeY: m ? m.y : e.centreY(a), width: d * 2 * e.column };
}
function eg(e, t, n) {
  let r = new Map(),
    i = (t, n, i, a, o = 0) => r.set(Wm(t, n), Um(e, t, n, i, a, o)),
    a = Math.floor(t / 2),
    o = Math.round(t * Im.half),
    s = { left: a - o, right: a + o, top: Math.round(n * Im.top), bottom: Math.round(n * Im.bottom) },
    c = {
      left: s.left + Im.bezelColumns,
      right: s.right - Im.bezelColumns,
      top: s.top + Im.bezelTop,
      bottom: s.bottom - Im.chinRows,
    },
    l = s.bottom - s.top;
  for (let e = s.top; e <= s.bottom; e += 1)
    for (let t = s.left; t <= s.right; t += 1) {
      let n = t >= c.left && t <= c.right && e >= c.top && e <= c.bottom,
        r = (t === c.left || t === c.right) && (e === c.top || e === c.bottom),
        a = (t === s.left || t === s.right) && (e === s.top || e === s.bottom);
      if ((n && !r) || a) continue;
      let o = t >= c.left - 1 && t <= c.right + 1 && e >= c.top - 1 && e <= c.bottom + 1,
        u = X.bezelBody * (1 - (X.bezelFall * (e - s.top)) / l);
      (t === s.left || e === s.top
        ? (u = X.bezelLight)
        : t === s.right || e === s.bottom
          ? (u = X.bezelDark)
          : r || (o && (t === c.left - 1 || e === c.top - 1))
            ? (u = X.innerShadow)
            : o && (t === c.right + 1 || e === c.bottom + 1) && (u = X.innerLight),
        i(t, e, Hm(), u));
    }
  let u = (e, t, n) => {
      for (let i = t - Im.plate; i <= n + Im.plate; i += 1) r.delete(Wm(i, e));
    },
    d = c.bottom + Math.ceil(Im.chinRows / 2),
    f = (Im.brand.length - 1) * Im.brandStep,
    p = a - Math.round(f / 2);
  (u(d, p, p + f),
    [...Im.brand].forEach((e, t) => {
      i(p + t * Im.brandStep, d, e, X.brand);
    }));
  let m = { column: c.right - 1, row: d };
  (u(d, m.column - Im.buttons.length * Im.buttonStep, m.column),
    i(m.column, m.row, Im.led, X.ledOff, X.ledRed),
    Im.buttons.forEach((e, t) => {
      i(m.column - (t + 1) * Im.buttonStep, d, e, X.button);
    }));
  let h = s.top + Math.floor(Im.bezelTop / 2);
  (u(h, a, a), i(a, h, Im.camera, X.camera));
  let g = Math.max(Math.round(t * Im.neckHalf), 1),
    _ = Math.round(n * Im.neckBottom);
  for (let e = a - g - 1; e <= a + g + 1; e += 1) i(e, s.bottom + 1, Im.hinge, X.hinge);
  for (let e = s.bottom + 2; e <= _; e += 1)
    for (let t = a - g; t <= a + g; t += 1) {
      let n = Math.abs(t - a) === g;
      i(t, e, Hm(), t === a ? X.neckLight : n ? X.neckEdge : X.neck);
    }
  let v = Math.round(t * Im.baseHalf),
    y = Math.round(v * Im.baseTop),
    b = Math.round(v * Im.shadowSpread);
  for (let e = a - b; e <= a + b; e += 1) {
    let t = Math.abs(e - a);
    (t <= y && i(e, _ + 1, Hm(), X.baseTop), t <= v && i(e, _ + 2, Hm(), X.base), i(e, _ + 3, Im.shadow, X.shadow));
  }
  return { cells: [...r.values()], screen: c, centre: a, led: m };
}
function tg(e, t, n) {
  let r = n.left * t.column,
    i = n.top * t.row,
    a = (n.right + 1) * t.column,
    o = (n.bottom + 1) * t.row,
    s = a - r,
    c = o - i,
    l = e.createRadialGradient(r + s / 2, i + c / 2, 0, r + s / 2, i + c / 2, Math.hypot(s, c) / 2);
  (l.addColorStop(0, X.glass),
    l.addColorStop(1, X.glassEdge),
    (e.fillStyle = l),
    e.fillRect(r, i, s, c),
    (e.fillStyle = X.scanline));
  for (let i = n.top; i <= n.bottom; i += 2) e.fillRect(r, i * t.row, s, t.row / 2);
  let u = e.createLinearGradient(r, i, a, o);
  (u.addColorStop(X.glareFrom, X.glassEdge),
    u.addColorStop((X.glareFrom + X.glareTo) / 2, X.glare),
    u.addColorStop(X.glareTo, X.glassEdge),
    (e.fillStyle = u),
    e.fillRect(r, i, s, c));
}
var ng = 1,
  rg = 1,
  ig = 0,
  ag = `#fff`,
  og = `rgba(255, 255, 255, 0)`,
  sg = (e) => 1 - (1 - e) ** 3,
  cg = (e, t, n) => K((e - t) / n);
function lg(
  e,
  t,
  n,
  {
    scale: r = Bm.scale,
    tries: i = 1,
    crumbs: a = 1 / 0,
    cracks: o = !0,
    shrink: s = !0,
    fadeSeconds: c = Bm.closeSeconds,
  } = {},
) {
  let l = W.coreRows * e.row * r,
    u = l * Bm.reach,
    d = bu(t.x, t.y, ng, l, e, ig);
  o || Object.assign(d, { rays: [], segments: [] });
  let f = e.columnAt(t.x - u),
    p = e.rowAt(t.y - u),
    m = { left: f * e.column, top: p * e.row, columns: e.columnAt(t.x + u) - f + 1, rows: e.rowAt(t.y + u) - p + 1 },
    h = e.row * (W.rimPush + W.shardJitter) * 2,
    g = { left: m.left - h, top: m.top - h, width: m.columns * e.column + h * 2, height: m.rows * e.row + h * 2 },
    _ = [];
  for (let t = 0; t < m.rows; t += 1)
    for (let n = 0; n < m.columns; n += 1) {
      let r = Du([d], e.centreX(f + n), e.centreY(p + t), u, e, i);
      r?.broken && _.push(Object.assign(r.broken, { column: n, row: t }));
    }
  let v = (r) => {
      let i = document.createElement(`canvas`);
      ((i.width = Math.ceil(g.width * n)), (i.height = Math.ceil(g.height * n)));
      let a = i.getContext(`2d`);
      (a.setTransform(n, 0, 0, n, -g.left * n, -g.top * n),
        Ou(a, r, m, e),
        vl(a, e),
        r.forEach((t) => _l(a, e, t, !0)),
        a.setTransform(1, 0, 0, 1, 0, 0),
        (a.globalCompositeOperation = `destination-in`));
      let o = (t.x - g.left) * n,
        s = (t.y - g.top) * n,
        c = a.createRadialGradient(o, s, 0, o, s, u * n);
      return (
        c.addColorStop(0, ag),
        c.addColorStop(Bm.closeSoft, ag),
        c.addColorStop(1, og),
        (a.fillStyle = c),
        a.fillRect(0, 0, i.width, i.height),
        i
      );
    },
    y = v(_),
    b = v(_.map((e) => ({ ...e, level: Math.max(e.level, U.brightness) * Bm.heatGain, red: rg }))),
    x = Math.min(Bm.crumbleShare, a / Math.max(_.length, 1)),
    S = _.filter(() => Math.random() < x).map((t) => {
      let n = Math.random() * el,
        r = J(Bm.crumbleSpeed) * e.row;
      return {
        x: t.x,
        y: t.y,
        char: t.char,
        color: pl(t.level, t.red, dl(t.level) * t.fade, !1),
        vx: Math.cos(n) * r,
        vy: Math.sin(n) * r,
        spin: rl(Bm.crumbleSpin),
      };
    }),
    C = (e, n, r) => {
      let i = Math.max(t.x - r, g.left),
        a = Math.max(t.y - r, g.top),
        o = Math.min(t.x + r, g.left + g.width),
        s = Math.min(t.y + r, g.top + g.height);
      if (o <= i || s <= a) return;
      let c = n.width / g.width;
      e.drawImage(n, (i - g.left) * c, (a - g.top) * c, (o - i) * c, (s - a) * c, i, a, o - i, s - a);
    },
    w = (e, n, r) => {
      let i = u * sg(cg(n, r, Bm.openSeconds));
      (e.save(), e.beginPath(), e.arc(t.x, t.y, i, 0, el), e.clip(), C(e, y, i));
      let a = Math.max(1 - cg(n, r, Bm.heatSeconds), Bm.heatHold);
      (a > 0 && ((e.globalAlpha = a), C(e, b, i)), e.restore());
    },
    T = (n, r) => {
      let i = r / Bm.closeSeconds,
        a = al(0, 1, i),
        o = s ? (1 - a) ** Bm.closeCurve : 1,
        l = s ? 1 - a * a : 1 - al(0, c, r);
      o > 0 &&
        l > 0 &&
        ((n.globalAlpha = l),
        n.drawImage(y, t.x + (g.left - t.x) * o, t.y + (g.top - t.y) * o, g.width * o, g.height * o));
      let u = (Bm.crumbleGravity * e.row * r * r) / 2,
        d = n.getTransform();
      (vl(n, e), (n.globalAlpha = 1 - i));
      for (let e of S)
        (n.translate(e.x + e.vx * r, e.y + e.vy * r + u),
          n.rotate(e.spin * r),
          (n.fillStyle = e.color),
          n.fillText(e.char, 0, 0),
          n.setTransform(d));
      n.globalAlpha = 1;
    };
  return {
    draw(e, t, n, r) {
      t < n || t >= r + Bm.closeSeconds || (t < r ? w(e, t, n) : T(e, t - r));
    },
    dispose() {
      ((y.width = 0), (b.width = 0));
    },
  };
}
var ug = ` `,
  dg = nh - 1,
  fg = 2,
  pg = [1, -1],
  mg = 1 / 120,
  hg = 17.1,
  gg = 5.3,
  _g = 2.9,
  vg = 0.6,
  yg = (e, t, n) => K((e - t) / n),
  bg = (e) => e ** 3,
  xg = (e) => 1 + (Z.overshoot + 1) * (e - 1) ** 3 + Z.overshoot * (e - 1) ** 2,
  Sg = (e, t) => Math.min(Math.max(e, -t), t);
function Cg({ unit: e, centreX: t, portals: n, sink: r, homeY: i, strokes: a, strokeTime: o, inAt: s, retractAt: c }) {
  let l = i + dh(fg)[1] * e,
    u = r.clip + (rh + Bm.clearance) * e,
    d = r.clip + Z.pivotDrop * e,
    f = pg.map((r, i) => ({
      index: i,
      side: r,
      restX: t - r * Z.restSpread * e,
      pivotX: n[i].x,
      inAt: s + i * Z.handLag,
      outAt: c + i * Z.handLag,
      strokes: [],
      from: 0,
      hit: 0,
      x: 0,
      y: 0,
      vx: 0,
      vy: 0,
      angle: 0,
      curlSpeed: Array.from({ length: nh }, (e, t) => q(Z.idleSpeed, Y(i * hg + t))),
      curlPhase: Array.from({ length: nh }, (e, t) => Y(i * gg + t * hg) * Math.PI * 2),
    })),
    p = (t, n) => {
      let [r, i] = dh(n);
      return [t.restX + t.side * r * e, l - i * e];
    },
    m = 1;
  for (let e of a) {
    let { key: n } = e;
    if (!n) continue;
    if (n.id === ug) {
      let t = f[1 - m],
        r = p(t, dg)[0];
      (Object.assign(e, { hand: t.index, finger: dg, aimX: Math.min(Math.max(r, n.faces[0].x), n.faces.at(-1).x) }),
        t.strokes.push(e));
      continue;
    }
    let r = f[n.x < t ? 0 : 1];
    m = r.index;
    let i = 1 / 0;
    for (let t = 0; t < dg; t += 1) {
      let a = Math.abs(p(r, t)[0] - n.x);
      a < i && ((i = a), (e.finger = t));
    }
    (Object.assign(e, { hand: r.index, aimX: n.x }), r.strokes.push(e));
  }
  let h = (t, n) => {
      let [r, i] = p(t, n.finger);
      return [Sg((n.aimX - r) * Z.travel, Z.travelLimit[0] * e), Sg((n.key.y - i) * Z.travel, Z.travelLimit[1] * e)];
    },
    g = (e, t) => {
      for (; e.from < e.strokes.length && o(e.strokes[e.from]) < t - Z.lookBack - Z.tapLift;) e.from += 1;
      let n = Z.restWeight,
        r = 0,
        i = 0;
      for (let a = e.from; a < e.strokes.length; a += 1) {
        let s = e.strokes[a],
          c = o(s) - t;
        if (c > Z.lookAhead) break;
        if (c < -Z.lookBack) continue;
        let l = Math.exp(-((c / Z.focus) ** 2)),
          [u, d] = h(e, s);
        ((r += u * l), (i += d * l), (n += l));
      }
      return [r / n, i / n];
    },
    _ = (t, n) => {
      for (; t.hit < t.strokes.length && o(t.strokes[t.hit]) <= n;) {
        let n = t.strokes[t.hit],
          r = n.aimX - (t.restX + t.x),
          i = n.key.y - (l + t.y),
          a = Math.max(Math.hypot(r, i), 1);
        ((t.vx += (r / a) * Z.kick * e), (t.vy += (i / a) * Z.kick * e + Z.kickDown * e), (t.hit += 1));
      }
    },
    v = (e, [t, n], r) => {
      for (let i = r; i > 0; i -= mg) {
        let r = Math.min(i, mg);
        ((e.vx += ((t - e.x) * Z.stiffness - e.vx * Z.damping) * r),
          (e.vy += ((n - e.y) * Z.stiffness - e.vy * Z.damping) * r),
          (e.x += e.vx * r),
          (e.y += e.vy * r));
      }
    },
    y = (e, t) => {
      let n = o(e),
        r = n - Z.tapDown;
      if (t < r) return { press: 0, lift: al(r - Z.tapLift, r, t) };
      if (t < n) {
        let e = bg(yg(t, r, Z.tapDown));
        return { press: e, lift: 1 - e };
      }
      return { press: 1 - al(n + Z.tapHold, n + Z.tapHold + Z.tapUp, t), lift: 0 };
    },
    b = (e, t, n) => {
      let r = Array(nh).fill(0),
        i = Array(nh).fill(0),
        a = Array(nh).fill(null);
      for (let s = e.from; s < e.strokes.length; s += 1) {
        let c = e.strokes[s],
          l = o(c);
        if (l - Z.tapDown - Z.tapLift > n) break;
        if (n > l + Z.tapHold + Z.tapUp) continue;
        let { finger: u } = c,
          d = y(c, n);
        if (((i[u] = Math.max(i[u], d.lift)), d.press >= r[u])) {
          r[u] = d.press;
          let e = fh(u, Lh(t, c.aimX, c.key.y));
          a[u] = { angle: e.angle, curl: e.curl + Z.strikeCurl };
        }
      }
      let s = [],
        c = [];
      for (let t = 0; t < nh; t += 1) {
        let o = (Z.idleCurl * (Math.sin(n * e.curlSpeed[t] + e.curlPhase[t]) + 1)) / 2,
          l = t === dg ? 0 : Math.max(r[t - 1] ?? 0, t + 1 < dg ? r[t + 1] : 0),
          u = sh(t, o - Z.liftCurl * i[t] + Z.sympathyCurl * l);
        (s.push(a[t] ? ch(u, a[t], r[t]) : u), c.push(Math.max(r[t], i[t])));
      }
      return { poses: s, flex: c };
    },
    x = (t, n, i) => {
      (_(t, n), v(t, g(t, n), i));
      let a = xg(yg(n, t.inAt, zm.handsInSeconds)),
        o = yg(n, t.outAt, Bm.retractSeconds),
        s = bg(Math.floor(o * Bm.dragSteps) / Bm.dragSteps),
        c = (1 - a + s) * (u - l),
        f = n * Z.bobSpeed + t.index * _g,
        p = t.restX + t.x + Math.sin(n * Z.driftSpeed + t.index * _g) * Z.drift * e,
        m = l + t.y + (Math.sin(f) + Math.sin(f * vg) * vg) * Z.bob * e + c,
        h = Math.max(d, m + Z.armMinDrop * e),
        y = -Math.atan2(p - t.pivotX, h - m) * Z.tilt + Sg((t.vx / e) * Z.sway, Z.swayLimit);
      t.angle += (y - t.angle) * (1 - Math.exp(-Z.turnFollow * i));
      let x = { palmX: p, palmY: m, side: t.side, unit: e, angle: t.angle },
        { poses: S, flex: C } = b(t, x, n);
      return { ...x, shape: Vh(S, Lh(x, t.pivotX, h)), flex: C, torn: a < 1 || o > 0, sink: r };
    };
  return {
    update(e, t) {
      return f.filter((t) => e >= t.inAt && e < t.outAt + Bm.retractSeconds).map((n) => x(n, e, t));
    },
  };
}
var wg = ` `,
  Tg = `-`,
  Eg = `=`,
  Dg = 17.3,
  Og = 0.3,
  kg = 0.3,
  Ag = 0.04,
  jg = 0.8,
  Mg = zm.buildSpread + zm.buildFade,
  Ng = [-1, 1],
  Pg = (e, t, n) => K((e - t) / n),
  Fg = (e) => 1 - (1 - e) ** 3,
  Ig = (e) => (e < 0.5 ? 4 * e ** 3 : 1 - (-2 * e + 2) ** 3 / 2),
  Lg = (e) =>
    e.char !== wg &&
    e.char !==
      `
`;
function Rg(e, { reducedMotion: t = !1 } = {}) {
  let n = e.getContext(`2d`),
    r = document.createElement(`canvas`),
    i = document.createElement(`canvas`),
    a = document.createElement(`canvas`),
    { strokes: o, duration: s } = $m(Vm.lines),
    c = zm.typingAt + s,
    l = c + zm.flight,
    u = c + zm.holdAfterTyping,
    d = Ng.map((e, t) => ({
      openAt: zm.handsInAt + t * Z.handLag - Bm.openLead,
      closeAt: u + t * Z.handLag + Bm.retractSeconds + Bm.closeDelay,
    })),
    f = Math.max(...d.map((e) => e.closeAt)),
    p = Math.max(f + Bm.closeSeconds, l),
    m = zm.screenOnAt + zm.screenOnSeconds,
    h = new Map(),
    g = [],
    _ = Yh(),
    v = 0,
    y = 0,
    b = 0,
    x = 1,
    S = null,
    C = null,
    w = null,
    T = null,
    E = [],
    D = null,
    O = [],
    ee = 0,
    k = 0,
    A = !1,
    j = !1,
    M = 0,
    N = 0,
    te = 0,
    ne = 0,
    re = -1 / 0,
    ie = 0,
    P = !1,
    ae = !1,
    oe = null,
    se = (e) => zm.typingAt + e.at,
    ce = (e) => se(e) + zm.flight,
    F = (e, t, n, r, i) => Um(S, e, t, n, r, i),
    I = (e) => T.column + Rm.numberColumns + e.column,
    L = (e, t) => t <= T.lastRow && e <= T.lastColumn,
    R = (e) => {
      ((e.width = Math.round(v * x)), (e.height = Math.round(b * x)));
      let t = e.getContext(`2d`);
      return (t.setTransform(x, 0, 0, x, 0, 0), vl(t, S), t);
    },
    z = () => {
      let { screen: e } = C,
        t = e.bottom - e.top + 1,
        n = +(t >= Rm.roomyRows),
        r = +(t >= Rm.gapRows),
        i = t >= Rm.barRows,
        a = i ? e.top + n : null,
        o = i ? e.bottom - n : null;
      T = {
        column: e.left + Rm.padColumns,
        row: i ? a + 1 + r : e.top + n,
        tabRow: a,
        statusRow: o,
        lastRow: i ? o - r - 1 : e.bottom,
        lastColumn: e.right - 1,
      };
    },
    le = (e) => {
      let t = S.centreX(C.centre),
        n = e * Bm.centre[1],
        r = Ng.map((e) => ({ x: t + e * Bm.spread * ee, y: n }));
      (O.forEach((e) => e.dispose()), (O = r.map((e) => lg(S, e, x))));
      let i = new Map(w.keys.map((e) => [e.id, e]));
      (o.forEach((e) => {
        e.key = i.get(Qm(e.char)) ?? null;
      }),
        (D = Cg({
          unit: ee,
          centreX: t,
          portals: r,
          sink: { from: n - Bm.fadeRows * S.row, clip: n + Bm.sinkRows * S.row },
          homeY: w.homeY,
          strokes: o,
          strokeTime: se,
          inAt: zm.handsInAt,
          retractAt: u,
        })));
    },
    ue = () => {
      let t = e.getBoundingClientRect();
      if (t.width === 0 || t.height === 0) return !1;
      ((b = t.height),
        (x = Math.min(window.devicePixelRatio || 1, Fm.maxPixelRatio)),
        (y = Math.round(((t.width * Fm.sideBleed) / (1 + Fm.sideBleed * 2)) * x) / x),
        (v = t.width - y * 2),
        (e.width = Math.round(t.width * x)),
        (e.height = Math.round(b * x)),
        n.setTransform(x, 0, 0, x, y * x, 0),
        (S = ml(Math.min(Math.max(v / Fm.rowsAcross, Fm.rowRange[0]), Fm.rowRange[1]))));
      let r = Math.floor(v / S.column),
        o = Math.min(b, v * Fm.frameAspect),
        s = Math.floor(o / S.row);
      ((C = eg(S, r, s)),
        (w = $h(S, r, s, C.centre)),
        (ee = w.width / Z.unitsAcross),
        (E = [...C.cells, ...w.cells]),
        z(),
        le(o));
      let c = [S.centreX(C.centre), S.centreY(Math.round((C.screen.top + C.screen.bottom) / 2))],
        l = Math.hypot(v, b);
      return (
        E.forEach((e, t) => {
          ((e.index = t),
            (e.at =
              zm.buildSpread *
              q([Math.min((Math.hypot(e.x - c[0], e.y - c[1]) / l) * 2, 1), Math.random()], zm.buildRandom)));
        }),
        tg(R(a), S, C.screen),
        (P = !1),
        (te = 0),
        (ne = 0),
        (ie = 0),
        (ae = !1),
        (g.length = 0),
        _.clear(),
        R(i),
        (oe = null),
        !0
      );
    },
    de = () => {
      let e = R(r);
      (E.forEach((t) => _l(e, S, t, !0)), (P = !0));
    },
    fe = (e) => {
      let t = T.column;
      for (
        Rm.tabs.forEach((n, r) => {
          [...n].forEach((n) => {
            (n !== wg && t <= T.lastColumn && _l(e, S, F(t, T.tabRow, n, r === 0 ? X.tabActive : X.tabIdle)), (t += 1));
          });
        });
        t <= T.lastColumn;
        t += 1
      )
        _l(e, S, F(t, T.tabRow, Rm.tabRule, X.tabRule));
    },
    pe = (e, t) => {
      for (; ie <= t; ie += 1) {
        let t = T.row + ie;
        t > T.lastRow ||
          ([...String(ie + 1).padStart(2, `0`)].forEach((n, r) => {
            _l(e, S, F(T.column + r, t, n, X.lineNumber));
          }),
          _l(e, S, F(T.column + Rm.numberColumns - 2, t, Rm.gutter, X.gutter)));
      }
    },
    me = () => {
      for (; ne < o.length && se(o[ne]) <= k;) {
        let e = o[ne],
          t = k - se(e);
        e.key && t < X.keyFlashSeconds && (h.set(e.key, se(e)), (re = se(e)));
        let n = I(e),
          r = T.row + e.line;
        (e.key &&
          Lg(e) &&
          t < zm.flight &&
          L(n, r) &&
          g.push({ stroke: e, from: [e.key.x, e.key.y], to: [S.centreX(n), S.centreY(r)] }),
          (ne += 1));
      }
    },
    he = () => {
      let e = i.getContext(`2d`);
      for (!ae && T.tabRow !== null && k >= m && (fe(e), (ae = !0)); te < o.length && ce(o[te]) <= k;) {
        let t = o[te];
        pe(
          e,
          t.char ===
            `
`
            ? t.line + 1
            : t.line,
        );
        let n = I(t),
          r = T.row + t.line;
        (Lg(t) && L(n, r) && _l(e, S, F(n, r, t.char, t.level, t.red), t.level >= X.call), (te += 1));
      }
    },
    ge = () => {
      vl(n, S);
      let e = Math.floor(k * zm.buildFlicker);
      for (let t of E) {
        let r = Pg(k, t.at, zm.buildFade);
        if (r <= 0) continue;
        let i = r < 1 && Y(t.index * Dg + e) < Og ? kg : 1;
        _l(n, S, t, !1, r * i);
      }
    },
    _e = () => {
      let e = Pg(k, zm.screenOnAt, zm.screenOnSeconds);
      if (e <= 0 || ((n.globalAlpha = e), n.drawImage(a, 0, 0, v, b), (n.globalAlpha = 1), e >= 1)) return;
      let { screen: t } = C;
      vl(n, S);
      let r = Math.round((t.top + t.bottom) / 2),
        i = (q([Ag, 1], Fg(e)) * (t.bottom - t.top)) / 2;
      for (let a = t.top; a <= t.bottom; a += 1) {
        if (Math.abs(a - r) > i) continue;
        let o = a === r ? Eg : Tg;
        for (let r = t.left; r <= t.right; r += 1) _l(n, S, F(r, a, o, zm.screenOnLevel * (1 - e)));
      }
    },
    ve = () => {
      for (let e = te - 1; e >= 0; --e) {
        let t = o[e],
          r = k - ce(t);
        if (r >= X.typedFlashSeconds) break;
        let i = I(t),
          a = T.row + t.line;
        Lg(t) && L(i, a) && _l(n, S, F(i, a, t.char, t.level + X.typedFlash * (1 - r / X.typedFlashSeconds), t.red));
      }
    },
    ye = () => {
      if (te === 0) return [0, 0];
      let e = o[te - 1];
      return e.char ===
        `
`
        ? [e.line + 1, 0]
        : [e.line, e.column + 1];
    },
    be = () => k < l || Math.floor((k - l) / Fm.blinkSeconds) % 2 == 0,
    xe = () => {
      if (k < m || !be()) return;
      let [e, t] = ye(),
        r = T.row + e,
        i = T.column + Rm.numberColumns + t;
      L(i, r) && _l(n, S, { ...F(i, r, wg, X.cursor), block: !0 });
    },
    Se = () => {
      if (T.statusRow === null || k < m) return;
      let e = k >= zm.typingAt && k < l;
      [...(e ? Rm.typing : Rm.idle)].forEach((t, r) => {
        _l(n, S, F(T.column + r, T.statusRow, t, X.statusMode, e ? X.statusModeRed : 0));
      });
      let [t, r] = ye(),
        i = `${Rm.encoding}${Rm.line}${t + 1}${Rm.column}${r + 1}`;
      [...i].forEach((e, t) => {
        e !== wg && _l(n, S, F(T.lastColumn - i.length + 1 + t, T.statusRow, e, X.status));
      });
    },
    Ce = () => {
      if (k < m) return;
      let e = k < p ? (Math.sin(k * X.ledPulse) + 1) / 2 : 1;
      _l(n, S, { ...F(C.led.column, C.led.row, Im.led, q([X.ledOff, X.ledOn], e), X.ledRed) }, !0);
      let [t, , r] = w.leds,
        i = k - re < X.keyFlashSeconds && Math.floor(k * zm.ledBlink) % 2 == 0;
      (t && i && _l(n, S, { ...t, level: X.keyLedOn }, !0),
        r && _l(n, S, { ...r, level: X.keyLedOn, red: X.ledRed }, !0));
    },
    we = () => {
      for (let e = g.length - 1; e >= 0; --e) {
        let t = g[e],
          r = (k - se(t.stroke)) / zm.flight;
        if (r >= 1) {
          g.splice(e, 1);
          continue;
        }
        let i = Ig(K(r)),
          a = Math.sin(Math.PI * K(r)),
          o = q([t.from[0], t.to[0]], i),
          s = q([t.from[1], t.to[1]], i) - a * X.flyerRise * S.row,
          c = S.row * U.fontScale * (1 + X.flyerGrow * a),
          l = dl(X.flyer) * (1 - al(jg, 1, r));
        ((n.font = `${U.fontWeight} ${c}px ${U.font}`),
          (n.fillStyle = pl(X.flyer, X.flyerRed, l, !1)),
          n.fillText(t.stroke.char, o, s));
      }
      vl(n, S);
    },
    Te = (e) => {
      vl(n, S);
      let t = { erased: [], painted: [] };
      for (let n of D.update(k, e)) Jh(S, n, k, b, t);
      _.paint(n, S, t, k, e);
    },
    Ee = () => {
      vl(n, S);
      for (let [e, t] of h) {
        let r = k - t;
        if (r >= X.keyFlashSeconds) {
          h.delete(e);
          continue;
        }
        let i = X.keyFlash * (1 - r / X.keyFlashSeconds);
        for (let t of [...e.cells, ...e.faces]) _l(n, S, { ...t, level: t.level + i, red: X.keyFlashRed }, !0);
      }
    },
    De = (e) => {
      (n.clearRect(-y, 0, v + y * 2, b),
        k < Mg ? ge() : (P || de(), n.drawImage(r, 0, 0, v, b)),
        O.forEach((e, t) => e.draw(n, k, d[t].openAt, d[t].closeAt)),
        _e(),
        me(),
        he(),
        n.drawImage(i, 0, 0, v, b),
        vl(n, S),
        ve(),
        xe(),
        Se(),
        Ce(),
        k >= zm.handsInAt && k < f && Te(e),
        Ee(),
        we(),
        (oe = be()));
    },
    Oe = (e) => {
      if (((M = 0), !S)) {
        ke();
        return;
      }
      let t = N ? Math.min((e - N) / 1e3, Fm.maxDeltaSeconds) : 0;
      ((N = e), (k += t), (k < p || be() !== oe) && De(t), ke());
    };
  function ke() {
    !M && j && A && !t && (M = requestAnimationFrame(Oe));
  }
  let Ae = () => {
      (cancelAnimationFrame(M), (M = 0), (N = 0));
    },
    je = new ResizeObserver(() => {
      ue() && A && De(0);
    });
  return (
    je.observe(e),
    {
      start() {
        if (!A) {
          if (((A = !0), t)) {
            ((k = p), (S || ue()) && De(0));
            return;
          }
          ke();
        }
      },
      setActive(e) {
        ((j = e), j ? ke() : Ae());
      },
      dispose() {
        (Ae(), je.disconnect(), (r.width = 0), (i.width = 0), (a.width = 0), O.forEach((e) => e.dispose()));
      },
    }
  );
}
var zg = 0.45,
  Bg = `(prefers-reduced-motion: reduce)`,
  Vg = En(
    {
      __name: `DeskScene`,
      setup(e) {
        let n = pe(),
          r = z(`root`),
          i = z(`canvas`),
          a = Rr(r, zg),
          o = null,
          s = null,
          c = !1,
          l = () => {
            o?.setActive(c && !n.open);
          };
        return (
          N(() => {
            o = Rg(i.value, { reducedMotion: window.matchMedia(Bg).matches });
            let e = Ir(i.value);
            ((s = new IntersectionObserver(
              ([e]) => {
                ((c = e.isIntersecting), l());
              },
              { root: e === document.scrollingElement ? null : e },
            )),
              s.observe(i.value),
              a.value && o.start());
          }),
          t(a, (e) => {
            e && o?.start();
          }),
          t(() => n.open, l),
          m(() => {
            (s?.disconnect(), o?.dispose(), (o = null));
          }),
          (e, t) => (
            M(),
            _(
              `div`,
              { ref_key: `root`, ref: r, class: `desk-scene`, "aria-hidden": `true` },
              [R(`canvas`, { ref_key: `canvas`, ref: i, class: `desk-scene__canvas` }, null, 512)],
              512,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-91a9d487`]],
  ),
  Hg = { id: `stack`, class: `site-stack`, "aria-labelledby": `stack-title` },
  Ug = { class: `site-stack__body` },
  Wg = { class: `site-stack__groups` },
  Gg = { class: `site-stack__label` },
  Kg = { class: `site-stack__index` },
  qg = { class: `site-stack__items` },
  Jg = { class: `site-stack__scene` },
  Yg = En(
    {
      __name: `SiteStack`,
      setup(e) {
        let t = Tn();
        return (e, n) => (
          M(),
          _(`section`, Hg, [
            R(`div`, Ug, [
              I(
                ni,
                {
                  class: `site-stack__head`,
                  "title-id": `stack-title`,
                  kicker: P(t).t(`stackKicker`),
                  title: P(t).t(`stackTitle`),
                  hint: P(t).t(`stackHint`),
                },
                null,
                8,
                [`kicker`, `title`, `hint`],
              ),
              R(`ul`, Wg, [
                (M(!0),
                _(
                  k,
                  null,
                  p(
                    P(yi),
                    (e, n) => (
                      M(),
                      E(
                        zr,
                        { key: e.id, tag: `li`, class: `site-stack__group`, style: C(P($r)(P(Kr).label)) },
                        {
                          default: s(({ seen: r }) => [
                            R(`h3`, Gg, [
                              R(`span`, Kg, S(String(n + 1).padStart(2, `0`)), 1),
                              I(
                                H,
                                {
                                  text: P(t).t(`stackGroups`)[e.id],
                                  "type-delay": P(Kr).label,
                                  "type-duration": P(Kr).labelDuration,
                                  ready: r,
                                },
                                null,
                                8,
                                [`text`, `type-delay`, `type-duration`, `ready`],
                              ),
                            ]),
                            R(`ul`, qg, [
                              (M(!0),
                              _(
                                k,
                                null,
                                p(
                                  e.items,
                                  (e, t) => (
                                    M(),
                                    _(
                                      `li`,
                                      {
                                        key: e,
                                        class: `site-stack__item`,
                                        style: C(P($r)(P(Kr).item + t * P(Kr).itemStep)),
                                      },
                                      [
                                        I(
                                          H,
                                          {
                                            text: e,
                                            "type-delay": P(Kr).item + t * P(Kr).itemStep,
                                            "type-duration": P(Kr).itemDuration,
                                            ready: r,
                                          },
                                          null,
                                          8,
                                          [`text`, `type-delay`, `type-duration`, `ready`],
                                        ),
                                      ],
                                      4,
                                    )
                                  ),
                                ),
                                128,
                              )),
                            ]),
                          ]),
                          _: 2,
                        },
                        1032,
                        [`style`],
                      )
                    ),
                  ),
                  128,
                )),
              ]),
              R(`div`, Jg, [I(Vg)]),
            ]),
          ])
        );
      },
    },
    [[`__scopeId`, `data-v-a35429de`]],
  ),
  Xg = {
    url: `https://joaopedroguimaraes.pages.dev`,
    name: `João Pedro Guimarães`,
    brand: `João Pedro Guimarães`,
    tagline: `Full Stack & IA aplicada`,
    image: `/og-image.png`,
    imageWidth: 1200,
    imageHeight: 630,
    themeColor: `#000000`,
    jobTitle: `Full stack developer`,
    knowsAbout: [`React`, `TypeScript`, `Supabase`, `PostgreSQL`, `Node.js`, `Python`, `Applied AI`, `RAG`],
    profiles: [`linkedin`, `github`],
    language: `en`,
    locales: { uk: `uk_UA`, ru: `ru_RU`, en: `en_US` },
  },
  Zg = `noindex`,
  Qg = ` — `,
  $g = 160,
  e_ = `…`,
  t_ = ` `,
  n_ = /[\s,.;:—–-]+$/,
  r_ = (e) => (e ? `${e}${Qg}${Xg.brand}` : `${Xg.brand}${Qg}${Xg.tagline}`),
  i_ = (e) => {
    if (e.length <= $g) return e;
    let t = e.slice(0, 159),
      n = t.lastIndexOf(t_);
    return `${(n > 0 ? t.slice(0, n) : t).replace(n_, ``)}${e_}`;
  },
  a_ = `/`,
  o_ = `?`,
  s_ = `#`,
  c_ = (e) => {
    let [t, n] = e.split(s_),
      [r, i] = t.split(o_),
      a = r.endsWith(a_) || r.includes(`.`) ? r : `${r}${a_}`;
    return `${Xg.url}${a}${i ? `${o_}${i}` : ``}${n ? `${s_}${n}` : ``}`;
  },
  l_ = {
    description: { tag: `meta`, key: `name`, id: `description`, value: `content` },
    ogTitle: { tag: `meta`, key: `property`, id: `og:title`, value: `content` },
    ogDescription: { tag: `meta`, key: `property`, id: `og:description`, value: `content` },
    ogUrl: { tag: `meta`, key: `property`, id: `og:url`, value: `content` },
    canonical: { tag: `link`, key: `rel`, id: `canonical`, value: `href` },
    robots: { tag: `meta`, key: `name`, id: `robots`, value: `content` },
  },
  u_ = Object.keys(l_),
  d_ = ({ tag: e, key: t, id: n }) => document.head.querySelector(`${e}[${t}="${n}"]`),
  f_ = (e) => d_(l_[e])?.getAttribute(l_[e].value) ?? null,
  p_ = (e, t) => {
    let n = l_[e],
      r = d_(n);
    if (t === null) {
      r?.remove();
      return;
    }
    let i = r ?? document.head.appendChild(document.createElement(n.tag));
    (i.setAttribute(n.key, n.id), i.setAttribute(n.value, t));
  };
function m_({ title: e, description: t, path: n, robots: r = () => null }) {
  let i = { title: document.title, ...Object.fromEntries(u_.map((e) => [e, f_(e)])) };
  (b(() => {
    let i = e(),
      a = t(),
      o = n(),
      s = o === null ? null : c_(o),
      c = r_(i);
    ((document.title = c),
      p_(`description`, a),
      p_(`ogTitle`, c),
      p_(`ogDescription`, a),
      p_(`canonical`, s),
      p_(`ogUrl`, s),
      p_(`robots`, r()));
  }),
    m(() => {
      ((document.title = i.title), u_.forEach((e) => p_(e, i[e])));
    }));
}
var h_ = {
    __name: `CaseMeta`,
    props: { page: { type: Object, required: !0 } },
    setup(e) {
      let t = Tn();
      return (
        m_({
          title: () => t.t(`moreWorks`)[e.page.id].title,
          description: () => i_(t.t(`moreWorks`)[e.page.id].text),
          path: () => e.page.path,
        }),
        (e, t) => h(e.$slots, `default`)
      );
    },
  },
  g_ = [`href`],
  __ = { class: `frame-away__text` },
  v_ = En(
    {
      __name: `FrameAway`,
      props: { url: { type: String, required: !0 } },
      setup(e) {
        let t = Tn();
        return (r, i) => (
          M(),
          _(
            `a`,
            { class: `frame-away`, href: e.url, target: `_blank`, rel: `noopener` },
            [
              R(`span`, __, S(P(t).t(`portalNewTab`)), 1),
              (i[0] ||= n()),
              (i[1] ||= R(`span`, { "aria-hidden": `true` }, `↗`, -1)),
            ],
            8,
            g_,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-f7a6cd65`]],
  ),
  y_ = { class: `portal-frame__bar` },
  b_ = { class: `portal-frame__host`, "aria-hidden": `true` },
  x_ = [`src`, `title`],
  S_ = `Escape`,
  C_ = En(
    {
      __name: `PortalFrame`,
      props: {
        url: { type: String, required: !0 },
        title: { type: String, required: !0 },
        background: { type: String, required: !0 },
        shown: { type: Boolean, default: !1 },
      },
      emits: [`load`, `back`],
      setup(e, { expose: t, emit: r }) {
        let i = e,
          a = r,
          o = Tn(),
          s = z(`back`),
          c = F(() => {
            let { host: e, pathname: t } = new URL(i.url);
            return `${e.replace(/^www\./, ``)}${t.replace(/\/$/, ``)}`;
          }),
          u = (e) => {
            e.key === S_ && !e.repeat && a(`back`);
          };
        return (
          N(() => window.addEventListener(`keydown`, u)),
          m(() => window.removeEventListener(`keydown`, u)),
          t({ focus: () => s.value?.focus() }),
          (t, r) => (
            M(),
            E(w, { to: `body` }, [
              R(
                `div`,
                {
                  class: l([`portal-frame`, { "portal-frame--shown": e.shown }]),
                  style: C({ "--frame-background": e.background }),
                },
                [
                  R(`nav`, y_, [
                    R(
                      `button`,
                      {
                        ref_key: `back`,
                        ref: s,
                        type: `button`,
                        class: `portal-frame__back`,
                        onClick: (r[0] ||= (e) => a(`back`)),
                      },
                      [(r[2] ||= R(`span`, { "aria-hidden": `true` }, `←`, -1)), n(` ` + S(P(o).t(`portalBack`)), 1)],
                      512,
                    ),
                    R(`span`, b_, S(c.value), 1),
                    I(v_, { url: e.url }, null, 8, [`url`]),
                  ]),
                  R(
                    `iframe`,
                    { class: `portal-frame__site`, src: e.url, title: e.title, onLoad: (r[1] ||= (e) => a(`load`)) },
                    null,
                    40,
                    x_,
                  ),
                ],
                6,
              ),
            ])
          )
        );
      },
    },
    [[`__scopeId`, `data-v-a14fa276`]],
  ),
  Q = {
    coreShare: 0.4,
    reachCores: 2.15,
    densityCores: 5,
    chaosWaves: [3, 12],
    chaosAmp: 0.12,
    chaosMin: 0.8,
    chaosJag: 0.05,
    chaosBites: [2, 4],
    chaosBiteReach: [0.75, 0.95],
    chaosBiteRadius: [0.1, 0.2],
    edgeThick: 0.35,
    edgeSpill: 0.55,
    edgeGlyphScale: 1.25,
    edgeBlink: 0.12,
    edgeBlinkHover: 0.18,
    edgeFrom: 0.5,
    aspect: [0.95, 1.12],
    openShare: 1.02,
    outlineSteps: 120,
    imageZoom: 1.12,
    narrowAspect: 0.8,
    maxPixelRatio: 1.5,
    parallax: 0.035,
    pointerSmoothing: 6,
    hoverGrow: 0.07,
    hoverSmoothing: 8,
    breathe: 0.012,
    breatheSpeed: 1.3,
    dim: 0.3,
    vignette: 0.8,
    vignetteFrom: 0.55,
    scanlineGap: 3,
    scanlineAlpha: 0.12,
    scanlineSpeed: 18,
    glitchEvery: [1.2, 3.2],
    glitchSeconds: [0.12, 0.32],
    glitchHover: 0.35,
    glitchStrips: 8,
    glitchShift: 0.06,
    glitchBlocks: 5,
    glitchBlockSize: [0.06, 0.22],
    splitShift: 0.012,
    splitAlpha: 0.55,
    tintWidth: 960,
    jitter: 0.6,
    heatReach: 1.6,
    heatGain: 2.1,
    heatAlpha: [0.12, 0.45],
    heatSpeed: 2.1,
    heatHover: 0.35,
    liveReach: 1.9,
    liveMax: 70,
    churnRate: [0.4, 3],
    churnFlash: 1.1,
    flashDecay: 6,
    emberRate: 5,
    emberRateHover: 16,
    emberLife: [0.9, 2.2],
    emberSpeed: [14, 46],
    emberLevel: 2.2,
    emberRed: 0.85,
    loadMargin: `1800px`,
    idleWait: 1500,
    frameMs: 30,
    appearThreshold: 0.3,
    lettersSpread: 0.6,
    lettersRandom: 0.55,
    lettersFade: 0.25,
    crackAt: 0.9,
    crackSeconds: 0.8,
    crackReach: 2.2,
    crackFade: 0.15,
    crackGlow: 2.6,
    crackRays: 7,
    crackWidth: 1.1,
    crackWobble: 0.1,
    crackHeat: 1.6,
    crackCool: 0.5,
    crackFlicker: 0.25,
    crackFlickerRate: 18,
    openAt: 1.1,
    openSeconds: 1.8,
    openReach: 2.2,
    openRandom: 0.55,
    openPiece: 0.2,
    openGrain: 0.15,
    switchFade: 0.3,
    revealGlitch: 0.6,
    flyChance: 0.3,
    flySeconds: [0.5, 0.9],
    flyScale: [3, 6],
    flySpread: 0.5,
    flyGlow: 1.2,
    flyRed: 0.5,
    glitchRate: 30,
  },
  $ = {
    seconds: 1.35,
    holdSeconds: 0.3,
    washSeconds: 0.28,
    revealSeconds: 0.5,
    rewindSeconds: 0.85,
    loadWaitSeconds: 8,
    maxPixelRatio: 1.5,
    darkUntil: 0.3,
    overshoot: 1.35,
    unmask: [0.8, 0.97],
    wallFade: [0.55, 0.9],
    glitchFrom: 0.2,
    glitchPeak: 0.8,
    glitchHoldDecay: 6,
    splitShift: 0.02,
    splitAlpha: 0.6,
    strips: 14,
    shift: 0.09,
    ghost: 0.45,
    ghostShift: 0.014,
    stripRate: 24,
    bars: 4,
    barHeight: 0.03,
    mosaicCell: 14,
    mosaicChance: 0.55,
    mosaicBand: 0.4,
    hackFrom: 0.05,
    hackPeak: 0.45,
    hackFade: 0.92,
    typeShare: 0.85,
    terminal: [
      `> trace {host}`,
      `> inject breach.sys ......... ok`,
      `> bypass firewall ........... ok`,
      `> decrypt frame ............. ok`,
      `> access granted`,
    ],
    terminalInset: 24,
    terminalLine: 18,
    terminalWidth: 360,
  },
  E_ = `/assets/works/diario-oficial-scanner-narrow.webp`,
  D_ = `/assets/works/diario-oficial-scanner-wide.webp`,
  M_ = `/assets/works/assina-ai-narrow.webp`,
  N_ = `/assets/works/assina-ai-wide.webp`,
  w_ = `/assets/works/akura-ads-narrow.webp`,
  T_ = `/assets/works/akura-ads-wide.webp`,
  O_ = `/assets/works/my-dashboard-narrow.webp`,
  k_ = `/assets/works/my-dashboard-wide.webp`,
  I_ = `/assets/works/live-coach-narrow.webp`,
  L_ = `/assets/works/live-coach-wide.webp`,
  P_ = `/assets/works/briefbot-narrow.webp`,
  F_ = `/assets/works/briefbot-wide.webp`,
  A_ = `/assets/works/gabinete-conectado-narrow.webp`,
  j_ = `/assets/works/gabinete-conectado-wide.webp`,
  R_ = [
    {
      id: `diarioOficialScanner`,
      url: `/projetos/diario-oficial-scanner/`,
      host: `/projetos/diario-oficial-scanner`,
      images: { wide: D_, narrow: E_ },
      background: `#f4efe4`,
      embed: !0,
    },
    {
      id: `assinaAi`,
      url: `/projetos/assina-ai/`,
      host: `/projetos/assina-ai`,
      images: { wide: N_, narrow: M_ },
      background: `#ffffff`,
      embed: !0,
    },
    {
      id: `akuraAds`,
      url: `/projetos/akura-ads/`,
      host: `/projetos/akura-ads`,
      images: { wide: T_, narrow: w_ },
      background: `#071a33`,
      embed: !0,
    },
    {
      id: `myDashboard`,
      url: `/projetos/my-dashboard/`,
      host: `/projetos/my-dashboard`,
      images: { wide: k_, narrow: O_ },
      background: `#f6f3ff`,
      embed: !0,
    },
    {
      id: `liveCoach`,
      url: `/projetos/live-coach/`,
      host: `/projetos/live-coach`,
      images: { wide: L_, narrow: I_ },
      background: `#0b0d12`,
      embed: !0,
    },
    {
      id: `briefbot`,
      url: `/projetos/briefbot/`,
      host: `/projetos/briefbot`,
      images: { wide: F_, narrow: P_ },
      background: `#0f1115`,
      embed: !0,
    },
    {
      id: `gabineteConectado`,
      url: `/projetos/gabinete-conectado/`,
      host: `/projetos/gabinete-conectado`,
      images: { wide: j_, narrow: A_ },
      background: `#14452f`,
      embed: !0,
    },
  ],
  z_ = (e) => (window.innerWidth / window.innerHeight < Q.narrowAspect ? e.narrow : e.wide),
  B_ = new Map(),
  V_ = async (e, t) => {
    let n = await It(e, t).catch(() => null),
      r = new Image();
    return ((r.decoding = `async`), (r.src = n ? URL.createObjectURL(new Blob([n])) : e), await r.decode(), r);
  },
  H_ = (e, t) => (B_.has(e) || B_.set(e, V_(e, t)), B_.get(e)),
  U_ = (e) => {
    for (let t of R_) {
      let n = e.add();
      H_(z_(t.images), n)
        .catch(() => null)
        .finally(() => n(1));
    }
  },
  W_ = 1,
  G_ = 2,
  K_ = 4,
  q_ = 1,
  J_ = 0.9,
  Y_ = `#fff`,
  X_ = 1.7,
  Z_ = (e) => Math.atan2(Math.sin(e), Math.cos(e)),
  Q_ = 2;
function $_(e, t, n) {
  let r = !1;
  for (let i = 0, a = e.length - 1; i < e.length; a = i, i += 1) {
    let [o, s] = e[i],
      [c, l] = e[a];
    s > n != l > n && t < ((c - o) * (n - s)) / (l - s) + o && (r = !r);
  }
  return r;
}
function ev(e, t, n) {
  let [r, i] = Q.chaosWaves,
    a = Array.from({ length: i - r + 1 }, (e, t) => ({
      waves: r + t,
      amp: (rl(Q.chaosAmp) * r) / (r + t),
      phase: Math.random() * el,
    })),
    o = J(Q.aspect),
    s = Math.random() * el;
  return {
    outline: Array.from({ length: Q.outlineSteps }, (r, i) => {
      let c = (i / Q.outlineSteps) * el,
        l = a.reduce((e, { waves: t, amp: n, phase: r }) => e + n * Math.sin(t * c + r), 0),
        u = n * Q.openShare * Math.max(Q.chaosMin, 1 + l + rl(Q.chaosJag)),
        d = Math.cos(c) * u * o,
        f = Math.sin(c) * u;
      return [e + d * Math.cos(s) - f * Math.sin(s), t + d * Math.sin(s) + f * Math.cos(s)];
    }),
    bites: Array.from({ length: Math.round(J(Q.chaosBites)) }, () => {
      let r = Math.random() * el,
        i = J(Q.chaosBiteReach) * n;
      return { x: e + Math.cos(r) * i * o, y: t + Math.sin(r) * i, radius: J(Q.chaosBiteRadius) * n };
    }),
  };
}
function tv({ width: e, height: t, ratio: n, row: r, stage: i, intro: a }) {
  let o = ml(r),
    s = Math.round(e * n),
    c = Math.round(t * n),
    l = () => {
      let e = Yl(s, c),
        t = e.getContext(`2d`);
      return (t.setTransform(n, 0, 0, n, 0, 0), { canvas: e, context: t });
    },
    u = (e, t, r, i) => {
      let a = Math.max(Math.floor(e * n), 0),
        o = Math.max(Math.floor(t * n), 0);
      return {
        x: a,
        y: o,
        width: Math.max(Math.min(Math.ceil(r * n), s) - a, 0),
        height: Math.max(Math.min(Math.ceil(i * n), c) - o, 0),
      };
    },
    d = (e, t) => {
      let { canvas: n, context: r } = l();
      return (Ou(r, e, t, o), vl(r, o), e.forEach((e) => _l(r, o, e, !0)), n);
    },
    f = Math.min(e, t) / 2,
    p = Math.min((i.height * Q.coreShare) / W.coreMin, f / Q.reachCores),
    m = bu(i.x, i.y, W_, p, o, -1 / 0),
    h = ev(m.x, m.y, p),
    { outline: g } = h,
    _ = [
      ...g,
      ...h.bites.flatMap((e) => [
        [e.x - e.radius, e.y - e.radius],
        [e.x + e.radius, e.y + e.radius],
      ]),
    ],
    v = _.map(([e]) => e),
    y = _.map(([, e]) => e),
    b = Math.min(...v),
    x = Math.min(...y),
    S = { left: b, top: x, width: Math.max(...v) - b, height: Math.max(...y) - x };
  ((S.x = b + S.width / 2), (S.y = x + S.height / 2));
  let C = [...m.rays].sort((e, t) => t.length - e.length).slice(0, Q.crackRays),
    w = (e, t) => {
      let n = Math.hypot(e - m.x, t - m.y),
        r = Math.atan2(t - m.y, e - m.x);
      return C.some((e) => {
        let t = Z_(r - e.angle + Q.crackWobble * Math.sin((n / o.row) * X_ + e.phase)),
          i = 0.5 * (o.row * Math.abs(Math.cos(e.angle)) + o.column * Math.abs(Math.sin(e.angle)));
        return n * Math.cos(t) >= 0 && Math.abs(n * Math.sin(t)) < i * Q.crackWidth;
      });
    },
    T = (e, t) => $_(g, e, t) || h.bites.some((n) => Math.hypot(e - n.x, t - n.y) < n.radius),
    E = o.columnAt(m.x - f),
    D = o.rowAt(m.y - f),
    O = { left: E * o.column, top: D * o.row, columns: o.columnAt(m.x + f) - E + 1, rows: o.rowAt(m.y + f) - D + 1 },
    ee = new Uint8Array(O.columns * O.rows);
  for (let e = 0; e < O.rows; e += 1)
    for (let t = 0; t < O.columns; t += 1) ee[e * O.columns + t] = +!!T(o.centreX(E + t), o.centreY(D + e));
  let k = (e, t) => e >= 0 && t >= 0 && e < O.columns && t < O.rows && ee[t * O.columns + e] === 1,
    A = (e, t, n, r) => {
      for (let i = -n; i <= n; i += 1) for (let a = -n; a <= n; a += 1) if (k(e + a, t + i) === r) return !0;
      return !1;
    },
    j = [],
    M = [],
    N = [],
    te = [],
    ne = [],
    re = [],
    ie = [],
    P = (e, t) => te.push({ x: e, y: t, char: gl(), churnAt: J(Q.churnRate), on: !0 });
  for (let e = 0; e < O.rows; e += 1)
    for (let t = 0; t < O.columns; t += 1) {
      let n = o.centreX(E + t),
        r = o.centreY(D + e),
        i = Du([m], n, r, p * Q.densityCores, o),
        s = k(t, e),
        c = !s && A(t, e, 1, !0) && Math.random() < Q.edgeSpill,
        l = i ? 1 - al(f * Q.edgeFrom, f, i.span) : 0,
        u = i && (s || c || Math.random() <= l);
      if (a && u) {
        let a = { ...i.intact, column: t, row: e, fade: i.intact.fade * (s || c ? 1 : l) };
        (ne.push(a),
          (s || !(i.fracture >= J_ ? i.intact : i.broken)) && ie.push(a),
          w(n, r) && re.push({ ...a, level: U.brightness * Q.crackGlow, red: 1, pure: !0 }));
      }
      if (s) {
        A(t, e, 1, !1) || (A(t, e, 2, !1) && Math.random() < Q.edgeThick) ? P(n, r) : N.push({ x: n, y: r });
        continue;
      }
      if (c) {
        P(n, r);
        continue;
      }
      if (!u) continue;
      let d = i.fracture >= J_ ? i.intact : i.broken;
      if (!d) continue;
      let h = { ...d, column: t, row: e, span: i.span, fade: d.fade * l };
      (i.span < p * Q.liveReach ? M : j).push(h);
    }
  let ae = C.map((e) => ((e.angle % el) + el) % el).sort((e, t) => e - t),
    oe = new Map(),
    se = (e, t, n) => {
      let r = (Math.atan2(t - m.y, e - m.x) + el) % el,
        i = ae.filter((e) => e < r).length % ae.length,
        a = p * Q.openPiece,
        o = `${i}:${Math.floor(n / a)}:${Math.floor((r * Math.max(n, a)) / a)}`;
      return (oe.has(o) || oe.set(o, Math.random()), q([oe.get(o), Math.random()], Q.openGrain));
    },
    ce = (e, t) => {
      let n = Math.hypot(e - m.x, t - m.y);
      return Q.openAt + Q.openSeconds * q([K(n / (p * Q.openReach)), se(e, t, n)], Q.openRandom);
    },
    F = M.map((e) => [Math.random(), e])
      .sort(([e], [t]) => e - t)
      .map(([, e]) => e);
  j.push(...F.slice(Q.liveMax));
  let I = F.slice(0, Q.liveMax).map((e) => ({ ...e, switchAt: ce(e.x, e.y), churnAt: J(Q.churnRate), flash: 0 })),
    L = { wall: d(j, O) },
    R = [...j, ...I].filter((e) => e.span < p * Q.heatReach);
  L.heat = d(
    R.map((e) => ({ ...e, level: Math.max(e.level, U.brightness) * Q.heatGain, red: q_ })),
    O,
  );
  let z = o.row * K_,
    le = R.map((e) => e.x),
    ue = R.map((e) => e.y),
    de = R.length > 0 ? u(Math.min(...le) - z, Math.min(...ue) - z, Math.max(...le) + z, Math.max(...ue) + z) : null,
    fe = null;
  if (a) {
    L.whole = d(ne, O);
    let e = l();
    (vl(e.context, o), re.forEach((t) => _l(e.context, o, t, !0)), (L.lines = e.canvas));
    let t = { left: O.left - Q_ * o.column, top: O.top - Q_ * o.row, columns: O.columns + 4, rows: O.rows + 4 },
      n = new Float32Array(t.columns * t.rows),
      r = new Float32Array(t.columns * t.rows),
      i = new Float32Array(t.columns * t.rows);
    for (let e = 0; e < t.rows; e += 1)
      for (let a = 0; a < t.columns; a += 1) {
        let s = t.left + (a + 0.5) * o.column,
          c = t.top + (e + 0.5) * o.row,
          l = e * t.columns + a;
        ((n[l] = Q.lettersSpread * q([K(Math.hypot(s - m.x, c - m.y) / f), Math.random()], Q.lettersRandom)),
          (r[l] = ce(s, c)),
          (i[l] = Q.crackAt + Q.crackSeconds * K(Math.hypot(s - m.x, c - m.y) / (p * Q.crackReach))));
      }
    fe = {
      sheet: t,
      letters: n,
      switches: r,
      cracks: i,
      flyers: ie
        .filter(() => Math.random() < Q.flyChance)
        .map((e) => ({
          x: e.x,
          y: e.y,
          char: e.char,
          level: e.level,
          fade: e.fade,
          at: r[(e.row + Q_) * t.columns + e.column + Q_],
          seconds: J(Q.flySeconds),
          scale: J(Q.flyScale),
        })),
    };
  }
  let pe = l();
  ((pe.context.fillStyle = Y_),
    pe.context.beginPath(),
    N.forEach((e) => pe.context.rect(e.x - o.column / 2, e.y - o.row / 2, o.column, o.row)),
    pe.context.fill(),
    (L.holes = pe.canvas));
  let me = (1 + Q.hoverGrow) * (1 + Q.breathe),
    he = (S.width / 2 + o.column * G_) * me,
    ge = (S.height / 2 + o.row * G_) * me;
  return {
    outline: g,
    opening: S,
    region: u(S.x - he, S.y - ge, S.x + he, S.y + ge),
    heatBox: de,
    live: I,
    edge: te,
    timing: fe,
    layers: L,
  };
}
var nv = new Map(),
  rv = null,
  iv = typeof Worker > `u` || typeof OffscreenCanvas > `u` || !(`transferToImageBitmap` in OffscreenCanvas.prototype),
  av = 0,
  ov = (e) =>
    window.requestIdleCallback ? window.requestIdleCallback(e, { timeout: Q.idleWait }) : window.setTimeout(e, 0),
  sv = (e) =>
    new Promise((t) => {
      ov(() => t(tv(e)));
    }),
  cv = ({ data: e }) => {
    (nv.get(e.id)?.resolve(e.wall), nv.delete(e.id));
  },
  lv = () => {
    ((iv = !0), rv?.terminate(), (rv = null));
    for (let { params: e, resolve: t } of nv.values()) sv(e).then(t);
    nv.clear();
  },
  uv = () => (
    rv ||
      ((rv = new Worker(new URL(`/assets/portalWallWorker-hWNoGs-Z.js`, `` + import.meta.url), { type: `module` })),
      rv.addEventListener(`message`, cv),
      rv.addEventListener(`error`, lv)),
    rv
  ),
  dv = (e) =>
    iv
      ? sv(e)
      : new Promise((t) => {
          ((av += 1), nv.set(av, { params: e, resolve: t }), uv().postMessage({ id: av, params: e }));
        }),
  fv = 1e3,
  pv = 0.1,
  mv = 17.3,
  hv = 31.7,
  gv = 5.3,
  _v = [`#ff0000`, `#00ffff`],
  vv = 0.3,
  yv = 0.6,
  bv = 0.3,
  xv = `#fff`,
  Sv = U.letters + U.digits + U.symbols,
  Cv = `(prefers-reduced-motion: reduce)`,
  wv = Q.openAt + Q.openSeconds + Q.switchFade + Q.flySeconds[1],
  Tv = 4,
  Ev = 3,
  Dv = 255,
  Ov = 41.3,
  kv = 3.7;
function Av(e, t, n, r, i) {
  let a = Math.max(r / e.naturalWidth, i / e.naturalHeight),
    o = e.naturalWidth * a,
    s = e.naturalHeight * a;
  return { left: t + (r - o) / 2, top: n + (i - s) / 2, width: o, height: s };
}
var jv = (e) =>
    window.requestIdleCallback ? window.requestIdleCallback(e, { timeout: Q.idleWait }) : window.setTimeout(e, 0),
  Mv = (e) => e?.close?.();
function Nv(e) {
  let t = document.createElement(`canvas`);
  ((t.width = e.columns), (t.height = e.rows));
  let n = t.getContext(`2d`);
  return { canvas: t, context: n, image: n.createImageData(e.columns, e.rows) };
}
function Pv(e, t) {
  let n = document.createElement(`canvas`);
  ((n.width = Math.min(Q.tintWidth, e.naturalWidth)),
    (n.height = Math.round((n.width * e.naturalHeight) / e.naturalWidth)));
  let r = n.getContext(`2d`);
  return (
    r.drawImage(e, 0, 0, n.width, n.height),
    (r.globalCompositeOperation = `multiply`),
    (r.fillStyle = t),
    r.fillRect(0, 0, n.width, n.height),
    n
  );
}
function Fv(e) {
  let t = document.createElement(`canvas`);
  ((t.width = 1), (t.height = Q.scanlineGap));
  let n = t.getContext(`2d`);
  return ((n.fillStyle = `#000`), n.fillRect(0, 0, 1, 1), e.createPattern(t, `repeat`));
}
function Iv(e, { stage: t, images: n }) {
  let r = document.createElement(`canvas`),
    i = r.getContext(`2d`),
    a = document.createElement(`canvas`),
    o = a.getContext(`2d`),
    s = document.createElement(`canvas`),
    c = s.getContext(`2d`),
    l = Fv(c),
    u = window.matchMedia(Cv).matches,
    d = [],
    f = { x: 0, y: 0, goalX: 0, goalY: 0 },
    p = null,
    m = null,
    h = null,
    g = null,
    _ = null,
    v = null,
    y = null,
    b = null,
    x = null,
    S = null,
    C = !1,
    w = null,
    T = !1,
    E = [],
    D = null,
    O = 0,
    ee = 0,
    k = 1,
    A = [],
    j = null,
    M = [],
    N = [],
    te = 0,
    ne = 0,
    re = 0,
    ie = 0,
    P = null,
    ae = 0,
    oe = !1,
    se = !1,
    ce = !1,
    F = !1,
    I = !0,
    L = 0,
    R = !1,
    z = null,
    le = null,
    ue = !1,
    de = J(Q.glitchEvery),
    fe = J(Q.glitchSeconds);
  e.appendChild(r);
  let pe = (e) => {
      ((e.width = r.width), (e.height = r.height));
      let t = e.getContext(`2d`);
      return (t.setTransform(k, 0, 0, k, 0, 0), t);
    },
    me = () => {
      (Mv(g), Mv(_), (g = null), (_ = null), (v = null), (y = null), (b = null));
    },
    he = (e, t) => {
      if (
        (me(),
        ({ width: O, height: ee, ratio: k } = e),
        (D = hl(window.innerWidth, window.innerHeight, Uc(window.innerWidth))),
        (r.width = Math.round(O * k)),
        (r.height = Math.round(ee * k)),
        ({ outline: A, opening: j, region: z, heatBox: le, live: M, edge: N } = t),
        ({ wall: p, heat: m, holes: h } = t.layers),
        pe(a),
        pe(s),
        t.timing && t.layers.whole)
      ) {
        (({ whole: g, lines: _ } = t.layers),
          (v = t.timing),
          (y = { whole: Nv(v.sheet), lines: Nv(v.sheet), wall: Nv(v.sheet), heat: Nv(v.sheet) }),
          (b = document.createElement(`canvas`)),
          pe(b));
        let { sheet: e } = v,
          n = Math.max(Math.floor(e.left * k), 0),
          i = Math.max(Math.floor(e.top * k), 0);
        ((x = {
          x: n,
          y: i,
          width: Math.min(Math.ceil((e.left + e.columns * D.column) * k), r.width) - n,
          height: Math.min(Math.ceil((e.top + e.rows * D.row) * k), r.height) - i,
        }),
          v.flyers.forEach((e) => {
            e.color = pl(e.level * (1 + Q.flyGlow), Q.flyRed, 1, !1);
          }));
      }
      ((d.length = 0), (F = !0), _e());
    },
    ge = () => {
      let n = e.getBoundingClientRect(),
        r = t.getBoundingClientRect();
      if (n.width <= 0 || n.height <= 0) return;
      let i = {
        width: n.width,
        height: n.height,
        ratio: Math.min(window.devicePixelRatio || 1, Q.maxPixelRatio),
        row: hl(window.innerWidth, window.innerHeight, Uc(window.innerWidth)).row,
        stage: { x: r.left - n.left + r.width / 2, y: r.top - n.top + r.height / 2, height: r.height },
        intro: Ee() < wv,
      };
      L += 1;
      let a = L;
      dv(i).then((e) => {
        if (R || a !== L) {
          Object.values(e.layers).forEach(Mv);
          return;
        }
        he(i, e);
      });
    },
    _e = () => {
      (cancelAnimationFrame(ie), (P = null), se && F && !ce && (ie = requestAnimationFrame(Le)));
    },
    ve = () => {
      !R && I && oe && ((I = !1), ge());
    },
    ye = (e) => {
      let t = Q.imageZoom * e,
        n = j.width * t,
        r = j.height * t,
        i = Av(S, j.x - n / 2, j.y - r / 2, n, r),
        a = Math.min(n, r) * Q.parallax;
      return ((i.left -= f.x * a), (i.top -= f.y * a), i);
    },
    be = (e) => {
      let t = e - de;
      return t > fe
        ? ((de = e + J(Q.glitchEvery) * (1 - ne * Q.glitchHover)), (fe = J(Q.glitchSeconds)), 0)
        : t < 0
          ? 0
          : Math.sin((t / fe) * Math.PI);
    },
    xe = (e, t, n, r) => {
      let i = t.height / Q.glitchStrips;
      for (let a = 0; a < Q.glitchStrips; a += 1) {
        let o = (Y(a * mv + r) * 2 - 1) * t.width * Q.glitchShift * n,
          s = (a / Q.glitchStrips) * S.naturalHeight;
        e.drawImage(S, 0, s, S.naturalWidth, S.naturalHeight / Q.glitchStrips, t.left + o, t.top + a * i, t.width, i);
      }
      for (let i = 0; i < Q.glitchBlocks; i += 1) {
        if (Y(i * hv + r) > n) continue;
        let a = Q.glitchBlockSize[0] + (Q.glitchBlockSize[1] - Q.glitchBlockSize[0]) * Y(i * 11 + r),
          o = a * Y(i + r),
          s = Y(i * 3 + r) * (1 - a),
          c = Y(i * 5 + r) * (1 - o),
          l = Y(i * 7 + r) * (1 - a);
        e.drawImage(
          S,
          s * S.naturalWidth,
          c * S.naturalHeight,
          a * S.naturalWidth,
          o * S.naturalHeight,
          t.left + l * t.width,
          t.top + c * t.height,
          a * t.width,
          o * t.height,
        );
      }
    },
    Se = (e, t, n, r) => {
      let i = ye(t),
        a = Math.floor(r * Q.glitchStrips * 4);
      ((i.left += (Y(a * gv) * 2 - 1) * Q.jitter),
        n > 0 ? xe(e, i, n, a) : e.drawImage(S, i.left, i.top, i.width, i.height));
      let o = Math.min(n + ne * vv, 1),
        s = i.width * Q.splitShift * o;
      (s > 0.5 &&
        E.length > 0 &&
        ((e.globalCompositeOperation = `screen`),
        (e.globalAlpha = Q.splitAlpha * o),
        e.drawImage(E[0], i.left - s, i.top, i.width, i.height),
        e.drawImage(E[1], i.left + s, i.top, i.width, i.height),
        (e.globalAlpha = 1),
        (e.globalCompositeOperation = `source-over`)),
        (e.fillStyle = `rgba(0, 0, 0, ${Q.dim * (1 - ne)})`),
        e.fillRect(i.left, i.top, i.width, i.height),
        e.save(),
        e.translate(0, (r * Q.scanlineSpeed) % Q.scanlineGap),
        (e.globalAlpha = Q.scanlineAlpha),
        (e.fillStyle = l),
        e.fillRect(i.left, i.top - Q.scanlineGap, i.width, i.height + Q.scanlineGap * 2),
        e.restore());
      let c = (Math.max(j.width, j.height) * t) / 2,
        u = e.createRadialGradient(j.x, j.y, c * Q.vignetteFrom, j.x, j.y, c);
      (u.addColorStop(0, `rgba(0, 0, 0, 0)`),
        u.addColorStop(1, `rgba(20, 0, 0, ${Q.vignette})`),
        (e.fillStyle = u),
        e.fillRect(i.left, i.top, i.width, i.height));
    },
    Ce = () => {
      let { x: e, y: t, width: n, height: r } = z;
      (o.setTransform(1, 0, 0, 1, 0, 0),
        o.clearRect(e, t, n, r),
        o.drawImage(h, e, t, n, r, e, t, n, r),
        o.setTransform(k, 0, 0, k, 0, 0),
        vl(o, D),
        (o.font = `${U.fontWeight} ${D.row * Q.edgeGlyphScale}px ${U.font}`),
        (o.fillStyle = xv));
      for (let e of N) e.on && o.fillText(e.char, e.x, e.y);
    },
    we = (e, t, n) => {
      let { x: r, y: i, width: o, height: s } = z;
      (c.setTransform(1, 0, 0, 1, 0, 0),
        c.clearRect(r, i, o, s),
        c.save(),
        c.beginPath(),
        c.rect(r, i, o, s),
        c.clip(),
        c.setTransform(k, 0, 0, k, 0, 0),
        Se(c, e, Math.max(be(t), n), t),
        (c.globalCompositeOperation = `destination-in`),
        c.drawImage(a, j.x * (1 - e), j.y * (1 - e), O * e, ee * e),
        c.restore());
    },
    Te = () => {
      let [e, t] = il(A),
        n = Math.atan2(t - j.y, e - j.x) + rl(yv),
        r = J(Q.emberSpeed);
      d.push({ x: e, y: t, vx: Math.cos(n) * r, vy: Math.sin(n) * r, age: 0, life: J(Q.emberLife), char: gl() });
    },
    Ee = () => (u ? 1 / 0 : w === null ? -1 / 0 : ae - w),
    De = (e) => K((e - Q.openAt) / Q.openSeconds),
    Oe = (e) =>
      Math.min(
        Q.heatAlpha[0] + (Q.heatAlpha[1] - Q.heatAlpha[0]) * (0.5 + 0.5 * Math.sin(e * Q.heatSpeed)) + Q.heatHover * ne,
        1,
      ),
    ke = (e, t) => {
      for (te += e * (Q.emberRate + (Q.emberRateHover - Q.emberRate) * ne) * De(Ee()); te >= 1; --te) Te();
      for (let t = d.length - 1; t >= 0; --t) {
        let n = d[t];
        ((n.age += e), (n.x += n.vx * e), (n.y += n.vy * e), n.age >= n.life && d.splice(t, 1));
      }
      let n = Math.exp(-Q.flashDecay * e);
      for (let e of M)
        ((e.flash *= n),
          t >= e.churnAt &&
            ((e.char = Sv[Math.floor(Math.random() * Sv.length)]),
            (e.flash = Q.churnFlash),
            (e.churnAt = t + J(Q.churnRate))));
      let r = Q.edgeBlink + ne * Q.edgeBlinkHover;
      for (let e of N)
        t >= e.churnAt &&
          ((e.char = Sv[Math.floor(Math.random() * Sv.length)]),
          (e.on = Math.random() > r),
          (e.churnAt = t + J(Q.churnRate)));
    },
    Ae = (e, t) => {
      let { sheet: n } = v;
      ((e.globalCompositeOperation = `destination-in`),
        (e.imageSmoothingEnabled = !0),
        e.setTransform(k, 0, 0, k, 0, 0),
        e.drawImage(t.canvas, n.left, n.top, n.columns * D.column, n.rows * D.row),
        (e.globalCompositeOperation = `source-over`));
    },
    je = (e, t) => {
      let n = b.getContext(`2d`);
      (n.setTransform(1, 0, 0, 1, 0, 0), (n.globalCompositeOperation = `copy`));
      let { x: r, y: a, width: o, height: s } = x;
      (n.drawImage(e, r, a, o, s, r, a, o, s), Ae(n, t), i.drawImage(b, r, a, o, s, r, a, o, s));
    },
    Me = (e, t) => {
      let { letters: n, switches: r, cracks: i } = v,
        a = Math.floor(t * Q.crackFlickerRate),
        o = Oe(t),
        s = K((wv - e) / Q.crackCool),
        c = !1,
        l = !0;
      for (let t = 0; t < n.length; t += 1) {
        let u = t * Tv + Ev,
          d = e - r[t],
          f = K(d / Q.switchFade),
          p = K((e - n[t]) / Q.lettersFade) * (1 - f),
          m = 1 - Q.crackFlicker + Q.crackFlicker * Y(t * kv + a),
          h = d >= 0 ? Q.crackHeat * Math.exp(-d / Q.crackCool) * m * s : 0,
          g = K((e - i[t]) / Q.crackFade) * m * p;
        ((y.whole.image.data[u] = p * Dv),
          (y.lines.image.data[u] = g * Dv),
          (y.wall.image.data[u] = f * Dv),
          (y.heat.image.data[u] = f * K(o + h) * Dv),
          (c ||= p > 0),
          (l &&= f >= 1));
      }
      return (Object.values(y).forEach((e) => e.context.putImageData(e.image, 0, 0)), { anyWhole: c, allCracked: l });
    },
    Ne = ({ anyWhole: e, allCracked: t }) => {
      (e && (je(g, y.whole), je(_, y.lines)), t ? i.drawImage(p, 0, 0) : je(p, y.wall), le && je(m, y.heat));
    },
    Pe = (e, t, n, r) => {
      let a = 1 - n,
        o = Math.floor(e * Q.glitchRate),
        l = a > 0 && Y(o * Ov) < a;
      (Ce(), we(t, e, l ? a * Q.revealGlitch : 0), r && Ae(c, y.wall));
      let { x: u, y: d, width: f, height: p } = z;
      i.drawImage(s, u, d, f, p, u, d, f, p);
    },
    Fe = (e) => {
      for (let t of v.flyers) {
        let n = (e - t.at) / t.seconds;
        if (n <= 0 || n >= 1) continue;
        let r = n * n,
          a = 1 + (t.scale - 1) * r,
          o = 1 + Q.flySpread * r,
          s = j.x + (t.x - j.x) * o,
          c = j.y + (t.y - j.y) * o;
        (i.setTransform(k * a, 0, 0, k * a, s * k, c * k),
          (i.globalAlpha = t.fade * (1 - n)),
          (i.fillStyle = t.color),
          i.fillText(t.char, 0, 0));
      }
      ((i.globalAlpha = 1), i.setTransform(k, 0, 0, k, 0, 0));
    },
    Ie = (e) => {
      let t = Ee(),
        n = De(t),
        a = !!v && t < wv,
        o = (1 + Q.hoverGrow * ne) * (1 + Q.breathe * Math.sin(e * Q.breatheSpeed));
      if ((i.setTransform(1, 0, 0, 1, 0, 0), i.clearRect(0, 0, r.width, r.height), t < 0)) return;
      let s = a ? Me(t, e) : null;
      if ((ue && n > 0 && Pe(e, o, n, a), a)) Ne(s);
      else if ((v && me(), i.drawImage(p, 0, 0), le)) {
        let { x: t, y: n, width: r, height: a } = le;
        ((i.globalAlpha = Oe(e)), i.drawImage(m, t, n, r, a, t, n, r, a), (i.globalAlpha = 1));
      }
      (i.setTransform(k, 0, 0, k, 0, 0), vl(i, D));
      for (let e of M)
        t >= e.switchAt &&
          _l(
            i,
            D,
            { ...e, fade: (e.fade ?? 1) * K((t - e.switchAt) / Q.switchFade), level: e.level + e.flash },
            e.flash > bv,
          );
      for (let e of d)
        _l(i, D, {
          x: e.x,
          y: e.y,
          char: e.char,
          level: Q.emberLevel,
          red: Q.emberRed,
          fade: Math.sin((e.age / e.life) * Math.PI),
        });
      a && Fe(t);
    },
    Le = (e) => {
      if (((ie = requestAnimationFrame(Le)), P !== null && e - P < Q.frameMs)) return;
      let t = P === null ? 0 : Math.min((e - P) / fv, pv);
      ((P = e), (ae += t), (ne += (re - ne) * (1 - Math.exp(-Q.hoverSmoothing * t))));
      let n = 1 - Math.exp(-Q.pointerSmoothing * t);
      ((f.x += (f.goalX - f.x) * n), (f.y += (f.goalY - f.y) * n), w === null && T && (w = ae), ke(t, ae), Ie(ae));
    },
    Re = () => {
      C ||
        ((C = !0),
        H_(z_(n))
          .then((e) =>
            jv(() => {
              R || ((S = e), (E = _v.map((e) => Pv(S, e))), (ue = !0));
            }),
          )
          .catch(() => {}));
    },
    ze = Ir(e),
    Be = ze === document.scrollingElement ? null : ze,
    Ve = new ResizeObserver(() => {
      ((I = !0), ve());
    });
  Ve.observe(e);
  let He = new IntersectionObserver(
    ([e]) => {
      ((oe = e.isIntersecting), oe && (Re(), ve()));
    },
    { root: Be, rootMargin: Q.loadMargin },
  );
  He.observe(e);
  let B = new IntersectionObserver(
    ([e]) => {
      ((se = e.isIntersecting), _e());
    },
    { root: Be },
  );
  B.observe(e);
  let Ue = new IntersectionObserver(
    ([e]) => {
      e.isIntersecting && ((T = !0), Ue.disconnect());
    },
    { root: Be, threshold: Q.appearThreshold },
  );
  return (
    Ue.observe(t),
    {
      hover(e) {
        re = +!!e;
      },
      point(t, n) {
        let r = e.getBoundingClientRect();
        ((f.goalX = K((t - r.left) / r.width) * 2 - 1), (f.goalY = K((n - r.top) / r.height) * 2 - 1));
      },
      snapshot() {
        if (!F || !ue) return { ready: !1 };
        let t = e.getBoundingClientRect(),
          n = 1 + Q.hoverGrow * ne;
        return {
          ready: ue,
          image: S,
          tints: E,
          wall: p,
          mask: a,
          outline: A,
          opening: j,
          grow: n,
          imageRect: ye(n),
          box: { left: t.left, top: t.top, width: O, height: ee },
          dim: Q.dim * (1 - ne),
        };
      },
      pause(e) {
        ((ce = e), _e());
      },
      dispose() {
        ((R = !0),
          (ce = !0),
          _e(),
          (L += 1),
          [p, m, h].forEach(Mv),
          me(),
          Ve.disconnect(),
          He.disconnect(),
          B.disconnect(),
          Ue.disconnect(),
          r.remove());
      },
    }
  );
}
var Lv = 1e3,
  Rv = 23.1,
  zv = 61.7,
  Bv = 3.3,
  Vv = 37.1,
  Hv = `600 13px ui-monospace, Consolas, Menlo, monospace`,
  Uv = (e) => e ** 3,
  Wv = (e) => (e < 0.5 ? 4 * e ** 3 : 1 - (-2 * e + 2) ** 3 / 2),
  Gv = (e, t, n) => ({
    left: q([e.left, t.left], n),
    top: q([e.top, t.top], n),
    width: q([e.width, t.width], n),
    height: q([e.height, t.height], n),
  }),
  Kv = (e) => al($.glitchFrom, $.glitchPeak, e) * (1 - al($.glitchPeak, 1, e) * 0.5),
  qv = (e) => al($.hackFrom, $.hackPeak, e) * (1 - al($.hackFade, 1, e));
function Jv(e, { background: t, host: n }) {
  let r = document.createElement(`canvas`),
    i = r.getContext(`2d`),
    a = document.createElement(`canvas`),
    o = a.getContext(`2d`),
    s = document.createElement(`canvas`),
    c = s.getContext(`2d`),
    l = window.innerWidth,
    u = window.innerHeight,
    d = Math.min(window.devicePixelRatio || 1, $.maxPixelRatio),
    { opening: f, box: p } = e,
    m = p.left + f.x,
    h = p.top + f.y,
    g = (Math.hypot(l, u) / Math.min(f.width, f.height)) * $.overshoot,
    _ = Av(e.image, 0, 0, l, u),
    v = { ...e.imageRect, left: e.imageRect.left - f.x, top: e.imageRect.top - f.y },
    y = $.terminal.map((e) => e.replace(`{host}`, n)),
    b = y.reduce((e, t) => e + t.length, 0),
    x = 0;
  ((r.width = Math.round(l * d)),
    (r.height = Math.round(u * d)),
    (a.width = r.width),
    (a.height = r.height),
    (s.width = Math.ceil(r.width / $.mosaicCell)),
    (s.height = Math.ceil(r.height / $.mosaicCell)),
    Object.assign(r.style, {
      position: `fixed`,
      inset: `0`,
      zIndex: `50`,
      width: `${l}px`,
      height: `${u}px`,
      pointerEvents: `none`,
    }),
    document.body.appendChild(r));
  let S = (t, n, r, i, a, o, s) => {
      let c = r / e.grow,
        l = Gv({ left: i + v.left * c, top: a + v.top * c, width: v.width * c, height: v.height * c }, _, o);
      t.drawImage(e.image, l.left, l.top, l.width, l.height);
      let u = l.width * $.splitShift * s;
      (u > 0.5 &&
        e.tints.length > 0 &&
        ((t.globalCompositeOperation = `screen`),
        (t.globalAlpha = $.splitAlpha * s),
        t.drawImage(e.tints[0], l.left - u, l.top, l.width, l.height),
        t.drawImage(e.tints[1], l.left + u, l.top + u * 0.3, l.width, l.height),
        (t.globalAlpha = 1),
        (t.globalCompositeOperation = `source-over`)),
        (t.fillStyle = `rgba(0, 0, 0, ${e.dim * (1 - o)})`),
        t.fillRect(l.left, l.top, l.width, l.height));
      let d = 1 - al($.unmask[0], $.unmask[1], n);
      d > 0 &&
        ((t.globalCompositeOperation = `destination-in`),
        (t.globalAlpha = 1),
        t.drawImage(e.mask, i - f.x * c, a - f.y * c, p.width * c, p.height * c),
        (t.globalCompositeOperation = `source-over`),
        d < 1 &&
          ((t.globalAlpha = 1 - d), t.drawImage(e.image, l.left, l.top, l.width, l.height), (t.globalAlpha = 1)));
    },
    C = (e, t, n) => {
      if (n <= 0) return;
      ((e.font = Hv), (e.textAlign = `left`), (e.textBaseline = `alphabetic`));
      let r = Math.round(t * b),
        i = $.terminalInset,
        a = u - $.terminalInset - (y.length - 1) * $.terminalLine;
      ((e.fillStyle = `rgba(0, 0, 0, ${0.6 * n})`),
        e.fillRect(0, a - $.terminalLine * 1.2, $.terminalWidth, y.length * $.terminalLine + $.terminalLine));
      for (let t of y) {
        if (r <= 0) break;
        let o = t.slice(0, r);
        ((r -= t.length),
          (e.fillStyle = `rgba(255, 106, 20, ${n})`),
          e.fillText(r < 0 ? `${o}█` : o, i, a),
          (a += $.terminalLine));
      }
    },
    w = (n, _, v, y, b) => {
      let x = g ** Uv(n) * e.grow,
        w = Wv(n),
        T = q([m, l / 2], w),
        E = q([h, u / 2], w),
        D = qv(n),
        O = o;
      (O.setTransform(d, 0, 0, d, 0, 0),
        O.clearRect(0, 0, l, u),
        S(O, n, x, T, E, w, _),
        (O.globalCompositeOperation = `destination-over`),
        (O.fillStyle = `rgba(0, 0, 0, ${al(0, $.darkUntil, n)})`),
        O.fillRect(0, 0, l, u),
        (O.globalCompositeOperation = `source-over`));
      let ee = 1 - al($.wallFade[0], $.wallFade[1], n);
      if (ee > 0) {
        let t = x / e.grow;
        ((O.globalAlpha = ee),
          O.drawImage(e.wall, T - f.x * t, E - f.y * t, p.width * t, p.height * t),
          (O.globalAlpha = 1));
      }
      if (
        (v > 0 && ((O.globalAlpha = v), (O.fillStyle = t), O.fillRect(0, 0, l, u), (O.globalAlpha = 1)),
        C(O, b, Math.min(D * 2, 1) * (1 - v)),
        i.setTransform(1, 0, 0, 1, 0, 0),
        i.clearRect(0, 0, r.width, r.height),
        _ <= 0)
      ) {
        i.drawImage(a, 0, 0);
        return;
      }
      let k = Math.floor(y * $.stripRate),
        A = r.height / $.strips;
      for (let e = 0; e < $.strips; e += 1) {
        let t = (Y(e * Rv + k) * 2 - 1) * r.width * $.shift * _;
        i.drawImage(a, 0, e * A, r.width, A, t, e * A, r.width, A);
      }
      if (Y(k * Vv) < _ * $.mosaicChance) {
        let e = Math.floor(Y(k + 1) * r.height * (1 - $.mosaicBand)),
          t = Math.floor(r.height * $.mosaicBand * (0.4 + Y(k + 2) * 0.6));
        ((c.imageSmoothingEnabled = !0),
          c.drawImage(a, 0, 0, s.width, s.height),
          (i.imageSmoothingEnabled = !1),
          i.drawImage(s, 0, e / $.mosaicCell, s.width, t / $.mosaicCell, 0, e, r.width, t),
          (i.imageSmoothingEnabled = !0));
      }
      ((i.globalCompositeOperation = `lighter`),
        (i.globalAlpha = $.ghost * _),
        i.drawImage(a, r.width * $.ghostShift * _, 0),
        (i.globalCompositeOperation = `source-over`),
        (i.globalAlpha = 1));
      for (let e = 0; e < $.bars; e += 1)
        Y(e * zv + k) > _ ||
          ((i.fillStyle = e % 2 ? `#000` : t),
          i.fillRect(0, Y(e + k * Bv) * r.height, r.width, r.height * $.barHeight * _));
    },
    T = (e, t, n) => {
      cancelAnimationFrame(x);
      let r = performance.now(),
        i = (a) => {
          let o = (a - r) / Lv,
            s = o >= e;
          if ((t(Math.min(o, e), o), s)) {
            n?.();
            return;
          }
          x = requestAnimationFrame(i);
        };
      x = requestAnimationFrame(i);
    };
  return {
    dive(e, { wash: t = !0 } = {}) {
      let n = $.seconds + $.holdSeconds + (t ? $.washSeconds : 0);
      T(
        n,
        (e) => {
          let r = K(e / $.seconds),
            i = Math.max(e - $.seconds, 0),
            a = r < 1 ? Kv(r) : Kv(1) * Math.exp(-i * $.glitchHoldDecay),
            o = t ? al($.seconds + $.holdSeconds, n, e) : 0;
          w(r, a, o, e, K(e / ($.seconds * $.typeShare)));
        },
        e,
      );
    },
    reveal(e) {
      T(
        $.revealSeconds,
        (e) => {
          let t = e / $.revealSeconds;
          (w(1, Math.sin(t * Math.PI) * Kv(1) * 2, 0, e, 1), (r.style.opacity = String(1 - al(0.35, 1, t))));
        },
        e,
      );
    },
    cover(e) {
      ((r.style.opacity = `1`),
        T(
          $.revealSeconds / 2,
          (e) => {
            let t = e / ($.revealSeconds / 2);
            w(1, (1 - t) * Kv(1) * 2, 0, e, 0);
          },
          e,
        ));
    },
    rewind(e) {
      ((r.style.opacity = `1`),
        T(
          $.rewindSeconds,
          (e) => {
            let t = 1 - e / $.rewindSeconds;
            w(t, Kv(t), 0, e, 0);
          },
          () => {
            (this.dispose(), e?.());
          },
        ));
    },
    dispose() {
      (cancelAnimationFrame(x), r.remove());
    },
  };
}
var Yv = [`href`],
  Xv = { class: `work-portal__caption` },
  Zv = `(prefers-reduced-motion: reduce)`,
  Qv = 0,
  $v = 1e3,
  ey = En(
    {
      __name: `WorkPortal`,
      props: { work: { type: Object, required: !0 }, label: { type: String, required: !0 } },
      setup(e) {
        let n = e,
          i = pe(),
          a = T(),
          s = Wf(),
          c = Pe(Ae(n.work.id)),
          l = F(() => i.overlay === c.slug),
          u = z(`link`),
          d = z(`stage`),
          f = z(`scene`),
          p = z(`frame`),
          g = o(!1),
          v = o(!1),
          y = Rr(d, Q.appearThreshold),
          b = null,
          x = null,
          S = `idle`,
          C = !1,
          w = !1,
          D = 0,
          O = null,
          ee = () => window.matchMedia(Zv).matches,
          A = () => {
            S !== `diving` ||
              !w ||
              (!C && D) ||
              (clearTimeout(D), (S = `open`), (v.value = !0), x.reveal(() => p.value?.focus()));
          },
          j = () => {
            ((C = !0), A());
          },
          te = (e) => {
            ((S = `diving`),
              (C = !1),
              (w = !1),
              (g.value = !0),
              (x = Jv(e, n.work)),
              (D = setTimeout(
                () => {
                  ((D = 0), A());
                },
                ($.seconds + $.holdSeconds + $.loadWaitSeconds) * $v,
              )),
              x.dive(
                () => {
                  ((w = !0), A());
                },
                { wash: !1 },
              ));
          },
          ne = () => {
            ((S = `open`), (g.value = !0), (v.value = !0), r(() => p.value?.focus()));
          },
          re = () => {
            let e = b.snapshot();
            (b.pause(!0), (i.open = !0), e.ready && !ee() ? te(e) : ne());
          },
          ie = () => {
            ((S = `idle`),
              (x = null),
              (g.value = !1),
              b?.pause(!1),
              u.value?.focus({ preventScroll: !0 }),
              l.value && re());
          },
          ae = () => {
            if (S !== `open` && S !== `diving`) return;
            clearTimeout(D);
            let e = S === `open`;
            if (((S = `closing`), (i.open = !1), !x)) {
              ((v.value = !1), ie());
              return;
            }
            let t = () => {
              ((v.value = !1), x.rewind(ie));
            };
            e ? x.cover(t) : t();
          },
          oe = () => {
            if (O) {
              O.then(oe);
              return;
            }
            l.value ? a.back() : ae();
          },
          se = (e) => {
            e.persisted && x && ((i.open = !1), x.rewind(() => b?.pause(!1)), (x = null));
          };
        (t(
          () => i.open,
          (e) => b?.pause(e),
        ),
          t(l, (e) => {
            e && S === `idle` ? re() : e || ae();
          }),
          N(() => {
            ((b = Iv(f.value, { stage: d.value, images: n.work.images })),
              window.addEventListener(`pageshow`, se),
              l.value && re());
          }),
          m(() => {
            (clearTimeout(D),
              window.removeEventListener(`pageshow`, se),
              (i.open = !1),
              x?.dispose(),
              b?.dispose(),
              (b = null));
          }));
        let ce = () => {
            let e = b.snapshot();
            if (!e.ready || ee()) {
              window.location.assign(n.work.url);
              return;
            }
            (b.pause(!0),
              (i.open = !0),
              (S = `leaving`),
              (x = Jv(e, n.work)),
              x.dive(() => {
                ((S = `idle`), window.location.assign(n.work.url));
              }));
          },
          I = (e) => {
            if (!(e.button !== Qv || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || S !== `idle`)) {
              if ((e.preventDefault(), _n(`work_open`, { work: n.work.id }), !n.work.embed)) {
                ce();
                return;
              }
              (re(),
                (O = a.push({ path: c.path, state: de(s.fullPath) }).finally(() => {
                  O = null;
                })));
            }
          };
        return (t, n) => (
          M(),
          _(
            k,
            null,
            [
              R(
                `a`,
                {
                  ref_key: `link`,
                  ref: u,
                  class: `work-portal`,
                  href: P(c).path,
                  onClick: I,
                  onPointerenter: (n[0] ||= (e) => P(b)?.hover(!0)),
                  onPointerleave: (n[1] ||= (e) => P(b)?.hover(!1)),
                  onPointermove: (n[2] ||= (e) => P(b)?.point(e.clientX, e.clientY)),
                  onFocus: (n[3] ||= (e) => P(b)?.hover(!0)),
                  onBlur: (n[4] ||= (e) => P(b)?.hover(!1)),
                },
                [
                  R(
                    `span`,
                    { ref_key: `stage`, ref: d, class: `work-portal__stage` },
                    [R(`span`, { ref_key: `scene`, ref: f, class: `work-portal__scene` }, null, 512)],
                    512,
                  ),
                  R(`span`, Xv, [h(t.$slots, `default`, { seen: P(y) }, void 0, !0)]),
                ],
                40,
                Yv,
              ),
              g.value
                ? (M(),
                  E(
                    C_,
                    {
                      key: 0,
                      ref_key: `frame`,
                      ref: p,
                      url: e.work.url,
                      title: e.label,
                      background: e.work.background,
                      shown: v.value,
                      onLoad: j,
                      onBack: oe,
                    },
                    null,
                    8,
                    [`url`, `title`, `background`, `shown`],
                  ))
                : L(``, !0),
              l.value ? (M(), E(h_, { key: 1, page: P(c) }, null, 8, [`page`])) : L(``, !0),
            ],
            64,
          )
        );
      },
    },
    [[`__scopeId`, `data-v-7f7cc3c9`]],
  ),
  ty = { class: `work-card__number` },
  ny = { class: `work-card__name` },
  ry = { class: `work-card__text` },
  iy = En(
    {
      __name: `WorkCard`,
      props: {
        work: { type: Object, required: !0 },
        number: { type: String, required: !0 },
        title: { type: String, required: !0 },
        text: { type: String, required: !0 },
      },
      setup(e) {
        let t = Tn();
        return (r, i) => (
          M(),
          E(
            ey,
            { work: e.work, label: `${e.title} — ${P(t).t(`worksOpen`)}` },
            {
              default: s(({ seen: t }) => [
                R(`span`, ty, [
                  I(
                    H,
                    { text: e.number, "type-delay": P(Ur).number, "type-duration": P(Ur).numberDuration, ready: t },
                    null,
                    8,
                    [`text`, `type-delay`, `type-duration`, `ready`],
                  ),
                ]),
                R(`span`, ny, [
                  I(
                    H,
                    { text: e.title, "type-delay": P(Ur).name, "type-duration": P(Ur).nameDuration, ready: t },
                    null,
                    8,
                    [`text`, `type-delay`, `type-duration`, `ready`],
                  ),
                ]),
                R(`span`, ry, [
                  I(
                    H,
                    { text: e.text, "type-delay": P(Ur).text, "type-duration": P(Ur).textDuration, ready: t },
                    null,
                    8,
                    [`text`, `type-delay`, `type-duration`, `ready`],
                  ),
                ]),
                R(
                  `span`,
                  { class: l([`work-card__open`, { "work-card--seen": t }]), style: C(P($r)(P(Ur).open)) },
                  [
                    I(
                      H,
                      { text: e.work.host, "type-delay": P(Ur).open, "type-duration": P(Ur).openDuration, ready: t },
                      null,
                      8,
                      [`text`, `type-delay`, `type-duration`, `ready`],
                    ),
                    (i[0] ||= n()),
                    (i[1] ||= R(`span`, { class: `work-card__arrow`, "aria-hidden": `true` }, `↗`, -1)),
                  ],
                  6,
                ),
              ]),
              _: 1,
            },
            8,
            [`work`, `label`],
          )
        );
      },
    },
    [[`__scopeId`, `data-v-93f9bb27`]],
  ),
  ay = { id: `works`, class: `site-works`, "aria-labelledby": `works-title` },
  oy = { class: `site-works__list` },
  sy = 0.6,
  cy = En(
    {
      __name: `SiteWorks`,
      setup(e) {
        let t = Tn(),
          n = qi(z(`all`));
        return (e, r) => {
          let i = a(`RouterLink`);
          return (
            M(),
            _(`section`, ay, [
              I(
                ni,
                {
                  class: `site-works__head`,
                  "title-id": `works-title`,
                  kicker: P(t).t(`worksKicker`),
                  title: P(t).t(`worksTitle`),
                  hint: P(t).t(`worksHint`),
                },
                null,
                8,
                [`kicker`, `title`, `hint`],
              ),
              R(`ol`, oy, [
                (M(!0),
                _(
                  k,
                  null,
                  p(
                    P(R_),
                    (e, n) => (
                      M(),
                      _(`li`, { key: e.id, class: `site-works__item` }, [
                        I(
                          iy,
                          {
                            work: e,
                            number: String(n + 1).padStart(2, `0`),
                            title: P(t).t(`works`)[e.id].title,
                            text: P(t).t(`works`)[e.id].text,
                          },
                          null,
                          8,
                          [`work`, `number`, `title`, `text`],
                        ),
                      ])
                    ),
                  ),
                  128,
                )),
              ]),
              I(
                zr,
                { ref: `all`, class: l([`site-works__all`, { "site-works__all--idle": !P(n) }]), threshold: sy },
                {
                  default: s(({ seen: e }) => [
                    (r[2] ||= R(
                      `span`,
                      { class: `site-works__rail site-works__rail--left`, "aria-hidden": `true` },
                      null,
                      -1,
                    )),
                    I(
                      i,
                      { class: `site-works__more`, to: P(ge), style: C(P($r)(P(Ur).more)) },
                      {
                        default: s(() => [
                          (r[0] ||= R(`span`, { class: `site-works__corners`, "aria-hidden": `true` }, null, -1)),
                          I(
                            H,
                            {
                              text: P(t).t(`allWorks`),
                              "type-delay": P(Ur).more,
                              "type-duration": P(Ur).moreDuration,
                              ready: e,
                            },
                            null,
                            8,
                            [`text`, `type-delay`, `type-duration`, `ready`],
                          ),
                          (r[1] ||= R(`span`, { class: `site-works__more-arrow`, "aria-hidden": `true` }, `→`, -1)),
                        ]),
                        _: 2,
                      },
                      1032,
                      [`to`, `style`],
                    ),
                    (r[3] ||= R(
                      `span`,
                      { class: `site-works__rail site-works__rail--right`, "aria-hidden": `true` },
                      null,
                      -1,
                    )),
                  ]),
                  _: 1,
                },
                8,
                [`class`],
              ),
            ])
          );
        };
      },
    },
    [[`__scopeId`, `data-v-ab330d28`]],
  ),
  ly = { class: `site-home__screen` },
  uy = { class: `site-home__hero`, "data-backdrop-copy": ``, "aria-labelledby": `hero-title` },
  dy = { id: `hero-title`, class: `site-home__title` },
  fy = { class: `site-home__text` },
  py = { class: `site-home__fact-value` },
  my = { class: `site-home__fact-label` },
  hy = En(
    {
      __name: `SiteHome`,
      props: { followHash: { type: Boolean, default: !1 } },
      setup(e) {
        let t = Tn();
        return (n, r) => (
          M(),
          E(
            Dm,
            { "follow-hash": e.followHash },
            {
              default: s(() => [
                R(`div`, ly, [
                  R(`section`, uy, [
                    R(
                      `p`,
                      { class: `site-home__kicker`, style: C(P($r)(P(Vr).kicker)) },
                      [
                        I(
                          H,
                          {
                            text: P(t).t(`heroKicker`),
                            "type-delay": P(Vr).kicker,
                            "type-duration": P(Vr).kickerDuration,
                          },
                          null,
                          8,
                          [`text`, `type-delay`, `type-duration`],
                        ),
                      ],
                      4,
                    ),
                    R(`h1`, dy, [
                      I(
                        H,
                        { text: P(t).t(`heroTitle`), "type-delay": P(Vr).title, "type-duration": P(Vr).titleDuration },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`],
                      ),
                    ]),
                    R(`p`, fy, [
                      I(
                        H,
                        { text: P(t).t(`heroText`), "type-delay": P(Vr).text, "type-duration": P(Vr).textDuration },
                        null,
                        8,
                        [`text`, `type-delay`, `type-duration`],
                      ),
                    ]),
                    R(
                      `ul`,
                      { class: `site-home__facts`, style: C(P($r)(P(Vr).facts)) },
                      [
                        (M(!0),
                        _(
                          k,
                          null,
                          p(
                            P(t).t(`heroFacts`),
                            ([e, t], n) => (
                              M(),
                              _(`li`, { key: n, class: `site-home__fact` }, [
                                R(`span`, py, [
                                  I(
                                    H,
                                    {
                                      text: e,
                                      "type-delay": P(Vr).facts + n * P(Vr).factStep,
                                      "type-duration": P(Vr).factDuration,
                                    },
                                    null,
                                    8,
                                    [`text`, `type-delay`, `type-duration`],
                                  ),
                                ]),
                                R(`span`, my, [
                                  I(
                                    H,
                                    {
                                      text: t,
                                      "type-delay": P(Vr).facts + n * P(Vr).factStep,
                                      "type-duration": P(Vr).factDuration,
                                    },
                                    null,
                                    8,
                                    [`text`, `type-delay`, `type-duration`],
                                  ),
                                ]),
                              ])
                            ),
                          ),
                          128,
                        )),
                      ],
                      4,
                    ),
                  ]),
                  (r[0] ||= R(
                    `div`,
                    { class: `site-home__stage`, "data-backdrop-stage": ``, "aria-hidden": `true` },
                    null,
                    -1,
                  )),
                ]),
                I(cy),
                I(Yg),
                I(Gi),
                I(vi),
                I(Ni),
              ]),
              _: 1,
            },
            8,
            [`follow-hash`],
          )
        );
      },
    },
    [[`__scopeId`, `data-v-d023cef1`]],
  ),
  gy = [`aria-label`],
  _y = En(
    {
      __name: `StartButton`,
      props: { box: { type: Object, required: !0 } },
      emits: [`press`],
      setup(e, { expose: t, emit: n }) {
        let r = e,
          a = n,
          o = Tn(),
          { hot: s, pressed: c, handlers: l } = Pn(),
          u = F(() => ({
            left: `${r.box.left}px`,
            top: `${r.box.top}px`,
            width: `${r.box.width}px`,
            height: `${r.box.height}px`,
          }));
        return (
          t({ hot: s, pressed: c }),
          (e, t) => (
            M(),
            _(
              `button`,
              i({ type: `button`, class: `start-button`, style: u.value, "aria-label": P(o).t(`start`) }, d(P(l), !0), {
                onClick: (t[0] ||= A((e) => a(`press`), [`stop`])),
              }),
              null,
              16,
              gy,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-833c76ad`]],
  ),
  vy = [`src`],
  yy = En(
    {
      __name: `ThreeStage`,
      props: { create: { type: Function, required: !0 }, poster: { type: String, default: `` } },
      setup(e) {
        let t = e,
          n = z(`host`),
          r = o(!1),
          i = new AbortController(),
          a = null,
          s = null;
        return (
          N(async () => {
            try {
              let e = await t.create(n.value, i.signal);
              if (i.signal.aborted) {
                e?.dispose();
                return;
              }
              if (!e) return;
              ((a = e), (s = new ResizeObserver(() => a.resize())), s.observe(n.value));
            } catch (e) {
              i.signal.aborted || (console.error(e), (r.value = !0));
            }
          }),
          m(() => {
            (i.abort(), s?.disconnect(), a?.dispose(), (a = null));
          }),
          (t, i) => (
            M(),
            _(
              `div`,
              { ref_key: `host`, ref: n, class: `three-stage` },
              [
                r.value && e.poster
                  ? (M(), _(`img`, { key: 0, class: `three-stage__poster`, src: e.poster, alt: `` }, null, 8, vy))
                  : L(``, !0),
              ],
              512,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-5dcf9f80`]],
  ),
  by = (e, t) => {
    let n = t.getBoundingClientRect(),
      r = 0,
      i = 0;
    for (let n = e; n && n !== t; n = n.offsetParent) ((r += n.offsetLeft), (i += n.offsetTop));
    return { left: n.left + r, top: n.top + i, width: e.offsetWidth, height: e.offsetHeight };
  },
  xy = 1,
  Sy = () => {
    let e = [],
      t = (t = xy) => {
        let n = { weight: t, done: 0 };
        return (
          e.push(n),
          (e) => {
            n.done = Math.min(Math.max(e, n.done), 1);
          }
        );
      };
    return {
      add: t,
      watch(e, n) {
        let r = t(n),
          i = () => r(1);
        return (e.then(i, i), e);
      },
      progress() {
        let t = 0,
          n = 0;
        for (let r of e) ((t += r.weight), (n += r.weight * r.done));
        return t > 0 ? n / t : 1;
      },
    };
  },
  Cy = `16px "Science Gothic"`,
  wy = [`Aa`, `Яяії`],
  Ty = () => Promise.all(wy.map((e) => document.fonts.load(Cy, e))),
  Ey = `site.bugs`,
  Dy = () => {
    try {
      return Math.max(Number.parseInt(window.localStorage.getItem(Ey), 10) || 0, 0);
    } catch {
      return 0;
    }
  },
  Oy = (e) => {
    try {
      window.localStorage.setItem(Ey, String(e));
    } catch {
      return;
    }
  },
  ky = oe(`bugKills`, () => {
    let e = o(Dy());
    return {
      count: e,
      add: () => {
        ((e.value += 1), Oy(e.value));
      },
    };
  }),
  Ay = { key: 2, class: `home__controls` },
  jy = `ready`,
  My = `awake`,
  Ny = 6,
  Py = En(
    {
      __name: `HomeView`,
      setup(n) {
        let r = { intro: `intro`, leaving: `leaving`, rebooting: `rebooting`, site: `site` },
          i = {
            labelScale: `--label-scale`,
            labelStep: `--label-step`,
            anyRows: `--plate-any-rows`,
            iconScale: `--icon-scale`,
          },
          a = Tn(),
          s = Jp(),
          c = ky(),
          u = s.takeReplay(),
          d = s.passed;
        m_({ title: () => null, description: () => a.t(`meta`).homeDescription, path: () => `/` });
        let p = o(d ? r.site : r.intro),
          h = o(0),
          g = o(!1),
          v = o(!1),
          y = o(!1),
          b = o(!1),
          x = o(!1),
          S = o(!1),
          C = o(null),
          w = o(u),
          T = o(u),
          D = o(null),
          O = z(`home`),
          ee = z(`startButton`),
          A = z(`enterButton`),
          j = z(`muteButton`),
          te = z(`langButton`),
          ne = z(`firstOption`),
          re = z(`secondOption`),
          ie = z(`confirm`),
          ae = z(`bugCounter`),
          oe = Be() ?? Le(),
          se = ot(oe),
          ce = fn(oe),
          F = ln(oe),
          R = null,
          le = null,
          ue = null,
          de = [],
          fe = [],
          pe = !1,
          me = () => {
            (oe.unlock(), F.wake());
          },
          he = () => {
            (F.on(), (R = Sy()), R.watch(Ty()), U_(R), (le = Qt(oe, R, a.code, T.value)), le.preload());
          };
        (f(zp, oe), d || he(), u && me());
        let ge = (e) => (e ? { el: e.$el, plate: e.plate, follow: !0 } : null),
          _e = () => [
            ge(A.value),
            ge(j.value),
            ge(te.value),
            ge(ne.value),
            ge(re.value),
            ...(ie.value?.plates ?? Array(Ny).fill(null)),
            ge(ae.value),
          ],
          ve = (e) => {
            if (!e?.el || !O.value) return null;
            let t = by(e.el, O.value);
            if (t.width <= 0 || t.height <= 0) return null;
            let n = getComputedStyle(e.el),
              r = Object.fromEntries(Object.entries(i).map(([e, t]) => [e, Number(n.getPropertyValue(t)) || 0]));
            return { ...e.plate, ...t, ...r, follow: !!e.follow };
          },
          ye = () => {
            let e = _e();
            ((de = e.map((e) => (e?.follow ? e.el : null))), (fe = []), ue?.setButtons?.(e.map(ve)));
          },
          be = (e, t, n) => {
            let r = de[e],
              i = `${t.toFixed(1)}px ${n.toFixed(1)}px`;
            r && fe[e] !== i && ((fe[e] = i), (r.style.translate = i));
          },
          xe = (e) => {
            (e === jy && (S.value = !0), e === My && ((g.value = !0), (v.value = !0), le.ready(oe.unlocked())));
          },
          Se = () => {
            ((pe = !0), c.add(), se.play(), le.bugKilled());
          },
          Ce = () => {
            (pe || (b.value = !1), (pe = !1), me(), le?.click());
          },
          we = () => {
            (_n(`intro_start`), me(), F.press(), (w.value = !0), ue?.start?.());
          },
          Te = () => {
            ((x.value = !0), me(), le.mutePressed());
          },
          Ee = () => {
            (me(), (b.value = !b.value));
          },
          De = (e) => {
            ((b.value = !1), (D.value = e));
          },
          Oe = () => {
            D.value = null;
          },
          ke = (e) => {
            me();
            let t = !!ue?.strikeBug?.(e.clientX, e.clientY);
            return ((pe = !1), t);
          },
          Ae = (e) => {
            ke(e) || Oe();
          },
          je = async () => {
            let e = D.value;
            ((D.value = null),
              e &&
                p.value === r.intro &&
                ((p.value = r.rebooting),
                me(),
                le.hush(),
                await ue?.reboot?.(),
                (ue = null),
                le.dispose(),
                a.set(e),
                (x.value = !1),
                (g.value = !1),
                (v.value = !1),
                (y.value = !1),
                he(),
                (h.value += 1),
                (p.value = r.intro)));
          },
          Me = async () => {
            p.value === r.intro &&
              ((p.value = r.leaving),
              _n(`intro_enter`),
              ue && (me(), le.hush(), await ue.zoomIn?.(), await le.sayFinale(), await ue.collapse?.()),
              (ue = null),
              le.dispose(),
              (p.value = r.site));
          },
          Ne = () => {
            p.value === r.site &&
              ((w.value = !0),
              (T.value = !0),
              (x.value = !1),
              (b.value = !1),
              (D.value = null),
              (g.value = !1),
              (v.value = !1),
              (y.value = !1),
              he(),
              me(),
              (h.value += 1),
              (p.value = r.intro));
          },
          Pe = (e) => {
            w.value &&
              requestAnimationFrame(() =>
                Qp(
                  async () => {
                    let { releaseSiteBreak: e } = await import(`./siteBreak-CKn4vXJu.js`);
                    return { releaseSiteBreak: e };
                  },
                  __vite__mapDeps([0, 1]),
                )
                  .then(({ releaseSiteBreak: e }) => e())
                  .catch(() => null)
                  .then(() => e?.begin?.()),
              );
          },
          Fe = async (e, t) => {
            try {
              let { createGlyphHeroScene: n, loadGlyphHeroFonts: r } = await Qp(
                async () => {
                  let { createGlyphHeroScene: e, loadGlyphHeroFonts: t } = await import(`./glyphHeroScene-DAyI_oae.js`);
                  return { createGlyphHeroScene: e, loadGlyphHeroFonts: t };
                },
                __vite__mapDeps([2, 1]),
              );
              return (
                await r(),
                t.aborted
                  ? null
                  : ((ue = n(e, {
                      boot: !w.value,
                      held: w.value,
                      onStartBox: (e) => {
                        C.value = e;
                      },
                      onAlarm: F.alarm,
                      onPhase: xe,
                      mouthLevel: () => le.level(),
                      onBugKilled: Se,
                      onFaceHit: () => le.faceHit(),
                      onHoleShattered: ce.play,
                      loadProgress: () => R.progress(),
                      onTyping: F.type,
                      onPowerOff: F.off,
                      onButtonShift: be,
                    })),
                    (y.value = !0),
                    Pe(ue),
                    ue)
              );
            } catch (e) {
              throw ((v.value = !0), Pe(), e);
            }
          };
        return (
          t(() => [y.value, ..._e().map((e) => e && [e.el, e.plate])], ye, { flush: `post` }),
          t(
            () => [!!ee.value?.hot, !!ee.value?.pressed],
            ([e, t]) => ue?.setStartButton?.(e, t),
          ),
          t(
            () => s.replay,
            (e) => {
              e && s.takeReplay() && Ne();
            },
          ),
          t(p, (e) => {
            e === r.site && s.complete();
          }),
          N(() => {
            window.addEventListener(`resize`, ye);
          }),
          m(() => {
            (window.removeEventListener(`resize`, ye), (ue = null), le?.dispose(), F.dispose());
          }),
          e(() => {
            oe.dispose();
          }),
          (e, t) => (
            M(),
            _(
              `main`,
              { ref_key: `home`, ref: O, class: `home`, onClick: Ce },
              [
                p.value === r.site
                  ? L(``, !0)
                  : (M(), E(yy, { key: h.value, create: Fe, poster: `/img/hero-fallback.jpg` })),
                p.value === r.intro && S.value && !w.value && C.value
                  ? (M(),
                    E(_y, { key: 1, ref_key: `startButton`, ref: ee, box: C.value, onPress: we }, null, 8, [`box`]))
                  : L(``, !0),
                p.value === r.intro && v.value
                  ? (M(),
                    _(`div`, Ay, [
                      g.value && !D.value
                        ? (M(),
                          E(
                            In,
                            {
                              key: 0,
                              ref_key: `langButton`,
                              ref: te,
                              label: P(a).language.label,
                              "aria-label": P(a).t(`language`),
                              "aria-expanded": b.value,
                              title: P(a).t(`language`),
                              relief: y.value,
                              onPress: Ee,
                            },
                            null,
                            8,
                            [`label`, `aria-label`, `aria-expanded`, `title`, `relief`],
                          ))
                        : L(``, !0),
                      g.value && b.value && !D.value
                        ? (M(),
                          _(
                            k,
                            { key: 1 },
                            [
                              I(
                                In,
                                {
                                  ref_key: `firstOption`,
                                  ref: ne,
                                  label: P(a).others[0].label,
                                  order: 1,
                                  relief: y.value,
                                  onPress: (t[0] ||= (e) => De(P(a).others[0].code)),
                                },
                                null,
                                8,
                                [`label`, `relief`],
                              ),
                              I(
                                In,
                                {
                                  ref_key: `secondOption`,
                                  ref: re,
                                  label: P(a).others[1].label,
                                  order: 2,
                                  relief: y.value,
                                  onPress: (t[1] ||= (e) => De(P(a).others[1].code)),
                                },
                                null,
                                8,
                                [`label`, `relief`],
                              ),
                            ],
                            64,
                          ))
                        : L(``, !0),
                      g.value
                        ? (M(),
                          E(
                            Yn,
                            {
                              key: 2,
                              ref_key: `muteButton`,
                              ref: j,
                              class: l({ home__hidden: D.value }),
                              alarmed: x.value,
                              relief: y.value,
                              onPress: Te,
                            },
                            null,
                            8,
                            [`class`, `alarmed`, `relief`],
                          ))
                        : L(``, !0),
                      g.value
                        ? (M(),
                          E(
                            jn,
                            {
                              key: 3,
                              ref_key: `bugCounter`,
                              ref: ae,
                              class: l({ home__hidden: D.value }),
                              count: P(c).count,
                              relief: y.value,
                            },
                            null,
                            8,
                            [`class`, `count`, `relief`],
                          ))
                        : L(``, !0),
                      I(Fn, { ref_key: `enterButton`, ref: A, relief: y.value, onPress: Me }, null, 8, [`relief`]),
                      D.value
                        ? (M(),
                          E(
                            Gn,
                            {
                              key: 4,
                              ref_key: `confirm`,
                              ref: ie,
                              lines: P(a).t(`confirmLines`),
                              "yes-label": P(a).t(`yes`),
                              "no-label": P(a).t(`no`),
                              relief: y.value,
                              onConfirm: je,
                              onCancel: Oe,
                              onMiss: Ae,
                              onTouch: ke,
                            },
                            null,
                            8,
                            [`lines`, `yes-label`, `no-label`, `relief`],
                          ))
                        : L(``, !0),
                    ]))
                  : L(``, !0),
                p.value === r.site
                  ? (M(), E(hy, { key: 3, class: `home__site`, "follow-hash": P(d) }, null, 8, [`follow-hash`]))
                  : L(``, !0),
              ],
              512,
            )
          )
        );
      },
    },
    [[`__scopeId`, `data-v-76a1fefd`]],
  ),
  Fy = `not-found`,
  Iy = (e) => ({
    name: Fy,
    params: { missing: e.path.split(`/`).filter(Boolean) },
    query: e.query,
    hash: e.hash,
    replace: !0,
  }),
  Ly = se({
    history: re(`/`),
    routes: [
      { path: `/`, name: `home`, component: Py },
      {
        path: ge,
        name: `works`,
        component: () => Qp(() => import(`./WorksView-D-VGwM9j.js`), __vite__mapDeps([3, 4, 5, 6, 7, 8])),
      },
      {
        path: `${ge}/:slug`,
        name: le,
        component: () => Qp(() => import(`./CaseView-Danxi1MR.js`), __vite__mapDeps([9, 4, 5, 10])),
        props: !0,
        beforeEnter: (e) => (Pe(e.params.slug) ? !0 : Iy(e)),
      },
      {
        path: _e,
        name: `privacy`,
        component: () => Qp(() => import(`./PrivacyView-jbqzthsw.js`), __vite__mapDeps([11, 4, 6, 7, 12])),
      },
      {
        path: `/:missing(.*)*`,
        name: Fy,
        component: () => Qp(() => import(`./NotFoundView-CZUHmFqz.js`), __vite__mapDeps([13, 4, 14])),
      },
    ],
  });
te(he).use(ie()).use(Ly).mount(`#app`);
export {
  De as $,
  _l as A,
  $r as B,
  Bm as C,
  ep as D,
  Jp as E,
  q as F,
  $e as G,
  H,
  W as I,
  Ue as J,
  qe as K,
  Tc as L,
  el as M,
  K as N,
  Wf as O,
  Y as P,
  Le as Q,
  ni as R,
  Hm as S,
  Qp as T,
  En as U,
  Rr as V,
  Tn as W,
  Je as X,
  B as Y,
  We as Z,
  v_ as _,
  P_ as a,
  _e as at,
  Zg as b,
  j_ as c,
  O_ as d,
  Oe as et,
  D_ as f,
  Q as g,
  w_ as h,
  F_ as i,
  ge as it,
  vl as j,
  ml as k,
  A_ as l,
  T_ as m,
  L_ as n,
  ke as nt,
  N_ as o,
  E_ as p,
  Ye as q,
  I_ as r,
  Se as rt,
  M_ as s,
  iy as t,
  Pe as tt,
  k_ as u,
  h_ as v,
  Dm as w,
  lg as x,
  m_ as y,
  Wr as z,
};
