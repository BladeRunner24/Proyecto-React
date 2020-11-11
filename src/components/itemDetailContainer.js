import React, {useEffect, useState} from 'react';
import ItemDetail from "./itemDetail.js";

export default function ItemDetailContainer (props) {

    const [ listadoProds, setListadoProds ] = useState([]);
    

  useEffect(() => {
    
    const list = new Promise((res, rej) => {
      setTimeout(() => {
        res([
          {
            id: '130b',
            price: 50000,  
            title: 'Mountain Bike Lince',
            description: 'Bicicleta de 6 cambios producida por Lince.',             
          },
          {
            id: '152a',
            price: 65000,
            title: 'Mountain Bike Tiger',
            description: 'Bicicleta de 8 cambios producida por Tiger. Producida integramente con fibra de carbono',             
          }
      ]);
      }, 3000);
    });
    list.then(listado => {
      console.log(listado)
      setListadoProds(listado.filter (l => l.id === '130b')); 
      console.log(listadoProds)
    }, err => {
       console.log(null);
    }).catch (error => {
      console.log(`Se ha producido un error ${error}`);
    })
  }, []);

  

    return  (

        <ItemDetail ids = {listadoProds.id} titulo = {listadoProds.title} descripcion = {listadoProds.description} precio = {listadoProds.price}/>
    )
};
