import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

function MenuBar({ routes }) {
  return (
    <AppBar position="static">
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
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
        <Box sx={{ display: 'flex' }}>
          {routes.map((route, index) => (
            <Button key={index} component={Link} to={route.path} color="inherit" sx={{ mr: 2 }}>
              {route.name}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
