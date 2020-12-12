import React, {useContext, useState} from 'react';

export const CartContext = React.createContext([]);

export const UserCartContext = () => useContext(CartContext);

export default function CartProvider({children, defaultcart}) {

    const [cart, setCart] = useState(defaultcart);
    
    
    
    function add(item) {  

        const prueba = (element) => element.id === item.id;
        let resultado = cart.findIndex(prueba)
        let total = cart[resultado]
        

       if(cart.findIndex(prueba) === -1 ){  
       setCart([...cart, item])                  
       }else { 
            function change(){
                total.numero = total.numero + item.numero;
            } 
            change(); 
       }     
    };
    
    function clean() {
        setCart([]);
    };

    return <CartContext.Provider value = {{cart, add, clean}}>
        {children}
    </CartContext.Provider>
};
