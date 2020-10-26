import React from 'react';
import CartWidget from './cartWidget.js';

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
        <h2 style = {styles1}>E-Commerce</h2> 
        <CartWidget/>             
      </nav>    
    );
};
