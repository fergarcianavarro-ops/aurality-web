// Catálogo aurality hi-fi. Unidades: mm. Reglas comunes de la familia:
//   fondo 16 · radio de canto 2,4 · rejilla triangular de paso 4 con agujeros ø2,2 · piezas separadas por aire, sin chasis
import * as THREE from 'three';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';

export const DEPTH = 16, BEV = 2.4, PITCH = 4, HOLE_R = 1.1;
export const M = {
  body: new THREE.MeshPhysicalMaterial({ color: 0xe6e4de, roughness: 0.6, metalness: 0, clearcoat: 0.12, clearcoatRoughness: 0.6 }),
  key: new THREE.MeshPhysicalMaterial({ color: 0xecebe6, roughness: 0.32, metalness: 0, clearcoat: 0.5, clearcoatRoughness: 0.25 }),
  hole: new THREE.MeshStandardMaterial({ color: 0x17181b, roughness: 0.9 }),
  graphite: new THREE.MeshPhysicalMaterial({ color: 0x34373c, roughness: 0.5, metalness: 0.15 }),
};
const INK = '#2a2b2e', ENGRAVE = '#6f6d68';

export async function loadFont() { const ff = new FontFace('JBM', 'url(./jbm500.woff2)'); await ff.load(); document.fonts.add(ff); }

function extrude(shape, depth, bev, mat, seg = 96) {
  const g = new THREE.ExtrudeGeometry(shape, { depth: depth - 2 * bev, bevelEnabled: true, bevelThickness: bev, bevelSize: bev, bevelOffset: -bev, bevelSegments: 6, steps: 1, curveSegments: seg });
  g.translate(0, 0, -(depth - 2 * bev) / 2);
  // cantos suavizados, pero las caras planas conservan su normal exacta (evita sombreados falsos en la cara)
  const flat = g.attributes.normal.clone(), cg = toCreasedNormals(g, THREE.MathUtils.degToRad(32)), lid = g.groups[0];
  for (let i = lid.start; i < lid.start + lid.count; i++) cg.attributes.normal.setXYZ(i, flat.getX(i), flat.getY(i), flat.getZ(i));
  const m = new THREE.Mesh(cg, mat); m.castShadow = true; m.receiveShadow = true; return m;
}
function holes(points, z) {
  const inst = new THREE.InstancedMesh(new THREE.CircleGeometry(HOLE_R, 20), M.hole, points.length); const T = new THREE.Matrix4();
  points.forEach((p, i) => { const k = (p[2] || HOLE_R) / HOLE_R; T.makeScale(k, k, 1); T.setPosition(p[0], p[1], z); inst.setMatrixAt(i, T); }); return inst;
}
function texture(wmm, hmm, px, draw) {
  const c = document.createElement('canvas'); c.width = Math.round(wmm * px); c.height = Math.round(hmm * px);
  const x = c.getContext('2d'); x.scale(px, px); draw(x);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function label(wmm, hmm, px, draw) {
  return new THREE.Mesh(new THREE.PlaneGeometry(wmm, hmm), new THREE.MeshStandardMaterial({ map: texture(wmm, hmm, px, draw), transparent: true, depthWrite: false, roughness: 0.8 }));
}
function engraving(x, text, th, px = 40) {    // texto de canto: alto de letra th (mm), sobre banda de 7 mm. Se dibuja en píxeles reales.
  x.setTransform(1, 0, 0, 1, 0, 0);
  x.font = `500 ${Math.round(th * 1.32 * px)}px JBM`; x.textBaseline = 'middle'; x.fillStyle = ENGRAVE; x.letterSpacing = `${0.5 * px}px`; x.fillText(text, 0, 3.5 * px);
}

// ---------------- AU-01 · pieza principal ----------------
export function AU01(geo) {
  const g = new THREE.Group();
  for (const a of geo.arms) g.add(extrude(new THREE.Shape(a.pts.map(p => new THREE.Vector2(p[0], p[1]))), DEPTH, BEV, M.body));
  const key = extrude(new THREE.Shape(geo.tri.pts.map(p => new THREE.Vector2(p[0], p[1]))), DEPTH, 1.6, M.key); key.position.z = 3.5; g.add(key);
  g.add(holes(geo.holes, DEPTH / 2 + 0.06));
  const back = holes(geo.holes, 0); back.rotation.x = Math.PI; back.position.z = -DEPTH / 2 - 0.06; g.add(back);   // la rejilla también por detrás: el símbolo es simétrico y se lee igual al volverse
  const low = geo.arms.slice().sort((a, b) => a.centroid[1] - b.centroid[1])[0];
  const xmin = Math.min(...low.pts.filter(p => p[1] > -108 && p[1] < -42).map(p => p[0]));
  const pl = label(62, 7, 40, x => engraving(x, 'AURALITY  AU-01', 4.0)); pl.matrixAutoUpdate = false;
  const B = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0));
  B.setPosition(xmin - 0.05, -78, 0); pl.matrix.copy(B); g.add(pl);
  return g;
}

