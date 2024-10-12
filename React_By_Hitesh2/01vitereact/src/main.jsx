import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




// const anotherElement = (
//   <a href="https://google.com" target='_blank' rel='noreferrer'>Visit Google</a>
// )


// const reactElement = React.createElement(
//   "a",
//   {href: "https://google.com", target: "_blank"},
//   "Click me to visit Google"
// )

// ReactDOM.createRoot(document.getElementById('root')).render(
//   reactElement,
//   anotherElement
// )

//
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
