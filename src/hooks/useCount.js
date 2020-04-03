import React from 'react';
import { db } from '../firebase';

function useCount() {
  const [count, setLocalCount] = React.useState(0);

  React.useEffect(() => {
    db.ref('count').on('value', (snapshot) => {
      const countVal = snapshot.val().value;
      setLocalCount(countVal);
    });
  }, []);

  function increaseCount() {
    db.ref('count').set({
      value: count + 1
    }).then(() => {});
  }

  return [count, increaseCount];
}

export default useCount;
