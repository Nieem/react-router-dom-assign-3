import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bpp from './App.jsx'
import Navbar from './componants/shared/navbar.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar />
  </StrictMode>,
)
