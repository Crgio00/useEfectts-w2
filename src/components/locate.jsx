import React, { useState, useEffect } from "react";

export default function Ubicacion() {
  const [ubicacion, setUbicacion] = useState(null);

  useEffect(() => {
    function obtenerUbicacion() {
      navigator.geolocation.getCurrentPosition((posicion) => {
        const latitud = posicion.coords.latitude;
        const longitud = posicion.coords.longitude;
        setUbicacion({ latitud, longitud });
      });
    }
    obtenerUbicacion();
  }, []);

  return (
    <div>
      {ubicacion ? (
        <h1>
          Ubicación actual: ({ubicacion.latitud}, {ubicacion.longitud})
        </h1>
      ) : (
        <h1>Obteniendo ubicación...</h1>
      )}
    </div>
  );
}
