import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mis Habilidades Personales</h1>
        <p>Aquí puedes encontrar una lista de mis habilidades:</p>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>Node.js</li>
          {/* Agrega tus habilidades adicionales aquí */}
        </ul>
      </header>
    </div>
  );
}

export default App;

