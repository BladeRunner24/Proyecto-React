import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const element = <FontAwesomeIcon icon={faShoppingCart} />

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
const styles2 = {
  backgroundColor: 'grey',
  border: 'solid black 2px', 
  boxSizing: 'content-box',
  padding: '4px',   
}


export default function NavBar() {

    return (
      <nav style = {styles}>
        <h2 style = {styles1}>E-Commerce</h2> 
        <a style = {styles2}>{element}</a>     
      </nav>    
    );
};
