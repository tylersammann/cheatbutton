import React from 'react';
import { db } from '../firebase';

function useTimeSinceReset() {
  const [mins, setMins] = React.useState(0);
  const [secs, setSecs] = React.useState(0);

  function tick() {
    db.ref('lastResetSeconds').once('value', (snapshot) => {
      const lastResetSeconds = snapshot.val().value;
      const currSeconds = Math.floor(new Date().getTime() / 1000);
      const secondsDiff = currSeconds - lastResetSeconds;

      const minutes = Math.floor(secondsDiff / 60);
      const seconds = secondsDiff % 60;

      setMins(minutes);
      setSecs(seconds);
    });
  }

  setInterval(() => tick(), 1000);

  return [mins, secs];
}

export default useTimeSinceReset;