// ---------------- AU-02 · sintonizador ----------------
// Aro fijo ø180 con la escala de 12 posiciones y, dentro, un mando ø118 separado 3 mm de aire. El mando sobresale 4 mm.
export function AU02(month = 10) {
  const RO = 90, RI = 62, RK = 59, KOUT = 4;
  const g = new THREE.Group();
  const ring = new THREE.Shape(); ring.absarc(0, 0, RO, 0, Math.PI * 2, false);
  const hp = new THREE.Path(); hp.absarc(0, 0, RI, 0, Math.PI * 2, true); ring.holes.push(hp);
  g.add(extrude(ring, DEPTH, BEV, M.body));

  // escala serigrafiada: 60 divisiones, 12 mayores, numerales 01–12
  const sc = label(2 * RO, 2 * RO, 12, x => {
    x.translate(RO, RO); x.strokeStyle = INK; x.fillStyle = INK; x.lineCap = 'butt';
    for (let k = 0; k < 60; k++) {
      const a = (k * 6 - 90) * Math.PI / 180, major = k % 5 === 0, r0 = 66, r1 = r0 + (major ? 5 : 2.5);
      x.lineWidth = major ? 0.8 : 0.45; x.globalAlpha = major ? 1 : 0.7;
      x.beginPath(); x.moveTo(r0 * Math.cos(a), r0 * Math.sin(a)); x.lineTo(r1 * Math.cos(a), r1 * Math.sin(a)); x.stroke();
    }
    x.globalAlpha = 1; x.font = '500 5.2px JBM'; x.textAlign = 'center'; x.textBaseline = 'middle';
    for (let i = 1; i <= 12; i++) { const a = (i * 30 - 90) * Math.PI / 180; x.fillText(String(i).padStart(2, '0'), 79.5 * Math.cos(a), 79.5 * Math.sin(a) + 0.3); }
  });
  sc.position.z = DEPTH / 2 + 0.05; g.add(sc);

  // mando: índice de grafito y roseta central de 19 agujeros (misma rejilla que AU-01)
  const knob = new THREE.Group();
  const ks = new THREE.Shape(); ks.absarc(0, 0, RK, 0, Math.PI * 2, false);
  knob.add(extrude(ks, DEPTH + KOUT, BEV, M.key));
  const zt = (DEPTH + KOUT) / 2 + 0.05;
  const idx = label(2 * RK, 2 * RK, 14, x => { x.translate(RK, RK); x.fillStyle = INK; x.fillRect(-0.7, -52, 1.4, 20); });
  idx.position.z = zt; knob.add(idx);
  const ros = [], a2 = [PITCH * Math.cos(Math.PI / 6), PITCH * Math.sin(Math.PI / 6)];
  for (let i = -3; i <= 3; i++) for (let j = -3; j <= 3; j++) { const px = j * a2[0], py = i * PITCH + j * a2[1]; if (Math.hypot(px, py) <= 2 * PITCH + 0.1) ros.push([px, py]); }
  knob.add(holes(ros, zt + 0.01));
  knob.position.z = KOUT / 2; knob.rotation.z = -month * Math.PI / 6; g.add(knob);

  // inscripción en el canto exterior del aro, abajo a la izquierda
  const th0 = THREE.MathUtils.degToRad(315 - 17.5), tl = THREE.MathUtils.degToRad(35);
  const cg = new THREE.CylinderGeometry(RO + 0.12, RO + 0.12, 7, 64, 1, true, th0, tl); cg.rotateX(Math.PI / 2);
  g.add(new THREE.Mesh(cg, new THREE.MeshStandardMaterial({ map: texture(55, 7, 40, x => engraving(x, 'AURALITY  AU-02', 4.0)), transparent: true, depthWrite: false, roughness: 0.8 })));
  return g;
}

