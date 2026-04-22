
import {Button, Grid2} from "@mui/material";
import './DrinkSlider.css'
import {useEffect, useState} from "react";
import {AnimatePresence,motion} from "framer-motion";
import * as React from "react";


// ICONS ----------------------------------------
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

// IMAGES ----------------------------------------
import logo from '../../assets/beer-logo.png'
import beer from '../../assets/beer-video.mp4'
import orangeBeer from '../../assets/orange-beer.png'
import blueBeer from '../../assets/blue-beer.png'
import greenBeer from '../../assets/green-beer.png'
import redBeer from '../../assets/red-beer.png'



export const DrinkSlider = () => {

    const [detail] = useState([
        {
            firstTile: 'Pure',
            secondTitle: 'Pleasure',
            label: 'Beer' ,
            description : 'Where every sip becomes a moment to savor, indulging in a symphony of flavors that will leave a lasting impression.',
            color: '#F19F00'
        },
        {
            firstTile: 'Crafted',
            secondTitle: 'Moments',
            label: 'For',
            description : 'Elevate your experiences with our thoughtfully crafted brews, tailored to create unforgettable memories.',
            color: '#00B4C1'
        },
        {
            firstTile: 'Indulge',
            secondTitle: 'Repeat',
            label: 'Enjoy',
            description: 'Embrace the perfect blend of heritage and forward-thinking to savor unrivaled taste and craftsmanship.',
            color: '#4CD964'
        },
        {
            firstTile: 'Tradition',
            secondTitle: 'Innovation',
            label: 'And' ,
            description : 'Embrace the perfect blend of heritage and forward-thinking to savor unrivaled taste and craftsmanship.',
            color: '#F91D00'
        }
    ])

    const [direction, setDirection] = useState(-1);

    const bottleImg = [
        orangeBeer,
        blueBeer,
        greenBeer,
        redBeer,
    ]

    const [step, setStep] = useState(0)

    const handleNextStep  = () =>{
        setStep(step >= 3 ? 0 : step + 1)
        setDirection(-1);

    }
    const handlePreviousStep = () => {
        setStep(step <= 0 ? 3 : step -1);
        setDirection(1);
    };

    useEffect(() => {
        console.log({step: step})
        console.log({direction: direction})
    })

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 500 : -500,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction > 0 ? -500 : 500,
            opacity: 0,
        }),
    };
    const botVariants = {
        enter: (direction) => ({
            y: direction > 0 ? 500 : -500,
            opacity: 0,
        }),
        center: {
            y: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            y: direction > 0 ? -500 : 500,
            opacity: 0,
        }),
    };

    return(
        <>
            <div className={'beer-container'}>
                <div className={'label'}>
                    <div style={{padding: '3rem'}}>
                        <img className={'logo-img'} alt={'sunshine'} src={`${logo}`}/>
                    </div>
                    <div style={{padding: '3rem'}}>
                        <h2>Mirzad</h2>
                    </div>
                </div>
                <Grid2 container sx={{ height: '100vh' }}>
                    <Grid2
                        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                        sx={{height: { xs: '50vh', sm: '50vh', md: '100vh', lg: '100vh' }}}
                    >
                        <div className="left-side">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={'video'}
                                src={`${beer}`}/>
                        </div>
                    </Grid2>

                    <Grid2
                        size={{ xs: 12, sm: 12, md: 6, lg: 6 }}
                        sx={{height: { xs: '50vh', sm: '50vh', md: '100vh', lg: '100vh' }}}
                    >
                        <div className="right-side">
                            <AnimatePresence mode="wait" custom={direction}>
                                <motion.div
                                    key={step}
                                    custom={direction}
                                    variants={variants}
                                    initial="enter"
                                    animate="center"
                                    exit="exit"
                                    transition={{ duration: 0.4 }}
                                    className={'text-animation'}
                                >
                                    <div className={'detail'}>
                                        <span className={'first-title'}>{detail[step].firstTile}</span>
                                        <span style={{color: detail[step].color}} className={'label-text'}>{detail[step].label}</span>
                                        <span className={'second-title'}>{detail[step].secondTitle}</span>
                                        <span className={'description'}>{detail[step].description}</span>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Grid2>
                </Grid2>
                <div className={'bottle-box'}>
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                            key={step}
                            className="bottle"
                            src={bottleImg[step]}
                            custom={direction}
                            variants={botVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3 }}>
                        </motion.img>
                    </AnimatePresence>
                </div>
                <div className={'btn-box'} >
                    <KeyboardArrowUpIcon   style={{cursor: 'pointer'}} size={'medium'} onClick={() => handlePreviousStep ()} />
                    <KeyboardArrowDownIcon style={{cursor: 'pointer'}} size={'medium'} onClick={() => handleNextStep ()} />
                </div>
            </div>

        </>
    )
}