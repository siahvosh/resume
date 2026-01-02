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
    Typography, useMediaQuery
} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import LinearProgress from '@mui/material/LinearProgress';
import {useEffect, useRef, useState} from "react";
import AlertDialog from '../../component/dialog/experience'
import { styled } from '@mui/material/styles';
import { tooltipClasses } from '@mui/material/Tooltip';
import Lottie from "lottie-react";



import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpg";
import web4 from "../../assets/background.jpg";
import shirazMap from "../../assets/shiraz.png";

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
    const isTabletOrMobile = useMediaQuery('(max-width: 1200px)');
    const [page, setPage] = useState('about')
    const [loading, setLoading] = useState(false)
    const handlePage = (page) =>{
        setPage(page)
    }
    setTimeout(() => {
        setLoading(true)
    }, 5000);


    return (
        <>
            { !loading ? (
                <Loading/>

            ) :
            (
              <div className={'container'}>
                  <div className={'resume-container'}>
                      <Grid2 container style={{display: 'flex', alignItems: 'center'}}>
                          {/*//BaseCard*/}
                          <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{zIndex: '1'}}>
                              <BaseCard page={page} handlePage={handlePage}/>
                          </Grid2>

                          {/*//DetailCard*/}
                          <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{zIndex: '0'}}>
                              {/*mobile version*/}
                              {isTabletOrMobile ? (
                                  <>
                                    <DetailCard />
                                    <WorksPage />
                                    <ContactPage />
                                  </>
                              ) :
                               // monitor version
                              (
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
                              )}
                          </Grid2>
                      </Grid2>
                  </div>
              </div>
            )}


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
      <Card className={'base-card'}>
           <div className={'bar'}>
               <Paper className={'paper-style'}>
                   <MenuList style={{display: 'flex'}}>
                       {menuBtn.map((item, idx) => (
                           <MenuItem key={idx} >
                               <ListItemIcon  onClick={() => handlePage(item.title.toLocaleLowerCase())}>
                                   <CustomTooltip title={item.title} placement="bottom">
                                       <div style={{color: '#EDFF20FF'}}>
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
               sx={{ height: '50%' }}
               image={avatar}
           />
           <CardContent className={'card-content'}>
               <Lottie
                   animationData={animationData}
                   loop
                   autoplay
                   className={'lottie'}
               />
               <Typography className={'base-card-title'}>
                   Siavash Miralikhani
               </Typography>
               <Typography className={'base-card-body'}>
                   FRONT END DEVELOPER
               </Typography>
               <Typography sx={{ color: 'text.light' }}>
                   <GitHubIcon fontSize={'small'}/>
                   <LinkedInIcon fontSize={'small'}/>
                   <InstagramIcon fontSize={'small'}/>
               </Typography>
           </CardContent>
           <CardActions className={'card-action'}>
               <span className='action-btn'>DOWNLOAD</span>
               <Divider
                   className='divider'
                   orientation="vertical" flexItem />
               <span className='action-btn'>CONTACT ME</span>
           </CardActions>
      </Card>
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
    )
}
const WorksPage = () =>{
    return(
        <Card sx={{pointerEvents: "none", overflow: 'hidden', position: 'relative'}} className={'detail-card'} >
            <CardContent style={{position: 'relative',marginTop: '1rem',}}>
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
    const contactData = [
        {title: 'Address :', value: 'Shiraz, Iran'},
        {title: 'Phone :', value: '+98 912 49 49 401'},
        {title: 'Email :', value: 'gtsiavash@gmail.com'},
        {title: 'Freelance :', value: 'Available'},
    ]
    return (
        <Card sx={{position: 'relative'}} className={'detail-card'}>
            <CardContent style={{marginTop: '1rem', overflow: 'hidden'}}>
                <Typography gutterBottom  className={'typography'}>
                    <span style={{color: '#EDFF20FF'}}> C</span>ontact
                    <Divider className='divider' />
                </Typography>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d221932.55854063891!2d52.5317723!3d29.641564849999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1767216329883!5m2!1sen!2sus"
                    width="95%"
                    height="300"
                    style={{ border: 0,  padding: '1rem'}}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                    title="Google Map"
                />
                <Grid2 container spacing={2} style={{padding: '1rem', marginTop: '1.5rem'}}>
                    {
                        contactData.map((item, isx) => (

                            <Grid2 size={{xs: 12, sm: 12, md: 6, lg: 6}}>
                                <div style={{color: 'white', display: 'flex', justifyContent: 'space-between'}}>
                                    <span style={{color: '#EDFF20FF'}}>{item.title}</span>
                                    <span>{item.value}</span>
                                </div>
                                <Divider className='divider' style={{margin: '0.5rem'}}/>
                            </Grid2>


                        ))
                    }
                    </Grid2>
            </CardContent>
        </Card>
    )
}