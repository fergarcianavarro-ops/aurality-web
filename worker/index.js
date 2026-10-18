// aurality · portero de la web (Cloudflare Workers).
// Sirve la misma web de siempre, pero con la tarjeta de vista previa (imagen, título y texto) que corresponde
// a cada enlace: /AU0212 enseña la portada de ese lanzamiento, /ufisi la foto del artista, /senal la Señal.
// Todo lo demás (imágenes, contenido, panel) lo sirve Cloudflare directamente, sin pasar por aquí.

const SECCIONES = {
  catalogo: ['Catálogo', 'El catálogo completo de aurality: lanzamientos y participaciones.'],
  roster: ['Roster', 'Los artistas de aurality.'],
  manifiesto: ['Manifiesto', 'Un sello no es un sonido. Es un criterio.'],
  contacto: ['Contacto', 'Demos, contrataciones y prensa.'],
};
const slug = a => String(a).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const titulo = t => !t || /S\/T/.test(t) ? 'Sin título' : t;

async function json(env, origen, f) {
  try { const r = await env.ASSETS.fetch(new URL('/contenido/' + f, origen)); return r.ok ? await r.json() : {}; } catch (e) { return {}; }
}

// qué tarjeta corresponde a cada dirección (null = la general de aurality)
async function tarjeta(env, origen, clave) {
  if (!clave) return null;
  const k = clave.toLowerCase();
  if (SECCIONES[k]) return { titulo: SECCIONES[k][0] + ' · aurality', texto: SECCIONES[k][1] };
  if (/^au\d+$/.test(k)) {
    const r = ((await json(env, origen, 'lanzamientos.json')).releases || []).find(x => x && String(x.code).toLowerCase() === k);
    if (r && r.fecha && new Date(String(r.fecha).slice(0, 10) + 'T00:00:00Z') > Date.now()) return null;   // lo que aún no ha salido no se destapa al compartir
    if (r) return { titulo: `${String(r.artist).toUpperCase()} — ${titulo(r.title)}`, texto: [r.code, r.format, r.year].filter(Boolean).join(' · ') + ' · aurality', imagen: r.cover };
  }
  if (k === 'senal' || k.startsWith('senal-')) {
    const s = await json(env, origen, 'senal.json'), lista = (s.senal || []).filter(x => x && x.mes && x.anio)
      .map(x => ({ ...x, code: x.code || String(x.mes).padStart(2, '0') + '_' + String(x.anio).slice(-2) }))
      .sort((a, b) => b.anio - a.anio || b.mes - a.mes);
    const e = k === 'senal' ? lista[0] : lista.find(x => x.code.toLowerCase() === k.slice(6));
    if (e) return { titulo: `Señal mensual ${e.code} · aurality`, texto: e.descripcion || 'La playlist mensual de aurality.', imagen: e.cover };
  }
  const a = ((await json(env, origen, 'artistas.json')).artists || []).find(x => x && x.name && slug(x.name) === k);
  if (a) return { titulo: `${String(a.name).toUpperCase()} · aurality`, texto: a.bio || [a.role, 'aurality'].filter(Boolean).join(' · '), imagen: a.photo };
  return null;
}

const pon = v => ({ element(el) { el.setAttribute('content', v); } });

