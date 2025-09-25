// src/modulos/Almacenamiento.js
let historial = [];

export function guardarResultado(operacion, resultado) {
  historial.push({ operacion, resultado });
}

export function obtenerHistorial() {
  return historial;
}
