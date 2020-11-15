import React from 'react';
import CartWidget from './cartWidget.js';
import { NavLink } from 'react-router-dom';

const styles = {
    backgroundColor: 'blue',
    width: '100%',
    height: '10vh',
    display: 'inline',    
};
const styles1 = {
    fontSize: '20px',
    width: '50vw',
    float: 'left', 
};

export default function NavBar() {

    return (
      <nav style = {styles}>
        <NavLink to = "/" activeClassName = ""><h2 style = {styles1}>E-Commerce</h2></NavLink> 
        <CartWidget/>             
      </nav>    
    );
};
