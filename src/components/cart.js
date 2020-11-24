import React,  {useContext} from 'react';
import  CartProvider from '../context/cartContext.js';

export default function Cart() {

    const {cart, remove, clean} = useContext(CartProvider);

   
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
