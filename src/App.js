import React from 'react';
import { createBoard } from './lib/initializeBoard';
import Chess from './containers/Chess';
import './App.css';

function App() {

  const gameboard = createBoard();

  return (
    <div className="App">
      <Chess board={ gameboard }/>
    </div>
  );
}

export default App;
