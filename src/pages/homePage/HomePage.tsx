import {Button, Grid2} from "@mui/material";
import {AnimatePresence, motion} from "framer-motion";
import {useEffect, useRef, useState} from "react";
import img from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import './HomePage.css'
import './../../App.css'



export const HomePage = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const cont2Ref = useRef(null);

    const [stepperDetail] = useState([
        {title: 'Simple', description: 'Motion for React examples\n' + 'Official free and premium examples to kickstart your next project..', image: `${img}`},
        {title: 'BI Dashboard', description: 'Lorem ipsum Animate every transform axis independently, without needing multiple elements.', image: `${img2}`},
        {title: 'React library', description: 'Without needing multiple elements. Lorem ipsum dolor sit amet.', image: `${img3}`},
        {title: 'More', description: 'Axis independently, without needing Lorem ipsum dolor sit amet.', image: `${img4}`},
    ]);

    const detailHandler = (idx: any) => {
        setActiveIndex(idx);
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
              <div className={'home-page'}>
                  <Grid2 className={'text-box'}>
                      <span className={'text'}>Scale design & <span className={'text'} style={{color: '#EEB491'}}>dev</span></span>
                      <span className={'text'}>BI Dashboard</span>
                      <span className={'text'}>React library</span>
                      <span className={'description'}>Sync design and developer workflows in one powerful tool <br/> while making your procurement happy</span>
                      <Button className={'btn'} variant="contained">
                          <span style={{color: 'black'}}>Contact us</span>
                      </Button>
                  </Grid2>
              </div>
          </div>
          <div className={'middle'}>
                  <span className={'mid-text'} style={{fontWeight: '700'}}>
                      AI reduces human effort by handling repetitive tasks
                  </span>
              <span className={'mid-text'} style={{fontWeight: '100', justifyContent: 'center'}}>
                      AI reduces human effort by handling repetitive tasks
                  </span>
          </div>
          <div className={'cont-2'} ref={cont2Ref}>
              <Grid2 container spacing={10} className={'scroll-box'}>
                  <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}}>
                      <div className={'text-box-animation'}>
                          {stepperDetail.map((item, index) => (
                          <div key={index} onClick={() => detailHandler(index)}>
                              <div  key={index} onClick={() => setActiveIndex(index)}>
                                               <span
                                                   className={`text-title ${activeIndex === index ? 'active' : ''}`}>
                                                   {item.title}
                                               </span>
                                  <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                                      {item.description} <br/>
                                      {item.description}
                                  </div>
                              </div>
                          </div>
                      ))}
                      </div>
                  </Grid2>
                  <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}}>
                      <div className="images-box">
                          <AnimatePresence>
                              {stepperDetail.slice(0, activeIndex + 1).map((item, index) => (
                                  <motion.img
                                      key={item.image}
                                      src={item.image}
                                      alt=""
                                      className="img"
                                      style={{
                                          position: "absolute",
                                          // top: index * -60,
                                          zIndex: index,
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
                                          scale: 1,
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
                      </div>
                  </Grid2>
              </Grid2>
          </div>
          <div className={'second-middle'} style={{background: 'black'}}>
                <Grid2 size={12}>
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
                </Grid2>
            </div>
        </>
    )
}