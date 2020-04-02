import React from 'react';

function useCount() {
  const [count, setCount] = React.useState(0);

  return [count, setCount];
}

export default useCount;
