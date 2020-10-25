import React from 'react';

const styles = {
    marginLeft: '5vw',
    marginRight: '5vw',
    height: '80vh',
    backgroundColor: 'Red',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',    
}

const styles1 = {
    fontSize: '24px', 
}

const styles2 = {
    height: '10vh',
    width: '80%',
    marginLeft: '10%',
    marginRight: '10%',
    border: 'solid black 2px',
    backgroundColor: 'turquoise',
}

export default function ItemListContainer() {

    return (
      <div style = {styles}>
          <h1 style = {styles1}>BIENVENIDO A MI E-COMMERCE!</h1>
          <div style = {styles2}></div>
          <div style = {styles2}></div>
          <div style = {styles2}></div>
      </div>
    );
};