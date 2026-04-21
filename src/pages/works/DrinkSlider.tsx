import {Grid2} from "@mui/material";
import logo from '../../assets/beer-logo.png'
import beer from '../../assets/beer-video.mp4'
import orangeBeer from '../../assets/orange-beer.png'

import './DrinkSlider.css'
import {useState} from "react";

export const DrinkSlider = () => {

    const [detail] = useState([
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#F19F00'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#00B4C1'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#F91D00'},
        {firstTile: '', secondTitle: '', label: '' , description : '', color: '#4CD964'}
    ])

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
                            <div className={'detail'}>
                                <h1>Pure</h1>
                                <h2>Beer</h2>
                                <h1>Moments</h1>
                                Elevate your experiences with our thoughtfully crafted brews, tailored to create unforgettable memories.
                            </div>
                        </div>
                    </Grid2>
                </Grid2>
                <div className={'bottle-box'}>
                    <img className={'bottle'} src={`${orangeBeer}`} alt={'stfu'}/>
                </div>
                <div className={'btn-box'}>
                    UP DOWN
                </div>
            </div>

        </>
    )
}