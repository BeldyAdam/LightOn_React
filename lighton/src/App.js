import './App.css';
import React, { useState } from 'react';
import Jatekter from './components/Jatekter.js';

function App() {
  const [lista, setLista]=useState([false, false, false, false, false, false, false, false, false]);
  function katt(adat){
    const slista=[...lista]
    if(slista[adat]==true){
      slista[adat]=false
    }else{
      slista[adat]=true
    }
    setLista([...slista])
    console.log(lista)
  }
  return (
    <div className="App">
      <header className="App-header">
          Light On - React
      </header>
      <article>
        <Jatekter lista={lista} katt={katt}/>
      </article>
      <footer>Béldy Ádám</footer>
    </div>
  );
}

export default App;
