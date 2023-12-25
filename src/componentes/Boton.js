import React from 'react';

function Boton({texto, esBotonDeClick, handleClick}){
  return(
    <button
      className={esBotonDeClick ? "boton-click" : "boton-reiniciar"}
      onClick={handleClick}
    >
      {texto}
    </button>
  );
}

export default Boton;
