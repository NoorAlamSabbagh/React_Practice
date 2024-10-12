import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  //Development ke time strictMod use kiya jata ha strictMode, StrictMode 2 times run karta ha functionality ko render karne pe
  // <StrictMode>
    <App />
  // {/* </StrictMode>, */}
)
