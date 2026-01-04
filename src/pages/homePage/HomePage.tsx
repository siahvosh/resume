//REACT-----------------------------------------------
import {useState} from "react";
import * as React from "react";

//ANIMATIONS-----------------------------------------------
import {AnimatePresence, motion, transform} from "framer-motion";
import Lottie from "lottie-react";

//IMAGES-----------------------------------------------
import web1 from "../../assets/web1.jpg";
import web2 from "../../assets/web2.jpg";
import web3 from "../../assets/web3.jpg";
import web4 from "../../assets/background.jpg";
import avatar from '../../assets/background.jpg'

//ICONS-----------------------------------------------
import CodeIcon from '@mui/icons-material/Code';
import SendIcon from '@mui/icons-material/Send';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleIcon from '@mui/icons-material/Circle';
import WindowIcon from '@mui/icons-material/Window';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';

//FILE-----------------------------------------------
import './HomePage.css'
import './../../App.css'
import animationData from "../../lottie/circle.json";

//MATERIAL UI-----------------------------------------------
import { styled } from '@mui/material/styles';
import {Gauge, gaugeClasses} from "@mui/x-charts";
import DialogTitle from "@mui/material/DialogTitle";
import { tooltipClasses } from '@mui/material/Tooltip';
import LinearProgress from '@mui/material/LinearProgress';
import DialogContentText from "@mui/material/DialogContentText";
import { linearProgressClasses } from '@mui/material/LinearProgress';
import {
    Avatar,
    Badge,
    Box,
    Button, Card, CardActions, CardContent, CardMedia, Dialog, DialogActions, DialogContent,
    Divider,
    Grid2, List,
    ListItem, ListItemAvatar, ListItemButton,
    Slide, Tooltip,
    Typography, useMediaQuery
} from "@mui/material";


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
const Transition = React.forwardRef(function Transition(props: TransitionProps & {
    children: React.ReactElement<any, any>; }, ref: React.Ref<unknown>,) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const HomePage = () => {
    const isTabletOrMobile = useMediaQuery('(max-width: 1200px)');
    const [activeIndex, setActiveIndex] = useState('ABOUT');
    const [page, setPage] = useState('about')
    const menuBtn = [
        {title: 'ABOUT',icon: <PermIdentityIcon />, badgeContent: 0},
        {title: 'WORKS', icon: <WindowIcon />, badgeContent: 4},
        {title: 'CONTACT', icon: <ContactPageOutlinedIcon />, badgeContent: 0},
    ]

    const handlePage = (page) =>{
        setPage(page)
    }
    const handleClick = (title: string) => {
        console.log({})
        setActiveIndex(title);
        handlePage(title.toLowerCase());
    };

    const CustomTooltip = styled(({ className, ...props }) => (
        <Tooltip {...props}  classes={{ popper: className }} />
    ))(() => ({
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: '#EDFF20FF',
            color: '#000000',
            fontSize: '12px',
            borderRadius: '14px',
        },
    }));
     return (
      <div className={'container'}>
          <div className={'resume-container'}>
              <Grid2 container style={{display: 'flex', alignItems: 'center'}}>
                  {/*menu*/}
                  <div style={{position: 'relative'}}>
                      <div className={'bar'}>
                          {menuBtn.map((item, idx) => (
                              <div
                                  key={idx}
                                  onClick={() => handleClick(item.title)}
                                  style={{color: activeIndex === item.title ? '#EDFF20FF' : '#ffffff', cursor: "pointer", fontSize: 'x-large'}}
                              >
                                  <Badge badgeContent={item.badgeContent} >
                                    <CustomTooltip title={item.title} placement="right">
                                      {item.icon}
                                    </CustomTooltip>
                                  </Badge>
                              </div>
                          ))}
                      </div>
                  </div>
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
                                  initial={{ x: '-100%', opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: '-100%', opacity: 0 }}
                              >
                                  <DetailCard />
                              </motion.div>
                          )}

                          {page === 'works' && (
                              <motion.div
                                  key="works"
                                  transition={{ duration: 0.8 }}
                                  initial={{ x: '-100%', opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: '-100%', opacity: 0 }}
                              >
                                  <WorksPage />
                              </motion.div>
                          )}
                          {page === 'contact' && (
                              <motion.div
                                  key="contact"
                                  style={{position: 'relative'}}
                                  transition={{ duration: 0.8 }}
                                  initial={{ x: '-100%', opacity: 0 }}
                                  animate={{ x: 0, opacity: 1 }}
                                  exit={{ x: '-100%', opacity: 0 }}
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
    )
}
const BaseCard = ({ page, handlePage }) => {
    return(
      <Card className={'base-card'}>
           <CardMedia
               component="img"
               alt="green iguana"
               sx={{ height: '40vh' }}
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

               <Typography className={'social-icon'}>
                   <a
                       className='git-icon'
                       href="https://github.com/siahvosh"
                       target="_blank"
                       rel="noopener noreferrer"
                   >
                        <GitHubIcon />
                   </a>
                   <a
                      className='linkedin-icon'
                      href="https://linkedin.com/in/siavash-miralikhani-a4940b243/"
                      target="_blank"
                      rel="noopener noreferrer"
                   >
                        <LinkedInIcon/>
                   </a>
                   <a
                       className='linkedin-icon'
                       href="https://instagram.com/siavash-miralikhani"
                       target="_blank"
                       rel="noopener noreferrer"
                   >
                        <InstagramIcon />
                   </a>
               </Typography>
           </CardContent>
           <CardActions className={'card-action'}>
               <span className='action-btn'>
                   DOWNLOAD
                   <CloudDownloadIcon fontSize={"small"} style={{margin: '1px 0 0 5px'}}/>
               </span>
               <Divider
                   className='divider'
                   orientation="vertical" flexItem />
               <span className='action-btn'>
                    <AlertDialogSlide/>
               </span>
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
            {title : '1', description: 'Design and development of CRM and BI Dashboard website with Parallax Scroll and interactive animations. '},
            {title : '2', description: 'Development of the business intelligence analytics dashboard for sales, purchase, human resource and customer finance team'},
            {title : '3', description: 'Implementation of live charts and dashboards. There are manual KPIs and AI-generated KPIs with real-world data of the different businesses '},
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
        },
        {
            title: 'Knowledge',
            skills: [
                'Git',
                'Postman',
                'NPM / Yarn',
                'Webpack / Vite',
                'Jira',
                'MongoDB',
                'Figma',
                'Jest',
                'Illustrator',
                'Restful API',
                'React Chart',
                'Redux'
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
                      <span style={{color: 'white'}}>I am Siavash Mir, front-end developer from Iran, Shiraz. I have strong experience in front-end development, creating responsive websites with smooth animations and modern UI interactions. I specialize in building dynamic, user-friendly interfaces and optimizing websites for different devices and screen sizes.</span>
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

              <Divider className='divider'  style={{marginTop: '1rem'}}/>
              <Grid2 container spacing={3} style={{padding: '1rem'}}>
                  <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
                      <span style={{color: 'white',fontWeight: 500, display: 'inline-flex'}}>
                          <SchoolOutlinedIcon  sx={{color: '#EDFF20FF'}}/>
                          {skillsData[2].title}
                      </span>
                  </Grid2>
                  {skillsData[2].skills.map ((item, idx) => (
                      <Grid2 size={{xs: 6, sm: 3, md: 3, lg: 3}} key={idx} style={{ height: 20, }}>
                          <span style={{color: 'white', display: 'inline-flex'}}>
                              <CheckOutlinedIcon style={{color: '#EDFF20FF', fontWeight: 'bold'}}/>
                              {item}
                          </span>
                          {/*<BorderLinearProgress variant="determinate" value={item.value} />*/}
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
const AlertDialogSlide = () => {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const contactDetail = [
        {title: 'CALL', value: '09124949401', icon: <CallIcon/>, ref: 'tel:09124949401'},
        {title: 'MESSAGE', value: '09124949401', icon: <SendOutlinedIcon/>, ref: 'sms:09124949401'},
        {title: 'MAIL', value: 'gtsiavash@gmail.com', icon: <EmailIcon/>, ref: 'https://mail.google.com/mail/?view=cm&fs=1&to=GTSIAVASH@gmail.com&su=Contact%20from%20website&body=Hi%20Siavash,%0A%0AI\'m%20contacting%20you%20through%20your%20website.'},
        {title: 'WHATS APP', value: '09124949401', icon: <WhatsAppIcon/>,ref: 'whatsApp:09124949401'},
    ]

    return (
        <>
            <span style={{display: 'inline-flex'}} onClick={handleClickOpen}>
                CONTACT ME
                <SendIcon fontSize={"small"} style={{margin: '0px 0 0 5px', transform: 'rotate(-30deg)'}}/>
            </span>
            <Dialog
                open={open}
                slots={{
                    transition: Transition,
                }}
                keepMounted
                style={{ opacity: 0.9}}
                sx={{
                    background: '#000000',
                    '& .MuiPaper-root': {
                        background: '#000000',

                    },
                    '& .MuiBackdrop-root': {
                        backgroundColor: 'transparent',
                    },
                    '& .MuiDialog-paper': {
                        // height: '50vh',
                        // maxHeight: '50vh',
                        // overflow: 'hidden'
                    },

                }}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={{color: 'white',  fontSize: '40px'}}>
                    <span style={{color: '#EDFF20FF',}}> C</span>ontact
                </DialogTitle>
                <Divider className={'divider'}/>
                <DialogContent >
                    <DialogContentText id="alert-dialog-slide-description">
                        <List sx={{ pt: 0, color: 'white'}}>
                            {contactDetail.map((item, idx) => (
                                <ListItem disablePadding key={idx}>
                                    <a href={`${item.ref}`}>
                                        <ListItemButton>
                                            <ListItemAvatar>
                                                <Avatar sx={{ background: 'black', color: '#EDFF20FF' }}>
                                                    {item.icon}
                                                </Avatar>
                                            </ListItemAvatar>
                                            <span style={{ fontSize: '30px'}}>
                                            {item.title}
                                        </span>
                                        </ListItemButton>
                                    </a>
                                </ListItem>
                            ))}
                        </List>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button style={{color: 'white', border: "none"}} onClick={handleClose}>CLOSE</Button>
                </DialogActions>
            </Dialog>
        </>
    );
}





