import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const UserCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultcart}) {

    const [cart, setCart] = useState(defaultcart);
    const [sum, setSum] = useState(0);
    
    
    
    
    function add(item) {  

        const prueba = (element) => element.id === item.id;
        let resultado = cart.findIndex(prueba)
        let total = cart[resultado]
        

       if(cart.findIndex(prueba) === -1 ){  
       setCart([...cart, item]);                      
       }else { 
            function change(){
                total.numero = total.numero + item.numero;
            }
            change(); 
       }     
    };

    function remove (item) {
        if (cart.length === 0){
            setSum(0)
        }else if(cart.length === 1) {
            setCart(cart.filter(p => p.id !== item.id));
            const e = cart.length - 1;
            const suma3 = cart[e].precio * cart[e].numero;  
            setSum(suma3);
            console.log(suma3);
        }else {
            setCart(cart.filter(p => p.id !== item.id));
            const suma1 = cart.reduce((a, b) => a.numero * a.precio + b.numero * b.precio);
            setSum(suma1);
             console.log(cart);
        };
    };
    
    function clean() {
        setCart([]);
        setSum(0)
    };

    function totalCompra() {
        if(cart.length === 0) {
            setSum(0)
        }else if(cart.length === 1) {
        const l = cart.length - 1;
        const suma2 = cart[l].precio * cart[l].numero;  
        setSum(suma2);
        console.log(suma2);        
       }else {
       const suma = cart.reduce((a, b) => a.numero * a.precio + b.numero * b.precio);
       setSum(suma);
       };                
    };
    

    return <CartContext.Provider value = {{cart, add, clean, remove, totalCompra, sum}}>
        {children}
    </CartContext.Provider>
};
