import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const UserCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultcart}) {

    const [cart, setCart] = useState(defaultcart);
    
    
    function add(item) {  
        if (item.find(p => p.nombre === item.nombre)) {   
       setCart([...cart, item]) 
        }else { console.log('El item ya fue comprado')}         
             
    };
    function remove (item) {
        setCart(item.filter(p => p.nombre !== item.nombre))
    }

    function clean() {
        setCart([]);
    };

    return <CartContext.Provider value = {{cart, add, clean, remove}}>
        {children}
    </CartContext.Provider>
}; 
