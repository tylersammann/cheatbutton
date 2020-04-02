import React from 'react';
import './index.css'
import useCount from '../../hooks/useCount'


function CheatButton() {
  const [count, setCount] = useCount();

  return (
    <div className="cheat">
      <div>
        <span>Current count = {count}</span>
      </div>

      <button onClick={() => setCount(count + 1)}>INCREASE</button>
    </div>
  );
}

export default CheatButton;
