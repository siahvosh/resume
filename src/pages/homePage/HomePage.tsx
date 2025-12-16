import {Button, Grid2} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import img from "../../assets/4x/redCard.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/2x/Asset 9@2x.png";
import img6 from "../../assets/4x/dot2.png";
import img7 from "../../assets/2x/Asset 9@2x.png";
import img8 from "../../assets/2x/Asset 9@2x.png";
import bgImg from "../../assets/bgnew.jpg";

import './HomePage.css'
import './../../App.css'
import {useNavigate} from "react-router-dom";



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

    const detailHandler = (idx: any) => {
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
                const sectionHeight = offsetHeight / stepperDetail.length;
                const index = Math.floor((scrollPosition - offsetTop) / sectionHeight);
                setActiveIndex(index);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
          <div className={'cont-1'}>
              <div className={'titleCard'}>
                  <span className={'name'}>Siavash Miralikhani</span>
                  <span className={'job'}>FRONT END <span className={'dev'} style={{color: '#EEB491'}}>DEVELOPER</span></span>
                  <span className={'contact'}>
                          <a href="tel:+989124949401" style={{color: 'white'}}>📞 +98 912 49 49 401 | </a>
                          <a href="#" id="openGmailCompose" style={{color: 'white'}}>✉️ GTSIAVASH@GMAIL.COM | </a>
                             SHIRAZ
                      </span>
              </div>
          </div>
          <div className={'middle'}>
              <span className={'mid-text'}>
                  SUMMARY
              </span>
              <h1 className={'mid-text-description'} >
                    Front-End Developer with 3+ years of experience building responsive, user-friendly web applications using
                    JavaScript, React (MUI), Vue2 (Vuetify), HTML, Bootstrap ,CSS. Skilled in translating UI/UX designs into highperformance interfaces. I am also highly responsible, detail-oriented, and skilled in project management,
                    ensuring timely delivery of high-quality work.
              </h1>
          </div>
          <div className={'cont-2'} ref={cont2Ref}>
              <div className={'scroll-box'}>
                  <div className={'experience-title-box'}>
                          <span className={'experience-title'}>
                              EXPERIENCE
                          </span>
                  </div>
                  <Grid2 container spacing={0} style={{height: '60vh'}}>
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{border: '2px solid red',}}>
                          <div className={'text-box-animation'}>
                              {stepperDetail.map((item, index) => (
                              <div key={index} onClick={() => detailHandler(index)}>
                                  <div key={index} onClick={() => setActiveIndex(index)}>
                                      <span className={`text-title ${activeIndex === index ? 'active' : ''}`}>
                                          {item.title}
                                      </span>
                                      <div style={{ flexDirection: 'column'}} className={`details ${activeIndex === index ? 'show' : ''}`}>
                                          {item.description}

                                          {/*{item.description}*/}
                                          {/*<Button*/}
                                          {/*    style={{*/}
                                          {/*        marginTop: '0.5rem',*/}
                                          {/*        marginBottom: '1rem',*/}
                                          {/*        width: '150px',*/}
                                          {/*        height: '25px',*/}
                                          {/*        background: "transparent",*/}
                                          {/*        color: 'white',*/}
                                          {/*        border: '1px solid #58c0bd'*/}
                                          {/*}}*/}
                                          {/*    variant="contained">*/}
                                          {/*    <span onClick={() => handelNav(item.path)} style={{ fontSize: '0.7rem', fontWeight: '100'}}>More ...</span>*/}
                                          {/*</Button>*/}
                                      </div>
                                  </div>
                              </div>
                          ))}
                          </div>
                      </Grid2>
                      <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} style={{border: '2px solid green' }}>
                          <div className="images-box">
                              <AnimatePresence >
                                  {stepperDetail.slice(0, activeIndex + 1).map((item, index) => (
                                      <motion.img
                                          key={item.image}
                                          src={item.image}
                                          alt=""
                                          className="img"
                                          style={{
                                              position: "absolute",
                                              // top: index * -40,
                                              marginTop: 0,
                                              zIndex: index,
                                              skewX: 0,
                                          }}
                                          initial={{
                                              opacity: 0,
                                              scale: 1,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: -100,
                                              skew: 0
                                          }}
                                          animate={{
                                              opacity: index === activeIndex ? 1 : 0.5,
                                              scale: 1.3,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: 0,
                                              skew: 0
                                          }}
                                          exit={{
                                              opacity: 0,
                                              scale: 1.1,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: 100,
                                              skew: 0
                                          }}
                                          transition={{duration: 1.5}}
                                      />
                                  ))}
                              </AnimatePresence>
                              <AnimatePresence>
                                  {stepperDetail.slice(0, activeIndex + 1).map((item, index) => (
                                      <motion.img
                                          key={item.image}
                                          src={item.image1}
                                          alt=""
                                          className="img"
                                          style={{
                                              position: "absolute",
                                              // top: 400,
                                              // marginTop: 450,
                                              left: 0,
                                              top: 0,
                                              zIndex: index,
                                              skewX: 0,
                                          }}
                                          initial={{
                                              opacity: 0,
                                              scale: 1,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: -100,
                                              skew: 0
                                          }}
                                          animate={{
                                              opacity: index === activeIndex ? 1 : 0,
                                              scale: 1.3,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: 0,
                                              skew: 0,

                                          }}
                                          exit={{
                                              opacity: 0,
                                              scale: 1.1,
                                              rotate: 0,
                                              skewX: 0,
                                              translateX: 100,
                                              skew: 0
                                          }}
                                          transition={{duration: 1.5}}
                                      />
                                  ))}
                              </AnimatePresence>
                          </div>
                      </Grid2>
                  </Grid2>
              </div>
          </div>
          <div className={'second-middle'} style={{background: 'black'}}>
              {/*<div style={{display: 'flex', justifyContent:'center', fontSize: '7vw', fontWeight:'900'}}>SKILL</div>*/}
                    <div className="wrapper">
                        <div className="item item1">SnapFood</div>
                        <div className="item item2">Tapsi</div>
                        <div className="item item3">Janboo</div>
                        <div className="item item4">Digikala</div>
                        <div className="item item5">Divar</div>
                        <div className="item item6">Torob</div>
                        <div className="item item7">Irancell</div>
                        <div className="item item8">Shatel</div>
                    </div>
                    <div className="wrapper-1">
                        <div className="item-1 item1">SnapFood</div>
                        <div className="item-1 item2">Tapsi</div>
                        <div className="item-1 item3">Janboo</div>
                        <div className="item-1 item4">Digikala</div>
                        <div className="item-1 item5">Divar</div>
                        <div className="item-1 item6">Torob</div>
                        <div className="item-1 item7">Irancell</div>
                        <div className="item-1 item8">Shatel</div>
                    </div>

            </div>
        </>
    )
}