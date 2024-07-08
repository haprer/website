

import { Divider } from 'primereact/divider';

/** CSS */
import '/src/pages/Mantaray.css'
import { Card } from 'primereact/card';



const Mantaray = () => {
    return (
        <div className='mantapage'> 
            <h1>Welcome to the Mantaray Page</h1>
            <p>This is the content of the Mantaray page.</p>
            <Card>
                <img src="/assets/mantaray/mv-test-3.jpg" alt="coming soon..." className="carousel-image" />
                <Divider layout="vertical" />
                <p>
                    Using robots to find bombs left over from WWII and other conflicts underwater.
                    <br/>
                    MantaRay (Marine And Naval Technological Advancements in Robotic AutonomY) is a partially U.S. Navy funded
                    research team at the University of New Hampshire. We developed multiple small uncrewed underwater vehicles (UUVs)
                    and one large autonomous surface vehicle (ASV). I worked on all team projects but my research focused on
                    a grant for the autonomous detection of unexploded ordinance using a two vehicle system. 
                    <br/>

                </p>
            </Card>

        </div>
    );
};

export default Mantaray;