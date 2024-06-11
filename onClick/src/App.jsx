import { useState, useRef , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setcolor] = useState("olive")
  const myRef=useRef(null);
  
  useEffect( ()=>{
    myRef.current.addEventListener("click",()=>{
      setcolor("gray");
    })

  },[myRef])

  return (
    <>
    <div className='w-full h-screen bg-black'>

      <div className='w-full h-80 flex justify-center items-center'
      style={{backgroundColor: color}}>
        <input type="text" 
        placeholder='Enter 10 digit character only'
        maxLength={10}
        className='min-w-96'
        />
        
        <div>
        <button id="id01" className='bg-green-400'
        ref={myRef}
        // onClick={()=>{
        //   setcolor((prevColor)=>prevColor="gray")
        // }}
        >Click Button</button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
