import {Box, Button, Grid2, ListItem} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import img from "../../assets/phone1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/2x/Asset 9@2x.png";
import img6 from "../../assets/4x/dot2.png";
import img7 from "../../assets/2x/Asset 9@2x.png";
import img8 from "../../assets/2x/Asset 9@2x.png";
import bgImg from "../../assets/bgnew.jpg";
import videoCode from "../../assets/videoCode.mp4";

import Lottie from "lottie-react";
import animationData from "../../lottie/circle.json";

import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import './HomePage.css'
import './../../App.css'
import {useNavigate} from "react-router-dom";
import {Grid} from "@visx/visx";
import {Tollbar} from "../../component/tollbar/Tollbar";



export const HomePage = () => {
    const [rotate, setRotate] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e) => {
        const x = (window.innerWidth / 2 - e.clientX) / 25;
        const y = (window.innerHeight / 2 - e.clientY) / 25;
        setRotate({ x, y });
    };


    const [activeIndex, setActiveIndex] = useState(0);
    const cont2Ref = useRef(null);
    const navigate = useNavigate();
    const [stepperDetail] = useState([
        {title: 'Responsive', description: '- Design and development of a responsive version of the company website for a better user experience on mobile devices\n' +
                '- Add key additional sections( buy and renewal of services) of the website on mobile devices\n' +
                '- Optimizing the billing section in performance and user experience of the website on mobile devices\n', image: `${img}`, image1: `${img5}`, path: '/section1'},
        {title: 'Refactor UI Project', description: '- Refactoring and optimizing significant sections of the front-end project\n' +
                '\n' +
                '-\tSolving different issues and code bugs, eliminate redundant functions, optimizing load times by up to 40%\n', image: `${img2}`, image1: `${img6}`, path: '/section2'},
        {title: 'Onboarding', description: '- Design and implementation of the onboarding process for new employees in front-end and UI/UX team  \n' +
                '\n' +
                '- Introducing new members to various components of the project, development workflows, and coding standards to accelerate integration and productivity.\n' +
                '\n' +
                '- Training new employees, transferring the hands-on experience to reduce time-to-productivity for new team members.\n', image: `${img3}`, image1: `../../assets/dot.png`, path: '/section3'},
        {title: 'BI Dashboard', description: '-Development of the business intelligence analytics dashboard for sales, purchase, human resource, customer finance team\n' +
                '\n' +
                '-\tImplementation of live charts and dashboards. There are manual KPIs and AI generated KPIs with real word data of the different businesses\n', image: `${img4}`, image1: `../../assets/dot.png`, path: '/section4'},
        {title: 'End', description: 'Axis independently, without needing Lorem ipsum dolor sit amet.', image: `${img4}`, image1: `../../assets/dot.png`, path: '/section5'},
    ]);

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



    const detailHandler = (idx: any) => {
        console.log({idx:idx})
        setActiveIndex(idx);
    }

    const handelNav = (path: any) => {
        // console.log(path);
        navigate(path);
    }

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



    return (
        <>
          <div className={'cont-1'}>
              <Lottie
                  animationData={animationData}
                  loop
                  autoplay
                  className={'lottie'}
              />

              <div className={'card'}>
                  <span className={'front-end'}>FRONT-END <span className={'dev'} style={{color: '#EEB491'}}>DEVELOPER</span></span>
                  <span className={'name'}>SIAVASH MIRALIKHANI</span>
                  <div className={'contact'}>
                      <CallIcon style={{fontSize: "clamp(12px, 2vw, 1.8vw)"}}/>
                         <a href="tel:+989124949401"> +98 912 49 49 401 | </a>
                      <EmailIcon style={{fontSize: "clamp(12px, 2vw,  1.8vw)"}}/>
                      <a
                          href="https://mail.google.com/mail/?view=cm&fs=1&to=GTSIAVASH@gmail.com&su=Contact%20from%20website&body=Hi%20Siavash,%0A%0AI'm%20contacting%20you%20through%20your%20website."
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          GTSIAVASH@gmail.com
                      </a>
                      <LocationOnIcon style={{fontSize: "clamp(12px, 2vw, 1.8vw)"}}/>
                          <a
                              href="https://www.google.com/maps/search/?api=1&query=Shiraz"
                               target="_blank"
                               rel="noopener noreferrer">SHIRAZ</a>
                  </div>
                  <div className={'social'}>
                      <GitHubIcon sx={{fontSize: '30px'}}/>
                      <LinkedInIcon sx={{fontSize: '30px'}}/>
                      <InstagramIcon sx={{fontSize: '30px'}}/>
                  </div>
              </div>
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
                                          className="container-animation"
                                          initial={{ opacity: 0 }}
                                          animate={{ opacity: 1 }}
                                          exit={{ opacity: 1 }}
                                      >
                                        <div className={'side-1'}>
                                            <motion.div
                                                className="side-1-text"
                                                style={{height: '30vh'}}
                                                transition={{duration: 1.2}}
                                                initial={{ y: -100,opacity: 0 }}
                                                animate={{ y: '0', opacity: 1 }}
                                                exit={{ y: -100, opacity: 0 }}
                                            >
                                                    <div className={'detail-text'}>
                                                        <span>RESPONSIVE PAGE</span>
                                                        <span>How do you make a website responsive</span>
                                                        <span>learn more</span>

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
                                        <div className={'detail-img'}>
                                            <motion.div
                                                className="phone-img"
                                                transition={{duration: 1, delay: 0.3 }}
                                                initial={{ y: 800 ,x: '20vw', opacity: 1 }}
                                                animate={{ x: '20vw', opacity: 1, y: 0 }}
                                                exit={{ y: 800,x: '20vw', opacity: 1 }}>
                                            </motion.div>

                                        </div>

                                      </motion.section>
                                  )}
                                  {activeIndex === 1 && (
                                      <motion.section
                                          key="two"
                                          className="container-animation"
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
                                                  style={{height: '30vh'}}
                                                  transition={{duration: 1.2}}
                                                  initial={{ y: -100,opacity: 0 }}
                                                  animate={{ y: '0', opacity: 1 }}
                                                  exit={{ y: -100, opacity: 0 }}
                                              >
                                                  <div className={'detail-text'}>
                                                      <span>Project Refactor</span>
                                                      <span>How do you make a Refactor Project</span>
                                                      <span>learn more</span>

                                                  </div>
                                              </motion.div>
                                          </div>
                                          <div className={'detail-img'}>
                                              <motion.div
                                                  className="worker"
                                                  transition={{duration: 1, delay: 0.3 }}
                                                  initial={{ y: 0 ,x: '100vw', opacity: 1 }}
                                                  animate={{y: '0vw' , x: '20vw', opacity: 1,}}
                                                  exit={{ y: 700,x: '20vw', opacity: 1 }}>
                                              </motion.div>

                                          </div>

                                      </motion.section>
                                  )}
                              </AnimatePresence>
                          </div>
                      </Grid2>
                  </Grid2>
              </div>
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