// polígono con esquinas redondeadas (para Shape o Path)
function roundPoly(target, pts, r) {
  const n = pts.length, v = (a, b) => new THREE.Vector2(b[0] - a[0], b[1] - a[1]);
  for (let i = 0; i < n; i++) {
    const P = pts[(i + n - 1) % n], V = pts[i], N = pts[(i + 1) % n];
    const u1 = v(V, P).normalize(), u2 = v(V, N).normalize();
    const d = r / Math.tan(Math.acos(u1.dot(u2)) / 2);
    const a = [V[0] + u1.x * d, V[1] + u1.y * d], b = [V[0] + u2.x * d, V[1] + u2.y * d];
    if (i === 0) target.moveTo(a[0], a[1]); else target.lineTo(a[0], a[1]);
    target.quadraticCurveTo(V[0], V[1], b[0], b[1]);
  }
  target.closePath(); return target;
}
const hexPts = R => [0, 1, 2, 3, 4, 5].map(k => [R * Math.cos(Math.PI / 2 + k * Math.PI / 3), R * Math.sin(Math.PI / 2 + k * Math.PI / 3)]);

// ---------------- AU-03 · altavoz ----------------
// Marco cuadrado de 168 con abertura hexagonal y, dentro, una placa hexagonal separada 3 mm de aire y hundida 2 mm.
// La rejilla es la misma red triangular: 15 anillos (721 agujeros) cuyo diámetro baja hacia el borde: ø2,2 · ø1,6 · ø1,0.
export function AU03() {
  const S = 84, RING = 15, INSET = 5.6, GAP = 3, SINK = 2;
  const Rf = RING * PITCH, Rp = Rf + INSET / Math.cos(Math.PI / 6), Ro = Rp + GAP / Math.cos(Math.PI / 6);
  const g = new THREE.Group();
  const frame = roundPoly(new THREE.Shape(), [[-S, -S], [S, -S], [S, S], [-S, S]], 8);
  frame.holes.push(roundPoly(new THREE.Path(), hexPts(Ro).reverse(), 5.5));
  g.add(extrude(frame, DEPTH, BEV, M.body, 24));
  const plate = extrude(roundPoly(new THREE.Shape(), hexPts(Rp), 4), DEPTH, BEV, M.body, 24); plate.position.z = -SINK; g.add(plate);
  const pts = [], a2 = [PITCH * Math.cos(Math.PI / 6), PITCH * Math.sin(Math.PI / 6)];
  for (let i = -RING; i <= RING; i++) for (let j = -RING; j <= RING; j++) {
    const n = Math.max(Math.abs(i), Math.abs(j), Math.abs(i + j)); if (n > RING) continue;
    pts.push([j * a2[0], i * PITCH + j * a2[1], n <= 10 ? 1.1 : (n <= 13 ? 0.8 : 0.5)]);
  }
  g.add(holes(pts, DEPTH / 2 - SINK + 0.06));
  const pl = label(62, 7, 40, x => engraving(x, 'AURALITY  AU-03', 4.0)); pl.matrixAutoUpdate = false;
  const B = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0));
  B.setPosition(-S - 0.05, -S + 12 + 31, 0); pl.matrix.copy(B); g.add(pl);
  g.userData = { Rf, Rp, Ro, holes: pts.length };
  return g;
}

