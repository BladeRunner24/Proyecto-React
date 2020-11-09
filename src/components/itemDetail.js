import React from 'react';
import ItemCount from "./itemCount.js";

export default function ItemDetail (props) {

    const listprod = props.listadoproductos;
    
    return listprod.map((prod) => (
        <>
          <div>
            <h3> {prod.price} = {precio.props}</h3>
            <h4> {prod.title} = {titulo.props}</h4>
            <p> {prod.description} = {descripcion.props}</p>             
          </div>
          <ItemCount/>
        </>
    )
    );
};