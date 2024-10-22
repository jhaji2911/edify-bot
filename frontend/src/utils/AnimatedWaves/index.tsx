// AnimatedWaves.js
import './styles.css'; // Optional: For styling

const AnimatedWaves = () => {
  return (
    <div className="wave-container">
      <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#4A90E2"
          fillOpacity="1"
          d="M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224V320H0Z"
        >
          <animate
            attributeName="d"
            dur="8s"
            repeatCount="indefinite"
            values="
              M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224V320H0Z;
              M0,256L80,234.7C160,213,320,171,480,154.7C640,139,800,149,960,154.7C1120,160,1280,160,1360,176L1440,192V320H0Z;
              M0,192L80,181.3C160,171,320,149,480,138.7C640,128,800,128,960,144C1120,160,1280,192,1360,208L1440,224V320H0Z
            "
          />
        </path>
      </svg>
    </div>
  );
};

export default AnimatedWaves;