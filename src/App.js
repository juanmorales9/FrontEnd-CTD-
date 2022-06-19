import { useState } from "react";
import Cabecera from "./components/Cabecera";
import Listado from "./components/Listado";
import GlobalStyles from "./GlobalStyles";
import { Contenedor } from "./AppStyles";

function App() {
  const [count, setCount] = useState(0);
  const [view, setView] = useState(true);


const handlerView = () => {
  setView(!view);
};

  return (
    <Contenedor className="App">
      <GlobalStyles />
      
      <div className={view ? "capa" : "capa-oculta"}></div>
      <div className={view ? "shop" : "shop-oculta"}>
      <Cabecera count={count} />
      <Listado setCount={setCount} />
      </div>
      
    </Contenedor>
  );
}

export default App;
