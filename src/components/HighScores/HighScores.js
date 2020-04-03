import React from 'react';
import './index.css'
import useHighScores from '../../hooks/useHighScores';

function HighScores() {
  const [highScores] = useHighScores();

  return (
    <div>
      <h2>Top Ten High Scores</h2>
      <ol>
        {highScores.map((score, idx) =>
          <li key={idx}>{score.score} - ({score.created})</li>
        )}
      </ol>
    </div>
  );
}

export default HighScores;
