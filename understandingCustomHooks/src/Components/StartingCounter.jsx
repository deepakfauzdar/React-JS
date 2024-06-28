import React from 'react';
import useCounter from '../CustomHook/useCounter';

function StartingCounter({num}) {
  const {count,increment}=useCounter(num);

  return(
    <>
    <h2>{count}</h2>
    <button onClick={increment}>IncreaseCount</button>
    </>
  )

}

export default StartingCounter