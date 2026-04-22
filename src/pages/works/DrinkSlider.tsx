
import {Button, Grid2} from "@mui/material";
import './DrinkSlider.css'
import {useState} from "react";
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
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#F19F00'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#00B4C1'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#F91D00'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#4CD964'}
    ])

    const bottleImg = [
        orangeBeer,
        blueBeer,
        greenBeer,
        redBeer,
    ]

    const [step, setStep] = useState(0)

    const handleNextStep  = () =>{
        setStep(prev => (prev + 1) % bottleImg.length)
    }
    const handlePreviousStep = () => {
        setStep(prev => (prev - 1 + bottleImg.length) % bottleImg.length);
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
                        size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
                        sx={{height: { xs: '50vh', sm: '50vh', md: '50vh', lg: '100vh' }}}
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
                        size={{ xs: 12, sm: 12, md: 12, lg: 6 }}
                        sx={{height: { xs: '50vh', sm: '50vh', md: '50vh', lg: '100vh' }}}
                    >
                        <div className="right-side">
                            <div className={'detail'}>
                                <span className={'first-title'}>Pure</span>
                                <span className={'label-text'}>Beer</span>
                                <span className={'second-title'}>Moments</span>
                                <span className={'description'}>
                                   Elevate your experiences with our thoughtfully crafted brews, tailored to create unforgettable memories.
                                </span>
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
                <div className={'bottle-box'}>
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={step}
                            className="bottle"
                            src={bottleImg[step]}
                            transition={{duration: 0.3}}
                            initial={{ y: -800 ,x: 0,  opacity: 0 }}
                            animate={{ y: 0,x: 0,   opacity: 1}}
                            exit={{ y: 800, x: 0, opacity: 0 }}>
                        </motion.img>
                    </AnimatePresence>
                </div>
                <div className={'btn-box'} >
                    <KeyboardArrowUpIcon   style={{cursor: 'pointer'}} size={'medium'}  onClick={() => handleNextStep ()}/>
                    <KeyboardArrowDownIcon style={{cursor: 'pointer'}} size={'medium'} onClick={() => handlePreviousStep ()}/>
                </div>
            </div>

        </>
    )
}