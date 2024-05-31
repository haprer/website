import { useState } from 'react';
import './Home.css';
import '../Vars.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import { periwinkle, gunmetal, aliceWhite, lightGreen } from '../theme';
import { colors } from '@mui/material';


function Home() {
  const [count, setCount] = useState(0)



  return (

    <Parallax pages={2} style={parallaxStyles}>
    <ParallaxLayer
      offset={0}
      factor={0.1}
      speed={0}
      style={parallaxLayerStyles}
    >
      <div>
        <h1>Sullivan</h1>
      </div>
    </ParallaxLayer>
    <ParallaxLayer
      offset={0.5}
      speed={1}
      style={parallaxLayerStyles}
    >
      <div className="container">
        <h1>Check out my profiles:</h1>
        <div id="links">
          <a href="https://github.com/haprer">Harper on Github</a>
          <br />
          <a href="https://github.com/clifton4">Clifton on Github (an older account)</a>
        </div>
      </div>
    </ParallaxLayer>
  </Parallax>
  );
}

const parallaxStyles = {
  height: '100vh',
  width: '100vw',
  overflowY: 'scroll',
  scrollbarWidth: 'none', /* For Firefox */
  msOverflowStyle: 'none',  /* For Internet Explorer and Edge */
  backgroundColor: periwinkle,
  color: gunmetal
};

const parallaxLayerStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

// Hide scrollbar for Webkit-based browsers (Chrome, Safari, etc.)
const style = document.createElement('style');
style.textContent = `
  ::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;
document.head.append(style);



export default Home
