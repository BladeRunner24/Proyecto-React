import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const UserCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultcart}) {

    const [cart, setCart] = useState(defaultcart);

    function add(item) {
        setCart([...cart, item])
    };

    function clean() {
        setCart([]);
    };

    return <CartContext.Provider value = {{cart, add, clean}}>
        {children}
    </CartContext.Provider>
};
