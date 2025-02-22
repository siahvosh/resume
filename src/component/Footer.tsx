import './Footer.css'
import {Grid2} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Footer = () => {
    return (
        <div className={'container'}>
            <Grid2 container spacing={5} style={{justifyContent: 'center'}}>
                <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 4}}>
                    <span className={'footer-title'}>Company name</span>
                    <span className={'footer-description'}>Uiverse | The universe of UI</span>
                    <span className={'footer-title'}>MIT License</span>
                    <span className={'footer-description'}>All content (UI elements) on this site are published under the MIT License.</span>

                </Grid2>
                <Grid2 size={{xs: 6, sm: 6, md: 6, lg: 2}}>
                    <span className={'footer-title'}>Resources</span>
                    <span className={'footer-description'}>Cssbuttons.io</span>
                    <span className={'footer-description'}>BI DASHBOARD</span>
                </Grid2>
                <Grid2 size={{xs: 6, sm: 6, md: 4, lg: 2}}>
                    <span className={'footer-title'}>Information</span>
                    <span className={'footer-description'}>Blog</span>
                    <span className={'footer-description'}>Post Guidelines</span>
                </Grid2>
                <Grid2 size={{xs: 6, sm: 6, md: 4, lg: 2}}>
                    <span className={'footer-title'}>Legals</span>
                    <span className={'footer-description'}>Terms and Conditions</span>
                    <span className={'footer-description'}>Privacy policy</span>
                    <span className={'footer-description'}>Cookie policy</span>
                    <span className={'footer-description'}>Disclaimer</span>
                </Grid2>
                <Grid2 size={{xs: 6, sm: 6, md: 4, lg: 1}}>
                    <span className={'footer-title'}>Social</span>
                    <span className={'footer-description'}>
                        <InstagramIcon style={{color: 'gray', marginTop: '3px'}} fontSize="small"/>
                        Instagram
                    </span>
                    <span className={'footer-description'}>
                        <TelegramIcon style={{color: 'gray', marginTop: '3px'}} fontSize="small"/>
                        Telegram
                    </span>
                    <span className={'footer-description'}>
                        <WhatsAppIcon style={{color: 'gray', marginTop: '3px'}} fontSize="small"/>
                        Whats app
                    </span>
                    <span className={'footer-description'}>
                        <GitHubIcon style={{color: 'gray', marginTop: '3px'}} fontSize="small"/>
                        GitHubIcon
                    </span>

                </Grid2>
            </Grid2>
        </div>
    )
}