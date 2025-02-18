import './App.css';
import {Button, Card, CardMedia, Container, Grid2, Typography} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {

    const [activeIndex, setActiveIndex] = useState(0);
    const cont2Ref = useRef(null);

    const [items] = useState([
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/About'},
        {title: 'Ticket', path: '/Ticket'},
        {title: 'More', path: '/More'},
    ]);

    const [stepperDetail] = useState([
        {title: 'Simple', description: 'Animate every transform axis independently, without needing multiple elements.', showDetails: false},
        {title: 'BI Dashboard', description: 'Lorem ipsum dolor sit amet.', showDetails: false},
        {title: 'React library', description: 'Lorem ipsum dolor sit amet.', showDetails: false},

    ]);

    const detailHandler = (idx: any) => {
        setActiveIndex(idx);
    }

    useEffect(() => {
        const handleScroll = () => {
            if (cont2Ref.current) {
                const { offsetTop, offsetHeight } = cont2Ref.current;
                const scrollPosition = window.scrollY;
                const sectionHeight = offsetHeight / stepperDetail.length;
                const index = Math.floor((scrollPosition - offsetTop) / sectionHeight);

                setActiveIndex(index);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
            <div className={'cont-2'} style={{height: '600vh', backgroundColor: 'black'}} ref={cont2Ref}>
                <div className={'scroll-box'}>
                    <Grid2 container={true} spacing={12} className={'grid-container'}>
                        <Grid2 size={5} style={{}}>
                            {stepperDetail.map((item, index) => (
                                <div key={index} onClick={() => detailHandler(index)}>
                                    <div key={index} onClick={() => setActiveIndex(index)}>
                                                <span className={`text-title ${activeIndex === index ? 'active' : ''}`}>
                                                    {item.title}
                                                </span>
                                        <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                                            {item.description}
                                        </div>
                                    </div>

                                </div>
                            ))}
                        </Grid2>
                        <Grid2 size={7}>
                            <div className={'images-box'}></div>
                        </Grid2>
                    </Grid2>
                    <Grid2 size={12}>
                        <div className="wrapper">
                            <div className="item item1">SnapFood</div>
                            <div className="item item2">Tapsi</div>
                            <div className="item item3">Janboo</div>
                            <div className="item item4">Digikala</div>
                            <div className="item item5">Divar</div>
                            <div className="item item6">Torob</div>
                            <div className="item item7">Irancell</div>
                            <div className="item item8">Shatel</div>
                        </div>
                    </Grid2>

                </div>
            </div>
            <div className={'cont-3'}>
                <Gallery/>
            </div>

        </div>
    );
}




const Gallery = () => {
    const imgGroupRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        const { animate, scroll } = window.Motion;

        const items = document.querySelectorAll(".img-container");

        // Animate gallery horizontally during vertical scroll
        scroll(
            animate(imgGroupRef.current, {
                transform: ["none", `translateX(-${items.length - 1}00vw)`],
            }),
            { target: document.querySelector(".img-group-container") }
        );

        // Progress bar representing gallery scroll
        scroll(animate(progressRef.current, { scaleX: [0, 1] }), {
            target: document.querySelector(".img-group-container"),
        });
    }, []);

    return (
        <article id="gallery">
            <header>
                <h2>Lines of London</h2>
            </header>
            <section className="img-group-container">
                <div>
                    <ul className="img-group" ref={imgGroupRef}>
                        <li className="img-container">
                            <img src="/photos/cityscape/1.jpg" alt="Cityscape 1" />
                            <h3>#001</h3>
                        </li>
                        <li className="img-container">
                            <img src="/photos/cityscape/2.jpg" alt="Cityscape 2" />
                            <h3>#002</h3>
                        </li>
                        <li className="img-container">
                            <img src="/photos/cityscape/3.jpg" alt="Cityscape 3" />
                            <h3>#003</h3>
                        </li>
                        <li className="img-container">
                            <img src="/photos/cityscape/4.jpg" alt="Cityscape 4" />
                            <h3>#004</h3>
                        </li>
                        <li className="img-container">
                            <img src="/photos/cityscape/5.jpg" alt="Cityscape 5" />
                            <h3>#005</h3>
                        </li>
                    </ul>
                </div>
            </section>
            <footer>
                <p>
                    Photos by
                    <a target="_blank" href="https://twitter.com/mattgperry" rel="noopener noreferrer">
                        Matt Perry
                    </a>
                </p>
            </footer>
            <div className="progress" ref={progressRef}></div>
        </article>
    );
};
export default App;