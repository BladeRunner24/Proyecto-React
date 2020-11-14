import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';

const element = <FontAwesomeIcon icon={faShoppingCart} />

const styles2 = {
  backgroundColor: 'grey',
  border: 'solid black 2px', 
  boxSizing: 'content-box',
  padding: '4px',   
}

export default function CartWidget() {

    return (
      <NavLink  to = "/carrito" activeClassName = "" style = {styles2}>{element}</NavLink>        
    );
};
