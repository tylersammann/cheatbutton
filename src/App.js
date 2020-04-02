import React from 'react';
import CheatButton from './components/CheatButton/CheatButton'
import Reset from './components/Reset/Reset'
import LeaderBoard from './components/LeaderBoard/LeaderBoard'

import './App.css';

function App() {
  return (
    <div className="App">

      <div>
        <h1>Welcome to <b>Cheat Button</b>!</h1>
        <p>Help get the count as high as you can before the reset! All users are collaborating to beat the <b>high score</b></p>
        <p>Don't cheat, maybe.</p>
      </div>

      <Reset />

      <CheatButton />

      <LeaderBoard />
    </div>
  );
}

export default App;
