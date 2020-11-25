import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const UserCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultcart}) {

    const [cart, setCart] = useState(defaultcart);

    function add(item) {
        setCart([...cart, item])
    };

    function remove(itemid) {
        setCart(cart.filter(item => item.id !== itemid))
    };

    function clean() {
        setCart([]);
    }

    return <CartContext.Provider value = {{cart, add, remove, clean}}>
        {children}
    </CartContext.Provider>
} 
