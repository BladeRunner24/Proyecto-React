import React from 'react';
import ItemCount from "./itemCount.js";

export default function ItemDetail (props) {

    
    return (
        <>
          <div>
            <h3>{props.ids}</h3>
            <p>{props.titulo}</p>
            <p>{props.descripcion}</p>
            <p>{props.precio}</p>             
          </div>
          <ItemCount title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/>
        </>
    
    );
};
