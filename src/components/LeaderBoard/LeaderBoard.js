import React from 'react';
import './index.css'
import useHighScores from '../../hooks/useHighScores';

function LeaderBoard() {
  const [highScores,] = useHighScores();

  return (
    <div>
      <h2>Leader Board</h2>
      <ol>
        {highScores.map(score =>
          <li>{score.score} - ({score.created}}</li>
        )}
      </ol>
    </div>
  );
}

export default LeaderBoard;
