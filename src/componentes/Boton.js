import React from 'react';

function Boton({texto, esBotonDeClick}){
  return(
    <button
      className={esBotonDeclick ? "boton-click" : "boton-reiniciar"}>
      {texto}
    </button>
  )
}
