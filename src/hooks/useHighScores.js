import React from 'react';

function useHighScores() {
  const [highScores, setHighScores] = React.useState([]);

  function addNewHighScore(score) {
    const scoreObj = {
      score: score,
      created: new Date().toUTCString(),
    };

    setHighScores([scoreObj].concat(highScores));
  }

  return [highScores, addNewHighScore];
}

export default useHighScores;
