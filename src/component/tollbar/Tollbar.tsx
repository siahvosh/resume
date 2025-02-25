import {Button, Grid2} from "@mui/material";
import {useEffect, useState} from "react";
import './Tollbar.css'
import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import {useNavigate} from "react-router-dom";


export const Tollbar = () => {
    const [items] = useState([
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/About'},
        {title: 'Services', path: '/Services'},
        {title: 'Form', path: '/Form'},
    ]);
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState<string>('Home');

    useEffect(() => {
        console.log(window.location.pathname)
        setSelectedItem(window.location.pathname)
    }, [window.location.pathname])

    return (
        <div className={'toolbar'}>
            <Grid2 container spacing={0} className={'grids'}>
                <Grid2 size={3}>
                    <img onClick={() => navigate('/Home')} className={'logo'} src="./../src/assets/logo.png" alt="logo"/>
                </Grid2>

                {items.map((item, index) => (
                    <Grid2 size={1} style={{display: 'flex', justifyContent: 'center'}} key={index}>
                        <FadeMenu
                            items={item}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />
                    </Grid2>
                ))}

                <Grid2 size={3} style={{display: 'flex', justifyContent: 'flex-end', marginTop: '-3px'}}>
                    <Button className={'login'}>
                        Login
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export const FadeMenu = (props : any) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        (event.currentTarget.innerHTML !== 'Services') ?  navigate(`/${event.currentTarget.innerHTML}`) : ''
        props.setSelectedItem(event.currentTarget.innerHTML)
    };
    const handleClose = (section: any) => {
        setAnchorEl(null);
        if (section === 'Service') navigate('/Services');
        else if(section === 'part1') navigate('/Section1');
        else if(section === 'part2') navigate('/Section2');
        else if(section === 'part3') navigate('/Section3');
        else if(section === 'part4') navigate('/Section4');
        else if(section === 'part5') navigate('/Section5');
    };

    return (
        <div>
            <span
                id="fade-button"
                aria-controls={open ? 'fade-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={'items'}
                style={{ color: props.selectedItem === props.items.title ? '#58c0bd' : 'white' }}
            >
                {props.items.title}
            </span>
            {props.items.title === 'Services' &&
                <Menu
                    id="fade-menu"
                    MenuListProps={{'aria-labelledby': 'fade-button',}}
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Fade}
                >
                <MenuItem onClick={() => handleClose('Service')}>Service</MenuItem>
                <MenuItem onClick={() => handleClose('part1')}>part1</MenuItem>
                <MenuItem onClick={() => handleClose('part2')}>part2</MenuItem>
                <MenuItem onClick={() => handleClose('part3')}>part3</MenuItem>
                <MenuItem onClick={() => handleClose('part4')}>part4</MenuItem>
                <MenuItem onClick={() => handleClose('part5')}>part5</MenuItem>

            </Menu>}
        </div>
    );
}