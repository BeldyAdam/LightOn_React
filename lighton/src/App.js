import './App.css';
import React, { useContext } from 'react';
import Jatekter from './components/Jatekter.js';
import { KattContext } from './context/KattContext';

function App() {
  const {lista}=useContext(KattContext);
  return (
    <div className="App">
      <header className="App-header">
          <h1>Light On - React</h1>
      </header>
      <article>
        <Jatekter lista={lista}/>
      </article>
      <footer>Béldy Ádám</footer>
    </div>
  );
}

export default App;
