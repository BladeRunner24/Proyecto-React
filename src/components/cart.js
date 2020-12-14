import React from 'react';
import  {UserCartContext} from '../context/cartContext.js';

export default function Cart() {

    const {cart, clean, remove, totalCompra, sum} = UserCartContext();
    console.log(cart);
    

   
    return (
        <>
        <h2>Bienvenido al carrito!!!</h2>
        <div>
            {cart.map(item => {
                return <li><p>Usted compro {item.numero} bicicletas {item.id} precio x unidad {item.precio}</p><button onClick = {() => {remove(item)}}>Eliminar</button></li>;
            })}
            <button onClick={clean}>Vaciar el carrito </button>
            <button onClick = {totalCompra}>Ver total compra</button>
        </div>
        <p>Usted a comprado $: {sum}</p>
        </>        
    )

};
