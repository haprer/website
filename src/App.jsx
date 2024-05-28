import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import './Vars.css';



// react router that contains a MenuBar
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MenuBar from './MenuBar';
import Home from './Home';
import OceanRobo from './OceanRobo';

function App() {
  const [count, setCount] = useState(0);
  const darkPal = window.getComputedStyle(document.documentElement).getPropertyValue('--dark-pal').trim();
  const lightPal = window.getComputedStyle(document.documentElement).getPropertyValue('--light-pal').trim();
  const acc1Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent1-pal').trim();
  const acc2Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent2-pal').trim();
  const acc3Pal = window.getComputedStyle(document.documentElement).getPropertyValue('--accent3-pal').trim();

  return (
    <Router>
      <MenuBar />
        <Routes>      
            <Route path="/" element={<Home />} />
            <Route path="/oceanrobo" element={<OceanRobo />} />
        </Routes>
    </Router>
  );
}

export default App;
