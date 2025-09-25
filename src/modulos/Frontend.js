// src/modulos/Frontend.jsx
import { useState } from "react";
import { sumar, restar, multiplicar, dividir } from "./Operaciones";
import { guardarResultado, obtenerHistorial } from "./Almacenamiento";

export default function Frontend() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcular = (op) => {
    let res;
    switch (op) {
      case "+": res = sumar(Number(num1), Number(num2)); break;
      case "-": res = restar(Number(num1), Number(num2)); break;
      case "*": res = multiplicar(Number(num1), Number(num2)); break;
      case "/": res = dividir(Number(num1), Number(num2)); break;
      default: res = "Operación inválida";
    }
    setResultado(res);
    guardarResultado(`${num1} ${op} ${num2}`, res);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto", background: "#f2f2f2", borderRadius: "10px" }}>
      <h1>Calculadora Modular</h1>

      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
        placeholder="Número 1"
        style={{ display: "block", margin: "5px 0", padding: "5px", width: "100%" }}
      />

      <input
        type="number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
        placeholder="Número 2"
        style={{ display: "block", margin: "5px 0", padding: "5px", width: "100%" }}
      />

      <div style={{ margin: "10px 0" }}>
        <button onClick={() => calcular("+")}>+</button>
        <button onClick={() => calcular("-")}>-</button>
        <button onClick={() => calcular("*")}>*</button>
        <button onClick={() => calcular("/")}>/</button>
      </div>

      <h2>Resultado: {resultado}</h2>

      <h3>Historial:</h3>
      <ul>
        {obtenerHistorial().map((h, i) => (
          <li key={i}>{h.operacion} = {h.resultado}</li>
        ))}
      </ul>
    </div>
  );
}
