import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import ItemCount from "./itemCount.js";

export default function ItemDetail (props) {

  const [onLine, setOnLine] = useState(true);

  function onAdd(){
    setOnLine(false)
  };
    return (
        <>
          <div>
            <h3>{props.ids}</h3>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>             
          </div>
          <ItemCount  apagado = {onAdd} disabled = {onLine === false} title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/>
          <Link to = "/carrito"><button disabled = {onLine === true}>Terminar mi compra</button></Link>
        </>
    );
};
