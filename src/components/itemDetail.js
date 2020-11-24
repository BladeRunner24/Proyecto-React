import React, {useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./itemCount.js";
import  CartProvider from '../context/cartContext.js';

export default function ItemDetail (props) {

  const [onLine, setOnLine] = useState(true);
  const [guardar, setGuardar] = useState();
  const titulo = 'bicicletas';
  const {add} = useContext(CartProvider);
  const [id, setId] = useState();
   
  

  function onAdd(number){
    setOnLine(false);
    setGuardar(number);
    alert(`Se van a agregar ${number} ${titulo} a su carrito`);
    };
    
    setId(props.ids);
    
    const item = id + guardar;  
     

  return (
        <>
          <div>
            <h3>{props.ids}</h3>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>             
          </div>
          {onLine ? <ItemCount apagado = {onAdd} title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/> : <Link to = "/carrito"><button>Terminar mi compra</button></Link>}
          <button onClick= { add (item) }>Agregar al carrito</button>
        </>
    );
};
