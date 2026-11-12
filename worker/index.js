// aurality · portero de la web (Cloudflare Workers).
// Sirve la misma web de siempre, pero con la tarjeta de vista previa (imagen, título y texto) que corresponde
// a cada enlace: /AU0212 enseña la portada de ese lanzamiento, /ufisi la foto del artista, /senal la Señal.
// Además deja dentro de cada página su contenido real en texto (la ficha, el artista, la Señal…), su dirección
// canónica y sus datos de música, para que buscadores y lectores sin JavaScript vean lo mismo que una persona;
// y publica /sitemap.xml y /robots.txt, siempre al día con lo que se guarda en el panel.
// Todo lo demás (imágenes, contenido, panel) lo sirve Cloudflare directamente, sin pasar por aquí.

const SECCIONES = {
  catalogo: ['Catálogo', 'El catálogo completo de aurality: lanzamientos y participaciones.'],
  roster: ['Roster', 'Los artistas de aurality.'],
  manifiesto: ['Manifiesto', 'Un sello no es un sonido. Es un criterio.'],
  contacto: ['Contacto', 'Demos, contratación y prensa.'],
  editorial: ['Línea editorial', 'Lo que firma el sello: ediciones curadas y la Señal mensual.'],
  kit: ['Kit de prensa', 'El sello, el roster, los logos y el contacto de prensa de aurality.'],
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
  const esKit = k.startsWith('kit-'), ks = esKit ? k.slice(4) : k;
  const a = ((await json(env, origen, 'artistas.json')).artists || []).find(x => x && x.name && slug(x.name) === ks);
  if (a && esKit) return { titulo: `${String(a.name).toUpperCase()} · kit de prensa · aurality`, texto: a.bio_corta || a.bio || [a.role, 'aurality'].filter(Boolean).join(' · '), imagen: a.photo };
  if (a) return { titulo: `${String(a.name).toUpperCase()} · aurality`, texto: a.bio || [a.role, 'aurality'].filter(Boolean).join(' · '), imagen: a.photo };
  return null;
}

const pon = v => ({ element(el) { el.setAttribute('content', v); } });

// ---------- lo que lee un buscador: el contenido de cada dirección, en texto ----------
const SITIO = 'https://aurality.es';                       // la dirección buena (la canónica), se entre por donde se entre
const MESES = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
const esc = t => String(t == null ? '' : t).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const parrafos = t => String(t || '').split(/\n\s*\n/).map(x => x.trim()).filter(Boolean).map(x => `<p>${esc(x)}</p>`).join('');
const abs = u => u ? new URL(String(u).replace(/^\/?/, '/'), SITIO).href : undefined;
const futuro = r => r && r.fecha && new Date(String(r.fecha).slice(0, 10) + 'T00:00:00Z') > Date.now();
const enlace = (u, t) => u ? `<a href="${esc(u)}" rel="noopener">${esc(t)}</a>` : '';
const nombres = r => String(r.artist || '').toUpperCase();
const refLi = r => `<li><a href="/${esc(r.code)}">${esc(nombres(r))} — ${esc(titulo(r.title))}</a> · ${esc([r.code, r.format, r.year].filter(Boolean).join(' · '))}</li>`;
const sello = { '@type': 'Organization', name: 'aurality', url: SITIO + '/' };
const TIPO_ALBUM = { SINGLE: 'SingleRelease', EP: 'EPRelease', 'ÁLBUM': 'AlbumRelease', REMIXES: 'AlbumRelease', EDIT: 'SingleRelease' };

