# aurality · web AU-00

La web de aurality. Cloudflare Pages la publica desde este repositorio: cualquier cambio que llegue aquí
(desde el panel o desde Claude) sale en la web en un minuto, sobrescribiendo la versión anterior.

```
web/                lo que se publica
  index.html          la web (se genera desde fuente/, no se edita a mano)
  contenido/          TODO el contenido, en cuatro archivos que edita el panel
    lanzamientos.json   catálogo
    artistas.json       roster
    senal.json          Señal Mensual
    textos.json         manifiesto y contacto
  admin/              el panel privado  →  tu-web/admin
  covers/             portadas y fotos que subes desde el panel
  senal/              portadas de la Señal Mensual
  img/                faja de cromo, punta, barra móvil, lettering
  _headers            cabeceras de Cloudflare (caché y panel fuera de buscadores)
netlify.toml        configuración de Netlify, por si se vuelve a publicar allí (publica web/)
wrangler.jsonc      configuración de Cloudflare Workers (publica web/)
worker/             el portero: pone la vista previa de cada enlace (portada, foto…) al compartir
fuente/             código de origen de la web (no se publica)
  home_src.html       diseño, escena 3D, radio ambient, secciones
  parts.js, geo.json  piezas 3D AU-01…AU-05
  build.py            regenera web/index.html  →  python3 fuente/build.py
```

---

## 1 · Publicar con Cloudflare Pages (una vez)

1. Crea una cuenta gratis en https://dash.cloudflare.com/sign-up.
2. En el menú: **Compute → Workers & Pages → Create**. Si te ofrece crear un *Worker*, busca la opción **Pages** («Looking to deploy Pages? Get started»).
3. **Import an existing Git repository → Connect GitHub**. Autoriza a Cloudflare y elige solo el repositorio `aurality-web`.
4. Configuración de la compilación:
   - *Project name*: `aurality` (será `aurality.pages.dev` si está libre).
   - *Production branch*: `main`.
   - *Framework preset*: **None**.
   - *Build command*: vacío.
   - *Build output directory*: **`web`**.
5. **Save and Deploy**. En un minuto tienes la web en `https://aurality.pages.dev`.

El plan gratuito permite 500 publicaciones al mes y no cobra por visitas ni por tráfico.

## 2 · Entrar en el panel privado

**a) Crear tu clave de GitHub (una vez)**
1. Entra en https://github.com/settings/personal-access-tokens/new (*Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token*).
2. *Token name*: `aurality panel`. *Expiration*: la más larga que te deje (cuando caduque, se crea otra igual).
3. *Repository access*: **Only select repositories** → `aurality-web`.
4. *Permissions → Repository permissions → Contents*: **Read and write**.
5. *Generate token* y copia la clave (empieza por `github_pat_`). Guárdala en un sitio seguro: GitHub no la vuelve a enseñar.

**b) Entrar**
Ve a `https://aurality.pages.dev/admin` → **Iniciar sesión con token** → pega la clave.
El navegador la recuerda, así que solo se pide la primera vez en cada aparato.
Un socio puede entrar con su propia clave si le añades al repositorio (*Settings → Collaborators → Add people*).
Si alguien pierde el móvil o el portátil, borra su clave en GitHub y deja de valer.

## 3 · Usar el panel

- **Lanzamientos → Agregar lanzamiento.** Aparece arriba. Rellena código, artista, título, formato, año y portada (arrastra la imagen o pulsa *Explorar*). Después **Guardar**.
  - **Colaboraciones:** separa los artistas con ` × `. Cada uno cuenta para su propio filtro y perfil.
  - **Participaciones:** si el lanzamiento es de alguien de fuera (C.EME, MDNA…) y un miembro de aurality produjo, mezcló o colaboró, pon a ese artista como *Artista principal* y añade en *Participación de aurality* quién y qué hizo (p. ej. UFISI · PRODUCCIÓN · 3 TEMAS). La web lo marca como PARTICIPACIÓN, lo enseña en el perfil del miembro y el artista de fuera no aparece en el roster.
  - **Portada:** cuadrada. Súbela tal cual: el panel la reduce a 1600 px y la convierte a WebP antes de subirla. Sin portada, la web muestra una placa con el código.
  - **SoundCloud:** si pones el enlace, la ficha muestra el reproductor y el lanzamiento entra en el **canal 00** de la radio, que va encadenando fragmentos largos del catálogo. El trozo empieza hacia la mitad del tema; para elegir otro, rellena *Inicio del fragmento* (m:ss). Con 3 lanzamientos o más en SoundCloud, la radio arranca directamente en el 00.
  - **Lo próximo (AU-06):** pon la *Fecha de salida*. Si es futura, el lanzamiento no aparece en el catálogo hasta ese día: sale en el aparato AU-06 de la portada con cuenta atrás. De 30 a 15 días antes solo enseña el código; de 14 a 4, artista, título, la portada destapándose y el *presave*; los 3 últimos días desbloquea un *fragmento* por día (hasta 3 mp3 cortos). El día de salida pone «ya disponible» y el disco entra solo en los destacados durante una semana. Sin nada programado, el aparato cuenta hacia la próxima Señal. Para ver cada fase sin datos: `tu-web/?demo=anuncio` (o `revelado`, `fragmento`, `salida`, `reposo`).
  - **Destacar en la portada:** marca la casilla en los lanzamientos que quieras enseñar en la portada. Se ven como mucho 3, los más recientes marcados primero (en el ordenador, apilados como avisos que se cierran con ×; en el móvil, como tarjetas que se deslizan). Para quitar uno, desmárcalo. Si no hay ninguno marcado, sale el último lanzamiento.
