import React, {useEffect, useState} from 'react';
import ItemDetail from "./itemDetail.js";
import {useParams} from 'react-router-dom';

export default function ItemDetailContainer (props) {

    const [ detalleProds, setDetalleProds ] = useState([]);
    const {id} = useParams();
    

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
            description: 'Bicicleta de 8 cambios producida por Tiger y hecha enteramente con fibra de carbono',              
          }]
          );
      }, 3000);
    });
    list.then(listado => {
      setDetalleProds(listado.filter(l => l.id === id)[0]);      
       
    }, err => {
       console.log(null);
    }).catch (error => {
      console.log(`Se ha producido un error ${error}`);
    })
  }, [id]);

  
  

    return  (
        <ItemDetail ids = {detalleProds.id} titulo = {detalleProds.title} descripcion = {detalleProds.description} precio = {detalleProds.price}/>
    )
};
