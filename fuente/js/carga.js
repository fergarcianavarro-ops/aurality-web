// arranque: el símbolo se forma agujero a agujero (397, barrido de dial) mientras se carga de verdad cada parte
(function () {
  const G = %%GEO_CARGA%%, cv = document.getElementById('cargaCv'), cx = cv.getContext('2d');
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches, t0 = performance.now();
  // llegada directa a una ficha o a una sección (un enlace compartido): primero el contenido, sin esperar a la escena ni al barrido
  const directo = window.__directo = location.pathname.length > 1 || (location.hash.length > 1 && location.hash !== '#escucha');
  const DUR = reduce || directo ? 0 : 1200;   // duración mínima del barrido: lo justo para que el símbolo se forme
  const PASOS = [['fuentes', 'TIPOGRAFÍAS'], ['motor', 'MOTOR 3D'], ['datos', 'CATÁLOGO'], ['piezas', 'PIEZAS AU-01 · AU-05'], ['escena', 'ESCENA']];
  const log = document.getElementById('cargaLog'), hecho = {}, CLAVE = directo ? ['datos'] : PASOS.map(p => p[0]);
  if (directo) document.getElementById('carga').classList.add('directa');
  PASOS.forEach(([k, t]) => { const li = document.createElement('li'); li.id = 'cl-' + k; li.innerHTML = `<span>${t}</span><i></i><b>···</b>`; log.appendChild(li); });
  const W = 520, H = 560, k = 2.25, ox = W / 2, oy = H / 2;
  const P = ([x, y]) => [ox + x * k, oy - y * k];
  const orden = G.h.map(p => ({ p: P(p), a: (Math.atan2(p[0], p[1]) + 2 * Math.PI) % (2 * Math.PI) })).sort((a, b) => a.a - b.a);
  let vis = 0, fin = false, tPrev = t0;
  function pinta(f) {
    cx.clearRect(0, 0, W, H);
    cx.lineWidth = 2; cx.strokeStyle = 'rgba(40,52,74,.28)';
    G.a.forEach(poly => { cx.beginPath(); poly.forEach((q, i) => { const [x, y] = P(q); i ? cx.lineTo(x, y) : cx.moveTo(x, y); }); cx.closePath(); cx.stroke(); });
    const n = Math.round(f * orden.length);
    orden.forEach((o, i) => { cx.beginPath(); cx.arc(o.p[0], o.p[1], 3.4, 0, 7);
      if (i < n) { cx.fillStyle = '#17181b'; cx.fill(); } else { cx.strokeStyle = 'rgba(40,52,74,.22)'; cx.lineWidth = 1.2; cx.stroke(); } });
    cx.beginPath(); G.t.forEach((q, i) => { const [x, y] = P(q); i ? cx.lineTo(x, y) : cx.moveTo(x, y); }); cx.closePath();
    if (f >= 1) { cx.fillStyle = '#0e0f12'; cx.fill(); } else { cx.strokeStyle = 'rgba(40,52,74,.35)'; cx.lineWidth = 2; cx.stroke(); }
    // aguja del dial
    if (f < 1) { const a = f * 2 * Math.PI; cx.strokeStyle = 'rgba(14,15,18,.55)'; cx.lineWidth = 2; cx.beginPath(); cx.moveTo(ox, oy); cx.lineTo(ox + Math.sin(a) * 250, oy - Math.cos(a) * 250); cx.stroke(); }
    document.getElementById('cargaPct').textContent = String(Math.round(f * 100)).padStart(3, '0');
  }
  function objetivo() { return CLAVE.filter(k => hecho[k]).length / CLAVE.length; }
  function bucle(now) {
    if (fin === 'hecho') return;
    const dt = Math.min(0.25, Math.max(0, (now - tPrev) / 1000)); tPrev = now;                       // todo por tiempo, no por fotogramas
    let tgt = objetivo();
    if (tgt < 1) tgt = Math.min(tgt + 0.12, tgt + (now - t0) / 40000);                 // avanza despacio entre pasos, sin pasarse
    tgt = Math.min(tgt, DUR ? (now - t0) / DUR : 1);                                   // el barrido nunca va más rápido que DUR
    vis = reduce || directo ? tgt : vis + (tgt - vis) * Math.min(1, dt * 7);
    if (fin && tgt >= 1 && vis > 0.985) vis = 1;
    pinta(Math.min(1, vis));
    if (fin && vis >= 0.999) { fin = 'hecho'; pinta(1); setTimeout(() => { const c = document.getElementById('carga'); c.classList.add('fuera'); setTimeout(() => c.remove(), 1000); }, reduce || directo ? 0 : 350); return; }
    requestAnimationFrame(bucle);
  }
  window.__carga = {
    mark(k, txt) { if (hecho[k]) return; hecho[k] = 1; const li = document.getElementById('cl-' + k); if (li) { li.classList.add('ok'); li.querySelector('b').textContent = txt || 'OK'; }
      if (objetivo() >= 1) setTimeout(() => { fin = true; }, Math.max(0, DUR - (performance.now() - t0))); },
  };
  (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => window.__carga.mark('fuentes'));
  setTimeout(() => PASOS.forEach(([k]) => window.__carga.mark(k, hecho[k] ? undefined : '—')), 12000);   // nunca se queda colgada
  requestAnimationFrame(bucle);
})();
