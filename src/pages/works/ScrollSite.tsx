import AlertDialog from "../../component/dialog/experience";
import {useEffect, useRef, useState} from "react";
import {AnimatePresence, motion} from "framer-motion";

import img from "../../assets/phone1.png";
import img4 from "../../assets/img4.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import * as React from "react";
import {Button, Grid2, keyframes} from "@mui/material";
import worker from '../../assets/grafiti-artist.png';
import girl from '../../assets/gum3.png';
import skater from '../../assets/2skater.png'
import bust from '../../assets/bust.png'

import './ScrollSite.css'

export const ScrollSite = () => {

    const dialogText = [
        {
            title: 'At Derak Cloud',
            date: 'August 2022 - March 2025',
            description: 'Designed and implemented a fully responsive user and admin panel at Derak Cloud, ensuring optimal usability across all devices and screen sizes. This included making the user dashboard, purchase and renewal workflows fully responsive, as well as adapting key admin panel features for mobile access, enabling administrators to manage user needs efficiently in any situation.',
            secondTitle: 'At Mehr Pars',
            secondDate: 'May 2025 – October 2025',
            secondDescription: 'Developed a fully responsive company website with parallax scrolling, delivering a smooth and engaging experience across all devices and screen sizes.'
        },
        {
            title: 'At Derak Cloud 2',
            date: 'August 2022 - March 2025',
            description: 'Designed and implemented a fully responsive user and admin panel at Abr Dorak, ensuring optimal usability across all devices and screen sizes. This included making the user dashboard, purchase and renewal workflows fully responsive, as well as adapting key admin panel features for mobile access, enabling administrators to manage user needs efficiently in any situation.',

        }
    ]
    const [activeIndex, setActiveIndex] = useState(0);
    const cont2Ref = useRef(null);
    const stepsVisuals = [
        {
            id: 0,
            title: 'Responsive', description: '- Design and development of a responsive version of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n',
            background: {
                src: `${img}`,
                initial: { y: -200, opacity: 0 },
                animate: { y: 0, opacity: 1 },
                exit: { y: 200, opacity: 0 },
            },
            items: [
                {
                    src: `${img}`,
                    initial: { x: -150, y: -100, scale: 0.8, opacity: 0 },
                    animate: { x: 0, y: 0, scale: 1, opacity: 1 },
                },
                {
                    src: `${img}`,
                    initial: { x: 150, y: -80, scale: 0.8, opacity: 0 },
                    animate: { x: 0, y: 0, scale: 1, opacity: 1 },
                },
                {
                    src: `${img4}`,
                    initial: { x: 0, y: 150, scale: 0.8, opacity: 0 },
                    animate: { x: 0, y: 0, scale: 1, opacity: 1 },
                },
            ],
        },
        {
            id: 1,
            title: 'Onboard', description: '- rsion of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n',
            background: {
                src: `${img}`,
                initial: { scale: 0.9, opacity: 0 },
                animate: { scale: 1, opacity: 1 },
                exit: { scale: 1.1, opacity: 0 },
            },
            items: [
                {
                    src: `${img2}`,
                    initial: { x: -200, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                },
                {
                    src: `${img3}`,
                    initial: { y: 200, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                },
                {
                    src: `${img4}`,
                    initial: { x: 200, opacity: 0 },
                    animate: { x: 0, opacity: 1 },
                },
            ],
        },
        {
            id: 2,
            title: 'Responsive', description: '- Design and development of a responsive version of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n',
            background: {
                src: `${img}`,
                initial: { rotate: -5, scale: 0.95, opacity: 0 },
                animate: { rotate: 0, scale: 1, opacity: 1 },
                exit: { rotate: 5, scale: 1.05, opacity: 0 },
            },
            items: [
                {
                    src: `${img2}`,
                    initial: { x: -120, y: 120, opacity: 0 },
                    animate: { x: 0, y: 0, opacity: 1 },
                },
                {
                    src: `${img3}`,
                    initial: { y: -200, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                },
                {
                    src: `${img4}`,
                    initial: { x: 120, y: 120, opacity: 0 },
                    animate: { x: 0, y: 0, opacity: 1 },
                },
            ],
        },
        {
            title: 'Responsive', description: '- Design and development of a responsive version of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n',
            id: 3,
            background: {
                src: `${img}`,
                initial: { x: -300, opacity: 0 },
                animate: { x: 0, opacity: 1 },
                exit: { x: 300, opacity: 0 },
            },
            items: [
                {
                    src: `${img2}`,
                    initial: { scale: 0, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                },
                {
                    src: `${img3}`,
                    initial: { scale: 0, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                },
                {
                    src: `${img4}`,
                    initial: { scale: 0, opacity: 0 },
                    animate: { scale: 1, opacity: 1 },
                },
            ],
        },
        {
            id: 4,
            title: 'Responsive', description: '- Design and development of a responsive version of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n',
            background: {
                src: `${img}`,
                initial: { opacity: 0, filter: "blur(20px)" },
                animate: { opacity: 1, filter: "blur(0px)" },
                exit: { opacity: 0, filter: "blur(20px)" },
            },
            items: [
                {
                    src: `${img2}`,
                    initial: { y: 100, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                },
                {
                    src: `${img3}`,
                    initial: { y: 140, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                },
                {
                    src: `${img4}`,
                    initial: { y: 180, opacity: 0 },
                    animate: { y: 0, opacity: 1 },
                },
            ],
        },
    ];
    const [open, setOpen] = React.useState(false);
    const [stepDialog, setStepDialog] = React.useState();


    useEffect(() => {
        const handleScroll = () => {
            if (!cont2Ref.current) return
            const { offsetTop, offsetHeight } = cont2Ref.current;
            const scrollPosition = window.scrollY;
            const sectionHeight = offsetHeight / stepsVisuals.length;
            const index = Math.floor((scrollPosition - offsetTop) / sectionHeight);
            setActiveIndex(index);
            console.log({index: index})
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);




    const handleDialog = (step, show) => {
        setOpen(show)
        setStepDialog(step)
    };

    return(

      <div className={'main-card'} ref={cont2Ref}>
         <div className={'scroll-box'}>
             <div className="animation-card">
                <AnimatePresence mode="popLayout">
                     {activeIndex === 0 && (
                         <motion.section
                             key="one"
                             style={{ height:'100vh'}}
                             initial={{ opacity: 0 }}
                             animate={{ opacity: 1 }}
                             exit={{ opacity: 0 }}
                         >
                             <div className={'top-card'}>
                                 <motion.div
                                     className="text-card"
                                     transition={{duration: 1.2}}
                                     initial={{ y: -100,opacity: 0 }}
                                     animate={{ y: '0', opacity: 1 }}
                                     exit={{ y: -100, opacity: 0 }}
                                 >
                                     <div className={'text-box'}>
                                         <span>Daring to Dream</span>
                                         <div className={'title'}>
                                             <span>Where Passions</span>
                                             <span>Ignite and Soar</span>
                                         </div>
                                         {/*<Button className={'btn'} color='white' variant={'text'} size={"small"} onClick={() => handleDialog(0, true)}>*/}
                                         {/*    LEARN MORE*/}
                                         {/*</Button>*/}
                                     </div>
                                 </motion.div>
                             </div>
                             <div className={'bottom-card'}>
                                 <motion.div
                                     className="skate"
                                     transition={{duration: 1.2}}
                                     initial={{ y: 700, opacity: 1 }}
                                     animate={{ y: 0, opacity: 1 }}
                                     exit={{ y: 700, opacity: 1 }}
                                 />
                             </div>
                             <motion.img
                                 className="skater"
                                 src={`${skater}`}
                                 transition={{duration: 1}}
                                 initial={{ y: 800 ,  opacity: 0 }}
                                 animate={{ y: 0,   opacity: 1}}
                                 exit={{ y: 800,  opacity: 0 }}>
                             </motion.img>
                         </motion.section>
                    )}
                    {activeIndex === 1 && (
                        <motion.section
                            key="two"
                            style={{ height:'100vh'}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={'top-card'}>
                                <motion.div
                                    className="mural"
                                    transition={{duration: 1.2 }}
                                    initial={{ x: -1000, opacity: 0, zIndex: -1 }}
                                    animate={{ x: 0, opacity: 1 , zIndex: -1 }}
                                    exit={{ y: -1000, opacity: 0 , zIndex: -1 }}
                                />
                            </div>
                            <div style={{zIndex: 1111}} className={'bottom-card'}>
                                <motion.div
                                    className="text-card"
                                    transition={{duration: 1.2}}
                                    initial={{ y: -100,opacity: 0}}
                                    animate={{ y: '0', opacity: 1}}
                                    exit={{ y: -100, opacity: 0}}
                                >
                                    <div className={'text-box'}>
                                        <span>Beyond the Canvas</span>
                                        <div className={'title'}>
                                            <span>Colors of Urban</span>
                                            <span>Expression</span>
                                        </div>
                                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                                        {/*    LEARN MORE*/}
                                        {/*</Button>*/}
                                    </div>
                                </motion.div>
                                <motion.img
                                    className="worker"
                                    src={`${worker}`}
                                    transition={{duration: 1}}
                                    initial={{ y: 0 ,x: 500, opacity: 0,}}
                                    animate={{y: 0 , x: 0, opacity: 1,}}
                                    exit={{ y: 0,x: 500, opacity: 0 }}>
                                </motion.img>
                            </div>
                        </motion.section>
                    )}
                    {activeIndex === 2 && (
                        <motion.section
                            key="three"
                            style={{ height:'100vh'}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={'top-card'}>
                                <motion.div
                                    className="text-card"
                                    transition={{duration: 1.2}}
                                    initial={{ y: -100,opacity: 0 }}
                                    animate={{ y: '0', opacity: 1 }}
                                    exit={{ y: -100, opacity: 0 }}
                                >
                                    <div className={'text-box'}>
                                        <span>A Journey of Creative Wonder</span>
                                        <div className={'title'}>
                                            <span>Beyond Boundaries,</span>
                                            <span>Skies Ablaze</span>
                                        </div>
                                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                                        {/*    LEARN MORE*/}
                                        {/*</Button>*/}

                                    </div>

                                </motion.div>
                            </div>
                            <div className={'bottom-card'}>
                                <motion.div
                                    className="sky"
                                    transition={{duration: 1.3 }}
                                    initial={{ x: 0,y: 500, opacity: 0}}
                                    animate={{ x: 0,y: 0, opacity: 1}}
                                    exit={{ x:0 ,y: 500, opacity: 0}}
                                />
                            </div>
                            <motion.img
                                className="girl"
                                src={`${girl}`}
                                transition={{duration: 1}}
                                initial={{ y: 500 ,x: 0, opacity: 0}}
                                animate={{y: 0 , x: 0, opacity: 1}}
                                exit={{ y: 500,x: 0, opacity: 0}}>
                            </motion.img>
                        </motion.section>
                    )}
                    {activeIndex === 3 && (
                        <motion.section
                            key="four"
                            style={{ height:'100vh'}}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <div className={'top-card'}>
                                <motion.div
                                    className="b-sky"
                                    transition={{duration: 1.2 }}
                                    initial={{ x: -1000, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    exit={{ y: -1000, opacity: 0 }}
                                />
                            </div>
                            <div className={'bottom-card'}>
                                <motion.div
                                    className="text-card"
                                    transition={{duration: 1.2}}
                                    initial={{ y: -100,opacity: 0 }}
                                    animate={{ y: '0', opacity: 1 }}
                                    exit={{ y: -100, opacity: 0 }}
                                >
                                    <div className={'text-box'}>
                                        <span>Beyond the Canvas</span>
                                        <div className={'title'}>
                                            <span>Colors of Urban</span>
                                            <span>Expression</span>
                                        </div>
                                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                                        {/*    LEARN MORE*/}
                                        {/*</Button>*/}
                                    </div>
                                </motion.div>
                            </div>
                            <motion.img
                                className="bust"
                                src={`${bust}`}
                                transition={{duration: 1}}
                                initial={{ y: 0 ,x: 500, opacity: 0 }}
                                animate={{y: 0 , x: 0, opacity: 1,}}
                                exit={{ y: 0,x: 500, opacity: 0 }}>
                            </motion.img>
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
         </div>
         <AlertDialog
             open={open}
             onClose={() => setOpen(false)}
             stepDialog={dialogText[stepDialog]}
         />
     </div>


    )
}



const PartOne = () => {
    return(
        <motion.section
            key="one"
            style={{ height:'100vh'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={'top-card'}>
                <motion.div
                    className="text-card"
                    transition={{duration: 1.2}}
                    initial={{ y: -100,opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                >
                    <div className={'text-box'}>
                        <span>Daring to Dream</span>
                        <div className={'title'}>
                            <span>Where Passions</span>
                            <span>Ignite and Soar</span>
                        </div>
                        {/*<Button className={'btn'} color='white' variant={'text'} size={"small"} onClick={() => handleDialog(0, true)}>*/}
                        {/*    LEARN MORE*/}
                        {/*</Button>*/}
                    </div>
                </motion.div>
            </div>
            <div className={'bottom-card'}>
                <motion.div
                    className="skate"
                    transition={{duration: 1.2}}
                    initial={{ y: 700, opacity: 1 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 500, opacity: 1 }}
                />
            </div>
                <motion.img
                    className="skater"
                    src={`${skater}`}
                    transition={{duration: 1}}
                    initial={{ y: 800 , x: 0, opacity: 0 }}
                    animate={{ y: 0,  x: 0, opacity: 1}}
                    exit={{ y: 800, x: 0, opacity: 1 }}>
                </motion.img>
        </motion.section>
    )
}
const PartTow = () => {
    return(
        <motion.section
            key="two"
            style={{ height:'100vh'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={'top-card'}>
                <motion.div
                    className="mural"
                    transition={{duration: 1.2 }}
                    initial={{ x: -1000, opacity: 0, zIndex: -1 }}
                    animate={{ x: 0, opacity: 1 , zIndex: -1 }}
                    exit={{ y: -1000, opacity: 0 , zIndex: -1 }}
                />
            </div>
            <div style={{zIndex: 1111}} className={'bottom-card'}>
                <motion.div
                    className="text-card"
                    transition={{duration: 1.2}}
                    initial={{ y: -100,opacity: 0}}
                    animate={{ y: '0', opacity: 1}}
                    exit={{ y: -100, opacity: 0}}
                >
                    <div className={'text-box'}>
                        <span>Beyond the Canvas</span>
                        <div className={'title'}>
                            <span>Colors of Urban</span>
                            <span>Expression</span>
                        </div>
                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                        {/*    LEARN MORE*/}
                        {/*</Button>*/}
                    </div>
                </motion.div>
                <motion.img
                    className="worker"
                    src={`${worker}`}
                    transition={{duration: 1}}
                    initial={{ y: 0 ,x: 500, opacity: 0,}}
                    animate={{y: 0 , x: 0, opacity: 1,}}
                    exit={{ y: 0,x: 500, opacity: 0 }}>
                </motion.img>
            </div>
        </motion.section>
    )
}
const PartThree = () => {
    return(
        <motion.section
            key="three"
            style={{ height:'100vh'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={'top-card'}>
                <motion.div
                    className="text-card"
                    transition={{duration: 1.2}}
                    initial={{ y: -100,opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                >
                    <div className={'text-box'}>
                        <span>A Journey of Creative Wonder</span>
                        <div className={'title'}>
                            <span>Beyond Boundaries,</span>
                            <span>Skies Ablaze</span>
                        </div>
                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                        {/*    LEARN MORE*/}
                        {/*</Button>*/}

                    </div>

                </motion.div>


            </div>
            <div className={'bottom-card'}>
                <motion.div
                    className="sky"
                    transition={{duration: 1.3 }}
                    initial={{ x: 0,y: 500, opacity: 0}}
                    animate={{ x: 0,y: 0, opacity: 1}}
                    exit={{ x:0 ,y: 500, opacity: 0}}
                />
            </div>
            <motion.img
                className="girl"
                src={`${girl}`}
                transition={{duration: 1}}
                initial={{ y: 500 ,x: 0, opacity: 0}}
                animate={{y: 0 , x: 0, opacity: 1}}
                exit={{ y: 500,x: 0, opacity: 0}}>
            </motion.img>
        </motion.section>
    )
}
const PartFour = () => {
    return(
        <motion.section
            key="four"
            style={{ height:'100vh'}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <div className={'top-card'}>
                <motion.div
                    className="b-sky"
                    transition={{duration: 1.2 }}
                    initial={{ x: -1000, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ y: -1000, opacity: 0 }}
                />
            </div>
            <div className={'bottom-card'}>
                <motion.div
                    className="text-card"
                    transition={{duration: 1.2}}
                    initial={{ y: -100,opacity: 0 }}
                    animate={{ y: '0', opacity: 1 }}
                    exit={{ y: -100, opacity: 0 }}
                >
                    <div className={'text-box'}>
                        <span>Beyond the Canvas</span>
                        <div className={'title'}>
                            <span>Colors of Urban</span>
                            <span>Expression</span>
                        </div>
                        {/*<Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
                        {/*    LEARN MORE*/}
                        {/*</Button>*/}
                    </div>
                </motion.div>
            </div>
            <motion.img
                className="bust"
                src={`${bust}`}
                transition={{duration: 1}}
                initial={{ y: 0 ,x: 500, opacity: 0 }}
                animate={{y: 0 , x: 0, opacity: 1,}}
                exit={{ y: 0,x: 500, opacity: 0 }}>
            </motion.img>
        </motion.section>
    )
}

