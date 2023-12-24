import React from 'react';

function Boton({texto, esBotonDeClick, handleClick}){
  return(
    <button
      className={esBotonDeclick ? "boton-click" : "boton-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  )
}

export default Boton;
