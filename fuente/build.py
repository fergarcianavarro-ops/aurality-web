"""Monta la web de aurality a partir de fuente/ y del contenido actual de web/contenido/.

Uso, desde la raíz del repositorio (la primera vez, antes: npm install):

    python3 fuente/build.py            monta la página, el programa y las portadas ligeras que falten
    python3 fuente/build.py --portadas solo genera las portadas ligeras que falten (lo usa la tarea automática de GitHub)

Qué escribe:
  web/index.html        la página (marcado + estilos); el programa va aparte
  web/js/app.<huella>.js el programa empaquetado con three.js (esbuild); la huella cambia cuando cambia el código
  web/fuentes/          las tipografías, servidas desde la propia web
  web/covers/v/, web/senal/v/   cada portada en tres anchos (320, 640 y 1280 px, WebP) para no bajar la original entera
  web/img/*.webp        las texturas de la interfaz, a partir de fuente/img/*.png

El contenido (web/contenido), las portadas originales (web/covers, web/senal) y el panel (web/admin) no se tocan:
son lo que se edita desde el panel privado.
"""
import json, re, os, sys, glob, hashlib, shutil, subprocess

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F, WEB, NM = os.path.join(RAIZ, 'fuente'), os.path.join(RAIZ, 'web'), os.path.join(RAIZ, 'node_modules')
lee = lambda *p: open(os.path.join(*p), encoding='utf-8').read()

# ---------- portadas ligeras ----------
ANCHOS = (320, 640, 1280)          # los mismos que usa fuente/js/principal.js (función ligera)
IMG = ('.jpg', '.jpeg', '.png', '.webp')

def portadas():
    from PIL import Image, ImageOps
    hechas = 0
    for carpeta in ('covers', 'senal'):
        d = os.path.join(WEB, carpeta); v = os.path.join(d, 'v'); os.makedirs(v, exist_ok=True)
        ind_f = os.path.join(v, 'indice.json')
        ind = json.loads(lee(ind_f)) if os.path.exists(ind_f) else {}
        vivos = set()
        for n in sorted(os.listdir(d)):
            src = os.path.join(d, n)
            if not os.path.isfile(src) or not n.lower().endswith(IMG): continue
            vivos.add(n); peso = os.path.getsize(src)
            faltan = [w for w in ANCHOS if not os.path.exists(os.path.join(v, f'{n}-{w}.webp'))]
            if not faltan and ind.get(n) == peso: continue
            try:
                im = ImageOps.exif_transpose(Image.open(src)); im = im.convert('RGBA' if 'A' in im.getbands() or im.mode == 'P' else 'RGB')
            except Exception as e:
                print('  no se pudo leer', n, e); continue
            for w in ANCHOS:
                c = im if im.width <= w else im.resize((w, round(im.height * w / im.width)), Image.LANCZOS)
                c.save(os.path.join(v, f'{n}-{w}.webp'), 'WEBP', quality=80, method=6)
            ind[n] = peso; hechas += 1
        for n in [k for k in ind if k not in vivos]:                 # portadas borradas: fuera sus copias
            for w in ANCHOS:
                try: os.remove(os.path.join(v, f'{n}-{w}.webp'))
                except OSError: pass
            del ind[n]
        open(ind_f, 'w', encoding='utf-8').write(json.dumps(dict(sorted(ind.items())), indent=1, ensure_ascii=False) + '\n')
    print('portadas ligeras:', hechas, 'nuevas o cambiadas')

