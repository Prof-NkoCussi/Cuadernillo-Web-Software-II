/* ==========================================================
   Software II — ejemplos.js
   Ejemplos en vivo de los TPs:
   - Botón "Copiar" en cada bloque de código (figure.codigo)
   - Resultado en el navegador (figure.resultado[data-html]):
     muestra en un iframe el resultado real del código HTML del ejemplo.
     Los enlaces del ejemplo no se abren: se avisa a dónde llevan.
   Sin JavaScript, la página muestra igual el código.
   ========================================================== */
(function () {
  "use strict";

  /* Carpeta de las imágenes de los ejemplos de HTML, relativa a este archivo */
  var carpetaImg = "";
  try { carpetaImg = new URL("../img/ejemplos/", document.currentScript.src).href; } catch (e) { /* sin <base> */ }

  /* ---- Aviso para lectores de pantalla ---- */
  var aviso = document.createElement("p");
  aviso.className = "sr-only";
  aviso.setAttribute("aria-live", "polite");
  document.body.appendChild(aviso);
  function avisar(texto) {
    aviso.textContent = "";
    window.setTimeout(function () { aviso.textContent = texto; }, 50);
  }

  function crearBoton(texto) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "boton-cod";
    b.textContent = texto;
    return b;
  }

  /* ==========================================================
     Copiar
     ========================================================== */
  function copiar(texto, listo) {
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(texto).then(listo, function () { copiarViejo(texto, listo); });
    } else {
      copiarViejo(texto, listo);
    }
  }
  function copiarViejo(texto, listo) {
    var area = document.createElement("textarea");
    area.value = texto;
    area.setAttribute("readonly", "");
    area.style.position = "fixed";
    area.style.opacity = "0";
    document.body.appendChild(area);
    area.select();
    try { document.execCommand("copy"); listo(); } catch (e) { /* sin portapapeles */ }
    document.body.removeChild(area);
  }

  var bloques = document.querySelectorAll("figure.codigo");
  Array.prototype.forEach.call(bloques, function (fig) {
    var cab = fig.querySelector("figcaption");
    var pre = fig.querySelector("pre");
    if (!cab || !pre) { return; }
    var archivo = cab.textContent.trim();
    var boton = crearBoton("Copiar");
    boton.setAttribute("aria-label", "Copiar el código de " + archivo);
    boton.addEventListener("click", function () {
      copiar(pre.textContent, function () {
        boton.textContent = "✓ Copiado";
        avisar("Código copiado");
        window.setTimeout(function () { boton.textContent = "Copiar"; }, 1600);
      });
    });
    cab.appendChild(boton);
  });

  /* ==========================================================
     Resultado en el navegador
     data-html: id del bloque HTML. Si es un fragmento (sin <html>), va dentro de <body>.
     data-css y data-js (opcionales): ids de los bloques que reemplazan
     al <link> de styles.css y al <script src="app.js">.
     Si el ejemplo tiene enlaces, se ven y se señalan como enlaces, pero no se abren:
     el marco no puede salir del cuadernillo ni cargar otro sitio. Debajo se avisa a dónde llevan.
     ========================================================== */

  /* Este código corre DENTRO del iframe de un ejemplo con enlaces. Se pasa como texto. */
  function frenoEnlaces() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest ? e.target.closest("a[href]") : null;
      if (!a) { return; }
      e.preventDefault();
      var destino = a.getAttribute("href");
      if (destino.charAt(0) === "#") {   // una sección de la misma página: baja dentro del marco
        var seccion = document.getElementById(destino.slice(1));
        if (seccion) { window.scrollTo(0, seccion.offsetTop); }
      }
      parent.postMessage({ enlace: true, destino: destino }, "*");
    });
  }

  var avisosEnlace = [];  // { marco, aviso }

  function textoEnlace(destino) {
    if (destino.charAt(0) === "#") { return ["Este enlace lleva a la sección ", destino.slice(1), " de la misma página."]; }
    if (/^mailto:/i.test(destino)) { return ["Este enlace abre el programa de correo para escribir a ", destino.slice(7), "."]; }
    return ["Este enlace lleva a ", destino, ". En el cuadernillo no se abre: probalo en tu página."];
  }

  window.addEventListener("message", function (e) {
    var d = e.data;
    if (!d || d.enlace !== true || typeof d.destino !== "string") { return; }
    avisosEnlace.forEach(function (x) {
      if (e.source !== x.marco.contentWindow) { return; }
      var partes = textoEnlace(d.destino);
      var codigo = document.createElement("code");
      codigo.textContent = partes[1];
      x.aviso.textContent = partes[0];
      x.aviso.appendChild(codigo);
      x.aviso.appendChild(document.createTextNode(partes[2]));
    });
  });
  function textoDe(id) {
    var fig = id ? document.getElementById(id) : null;
    var pre = fig && fig.querySelector("pre");
    return pre ? pre.textContent : null;
  }

  function armarPagina(fig) {
    var html = textoDe(fig.getAttribute("data-html"));
    if (html === null) { return null; }
    var css = textoDe(fig.getAttribute("data-css"));
    var js = textoDe(fig.getAttribute("data-js"));
    if (!/<html[\s>]/i.test(html)) {
      html = "<!DOCTYPE html>\n<html lang=\"es-AR\">\n<head>\n<meta charset=\"utf-8\">\n</head>\n<body>\n" + html + "\n</body>\n</html>";
    }
    /* Se reemplaza con funciones para que un "$" del código no se tome como patrón */
    var conLink = false;
    html = html.replace(/<link\b[^>]*href="styles\.css"[^>]*>/gi, function () {
      conLink = true;
      return css === null ? "" : "<style>\n" + css + "\n</style>";
    });
    /* Fragmento sin <link> (solo lo de <body>): el CSS va igual, como si la hoja estuviera vinculada */
    if (!conLink && css !== null) {
      html = html.replace(/<\/head>/i, function () { return "<style>\n" + css + "\n</style>\n</head>"; });
    }
    html = html.replace(/<script\b[^>]*src="app\.js"[^>]*>\s*<\/script>/gi, function () {
      return js === null ? "" : "<script>\n" + js.replace(/<\/script/gi, "<\\/script") + "\n<\/script>";
    });
    if (carpetaImg) {
      html = html.replace(/<head(\s[^>]*)?>/i, function (m) { return m + "\n<base href=\"" + carpetaImg + "\">"; });
    }
    return html;
  }

  var resultados = document.querySelectorAll("figure.resultado[data-html]");
  Array.prototype.forEach.call(resultados, function (fig) {
    var marco = fig.querySelector("iframe");
    var html = armarPagina(fig);
    if (!marco || html === null) { return; }
    if (!marco.hasAttribute("sandbox")) { marco.setAttribute("sandbox", ""); }
    if (/<a\s[^>]*href/i.test(html)) {
      var permisos = marco.getAttribute("sandbox");
      if (!/\ballow-scripts\b/.test(permisos)) { marco.setAttribute("sandbox", (permisos + " allow-scripts").trim()); }
      var freno = "<script>(" + frenoEnlaces.toString() + ")();<\/script>";
      html = /<\/body>/i.test(html) ? html.replace(/<\/body>/i, function () { return freno + "\n</body>"; }) : html + freno;
      var aviso = document.createElement("p");
      aviso.className = "resultado__nota resultado__aviso";
      aviso.setAttribute("role", "status");
      marco.parentNode.insertBefore(aviso, marco.nextSibling);
      avisosEnlace.push({ marco: marco, aviso: aviso });
    }
    /* Abierto desde la computadora (file://), un marco aislado no puede cargar las imágenes de la carpeta:
       si el ejemplo no corre scripts, se le da el origen del cuadernillo. En internet no hace falta. */
    if (location.protocol === "file:" && /<img\b/i.test(html) && !/\ballow-scripts\b/.test(marco.getAttribute("sandbox"))) {
      marco.setAttribute("sandbox", (marco.getAttribute("sandbox") + " allow-same-origin").trim());
    }
    /* La pestaña muestra el <title> del código, como el navegador */
    var titulo = html.match(/<title>([\s\S]*?)<\/title>/i);
    var pestana = fig.querySelector(".resultado__pestana");
    if (pestana && titulo) { pestana.textContent = titulo[1].trim(); }
    marco.srcdoc = html;
  });
})();
