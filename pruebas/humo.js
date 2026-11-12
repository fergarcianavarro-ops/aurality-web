// aurality · pruebas de humo de la web: la abre en ordenador, tablet (vertical y horizontal) y móvil, recorre las secciones
// y avisa si algo se rompe (errores del programa, archivos que faltan, secciones vacías, fallos graves de accesibilidad).
//
//   1) en una terminal:  npx wrangler dev --port 8799        (la web en local, con el portero)
//   2) en otra:          node pruebas/humo.js [dirección]    (por defecto http://127.0.0.1:8799; vale también https://aurality.es)
//
// Necesita Playwright con Chromium (npx playwright install chromium). Las capturas quedan en pruebas/capturas/ (no se suben).
const { chromium } = require('playwright'); const fs = require('fs'), path = require('path');
const BASE = (process.argv[2] || 'http://127.0.0.1:8799').replace(/\/$/, ''), SAL = path.join(__dirname, 'capturas');
const SOLO = process.argv[3] ? process.argv[3].split(',') : null;
const AXE = fs.readFileSync(require.resolve('axe-core/axe.min.js'), 'utf8');
const PANTALLAS = [
  ['pc', { viewport: { width: 1440, height: 900 } }],
  ['tablet-h', { viewport: { width: 1180, height: 820 }, isMobile: true, hasTouch: true }],
  ['tablet-v', { viewport: { width: 820, height: 1180 }, isMobile: true, hasTouch: true }],
  ['movil', { viewport: { width: 393, height: 852 }, isMobile: true, hasTouch: true, deviceScaleFactor: 2 }],
  ['sin-grafica', { viewport: { width: 1440, height: 900 } }],   // un equipo sin aceleración gráfica: imagen fija en lugar de la escena 3D
].filter(([n]) => !SOLO || SOLO.includes(n));
const VISTAS = ['catalogo', 'AU0212', 'roster', 'editorial', 'senal', 'manifiesto', 'contacto', 'archivo', 'archivo-AU0212'];   // las dos últimas: el piloto de «la máquina abierta»
const fallos = [], avisos = [];

