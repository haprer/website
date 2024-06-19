
/** Primereact Components */
import { Menu } from 'primereact/menu';

/** CSS imports */
import './home.css';

export default function Home() {

    let items = [
        { 
            label: (
                <div>
                    <span className="main-text">Harper on Github</span>
                    <br />
                    <span className="sub-text">https://github.com/haprer</span>
                </div>
            ),
            icon: 'pi pi-github', className: 'custom-icon', url: 'https://github.com/haprer',

        },
        { label: 'Search', icon: 'pi pi-linkedin', className: 'custom-icon' }
    ];

    return (
        <div className='home-page'>
            <h1>Website Website Website</h1>
            <Menu model={items}></Menu>
        </div>
    );
}
