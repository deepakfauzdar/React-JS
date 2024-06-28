import './App.css'
import StartingCounter from './Components/StartingCounter'
import DynamicallyStartingCounter from './Components/DynamicallyStartingCounter'


function App() {  
  const value=2;
  
  return(
    <>
    <StartingCounter num={value} />
    <DynamicallyStartingCounter num={value} />
    </>
  )
}

export default App
