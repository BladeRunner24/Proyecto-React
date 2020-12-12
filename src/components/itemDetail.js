import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./itemCount.js";
import  {UserCartContext} from '../context/cartContext.js';

export default function ItemDetail (props) {

  const [onLine, setOnLine] = useState(true);
  const [guardar, setGuardar] = useState();
  const titulo = 'bicicletas';
  const {add} = UserCartContext();
  const [titulos, setTitulos] = useState();
  const item = {
    id: titulos,
    numero: guardar
  };
   
  

  function onAdd(number){
    setOnLine(false);
    setGuardar(number);
    setTitulos(props.titulo);
    alert(`Se van a agregar ${number} ${titulo} a su carrito`);
    };     

  return (
        <>
          <div>
            <h3>{props.ids}</h3>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>             
          </div>
          {onLine ? <ItemCount apagado = {onAdd} title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/> : <Link to = "/carrito" ><button onClick= { () => add(item) }>Terminar mi compra</button></Link>}
          </>
    );
};
