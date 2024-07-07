import './App.css'
import Create from './Components/Create'
import Navbar from './Components/Navbar'
import Read from './Components/Read'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Update from './Components/Update'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar />
     <Routes>
      <Route exact path='/' element={<Create />}/>   
      <Route exact path='/read' element={<Read/>}/>
      <Route exact path='/edit/:id' element={<Create/>}/>
     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
