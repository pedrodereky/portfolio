// "Superquadra": cada projeto vira um bloco sobre pilotis.
// Altura = telas + funções de back-end. Cobertura = azulejo do projeto.
import {
  WebGLRenderer,
  Scene,
  OrthographicCamera,
  BoxGeometry,
  PlaneGeometry,
  MeshLambertMaterial,
  MeshBasicMaterial,
  ShadowMaterial,
  InstancedMesh,
  Mesh,
  Object3D,
  Color,
  HemisphereLight,
  DirectionalLight,
  Raycaster,
  Vector2,
  CanvasTexture,
  RepeatWrapping,
  SRGBColorSpace,
  PCFShadowMap,
  LineSegments,
  LineBasicMaterial,
  BufferGeometry,
  Float32BufferAttribute,
  Group,
} from "three";
import { tileCanvas } from "./tiles.js";

const C = {
  concreto: new Color("#E4E0D8"),
  cobalto: new Color("#1D3FBF"),
  nucleo: new Color("#151515"),
};

const FLOOR_H = 0.2;
const FLOOR_GAP = 0.09;
const PILOTI_H = 0.62;
const LEN = 2.5;
const DEP = 0.86;
const SPACING = 3.5;

export function floorsFor(p) {
  const size = (p.telas || 0) + (p.funcoes || 0);
  return Math.max(2, Math.min(11, 1 + Math.round(Math.sqrt(size) * 1.0)));
}

