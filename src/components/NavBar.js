import React from 'react';
import ".././App.css";

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
    listStyleType: 'none',
    width: '30vw',
    float: 'right',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontSize: '14px',
    right: '4vw',
    top: '20%',    
};

export default function NavBar() {

    return (
    <>
      <nav style = {styles}>
          <h1 style = {styles1}>E-Commerce</h1>
          <ul style = {styles2}>              
             <li><a>Seccion 1</a></li>
             <li><a>Seccion 2</a></li>
             <li><a>Seccion 3</a></li> 
          </ul>
      </nav>
    </>
    );
};