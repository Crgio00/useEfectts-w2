import React, { useState, useEffect } from "react";

export default function TamanoVentana() {
  const [ancho, setAncho] = useState(window.innerWidth);

  useEffect(() => {
    function manejarCambioDeTamaño() {
      setAncho(window.innerWidth);
    }
    window.addEventListener("resize", manejarCambioDeTamaño);

    return () => {
      window.removeEventListener("resize", manejarCambioDeTamaño);
    };
  }, []);

  return (
    <div>
      <h1>Ancho de la ventana: {ancho}px</h1>
    </div>
  );
}
