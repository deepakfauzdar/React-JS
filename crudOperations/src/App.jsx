import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Create from './Components/Create'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './Components/Read'
import Update from './Components/Update'

function App() {

  return (
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Create />}></Route>   
    <Route exact path='/read' element={<Read />}></Route>
    <Route exact path='/edit' element={<Update />}></Route> 
    </Routes>
    </BrowserRouter>
  )
}

export default App
