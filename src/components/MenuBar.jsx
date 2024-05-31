import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import { aliceWhite } from '../theme';

function MenuBar({ routes }) {
  return (
    <AppBar display="flex" position="static" sx={{ width: '100%'}}>
      <Toolbar>
      <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: aliceWhite,
              textDecoration: 'none',
            }}
          >
            Harper
          </Typography>
        <Box sx={{ display: 'flex' }}>
          {routes.map((route, index) => (
            <Button key={index} component={Link} to={route.path} color='primary' 
              sx={{ 
                mr: 2,
                color: aliceWhite,
                }}>
              {route.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
