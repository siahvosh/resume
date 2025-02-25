import { Button, Grid2 } from "@mui/material";
import { useState, useEffect } from "react";
import './Tollbar.css'
import * as React from "react";
import Menu from "@mui/material/Menu";
import Fade from "@mui/material/Fade";
import MenuItem from "@mui/material/MenuItem";
import { useNavigate, useLocation } from "react-router-dom"; // اضافه کردن useLocation

export const Tollbar = () => {
    const [items] = useState([
        { title: 'Home', path: '/home' },
        { title: 'About', path: '/about' },
        { title: 'Services', path: '/services' },
        { title: 'Form', path: '/form' },
    ]);
    const [selectedItem, setSelectedItem] = useState<string>('Home'); // State برای مدیریت آیتم انتخاب شده
    const navigate = useNavigate();
    const location = useLocation(); // دریافت pathname فعلی

    // useEffect برای تنظیم selectedItem بر اساس pathname
    useEffect(() => {
        const currentItem = items.find(item => item.path === location.pathname);
        if (currentItem) {
            setSelectedItem(currentItem.title);
        }
    }, [location.pathname, items]);

    return (
        <div className={'toolbar'}>
            <Grid2 container spacing={0} className={'grids'}>
                <Grid2 size={3}>
                    <img onClick={() => navigate('/home')} className={'logo'} src="./../src/assets/logo.png" alt="logo" />
                </Grid2>

                {items.map((item, index) => (
                    <Grid2 size={1} style={{ display: 'flex', justifyContent: 'center' }} key={index}>
                        <FadeMenu
                            items={item}
                            selectedItem={selectedItem}
                            setSelectedItem={setSelectedItem}
                        />
                    </Grid2>
                ))}

                <Grid2 size={3} style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '-3px' }}>
                    <Button className={'login'}>
                        Login
                    </Button>
                </Grid2>
            </Grid2>
        </div>
    )
}

export const FadeMenu = (props: any) => {
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        if (event.currentTarget.innerHTML !== 'Services') {
            navigate(`/${event.currentTarget.innerHTML.toLowerCase()}`);
            props.setSelectedItem(event.currentTarget.innerHTML); // به‌روزرسانی state با آیتم انتخاب شده
        }
    };

    const handleClose = (section: string) => {
        setAnchorEl(null);
        if (section === 'Service') {
            navigate('/services');
        } else if (section === 'part1') {
            navigate('/section1');
        } else if (section === 'part2') {
            navigate('/section2');
        }else if (section === 'part3') {
            navigate('/section3');
        }
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
                style={{ color: props.selectedItem === props.items.title ? '#58c0bd' : 'white' }} // تغییر رنگ متن
            >
                {props.items.title}
            </span>
            {props.items.title === 'Services' && <Menu
                id="fade-menu"
                MenuListProps={{ 'aria-labelledby': 'fade-button', }}
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