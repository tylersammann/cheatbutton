import React from 'react';
import { db } from '../firebase';

function useHighScores() {
  const [highScores, setHighScores] = React.useState([]);

  React.useEffect(() => {
    db.ref('scores').on('value', (snapshot) => {
      setHighScores(snapshot.val().value);
    });
  }, []);

  return [highScores];
}

export default useHighScores;
