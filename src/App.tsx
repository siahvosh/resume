import './App.css';
import { Button, Grid2 } from "@mui/material";
import { useEffect, useRef, useState } from "react";

function App() {

    const [activeIndex, setActiveIndex] = useState(1);


    const [items] = useState([
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/About' },
        { title: 'Ticket', path: '/Ticket' },
        { title: 'More', path: '/More' },
    ]);

    const [stepperDetail] = useState([
        { title: 'Simple', description: 'Animate every transform axis independently, without needing multiple elements.', showDetails: false },
        { title: 'BI Dashboard', description: 'Lorem ipsum dolor sit amet.', showDetails: false },
        { title: 'React library', description: 'Lorem ipsum dolor sit amet.', showDetails: false },
        { title: 'more', description: 'Lorem ipsum dolor sit amet.', showDetails: false },
    ]);

    return (
        <div className="template">
            <div className={'cont-1'} style={{height: '100vh'}}>
                <div className={'toolbar'}>
                    <Grid2 container spacing={10} className={'grids'}>
                        {items.map((item, index) => (
                            <Grid2 size={2} key={index}>
                                <span className={"items"}>{item.title}</span>
                            </Grid2>
                        ))}
                    </Grid2>
                </div>
                <div className={'home-page'}>
                    <Grid2 className={'text-box'}>
                        <span className={'text'}>Scale design & <span className={'text'}
                                                                      style={{color: '#EEB491'}}>dev</span></span>
                        <span className={'text'}>BI Dashboard</span>
                        <span className={'text'}>React library</span>
                        <span className={'description'}>Sync design and developer workflows in one powerful tool <br/> while making your procurement happy</span>
                        <Button className={'btn'} variant="contained">
                            <span style={{color: 'black'}}>Contact us</span>
                        </Button>
                    </Grid2>
                    <Grid2 className={'img-box'}>
                        <div></div>
                    </Grid2>
                </div>
            </div>

            <div className="cont-2" style={{height: "400vh", backgroundColor: "black"}}>
                <div className="box">
                    {stepperDetail.map((item, index) => (
                        <div key={index} className="text">
                            {item.title}
                            {activeIndex === index && (
                                <div style={{fontSize: "1rem", marginTop: "0.5rem", transition: "all 0.3s ease"}}>
                                    {item.description}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>


        </div>
    );
}

export default App;