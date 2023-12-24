import './App.css';
import freeCodeCampLogo from "./imagenes/freecodecamp-logo.png"
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
          handleClick={}
        />
        <Boton
          text="Reiniciar"
          esBotonDeClick={false}
          handleClick={}
        />
      </div>
    </div>
  );
}

export default App;
