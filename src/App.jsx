import "./App.css";
import Formulario from "./components/formulario";
import HearKey from "./components/hearKey";
import ListaElementos from "./components/listaElementos";
import Ubicacion from "./components/locate";
import TamanoVentana from "./components/medidaVentana";
function App() {
  return (
    <>
      <HearKey />
      <hr />
      <Ubicacion />
      <hr />
      <TamanoVentana />
      <hr />
      <h1>Formulario</h1>
      <Formulario />
      <hr />
      <h1>Paginacion</h1>
      <ListaElementos />
    </>
  );
}

export default App;