def texturas():
    from PIL import Image
    for src in sorted(glob.glob(os.path.join(F, 'img', '*.png'))):
        dst = os.path.join(WEB, 'img', os.path.splitext(os.path.basename(src))[0] + '.webp')
        if os.path.exists(dst) and os.path.getmtime(dst) >= os.path.getmtime(src): continue
        Image.open(src).save(dst, 'WEBP', quality=92, alpha_quality=100, method=6)
        print('textura', os.path.basename(dst), os.path.getsize(dst) // 1024, 'KB')

if '--portadas' in sys.argv:
    portadas(); sys.exit(0)

# ---------- tipografías: las mismas de siempre, servidas desde la web ----------
FUENTES = [   # familia, peso, archivo de origen (node_modules), nombre publicado, ¿precargar?
    ('Instrument Sans', '400 700', '@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2', 'instrument-sans.woff2', True),
    ('Instrument Sans', '400 700', '@fontsource-variable/instrument-sans/files/instrument-sans-latin-ext-wght-normal.woff2', 'instrument-sans-ext.woff2', False),
    ('JetBrains Mono', '100 800', '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2', 'jetbrains-mono.woff2', True),
    ('JetBrains Mono', '100 800', '@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-ext-wght-normal.woff2', 'jetbrains-mono-ext.woff2', False),
    ('Michroma', '400', '@fontsource/michroma/files/michroma-latin-400-normal.woff2', 'michroma.woff2', True),
    ('Michroma', '400', '@fontsource/michroma/files/michroma-latin-ext-400-normal.woff2', 'michroma-ext.woff2', False),
]
LATIN = 'U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+0304,U+0308,U+0329,U+2000-206F,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD'
LATIN_EXT = 'U+0100-02BA,U+02BD-02C5,U+02C7-02CC,U+02CE-02D7,U+02DD-02FF,U+0304,U+0308,U+0329,U+1D00-1DBF,U+1E00-1E9F,U+1EF2-1EFF,U+2020,U+20A0-20AB,U+20AD-20C0,U+2113,U+2C60-2C7F,U+A720-A7FF'
os.makedirs(os.path.join(WEB, 'fuentes'), exist_ok=True)
caras, precargas = [], []
for fam, peso, origen, nombre, pre in FUENTES:
    o = os.path.join(NM, origen)
    if os.path.exists(o): shutil.copyfile(o, os.path.join(WEB, 'fuentes', nombre))
    assert os.path.exists(os.path.join(WEB, 'fuentes', nombre)), 'falta la tipografía ' + nombre + ' (npm install)'
    caras.append("@font-face{font-family:'%s';font-style:normal;font-weight:%s;font-display:swap;src:url(/fuentes/%s) format('woff2');unicode-range:%s}"
                 % (fam, peso, nombre, LATIN_EXT if '-ext' in nombre else LATIN))
    if pre: precargas.append('<link rel="preload" href="/fuentes/%s" as="font" type="font/woff2" crossorigin>' % nombre)

# ---------- programa: un solo archivo con three.js dentro, con huella en el nombre ----------
ESB = os.path.join(NM, '.bin', 'esbuild')
assert os.path.exists(ESB), 'falta esbuild: ejecuta «npm install» en la raíz del repositorio'
tmp = os.path.join(RAIZ, '.wrangler', 'montaje'); os.makedirs(tmp, exist_ok=True)
subprocess.run([ESB, os.path.join(F, 'js', 'principal.js'), '--bundle', '--format=esm', '--minify', '--target=es2022', '--legal-comments=none',
                '--loader:.woff2=dataurl', '--log-level=warning', '--outfile=' + os.path.join(tmp, 'app.js')], check=True)
app = open(os.path.join(tmp, 'app.js'), 'rb').read()
huella = hashlib.sha256(app).hexdigest()[:10]; app_n = f'app.{huella}.js'
os.makedirs(os.path.join(WEB, 'js'), exist_ok=True)
for v in glob.glob(os.path.join(WEB, 'js', 'app.*.js')): os.remove(v)
open(os.path.join(WEB, 'js', app_n), 'wb').write(app)

css = subprocess.run([ESB, os.path.join(F, 'estilos.css'), '--minify', '--log-level=warning'], check=True, capture_output=True, text=True).stdout.strip()

# ---------- página ----------
_g = json.loads(lee(F, 'geo.json'))
geo_carga = json.dumps({'h': [[round(x, 1), round(y, 1)] for x, y in _g['holes']],
                        'a': [[[round(x, 1), round(y, 1)] for x, y in a['pts'][::4]] for a in _g['arms']],
                        't': [[round(x, 1), round(y, 1)] for x, y in _g['tri']['pts']]}, separators=(',', ':'))
s = lee(F, 'home_src.html').replace('%%FUENTES%%', '\n'.join(precargas)).replace('%%CSS%%', ''.join(caras) + css) \
    .replace('%%CARGA%%', lee(F, 'js', 'carga.js').replace('%%GEO_CARGA%%', geo_carga).strip()) \
    .replace('%%APP%%', f'<script type="module" src="/js/{app_n}"></script>')
assert '%%' not in s
cabeza, s = s.split('<!--CUERPO-->\n')
cabeza = cabeza.replace('<title>aurality AU-00</title>\n', '').replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')

desc = 'Sello y plataforma creativa de Elda: catálogo, roster, Señal Mensual y radio ambient en directo.'   # el nombre ya va en el título
head = f'''<!doctype html>
<html lang="es"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>aurality · aura-of-reality</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#9DAFC5">
<link rel="canonical" href="https://aurality.es/">
<link rel="icon" type="image/png" href="/favicon.png">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/manifest.webmanifest">
<link rel="modulepreload" href="/js/{app_n}">
<meta name="mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="aurality">
<meta name="apple-mobile-web-app-status-bar-style" content="default">
<meta property="og:type" content="website">
<meta property="og:site_name" content="aurality">
<meta property="og:title" content="aurality · aura-of-reality">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="og-image.jpg">
<meta property="og:url" content="">
<meta property="og:locale" content="es_ES">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="aurality · aura-of-reality">
<meta name="twitter:image" content="og-image.jpg">
<script>window.AU_DEPLOY = true;</script>
''' + cabeza + '''</head><body>
'''
open(os.path.join(WEB, 'index.html'), 'w', encoding='utf-8').write(head + s + '\n</body></html>\n')
texturas()
portadas()
print('web/index.html', len(head + s) // 1024, 'KB ·', 'web/js/' + app_n, len(app) // 1024, 'KB')
