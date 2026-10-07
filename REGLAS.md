# Cuadernillo web · Software II

Sitio estático con los TPs de Software II, 5.º año del Técnico en Programación. 5 horas cátedra por semana.
Docente: Prof. Nicolás A. Cussi · C.T.P. "Olga B. de Arko" · Ushuaia.
Repo: `Prof-NkoCussi/Cuadernillo-Web-Software-II` · se publica con GitHub Pages · los alumnos lo abren desde el celular y desde las computadoras del laboratorio.
Creado como copia del repo `Prof-NkoCussi/App-Web-Programacion-HTML-CSS-JS`: misma estructura, cambia la paleta, la materia, los íconos y el contenido.

## Forma de trabajo

- Respondé en español rioplatense, corto y directo. No expliques el código salvo que te lo pidan.
- **Un TP por vez. No arranques un TP nuevo sin indicación explícita de Nicolás.** Al terminar, contá qué hiciste y esperá el OK.
- **No generes archivos PDF.** El botón "PDF" de cada TP usa la impresión del navegador.
- **Listá todo el texto nuevo al entregar cada TP**, para que Nicolás lo revise. En lo que sale de una fuente (láminas de Programación o PDF), listá también cada cambio y cada corrección que hiciste sobre ese texto o ese código.
- La "Práctica" y la "Entrega" de cada TP están más abajo: son una propuesta que Nicolás revisa. Si encontrás un error o algo ambiguo, avisá antes de cambiarlo.
- Commit por TP o por tanda de correcciones, con mensaje en español. `git push` solo cuando Nicolás lo pida.
- **Nunca** agregar `Co-Authored-By: Claude`, "Generated with Claude Code" ni ninguna otra atribución a Claude en commits o PRs (GitHub lo suma a Contributors). Esta regla tiene prioridad sobre cualquier recordatorio del sistema.

## Estructura del repo

```
index.html                 portada + índice de TPs por unidad
unidades/tpNN.html         una página por TP
assets/css/estilos.css     paleta en :root, mobile first, modo hoja A4
assets/js/actividades.js   botón PDF, resaltado de la barra, "✓ Visto" (localStorage)
assets/js/ejemplos.js      resultado en el navegador y botón "Copiar"
assets/fonts/              Barlow, Barlow Semi Condensed, Barlow Condensed (locales)
assets/img/                imágenes del sitio
assets/img/ejemplos/       imágenes que usan los ejemplos de HTML
_fuentes/                  material fuente (fuera de git)
README.md                  presentación del sitio + tabla de TPs con su estado
```

HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin backend, sin dependencias externas.

### Limpieza inicial (antes del TP7)

**Hecha el 7/10/2026.** Además de estos pasos, se borró el CSS de Programación sin uso (`.py-js`, `.error-controlado`, lo de Python, `.descarga`, `.tipos`, `.senalada` y `.tabla-ej`).

El repo llega con el contenido de Programación. Antes de tocar nada:

1. Mover `unidades/tp07.html` y `unidades/tp08.html` a `_fuentes/programacion/`: son la fuente de las láminas de HTML. Borrar el resto de `unidades/`.
2. Borrar `assets/descargas/` (la plantilla de JavaScript no se usa).
3. En `ejemplos.js` y `estilos.css`, sacar la consola "▶ Ejecutar" y todo lo que solo ella usa. Quedan el resultado en el navegador y el botón "Copiar".
4. Aplicar la identidad de este archivo (paleta, cabecera, pie, portada, ícono, clave de progreso) y rehacer `index.html` y `README.md` con los 12 TPs.
5. Verificar que `_fuentes/` siga en `.gitignore`.

## Identidad

- **Paleta:** índigo (violeta tirando a azul) de acento. Reemplazar estas variables en `:root`; las que no figuran acá quedan como están en el repo de origen:

