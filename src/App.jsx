import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Parallax, ParallaxLayer } from '@react-spring/parallax'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Parallax pages={4}>
          <ParallaxLayer
            offset={0}
            style={{backgroundColor:'whitesmoke'}}
            factor={.3}
            speed={0}
          >
            <div>
              <h1>Harper Sullivan</h1>
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={.5} speed={1}>
            <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
            </div>
          </ParallaxLayer>
         
        </Parallax>
        
      </div>
      {/* <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
