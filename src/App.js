import React from 'react';
import {BrowserRouter, Switch, Route, Link, useParams} from 'react-router-dom';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/itemListContainer.js';
import ItemCount from './components/itemCount.js';
import ItemDetailContainer from './components/itemDetailContainer.js';
import './App.css';



function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <Switch>
        <Route exact path = "/">
          <ItemListContainer title = 'E-COMMERCE'/>
          <ItemCount title = 'Bicicletas' accion = 'comprar' max = {5} min = {1} amount = {1}/>          
        </Route>
        <Route exact path = "/otra-ruta/:id">
            <ItemDetailContainer/>
        </Route>
      </Switch> 
    </div>
    </BrowserRouter>
  );
}

export default App;

