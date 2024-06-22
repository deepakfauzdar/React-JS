import { useEffect, useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ThemeBtn from './Components/ThemeBtn'
import Card from './Components/Card'
import { ThemeProvider } from './Context/ThemeContext'

function App() {
 const [thememode,setThemeMode]=useState("light");
//true for light and false for dark

  // const lightMode=()=>{
  //   setThemeMode("light") 
  // }

  // const darkMode=()=>{
  //   setThemeMode("dark")
  //   console.log(thememode)
  // }
  const colorMode=(flag)=>{
    if(flag){
      setThemeMode("light");
    }
    else{
      setThemeMode("dark");
    }
  }

  useEffect( ()=>{
    const ThemeSelector=document.querySelector('html')
    ThemeSelector.classList.remove("light","dark");
    ThemeSelector.classList.add(thememode);
  },[thememode])


  return (
<ThemeProvider value={ {thememode,colorMode}}>
<div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      {/* themeUI */}
                      <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       {/* CardUI */}
                       <Card />
                    </div>
                </div>
  </div>
  </ThemeProvider>
  )
}

export default App
