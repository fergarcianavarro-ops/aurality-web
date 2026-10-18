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

export default {
  async fetch(peticion, env) {
    const url = new URL(peticion.url);
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
