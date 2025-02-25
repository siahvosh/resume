import {Button, Grid2} from "@mui/material";
import {useState} from "react";
import './Tollbar.css'
import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";


export const Tollbar = () => {
    const [items] = useState([
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/About'},
        {title: 'Services', path: '/Services'},
        // {title: 'Login', path: '/Login'},
    ]);

    return (
        <div className={'toolbar'}>
            <Grid2 container spacing={0} className={'grids'}>
                <Grid2 size={4}>
                    <img className={'logo'} src="./../src/assets/logo.png" alt="logo"/>
                </Grid2>

                {items.map((item, index) => (
                    <Grid2 size={1} style={{display: 'flex', justifyContent: 'center'}} key={index}>
                        <FadeMenu items={item}/>
                    </Grid2>
                ))}

                <Grid2 size={4} style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-3px'}}>
                    <Button className={'login'}>
                        Login
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export const FadeMenu = (props : any) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    console.log({items: props.items.title})

    return (
        <div>
            <span
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={'items'}
            >
                {props.items.title}
            </span>
            {props.items.title === 'Services' && <Menu
                id="fade-menu"
                MenuListProps={{
                    'aria-labelledby': 'fade-button',
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>}
        </div>
    );
}