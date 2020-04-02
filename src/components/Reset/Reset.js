import React from 'react';
import './index.css'

const COUNTDOWN_SECONDS = 20;

function Reset(props) {
  const { resetCount } = props;
  const [seconds, setSeconds] = React.useState(0);

  function tick() {
    const secondsLeft = new Date().getUTCSeconds() % COUNTDOWN_SECONDS;
    setSeconds(COUNTDOWN_SECONDS - secondsLeft);
    if (secondsLeft === 0) {
      resetCount();
    }
  }

  setInterval(() => tick(), 100);

  let resetClass = seconds === COUNTDOWN_SECONDS ? "reset" : "reset-hidden";

  return (
    <div>
      <span>seconds {seconds}</span>
      <div>
          <span className={resetClass}>RESET!</span>
      </div>
    </div>
  );
}

export default Reset;
