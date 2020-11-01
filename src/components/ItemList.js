import React, {useEffect} from 'react';

const element1 = ['130b', 'Mountain Bike Thunder', 45000, 'https://www.fravega.com/p/bicicleta-mountain-bike-rodado-29-futura-lynce-negra-560425?utm_content=fravega_fit_1000483_560425_futura&gclid=Cj0KCQjwufn8BRCwARIsAKzP696nmrfb2PdwBG7ZcD1kzYjoD0cREMiMz3njhJ3ia5juIyFMcUErHdAaAgLDEALw_wcB&gclsrc=aw.ds']
const nodes =  element1.map(item => <p>{item}</p>)   
 
const producto = new Promise((res, rej) => {
    
    res(nodes)
   
});

export default function Itemlist() {

    useEffect(() => {
      producto.then(resultado => {
        setTimeout(() => {
            resultado
        }, 2000);
      }).catch(err => {
          return 'Error al procesar el array'
      })
    }, []);


return (
    <div>{resultado}</div>            
);
};