(async () => {
  fs.mkdirSync(SAL, { recursive: true });
  const b = await chromium.launch({ args: ['--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
  for (const [nom, o] of PANTALLAS) {
    const ctx = await b.newContext(o), p = await ctx.newPage(); p.setDefaultTimeout(90000); const cdp = await ctx.newCDPSession(p);
    // las pruebas corren sin tarjeta gráfica: se fuerza la escena 3D salvo en la pasada que comprueba el modo sin gráfica
    if (nom !== 'sin-grafica') await ctx.addInitScript(() => { try { localStorage.setItem('au-grafica', 'si'); } catch (e) {} });
    const foto = async f => { const { data } = await cdp.send('Page.captureScreenshot', { format: 'jpeg', quality: 72 }); fs.writeFileSync(path.join(SAL, f), Buffer.from(data, 'base64')); };
    let kb = 0, n = 0;
    p.on('pageerror', e => fallos.push(`${nom}: error del programa · ${e.message}`));
    p.on('console', m => { if (m.type() === 'error' && !/soundcloud|sndcdn|net::ERR|WebGL/i.test(m.text())) fallos.push(`${nom}: consola · ${m.text().slice(0, 160)}`); });
    p.on('response', async r => { const u = r.url(); if (!u.startsWith(BASE)) return; n++;
      if (r.status() >= 400 && !/\/tx\//.test(u)) fallos.push(`${nom}: ${r.status()} ${u.slice(BASE.length)}`);
      try { kb += (await r.body()).length / 1024; } catch (e) {} });
    // 1 · portada: de la carga a ENCENDER
    const t0 = Date.now(); await p.goto(BASE + '/'); await p.waitForFunction(() => !document.getElementById('carga'), null, { timeout: 180000 });
    const tCarga = Date.now() - t0;
    if (!await p.evaluate(() => { const e = document.getElementById('encendido'); return e && !e.classList.contains('fuera'); })) fallos.push(`${nom}: en la portada no aparece ENCENDER`);
    await foto(nom + '_0_encender.jpg'); await p.evaluate(() => document.getElementById('bMudo').click()); await p.waitForTimeout(2200); await foto(nom + '_1_portada.jpg');
    const pesoPortada = Math.round(kb), nPortada = n;
    // 2 · cada sección: tiene contenido, no se sale de la pantalla a lo ancho y pasa la accesibilidad grave
    for (const v of VISTAS) {
      await p.evaluate(h => { location.hash = h; }, v); await p.waitForTimeout(1400);
      const m = await p.evaluate(() => { const P = document.getElementById('panel'); return { oculto: P.hidden, txt: P.innerText.trim().length, ancho: document.documentElement.scrollWidth - innerWidth,
        rotas: [...P.querySelectorAll('img')].filter(i => i.complete && !i.naturalWidth).length }; });
      if (m.oculto || m.txt < 40) fallos.push(`${nom}/${v}: la sección sale vacía`);
      if (m.ancho > 2) fallos.push(`${nom}/${v}: la página se desborda ${m.ancho} px a lo ancho`);
      if (m.rotas) fallos.push(`${nom}/${v}: ${m.rotas} imágenes rotas`);
      await p.evaluate(AXE); const ax = await p.evaluate(async () => (await axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] })).violations.filter(x => x.impact === 'serious' || x.impact === 'critical').map(x => `${x.id} (${x.nodes.length}: ${x.nodes[0].target.join(' ')})`));
      ax.forEach(a => avisos.push(`${nom}/${v}: accesibilidad · ${a}`));
      await foto(`${nom}_${v}.jpg`);
    }
    if (nom === 'sin-grafica' && !await p.evaluate(() => document.body.classList.contains('sin-escena'))) fallos.push('sin-grafica: no ha entrado en el modo de imagen fija');
    await ctx.close();
    // 3 · enlace directo a una ficha: se ve sin pasar por ENCENDER
    const c2 = await b.newContext(o), q = await c2.newPage(); q.setDefaultTimeout(90000);
    if (nom !== 'sin-grafica') await c2.addInitScript(() => { try { localStorage.setItem('au-grafica', 'si'); } catch (e) {} });
    q.on('pageerror', e => fallos.push(`${nom}/directo: error del programa · ${e.message}`));
    const t1 = Date.now(); await q.goto(BASE + '/AU0212'); await q.waitForFunction(() => !document.getElementById('carga') || document.getElementById('carga').classList.contains('fuera'), null, { timeout: 180000 });
    const tDirecto = Date.now() - t1, d = await q.evaluate(() => ({ panel: !document.getElementById('panel').hidden && /AU0212/.test(document.getElementById('panel').innerText), puerta: !document.getElementById('encendido').classList.contains('fuera'), titulo: document.title }));
    if (!d.panel) fallos.push(`${nom}/directo: /AU0212 no enseña la ficha`); if (d.puerta) fallos.push(`${nom}/directo: /AU0212 sigue pidiendo ENCENDER`);
    await q.waitForTimeout(600); const c3 = await c2.newCDPSession(q); fs.writeFileSync(path.join(SAL, nom + '_directo.jpg'), Buffer.from((await c3.send('Page.captureScreenshot', { format: 'jpeg', quality: 72 })).data, 'base64'));
    await c2.close();
    console.log(`${nom.padEnd(9)} portada lista en ${tCarga} ms · ficha directa en ${tDirecto} ms · «${d.titulo}»`);
  }
  await b.close();
  // 4 · lo que ve un buscador (sin ejecutar el programa)
  for (const [u, debe] of [['/', /aurality/i], ['/AU0212', /ESTIU|PARANOID/i], ['/catalogo', /AU0212/], ['/roster', /UFISI/i], ['/sitemap.xml', /AU0212/], ['/robots.txt', /User-agent/i]]) {
    try { const r = await fetch(BASE + u), t = await r.text(), cuerpo = t.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
      if (!r.ok || !debe.test(cuerpo)) avisos.push(`buscadores: ${u} no trae su contenido sin ejecutar el programa`); } catch (e) { avisos.push(`buscadores: ${u} · ${e.message}`); }
  }
  avisos.forEach(a => console.log('  aviso ·', a)); fallos.forEach(f => console.log('  FALLO ·', f));
  console.log(fallos.length ? `\n${fallos.length} fallos` : `\nTodo en orden (${avisos.length} avisos)`); process.exit(fallos.length ? 1 : 0);
})();
