import React from 'react';
import './index.css'
import useCount from '../../hooks/useCount'

function CheatButton() {
  const [count, increaseCount] = useCount();

  return (
    <div className="cheat">
      <div>
        <span><button onClick={increaseCount}>INCREASE</button> count = {count}</span>
      </div>
    </div>
  );
}

export default CheatButton;
