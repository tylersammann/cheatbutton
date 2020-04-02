import React from 'react';
import { db } from '../firebase';
import useHighScores from './useHighScores';

function useCount() {
  const [count, setLocalCount] = React.useState(0);
  const [highScores, addNewHighScore] = useHighScores();

  React.useEffect(() => {
    db.ref('count').on('value', (snapshot) => {
      const countVal = snapshot.val().value;
      setLocalCount(countVal);
      if (highScores.length === 0 || countVal > highScores[0].score) {
        addNewHighScore(countVal);
      }
    });
  }, [highScores, addNewHighScore]);

  function setCount(c) {
    db.ref('count').set({
      value: c
    }).then(() => {});
  }

  return [count, setCount];
}

export default useCount;
