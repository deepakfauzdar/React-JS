import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen'
    style={{backgroundColor: color}}>
     <div className='fixed w-full bottom-12 m-4 flex flex-wrap justify-center'>
      <div className='flex flex-wrap justify-center bg-white p-3 rounded-lg'>
        <button onClick={()=>setColor("red")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"red"}}>Red</button>
         <button onClick={()=>setColor("green")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"green"}}>Green</button>
         <button onClick={()=>setColor("blue")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"blue"}}>Blue</button>
         <button onClick={()=>setColor("orange")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"orange"}}>Orange</button>
          <button onClick={()=>setColor("black")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"black"}}>Black</button>
          <button onClick={()=>setColor("olive")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"Olive"}}>Olive</button>
          <button onClick={()=>setColor("purple")} className='text-white rounded-full p-2 m-2'
        style={{backgroundColor:"purple"}}>Purple</button>    
      </div>
     </div>
    </div>
  )
}

export default App
