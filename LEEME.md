# aurality · web AU-00

La web de aurality. Netlify la publica desde este repositorio: cualquier cambio que llegue aquí
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
fuente/             código de origen de la web (no se publica)
  home_src.html       diseño, escena 3D, radio ambient, secciones
  parts.js, geo.json  piezas 3D AU-01…AU-05
  build.py            regenera web/index.html  →  python3 fuente/build.py
netlify.toml        configuración de Netlify (publica web/)
```

---

## 1 · Conectar Netlify con este repositorio (una vez)

- **Si ya subiste la web arrastrándola:** *Project configuration → Build & deploy → Continuous deployment → Link repository* → GitHub → `aurality-web`.
- **Si empiezas de cero:** *Add new project → Import an existing project → GitHub* → `aurality-web`.

Deja **Build command** vacío. El directorio de publicación (`web`) ya viene en `netlify.toml`. Pulsa *Deploy*.

## 2 · Activar el panel privado (una vez)

**a) Crear la llave en GitHub**
1. Entra en https://github.com/settings/developers → **OAuth Apps → New OAuth App**.
2. *Application name*: `aurality panel`. *Homepage URL*: la dirección de tu web.
3. *Authorization callback URL*: `https://api.netlify.com/auth/done`
4. *Register application*. Copia el **Client ID**. Pulsa *Generate a new client secret* y copia el **Client Secret**: solo se ve una vez.

**b) Dársela a Netlify**
*Project configuration → Security → OAuth → Install provider* → **GitHub** → pega el Client ID y el Client Secret → guarda.

**c) Entrar**
Ve a `https://tu-web.netlify.app/admin` → *Iniciar sesión con GitHub*.
Solo entra quien tenga permiso de escritura en este repositorio. Para dar acceso a un socio:
*Settings → Collaborators → Add people*.

## 3 · Usar el panel

- **Lanzamientos → Add lanzamiento.** Aparece arriba. Rellena código, artista, título, formato, año y portada (*Elige una imagen → Subir nuevo → Confirmar selección*). Después **Publicar → Publicar ahora**.
  - **Colaboraciones:** separa los artistas con ` × `. Cada uno cuenta para su propio filtro y perfil.
  - **Portada:** cuadrada, JPG de unos 1200 px. Sin portada, la web muestra una placa con el código.
  - **SoundCloud:** si pones el enlace, la ficha muestra el reproductor.
- **Artistas.** Rol, biografía, foto (sale en blanco y negro) y redes. El nombre tiene que coincidir con el de los lanzamientos.
- **Señal mensual.** Cada mes, *Add edición*: mes, año, portada, temas y destacados. La más reciente sale **En antena** y las anteriores pasan solas a **Archivada**.
- **Manifiesto y contacto.** Los textos de esas secciones.

La web se actualiza alrededor de un minuto después de publicar. Cada cambio queda en el historial del repositorio y se puede deshacer.

## 4 · Formulario de contacto (una vez)

1. *Project configuration → Forms → Enable form detection*.
2. Vuelve a publicar: *Deploys → Trigger deploy → Deploy site*.
3. *Project configuration → Notifications → Emails → Add notification → Form submission notification*: elige el formulario `senal` y tu correo.

## 5 · Dominio e imagen al compartir

- **Dominio:** *Domain management → Add a domain*. Netlify indica los registros DNS. El HTTPS se activa solo.
- **Imagen al compartir:** con dominio propio, la etiqueta `og:image` tiene que llevar la dirección completa (por ejemplo `https://aurality.es/og-image.jpg`). Se cambia en `fuente/build.py` (lo hace Claude si se lo pides).

## 6 · Para quien toque el código

- El diseño se cambia en `fuente/` y se regenera con `python3 fuente/build.py`. Ese script solo reescribe `web/index.html`, nunca el contenido ni las imágenes.
- Antes de subir cambios, trae lo último (`git pull`). El panel también escribe en este repositorio.
- three.js (jsDelivr), las fuentes (Google Fonts), el reproductor de SoundCloud y el panel (Decap CMS, unpkg) se cargan desde fuera.
