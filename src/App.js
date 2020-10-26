import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/itemListContainer.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
       <ItemListContainer title = 'E-COMMERCE'/>
    </div>
  );
}

export default App;
