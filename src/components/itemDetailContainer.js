import React, {useEffect, useState} from 'react';
import ItemDetail from "./itemDetail.js";
import {useParams} from 'react-router-dom';
import {getFirestore} from '../firebase';

export default function ItemDetailContainer (props) {

    const [ detalleProds, setDetalleProds ] = useState([]);
    const [ load, setLoad ] = useState(null);
    const {id} = useParams();

    
    
  useEffect(() => {
    setLoad(true);
    const db1 = getFirestore();
    const itemCollection1 = db1.collection("items1");
    const itemDoc = itemCollection1.where('id', '==', id);

    itemDoc.get().then((querySnapshot) => {
    if(querySnapshot.size === 0) {
    console.log('Sin resultados');
      };
      setDetalleProds(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))[0]
      ); 
          
       
      setLoad(false);
      });  

  },[id]);

   console.log(detalleProds)

    

  return (
        <ItemDetail ids = {detalleProds.id} titulo = {detalleProds.title} descripcion = {detalleProds.description} precio = {detalleProds.price}/>
    )
};
