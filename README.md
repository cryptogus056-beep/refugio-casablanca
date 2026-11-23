# Refugio Casablanca · Recorrido virtual 3D

Recorrido virtual 3D de la cabaña Refugio Casablanca (Lo Orozco, Casablanca, Chile).
Esta carpeta contiene solo la página ya terminada; se publica con GitHub Pages.

La portada carga el motor 3D al abrir el recorrido o la guía. Los enlaces directos con `?spot=…` o `?skipwelcome=1` siguen entrando al recorrido. La [galería de fotos](./galeria.html) también funciona con JavaScript desactivado. Admite los idiomas `es`, `en` y `pt` mediante el parámetro `lang`.

Para probar el sitio localmente, ejecuta `python3 -m http.server 8000` desde esta carpeta y abre `http://localhost:8000`.

Los ajustes de caminata y cámara están en `assets/camara.js`. La cámara respeta la preferencia de movimiento reducido del dispositivo. Los materiales y la geometría de los cubrecamas están en `assets/interior.js`. Las tres texturas de `assets/texturas/` provienen de las fotos del comedor y los dormitorios incluidas en este repositorio.
