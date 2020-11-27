import React from 'react';
import  {UserCartContext} from '../context/cartContext.js';

export default function Cart() {

    const {cart, clean, remove} = UserCartContext();
    console.log(cart);
    

   
    return (
        <>
        <h2>Bienvenido al carrito!!!</h2>
        <div>
            {cart.map(item => {
                return <li><p>Usted compro {item.numero} bicicletas {item.nombre}</p><button onClick={remove}>X</button></li>;
            })}
            <button onClick={clean}>Vaciar el carrito </button>
            <button>Confirmar la compra</button>
        </div>
        </>        
    )

};
