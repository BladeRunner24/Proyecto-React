import React, {useState} from 'react';
import  {UserCartContext} from '../context/cartContext.js';
import {getFirestore} from '../firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { Link } from 'react-router-dom';


export default function Cart(props) {

    const {cart, clean, remove, totalCompra, sum} = UserCartContext();
    const [nombreCliente, setNombrecliente] = useState();
    const [telefonoCliente, setTelefonocliente] = useState();
    const [mailCliente, setMailcliente] = useState();
    const [confirmacion, setConfirmacion] = useState();
    
    
    
    
    

    async function createOrder() {
        const ordencompra = {
            cliente: {nombre: nombreCliente, telefono: telefonoCliente, mail:mailCliente},
            items: cart.map(c => (
                {id: c.id, cantidad: c.numero, precio: c.precio}                
                ),), 
            fecha: firebase.firestore.FieldValue.serverTimestamp(),
            total: sum,
             
        };
        const db2 = getFirestore();
        const ordenes = db2.collection("orders");

        try {
        
        const final = await ordenes.add(ordencompra)
        setConfirmacion(final.id);

    }catch (err) {
        console.log('Error al crear la orden', err);
    }

    };   
        

   
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
        <div>
        <h2>Complete sus datos para terminar la compra</h2>
        <input type = 'text' placeholder = 'Nombre y apellido' onChange = { (event) => setNombrecliente(event.target.value)}/>
        <input type = 'text' placeholder = 'Telefono' onChange = { (event) => setTelefonocliente(event.target.value)}/>
        <input type = 'text' placeholder = 'E-mail' onChange = { (event) => setMailcliente(event.target.value)}/>
        </div>
        <div>
        <h2>Termine su compra</h2>
        <Link to = {`/final`}><button onClick = {createOrder}>Checkout</button></Link>  
        </div>
        
        </>        
    )

};
