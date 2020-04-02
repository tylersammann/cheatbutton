import React from 'react';
import './index.css'

function CheatButton(props) {
  const { count, increaseCount } = props;

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
