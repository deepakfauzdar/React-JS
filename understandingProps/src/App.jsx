import HeroOne from './HeroOne.jsx'
import React from 'react'

function App() {

  const person_Details={
     name:"we",
     pet_name:"Deepu",
     id:501
  }
  const {name}=person_Details
  // const name=90;
  // const value="Deepak"

  const arr=[2,3,45,5]
  const [one]=arr;

  return (
    <>
    <HeroOne name="Deepak" val={name} arr={one}/>
    {/* <HeroOne name="Deepak" val={name} arr={one}/> */}
    </>
  )
}

export default App
