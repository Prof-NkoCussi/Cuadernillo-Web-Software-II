# YoLo · Panel de control (plantilla)

Plantilla del TP8 de Software II: una app web súper básica para controlar el robot YoLo. Por ahora el robot está simulado: cada botón muestra el comando en la página y lo suma a la lista de últimos comandos.

## Archivos

- `index.html`: la estructura de la página.
- `styles.css`: los estilos. Está casi vacío: el diseño lo hacés vos.
- `app.js`: el comportamiento de los botones.

## Cómo verla

Abrí la carpeta en VS Code, clic derecho sobre `index.html` → **Open with Live Server**.

## Qué podés cambiar y qué no

- **Sí:** todo el HTML (textos, etiquetas, orden, imágenes, enlaces) y todo el CSS. El recuadro `camara` es el lugar del video del robot en el TP final: podés moverlo y darle estilo.
- **No:** los `id` (`estado`, `historial`, `controles`), los atributos `data-comando` de los botones ni la línea `<script src="app.js">`. El JavaScript los usa: si los borrás o los cambiás, los botones dejan de funcionar.
- `app.js` no se modifica en este TP.
