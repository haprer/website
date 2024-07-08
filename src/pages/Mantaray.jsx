

import { Divider } from 'primereact/divider';

/** CSS */
import '/src/pages/Mantaray.css'
import { Card } from 'primereact/card';



const Mantaray = () => {
    return (
        <div className='mantapage'> 
            <h1>Welcome to the Mantaray Page</h1>
            <Card>
                <img src="/assets/mantaray/mv-test-3.jpg" alt="coming soon..." className="carousel-image" />
                <Divider layout="vertical" />
                <p>
                    Using robots to find bombs left over from WWII and other conflicts underwater.
                    <br/> <br />
                    MantaRay (Marine And Naval Technological Advancements in Robotic AutonomY) is a partially U.S. Navy funded
                    research team at the University of New Hampshire. We developed multiple small uncrewed underwater vehicles (UUVs)
                    and one large autonomous surface vehicle (ASV). I worked on all team projects but my research focused on
                    a grant for the autonomous detection of unexploded ordinance using a two vehicle system. 
                    <br/> <br />
                    For me, my MantaRay work started as a senior project building a website to track the vehicles in our fleet during
                    missions. After that I fell in love with the team and joined as a paid researcher to design and implement the 
                    vehicle control software and communications architecture.
                    By the end of my time we achieved the ASV/UUV system misison of a robotic team of vehicles able to systematically 
                    search an area of ocean floor. The mission is split into three parts: 
                    <ol>
                        <li>
                            Autonomous navigation of ASV to survery area.
                        </li>
                        <li>
                            Deployment of UUV.
                        </li>
                        <li>
                            UUV survey of area. 
                        </li>
                        <li>
                            Recovery of UUV and navigation back to start location. 
                        </li>
                    </ol>
                    All accomplished with shorestation oversight but no human action. <br />
                    The most important thing our system can accomplish that very few ocean engineering systems can is the 
                    absolute positioning of undersea objects using GPS coordinates. Because GPS signals cannot penetrate 
                    underwater, undersea mapping is very innacurate. We used a combination of RTK GPS and sonar to position
                    the ASV and the UUV relative to it. Although we only achieved 3 meter accuracy while I was working
                    I believe the team will get to their goal of 50cm accuracy.  
                </p>
            </Card>

        </div>
    );
};

export default Mantaray;