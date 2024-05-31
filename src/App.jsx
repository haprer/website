import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
import Home from './pages/Home';
import OceanRobo from './pages/OceanRobo';

import './App.css';
import theme from './theme';

function App() {
  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ocean-robo', name: 'Ocean Robotics', component: OceanRobo },
    { path: '/infinity', name: 'Infinity', component: () => <div>Infinity</div>}
    // Add more routes here as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuBar routes={routes} />
        <main style={{overflow: "hidden"}}> {/* Add padding-top to main content */}
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={<route.component />} />
            ))}
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
