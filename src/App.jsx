


/** Prime React elements */
import { Menubar } from 'primereact/menubar';

/** My Pages */
import Home from './pages/Home.jsx';
import Mantaray from './pages/Mantaray.jsx';

/** React Imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** CSS Files */
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css';


const topBarItems = [
  {
      label: 'Home',
      icon: 'pi pi-home',
      url: '/'
  },
  {
      label: 'Work Experience',
      icon: 'pi pi-briefcase',
      items: [
            {
                label: 'Mantaray',
                icon: 'pi pi-briefcase',
                url: '/mantaray'
            },
            {
                label: 'Orion ECI.',
                icon: 'pi pi-briefcase',
                url: 'https://orioneci.com/infinity-software/'
            },
      ]
  },
  {
      label: 'Projects',
      icon: 'pi pi-hammer',
      items: [
          {
              label: 'State.io Remake',
              icon: 'pi pi-bolt',
              url: 'https://github.com/haprer/stateioremake'
          },
          {
              label: 'This Website',
              icon: 'pi pi-server',
              url: 'https://github.com/haprer/website'
          },
          {
            label: 'Kingdoms.io',
            icon: 'pi pi-star',
            url: 'https://github.com/haprer/io-kingdoms'
          },
          {
              label: 'Chess Game',
              icon: 'pi pi-crown',
              url: 'https://github.com/clifton4/ChessGame'
          },
      ]
  },
];


const start = <h1>Harper 😄</h1>;

function App() {
  
  return (

    <div className='top-level'>
        <Router>
            <Menubar id="topBar" model={topBarItems} start={start} style={{width: "100vw"}} />
            <div className='main-window'>
                <Routes>
                    <Route path = '/' Component={Home} />
                    <Route path = '/mantaray' Component={Mantaray} />
                </Routes>
            </div>
        </Router>

    </div>

  )

}

export default App
