import './App.css';
import "./stylesheets/Boton.css";
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
import Boton from "./componentes/Boton.js";
function App() {

  const handleClick = () => {
    console.log("Click");
  }

  const handleRestart = () => {
    console.log("Reiniciar");
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
