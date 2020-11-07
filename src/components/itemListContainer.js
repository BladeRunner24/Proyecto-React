import React, {useEffect, useState} from 'react';
import ListaItems from './ItemList.js'

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

export default function ItemListContainer (props) {

  const [ listadoProds, setListadoProds ] = useState( [ ] );

  useEffect(() => {
    
    const list = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: '130b',
            title: 'Mountain Bike Lince',
            price: 50000,
            image: './bicicletas/bicicleta_lince.webp'  
          },
          {
            id: '152a',
            title: 'Mountain Bike Tiger',
            price: 65000,
            image: './bicicletas/bicicleta_tiger.webp'  
          }
      ]);
      }, 2000);
    });
    list.then(listado => {
      setListadoProds(listado); 
    }, err => {
       console.log(null);
    }).catch (error => {
      console.log(`Se ha producido un error ${error}`);
    })
  }, []);

   
    return (
      <div style = {styles}>
          <h1 style = {styles1}>BIENVENIDO A MI {props.title}!</h1>
          <div style = {styles2}><ListaItems listado = {listadoProds}/></div>           
      </div>
    );
};
