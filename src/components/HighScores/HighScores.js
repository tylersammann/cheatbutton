import React from 'react';
import './index.css'
import useHighScores from '../../hooks/useHighScores';

function HighScores() {
  const [highScores] = useHighScores();

  return (
    <div>
      <h2>Top Ten High Scores</h2>
      <ol>
        {highScores.slice(0, 10).map(score =>
          <li key={score.score}>{score.score} - ({score.created})</li>
        )}
      </ol>
    </div>
  );
}

export default HighScores;
