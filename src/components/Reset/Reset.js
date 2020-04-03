import React from 'react';
import './index.css'
import useTimeSinceReset from '../../hooks/useTimeSinceReset';

function Reset() {
  const [minsSinceReset, secsSinceReset] = useTimeSinceReset();

  let resetClass = (minsSinceReset === 0 && secsSinceReset > 45) || (minsSinceReset > 0) ? "reset" : "reset-hidden";
  const mins = (minsSinceReset < 10) ? "0" + minsSinceReset: minsSinceReset;
  const secs = (secsSinceReset < 10) ? "0" + secsSinceReset : secsSinceReset;

  return (
    <div>
      <span>Count gets reset every minute(ish)!</span>
      <div>
        <span>Time since the last reset: {mins}:{secs}</span>
      </div>
      <div>
          <span className={resetClass}>HURRY UP! Reset coming soon</span>
      </div>
    </div>
  );
}

export default Reset;
