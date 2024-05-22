import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from "./Components/demo"

function App() {
  let obj={
    name:"Deepak",
    age:67
  }
  const {name,age}=obj;
  const myArr=["Great Engineer",90,800];
  let [pet_name,val1,val2]=myArr;
  return (
   <>
   <Demo username="Deepak Fauzdar"  random={name}/>
   <br />
   <Demo username="Pooja Fauzdar" h1Text="HUBDI" name={pet_name}/>
   </>
  )
}

export default App