// ---------- frecuencias ocultas: el portero ----------
// La lista de transmisiones y sus audios viven en web/tx/, pero nadie llega a ellos sin pasar por aquí:
// solo se entrega lo que está emitiendo en este momento. Lo que aún no ha empezado no existe; lo que ya terminó,
// solo deja su frecuencia y sus fechas en el registro.
const HORA_MADRID = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', hour: 'numeric', hourCycle: 'h23' });
const PARTES_MADRID = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Madrid', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23' });
// «2026-10-24T23:00» en hora de Madrid → instante
function deMadrid(txt) {
  const m = String(txt || '').match(/^(\d{4})-(\d{2})-(\d{2})(?:[T ](\d{2}):(\d{2}))?/); if (!m) return NaN;
  const ingenuo = Date.UTC(+m[1], m[2] - 1, +m[3], +(m[4] || 0), +(m[5] || 0));
  const p = Object.fromEntries(PARTES_MADRID.formatToParts(new Date(ingenuo)).map(x => [x.type, x.value]));
  const visto = Date.UTC(+p.year, p.month - 1, +p.day, +p.hour, +p.minute);
  return ingenuo - (visto - ingenuo);
}
async function transmisiones(env, origen) {
  try { const r = await env.ASSETS.fetch(new URL('/tx/transmisiones.json', origen)); if (!r.ok) return [];
    const d = await r.json();
    return (d.transmisiones || []).filter(t => t && t.id && t.audio && +t.frecuencia > 0).map(t => ({
      id: String(t.id).toUpperCase(), f: Math.round(+t.frecuencia * 10) / 10, audio: String(t.audio).replace(/^\//, ''), texto: t.texto || '',
      bienvenida: t.bienvenida === true || t.bienvenida === 'true', noche: t.horario === 'noche', desde: deMadrid(t.desde), hasta: deMadrid(t.hasta), dDesde: t.desde || '', dHasta: t.hasta || '' }));
  } catch (e) { return []; }
}
const emite = (t, ahora) => t.bienvenida || (t.desde <= ahora && ahora < t.hasta && (!t.noche || +HORA_MADRID.format(new Date(ahora)) < 6));
const sinCache = { 'cache-control': 'no-store' };
const comoJson = o => new Response(JSON.stringify(o), { headers: { ...sinCache, 'content-type': 'application/json; charset=utf-8' } });
const sinSenal = () => new Response('Sin señal', { status: 404, headers: { ...sinCache, 'content-type': 'text/plain; charset=utf-8' } });
async function portero(peticion, env, url) {
  const [, que, id] = url.pathname.split('/').filter(Boolean), ahora = Date.now(), lista = await transmisiones(env, url.origin);
  if (que === 'activas' && !id) return comoJson(lista.filter(t => emite(t, ahora)).map(t => ({ id: t.id, f: t.f, ...(t.bienvenida ? { b: 1 } : {}) })));
  if (que === 'registro' && !id) return comoJson(lista.filter(t => !t.bienvenida && t.hasta <= ahora).sort((a, b) => b.hasta - a.hasta)
    .map(t => ({ id: t.id, f: t.f, desde: t.dDesde, hasta: t.dHasta, noche: t.noche })));
  const t = id && lista.find(x => x.id === decodeURIComponent(id).toUpperCase());
  if (!t || !emite(t, ahora)) return sinSenal();
  if (que === 'i') return comoJson({ id: t.id, f: t.f, texto: t.texto, bienvenida: t.bienvenida });
  if (que === 'a') {
    const r = await env.ASSETS.fetch(new URL('/' + t.audio, url.origin));
    if (!r.ok) return sinSenal();
    // el iPhone pide el audio a trozos (Range) y no suena si no se le contesta así
    const buf = await r.arrayBuffer(), total = buf.byteLength, tipo = r.headers.get('content-type') || 'audio/mpeg';
    const h = { ...sinCache, 'content-type': tipo, 'accept-ranges': 'bytes' }, m = (peticion.headers.get('range') || '').match(/bytes=(\d*)-(\d*)/);
    if (!m) return new Response(buf, { headers: { ...h, 'content-length': String(total) } });
    let ini = m[1] === '' ? Math.max(0, total - +m[2]) : +m[1], fin = m[1] === '' || m[2] === '' ? total - 1 : Math.min(+m[2], total - 1);
    if (ini > fin || ini >= total) return new Response(null, { status: 416, headers: { ...h, 'content-range': `bytes */${total}` } });
    return new Response(buf.slice(ini, fin + 1), { status: 206, headers: { ...h, 'content-range': `bytes ${ini}-${fin}/${total}`, 'content-length': String(fin - ini + 1) } });
  }
  return sinSenal();
}

export default {
  async fetch(peticion, env) {
    const url = new URL(peticion.url);
    if (url.pathname === '/tx' || url.pathname.startsWith('/tx/')) return portero(peticion, env, url);
    if (/\.[a-z0-9]+$/i.test(url.pathname)) return env.ASSETS.fetch(peticion);            // un archivo que no es página: tal cual
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) return Response.redirect(url.origin + url.pathname.replace(/\/+$/, '') + url.search, 301);
    const pagina = await env.ASSETS.fetch(new URL('/', url.origin));
    if (peticion.method !== 'GET' || !(pagina.headers.get('content-type') || '').includes('text/html')) return pagina;
    const clave = decodeURIComponent(url.pathname.slice(1));
    const t = await tarjeta(env, url.origin, clave);
    const img = new URL(t && t.imagen ? t.imagen : 'og-image.jpg', url.origin + '/').href;
    let rw = new HTMLRewriter()
      .on('meta[property="og:image"]', pon(img)).on('meta[name="twitter:image"]', pon(img))
      .on('meta[property="og:url"]', pon(url.origin + url.pathname));
    if (t) {
      rw = rw.on('title', { element(el) { el.setInnerContent(t.titulo); } })
        .on('meta[property="og:title"]', pon(t.titulo)).on('meta[name="twitter:title"]', pon(t.titulo))
        .on('meta[property="og:description"]', pon(t.texto)).on('meta[name="description"]', pon(t.texto));
    }
    const r = rw.transform(pagina), h = new Headers(r.headers); h.set('Cache-Control', 'no-cache');
    return new Response(r.body, { status: 200, headers: h });
  },
};
