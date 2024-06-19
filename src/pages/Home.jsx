
/** Primereact Components */
import { Menu } from 'primereact/menu';
import {Accordion, AccordionTab} from 'primereact/accordion';

/** CSS imports */
import './home.css';


function QuestionAccordian() { 
    return (
        <Accordion activeIndex={0}>
            <AccordionTab header="Can I hire you?">
                <p className="m-0">
                    Yes! I am looking for a job as a software engineer. I am a full stack developer with experience in Spring, C# .Net, React, AWS, and more. 
                    Please email me about your position at <a href="mailto:harpersullivan00@gmail.com">harpersullivan00@gmail.com</a>. Bonus points if you have a cool office, 
                    and even more if it is in Europe. 
                </p>
            </AccordionTab>
            <AccordionTab header="Header II">
                <p className="m-0">
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                </p>
            </AccordionTab>
            <AccordionTab header="Header III">
                <p className="m-0">
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                    quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                    mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
                </p>
            </AccordionTab>
        </Accordion>
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
                <h1>Website Website Website</h1>
                <Menu model={items}></Menu>
            </div>
            {QuestionAccordian()}
        </div>
    );
}