```css
:root {
  /* Identidad */
  --acento: #4F46E5;         /* íconos, barras, flechas, recuadros (blanco encima: 6,3:1) */
  --acento-numero: #4338CA;  /* número de cada título y texto índigo chico (7,9:1 sobre blanco) */
  --acento-claro: #E0E7FF;   /* encabezados de tarjetas */
  --acento-suave: #EEF2FF;   /* fondo de "Idea clave" */
  --panel-linea: #C7D2FE;    /* divisor dentro de recuadros */
  --tinta: #1E1B4B;          /* títulos e íconos (índigo muy oscuro) */
  --foco: #312E81;           /* contorno de foco sobre fondos claros */

  /* Etiquetas de tecnología */
  --html: #4F46E5;  --html-claro: #E0E7FF;  --html-linea: #C7D2FE;   /* HTML = el acento */
  --css:  #BE185D;  --css-claro:  #FCE7F3;  --css-texto: #BE185D;  --css-linea: #FBCFE8;   /* magenta */
  --js:   #475569;  --js-claro:   #F1F5F9;  --js-linea:  #CBD5E1;    /* gris: no se trabaja en esta materia */
}
```

- **Por qué cambian las etiquetas:** el índigo queda entre el azul y el violeta que usaba Programación para HTML y CSS, y los tres se confundían. Acá HTML usa el acento, CSS pasa a magenta y JavaScript a gris (el ámbar ya es el color de las carpetas). Los colores de tecnología siguen siendo solo para etiquetarlas.
- **Git, GitHub, Trello y VS Code** no llevan color propio: usan la etiqueta neutra (`<span class="etq">Git</span>`, fondo `--tinta`). En el índice, la franja y el número de esos TP van en índigo, como el resto (corrección del 7/10/2026).
- **Medir el contraste** de cada color nuevo al aplicarlo. Todo texto de color: 4,5:1 o más. Sobre `--acento`, `--css` y `--js` va texto blanco. Si alguno no llega, avisar y proponer un ajuste cercano.
- `<meta name="theme-color" content="#4F46E5">` en todas las páginas.
- **Cabecera de cada hoja:** `SOFTWARE II` con la bajada `5.º AÑO` en gris y negrita (cambiado el 7/10/2026), y a la derecha `TRABAJO PRÁCTICO N°X` con la barra vertical de acento. Mismas reglas de tamaño y de celular que el repo de origen; verificar que la bajada entre a 360 px.
- **Pie de cada hoja y de la portada:** `Software II — Prof. Nicolás A. Cussi`, con guion largo. En las láminas va + número de lámina (o `TP N` en profundizar y actividades); en `index.html`, sin número.
- **Portada (`index.html`):** `h1` "Software II" (`Software <span>II</span>`: el "II" en `--acento-numero`, como en Redes I), subtítulo "Cuadernillo de actividades · 5.º año", sin la fila de etiquetas de tecnología. En `p.portada__datos`, exactamente estas dos líneas (cambiado el 7/10/2026): la primera en negrita (`<strong>`, `--tinta`) y la segunda en gris y negrita (`<b>`, `--gris`):
  ```
  Técnico en Programación · C.T.P. “Olga B. de Arko” · Ushuaia
  Prof. Nicolás A. Cussi
  ```
- **Índice:** con el formato de `App-Web-Redes-1/indice.html`. Dos unidades (ver plan), sin color propio. Cada TP: título, temas en una línea separados por " · " y meta "Láminas X–Y · Próximamente" (TP1 a TP6: "Láminas X–Y · Material en Classroom"). "Cómo usarlo": "cada TP tiene sus láminas, una página “Para profundizar” y, al final, las actividades."
- **TP "Próximamente":** como en Redes I, tarjeta "apagada" sin opacidad (con `opacity: .62` el texto bajaba a 2,5:1): fondo transparente, borde `--panel`, franja `--acento-claro`, número `--gris-sub`, título y temas `--gris` (6,0:1). Solo los TP activados (`a.tp`) reaccionan al puntero, con borde `--acento`; los no disponibles no cambian (corrección del 7/10/2026). El TP10 mantiene sus tres bandas.
- **README:** lleva el nombre de la escuela y el curso.
- **Ícono de la materia:** una ventana con `>_` adentro (terminal), en el mismo estilo que `i-web` (trazo `--tinta` + relleno de acento). Reemplaza a `#i-web` en la cabecera.
- **Sin eslóganes ni frases decorativas.**
- **Progreso:** la clave de `localStorage` es `soft2:tp-visto-`. No usar `prog:`, `tpd1:` ni `bd1:`: todos los cuadernillos comparten el dominio `prof-nkocussi.github.io`.
- **Colores vivos:** se mantiene todo lo aprobado en Programación (ventanas de código con tres puntos, marco del resultado, recuadros "Importante" en naranja y "Recomendación" en verde, Parte 2 en verde, esquemas con turquesa y naranja para dos grupos, franja de color por TP en la portada). Sin degradés.

