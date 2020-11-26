import React from 'react';
import  {UserCartContext} from '../context/cartContext.js';

export default function Cart() {

    const {cart, clean} = UserCartContext();
    console.log(cart);
    

   
    return (
        <>
        <h2>Bienvenido al carrito!!!</h2>
        <div>
            {cart.map(item => {
                return <p>Usted compro {item.numero} bicicletas {item.nombre}</p>;
            })}
            <button onClick={clean}>Vaciar el carrito </button>
            <button>Confirmar la compra</button>
        </div>
        </>        
    )

};
