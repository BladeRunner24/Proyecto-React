import React from 'react';
import Item from "./item.js";

export default function ListaItems(props) {
  const empleados = props.listado;
  return empleados.map((item) => (
    <Item id={item.id} title={item.title} price={item.price} image={item.image} />
  ));
}
