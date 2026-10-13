/* ==========================================================
   Software II — simulador.js
   Simulador del instalador de Git para Windows (TP7):
   - Una pantalla por vez, con Back, Next, Install y Finish.
   - Debajo de la ventana, qué hacer en cada pantalla.
   - En las dos pantallas que cambian (el editor y la rama
     inicial) no deja seguir hasta elegir la opción correcta.
   Sin JavaScript, y en el PDF, queda fija la pantalla del editor.
   Nada se guarda ni se envía.
   ========================================================== */
(function () {
  "use strict";

  Array.prototype.forEach.call(document.querySelectorAll("[data-sim]"), iniciar);

  function iniciar(sim) {
    var pantallas = sim.querySelectorAll(".sim__pantalla");
    var muestra = sim.querySelector(".sim__pantalla--muestra");
    var atras = sim.querySelector("[data-sim-atras]");
    var siguiente = sim.querySelector("[data-sim-sig]");
    var guia = sim.querySelector(".sim__guia");
    var numero = sim.querySelector(".sim__n");
    var que = sim.querySelector(".sim__que");
    var otraVez = sim.querySelector("[data-sim-otra-vez]");
    var editor = sim.querySelector("[data-sim-editor]");
    var editorDesc = sim.querySelector("[data-sim-editor-desc]");
    var ramaDecide = sim.querySelector("[data-sim-rama-decide]");
    var ramaOtra = sim.querySelector("[data-sim-rama-otra]");
    var ramaNombre = sim.querySelector("[data-sim-rama-nombre]");
    var total = pantallas.length;
    var actual = 0;
    var reloj = null;

    /* Descripción que muestra el instalador debajo de la lista de editores */
    var descripciones = {
      nano: "GNU nano is a small and friendly text editor running in the console window.",
      vim: "The Vim editor, while powerful, can be hard to use. Its user interface is unintuitive and its key bindings are awkward.",
      notepadpp: "Notepad++ is a popular GUI editor that can be used by Git.",
      vscode: "Visual Studio Code is an Open Source, lightweight and powerful editor running as a desktop application.",
      notepad: "Notepad is a simple GUI editor that comes with Windows."
    };

    function estadoInicial() {
      editor.value = "vim";
      ramaDecide.checked = true;
      ramaNombre.value = "main";
      actualizarEditor();
      actualizarRama();
    }

    function actualizarEditor() {
      editorDesc.textContent = descripciones[editor.value] || "";
    }

    function actualizarRama() {
      ramaNombre.disabled = !ramaOtra.checked;
    }

    function ayuda(pantalla, clase) {
      var nodo = pantalla.querySelector(clase);
      que.innerHTML = nodo ? nodo.innerHTML : "";
    }

    function mostrar(n) {
      window.clearInterval(reloj);
      actual = n;
      Array.prototype.forEach.call(pantallas, function (p, i) { p.hidden = i !== n; });
      var p = pantallas[n];
      numero.textContent = "Pantalla " + (n + 1) + " de " + total;
      ayuda(p, ".sim__ayuda");
      guia.classList.remove("sim__guia--error");
      guia.classList.toggle("sim__guia--clave", p.hasAttribute("data-clave"));
      siguiente.textContent = p.getAttribute("data-boton") || "Next >";
      atras.disabled = n === 0 || p.hasAttribute("data-instalando") || n === total - 1;
      siguiente.disabled = p.hasAttribute("data-instalando");
      if (p.hasAttribute("data-instalando")) { instalar(p); }
    }

    function valida(p) {
      var pide = p.getAttribute("data-requiere");
      if (pide === "editor") { return editor.value === "vscode"; }
      if (pide === "rama") { return ramaOtra.checked && ramaNombre.value.trim() === "main"; }
      return true;
    }

    /* La pantalla "Installing": la barra se llena y pasa sola a la última */
    function instalar(p) {
      var barra = p.querySelector(".sim__progreso span");
      var avance = 0;
      barra.style.width = "0%";
      reloj = window.setInterval(function () {
        avance += 4;
        barra.style.width = Math.min(avance, 100) + "%";
        if (avance >= 100) {
          window.clearInterval(reloj);
          mostrar(actual + 1);
          siguiente.focus();
        }
      }, 70);
    }

    function terminar() {
      sim.classList.add("sim--fin");
      numero.textContent = "Fin";
      que.innerHTML = sim.querySelector(".sim__fin .sim__ayuda").innerHTML;
      guia.classList.remove("sim__guia--clave", "sim__guia--error");
      otraVez.focus();
    }

    siguiente.addEventListener("click", function () {
      var p = pantallas[actual];
      if (!valida(p)) {
        ayuda(p, ".sim__error");
        guia.classList.add("sim__guia--error");
        return;
      }
      if (actual === total - 1) { terminar(); return; }
      mostrar(actual + 1);
    });

    atras.addEventListener("click", function () {
      if (actual > 0) { mostrar(actual - 1); }
    });

    otraVez.addEventListener("click", function () {
      sim.classList.remove("sim--fin");
      estadoInicial();
      mostrar(0);
      siguiente.focus();
    });

    editor.addEventListener("change", actualizarEditor);
    ramaDecide.addEventListener("change", actualizarRama);
    ramaOtra.addEventListener("change", actualizarRama);

    /* En el PDF va la pantalla del editor, con VS Code elegido */
    var guardado = null;
    window.addEventListener("beforeprint", function () {
      guardado = { editor: editor.value, que: que.innerHTML, clases: guia.className };
      editor.value = "vscode";
      actualizarEditor();
      ayuda(muestra, ".sim__ayuda");
      guia.className = "sim__guia sim__guia--clave";
    });
    window.addEventListener("afterprint", function () {
      if (!guardado) { return; }
      editor.value = guardado.editor;
      actualizarEditor();
      que.innerHTML = guardado.que;
      guia.className = guardado.clases;
      guardado = null;
    });

    sim.classList.add("sim--activo");
    estadoInicial();
    mostrar(0);
  }
})();
