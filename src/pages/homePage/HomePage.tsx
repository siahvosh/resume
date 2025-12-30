import {
    Box,
    Button, Card, CardActions, CardContent, CardMedia, CircularProgress,
    Divider,
    Grid2,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuList,
    Paper, Stack, Tooltip,
    Typography
} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import LinearProgress from '@mui/material/LinearProgress';
import {useEffect, useRef, useState} from "react";
import AlertDialog from '../../component/dialog/experience'
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import Lottie from "lottie-react";


import img from "../../assets/phone1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpg";
import web4 from "../../assets/background.jpg";
import skater from '../../assets/2skater.png'
import worker from '../../assets/grafiti-artist.png';
import phone from '../../assets/iphone.png'
import rock1 from '../../assets/r1.png'
import rock2 from '../../assets/r2.png'
import rock3 from '../../assets/r3.png'
import avatar from '../../assets/background.jpg'


import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FeedIcon from '@mui/icons-material/Feed';
import CodeIcon from '@mui/icons-material/Code';import animationData from "../../lottie/circle.json";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CircleIcon from '@mui/icons-material/Circle';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { linearProgressClasses } from '@mui/material/LinearProgress';

import './HomePage.css'
import './../../App.css'
import * as React from "react";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";
import {Gauge, gaugeClasses} from "@mui/x-charts";
import {Loading} from "../../component/loading/Loading";


const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: theme.palette.grey[200],
        ...theme.applyStyles('light', {
            backgroundColor: theme.palette.grey[800],
        }),
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#EDFF20FF',
        ...theme.applyStyles('dark', {
            backgroundColor: '#EDFF20FF',
        }),
    },
}));

