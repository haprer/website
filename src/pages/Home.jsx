import { useState } from 'react';
import './Home.css';
import '../Vars.css';

import { periwinkle, gunmetal, aliceWhite, lightGreen } from '../theme';
import { colors } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';


function Home() {

  return (
    <div id="home">
      
      <h1>Check out my profiles:</h1>

      <List sx={{ width: '100%', maxWidth: 360, bgcolor: gunmetal }}>
        
        <ListItemButton component={Link} to="https://github.com/haprer">
          <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Harper on Github" secondary="https://github.com/haprer"/>
        </ListItemButton>

        <ListItemButton component={Link} to="https://github.com/clifton4">
        <ListItemAvatar>
            <Avatar>
              <GitHubIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Clifton on Github" secondary="https://github.com/clifton4"/>
        </ListItemButton>

        <ListItemButton component={Link} to="https://www.linkedin.com/in/clifton-sullivan-abb374291">
        <ListItemAvatar>
            <Avatar>
              <LinkedInIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="Linked In" secondary="www.linkedin.com/in/clifton-sullivan-abb374291

"/>
        </ListItemButton>


      </List>
    </div>
  );
}


export default Home