// ---------------- AU-04 · corredor ----------------
// Cuerpo de 80 × 220 con tres ranuras pasantes de 6 × 160. Cada cursor flota 1,5 mm por encima de la cara.
// Recorrido de 144 mm en 12 pasos de 12 mm. Los tres canales son los tres ingredientes de la playlist: L · H · O.
export function AU04(levels = [4, 9, 7]) {
  const HW = 40, HH = 110, SX = [-24, 0, 24], SW = 3, Y0 = -86, Y1 = 74, TR0 = -78, STEP = 12;
  const g = new THREE.Group();
  const body = roundPoly(new THREE.Shape(), [[-HW, -HH], [HW, -HH], [HW, HH], [-HW, HH]], 8);
  for (const x of SX) body.holes.push(roundPoly(new THREE.Path(), [[x - SW, Y1], [x + SW, Y1], [x + SW, Y0], [x - SW, Y0]], 2.9));
  g.add(extrude(body, DEPTH, BEV, M.body, 24));

  const face = label(2 * HW, 2 * HH, 12, x => {
    x.translate(HW, HH); x.scale(1, -1); x.strokeStyle = INK; x.lineCap = 'butt';
    for (const sx of SX) for (let k = 0; k <= 12; k++) {
      const major = k % 6 === 0, y = TR0 + k * STEP;
      x.lineWidth = major ? 0.8 : 0.45; x.globalAlpha = major ? 1 : 0.7;
      x.beginPath(); x.moveTo(sx - 6, y); x.lineTo(sx - 6 - (major ? 5 : 2.5), y); x.stroke();
    }
    x.globalAlpha = 1; x.scale(1, -1); x.fillStyle = INK; x.font = '500 5.2px JBM'; x.textAlign = 'center'; x.textBaseline = 'middle';
    ['L', 'H', 'O'].forEach((t, i) => x.fillText(t, SX[i], 98.3));
  });
  face.position.z = DEPTH / 2 + 0.05; g.add(face);

  // roseta de 7 agujeros sobre el canal central: la firma de la familia
  const ros = [[0, 92]], a = PITCH; for (let k = 0; k < 6; k++) ros.push([a * Math.cos(Math.PI / 2 + k * Math.PI / 3), 92 + a * Math.sin(Math.PI / 2 + k * Math.PI / 3)]);
  g.add(holes(ros, DEPTH / 2 + 0.06));

  // cursores: 22 × 10 × 8, con índice de grafito, flotando 1,5 mm sobre la cara
  SX.forEach((sx, i) => {
    const cap = extrude(roundPoly(new THREE.Shape(), [[-11, -5], [11, -5], [11, 5], [-11, 5]], 2.4), 8, 1.6, M.key, 12);
    const z = DEPTH / 2 + 1.5 + 4; cap.position.set(sx, TR0 + levels[i] * STEP, z); g.add(cap);
    const ix = label(22, 10, 20, x => { x.fillStyle = INK; x.fillRect(2.5, 4.45, 17, 1.1); }); ix.position.set(sx, TR0 + levels[i] * STEP, z + 4.05); g.add(ix);
    (g.userData.cursores ||= []).push([cap, ix]);
  });
  g.userData.TR0 = TR0; g.userData.STEP = STEP;

  const pl = label(62, 7, 40, x => engraving(x, 'AURALITY  AU-04', 4.0)); pl.matrixAutoUpdate = false;
  const B = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0));
  B.setPosition(-HW - 0.05, -HH + 12 + 31, 0); pl.matrix.copy(B); g.add(pl);
  return g;
}

