


/** Prime React elements */
import { Menubar } from 'primereact/menubar';

/** My Pages */
import Home from './pages/Home.jsx';

/** React Imports */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/** CSS Files */
import './App.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/lara-dark-purple/theme.css';


const topBarItems = [
  {
      label: 'Home',
      icon: 'pi pi-home'
  },
  {
      label: 'Features',
      icon: 'pi pi-star'
  },
  {
      label: 'Projects',
      icon: 'pi pi-search',
      items: [
          {
              label: 'Components',
              icon: 'pi pi-bolt'
          },
          {
              label: 'Blocks',
              icon: 'pi pi-server'
          },
          {
              label: 'UI Kit',
              icon: 'pi pi-pencil'
          },
          {
              label: 'Templates',
              icon: 'pi pi-palette',
              items: [
                  {
                      label: 'Apollo',
                      icon: 'pi pi-palette'
                  },
                  {
                      label: 'Ultima',
                      icon: 'pi pi-palette'
                  }
              ]
          }
      ]
  },
  {
      label: 'Contact',
      icon: 'pi pi-envelope'
  }
];


const start = <h1>Harper :)</h1>;

function App() {
  
  return (

    <div className='top-level'>
        <Router>
            <Menubar id="topBar" model={topBarItems} start={start} style={{width: "100vw"}} />
            <div className='main-window'>
                <Routes>
                    <Route path = '/' Component={Home} />
                </Routes>
            </div>
        </Router>

    </div>

  )

}

export default App
