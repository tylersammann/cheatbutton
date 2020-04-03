import React from 'react';
import './index.css'
import useCount from '../../hooks/useCount'

function CheatButton() {
  const [count, increaseCount] = useCount();

  return (
    <div className="cheat">
      <div>
        <span>Current count = {count}</span>
      </div>

      <button onClick={increaseCount}>INCREASE</button>
    </div>
  );
}

export default CheatButton;
