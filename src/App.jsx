import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Home from './components/Home';
import OceanRobo from './components/OceanRobo';

function App() {
  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ocean-robo', name: 'Ocean Robo', component: OceanRobo },
    // Add more routes here as needed
  ];

  return (
    <Router>
      <MenuBar routes={routes} />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={<route.component />} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
