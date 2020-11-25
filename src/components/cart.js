import React from 'react';
import  {UserCartContext} from '../context/cartContext.js';

export default function Cart() {

    const {cart, remove, clean} = UserCartContext();

   
    return (
        <>
        <h2>Bienvenido al carrito!!!</h2>
        <div>
            {cart.map(item => {
                return <li>{item}</li>;
            })};
            <button onClick={clean}>Vaciar el carrito</button>
            <button onClick={remove}>Vaciar el carrito</button>
        </div>
        </>        
    )

};
