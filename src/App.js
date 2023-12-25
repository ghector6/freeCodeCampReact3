import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Contador from "./componentes/Contador.js";
import Boton from "./componentes/Boton.js";
import {useState} from "react";

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const handleClick = () => {
    setNumClicks(numClicks + 1)
  }

  const handleRestart = () => {
    setNumClicks(0)
  }

  return (
    <div className="App">
       <div className="freecodecamp-logo-contenedor">
         <img
           className="freecodecamp-logo"
           src={freeCodeCampLogo}
           alt="Logo de freeCodeCamp"/>
       </div>
      <div className="contenedor-principal">
        <Contador numClicks={numClicks}/>
        <Boton
          texto="Click"
          esBotonDeClick={true}
          handleClick={handleClick}
        />
        <Boton
          texto="Reiniciar"
          esBotonDeClick={false}
          handleClick={handleRestart}
        />
      </div>
    </div>
  );
}

export default App;
