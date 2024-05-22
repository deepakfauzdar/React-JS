import { useState } from 'react'

function App() {
const [color,setColor]=useState("olive");

  return (
 <div className='w-full h-screen flex justify-center'
 style={{backgroundColor:color}}
 >
  <div className='fixed bottom-12 m-4 flex flex-wrap justify-center'>
   <div className='flex flex-wrap justify-center bg-black px-3 py-2 rounded-2xl'>
    <button  onClick={()=>setColor("red")} className='bg-red-600 rounded-full p-2 m-2 text-white'>Red</button>
    <button onClick={()=>setColor("green")}  className='bg-green-600 rounded-full p-2 m-2 text-white'>Green</button>
    <button className=' rounded-full p-2 m-2 text-white'
    style={{backgroundColor:'blue'}}
    >Blue</button>
    <button className='bg-orange-600 rounded-full p-2 m-2 text-white'>Orange</button>
   </div>
  </div>
  </div>
  )

}

export default App
