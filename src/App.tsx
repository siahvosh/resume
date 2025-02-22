import './App.css';
import {Button, Grid2} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion, useScroll, useTransform} from "framer-motion";
import img from './assets/img1.png';
import img2 from './assets/img2.png';
import img3 from './assets/img3.png';
import img4 from './assets/img4.png';
import {Footer} from "./component/Footer.tsx";


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
        {title: 'Simple', description: 'Motion for React examples\n' + 'Official free and premium examples to kickstart your next project..', image: `${img}`},
        {title: 'BI Dashboard', description: 'Lorem ipsum Animate every transform axis independently, without needing multiple elements.', image: `${img2}`},
        {title: 'React library', description: 'Without needing multiple elements. Lorem ipsum dolor sit amet.', image: `${img3}`},
        {title: 'More', description: 'Axis independently, without needing Lorem ipsum dolor sit amet.', image: `${img4}`},
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

    const [show, setShow] = useState(false);

    useEffect(() => {
        setShow(true); // هنگام mount شدن، نمایش داده شود
    }, []);

    return (
        <div  className={show ? 'transition-style ' : 'template'} transition-style="in:square:hesitate">
            <div className={'cont-1'}>
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
                        <span className={'text'}>Scale design & <span className={'text'} style={{color: '#EEB491'}}>dev</span></span>
                        <span className={'text'}>BI Dashboard</span>
                        <span className={'text'}>React library</span>
                        <span className={'description'}>Sync design and developer workflows in one powerful tool <br/> while making your procurement happy</span>
                        <Button className={'btn'} variant="contained">
                            <span style={{color: 'black'}}>Contact us</span>
                        </Button>
                    </Grid2>
                </div>
            </div>
            <div className={'cont-2'} ref={cont2Ref}>
                <Grid2 container spacing={20} className={'scroll-box'}>
                    <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} >
                            {stepperDetail.map((item, index) => (
                                <div  key={index} onClick={() => detailHandler(index)}>
                                    <div key={index} onClick={() => setActiveIndex(index)}>
                                         <span className={`text-title ${activeIndex === index ? 'active' : ''}`}>
                                             {item.title}
                                         </span>
                                        <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                                            {item.description} <br/>
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            ))}

                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}}>
                        <div className="images-box">
                                <AnimatePresence>
                                    {stepperDetail.slice(0, activeIndex + 1).map((item, index) => (
                                        <motion.img
                                            key={item.image}
                                            src={item.image}
                                            alt=""
                                            className="img"
                                            style={{
                                                position: "absolute",
                                                top: index * -60,
                                                zIndex: index,
                                            }}
                                            initial={{
                                                opacity: 0,
                                                scale: 1,
                                                rotate: 15,
                                                skewX: -33,
                                                skew: -5,
                                                translateX: -200
                                            }}
                                            animate={{
                                                opacity: index === activeIndex ? 1 : 0.5,
                                                scale: 1,
                                                rotate: 15,
                                                skewX: -33,
                                                translateX: 0,
                                                skew: -10
                                            }}
                                            exit={{
                                                opacity: 0,
                                                scale: 1,
                                                rotate: 15,
                                                skewX: -40,
                                                skew: -5,
                                                translateX: -200
                                            }}
                                            transition={{duration: 1.5}}
                                        />
                                    ))}
                                </AnimatePresence>
                            </div>
                    </Grid2>
            {/*        /!*<Grid2 size={12}>*!/*/}
            {/*        /!*<div className="wrapper">*!/*/}
            {/*        /!*        <div className="item item1">SnapFood</div>*!/*/}
            {/*        /!*        <div className="item item2">Tapsi</div>*!/*/}
            {/*        /!*        <div className="item item3">Janboo</div>*!/*/}
            {/*        /!*        <div className="item item4">Digikala</div>*!/*/}
            {/*        /!*        <div className="item item5">Divar</div>*!/*/}
            {/*        /!*        <div className="item item6">Torob</div>*!/*/}
            {/*        /!*        <div className="item item7">Irancell</div>*!/*/}
            {/*        /!*        <div className="item item8">Shatel</div>*!/*/}
            {/*        /!*    </div>*!/*/}
            {/*        /!*    <div className="wrapper-1">*!/*/}
            {/*        /!*        <div className="item-1 item1">SnapFood</div>*!/*/}
            {/*        /!*        <div className="item-1 item2">Tapsi</div>*!/*/}
            {/*        /!*        <div className="item-1 item3">Janboo</div>*!/*/}
            {/*        /!*        <div className="item-1 item4">Digikala</div>*!/*/}
            {/*        /!*        <div className="item-1 item5">Divar</div>*!/*/}
            {/*        /!*        <div className="item-1 item6">Torob</div>*!/*/}
            {/*        /!*        <div className="item-1 item7">Irancell</div>*!/*/}
            {/*        /!*        <div className="item-1 item8">Shatel</div>*!/*/}
            {/*        /!*    </div>*!/*/}
                    {/*</Grid2>*/}
                </Grid2>

            </div>
            {/*<GallerySection/>*/}

            <Footer/>
        </div>
    );
}


