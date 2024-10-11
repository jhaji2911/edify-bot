// src/App.tsx
import { useNavigate } from 'react-router-dom';
import edifyLogo from '../../assets/Edify_Logo.svg'
import './style.css'

function Home() {

const navigate = useNavigate();

const redirectToChat = () => {
    navigate('/chat')
}
  return (
    <>
      <div>
        <a href="https://edify-ai.com/" target="_blank">
          <img src={edifyLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <div className="card">
        <p className="read-the-docs">
          World’s first AI – Powered Accelerated Insight Machine
        </p>
      </div>

      {/* Add the button with glow effect */}
      <button onClick={redirectToChat} className="glow-button">Let's Go ➡️</button>
    </>
  )
}

export default Home;