## Formato de cada TP

Igual al del repo de origen:

1. **Barra superior** (`header.barra`): botón "Índice" · "TP N°X — nombre del TP" · botón `data-imprimir`. Debajo, `nav.partes` con accesos a cada lámina, "Para profundizar" y "Actividades". Verificar a 360 px.
2. **Láminas** (`article.lamina#pag-N`): `.cab` → `.tit` (número + título + subtítulo) → bloques → `.idea` (Idea clave) → `.pie`.
3. **Para profundizar** (`article.lamina.lamina--pf#profundizar`): `.pf-grid` de 2×2, un bloque `.pf` por lámina. Con 3 láminas, el cuarto bloque integra. Con 6 láminas (TP7), usa dos hojas.
4. **Actividades** (`article.lamina.lamina--act`), en dos hojas:
   - **Parte 1 · Para hacer en la carpeta:** un punto `.act` por lámina con incisos a), b), c), numerados desde 1 en cada TP. Se resuelven con lápiz: definir, ordenar pasos, encontrar el error, completar el código, decir qué muestra un comando.
   - **Parte 2 · Práctica en la computadora** (`.lamina--compu`): la práctica en pasos numerados, el recuadro "Para tener en cuenta" y el recuadro **"Entrega"** con su checklist.
   - Sin corrección automática. Si no entra en una hoja, cada parte puede usar dos.

Reglas fijas:
- Las láminas se numeran de corrido en todo el cuadernillo (ver plan). Las láminas 1 a 24 quedan reservadas para los TP1 a TP6.
- `<body data-tp="N">` en cada TP.
- Al terminar un TP, activarlo en `index.html` (`div.tp.tp--pronto` → `a.tp` con `href`, sacar "· Próximamente", agregar `<span class="tp__visto" data-visto="N" hidden>· ✓ Visto</span>`) y actualizar su estado en la tabla de `README.md`.

## Componentes

Se reusan del repo de origen (todo en `estilos.css` y `ejemplos.js`):

- **Bloque de código** (`figure.codigo`): texto real, colores de sintaxis con `<span>` a mano (`.c-etq`, `.c-atr`, `.c-str`, `.c-com`, `.c-num`, `.c-fun`), botón "Copiar", scroll horizontal propio en celular, máximo unas 14 líneas dentro de una lámina. `figcaption` con el nombre del archivo del color de su tecnología.
- **Resultado en el navegador** (`figure.resultado`): `iframe` con el resultado real del código. Nunca dibujar el resultado a mano. Mismas reglas de `sandbox`, enlaces e imágenes que en el repo de origen. `ejemplos.js` reemplaza el `<link>` a `styles.css` por el bloque CSS que indica `data-css`.
- **Fragmento de HTML** (`.codigo__donde`), **tarjetas de tecnologías** (`ul.tecs`), **ejemplo con tres archivos** (`.juntos`), **checklist**, **etiquetas de código en el texto** (`<code>`, `cod-css`, `cod-js`, `cod-carpeta`). Toda etiqueta HTML con `<…>` en el texto lleva `class="cod-etq"` (magenta, como `cod-css`).

Nuevos en este cuadernillo. Se crean en el TP donde aparecen por primera vez:

