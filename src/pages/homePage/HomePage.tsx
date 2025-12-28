import {
    Box,
    Button, Card, CardActions, CardContent, CardMedia,
    Divider,
    Grid2,
    ListItem,
    ListItemIcon,
    ListItemText,
    MenuList,
    Paper, Tooltip,
    Typography
} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import AlertDialog from '../../component/dialog/experience'
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import Lottie from "lottie-react";


import img from "../../assets/phone1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
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
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';


import './HomePage.css'
import './../../App.css'
import * as React from "react";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import MenuItem from "@mui/material/MenuItem";


export const HomePage = () => {
    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props} arrow classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#fa0b0b',
            color: '#fff',
            fontSize: '12px',
            borderRadius: '14px',
        },
        [`& .${tooltipClasses.arrow}`]: {
            color: '#f10404',
        },
    }));


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
          <div className={'cont-1'}>
              <div className={'resume-container'}>
                  <Grid2 container style={{display: 'flex', alignItems: 'center'}}>
                      <Grid2 size={{xs: 12, sm: 12, md: 1, lg: 1}}>
                          <div className={'bar'}>
                              <Paper className={'paper-style'} sx={{border: '1px solid gray', width: 65 }}>
                                  <MenuList>
                                      <MenuItem>
                                          <ListItemIcon>
                                              <CustomTooltip title="ABOUT" placement="right">
                                                  <PermIdentityIcon style={{color: 'white'}} fontSize="large" />
                                              </CustomTooltip>
                                          </ListItemIcon>
                                      </MenuItem>
                                      <MenuItem>
                                          <ListItemIcon>
                                              <CustomTooltip title="RESUME" placement="right">
                                                  <FeedIcon style={{color: 'white'}} fontSize="large" />
                                              </CustomTooltip>
                                          </ListItemIcon>
                                      </MenuItem>
                                      <MenuItem>
                                          <ListItemIcon>
                                              <CustomTooltip title="WORKS" placement="right">
                                                  <CodeIcon style={{color: 'white'}} fontSize="large" />
                                              </CustomTooltip>
                                          </ListItemIcon>
                                      </MenuItem>
                                      {/*<Divider />*/}

                                  </MenuList>
                              </Paper>
                          </div>
                      </Grid2>
                      <Grid2 size={{xs: 12, sm: 12, md: 5, lg: 5}}>
                              <Card className={'base-card'} sx={{ maxWidth: '100%', height: '80vh '}}>
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
                                      <Typography className={'title-card'}  >
                                          Siavash Miralikhani
                                      </Typography>
                                      <Typography className={'body-card'} sx={{ color: 'text.light' }}>
                                           FRONT END DEVELOPER
                                      </Typography>
                                      <Typography sx={{ color: 'text.light' }}>
                                          <GitHubIcon />
                                          <LinkedInIcon />
                                          <InstagramIcon />
                                      </Typography>
                                  </CardContent>
                                  <CardActions style={{border :'2px solid red'}}>
                                      <span >fsdfdsfd</span>
                                      <span>Learn More</span>
                                  </CardActions>
                              </Card>

                      </Grid2>
                      <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6}}>
                          <div className={'detail-card'}></div>
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
          <div className={'middle'}>
              <div className={'middle-text'}>
                  <span className={'mid-text'}>
                      SUMMARY
                  </span>
                  <h1 className={'mid-text-description'} >
                        Front-End Developer with 3+ years of experience building responsive, user-friendly web applications using
                        JavaScript, React (MUI), Vue2 (Vuetify), HTML, Bootstrap ,CSS. Skilled in translating UI/UX designs into highperformance interfaces. I am also highly responsible, detail-oriented, and skilled in project management,
                        ensuring timely delivery of high-quality work.
                  </h1>
              </div>
          </div>
          <div className={'cont-2'}  ref={cont2Ref}>
              <div className={'scroll-box'}>
                  <Grid2 container spacing={1}>
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                          <div className={'experience-title-box'}>
                             <span className={'experience-title'}>
                                 EXPERIENCE
                             </span>
                          </div>
                      </Grid2>
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                          <div className="container-animation">
                              <AnimatePresence mode="wait">
                                  {activeIndex === 0 && (
                                      <motion.section
                                          key="one"
                                          className=""
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 1 }}
                                      >
                                        <div className={'side-1'}>
                                            <motion.div
                                                className="side-1-text"
                                                transition={{duration: 1.2}}
                                                initial={{ y: -100,opacity: 0 }}
                                                animate={{ y: '0', opacity: 1 }}
                                                exit={{ y: -100, opacity: 0 }}
                                            >
                                                <div className={'detail-text'}>
                                                        <span>RESPONSIVE PAGE</span>
                                                        <span>How do you make a website responsive</span>
                                                        <Button color='white' variant={'text'} size={"small"} onClick={() => handleDialog(0, true)}>
                                                            LEARN MORE
                                                        </Button>

                                                    </div>
                                            </motion.div>
                                        </div>
                                        <div className={'side-2'}>
                                            <motion.div
                                                className="img-1"
                                                transition={{duration: 1.2 }}
                                                initial={{ y: 700, opacity: 1 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 500, opacity: 1 }}
                                           />
                                        </div>
                                        <motion.img
                                            className="phone-img"
                                            src={`${phone}`}
                                            transition={{duration: 1, delay: 0.3 }}
                                            initial={{ y: 800 ,x: '0vw', opacity: 1 }}
                                            animate={{ x: '0vw', opacity: 1, y: 0 }}
                                            exit={{ y: 800,x: '0vw', opacity: 1 }}>
                                        </motion.img>
                                        <div className="rock-1">
                                            <motion.img
                                                src={rock1}
                                                style={{width: '80px'}}
                                                initial={{ y: 800, x: '0vw', opacity: 1 }}
                                                animate={{ y: 0, opacity: 1 }}
                                                exit={{ y: 800, x: '0vw', opacity: 1 }}
                                                transition={{ duration: 1, delay: 0.4 }}
                                            />
                                        </div>
                                        <div className="rock-2">
                                            <motion.img
                                                src={`${rock2}`}
                                                style={{width: '60px'}}
                                                transition={{duration: 1.1, delay: 0.4 }}
                                                initial={{ y: '50vh', opacity: 1 }}
                                                animate={{ y: '0vw', opacity: 1 }}
                                                exit={{ y: '50vh', opacity: 1 }}>
                                            </motion.img>
                                        </div>
                                        <div className="rock-3">
                                              <motion.img
                                                  src={`${rock3}`}
                                                  style={{width: '70px'}}
                                                  transition={{duration: 1.1, delay: 0.4 }}
                                                  initial={{ y: '50vh', opacity: 1 }}
                                                  animate={{ y: '0vw', opacity: 1,}}
                                                  exit={{ y: '50vh', opacity: 1 }}>
                                              </motion.img>
                                          </div>
                                        {/*</div>*/}
                                      </motion.section>
                                  )}
                                  {activeIndex === 1 && (
                                      <motion.section
                                          key="two"
                                          className=""
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 1 }}
                                      >
                                          <div className={'side-3'}>
                                              <motion.div
                                                  className="img-2"
                                                  transition={{duration: 1.2 }}
                                                  // initial={{ width: '0' , height: '100%'}}
                                                  // animate={{ width: "100%", height: '100%'}}
                                                  // exit={{ width: '0', height: '100%' }}
                                                  initial={{ x: -1000, opacity: 1 }}
                                                  animate={{ x: 0, opacity: 1 }}
                                                  exit={{ y: -500, opacity: 1 }}
                                              />
                                          </div>
                                          <div className={'side-4'}>
                                              <motion.div
                                                  className="side-1-text"
                                                  transition={{duration: 1.2}}
                                                  initial={{ y: -100,opacity: 0 }}
                                                  animate={{ y: '0', opacity: 1 }}
                                                  exit={{ y: -100, opacity: 0 }}
                                              >
                                                  <div className={'detail-text'}>
                                                      <span>Design and implementation</span>
                                                      <span>How do you make a Refactor Project</span>
                                                      <Button color={'white'} variant={'text'} size={"small"} onClick={() => handleDialog(1, true)}>
                                                          LEARN MORE
                                                      </Button>

                                                  </div>

                                              </motion.div>
                                          </div>
                                          {/*<div className={'detail-img'}>*/}
                                              <motion.img
                                                  className="worker"
                                                  src={`${worker}`}
                                                  transition={{duration: 1, delay: 0.3 }}
                                                  initial={{ y: 0 ,x: '50vw', opacity: 1 }}
                                                  animate={{y: '0vw' , x: '0', opacity: 1,}}
                                                  exit={{ y: 0,x: '50vw', opacity: 1 }}>
                                              </motion.img>

                                          {/*</div>*/}

                                      </motion.section>
                                  )}
                              </AnimatePresence>
                          </div>
                      </Grid2>
                  </Grid2>
              </div>
              <AlertDialog
                  open={open}
                  onClose={() => setOpen(false)}
                  stepDialog={dialogText[stepDialog]}
              />
          </div>
          <div className={'second-middle'} style={{background: 'black'}}>
              {/*<div style={{display: 'flex', justifyContent:'center', fontSize: '7vw', fontWeight:'900'}}>SKILL</div>*/}
                    <div className="wrapper">
                        <div className="item item1">React.js</div>
                        <div className="item item2">Vue.js</div>
                        <div className="item item3">JavaScript</div>
                        <div className="item item4">Vuetify</div>
                        <div className="item item5">Material UI</div>
                        <div className="item item6">Node.js</div>
                        <div className="item item7">HTML</div>
                        <div className="item item8">CSS</div>
                    </div>
                    <div className="wrapper-1">
                        <div className="item-1 item1">Git</div>
                        <div className="item-1 item2">Postman</div>
                        <div className="item-1 item3">Figma</div>
                        <div className="item-1 item4">Python</div>
                        <div className="item-1 item5">Sql</div>
                        <div className="item-1 item6">UI/UX</div>
                        <div className="item-1 item7">Motion</div>
                        <div className="item-1 item8">Lottie</div>
                    </div>

            </div>
        </>
    )
}