- **Mapa de conexiones** (Roster → *Red*). Se dibuja solo con lo que metes en el panel: quién firma junto (línea continua) y quién produce, mezcla, masteriza o participa en el lanzamiento de otro (línea discontinua). Los créditos de arte, foto o vídeo no cuentan. Para que alguien de fuera salga en el mapa basta con ponerlo en los créditos (varios nombres separados por ` · `).
- **Artistas.** Rol, biografía, foto (sale en blanco y negro) y redes. El nombre tiene que coincidir con el de los lanzamientos.
- **Frecuencias ocultas.** Transmisiones escondidas entre los canales del dial. Se sintonizan arrastrando sobre las casillas de la pletina: entre canales hay estática; cerca de una transmisión el piloto azul parpadea y la señal se cuela; encima, se limpia, se fija y sale la tarjeta de escucha (se guarda como imagen y queda en el registro, `tu-web/registro`).
  - En el panel, *Frecuencias ocultas → Agregar transmisión*: número (TX-01…), frecuencia (p. ej. 7.3; nunca justo en un canal), empieza / termina (hora de Madrid), horario (todo el día o solo de noche, 00:00–06:00), audio mp3 y el texto de la tarjeta.
  - La web solo entrega una transmisión mientras emite: antes no existe y, al acabar, solo quedan su frecuencia y sus fechas en «Se te escaparon». Cuando termine, borra el audio en el panel para que desaparezca del todo.
  - TX-00 es la de bienvenida (03.4, siempre activa): enseña que hay más. Cadencia recomendada: una o dos al mes.
  - Solo funciona publicada en Cloudflare (el portero está en `worker/`); en Netlify, /tx/ queda cerrado.
- **Señal mensual.** Cada mes, *Agregar edición*: mes, año, portada, temas y destacados. La más reciente sale **En antena** y las anteriores pasan solas a **Archivada**.
- **Manifiesto y contacto.** Los textos de esas secciones. El *titular* del manifiesto es también la frase de entrada de la portada.
- **Desde tu última visita.** No hay que hacer nada: si alguien vuelve después de más de 6 horas, el primer aviso de la portada le cuenta lo nuevo (lanzamientos, Señal, transmisiones que se perdió y si hay alguna emitiendo). Para verlo: `tu-web/?demo=visita`.

**Compartir enlaces.** Cada lanzamiento, artista y edición de la Señal tiene su dirección, la que se ve en la barra del navegador: `tu-web/AU0212`, `tu-web/ufisi`, `tu-web/senal`, `tu-web/catalogo`. Al pegarla en WhatsApp, Instagram o X, la vista previa enseña la portada, la foto o la Señal que toca. Las portadas en JPG son las que mejor funcionan en esas vistas previas.

La web se actualiza alrededor de un minuto después de publicar. Cada cambio queda en el historial del repositorio y se puede deshacer.

## 4 · Formulario de contacto (una vez)

Los mensajes del formulario llegan al correo de contacto (el de *Manifiesto y contacto* en el panel) a través de FormSubmit, gratis y sin cuenta.
La primera vez que alguien envíe el formulario, FormSubmit manda a ese correo un aviso **«Activate Form»**: pulsa el botón y a partir de ahí llegan todos.
Lo más fácil es enviarte tú un mensaje de prueba nada más publicar la web.

## 5 · Dominio e imagen al compartir

- **Dominio:** en el proyecto de Cloudflare Pages, *Custom domains → Set up a domain*. Cloudflare indica los registros DNS. El HTTPS se activa solo.
- **Imagen al compartir:** con dominio propio, la etiqueta `og:image` tiene que llevar la dirección completa (por ejemplo `https://aurality.es/og-image.jpg`). Se cambia en `fuente/build.py` (lo hace Claude si se lo pides).

## 6 · Para quien toque el código

- El diseño se cambia en `fuente/` y se regenera con `python3 fuente/build.py`. Ese script solo reescribe `web/index.html`, nunca el contenido ni las imágenes.
- Antes de subir cambios, trae lo último (`git pull`). El panel también escribe en este repositorio.
- three.js (jsDelivr), las fuentes (Google Fonts), el reproductor de SoundCloud el panel (Sveltia CMS, unpkg) y el envío del formulario (FormSubmit) se cargan desde fuera.
