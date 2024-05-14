import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter=10;

  let [counter,setCounter]=useState(5);
  //counter=counter+1;

  function increaseCount(){
    counter=counter+1;
    if(counter<=20){
      setCounter(counter);
    }else{
      document.querySelector("#addCount").innerText="You Can't increase beyound 20";
    }
  }

  function decreaseCount(){
    counter=counter-1;
    if(counter>=0){
      setCounter(counter);
    }else{
      document.querySelector("#lowerCount").innerText="You Can't decrease lower than 0";
    }
  }
  return(
    <>
     <h2>Understanding React-Hooks through a mini Project {counter}</h2>
     <h3>Counter is {counter}</h3>
     <button id="addCount" onClick={increaseCount}>Increase Count- {counter}</button>
     <br />
     <button id="lowerCount" onClick={decreaseCount}>Decrease Count-{counter}</button>

     <p>counter value is injected {counter}</p>
     <footer>Counter is increasing {counter}</footer>
    </>
  )
}

export default App