export function createCity(host, projects, opts = {}) {
  const { sound, onHover, onSelect, reduced = false } = opts;

  let renderer;
  try {
    renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: "high-performance" });
  } catch (e) {
    return null;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.outputColorSpace = SRGBColorSpace;
  host.appendChild(renderer.domElement);
  renderer.domElement.setAttribute("aria-hidden", "true");

  const scene = new Scene();
  const camera = new OrthographicCamera(-10, 10, 10, -10, -100, 200);

  // luz
  scene.add(new HemisphereLight(0xffffff, 0x8e8a82, 1.55));
  const sun = new DirectionalLight(0xffffff, 1.9);
  sun.position.set(-9, 16, 7);
  sun.castShadow = true;
  sun.shadow.mapSize.set(2048, 2048);
  const sc = sun.shadow.camera;
  sc.left = -14; sc.right = 14; sc.top = 14; sc.bottom = -14; sc.near = 1; sc.far = 60;
  sun.shadow.bias = -0.0008;
  scene.add(sun);

  // chão: só recebe sombra, o concreto do CSS aparece por trás
  const ground = new Mesh(new PlaneGeometry(80, 80), new ShadowMaterial({ opacity: 0.22 }));
  ground.rotation.x = -Math.PI / 2;
  ground.receiveShadow = true;
  scene.add(ground);

  // layout da quadra
  const n = projects.length;
  const cols = Math.ceil(Math.sqrt(n));
  const rows = Math.ceil(n / cols);
  const ox = ((cols - 1) * SPACING) / 2;
  const oz = ((rows - 1) * SPACING) / 2;

  // contorno da superquadra
  {
    const hw = ox + SPACING * 0.62;
    const hd = oz + SPACING * 0.62;
    const pts = [
      -hw, 0.01, -hd, hw, 0.01, -hd,
      hw, 0.01, -hd, hw, 0.01, hd,
      hw, 0.01, hd, -hw, 0.01, hd,
      -hw, 0.01, hd, -hw, 0.01, -hd,
      // eixo
      -hw - 3, 0.01, 0, -hw - 0.6, 0.01, 0,
      hw + 0.6, 0.01, 0, hw + 3, 0.01, 0,
    ];
    const g = new BufferGeometry();
    g.setAttribute("position", new Float32BufferAttribute(pts, 3));
    scene.add(new LineSegments(g, new LineBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45 })));
  }

  const buildings = projects.map((p, i) => {
    const gx = i % cols;
    const gz = Math.floor(i / cols);
    return {
      p,
      i,
      x: gx * SPACING - ox,
      z: gz * SPACING - oz,
      rot: (gx + gz) % 2 ? Math.PI / 2 : 0,
      floors: floorsFor(p),
      rise: reduced ? 1 : 0,
      delay: reduced ? 0 : 0.25 + (gx + gz) * 0.09 + Math.random() * 0.12,
      pump: 0,
    };
  });

  const totalFloors = buildings.reduce((s, b) => s + b.floors, 0);
  const floorGeo = new BoxGeometry(LEN, FLOOR_H, DEP);
  const floorMat = new MeshLambertMaterial({ color: 0xffffff });
  const floors = new InstancedMesh(floorGeo, floorMat, totalFloors);
  floors.castShadow = true;
  floors.receiveShadow = true;
  const floorOwner = new Int16Array(totalFloors);

  const coreGeo = new BoxGeometry(LEN * 0.94, 1, DEP * 0.8);
  coreGeo.translate(0, 0.5, 0);
  const cores = new InstancedMesh(coreGeo, new MeshLambertMaterial({ color: C.nucleo }), n);
  cores.castShadow = true;

  const pilotiGeo = new BoxGeometry(0.09, PILOTI_H, 0.09);
  pilotiGeo.translate(0, PILOTI_H / 2, 0);
  const PILOTIS = 6;
  const pilotis = new InstancedMesh(pilotiGeo, new MeshLambertMaterial({ color: C.concreto }), n * PILOTIS * 2);
  pilotis.castShadow = true;

  let k = 0;
  buildings.forEach((b) => {
    b.firstFloor = k;
    for (let f = 0; f < b.floors; f++) {
      floorOwner[k] = b.i;
      floors.setColorAt(k, C.concreto);
      k++;
    }
  });
  floors.instanceColor.needsUpdate = true;

  // coberturas com o azulejo de cada projeto
  const roofs = new Group();
  const roofGeo = new PlaneGeometry(LEN, DEP);
  buildings.forEach((b) => {
    const mat = new MeshBasicMaterial({ color: 0xffffff });
    const m = new Mesh(roofGeo, mat);
    m.rotation.x = -Math.PI / 2;
    m.userData.index = b.i;
    b.roof = m;
    roofs.add(m);
    tileCanvas(b.p.id, 2, 256).then((cv) => {
      if (!cv) return;
      const t = new CanvasTexture(cv);
      t.colorSpace = SRGBColorSpace;
      t.wrapS = t.wrapT = RepeatWrapping;
      t.repeat.set(LEN / DEP / 2, 0.5);
      t.anisotropy = 4;
      mat.map = t;
      mat.needsUpdate = true;
      requestRender();
    });
  });
  scene.add(floors, cores, pilotis, roofs);

  const dummy = new Object3D();
  function layout(time) {
    let pi = 0;
    buildings.forEach((b) => {
      const visibleFloors = b.rise * b.floors;
      const stretch = 1 + b.pump * 0.55;
      const step = (FLOOR_H + FLOOR_GAP) * stretch;
      const baseY = PILOTI_H * Math.min(1, b.rise * 3);
      // pavimentos
      for (let f = 0; f < b.floors; f++) {
        const vis = Math.max(0, Math.min(1, visibleFloors - f));
        dummy.position.set(b.x, baseY + FLOOR_H / 2 + f * step, b.z);
        dummy.rotation.set(0, b.rot, 0);
        dummy.scale.set(1, vis < 1 ? Math.max(0.0001, vis) : 1, 1);
        dummy.updateMatrix();
        floors.setMatrixAt(b.firstFloor + f, dummy.matrix);
      }
      const h = Math.max(0.0001, Math.max(0, visibleFloors - 1) * step + FLOOR_H * Math.min(1, visibleFloors));
      // núcleo escuro (faixa de janelas entre lajes)
      dummy.position.set(b.x, baseY, b.z);
      dummy.scale.set(1, h, 1);
      dummy.updateMatrix();
      cores.setMatrixAt(b.i, dummy.matrix);
      // pilotis
      const s = Math.min(1, b.rise * 3);
      for (let side = -1; side <= 1; side += 2) {
        for (let q = 0; q < PILOTIS; q++) {
          const lx = -LEN / 2 + 0.16 + (q * (LEN - 0.32)) / (PILOTIS - 1);
          const lz = side * (DEP / 2 - 0.1);
          const cx = Math.cos(b.rot), sx = Math.sin(b.rot);
          dummy.position.set(b.x + lx * cx + lz * sx, 0, b.z - lx * sx + lz * cx);
          dummy.rotation.set(0, 0, 0);
          dummy.scale.set(1, Math.max(0.0001, s), 1);
          dummy.updateMatrix();
          pilotis.setMatrixAt(pi++, dummy.matrix);
        }
      }
      // cobertura
      b.roof.position.set(b.x, baseY + h + 0.004, b.z);
      b.roof.rotation.z = b.rot;
      b.roof.visible = b.rise > 0.98;
    });
    floors.instanceMatrix.needsUpdate = true;
    cores.instanceMatrix.needsUpdate = true;
    pilotis.instanceMatrix.needsUpdate = true;
  }

  // câmera
  let az = Math.PI * 0.25; // azimute
  const EL = 0.62; // elevação (rad)
  let targetAz = az;
  let parallax = 0;
  let zoom = 1;
  const state = { w: 1, h: 1 };

  function frame() {
    const w = state.w, h = state.h;
    const aspect = w / h;
    const narrow = w < 861 || aspect < 0.95;
    let halfW, halfH;
    if (narrow) {
      halfW = 12.6 / zoom;
      halfH = Math.max(halfW / aspect, 9 / zoom);
      halfW = halfH * aspect;
    } else {
      halfW = 18.5 / zoom;
      halfH = Math.max(halfW / aspect, 9.5 / zoom);
      halfW = halfH * aspect;
    }
    // em telas largas, a quadra fica à direita (o nome ocupa a esquerda)
    const shiftX = narrow ? 0 : -halfW * 0.36;
    const shiftY = narrow ? -halfH * 0.04 : -halfH * 0.02;
    camera.left = -halfW + shiftX;
    camera.right = halfW + shiftX;
    camera.top = halfH + shiftY;
    camera.bottom = -halfH + shiftY;
    camera.updateProjectionMatrix();
  }

  function placeCamera() {
    const a = az + parallax;
    const r = 40;
    camera.position.set(Math.sin(a) * Math.cos(EL) * r, Math.sin(EL) * r, Math.cos(a) * Math.cos(EL) * r);
    camera.lookAt(0, 1.2, 0);
  }

  function resize() {
    const rect = host.getBoundingClientRect();
    state.w = Math.max(1, rect.width);
    state.h = Math.max(1, rect.height);
    renderer.setSize(state.w, state.h, false);
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    frame();
    requestRender();
  }

  // interação
  const ray = new Raycaster();
  const ndc = new Vector2();
  let hovered = -1;
  let pointer = null;
  let dragging = false;
  let dragX = 0;
  let moved = 0;

  function pick(clientX, clientY) {
    const rect = renderer.domElement.getBoundingClientRect();
    ndc.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    ndc.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    ray.setFromCamera(ndc, camera);
    const hits = ray.intersectObjects([floors, cores, roofs], true);
    if (!hits.length) return -1;
    const h = hits[0];
    if (h.object === floors) return floorOwner[h.instanceId];
    if (h.object === cores) return h.instanceId;
    return h.object.userData.index ?? -1;
  }

  function setHover(i, x, y) {
    if (i !== hovered) {
      if (hovered >= 0) paint(hovered, C.concreto);
      hovered = i;
      if (hovered >= 0) paint(hovered, C.cobalto);
      renderer.domElement.style.cursor = hovered >= 0 ? "pointer" : dragging ? "grabbing" : "grab";
      requestRender();
    }
    onHover && onHover(hovered, x, y);
  }

  function paint(i, color) {
    const b = buildings[i];
    for (let f = 0; f < b.floors; f++) floors.setColorAt(b.firstFloor + f, color);
    floors.instanceColor.needsUpdate = true;
  }

  const el = renderer.domElement;
  el.style.cursor = "grab";
  el.style.touchAction = "pan-y";
  el.addEventListener("pointermove", (e) => {
    pointer = { x: e.clientX, y: e.clientY };
    if (dragging) {
      const dx = e.clientX - dragX;
      dragX = e.clientX;
      moved += Math.abs(dx);
      targetAz -= dx * 0.008;
      requestRender();
    }
    if (e.pointerType === "mouse") {
      const rect = el.getBoundingClientRect();
      if (!reduced) parallax = (((e.clientX - rect.left) / rect.width) - 0.5) * 0.25;
      setHover(pick(e.clientX, e.clientY), e.clientX, e.clientY);
    }
  });
  el.addEventListener("pointerdown", (e) => {
    dragging = true;
    dragX = e.clientX;
    moved = 0;
    if (e.pointerType === "mouse") el.style.cursor = "grabbing";
  });
  window.addEventListener("pointerup", (e) => {
    if (!dragging) return;
    dragging = false;
    if (e.target === el && moved < 6) {
      const i = pick(e.clientX, e.clientY);
      if (e.pointerType !== "mouse") {
        // toque: primeiro toque mostra o nome, o segundo abre o projeto
        if (i >= 0 && i === hovered) onSelect && onSelect(i);
        else setHover(i, e.clientX, e.clientY);
      } else if (i >= 0) {
        onSelect && onSelect(i);
      }
    }
    el.style.cursor = hovered >= 0 ? "pointer" : "grab";
  });
  el.addEventListener("pointerleave", () => {
    parallax = 0;
    if (!dragging) setHover(-1);
  });

  // loop
  let raf = 0;
  let running = false;
  let visible = true;
  let last = performance.now();
  let start = last;
  let needsRender = true;

  function requestRender() {
    needsRender = true;
    if (!running) loop();
  }

  function loop() {
    cancelAnimationFrame(raf);
    running = true;
    raf = requestAnimationFrame(tick);
  }

  function tick(now) {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    const t = (now - start) / 1000;

    let animating = false;
    // subida dos blocos
    buildings.forEach((b) => {
      if (b.rise < 1) {
        const p = Math.max(0, Math.min(1, (t - b.delay) / 1.5));
        b.rise = 1 - Math.pow(1 - p, 3);
        animating = true;
      }
    });
    // reação ao som
    const lvl = sound ? sound.level() : 0;
    buildings.forEach((b, i) => {
      const target = sound && sound.playing ? sound.band(i, buildings.length) * 0.9 + lvl * 0.4 : 0;
      const nb = b.pump + (target - b.pump) * 0.08;
      if (Math.abs(nb - b.pump) > 0.0005) animating = true;
      b.pump = reduced ? 0 : nb;
    });
    // rotação lenta
    if (!reduced && !dragging) targetAz += dt * 0.035;
    const naz = az + (targetAz - az) * 0.08;
    if (Math.abs(naz - az) > 1e-5) animating = true;
    az = naz;

    if (animating || needsRender || (!reduced && visible)) {
      layout(t);
      placeCamera();
      renderer.render(scene, camera);
      needsRender = false;
    }

    const keepGoing = visible && (!reduced || animating || needsRender);
    if (keepGoing) {
      raf = requestAnimationFrame(tick);
    } else {
      running = false;
    }
  }

  const io = new IntersectionObserver(
    ([entry]) => {
      visible = entry.isIntersecting && !document.hidden;
      if (visible) {
        last = performance.now();
        loop();
      }
    },
    { threshold: 0 }
  );
  io.observe(host);
  document.addEventListener("visibilitychange", () => {
    visible = !document.hidden;
    if (visible) {
      last = performance.now();
      loop();
    }
  });

  const ro = new ResizeObserver(resize);
  ro.observe(host);
  resize();
  layout(0);
  placeCamera();
  loop();

  return {
    highlight(i) {
      setHover(i);
    },
    wake() {
      last = performance.now();
      loop();
    },
    buildings,
  };
}
