"""Regenera web/index.html a partir de fuente/ y del contenido actual de web/contenido/.

Uso, desde la raíz del repositorio:  python3 fuente/build.py
Solo reescribe web/index.html. El contenido (web/contenido), las portadas (web/covers, web/senal)
y el panel (web/admin) no se tocan: son lo que se edita desde el panel privado.
"""
import json, base64, re, os

RAIZ = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
F, WEB = os.path.join(RAIZ, 'fuente'), os.path.join(RAIZ, 'web')
lee = lambda *p: open(os.path.join(*p), encoding='utf-8').read()

src = lee(F, 'home_src.html')
parts = lee(F, 'parts.js')
parts = '\n'.join(l for l in parts.split('\n') if not l.startswith('import '))
parts = re.sub(r'^export ', '', parts, flags=re.M)
assert parts.count("url(./jbm500.woff2)") == 1
fb64 = base64.b64encode(open(os.path.join(F, 'jbm500.woff2'), 'rb').read()).decode()
parts = parts.replace("url(./jbm500.woff2)", "url(data:font/woff2;base64,%s)" % fb64)

_g = json.loads(lee(F, 'geo.json'))
geo = json.dumps(_g, separators=(',', ':'))
geo_carga = json.dumps({'h': [[round(x, 1), round(y, 1)] for x, y in _g['holes']],
                        'a': [[[round(x, 1), round(y, 1)] for x, y in a['pts'][::4]] for a in _g['arms']],
                        't': [[round(x, 1), round(y, 1)] for x, y in _g['tri']['pts']]}, separators=(',', ':'))

# copia interna de respaldo: el contenido tal y como está ahora en el repositorio
data = {}
for f in ['lanzamientos.json', 'artistas.json', 'senal.json', 'textos.json']:
    data.update(json.loads(lee(WEB, 'contenido', f)))

im = {"imports": {"three": "https://cdn.jsdelivr.net/npm/three@0.186.1/build/three.module.js",
                  "three/addons/": "https://cdn.jsdelivr.net/npm/three@0.186.1/examples/jsm/"}}
s = src.replace('%%DATA%%', json.dumps(data, ensure_ascii=False)).replace('%%ALTO%%', lee(F, 'alto.json').strip()) \
       .replace('%%GEO_CARGA%%', geo_carga).replace('%%IMPORTMAP%%', json.dumps(im)).replace('%%PARTS%%', parts).replace('%%GEO%%', geo)
assert '%%' not in s
s = s.replace('<title>aurality AU-00</title>\n', '').replace('<meta name="claude:viewport-fit-sides" content="cover">\n', '')

desc = 'aurality · aura-of-reality. Sello y plataforma creativa de Elda: catálogo, roster, Señal Mensual y radio ambient en directo.'
head = f'''<!doctype html>
<html lang="es"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover">
<title>aurality · aura-of-reality</title>
<meta name="description" content="{desc}">
<meta name="theme-color" content="#9DAFC5">
<link rel="icon" type="image/png" href="favicon.png">
<link rel="apple-touch-icon" href="apple-touch-icon.png">
<meta property="og:type" content="website">
<meta property="og:title" content="aurality · aura-of-reality">
<meta property="og:description" content="{desc}">
<meta property="og:image" content="og-image.jpg">
<meta property="og:locale" content="es_ES">
<meta name="twitter:card" content="summary_large_image">
<script>window.AU_DEPLOY = true;</script>
</head><body>
<!-- formulario estático para que Netlify lo detecte al desplegar (el visible se rellena por código) -->
<form name="senal" method="POST" data-netlify="true" netlify-honeypot="bot-field" hidden>
  <input name="tipo"><input name="nombre"><input name="email"><input name="enlace"><textarea name="mensaje"></textarea><input name="bot-field">
</form>
'''
open(os.path.join(WEB, 'index.html'), 'w', encoding='utf-8').write(head + s + '\n</body></html>\n')
print('web/index.html', len(s) // 1024, 'KB')