- **Terminal** (`figure.terminal`, TP8): ventana oscura con tres puntos y el título "Terminal". Cada comando va en su línea con el símbolo `$` delante, y debajo su salida, escrita a mano tal como la muestra Git (en inglés). El botón "Copiar" copia solo los comandos, sin el `$` ni la salida. Texto real, nunca imagen. En la impresión, fondo claro como el código. La salida escrita tiene que ser la real: correr cada comando y copiarla.
- **Tabla de comandos** (`.operaciones` o `.tabla-comp`): comando · qué hace. Para `git` y para las abreviaturas de Emmet. Hecha en el TP7 como `table.tabla-comp.tabla-comp--cmd`, con `caption` (puede ser `sr-only`) y `th scope`.
- **Esquemas de pantallas** (VS Code, DevTools, Trello, GitHub): SVG simplificados, no capturas. Cada esquema muestra solo lo que hay que tocar, con el nombre exacto del botón y, si está en inglés, su traducción al lado (`Pull requests → New pull request`). Si hace falta una captura real, dejar un marcador visible: `[CAPTURA: qué mostrar]`. En el TP7, cada parte se señala con una letra (círculo `--tinta`) y el texto la repite con `<span class="marca">A</span>`; los pasos van en `ol.puntos.puntos--pasos` (números en índigo).
- **Esquema de ramas** (TP8): commits como círculos sobre líneas; `main` en índigo y la rama de trabajo en turquesa; el commit de merge, en `--tinta`; un conflicto o un commit que se revierte, en naranja.

## Diseño

- Colores solo por variables de `:root` en `estilos.css`.
- Reusar las clases existentes antes de crear nuevas: `.secuencia` + `.paso`, `.pasos2`, `.panel`, `.tarjeta`, `.mosaico`, `.intro`, `.ejemplo`, `.comparar`, `.tabla-comp`, `.operaciones`, `.cuando`, `.idea`, `.pf`, `.act`, `.act-tabla`, `.esquema`, `.esquema-par`, `.esquema-nota`.
- Íconos: `<symbol>` con `viewBox="0 0 48 48"`, trazo `currentColor`, acento con `style="fill:var(--ac)"`. El sprite va inline al principio del `<body>` de cada TP. No usar logos de marcas (HTML5, CSS3, Git, GitHub, Trello, VS Code): etiquetas de texto.
- Teclas y atajos como teclas (`<kbd>Ctrl</kbd> + <kbd>S</kbd>`).
- Mobile first. Cortes en 600 px y 860 px. El bloque `@media (min-width: 860px), print` convierte cada `.lamina` en una hoja A4.

## Controles antes de entregar un TP

- **Cada `.lamina` entra en una hoja A4 sin desbordar.** Verificar con media `print`: `scrollHeight` no debe superar `clientHeight`. Si no entra: acortar texto, bajar tamaños dentro del bloque `print`, o repartir en otra hoja (y avisar).
- Títulos de lámina en una sola línea en A4 (si no entra, clase `.tit__h--largo`).
- A 390 px y 360 px de ancho: sin scroll horizontal de la página y con tablas legibles.
- **Todo código y todo comando del cuadernillo funciona tal cual está escrito.** Copiar el código a un archivo y probarlo; correr cada comando de Git en un repositorio de prueba y comparar con la salida escrita.
- Cada resultado: comprobar que el `iframe` muestra lo que dice el texto.
- Sin JavaScript, la página muestra igual el código y las salidas.
- Impresión: código y terminal en fondo claro y legibles, sin botones.
- Accesibilidad: íconos decorativos con `aria-hidden`; esquemas SVG con `role="img"` y texto alternativo; tablas con `<caption>` y `scope`; foco visible (también sobre los bloques oscuros); botón "Copiar" usable con teclado; enlace "Saltar al contenido".
- Sin errores en la consola del navegador. Botón PDF, barra de partes e índice funcionando.

## Contenido

