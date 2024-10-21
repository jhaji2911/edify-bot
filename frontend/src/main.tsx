import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import AnimatedWaves from './utils/AnimatedWaves/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    {/* <AnimatedWaves /> */}
  </StrictMode>,
)
