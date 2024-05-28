import { useState } from 'react';
import './Home.css';
import './Vars.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function Home() {
  const [count, setCount] = useState(0)
  const darkPal = window.getComputedStyle(document.documentElement).getPropertyValue('--dark-pal').trim();
  const lightPal = window.getComputedStyle(document.documentElement).getPropertyValue('--light-pal').trim();
  const acc1Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent1-pal').trim();
  const acc2Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent2-pal').trim();
  const acc3Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent3-pal').trim();


  return (

    //basic react component that displays a welcome message
    <Parallax pages={2} className="parallax">
      <ParallaxLayer
        offset={0}
        factor={.1}
        speed={0}
      >
        <div>
          <h1>Harper Sullivan</h1>
        </div>
      </ParallaxLayer>
      <ParallaxLayer offset={.5} speed={1} className="parallaxLayer">
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

    // <Parallax pages={2} className="parallax">
    //   <ParallaxLayer
    //     offset={0}
    //     factor={.1}
    //     speed={0}
    //   >
    //     <div>
    //       <h1>Harper Sullivan</h1>
    //     </div>
    //   </ParallaxLayer>
    //   <ParallaxLayer offset={.5} speed={1} className="parallaxLayer">
    //     <div className="container">
    //       <h1>Check out my profiles:</h1>
    //       <div id="links">
    //         <a href="https://github.com/haprer">Harper on Github</a>
    //         <br />
    //         <a href="https://github.com/clifton4">Clifton on Github (an older account)</a>
    //       </div>    
    //     </div>  
    //   </ParallaxLayer>
      
    // </Parallax>
  )
}

export default Home
