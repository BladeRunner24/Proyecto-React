import React, {useEffect, useState} from 'react';
import ListaItems from './ItemList.js';
import {getFirestore} from '../firebase';

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

export default function ItemListContainer (props) {

const [ listadoProds, setListadoProds ] = useState( [ ] );
const [ loading, setLoading ] = useState(null);
  
  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("items");

    itemCollection.get().then((querySnapshot) => {
      if(querySnapshot.size === 0) {
        console.log('Sin resultados');
      };
      setListadoProds(
        querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data()}))
      );
      setLoading(false);
      });  

  }, []);


   
    return (
      <div style = {styles}>
          <h1 style = {styles1}>BIENVENIDO A MI {props.title}!</h1>
          <ListaItems listado = {listadoProds}/>           
      </div>
    );
};