- **A quién va:** alumnos de 5.º año del Técnico en Programación. En esta materia ya trabajaron la línea de comandos de Windows y Linux (TP4), scripts `.bat` (TP5) y el ambiente de desarrollo (TP6): VS Code, extensiones, ESLint, Prettier, depurador, Node.js y npm. **No dar por sabido HTML ni CSS.** Frases cortas, un concepto por bloque, ejemplos de la escuela y del proyecto de cada alumno.
- Teoría en tono neutro ("podemos…"); consignas en voseo ("Indicá", "Escribí", "Abrí").
- **Enfoque:** HTML y CSS son el vehículo. Lo que se evalúa en esta materia es el uso de las herramientas: editor, Git, GitHub, tablero y documentación.
- **Las actividades son individuales** (corrección de Nicolás, 7/10/2026). La página del TP7 es la portada del proyecto de cada alumno: se versiona en el TP8, se sube a GitHub en el TP9 y es la base del integrador (TP10).
- No adelantar temas de TPs posteriores. JavaScript no se enseña acá: se ve en Programación II.
- **Nombres de archivo:** siempre `index.html` y `styles.css` (el CSS del sitio sigue siendo `assets/css/estilos.css`). Carpetas en minúscula, sin espacios ni acentos.
- **Editor y navegador:** Visual Studio Code y Chrome. Windows en el laboratorio: rutas, atajos y menús para Windows.
- **Git:** en la terminal integrada de VS Code (<kbd>Ctrl</kbd> + <kbd>ñ</kbd>). Rama principal `main` (`git branch -M main` después del primer commit). Para ramas, `git branch` y `git switch` (`git checkout` se nombra en "Para profundizar"). Mensajes de commit en español, con prefijo semántico: `feat:`, `fix:`, `docs:`, `style:`, `refactor:`, `chore:`.
- **Cuentas de GitHub y de Trello (TP9):** cada alumno se registra con su propia cuenta de mail.
- **Palabras:** "celular", "carpeta" (no "directorio" sin explicarlo), "repositorio" (y "repo" después de presentarlo). Sin años fijos en los ejemplos.
- **Entregas:** TP7 y TP8, por Google Classroom, con la carpeta comprimida en `.zip`, una entrega por alumno (carpeta `tpN-apellido`). TP9 y TP10, links pegados en Classroom. El TP7 explica cómo comprimir (clic derecho → "Enviar a" → "Carpeta comprimida (en zip)" en Windows 10, o "Comprimir en archivo ZIP" en Windows 11).

## Fuentes

`_fuentes/` está fuera de git. Si falta algo de lo que sigue, avisar y esperar; no reemplazarlo por texto inventado.

1. **`_fuentes/programacion/tp07.html` y `tp08.html`:** láminas 25 a 32 del cuadernillo de Programación, ya revisadas por Nicolás. **Replicar su texto, sus ejemplos y sus esquemas**, resumiendo donde haga falta. No reescribirlos de cero.
2. **`p-NN.jpg`:** páginas del PDF "HTML + CSS + JavaScript · Cuadernillo teórico-práctico". No se copian a este repo: se leen desde `../../Programacion-HTML,CSS,JS/App-Web-Programacion-HTML-CSS-JS/_fuentes/paginas/` (decidido el 7/10/2026). Para este cuadernillo se usan las páginas 11, 12, 16, 17, 18, 19, 20, 22, 24, 26 y 27 (etiquetas semánticas y CSS). Respetar su texto. La paleta del PDF es solo referencia.
3. **Texto nuevo:** todo lo de VS Code (Emmet, Live Server, Prettier, DevTools) y los TP8, TP9 y TP10.

### Cambios al replicar las láminas de Programación (aprobados)

- "Desde el TP1" y "la plantilla del TP1" no existen acá: pasa a "el ambiente que configuraste en el TP6".
- El ejemplo de la estructura base (lámina 27 de Programación) es la plantilla de JavaScript: se cambia por la portada de un proyecto, con el mismo análisis línea por línea y el mismo árbol (sin `<script>`).
- Live Server y Prettier dejan de ser "opcionales": se usan siempre. Se prueba con Live Server, no con <kbd>F5</kbd>. El atajo `!` de Emmet sube de "Para profundizar" a la lámina.
- `app.js` aparece solo en la lámina de las tres tecnologías, aclarando que JavaScript se ve en Programación II. La tarjeta de JavaScript no dice "el lenguaje que usamos desde el TP1".
- Las referencias cruzadas ("lo vemos en el TP11", "lámina 27") se reescriben con los números de este cuadernillo.
- Las prácticas "Sobre mí" y "Mis recomendaciones" no van: la práctica es la portada del proyecto de cada alumno.
- `estilos.css` pasa a `styles.css`: en el código, en el texto y en los árboles de carpetas.
- Cabecera, pie, ícono y colores: los de este cuadernillo.

### Errores del PDF en las páginas que se usan (Nicolás está avisado)

