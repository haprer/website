import './Home.css';
import '../Vars.css';
import theme from '../theme';


import { ThemeProvider } from '@mui/material/styles';
import { periwinkle, gunmetal, aliceWhite, lightGreen } from '../theme';
import { Grid, Box, Paper } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {List, ListItem, ListItemButton, ListItemAvatar, ListItemText, Avatar} from '@mui/material';
import { Link } from 'react-router-dom';
import PrimeCarousel from '../components/PrimeCarousel';


const hoverColor = 'rgba(0,0,0,0.3)'; 


function LinksList() { 
  return (
    <List sx={{ width: '100%', maxWidth: 360, minWidth: 300, color: aliceWhite, maxHeight: "auto", overflow: "hidden"}}>
          
    <ListItemButton component={Link} to="https://github.com/haprer" sx={{":hover": {backgroundColor:hoverColor}, color: aliceWhite}}>
      <ListItemAvatar>
        <Avatar>
          <GitHubIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Harper on Github" secondary="https://github.com/haprer"/>
    </ListItemButton>

    <ListItemButton component={Link} to="https://github.com/clifton4" sx={{":hover": {backgroundColor:hoverColor}}}>
    <ListItemAvatar>
        <Avatar>
          <GitHubIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Clifton on Github" secondary="https://github.com/clifton4"/>
    </ListItemButton>

    <ListItemButton component={Link} to="https://www.linkedin.com/in/clifton-sullivan-abb374291" sx={{":hover": {backgroundColor:hoverColor}}}>
    <ListItemAvatar>
        <Avatar>
          <LinkedInIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="Linked In" secondary="www.linkedin.com/in/clifton-sullivan-abb374291"/>
    </ListItemButton>


  </List>
  );
}

function Home() {

  const gridStyle = {display: "flex", flexGrow: "1", height: "100%"};

  return (
    <ThemeProvider theme={theme}>

      <div id="home" style={{ flex: '1', flexGrow: "1", width: '80vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flexGrow: "1"}}>

          <h1>Check out my profiles:</h1>

          {/* <Grid container spacing={2} style={{ flexGrow: 1}} sx={{ margin: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={8}>
              <h1>Place Holder for Carousel</h1>
              {PrimeCarousel()}
            </Grid>
            <Grid item xs={12} md={4}>
              {LinksList()}
            </Grid>
          </Grid> */}
          <Grid container spacing={2} style={{ flexGrow: 1, width: "80vw"}} sx={{ margin: '16px', justifyContent: 'center', alignItems: 'center' }}>
            <Grid item xs={12} md={8} style={gridStyle}>
              {/* {PrimeCarousel()} */}
              <h1>PlaceHolder</h1>
            </Grid>
            <Grid item xs={12} md={4} style={gridStyle}>
              {LinksList()}
            </Grid>
          </Grid>
        </div>
      </div>
    </ThemeProvider>
  );
}


export default Home