// devuelve { ruta (canónica), html (contenido), ld (datos estructurados) } o null si la dirección no existe
async function contenido(env, origen, clave) {
  const k = clave.toLowerCase(), lee = f => json(env, origen, f);
  const lanz = async () => ((await lee('lanzamientos.json')).releases || []).filter(r => r && r.code && r.artist && !futuro(r))
    .sort((a, b) => String(b.code).localeCompare(String(a.code), 'es', { numeric: true }));
  const arts = async () => ((await lee('artistas.json')).artists || []).filter(a => a && a.name);
  const senales = async () => { const s = await lee('senal.json'); return { playlist: s.senal_playlist || '', lista: (s.senal || []).filter(x => x && x.mes && x.anio)
    .map(x => ({ ...x, code: x.code || String(x.mes).padStart(2, '0') + '_' + String(x.anio).slice(-2) })).sort((a, b) => b.anio - a.anio || b.mes - a.mes) }; };
  const nav = '<nav><a href="/catalogo">Catálogo</a> · <a href="/roster">Roster</a> · <a href="/editorial">Línea editorial</a> · <a href="/manifiesto">Manifiesto</a> · <a href="/contacto">Contacto</a></nav>';

  if (!k || k === 'escucha') {
    const [rs, tx] = await Promise.all([lanz(), lee('textos.json')]), m = tx.manifiesto || {};
    return { ruta: '/', html: `<h1>aurality</h1><p>Sello y plataforma creativa de Elda. ${esc(m.titular || '')}</p>${nav}<h2>Últimos lanzamientos</h2><ul>${rs.slice(0, 8).map(refLi).join('')}</ul>`,
      ld: [{ '@context': 'https://schema.org', '@type': 'Organization', name: 'aurality', alternateName: 'aura-of-reality', url: SITIO + '/', logo: SITIO + '/icono-512.png', description: 'Sello y plataforma creativa de Elda.',
        address: { '@type': 'PostalAddress', addressLocality: 'Elda', addressCountry: 'ES' }, sameAs: [(tx.contacto || {}).instagram].filter(Boolean) },
        { '@context': 'https://schema.org', '@type': 'WebSite', name: 'aurality', url: SITIO + '/', inLanguage: 'es' }] };
  }
  if (k === 'catalogo') { const rs = await lanz();
    return { ruta: '/catalogo', html: `<h1>Catálogo de aurality</h1><p>${rs.length} referencias: lanzamientos del sello y participaciones de sus artistas.</p><ul>${rs.map(refLi).join('')}</ul>${nav}`,
      ld: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Catálogo de aurality', itemListElement: rs.map((r, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITIO}/${r.code}`, name: `${nombres(r)} — ${titulo(r.title)}` })) }] }; }
  if (/^au\d+$/.test(k)) {
    const todos = (await lee('lanzamientos.json')).releases || [], bruto = todos.find(x => x && String(x.code).toLowerCase() === k);
    if (!bruto) return null;
    if (futuro(bruto)) return { ruta: '/' + String(bruto.code).toUpperCase(), html: `<h1>aurality</h1><p>Próximo lanzamiento.</p>${nav}`, ld: [], reservado: true };   // lo que aún no ha salido no se destapa
    const r = bruto, cod = String(r.code).toUpperCase(), fecha = /^\d{4}-\d{2}-\d{2}/.test(String(r.fecha || '')) ? String(r.fecha).slice(0, 10) : '';
    const temas = (r.tracks || []).map(t => typeof t === 'string' ? t : (t && t.titulo) || '').filter(Boolean);
    const creds = (r.credits || []).map(c => Array.isArray(c) ? c : [c.rol || '', c.nombre || '']).filter(([a]) => a);
    const parts = (r.participantes || []).map(x => Array.isArray(x) ? x : [(x && x.artista) || '', (x && x.rol) || '']).filter(([a]) => a);
    const escucha = [enlace(r.soundcloud, 'SoundCloud'), enlace(r.spotify, 'Spotify'), enlace(r.bandcamp, 'Bandcamp')].filter(Boolean);
    return { ruta: '/' + cod, html: `<h1>${esc(nombres(r))} — ${esc(titulo(r.title))}</h1>
      <p>${esc([cod, r.format, r.genre, fecha || r.year].filter(Boolean).join(' · '))} · aurality</p>
      ${r.cover ? `<img src="${esc(abs(r.cover))}" alt="Portada de ${esc(titulo(r.title))}" width="640" height="640">` : ''}
      ${escucha.length ? `<p>Escuchar: ${escucha.join(' · ')}</p>` : ''}${parrafos(r.historia)}
      ${temas.length ? `<h2>Temas</h2><ol>${temas.map(t => `<li>${esc(t)}</li>`).join('')}</ol>` : ''}
      ${parts.length ? `<h2>Participan</h2><ul>${parts.map(([a, rol]) => `<li><a href="/${slug(a)}">${esc(String(a).toUpperCase())}</a>${rol ? ' · ' + esc(rol) : ''}</li>`).join('')}</ul>` : ''}
      ${creds.length ? `<h2>Créditos</h2><ul>${creds.map(([a, n]) => `<li>${esc(a)}: ${esc(n || 'Por definir')}</li>`).join('')}</ul>` : ''}
      <p><a href="/catalogo">Catálogo completo</a></p>`,
      ld: [{ '@context': 'https://schema.org', '@type': 'MusicAlbum', name: titulo(r.title), url: `${SITIO}/${cod}`, image: abs(r.cover), genre: r.genre || undefined, datePublished: fecha || (r.year ? String(r.year) : undefined),
        albumReleaseType: 'https://schema.org/' + (TIPO_ALBUM[String(r.format || '').toUpperCase()] || 'SingleRelease'), ...(String(r.format).toUpperCase() === 'REMIXES' ? { albumProductionType: 'https://schema.org/RemixAlbum' } : {}),
        byArtist: nombres(r).split(/\s+[×x]\s+/i).map(n => ({ '@type': 'MusicGroup', name: n.trim() })), numTracks: temas.length || undefined,
        track: temas.length ? temas.map(t => ({ '@type': 'MusicRecording', name: t })) : undefined, description: String(r.historia || '').trim().slice(0, 300) || undefined,
        albumRelease: { '@type': 'MusicRelease', catalogNumber: cod, recordLabel: sello }, sameAs: [r.soundcloud, r.spotify, r.bandcamp].filter(Boolean) }] };
  }
  if (k === 'roster') { const as = await arts();
    return { ruta: '/roster', html: `<h1>Roster de aurality</h1><ul>${as.map(a => `<li><a href="/${slug(a.name)}">${esc(String(a.name).toUpperCase())}</a>${a.role ? ' · ' + esc(a.role) : ''}</li>`).join('')}</ul>${nav}`,
      ld: [{ '@context': 'https://schema.org', '@type': 'ItemList', name: 'Roster de aurality', itemListElement: as.map((a, i) => ({ '@type': 'ListItem', position: i + 1, url: `${SITIO}/${slug(a.name)}`, name: String(a.name).toUpperCase() })) }] }; }
  if (k === 'editorial' || k === 'senal' || k.startsWith('senal-')) {
    const [{ playlist, lista }, tx, rs] = await Promise.all([senales(), lee('textos.json'), lanz()]);
    if (k === 'editorial') { const eds = rs.filter(r => r.edicion === true || r.edicion === 'true');
      return { ruta: '/editorial', html: `<h1>Línea editorial de aurality</h1>${parrafos((tx.editorial || {}).texto) || '<p>Lo que firma el sello: ediciones curadas y la Señal mensual.</p>'}
        ${eds.length ? `<h2>Ediciones del sello</h2><ul>${eds.map(refLi).join('')}</ul>` : ''}
        ${lista.length ? `<h2>Señal mensual</h2><ul>${lista.map(e => `<li><a href="/senal-${esc(e.code)}">Señal ${esc(e.code)} · ${MESES[e.mes - 1]} ${e.anio}</a></li>`).join('')}</ul>` : ''}${nav}`, ld: [] }; }
    const e = k === 'senal' ? lista[0] : lista.find(x => x.code.toLowerCase() === k.slice(6));
    if (!e) return k === 'senal' ? { ruta: '/senal', html: `<h1>Señal mensual de aurality</h1><p>La playlist mensual de aurality.</p>${nav}`, ld: [] } : null;
    const dest = (e.destacados || []).map(d => Array.isArray(d) ? d : [d.artista || '', d.tema || '', d.prod || '']).filter(([a]) => a);
    return { ruta: k === 'senal' ? '/senal' : '/senal-' + e.code, html: `<h1>Señal mensual ${esc(e.code)} · ${MESES[e.mes - 1]} ${e.anio}</h1>${parrafos(e.descripcion) || '<p>La playlist mensual de aurality.</p>'}
      ${e.cover ? `<img src="${esc(abs(e.cover))}" alt="Portada de la Señal ${esc(e.code)}" width="640" height="640">` : ''}
      ${playlist ? `<p>${enlace(playlist, 'Escuchar la playlist en Spotify')}</p>` : ''}
      ${dest.length ? `<h2>Destacados</h2><ul>${dest.map(([a, t, pr]) => `<li>${esc(a)}${t ? ' — ' + esc(t) : ''}${pr ? ' (prod. ' + esc(pr) + ')' : ''}</li>`).join('')}</ul>` : ''}<p><a href="/editorial">Línea editorial</a></p>`,
      ld: [{ '@context': 'https://schema.org', '@type': 'MusicPlaylist', name: `Señal mensual ${e.code} · aurality`, url: SITIO + (k === 'senal' ? '/senal' : '/senal-' + e.code), image: abs(e.cover), description: e.descripcion || undefined, sameAs: playlist ? [playlist] : undefined }] };
  }
  if (k === 'manifiesto') { const m = (await lee('textos.json')).manifiesto || {};
    return { ruta: '/manifiesto', html: `<h1>Manifiesto de aurality</h1><h2>${esc(m.titular || '')}</h2>${(m.parrafos || []).map(x => `<p>${esc(x)}</p>`).join('')}<p><strong>${esc(m.cierre || '')}</strong></p>${nav}`, ld: [] }; }
  if (k === 'contacto') { const c = (await lee('textos.json')).contacto || {};
    return { ruta: '/contacto', html: `<h1>Contacto · aurality</h1><p>Demos, contratación y prensa.</p>${c.email ? `<p>Correo: <a href="mailto:${esc(c.email)}">${esc(c.email)}</a></p>` : ''}${c.instagram ? `<p>${enlace(c.instagram, 'Instagram de aurality')}</p>` : ''}
      ${parrafos(c.intro_demo)}${parrafos(c.intro_contratacion)}${parrafos(c.intro_prensa)}${c.nota ? `<p>${esc(c.nota)}</p>` : ''}${nav}`, ld: [] }; }
  if (k === 'registro') return { ruta: '/registro', html: `<h1>Registro de escucha · aurality</h1><p>Las frecuencias ocultas captadas en este aparato.</p>${nav}`, ld: [], reservado: true };
  if (k === 'kit') { const [tx, as] = await Promise.all([lee('textos.json'), arts()]), K = tx.kit || {}, m = tx.manifiesto || {};
    return { ruta: '/kit', html: `<h1>Kit de prensa de aurality</h1>${parrafos(K.texto) || parrafos([m.titular, (m.parrafos || [])[0]].filter(Boolean).join('\n\n'))}
      <ul>${as.map(a => `<li><a href="/kit-${slug(a.name)}">${esc(String(a.name).toUpperCase())} · kit de prensa</a></li>`).join('')}</ul>${nav}`, ld: [] }; }
  const esKit = k.startsWith('kit-'), ks = esKit ? k.slice(4) : k, as = await arts(), a = as.find(x => slug(x.name) === ks);
  if (!a) return null;
  const N = String(a.name).toUpperCase(), rs = await lanz(), es = n => String(n).trim().toUpperCase() === N;
  const propios = rs.filter(r => nombres(r).split(/\s+[×x]\s+/i).some(es));
  const ajenos = rs.filter(r => !propios.includes(r) && (r.participantes || []).some(x => es(Array.isArray(x) ? x[0] : (x && x.artista) || '')));
  const redes = [enlace(a.instagram, 'Instagram'), enlace(a.spotify, 'Spotify'), enlace(a.soundcloud, 'SoundCloud')].filter(Boolean);
  return { ruta: (esKit ? '/kit-' : '/') + ks, html: `<h1>${esc(N)}${esKit ? ' · kit de prensa' : ''}</h1><p>${esc([a.role, a.origen, 'aurality'].filter(Boolean).join(' · '))}</p>
    ${a.photo ? `<img src="${esc(abs(a.photo))}" alt="Retrato de ${esc(N)}" width="640" height="640">` : ''}${parrafos(esKit ? a.bio_corta || a.bio : a.bio)}
    ${redes.length ? `<p>${redes.join(' · ')}</p>` : ''}
    ${propios.length ? `<h2>Lanzamientos</h2><ul>${propios.map(refLi).join('')}</ul>` : ''}${ajenos.length ? `<h2>Participaciones</h2><ul>${ajenos.map(refLi).join('')}</ul>` : ''}<p><a href="/roster">Roster</a></p>`,
    ld: esKit ? [] : [{ '@context': 'https://schema.org', '@type': 'MusicGroup', name: N, url: `${SITIO}/${ks}`, image: abs(a.photo), description: String(a.bio || a.bio_corta || '').trim().slice(0, 300) || undefined,
      sameAs: [a.instagram, a.spotify, a.soundcloud].filter(Boolean), album: propios.slice(0, 20).map(r => ({ '@type': 'MusicAlbum', name: titulo(r.title), url: `${SITIO}/${r.code}` })) }] };
}

async function mapa(env, origen) {
  const [l, a, s] = await Promise.all(['lanzamientos.json', 'artistas.json', 'senal.json'].map(f => json(env, origen, f)));
  const us = ['/', '/catalogo', '/roster', '/editorial', '/senal', '/manifiesto', '/contacto', '/kit',
    ...(l.releases || []).filter(r => r && r.code && r.artist && !futuro(r)).map(r => '/' + String(r.code).toUpperCase()),
    ...(a.artists || []).filter(x => x && x.name).map(x => '/' + slug(x.name)),
    ...(s.senal || []).filter(x => x && x.mes && x.anio).map(x => '/senal-' + (x.code || String(x.mes).padStart(2, '0') + '_' + String(x.anio).slice(-2)))];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...new Set(us)].map(u => `<url><loc>${esc(SITIO + encodeURI(u))}</loc></url>`).join('\n')}\n</urlset>\n`;
}

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
    if (url.pathname === '/admin') return Response.redirect(url.origin + '/admin/', 301);   // el panel, con o sin barra final
    if (url.pathname === '/tx' || url.pathname.startsWith('/tx/')) return portero(peticion, env, url);
    const propio = url.hostname === 'aurality.es';                                          // cualquier otra dirección (workers.dev, vistas previas) no debe salir en buscadores
    if (url.pathname === '/robots.txt') return new Response(propio ? `User-agent: *\nAllow: /\nDisallow: /admin/\nDisallow: /tx/\n\nSitemap: ${SITIO}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n',
      { headers: { 'content-type': 'text/plain; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
    if (url.pathname === '/sitemap.xml') return new Response(await mapa(env, url.origin), { headers: { 'content-type': 'application/xml; charset=utf-8', 'cache-control': 'public, max-age=3600' } });
    if (/\.[a-z0-9]+$/i.test(url.pathname)) return env.ASSETS.fetch(peticion);            // un archivo que no es página: tal cual
    if (url.pathname.length > 1 && url.pathname.endsWith('/')) return Response.redirect(url.origin + url.pathname.replace(/\/+$/, '') + url.search, 301);
    const pagina = await env.ASSETS.fetch(new URL('/', url.origin));
    if (peticion.method !== 'GET' || !(pagina.headers.get('content-type') || '').includes('text/html')) return pagina;
    const clave = decodeURIComponent(url.pathname.slice(1));
    const [t, c] = await Promise.all([tarjeta(env, url.origin, clave), contenido(env, url.origin, clave).catch(() => null)]);
    const canon = SITIO + (c ? c.ruta : '/');
    const img = new URL(t && t.imagen ? t.imagen : 'og-image.jpg', url.origin + '/').href;
    let rw = new HTMLRewriter()
      .on('meta[property="og:image"]', pon(img)).on('meta[name="twitter:image"]', pon(img))
      .on('meta[property="og:url"]', pon(c ? canon : url.origin + url.pathname))
      .on('link[rel="canonical"]', { element(el) { el.setAttribute('href', canon); } });
    if (c) {   // el contenido en texto, primero en la página (el programa lo retira al arrancar), y sus datos estructurados
      const ld = (c.ld || []).map(o => `<script type="application/ld+json">${JSON.stringify(o).replace(/</g, '\\u003c')}</script>`).join('');
      rw = rw.on('body', { element(el) { el.prepend(`<main id="estatico">${c.html}</main>`, { html: true }); } });
      if (ld) rw = rw.on('head', { element(el) { el.append(ld, { html: true }); } });
    }
    if (t) {
      rw = rw.on('title', { element(el) { el.setInnerContent(t.titulo); } })
        .on('meta[property="og:title"]', pon(t.titulo)).on('meta[name="twitter:title"]', pon(t.titulo))
        .on('meta[property="og:description"]', pon(t.texto)).on('meta[name="description"]', pon(t.texto));
    }
    const r = rw.transform(pagina), h = new Headers(r.headers); h.set('Cache-Control', 'no-cache');
    if (!propio || !c || c.reservado) h.set('X-Robots-Tag', 'noindex');
    return new Response(r.body, { status: c ? 200 : 404, headers: h });       // una dirección que no existe lo dice (404), aunque enseñe la web
  },
};
