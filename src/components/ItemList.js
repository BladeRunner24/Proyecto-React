import React from 'react';
import Item from "./item.js";

export default function ListaItems(props) {
  const empleados = props.listado;
  return empleados.map((item) => (
    <Item id={item.id} titulo={item.title} precio={item.price} imagen={item.image} />
  ));
}
