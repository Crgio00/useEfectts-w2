import React, { useState, useEffect } from "react";

function ListaElementos() {
  const [elementos, setElementos] = useState([
    "Manzana",
    "Banana",
    "Cereza",
    "Durazno",
    "Fresa",
    "Uva",
    "Kiwi",
    "Limón",
    "Naranja",
    "Pera",
    "Papaya",
    "Piña",
    "Sandía",
  ]);
  const [paginaActual, setPaginaActual] = useState(1);
  const [elementosPorPagina] = useState(4);
  const [elementosPagina, setElementosPagina] = useState([]);

  useEffect(() => {
    const indiceFinal = paginaActual * elementosPorPagina;
    const indiceInicial = indiceFinal - elementosPorPagina;
    const elementosPaginaActual = elementos.slice(indiceInicial, indiceFinal);
    setElementosPagina(elementosPaginaActual);
  }, [paginaActual, elementosPorPagina, elementos]);

  const handleClickPagina = (numeroPagina) => {
    setPaginaActual(numeroPagina);
  };

  const numeroPaginas = Math.ceil(elementos.length / elementosPorPagina);
  const paginas = [];
  for (let i = 1; i <= numeroPaginas; i++) {
    paginas.push(
      <button key={i} onClick={() => handleClickPagina(i)}>
        {i}
      </button>
    );
  }

  return (
    <>
      <ul>
        {elementosPagina.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
      <div>{paginas}</div>
    </>
  );
}

export default ListaElementos;
