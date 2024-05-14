import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
function MyApp(){
  return(
    <h2>Returning myApp() method 90</h2>
  )
}

const anotherElement= <a href="https//www.google.com">Click here to visit Facebook</a>

const reactElement=React.createElement(
  'a',{
    href:'https//www.google.com',
    taget:'_blank'
  },
  "Kindly click here to visit Google webpage"
)

const customReactElement=React.createElement(
  "p",{},
  "Lorem ipsum is great"
)

ReactDOM.createRoot(document.getElementById('root')).render(
    customReactElement
)