// <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
//     <div className={'text-box-animation'}>
//         <div style={{width: '45vw'}}>
//             {stepsVisuals.map((item, index) => (
//                 <div key={index} onClick={() => detailHandler(index)}>
//                     <div key={index} onClick={() => setActiveIndex(index)}>
//                                             <span className={`text-title ${activeIndex === index ? 'active' : ''}`}>
//                                                 {item.title}
//                                             </span>
//                         <div style={{ flexDirection: 'column'}} className={`details ${activeIndex === index ? 'show' : ''}`}>
//                             {item.description}
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     </div>
// </Grid2>
// <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 12}}>
//     <div className={'images-box'}>
//         <AnimatePresence>
//             {stepsVisuals.slice(0, activeIndex + 1).map((item, index) => (
//                 <motion.img
//                     key={item.id}
//                     src={item.background.src}
//                     alt=""
//                     className="img"
//                     style={{
//
//                         // marginTop: -10,
//                         // zIndex: index,
//                         skewX: 0,
//                     }}
//                     initial={{
//                         opacity: 0,
//                         scale: 1,
//                         rotate: 0,
//                         skewX: 0,
//                         translateY: 200,
//                         skew: 0
//                     }}
//                     animate={{
//                         opacity: index === activeIndex ? 1 : 0,
//                         scale: 1.3,
//                         rotate: 10,
//                         skewX: 0,
//                         translateY: 0,
//                         skew: 0,
//                         y: [0, -15, 0] ,
//                     }}
//                     exit={{
//                         opacity: 0,
//                         scale: 1.1,
//                         skewX: 0,
//                         rotate: 0,
//                         translateY: 200,
//                         skew: 0
//                     }}
//                     transition={{duration: 0.5,y: {
//                             duration: 3.5,
//                             repeat: Infinity,
//                             ease: "easeInOut",
//                         },}}
//                 />
//
//
//             ))}
//         </AnimatePresence>
//
//     </div>
// </Grid2>