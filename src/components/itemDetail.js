import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./itemCount.js";

export default function ItemDetail (props) {

  const [onLine, setOnLine] = useState(true);
  const [guardar, setGuardar] = useState();
  const titulo = 'bicicletas';

  function onAdd(number){
    setOnLine(false);
    setGuardar(number);
    alert(`Se van a agregar ${number} ${titulo} a su carrito`);
    };

  console.log(onLine);

    return (
        <>
          <div>
            <h3>{props.ids}</h3>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>             
          </div>
          <ItemCount apagado = {onAdd} disabled = {onLine === false}  title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/>
          <Link to = "/carrito"><button disabled = {onLine === true}>Terminar mi compra</button></Link>
        </>
    );
};
