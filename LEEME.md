# aurality · web AU-00

La web de aurality, en https://aurality.es. Cloudflare la publica desde este repositorio: cualquier cambio que llegue aquí
(desde el panel o desde Claude) sale en la web en un minuto, sobrescribiendo la versión anterior.

```
web/                lo que se publica
  index.html          la página (se genera desde fuente/, no se edita a mano)
  js/                 el programa de la web, empaquetado con three.js (se genera; el nombre lleva una huella)
  fuentes/            las tipografías, servidas desde la propia web
  contenido/          TODO el contenido, en cuatro archivos que edita el panel
    lanzamientos.json   catálogo
    artistas.json       roster
    senal.json          Señal Mensual
    textos.json         manifiesto y contacto
  admin/              el panel privado  →  tu-web/admin
  covers/             portadas y fotos que subes desde el panel (covers/v/: sus copias ligeras, automáticas)
  senal/              portadas de la Señal Mensual (senal/v/: sus copias ligeras)
  img/                faja de cromo, punta, barra móvil, lettering
  _headers            cabeceras de Cloudflare (caché y panel fuera de buscadores)
netlify.toml        configuración de Netlify, por si se vuelve a publicar allí (publica web/)
wrangler.jsonc      configuración de Cloudflare Workers (publica web/)
worker/             el portero: vista previa de cada enlace al compartir, contenido en texto para buscadores,
                    sitemap.xml, robots.txt y las frecuencias ocultas
fuente/             código de origen de la web (no se publica)
  home_src.html       el marcado de la página
  estilos.css         todos los estilos
  js/principal.js     el programa: radio ambient, secciones, escena 3D
  js/piezas.js        piezas 3D AU-01…AU-06 (con geo.json)
  js/carga.js         la pantalla de arranque
  img/                originales de las texturas de la interfaz
  build.py            monta todo  →  python3 fuente/build.py
pruebas/            pruebas automáticas: abre la web en ordenador, tablet y móvil y avisa si algo se rompe
.github/workflows/  tarea que genera sola las copias ligeras de cada portada subida desde el panel
```

---
---

## 1 · Dónde está publicada

En **https://aurality.es**. La publica Cloudflare con un *Worker* llamado `aurality-web`
(**Compute → Workers & Pages → aurality-web**), unido a este repositorio: cada cambio en `main` sale en un minuto.

- Dominios del Worker (pestaña **Domains**): `aurality.es` y `www.aurality.es`. La dirección
  `aurality-web.fernando-garcia-navarro00.workers.dev` sigue funcionando.
- `www` lleva siempre a `aurality.es` (dominio aurality.es → **Rules → Redirect Rules**).
- El plan gratuito no cobra por visitas ni por tráfico.

## 2 · Entrar en el panel privado

**a) Crear tu clave de GitHub (una vez)**
1. Entra en https://github.com/settings/personal-access-tokens/new (*Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*).
2. *Token name*: `aurality panel`. *Expiration*: la más larga que te deje (cuando caduque, se crea otra igual).
3. *Repository access*: **Only select repositories** → `aurality-web`.
4. *Permissions → Repository permissions → Contents*: **Read and write**.
5. *Generate token* y copia la clave (empieza por `github_pat_`). Guárdala en un sitio seguro: GitHub no la vuelve a enseñar.

**b) Entrar**
Ve a `https://aurality.es/admin` → **Iniciar sesión con token** → pega la clave.
El navegador la recuerda, así que solo se pide la primera vez en cada aparato.
Un socio puede entrar con su propia clave si le añades al repositorio (*Settings → Collaborators → Add people*).
Si alguien pierde el móvil o el portátil, borra su clave en GitHub y deja de valer.

## 3 · Usar el panel