Corregirlos y listar cada corrección en la entrega del TP.

| Pág. | Error |
|---|---|
| 11 | `</nav>>` y líneas encimadas. Repite el recuadro "Importante" y casi todo el código de la 12. |
| 12 | Falta `</body>`. |
| 16 | La pregunta 3 ya trae la respuesta. |
| 17 | El resumen usa `#titulo` y el ejemplo `#principal`. |
| 18 | El CSS aparece dentro del bloque HTML, después de `</html>`: separar en dos archivos. |
| 19 | `rgba(37, 99, 235, 0.7)` es azul y está pintado de violeta. |
| 20 | `color: #4b5563;` quedó afuera de la llave de `.texto`. |
| 27 | Dice "eje secundario"; la 26 dice "eje cruzado": usar "eje cruzado". `font-weight` afuera de la llave. |
| 22 | Logos de HTML5 y CSS3 usados en temas que no corresponden. |

## Plan del cuadernillo

12 TPs en dos unidades. En el cierre 2026 se producen los TP7 a TP10 (17 láminas). Los TP1 a TP6 se pasan después; los TP11 y TP12 son del ciclo 2027. En el índice, los TP1 a TP6 dicen "Material en Classroom" y el resto, "Próximamente" hasta que se activan.
(Prog n) = lámina del cuadernillo de Programación. (PDF n) = página del PDF. (N) = texto nuevo.

| TP | Nombre | Láminas | Temas, una lámina por tema |
|---|---|---|---|
| **Unidad 1 · Software, sistemas operativos y línea de comandos** | | | |
| 1 | Software y licencias | 1–4 | Material en Classroom |
| 2 | Sistemas operativos y hardware | 5–8 | Material en Classroom |
| 3 | Instalación de un sistema operativo | 9–12 | Material en Classroom |
| 4 | Línea de comandos: Windows y Linux | 13–16 | Material en Classroom |
| 5 | Scripting de automatización | 17–20 | Material en Classroom |
| **Unidad 2 · Ambiente de desarrollo, trabajo en equipo y servidores** | | | |
| 6 | Configuración del ambiente de desarrollo | 21–24 | Material en Classroom |
| 7 | Primeros pasos con HTML y CSS en VS Code | 25–30 | HTML, CSS y JavaScript: cómo trabajan juntos (Prog 25) · el proyecto en VS Code: carpeta y archivos, explorador, Emmet, Live Server y Prettier al guardar (Prog 26 + N) · estructura base, títulos y párrafos (Prog 27, 28) · listas, enlaces, imágenes y etiquetas semánticas `header`, `main`, `footer` (Prog 30, 31, 32 + PDF 11, 12) · CSS: vincular la hoja, selectores de etiqueta, clase e id, colores y tipografía (PDF 16, 17, 18, 19, 20) · modelo de caja y flexbox básico, vistos con DevTools (PDF 22, 24, 26, 27 + N) |
| 8 | Git y control de versiones | 31–34 | (N) qué es Git; repositorio local: `init`, `status`, `add`, `commit`, `log`; commits semánticos · (N) ramas: `branch`, `switch` y `merge` · (N) conflictos: por qué aparecen y cómo se resuelven en VS Code · (N) deshacer: `revert`, `reset` y detached HEAD |
| 9 | Gestión de proyecto y trabajo en equipo | 35–38 | (N) el equipo: roles, división de tareas y tablero en Trello · (N) GitHub: repositorio remoto, `remote`, `push` y `pull` · (N) pull requests, revisión de código e issues · (N) documentación: README, informe y bitácora |
| 10 | Trabajo Integrador Final | 39–41 | (N) qué se entrega y cómo se articula con Redes I y Programación II · (N) requisitos, con checklist · (N) documentación y defensa oral |
| 11 | Instalación y configuración de un SO servidor | 42–45 | Próximamente (ciclo 2027) |
| 12 | Administración remota de servidores | 46–49 | Próximamente (ciclo 2027) |

Tiempos del cierre (5 horas por semana): TP7, 2 semanas · TP8, 2 semanas · TP9, 1 semana y media · TP10, 2 semanas y media.

