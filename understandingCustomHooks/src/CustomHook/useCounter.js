import React, { useState } from 'react'

function useCounter(num) {
    const [count,setCount]=useState(0);
    
    function increment(){
        setCount(count+num);
    }    
    function decrement(){
        setCount(count-num);
    }

return {count,increment,decrement};
}

export default useCounter;