// ---------------- AU-05 · pulsador ----------------
// Marco de 200 × 68 con cinco teclas de 32 × 40 separadas 3 mm de aire. Las teclas sobresalen 4 mm;
// la activa (la central, el play) se hunde 2 mm. El estado se dice con relieve, no con color.
export function AU05(geo, active = 2) {
  const KW = 32, KH = 40, GAP = 3, N = 5, WALL = 11;
  const OW = N * KW + (N + 1) * GAP, OH = KH + 2 * GAP, HW = OW / 2 + WALL, HH = OH / 2 + WALL;
  const g = new THREE.Group();
  const frame = roundPoly(new THREE.Shape(), [[-HW, -HH], [HW, -HH], [HW, HH], [-HW, HH]], 8);
  frame.holes.push(roundPoly(new THREE.Path(), [[-OW / 2, OH / 2], [OW / 2, OH / 2], [OW / 2, -OH / 2], [-OW / 2, -OH / 2]], 5.5));
  g.add(extrude(frame, DEPTH, BEV, M.body, 24));

  const tc = geo.tri.centroid, tp = geo.tri.pts.map(p => [p[0] - tc[0], p[1] - tc[1]]);
  const th = Math.max(...tp.map(p => p[1])) - Math.min(...tp.map(p => p[1])), ts = 13 / th;
  const glyph = [
    null,                                                                          // 0 · roseta (agujeros reales)
    x => x.fillRect(-5.5, -5.5, 11, 11),                                           // 1 · cuadrado
    x => { x.beginPath(); tp.forEach((p, i) => i ? x.lineTo(p[0] * ts, -p[1] * ts) : x.moveTo(p[0] * ts, -p[1] * ts)); x.closePath(); x.fill(); },   // 2 · el triángulo del símbolo
    x => { x.fillRect(-5.5, -6, 3.6, 12); x.fillRect(1.9, -6, 3.6, 12); },         // 3 · dos barras
    x => { x.beginPath(); x.arc(0, 0, 6, 0, Math.PI * 2); x.fill(); },             // 4 · círculo
  ];
  for (let k = 0; k < N; k++) {
    const on = k === active, d = on ? DEPTH : DEPTH + 4, zc = on ? -2 : 2, cx = -OW / 2 + GAP + KW / 2 + k * (KW + GAP);
    const key = extrude(roundPoly(new THREE.Shape(), [[-KW / 2, -KH / 2], [KW / 2, -KH / 2], [KW / 2, KH / 2], [-KW / 2, KH / 2]], 4), d, BEV, M.key, 16);
    key.position.set(cx, 0, zc); g.add(key);
    const zt = zc + d / 2 + 0.05;
    if (glyph[k]) { const l = label(KW, KH, 16, x => { x.translate(KW / 2, KH / 2); x.fillStyle = INK; glyph[k](x); }); l.position.set(cx, 0, zt); g.add(l); }
    else { const ros = [[cx, 0]]; for (let a = 0; a < 6; a++) ros.push([cx + PITCH * Math.cos(Math.PI / 2 + a * Math.PI / 3), PITCH * Math.sin(Math.PI / 2 + a * Math.PI / 3)]); g.add(holes(ros, zt + 0.01)); }
  }
  const pl = label(52, 7, 40, x => engraving(x, 'AURALITY  AU-05', 3.6)); pl.matrixAutoUpdate = false;
  const B = new THREE.Matrix4().makeBasis(new THREE.Vector3(0, 1, 0), new THREE.Vector3(0, 0, -1), new THREE.Vector3(-1, 0, 0));
  B.setPosition(-HW - 0.05, 0.5, 0); pl.matrix.copy(B); g.add(pl);
  g.userData = { ancho: 2 * HW, alto: 2 * HH };
  return g;
}