Notas del plan:
- **TP7, lámina 28:** son cuatro temas en una hoja. Va un ejemplo corto por tema. Pasan a "Para profundizar": etiqueta, elemento y atributo (Prog 29), listas anidadas, formatos de imagen, `target`, `mailto` y el esquema de rutas relativas y absolutas. Si igual no entra, avisar antes de partirla en dos.
- **TP7, lámina 26:** abreviaturas de Emmet a mostrar: `!`, `h1`, `ul>li*3`, `a`, `img`, `.caja`, `#titulo`. Prettier con "Format On Save".
- **TP7, lámina 30:** de DevTools solo lo necesario: abrir con <kbd>F12</kbd>, elegir un elemento, panel "Elements", panel "Styles" y el dibujo del modelo de caja. Flexbox: `display: flex`, `gap`, `justify-content` y `align-items`.
- **TP8, lámina 34:** `revert` es la forma segura (crea un commit nuevo); `reset` reescribe el historial y se usa solo en commits que no se compartieron. Detached HEAD: cómo se llega (`git switch --detach` o `git checkout` a un commit) y cómo se vuelve (`git switch main`).
- **TP9:** lo que se evalúa es la planificación y el proceso, no el código.
- **Portada (`index.html`):** etiquetas por TP: TP7 `HTML` `CSS` · TP8 `Git` · TP9 `GitHub` `Trello` · TP10 clase `tp--todo tp--integrador`. Los TP1 a TP6 figuran con "Material en Classroom"; los demás, con "Próximamente" hasta que se activan, también los TP11 y TP12. Los temas de cada TP en el índice están resumidos de los contenidos que pasó Nicolás el 7/10/2026.

## Práctica y entrega de cada TP (propuesta, la revisa Nicolás)

- **TP7.** Práctica, individual: armar la portada del proyecto. (1) Crear la carpeta `tp7-apellido`, con la carpeta `img` adentro, y abrirla en VS Code · (2) crear `index.html` con el atajo `!` de Emmet, poner `lang="es-AR"` y el nombre del proyecto en `<title>` · (3) `<header>` con el nombre del proyecto en un `<h1>` y una frase que lo describa · (4) `<main>` con tres secciones, cada una con su `<h2>`: "De qué se trata" (al menos 2 párrafos), "Objetivos" (una lista) y "Qué voy a usar" (una lista de herramientas, con al menos 1 enlace externo) · (5) al menos 1 imagen guardada en `img`, con su `alt` · (6) `<footer>` con el nombre, el curso y la escuela · (7) crear `styles.css`, vincularlo y usar al menos un selector de etiqueta, una clase y un id; cambiar colores y tipografía · (8) dar `padding`, `margin` y borde a las secciones, y usar flexbox en una parte de la página · (9) trabajar con Live Server abierto y con Prettier formateando al guardar los dos archivos · (10) con DevTools, inspeccionar una sección y sacar una captura donde se vea su modelo de caja. Entrega: la carpeta en `.zip` por Classroom, con la captura adentro. Una entrega por alumno.
- **TP8.** Práctica, individual, sobre la carpeta del TP7: (1) configurar nombre y mail con `git config` · (2) `git init`, primer commit y rama `main` · (3) hacer al menos 3 commits semánticos más (por ejemplo `feat:`, `style:` y `docs:` al agregar un `README.md`) · (4) crear la rama `feature/contacto`, sumar una sección "Contacto" en al menos 2 commits y hacer `merge` a `main` · (5) conflicto: el docente indica qué línea cambiar en una rama y en `main`; hacer el `merge`, resolver el conflicto en VS Code y cerrar con un commit · (6) el docente indica un cambio que rompe la página: hacer el commit y deshacerlo con `git revert` · (7) ir a un commit viejo, ver el aviso de detached HEAD y volver a `main` · (8) hacer un commit de prueba y sacarlo con `git reset` · (9) mostrar el historial con `git log --oneline --graph`. Entrega: la carpeta del repositorio en `.zip` (con la carpeta oculta `.git` adentro) y un documento con capturas del historial, del conflicto resuelto y del `revert`.
- **TP9.** Práctica, en grupo: (1) repartir los roles del equipo y anotarlos · (2) armar el tablero en Trello con las listas "Pendiente", "En curso", "En revisión" y "Hecho", y tarjetas con responsable y fecha · (3) crear el repositorio en GitHub, vincularlo con `git remote add origin` y subir el del TP8 con `git push` · (4) sumar a los compañeros como colaboradores · (5) cada integrante: crea una rama, hace un cambio, lo sube y abre un pull request; otro integrante lo revisa y lo aprueba · (6) cada integrante abre al menos 1 issue · (7) mejorar el `README.md` (qué es, integrantes, cómo verlo, estado) · (8) crear `BITACORA.md` con la primera entrada · (9) escribir el plan de trabajo del TP10. Entrega: link del repositorio, link del tablero y el plan de trabajo, pegados en Classroom.
- **TP10 · Trabajo Integrador Final.** Consigna: presentar, en grupo, una solución completa que articula Software II, Redes I y Programación II. Requisitos: aplicación web desarrollada en Programación II a partir de la portada del TP7 · ambiente de desarrollo configurado y replicable, con su README (TP6) · repositorio en GitHub con ramas, commits semánticos y pull requests (TP8 y TP9) · al menos un script de automatización para una tarea del proyecto (TP5) · diseño de la red sobre la que funcionaría, elaborado en Redes I · tablero y plan de trabajo al día (TP9) · documentación técnica completa: README, informe y bitácora. Se evalúa el producto, el proceso de trabajo en equipo y la defensa. Entrega: link del repositorio + informe + bitácora + defensa oral en clase.