const GallerySection = () => {
    const cont3Ref = useRef(null);
    const imgGroupRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);
    const totalImages = 5;
    const imgWidth = window.innerWidth;

    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrolling && imgGroupRef.current && !allowVerticalScroll) {
                event.preventDefault();

                const delta = event.deltaY * 1.5;
                const maxScroll = (totalImages - 1) * imgWidth;

                setScrollX((prev) => {
                    let newScrollX = prev + delta;

                    if (newScrollX === maxScroll) {
                        newScrollX = maxScroll;
                        setAllowVerticalScroll(true);
                    }

                    if (newScrollX <= 0) {
                        newScrollX = 0;
                        setAllowVerticalScroll(true);
                    }

                    return Math.max(0, Math.min(newScrollX, maxScroll));
                });
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolling(entry.isIntersecting);
                if (!entry.isIntersecting) {
                    setAllowVerticalScroll(false);
                }
            },
            {threshold: 1}
        );

        if (cont3Ref.current) observer.observe(cont3Ref.current);

        window.addEventListener("wheel", handleScroll, {passive: false});

        return () => {
            window.removeEventListener("wheel", handleScroll);
            if (cont3Ref.current) observer.unobserve(cont3Ref.current);
        };
    }, [isScrolling, allowVerticalScroll]);

    return (
        <div ref={cont3Ref} className="cont-3">
            <Grid2 size={12}>
                <article id="gallery">
                    <section className="img-group-container">
                        <div ref={imgGroupRef} className="img-group" style={{transform: `translateX(-${scrollX}px)`}}>
                            {Array.from({length: totalImages}, (_, i) => (
                                <div key={i} className="img-container">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, debitis enim expedita facere fugiat neque praesentium quod rem reprehenderit voluptatem.</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
                                    <h3>#{i + 1}</h3>
                                </div>

                            ))}
                        </div>
                    </section>
                    <footer style={{width: '100vh', height: '100vh'}}>
                        <div>
                            <svg width="100vh" height="100%" viewBox="0 0 5120 337"
                                 preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
                                 className="s1uqj89y s1q6y8ki">
                                <path
                                    d="M2262 93C2122.5 82.5987 2116 21.5 2096.5 21.5C2077 21.5 2070.5 77.5238 1920.5 93C1794.5 106 1786 62 1771.5 63.5C1757 65 1687 155.5 1580 142C1473 128.5 1446.5 90 1435 93C1423.5 96 1448.03 199.005 1340 214C1181.5 236 1155.5 142 1144 142C1132.5 142 1105.5 269 946.5 236C787.5 203 799 115 784 114.5C769 114 732.5 162 544 158C382 154.562 352.5 81 341 84.5C329.5 88 358 269 168 326C-22 383 -75.5 180 -75.5 180V0.5H5189.5L5193.5 46C5193.5 46 5200 94 5069.5 100.5C4939 107 4923.5 21.5 4906.5 21.5C4889.5 21.5 4870 35 4835 93.5C4800 152 4765.5 169.5 4643.5 173.5C4521.5 177.5 4436.5 69 4425.5 76.5C4414.5 84 4413.5 212 4235 222C4056.5 232 4045.5 92 4033.5 89C4021.5 86 3968.5 169.5 3823.5 172.5C3678.5 175.5 3573.5 104 3562.5 106.5C3551.5 109 3553.5 167.5 3396 201C3238.5 234.5 3171.5 168.5 3161 172.5C3150.5 176.5 3164 273 3076.5 294.5C2975.99 319.197 2935 228 2920 225.5C2905 223 2862 276.955 2749 245C2671.4 223.057 2672.5 149 2660.5 151.5C2648.5 154 2622.5 181.04 2548.5 158C2425 119.548 2427.5 53.5 2412 51C2396.5 48.5 2376 101.5 2262 93Z"
                                    fill="white"></path>
                            </svg>
                        </div>
                    </footer>
                </article>
            </Grid2>
        </div>
    )
}

export default App;