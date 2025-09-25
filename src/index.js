// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./modulos/App"; // 👈 apunta a tu App dentro de modulos

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
