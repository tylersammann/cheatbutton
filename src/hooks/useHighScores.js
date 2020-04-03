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

  return [highScores];
}

export default useHighScores;
