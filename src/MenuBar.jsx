// src/MenuBar.js
import React from 'react';
import { Link } from 'react-router-dom';

import './MenuBar.css';
import './Vars.css';

const MenuBar = () => {
  return (
    <nav className="menu-bar">
      <ul className="menu">
      <li className="menu-item"><Link to="/">Home</Link></li>
        <li className="menu-item"><Link to="/oceanrobo">OceanRobo</Link></li>

      </ul>
    </nav>
  );
};

export default MenuBar;