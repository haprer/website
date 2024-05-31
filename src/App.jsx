import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';

import MenuBar from './components/MenuBar';
import Home from './components/Home';
import OceanRobo from './components/OceanRobo';

import './App.css';
import theme from './theme';

function App() {
  const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/ocean-robo', name: 'Ocean Robo', component: OceanRobo },
    // Add more routes here as needed
  ];

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <MenuBar routes={routes} />
        <main style={{ paddingTop: '10px', overflow: "hidden"}}> {/* Add padding-top to main content */}
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
