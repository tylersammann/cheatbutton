import React from 'react';
import { db } from '../firebase';

function useHighScores() {
  const [highScores, setHighScores] = React.useState([]);

  React.useEffect(() => {
    db.ref('scores').on('value', (snapshot) => {
      console.log(snapshot.val().value);
      setHighScores(snapshot.val().value);
    });
  }, []);

  function addNewHighScore(score) {
    const scoreObj = {
      score: score,
      created: new Date().toUTCString(),
    };

    db.ref('scores').set({
      value: [scoreObj].concat(highScores)
    }).then(() => {});
  }

  return [highScores, addNewHighScore];
}

export default useHighScores;
