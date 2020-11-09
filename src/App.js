import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/itemListContainer.js';
import ItemCount from './components/itemCount.js';
import ItemDetailContainer from './components/itemDetailContainer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
       <ItemListContainer title = 'E-COMMERCE'/>
       <ItemCount title = 'Bicicletas' accion = 'comprar' max =  {5} min = {1} amount = {1}/>
       <ItemDetailContainer/>
    </div>
  );
}

export default App;

