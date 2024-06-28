import React from 'react'
import useCounter from '../CustomHook/useCounter';

function DynamicallyStartingCounter({num}) {
  const {count,decrement}=useCounter(num);

  return(
    <>
    <h2>{count}</h2>
    <button onClick={decrement}>DecreaseCount</button>
    </>
  )
}

export default DynamicallyStartingCounter