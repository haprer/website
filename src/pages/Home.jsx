
/** Primereact Components */
import { Menu } from 'primereact/menu';
import {Accordion, AccordionTab} from 'primereact/accordion';
import { Divider } from 'primereact/divider';
import { Carousel } from 'primereact/carousel';
import { Link } from 'react-router-dom';
import { Card } from 'primereact/card';

import { useState, useEffect } from 'react';



/** CSS imports */
import '/src/pages/Home.css';


function QuestionAccordian() { 
    return (
        <Accordion activeIndex={0}>
            <AccordionTab header="Can I hire you?">
                <p className="m-0">
                    Yes! I am looking for a job as a software engineer. I am a full stack developer with experience in Spring, C# .Net, React, AWS, and more. 
                    Please email me about your position at <a href="mailto:harpersullivan00@gmail.com">harpersullivan00@gmail.com</a>. 
                    <br />
                    Bonus points if you have a cool office, and extra if it&apos;s in Europe. 
                </p>
            </AccordionTab>
            <AccordionTab header="Do you have a degree?">
                <p className="m-0">
                    Yes, I have a Bachelor of Science in Computer Science from the University of New Hampshire. 
                </p>
            </AccordionTab>
            <AccordionTab header="What are your hobbies">
                <p className="m-0">
                    Aside from making software I love to cook, read, and play video games. I competed in first robotics and cross country in high school.
                    I played competetive dota 2 in college. 
                </p>
            </AccordionTab>
        </Accordion>
    );
}


function HomeCarousel() { 

    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        setCarouselItems([
            {
                title: "Ocean Robotics",
                image: "/assets/mantaray/mv-test-1.jpg",
                description: "My work on the ASV/UUV project at UNH MantaRay.",
                link: "/mantaray"
            },
            {
                title: "State.io Remake",
                image: "/assets/stateio/dev-1.png",
                description: "My remake of the game State.io to learn PhaserJS.",
                link: "http://harper-stateio-remake-bucket.s3-website-us-east-1.amazonaws.com/"
            },
            {
                title: "This website",
                image: "/assets/website/home-code-1.png", 
                description: "How I made this page using primereact and",
                link: "/website"
            }
        ]);
    }, []);
    
    
    const template = (item) => { 
        return (
            <Link to={item.link} className="carousel-link">
                <Card className='carousel-card'>
                    <div className='carousel-item'>
                        <img src={item.image} alt="coming soon..." className="carousel-image" />
                        <h1>{item.title}</h1>

                        <div className="product-description">{item.description}</div>
                    </div>
                </Card>
            </Link>
        );
    }

    return (
        <div className="carousel-demo">
            {/* Responsive options removed */}
            <Carousel value={carouselItems} numVisible={1} numScroll={1} autoplayInterval={5000} itemTemplate={template} circular /> 
        </div>
    );
}


export default function Home() {

    let items = [
        { label: (
            <div>
                <span className="main-text">LinkedIn</span>
                <br />
                <span className="sub-text">https://linkedin.com/in/clifton-sullivan-abb374291</span>
            </div>
        ), 
        icon: 'pi pi-linkedin', className: 'custom-icon', url: 'https://linkedin.com/in/clifton-sullivan-abb374291' 
        },
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
        {
            label: (
                <div>
                    <span className="main-text">Clifton on Github</span>
                    <br />
                    <span className="sub-text">https://github.com/clifton4</span>
                </div>
            ),
            icon: 'pi pi-github', className: 'custom-icon', url: 'https://github.com/clifton4',
        }
    ];

    return (
        <div className='home-page'>
            <div id="layerOne">
                {HomeCarousel()}
                <Menu model={items}></Menu>
            </div>
            <Divider></Divider>
            {QuestionAccordian()}
        </div>
    );
}
