import React from 'react';
import './App.css';
import NavBar  from './components/Nav';
import Hero from './components/Hero';
import Card from './components/Card';



function App() {
  return (
    <div className="App">
      <div>
      <NavBar/>
      </div>
      <div>
        <Hero/>
      </div>
      <div>
        <Card/>
      </div>
    </div>


  );
}

export default App;
