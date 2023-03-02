import React from 'react'
import '../hojas-de-estilo/Boton.css';


// 2 == para que la comparacion sea estricta 
function Boton(props) {

    const esOperador = valor => {
    return isNaN(valor) && (valor !== '.') && (valor !== '=');
  };
  //cuando ocurra un click

  // alternativa utilizando condicionales

  if (esOperador(props.children)) {
    return (
      <div
        className='boton-contenedor operador'
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
} else {
  return (
      <div
        className='boton-contenedor operador'
        onClick={() => props.manejarClic(props.children)}>
        {props.children}
      </div>
    );
  }
}

export default Boton;

// alternativa con operador ternario 
/*
return (
  <div
    className={`boton-contenedor ${esOperador(props.children) ? 'operador' :null}`}
    onClick={() => props.manejarClic(props.children)}>
    {props.children}
  </div>*/