export const HomePage = () => {

    const [page, setPage] = useState('about')
    const [loading, setLoading] = useState(false)
    const handlePage = (page) =>{
        setPage(page)
    }

    setTimeout(() => {
        setLoading(true)
    }, 5000);

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
           if (cont2Ref.current) {
               const { offsetTop, offsetHeight } = cont2Ref.current;
               const scrollPosition = window.scrollY;
               const sectionHeight = offsetHeight / stepsVisuals.length;
               const index = Math.floor((scrollPosition - offsetTop) / sectionHeight);
               setActiveIndex(index);
               console.log({index: index})
           }
       };

       window.addEventListener('scroll', handleScroll);
       return () => window.removeEventListener('scroll', handleScroll);
   }, []);


    const handleDialog = (step, show) => {
        setOpen(show)
        setStepDialog(step)
        console.log({step})
    };

    return (
        <>
            { loading === false && (
                <Loading/>
            )}
            {/*<Loading/>*/}
          <div className={'cont-1'}>

              {/*<Loading/>*/}
              <div className={'resume-container'}>
                  <Grid2 container style={{display: 'flex', alignItems: 'center'}}>
                      {/*//BaseCard*/}
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{zIndex: '1'}}>
                          <BaseCard page={page} handlePage={handlePage}/>
                      </Grid2>

                      {/*//DetailCard*/}
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{zIndex: '0'}}>

                          <AnimatePresence mode="popLayout">
                              {page === 'about' && (
                                  <motion.div
                                      key="about"
                                      style={{position: 'relative'}}
                                      transition={{ duration: 0.8 }}
                                      initial={{ x: '-50vw', opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      exit={{ x: '-30vw', opacity: 0 }}
                                  >
                                      <DetailCard />
                                  </motion.div>
                              )}

                              {page === 'works' && (
                                  <motion.div
                                      key="works"
                                      transition={{ duration: 0.8 }}
                                      initial={{ x: '-50vw', opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      exit={{ x: '-30vw', opacity: 0 }}
                                  >
                                      <WorksPage />
                                  </motion.div>
                              )}
                              {page === 'contact' && (
                                  <motion.div
                                      key="contact"
                                      style={{position: 'relative'}}
                                      transition={{ duration: 0.8 }}
                                      initial={{ x: '-50vw', opacity: 0 }}
                                      animate={{ x: 0, opacity: 1 }}
                                      exit={{ x: '-30vw', opacity: 0 }}
                                  >
                                      <ContactPage />
                                  </motion.div>
                              )}
                          </AnimatePresence>
                      </Grid2>
                  </Grid2>
              </div>
              {/*<Lottie*/}
              {/*    animationData={animationData}*/}
              {/*    loop*/}
              {/*    autoplay*/}
              {/*    className={'lottie'}*/}
              {/*/>*/}
              
              {/*<div className={'card'}>*/}
              {/*    <span className={'front-end'}>FRONT-END <span className={'dev'} >DEVELOPER</span></span>*/}
              {/*    <span className={'name'}>SIAVASH MIRALIKHANI</span>*/}
              {/*    <div className={'contact'}>*/}
              {/*        <CallIcon style={{fontSize: "clamp(12px, 2vw, 1.8vw)"}}/>*/}
              {/*           <a href="tel:+989124949401"> +98 912 49 49 401 | </a>*/}
              {/*        <EmailIcon style={{fontSize: "clamp(12px, 2vw,  1.8vw)"}}/>*/}
              {/*        <a*/}
              {/*            href="https://mail.google.com/mail/?view=cm&fs=1&to=GTSIAVASH@gmail.com&su=Contact%20from%20website&body=Hi%20Siavash,%0A%0AI'm%20contacting%20you%20through%20your%20website."*/}
              {/*            target="_blank"*/}
              {/*            rel="noopener noreferrer"*/}
              {/*        >*/}
              {/*            GTSIAVASH@gmail.com*/}
              {/*        </a>*/}
              {/*        <LocationOnIcon style={{fontSize: "clamp(12px, 2vw, 1.8vw)"}}/>*/}
              {/*            <a*/}
              {/*                href="https://www.google.com/maps/search/?api=1&query=Shiraz"*/}
              {/*                 target="_blank"*/}
              {/*                 rel="noopener noreferrer">SHIRAZ</a>*/}
              {/*    </div>*/}
              {/*    <div className={'social'}>*/}
              {/*        <GitHubIcon sx={{fontSize: '30px'}}/>*/}
              {/*        <LinkedInIcon sx={{fontSize: '30px'}}/>*/}
              {/*        <InstagramIcon sx={{fontSize: '30px'}}/>*/}
              {/*    </div>*/}
              {/*</div>*/}
          </div>
          {/*<div className={'middle'}>*/}
          {/*    <div className={'middle-text'}>*/}
          {/*        <span className={'mid-text'}>*/}
          {/*            SUMMARY*/}
          {/*        </span>*/}
          {/*        <h1 className={'mid-text-description'} >*/}
          {/*              Front-End Developer with 3+ years of experience building responsive, user-friendly web applications using*/}
          {/*              JavaScript, React (MUI), Vue2 (Vuetify), HTML, Bootstrap ,CSS. Skilled in translating UI/UX designs into highperformance interfaces. I am also highly responsible, detail-oriented, and skilled in project management,*/}
          {/*              ensuring timely delivery of high-quality work.*/}
          {/*        </h1>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className={'cont-2'}  ref={cont2Ref}>*/}
          {/*    <div className={'scroll-box'}>*/}
          {/*        <Grid2 container spacing={1}>*/}
          {/*            <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>*/}
          {/*                <div className={'experience-title-box'}>*/}
          {/*                   <span className={'experience-title'}>*/}
          {/*                       EXPERIENCE*/}
          {/*                   </span>*/}
          {/*                </div>*/}
          {/*            </Grid2>*/}
          {/*            <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>*/}
          {/*                <div className="container-animation">*/}
          {/*                    <AnimatePresence mode="wait">*/}
          {/*                        {activeIndex === 0 && (*/}
          {/*                            <motion.section*/}
          {/*                                key="one"*/}
          {/*                                className=""*/}
          {/*                                initial={{ opacity: 0 }}*/}
          {/*                                animate={{ opacity: 1 }}*/}
          {/*                                exit={{ opacity: 1 }}*/}
          {/*                            >*/}
          {/*                              <div className={'side-1'}>*/}
          {/*                                  <motion.div*/}
          {/*                                      className="side-1-text"*/}
          {/*                                      transition={{duration: 1.2}}*/}
          {/*                                      initial={{ y: -100,opacity: 0 }}*/}
          {/*                                      animate={{ y: '0', opacity: 1 }}*/}
          {/*                                      exit={{ y: -100, opacity: 0 }}*/}
          {/*                                  >*/}
          {/*                                      <div className={'detail-text'}>*/}
          {/*                                              <span>RESPONSIVE PAGE</span>*/}
          {/*                                              <span>How do you make a website responsive</span>*/}
          {/*                                              <Button color='white' variant={'text'} size={"small"} onClick={() => handleDialog(0, true)}>*/}
          {/*                                                  LEARN MORE*/}
          {/*                                              </Button>*/}

          {/*                                          </div>*/}
          {/*                                  </motion.div>*/}
          {/*                              </div>*/}
          {/*                              <div className={'side-2'}>*/}
          {/*                                  <motion.div*/}
          {/*                                      className="img-1"*/}
          {/*                                      transition={{duration: 1.2 }}*/}
          {/*                                      initial={{ y: 700, opacity: 1 }}*/}
          {/*                                      animate={{ y: 0, opacity: 1 }}*/}
          {/*                                      exit={{ y: 500, opacity: 1 }}*/}
          {/*                                 />*/}
          {/*                              </div>*/}
          {/*                              <motion.img*/}
          {/*                                  className="phone-img"*/}
          {/*                                  src={`${phone}`}*/}
          {/*                                  transition={{duration: 1, delay: 0.3 }}*/}
          {/*                                  initial={{ y: 800 ,x: '0vw', opacity: 1 }}*/}
          {/*                                  animate={{ x: '0vw', opacity: 1, y: 0 }}*/}
          {/*                                  exit={{ y: 800,x: '0vw', opacity: 1 }}>*/}
          {/*                              </motion.img>*/}
          {/*                              <div className="rock-1">*/}
          {/*                                  <motion.img*/}
          {/*                                      src={rock1}*/}
          {/*                                      style={{width: '80px'}}*/}
          {/*                                      initial={{ y: 800, x: '0vw', opacity: 1 }}*/}
          {/*                                      animate={{ y: 0, opacity: 1 }}*/}
          {/*                                      exit={{ y: 800, x: '0vw', opacity: 1 }}*/}
          {/*                                      transition={{ duration: 1, delay: 0.4 }}*/}
          {/*                                  />*/}
          {/*                              </div>*/}
          {/*                              <div className="rock-2">*/}
          {/*                                  <motion.img*/}
          {/*                                      src={`${rock2}`}*/}
          {/*                                      style={{width: '60px'}}*/}
          {/*                                      transition={{duration: 1.1, delay: 0.4 }}*/}
          {/*                                      initial={{ y: '50vh', opacity: 1 }}*/}
          {/*                                      animate={{ y: '0vw', opacity: 1 }}*/}
          {/*                                      exit={{ y: '50vh', opacity: 1 }}>*/}
          {/*                                  </motion.img>*/}
          {/*                              </div>*/}
          {/*                              <div className="rock-3">*/}
          {/*                                    <motion.img*/}
          {/*                                        src={`${rock3}`}*/}
          {/*                                        style={{width: '70px'}}*/}
          {/*                                        transition={{duration: 1.1, delay: 0.4 }}*/}
          {/*                                        initial={{ y: '50vh', opacity: 1 }}*/}
          {/*                                        animate={{ y: '0vw', opacity: 1,}}*/}
          {/*                                        exit={{ y: '50vh', opacity: 1 }}>*/}
          {/*                                    </motion.img>*/}
          {/*                                </div>*/}
          {/*                              /!*</div>*!/*/}
          {/*                            </motion.section>*/}
          {/*                        )}*/}
          {/*                        {activeIndex === 1 && (*/}
          {/*                            <motion.section*/}
          {/*                                key="two"*/}
          {/*                                className=""*/}
          {/*                                initial={{ opacity: 0 }}*/}
          {/*                                animate={{ opacity: 1 }}*/}
          {/*                                exit={{ opacity: 1 }}*/}
          {/*                            >*/}
          {/*                                <div className={'side-3'}>*/}
          {/*                                    <motion.div*/}
          {/*                                        className="img-2"*/}
          {/*                                        transition={{duration: 1.2 }}*/}
          {/*                                        // initial={{ width: '0' , height: '100%'}}*/}
          {/*                                        // animate={{ width: "100%", height: '100%'}}*/}
          {/*                                        // exit={{ width: '0', height: '100%' }}*/}
          {/*                                        initial={{ x: -1000, opacity: 1 }}*/}
          {/*                                        animate={{ x: 0, opacity: 1 }}*/}
          {/*                                        exit={{ y: -500, opacity: 1 }}*/}
          {/*                                    />*/}
          {/*                                </div>*/}
          {/*                                <div className={'side-4'}>*/}
          {/*                                    <motion.div*/}
          {/*                                        className="side-1-text"*/}
          {/*                                        transition={{duration: 1.2}}*/}
          {/*                                        initial={{ y: -100,opacity: 0 }}*/}
          {/*                                        animate={{ y: '0', opacity: 1 }}*/}
          {/*                                        exit={{ y: -100, opacity: 0 }}*/}
          {/*                                    >*/}
          {/*                                        <div className={'detail-text'}>*/}
          {/*                                            <span>Design and implementation</span>*/}
          {/*                                            <span>How do you make a Refactor Project</span>*/}
          {/*                                            <Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>*/}
          {/*                                                LEARN MORE*/}
          {/*                                            </Button>*/}

          {/*                                        </div>*/}

          {/*                                    </motion.div>*/}
          {/*                                </div>*/}
          {/*                                /!*<div className={'detail-img'}>*!/*/}
          {/*                                    <motion.img*/}
          {/*                                        className="worker"*/}
          {/*                                        src={`${worker}`}*/}
          {/*                                        transition={{duration: 1, delay: 0.3 }}*/}
          {/*                                        initial={{ y: 0 ,x: '50vw', opacity: 1 }}*/}
          {/*                                        animate={{y: '0vw' , x: '0', opacity: 1,}}*/}
          {/*                                        exit={{ y: 0,x: '50vw', opacity: 1 }}>*/}
          {/*                                    </motion.img>*/}

          {/*                                /!*</div>*!/*/}

          {/*                            </motion.section>*/}
          {/*                        )}*/}
          {/*                    </AnimatePresence>*/}
          {/*                </div>*/}
          {/*            </Grid2>*/}
          {/*        </Grid2>*/}
          {/*    </div>*/}
          {/*    <AlertDialog*/}
          {/*        open={open}*/}
          {/*        onClose={() => setOpen(false)}*/}
          {/*        stepDialog={dialogText[stepDialog]}*/}
          {/*    />*/}
          {/*</div>*/}
          {/*<div className={'second-middle'} style={{background: 'black'}}>*/}
          {/*    /!*<div style={{display: 'flex', justifyContent:'center', fontSize: '7vw', fontWeight:'900'}}>SKILL</div>*!/*/}
          {/*          <div className="wrapper">*/}
          {/*              <div className="item item1">React.js</div>*/}
          {/*              <div className="item item2">Vue.js</div>*/}
          {/*              <div className="item item3">JavaScript</div>*/}
          {/*              <div className="item item4">Vuetify</div>*/}
          {/*              <div className="item item5">Material UI</div>*/}
          {/*              <div className="item item6">Node.js</div>*/}
          {/*              <div className="item item7">HTML</div>*/}
          {/*              <div className="item item8">CSS</div>*/}
          {/*          </div>*/}
          {/*          <div className="wrapper-1">*/}
          {/*              <div className="item-1 item1">Git</div>*/}
          {/*              <div className="item-1 item2">Postman</div>*/}
          {/*              <div className="item-1 item3">Figma</div>*/}
          {/*              <div className="item-1 item4">Python</div>*/}
          {/*              <div className="item-1 item5">Sql</div>*/}
          {/*              <div className="item-1 item6">UI/UX</div>*/}
          {/*              <div className="item-1 item7">Motion</div>*/}
          {/*              <div className="item-1 item8">Lottie</div>*/}
          {/*          </div>*/}

          {/*  </div>*/}
        </>
    )
}




const BaseCard = ({ page, handlePage }) => {
    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#EDFF20FF',
            color: '#000000',
            fontSize: '12px',
            borderRadius: '14px',
        },
        // [`& .${tooltipClasses.arrow}`]: {
        //     color: '#EDFF20FF',
        // },
    }));

    const menuBtn = [
        {title: 'ABOUT',icon: <PermIdentityIcon />},
        {title: 'WORKS', icon: <FeedIcon />},
        {title: 'contact', icon: <CodeIcon />},
    ]
    return(
        <>
            <Card className={'base-card'}>
                <div className={'bar'}>
                    <Paper className={'paper-style'}>
                        <MenuList style={{display: 'flex'}}>
                            {menuBtn.map((item, idx) => (
                                <MenuItem key={idx} >
                                    <ListItemIcon onClick={() => handlePage(item.title.toLocaleLowerCase())}>
                                        <CustomTooltip title={item.title} placement="bottom">
                                            <div  style={{color: '#EDFF20FF'}} fontSize="medium" >
                                                {item.icon}
                                            </div>
                                        </CustomTooltip>
                                    </ListItemIcon>
                                </MenuItem>
                            ))}
                        </MenuList>
                    </Paper>
                </div>
                <CardMedia
                    component="img"
                    alt="green iguana"
                    height="50%"
                    image={avatar}
                />
                <CardContent className={'card-content'} style={{height: '40%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                    <Lottie
                        animationData={animationData}
                        loop
                        autoplay
                        className={'lottie'}
                    />
                    <Typography className={'title-card'}>
                        Siavash Miralikhani
                    </Typography>
                    <Typography className={'body-card'}>
                        FRONT END DEVELOPER
                    </Typography>
                    <Typography sx={{ color: 'text.light' }}>
                        <GitHubIcon />
                        <LinkedInIcon />
                        <InstagramIcon />
                    </Typography>
                </CardContent>
                <CardActions className={'card-action'}>
                    <span>DOWNLOAD</span>
                    <Divider
                        className='divider'
                        orientation="vertical" flexItem />
                    <span>CONTACT ME</span>
                </CardActions>
            </Card>
        </>
    )
}
const DetailCard = () => {
    const derakExperience = {
        company: 'DERAK CLOUD',
        period: 'August 2022 - March 2025',
        data: [
            {
                title: 'Responsive Web Development',
                description:
                    'Design and development of a responsive version of the company website to deliver an improved user experience across mobile devices.',
            },
            {
                title: 'Mobile Feature Expansion',
                description:
                    'Added key functional sections, including service purchasing and renewal, optimized specifically for mobile devices.',
            },
            {
                title: 'Billing Optimization',
                description:
                    'Optimized the billing section to enhance performance and improve overall user experience on mobile platforms.',
            },
            {
                title: 'Advanced Filtering Systems',
                description:
                    'Implemented advanced filtering mechanisms tailored to the custom requirements of enterprise-level clients.',
            },
            {
                title: 'Analytics & Data Visualization',
                description:
                    'Designed and developed analytical charts and data visualizations for finance, human resources, and administrative support teams.',
            },
            {
                title: 'Financial & Technical R&D',
                description:
                    'Conducted research and development on financial and technical data analysis to present insights effectively within the user interface.',
            },
            {
                title: 'Front-End Refactoring & Optimization',
                description:
                    'Refactored and optimized critical sections of the front-end codebase, resolving bugs, removing redundant logic, and improving load times by up to 40%.',
            },
            {
                title: 'Onboarding System Design',
                description:
                    'Designed and implemented the onboarding process for new team members in the front-end and UI/UX departments.',
            },
            {
                title: 'Team Mentorship & Knowledge Transfer',
                description:
                    'Mentored and trained new employees by introducing project components, development workflows, and coding standards to accelerate onboarding and productivity.',
            },
            {
                title: 'Developer Training & Enablement',
                description:
                    'Provided hands-on training and experience transfer to reduce time-to-productivity for newly onboarded team members.',
            },
        ],
    }
    const parsExperience = {
        company: 'RAYAN PARS',
        period: 'May 2025 – October 2025',
        data : [
            {title : 'fsdf', description: 'Design and development of CRM and BI Dashboard website with Parallax Scroll and interactive animations. '},
            {title : 'sdfds', description: 'Development of the business intelligence analytics dashboard for sales, purchase, human resource and customer finance team'},
            {title : 'dsfdsf', description: 'Implementation of live charts and dashboards. There are manual KPIs and AI-generated KPIs with real-world data of the different businesses '},
        ]
    }
    const skillsData = [
        {
            title: 'Programming Languages',
            skills: [
                {skillName: 'JavaScript', value: 70},
                {skillName: 'HTML / CSS', value: 80},
                {skillName: 'Node.js', value: 60},
                {skillName: 'Python', value: 30},
            ]
        },
        {
            title: 'Frameworks / Libraries',
            skills: [
                {skillName: 'Vue.js', value: 70},
                {skillName: 'React.js', value: 40},
                {skillName: 'Next.js', value: 40},
                {skillName: 'Vuetify', value: 70},
                {skillName: 'Material UI', value: 80},
                {skillName: 'Motion.dev', value: 60},
                {skillName: 'Visx (Chart) ', value: 30},
                {skillName: 'bootstrap ', value: 30},
            ]
        }
    ]
    const myData = [
        {title: 'Age :', value: '30'},
        {title: 'Residence :', value: 'Iran'},
        {title: 'Freelance :', value: 'Available'},
        {title: 'Address :', value: 'Shiraz'},
    ]

    return(
        <>
            <Card className={'detail-card'}>
                <CardContent style={{marginTop: '1rem', overflow: 'hidden'}}>
                    <Typography gutterBottom  className={'typography'}>
                        <span style={{color: '#EDFF20FF'}}> A</span>bout Me
                    </Typography>
                    <Divider className='divider' />
                    <Grid2 container>
                        <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6}} style={{padding: '1rem', borderRight: '1px solid #2f2f33'}}>
                            <span style={{color: 'white'}}>I am Ryan Adlard, web designer from USA, California. I have rich experience in web site design and building and customization, also I am good at wordpress. I love to talk with you about our unique.</span>
                        </Grid2>
                        <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6}} style={{padding: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-around', color: 'white'}}>
                            {myData.map((item, idx) => (
                                <>
                                    <div key={idx} className='address-box'>
                                        <span style={{color: '#EDFF20'}}> {item.title}</span>
                                        <span> {item.value}</span>
                                    </div>
                                    <Divider className='divider' />
                                </>
                            ))}
                        </Grid2>
                    </Grid2>

                    <Typography gutterBottom marginTop={'3rem'} className={'typography'}>
                        <span style={{color: '#EDFF20FF'}}> S</span>ummary
                    </Typography>
                    <Divider className='divider' />
                    <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}} style={{padding: '1rem'}}>
                        <span style={{color: 'white'}}>
                            Front-End Developer with 3+ years of experience building responsive, user-friendly web applications using JavaScript, React (MUI), Vue2 (Vuetify), HTML, Bootstrap ,CSS. Skilled in translating UI/UX designs into highperformance interfaces. I am also highly responsible, detail-oriented, and skilled in project management, ensuring timely delivery of high-quality work.
                        </span>
                    </Grid2>

                    <Typography gutterBottom marginTop={'3rem'} className={'typography'}>
                        <span style={{color: '#EDFF20FF'}}> E</span>xperience
                    </Typography>
                    <Divider className='divider' />
                    <Grid2 container>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}} style={{padding: '1rem'}}>
                            <div className='experience-box'>
                                <span style={{color: '#ffffff', fontSize: '16px', fontWeight: 800}}>
                                  {derakExperience.company}
                                </span>
                                <span className='date-box'>
                                    {derakExperience.period}
                                </span>
                                <Grid2 container spacing={5} marginTop={3}>
                                    {derakExperience.data.map((text, index) => (
                                        <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6}} key={index}>
                                           <span style={{ color: 'white', fontWeight: 100, display: 'inline-flex' }}>
                                                <CircleIcon sx={{width: '10px', color: '#EDFF20FF'}}/>
                                             <span> {text.description}</span>
                                           </span>
                                            <Divider className='divider' style={{margin: '1rem'}}/>
                                        </Grid2>


                                    ))}

                                </Grid2>
                            </div>

                        </Grid2>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}} style={{padding: '1rem',}}>
                            <div className='experience-box'>
                                <span style={{color: 'white',fontWeight: 800}}>RAYAN PARS</span>
                                <span className='date-box'> May 2025 – October 2025</span>

                                {parsExperience.data.map((text, index) => (
                                    <>
                                         <span style={{ color: 'white', fontWeight: 100, display: 'inline-flex', marginTop: '1rem' }}>
                                              <CircleIcon sx={{width: '10px', color: '#EDFF20FF'}}/>
                                           <span> {text.description}</span>
                                         </span>
                                        <Divider className='divider' style={{margin: '1rem'}} />
                                    </>
                                ))}

                            </div>
                        </Grid2>
                    </Grid2>

                    <Typography gutterBottom marginTop={'3rem'} className={'typography'}>
                        <span style={{color: '#EDFF20FF'}}> M</span>y Skills
                    </Typography>
                    <Divider className='divider' />
                    <Grid2 container spacing={3} style={{padding: '1rem'}}>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                           <span style={{color: 'white',fontWeight: 500, display: 'inline-flex'}}>
                               <CodeIcon  sx={{color: '#EDFF20FF'}}/>
                               {skillsData[0].title}
                           </span>
                        </Grid2>
                        {skillsData[0].skills.map((item, idx) => (
                            <Grid2 key={idx} size={{xs: 6, sm: 3, md: 3, lg: 3}} className='skill-grid'>
                                <Box position="relative" width={100} height={100}>
                                    <Gauge
                                        width={100}
                                        height={100}
                                        value={item.value}
                                        style={{display: 'flex', justifySelf: 'center'}}
                                        sx={{
                                            '& text': {
                                                display: 'none',
                                            },
                                            [`& .${gaugeClasses.valueArc}`]: {
                                                fill: '#EDFF20FF',
                                            },
                                        }}
                                    />

                                    <Box
                                        position="absolute"
                                        top="50%"
                                        left="50%"
                                        sx={{
                                            transform: 'translate(-50%, -50%)',
                                            color: '#fff',
                                            fontSize: '14px',
                                            fontWeight: 600,
                                        }}
                                    >
                                        {item.value}%
                                    </Box>
                                </Box>
                                <span style={{color: "white"}}>{item.skillName}</span>
                            </Grid2>
                        ))}
                    </Grid2>

                    <Divider className='divider' />
                    <Grid2 container spacing={3} style={{padding: '1rem'}}>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                            <span style={{color: 'white',fontWeight: 500, display: 'inline-flex'}}>
                                <LibraryBooksIcon  sx={{color: '#EDFF20FF'}}/>
                                {skillsData[1].title}
                            </span>
                        </Grid2>
                        {skillsData[1].skills.map ((item, idx) => (
                            <Grid2 size={{xs: 12, sm: 6, md: 6, lg: 6}} key={idx} style={{ height: 20, }}>
                                <span style={{color: 'white'}}>{item.skillName}</span>
                                <BorderLinearProgress variant="determinate" value={item.value} />
                            </Grid2>
                        ))}
                    </Grid2>

                </CardContent>
            </Card>
        </>
    )
}
const WorksPage = () =>{
    return(
        <Card sx={{pointerEvents: "none", overflow: 'hidden',height: '75vh', background: 'transparent', borderRadius: '12px',border: '1px solid #53535b'}} className={''}>
            <CardContent style={{position: 'relative', height: '99%'}}>
                <Box
                    sx={{
                        position: "absolute",
                        // border: '2px solid red',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        backdropFilter: "blur(4px)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        zIndex: 2,
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{ color: "#EDFF20FF", letterSpacing: 2, fontWeight: 800, fontSize: '24px'}}
                    >
                        Coming Soon ...
                    </Typography>
                </Box>

                {/* Card Content */}
                <Box
                    sx={{
                        filter: "blur(2px)",
                        opacity: 0.6,
                    }}
                >
                <Typography gutterBottom  className={'typography'}>
                    <span style={{color: '#EDFF20FF'}}>W</span>orks
                </Typography>
                    <Divider className='divider' />
                <Grid2 container spacing={2} style={{marginTop: '3rem'}}>
                    <Grid2 size={{xs: 12, sm: 6, md: 6, lg: 6}} style={{color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card sx={{maxWidth: 345 , background: 'black', color: '#ffff'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={web1}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 6, lg: 6}} style={{color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card sx={{ maxWidth: 345 , background: 'transparent', color: 'white'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={web2}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 6, lg: 6}} style={{color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card sx={{ maxWidth: 345 , background: 'transparent', color: 'white'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={web3}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 6, md: 6, lg: 6}} style={{color: 'white',display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <Card sx={{ maxWidth: 345 , background: 'transparent', color: 'white'}}>
                            <CardMedia
                                component="img"
                                alt="green iguana"
                                height="140"
                                image={web4}
                            />
                            <CardContent>
                                <Typography variant="body2" sx={{ color: 'white' }}>
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid2>
                </Grid2>
                </Box>
            </CardContent>
        </Card>
    )
}
const ContactPage = () => {
    return (
        <Card sx={{pointerEvents: "none", overflowY: 'hidden'}} className={'detail-card'}>
            <CardContent>
                <Typography gutterBottom  className={'typography'}>
                    <span style={{color: '#EDFF20FF'}}> C</span>ontact
                    <Divider className='divider' />
                </Typography>

                <Grid2 container spacing={2}>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                            <div style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                                <span>Address  : </span>
                                <span>California, USA</span>
                            </div>

                        </Grid2>

                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                            <div style={{color: 'white',display: 'flex', justifyContent: 'space-between'}}>
                                <span>Phone : </span>
                                <span>+98 912 49 49 401 </span>
                            </div>
                        </Grid2>
                        <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                            <div style={{color: 'white',display: 'flex', justifyContent: 'space-between'}}>
                                <span>Phone : </span>
                                <span>+98 912 49 49 401 </span>
                            </div>
                        </Grid2>
                    </Grid2>

            </CardContent>
        </Card>
    )
}