// ---------------- AU-06 · funda de pen (SanDisk Ultra Fit, 29,8 × 14,3 × 5 mm) ----------------
// Bloque 56 × 22 × 10, canto 1,6. Cara A: mando. Cara B: rejilla completa (paso 4, ø2,2). variant 'a' = deslizante, 'b' = tapa.
export function AU06(variant = 'a', open = 0, acc = null, slot = 'dark') {
  const D = 10, BV = 1.6, HX = 28, HY = 11, TRAVEL = 13.5;
  const g = new THREE.Group();
  const keyMat = acc !== null ? new THREE.MeshPhysicalMaterial({ color: acc, roughness: 0.38, clearcoat: 0.5, clearcoatRoughness: 0.25 }) : M.key;
  const metal = new THREE.MeshStandardMaterial({ color: 0xdfe2e6, metalness: 0.75, roughness: 0.42 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x15161a, roughness: 0.9 });
  const box = (x0, x1, r) => roundPoly(new THREE.Shape(), [[x0, -HY], [x1, -HY], [x1, HY], [x0, HY]], r);
  const tri = (cx) => roundPoly(new THREE.Shape(), [[cx - 5.2, 0], [cx + 2.6, -4.5], [cx + 2.6, 4.5]], 1.1);
  const plug = (tip) => {            // conector USB-A: 12 × 4,5, con sus dos ventanas
    const p = new THREE.Group(); const m = new THREE.Mesh(new THREE.BoxGeometry(13, 12, 4.5), metal); m.castShadow = true; p.add(m);
    for (const s of [1, -1]) { const w = label(13, 12, 30, x => { x.fillStyle = '#17181b'; x.fillRect(3.4, 2.2, 2.2, 2.2); x.fillRect(3.4, 7.6, 2.2, 2.2); }); w.position.z = s * 2.28; if (s < 0) w.rotation.x = Math.PI; p.add(w); }
    const e = new THREE.Mesh(new THREE.PlaneGeometry(3.3, 10.8), dark); e.rotation.y = -Math.PI / 2; e.position.x = -6.52; p.add(e);
    p.position.x = tip + 6.5; return p;
  };
  // rejilla de la cara B
  let pts = []; const cx = PITCH * Math.cos(Math.PI / 6);
  for (let c = -7; c <= 7; c++) for (let y = (c % 2 === 0 ? -8 : -6); y <= 8; y += 4) pts.push([c * cx, y]);
  const LAN = [7 * cx, 6];                                         // este agujero atraviesa la pieza: paso del cordón
  let insX = 4;
  if (variant === 'a') {
    const bs = box(-HX, HX, 3);
    if (slot === 'white') {                                       // ranura hundida en el propio blanco: carril de 4 mm con suelo a 1,6
      bs.holes.push(roundPoly(new THREE.Path(), [[-24, 2], [3.6, 2], [3.6, -2], [-24, -2]], 1.95));
      const fl = new THREE.Mesh(new THREE.PlaneGeometry(30, 6), M.body); fl.position.set(-10.2, 0, D / 2 - 1.6); fl.receiveShadow = true; g.add(fl);
      const bk = new THREE.Mesh(new THREE.PlaneGeometry(31, 7.6), M.body); bk.rotation.x = Math.PI; bk.position.set(-10.2, 0, -D / 2 - 0.02); bk.receiveShadow = true; g.add(bk);   // la ranura no atraviesa: cara B cerrada
    }
    g.add(extrude(bs, D, BV, M.body, 12));
    const kx = -3 - TRAVEL * open;
    const face = label(2 * HX, 2 * HY, 40, x => {
      x.translate(HX, HY); if (slot !== 'white') { x.fillStyle = '#1b1c1f'; x.beginPath(); x.roundRect(-23.6, -1.5, 26.8, 3, 1.5); x.fill(); }
      x.strokeStyle = INK; x.lineWidth = 0.45; for (const tx of [-3, -3 - TRAVEL]) { x.beginPath(); x.moveTo(tx, 6.0); x.lineTo(tx, 7.6); x.stroke(); }
      x.fillStyle = INK; x.font = '500 2.3px JBM'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('0', -3, 9.2); x.fillText('I', -3 - TRAVEL, 9.2);
    });
    face.position.z = D / 2 + 0.04; g.add(face);
    const key = extrude(tri(0), 3.4, 0.8, keyMat, 12); key.position.set(kx, 0, D / 2 + 0.7 + 1.7); g.add(key);
    g.add(plug(-HX + 1 - TRAVEL * open));
    const mouth = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 12.6), dark); mouth.rotation.y = -Math.PI / 2; mouth.position.x = -HX - 0.03; g.add(mouth);
  } else {
    const GAP = 1, XC = -12.5;                                      // la tapa llega hasta XC; el cuerpo empieza en XC + GAP
    g.add(extrude(box(XC + GAP, HX, 2.4), D, BV, M.body, 12));
    const cap = extrude(box(-HX, XC, 2.4), D, BV, M.body, 12); cap.position.x = -22 * open; g.add(cap);
    g.add(plug(XC + GAP - 12.5));
    const mark = extrude(tri(-1), 1.3, 0.4, keyMat, 12); mark.position.z = D / 2 + 0.25; g.add(mark);
    pts = pts.filter(p => Math.abs(p[0] - (XC + GAP / 2)) > 2.2); insX = 8;
    if (open) { const m2 = new THREE.Mesh(new THREE.PlaneGeometry(5.0, 12.6), dark); m2.rotation.y = Math.PI / 2; m2.position.x = XC + 0.03 - 22 * open; g.add(m2); }
  }
  g.add(holes([LAN], D / 2 + 0.06));
  const back = holes(pts, 0); back.rotation.x = Math.PI; back.position.z = -D / 2 - 0.06; g.add(back);
  if (variant === 'b' && open) { const bc = holes(pts.filter(p => p[0] < -12), 0); }
  const pl = label(40, 7, 40, x => engraving(x, 'AURALITY  AU-06', 2.5)); pl.rotation.x = Math.PI / 2; pl.position.set(insX, -HY - 0.05, 0); g.add(pl);
  g.userData = { holes: pts.length };
  return g;
}
