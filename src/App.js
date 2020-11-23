import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/itemListContainer.js';
import ItemDetailContainer from './components/itemDetailContainer.js';
import Cart from './components/cart.js';
import './App.css';
import  CartProvider  from './context/cartContext.js';



function App() {
  return (
    <CartProvider defaultcart = {[]}>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Switch>
        <Route exact path = "/">
          <ItemListContainer title = 'E-COMMERCE'/>                    
        </Route>
        <Route exact path = "/item/:id">
            <ItemDetailContainer/>
        </Route>
        <Route exact path = "/carrito">
            <Cart/>
        </Route>
      </Switch> 
    </div>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;

