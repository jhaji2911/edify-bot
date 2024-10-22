// src/App.tsx
import { useNavigate } from 'react-router-dom';
import bgVideo from '../../assets/bg-video.mp4'
import bluebenzLogo from '../../assets/bluebenzLogo.png'
import './style.css'

function Home() {

const navigate = useNavigate();

const redirectToChat = () => {
    navigate('/chat')
}
  return (
    <>
      {/* <div>
        <a href="https://edify-ai.com/" target="_blank">
          <img src={edifyLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      
      <div className="card">
        <p className="read-the-docs" style={{color: 'black'}}>
          World’s first AI – Powered Accelerated Insight Machine
        </p>
      </div>

      Add the button with glow effect
      <button onClick={redirectToChat} className="glow-button">Let's Go ➡️</button> */}

<section id="banner_sec1">
        <div className="bg-video-wrap">
            <video  className="thumb_Vid" src={bgVideo} preload="auto" loop muted autoPlay>
            </video>
            <section className="home-section">
                <div className="home-content">
                    <div className='center-content'>
                        <img src={bluebenzLogo} alt="Logo" />
                        <h1>World's first AI - Powered Accelerated Insight Machine.</h1>
                        <button className="go-btn" onClick={redirectToChat}>
                          <div>
                            <h4 className="gradient-text">Lets Go</h4>
                          </div>
                        </button>
                    </div>
                </div>
            </section>
        </div>
    </section>
    </>
  )
}

export default Home;
