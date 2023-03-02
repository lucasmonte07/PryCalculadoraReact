/* eslint-disable no-unused-vars */

import './App.css';
import Swal from 'sweetalert2';
import Boton from './components/Boton';
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { useEffect } from 'react';

// "math.js" libreria para funciones matematicas 

function App() {

  useEffect (() => {
    mostrarAlerta();
  }, []);

  const mostrarAlerta = () => {
    Swal.fire(" Hola grace... Esta es mi calcu :=) ");
  }

  const [input, setInput] = useState('');
  // val = valor 
  const agregarInput = val => {
    setInput(input + val);
  };
  //funcion para manejar el clear
  const manejarClear = () => {
    setInput('');
  }
  // aplicar funciones matematicas con pack math.js
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");  
      /*
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      */
    }
  }
  return (
    <div className="App">
      <div className='contenedor-calculadora'>
        <Pantalla  input={input}/>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={agregarInput}>7</Boton> 
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'> 
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear btnClear={manejarClear}>
            clear  
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;

// creando la funcion de clear dentro del mismo componente
/*
<BotonClear manejarClear={() => setInput('')}>
            clear  
</BotonClear>
*/