- **Lanzamientos → Agregar lanzamiento.** Aparece arriba. Rellena código, artista, título, formato, año y portada (arrastra la imagen o pulsa *Explorar*). Después **Guardar**.
  - **Colaboraciones:** separa los artistas con ` × `. Cada uno cuenta para su propio filtro y perfil.
  - **Participaciones:** si el lanzamiento es de alguien de fuera (C.EME, MDNA…) y un miembro de aurality produjo, mezcló o colaboró, pon a ese artista como *Artista principal* y añade en *Participación de aurality* quién y qué hizo (p. ej. UFISI · PRODUCCIÓN · 3 TEMAS). La web lo marca como PARTICIPACIÓN, lo enseña en el perfil del miembro y el artista de fuera no aparece en el roster.
  - **Edición del sello:** márcalo cuando el autor es aurality y no un artista (discos de remixes, recopilatorios curados…). Sale con la marca roja EDICIÓN DEL SELLO y con su propio filtro en el catálogo.
  - **Historia, vídeo y fotos:** dos o tres párrafos sobre el disco (línea en blanco entre párrafos), un enlace de YouTube o Vimeo y fotos de la sesión con su pie. Todo es opcional: lo que no rellenes, no sale en la ficha.
  - **Portada:** cuadrada. Súbela tal cual: el panel la reduce a 1600 px y la convierte a WebP antes de subirla. Sin portada, la web muestra una placa con el código.
  - **SoundCloud:** si pones el enlace, la ficha muestra el reproductor y el lanzamiento entra en el **canal 00** de la radio, que va encadenando fragmentos largos del catálogo. El trozo empieza hacia la mitad del tema; para elegir otro, rellena *Inicio del fragmento* (m:ss). Con 3 lanzamientos o más en SoundCloud, la radio arranca directamente en el 00.
  - **Fragmento propio (canal 00):** un mp3 de 45 a 90 segundos del lanzamiento, subido desde el panel. En cuanto **un** lanzamiento lo tiene, el canal 00 deja SoundCloud y suena solo con los lanzamientos que traen fragmento propio: suena también en iPhone, el vúmetro lee la música de verdad y los temas se cruzan solos. Mientras ninguno lo tenga, el canal 00 sigue con SoundCloud como hasta ahora. La radio ambient (canales 01–12) no cambia en ningún caso.
  - **Lo próximo (AU-06):** pon la *Fecha de salida*. Si es futura, el lanzamiento no aparece en el catálogo hasta ese día: sale en el aparato AU-06 de la portada con cuenta atrás. De 30 a 15 días antes solo enseña el código; de 14 a 4, artista, título, la portada destapándose y el *presave*; los 3 últimos días desbloquea un *fragmento* por día (hasta 3 mp3 cortos). El día de salida pone «ya disponible» y el disco entra solo en los destacados durante una semana. Sin nada programado, el aparato cuenta hacia la próxima Señal. Para ver cada fase sin datos: `tu-web/?demo=anuncio` (o `revelado`, `fragmento`, `salida`, `reposo`).
  - **Destacar en la portada:** marca la casilla en los lanzamientos que quieras enseñar en la portada. Se ven como mucho 3, los más recientes marcados primero (en el ordenador, apilados como avisos que se cierran con ×; en el móvil, como tarjetas que se deslizan). Para quitar uno, desmárcalo. Si no hay ninguno marcado, sale el último lanzamiento.
