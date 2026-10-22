// Panel de control de YoLo.
// Por ahora el robot está simulado: cada botón muestra el comando en la página.
// En el TP final, la función enviarComando le manda el comando al servidor
// con fetch (POST /api/comando) y el servidor se lo pasa al robot por MQTT.
// En este TP, este archivo no se modifica.

const estado = document.getElementById("estado");
const historial = document.getElementById("historial");
const botones = document.querySelectorAll("[data-comando]");

const mensajes = {
  adelante: "Avanzando",
  atras: "Retrocediendo",
  izquierda: "Girando a la izquierda",
  derecha: "Girando a la derecha",
  stop: "Robot detenido",
};

function enviarComando(comando) {
  // TP final: acá va el fetch al servidor.
  estado.textContent = mensajes[comando];
  agregarAlHistorial(comando);
}

function agregarAlHistorial(comando) {
  const item = document.createElement("li");
  const hora = new Date().toLocaleTimeString("es-AR");
  item.textContent = `${hora} · ${mensajes[comando]}`;
  historial.prepend(item);

  // Solo se muestran los últimos 5 comandos.
  while (historial.children.length > 5) {
    historial.lastElementChild.remove();
  }
}

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    enviarComando(boton.dataset.comando);
  });
});