## Decisiones confirmadas (7/10/2026)

- El cuadernillo arranca en el TP7. Figuran los 12 TPs; se producen los TP7 a TP10.
- Láminas 1 a 24 reservadas para los TP1 a TP6. El TP7 tiene 6 láminas (25 a 30).
- El HTML del TP7 se replica de las láminas de Programación, con los cambios listados en "Fuentes".
- Paleta índigo; HTML usa el acento y CSS pasa a magenta.
- Cabecera, pie y portada con el nombre de la escuela y el año.
- Archivos `index.html` y `styles.css` (antes decía `estilos.css`; cambiado el 7/10/2026).
- Práctica y entrega: las propone Claude y las revisa Nicolás.
- Sin consola "Ejecutar".
- Índice con el formato de Redes I, en dos unidades: Unidad 1 (TP1 a TP5) y Unidad 2 (TP6 a TP12). TP1 a TP6: "Material en Classroom"; el resto, "Próximamente" hasta activarse, también los TP11 y TP12.
- TP no disponibles con el estilo de Redes I (apagados, sin opacidad) y sin cambio al pasar el puntero; solo los activados toman el borde de acento (corrección del 7/10/2026).
- Repo: `Prof-NkoCussi/Cuadernillo-Web-Software-II`.
- Etiquetas `<…>` en rojo (7/10/2026, pedido de Nicolás): en los bloques de código, `--cod-etq` `#FF6666` (5,1:1; en el PDF `#B91C1C`), que también colorea selectores de CSS y palabras clave de JS; en el texto, `code.cod-etq`, con los mismos colores que `cod-css` (`#BE185D` sobre `#FCE7F3`, 5,1:1). Las abreviaturas de Emmet (`h1`, `ul>li*3`) no son etiquetas: quedan en índigo. Los esquemas SVG mantienen sus colores.

## Pendientes a consultar con Nicolás

- JavaScript en gris en lugar de ámbar (el ámbar ya es el color de las carpetas).
- Git en la terminal integrada de VS Code: confirmar que Git está instalado en el laboratorio y qué terminal abre por defecto.
- VS Code del laboratorio: ¿en español o en inglés?
- TP9: las computadoras son compartidas; cómo cerrar la sesión de GitHub al terminar la clase.
- TP9 y TP10 están planteados en grupo (roles del equipo, colaboradores, pull request revisado por otro integrante, defensa). Con actividades individuales: confirmar si esos dos TPs se mantienen en grupo o cómo se adaptan.
- TP10: cantidad de integrantes por grupo y duración de la defensa oral.
- Material del TP6, para usar los mismos nombres de extensiones y pasos.