- **Mapa de conexiones** (Roster → *Red*). Se dibuja solo con lo que metes en el panel: quién firma junto (línea continua) y quién produce, mezcla, masteriza o participa en el lanzamiento de otro (línea discontinua). Los créditos de arte, foto o vídeo no cuentan. Para que alguien de fuera salga en el mapa basta con ponerlo en los créditos (varios nombres separados por ` · `).
- **Kit de prensa.** Cada artista tiene el suyo (`tu-web/kit-ufisi`, tecla *Kit de prensa* en su perfil) y el sello el suyo (`tu-web/kit`). Se rellena solo con lo que hay en el panel; en *Artistas* hay campos para la bio corta, de dónde es, fotos de prensa con autor, el enlace al material en alta y el rider técnico, y en *Manifiesto y contacto* el texto del sello para medios. *Imprimir / guardar PDF* deja solo el documento, limpio.
- **Artistas.** Rol, biografía, foto (sale en blanco y negro) y redes. El nombre tiene que coincidir con el de los lanzamientos.
- **Frecuencias ocultas.** Transmisiones escondidas entre los canales del dial. Se sintonizan arrastrando sobre las casillas de la pletina: entre canales hay estática; cerca de una transmisión el piloto azul parpadea y la señal se cuela; encima, se limpia, se fija y sale la tarjeta de escucha (se guarda como imagen y queda en el registro, `tu-web/registro`).
  - En el panel, *Frecuencias ocultas → Agregar transmisión*: número (TX-01…), frecuencia (p. ej. 7.3; nunca justo en un canal), empieza / termina (hora de Madrid), horario (todo el día o solo de noche, 00:00–06:00), audio mp3 y el texto de la tarjeta.
  - La web solo entrega una transmisión mientras emite: antes no existe y, al acabar, solo quedan su frecuencia y sus fechas en «Se te escaparon». Cuando termine, borra el audio en el panel para que desaparezca del todo.
  - TX-00 es la de bienvenida (03.4, siempre activa): enseña que hay más. Cadencia recomendada: una o dos al mes.
  - Solo funciona publicada en Cloudflare (el portero está en `worker/`); en Netlify, /tx/ queda cerrado.
- **Línea editorial** (menú 04). Lo que firma el sello: las *ediciones del sello* (los lanzamientos con esa casilla marcada) y la Señal mensual. El texto de presentación se cambia en *Manifiesto y contacto → Línea editorial*.
- **Señal mensual.** Cada mes, *Agregar edición*: mes, año, portada, temas y destacados. La más reciente sale **En antena** y las anteriores pasan solas a **Archivada**.
- **Manifiesto y contacto.** Los textos de esas secciones. El contacto tiene tres caminos (Demos, Contratación y Prensa), cada uno con su texto de presentación editable; los mensajes llegan al correo con el asunto marcado («aurality · CONTRATACIÓN · UFISI · …»). En cada perfil de artista hay una tecla *Contratar* que abre el formulario con ese artista elegido. El *titular* del manifiesto es también la frase de entrada de la portada.
- **Desde tu última visita.** No hay que hacer nada: si alguien vuelve después de más de 6 horas, el primer aviso de la portada le cuenta lo nuevo (lanzamientos, Señal, transmisiones que se perdió y si hay alguna emitiendo). Para verlo: `tu-web/?demo=visita`.

**Compartir enlaces.** Cada lanzamiento, artista y edición de la Señal tiene su dirección, la que se ve en la barra del navegador: `tu-web/AU0212`, `tu-web/ufisi`, `tu-web/senal`, `tu-web/catalogo`. Al pegarla en WhatsApp, Instagram o X, la vista previa enseña la portada, la foto o la Señal que toca. Las portadas en JPG son las que mejor funcionan en esas vistas previas.

La web se actualiza alrededor de un minuto después de publicar. Cada cambio queda en el historial del repositorio y se puede deshacer.

## 4 · Formulario de contacto (una vez)

Los mensajes del formulario llegan al correo de contacto (el de *Manifiesto y contacto* en el panel) a través de FormSubmit, gratis y sin cuenta.
La primera vez que alguien envíe el formulario, FormSubmit manda a ese correo un aviso **«Activate Form»**: pulsa el botón y a partir de ahí llegan todos.
Lo más fácil es enviarte tú un mensaje de prueba nada más publicar la web.

## 5 · Dominio e imagen al compartir

- **Dominio:** `aurality.es` está registrado en Hostinger (cuenta de un socio; hay que renovarlo cada año) y sus DNS
  los lleva Cloudflare: en Hostinger solo se cambiaron los servidores de nombres a `elinore` y `konnor.ns.cloudflare.com`.
  Cualquier registro DNS se toca en Cloudflare, no en Hostinger.
- **Correo:** los registros de correo de Hostinger (MX, SPF, DMARC, `autoconfig`, `autodiscover`, `hostingermail-*`)
  están en Cloudflare en **DNS only** (nube gris). No pasarlos a «Proxied», o el correo falla.
- **Imagen al compartir:** `web/og-image.jpg` (1200×630, la formación del cierre del trailer con el lettering).
  El portero (`worker/`) le pone la dirección completa y en cada lanzamiento usa su portada.
  WhatsApp guarda la vista previa de cada enlace un tiempo: para ver un cambio, prueba con una dirección nueva (`https://aurality.es/?v=2`).

## 5 bis · La web en el móvil

En pantallas de hasta 820 px la web cambia de estructura (el escritorio no se toca): la página se desplaza entera,
la radio va plegada en una línea sobre una botonera de secciones, el catálogo pliega sus filtros tras una tecla y la
ficha pone primero lo de escuchar y una tecla «Compartir». El 3D deja de dibujarse cuando una sección lo tapa.
Con «Añadir a pantalla de inicio» se instala como app (`web/manifest.webmanifest`, iconos `web/icono-*.png`).

## 6 · Para quien toque el código

- La primera vez: `npm install` (trae esbuild, three.js, las tipografías y wrangler). Hace falta Python 3 con Pillow.
- El diseño se cambia en `fuente/` y se monta con `python3 fuente/build.py`. Ese script reescribe `web/index.html`, `web/js/` y `web/fuentes/`,
  y genera las copias ligeras de las portadas que falten; nunca toca el contenido ni las imágenes originales.
- Para verla en local con el portero: `npx wrangler dev --port 8799`. Para pasar las pruebas: `node pruebas/humo.js` (ver la cabecera de ese archivo).
- Antes de subir cambios, trae lo último (`git pull`). El panel también escribe en este repositorio.
- **Portadas ligeras.** Cada imagen de `web/covers/` y `web/senal/` tiene tres copias en WebP (320, 640 y 1280 px) en la subcarpeta `v/`.
  La web pide la que necesita y, si aún no existe, enseña la original. Al subir una portada desde el panel, la tarea de GitHub las genera sola.
- **Buscadores.** El portero deja en cada dirección su contenido en texto, su dirección canónica (siempre `https://aurality.es/…`) y sus datos de música,
  y publica `/sitemap.xml` y `/robots.txt` a partir del contenido del panel. Cualquier otra dirección de la web (workers.dev, vistas previas) lleva `noindex`.
- **Continuidad entre vistas.** Al abrir una ficha desde el catálogo (o un artista desde el roster) la portada viaja hasta su sitio, y vuelve; usa las transiciones entre vistas del navegador y, donde no existen, el cambio es directo. Al volver, el catálogo sigue donde estaba. El receptor recuerda el último canal.
- **Tablet.** En vertical (600–820 px) usa la disposición del móvil con más portadas por fila y la ficha a dos columnas; en horizontal táctil, la de ordenador con dianas para el dedo y los filtros plegados.
- **La mesa («la máquina abierta»).** Tercera vista del catálogo, junto a Rejilla y Lista, solo en ordenador (pantalla ancha y puntero fino; en móvil y en táctil el botón no aparece). Nada tapa la escena: las fichas van en una bandeja inclinada que se desliza al desplazar y la más cercana se lee en el lector, junto al módulo AU-04. Con la mesa elegida, las fichas se abren como placas de pie en la escena, que se ponen de frente al acercarse a leerlas. Usa los mismos filtros y el mismo contenido; el código está en `abreArchivo` y `abrePlaca` (`fuente/js/principal.js`) y al final de `fuente/estilos.css`. `tu-web/archivo` abre el catálogo directamente en la mesa.
- **Llegada directa.** Quien abre un enlace a una ficha o a una sección la ve sin pasar por ENCENDER; el sonido se pide con ▶.
- three.js y las tipografías ya van dentro de la web. Siguen cargándose desde fuera el reproductor de SoundCloud, el panel (Sveltia CMS, unpkg) y el envío del formulario (FormSubmit).
