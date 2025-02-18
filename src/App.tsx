import './App.css';
import {Button, Grid2} from "@mui/material";
import {useEffect, useRef, useState} from "react";


function App() {

    const [activeIndex, setActiveIndex] = useState(0);
    const cont2Ref = useRef(null);

    const [items] = useState([
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/About'},
        {title: 'Ticket', path: '/Ticket'},
        {title: 'More', path: '/More'},
    ]);

    const [stepperDetail] = useState([
        {title: 'Simple', description: 'Animate every transform axis independently, without needing multiple elements.', image: 'https://img.freepik.com/free-vector/dashboard-element-collection_23-2148433570.jpg?t=st=1739919192~exp=1739922792~hmac=59a744367702aa76088c5a419630430c5d86c05f7f5c8436ca284c9c77f93fec&w=1480'},
        {title: 'BI Dashboard', description: 'Lorem ipsum dolor sit amet.', image: "https://img.freepik.com/free-vector/big-data-grayscale-visualization-visual-data-complexity-complex-data-threads-graphic-social-network-representation-abstract-data-graph_1217-1938.jpg?t=st=1739908461~exp=1739912061~hmac=09f3c87db5dd13bca4aaa396e9ceeeb8b69b215f5950ae6261fb9b1f7e2bb2b4&w=996"},
        {title: 'React library', description: 'Lorem ipsum dolor sit amet.', image: "https://img.freepik.com/free-vector/network-communications-background-with-modern-plexus-design_1048-12909.jpg?t=st=1739908774~exp=1739912374~hmac=722e3dbd68279dad2c2aa34bc989bc1ada6ea528d18b3e36d9692aa37b9bb83e&w=996"},
        {title: 'More', description: 'Lorem ipsum dolor sit amet.', image: "https://img.freepik.com/free-vector/network-communications-background-with-modern-plexus-design_1048-12909.jpg?t=st=1739908774~exp=1739912374~hmac=722e3dbd68279dad2c2aa34bc989bc1ada6ea528d18b3e36d9692aa37b9bb83e&w=996"},

    ]);

    const detailHandler = (idx: any) => {
        setActiveIndex(idx);
    }
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (cont2Ref.current) {
    //             const { offsetTop, offsetHeight } = cont2Ref.current;
    //             const scrollPosition = window.scrollY + window.innerHeight / 3; // تنظیم دید به مرکز صفحه
    //             const sectionHeight = offsetHeight / stepperDetail.length;
    //             const index = Math.max(0, Math.min(stepperDetail.length - 1, Math.floor((scrollPosition - offsetTop) / sectionHeight)));
    //
    //             setActiveIndex(index);
    //         }
    //     };
    //
    //     window.addEventListener("scroll", handleScroll);
    //     return () => window.removeEventListener("scroll", handleScroll);
    // }, []);


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
        <div className="template">
            <div className={'cont-1'} style={{height: '100vh'}}>
                <div className={'toolbar'}>
                    <Grid2 container spacing={10} className={'grids'}>
                        {items.map((item, index) => (
                            <Grid2 size={2} key={index}>
                                <span className={"items"}>{item.title}</span>
                            </Grid2>
                        ))}
                    </Grid2>
                </div>
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
            <div className={'cont-2'} ref={cont2Ref}>
                <Grid2 container className={'scroll-box'}>
                    <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} className={'text-container'}>
                        {stepperDetail.map((item, index) => (
                            <div key={index} onClick={() => detailHandler(index)}>
                                <div key={index} onClick={() => setActiveIndex(index)}>
                                     <span className={`text-title ${activeIndex === index ? 'active' : ''}`}>
                                         {item.title}
                                     </span>
                                    <div className={`details ${activeIndex === index ? 'show' : ''}`}>
                                        {item.description} <br/>
                                        {item.description}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Grid2>
                    <Grid2 size={{xs: 12, sm: 12, md: 12, lg: 6}} className={'text-container'}>
                        <div className="images-box">
                            {stepperDetail[activeIndex] && (
                                <img
                                    key={stepperDetail[activeIndex].image}
                                    src={stepperDetail[activeIndex].image}
                                    alt=""
                                    className="img fade-in"
                                />
                            )}
                        </div>

                    </Grid2>
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
                        <div className="item-1 item1">Supermarket</div>
                        <div className="item-1 item2">Restaurant</div>
                        <div className="item-1 item3">HR Analyse</div>
                        <div className="item-1 item4">Digikala</div>
                        <div className="item-1 item5">Divar</div>
                        <div className="item-1 item6">Torob</div>
                        <div className="item-1 item7">Irancell</div>
                        <div className="item-1 item8">Shatel</div>
                    </div>
                </Grid2>

            </div>
            <GallerySection/>

        </div>
    );
}


const GallerySection = () => {
    const cont3Ref = useRef(null);
    const imgGroupRef = useRef(null);
    const [scrollX, setScrollX] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);
    const totalImages = 5; // تعداد تصاویر
    const imgWidth = window.innerWidth; // عرض هر تصویر (تمام صفحه)

    useEffect(() => {
        const handleScroll = (event) => {
            if (isScrolling && imgGroupRef.current && !allowVerticalScroll) {
                event.preventDefault(); // جلوگیری از اسکرول عمودی در حالت افقی

                const delta = event.deltaY * 1.5; // تنظیم مقدار حرکت اسکرول
                const maxScroll = (totalImages - 1) * imgWidth; // بیشترین مقدار اسکرول افقی

                setScrollX((prev) => {
                    let newScrollX = prev + delta;

                    // اگر اسکرول افقی به انتها رسید، اسکرول عمودی را فعال کن
                    if (newScrollX === maxScroll) {
                        newScrollX = maxScroll;
                        setAllowVerticalScroll(true);
                    }

                    // اگر اسکرول از اولی به عقب برگشت، دوباره اسکرول عمودی فعال کن
                    if (newScrollX <= 0) {
                        newScrollX = 0;
                        setAllowVerticalScroll(true);
                    }

                    return Math.max(0, Math.min(newScrollX, maxScroll));
                });
            }
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsScrolling(entry.isIntersecting);
                if (!entry.isIntersecting) {
                    setAllowVerticalScroll(false); // وقتی از cont-3 خارج شد، اسکرول افقی را ریست کن
                }
            },
            { threshold: 1 } // وقتی 50٪ از cont-3 دیده شد، فعال شود
        );

        if (cont3Ref.current) observer.observe(cont3Ref.current);

        window.addEventListener("wheel", handleScroll, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleScroll);
            if (cont3Ref.current) observer.unobserve(cont3Ref.current);
        };
    }, [isScrolling, allowVerticalScroll]);

    return (
        <div ref={cont3Ref} className="cont-3">
            <Grid2 size={12}>
                <article id="gallery">
                    <section className="img-group-container">
                        <div ref={imgGroupRef} className="img-group" style={{ transform: `translateX(-${scrollX}px)` }}>
                            {Array.from({ length: totalImages }, (_, i) => (
                                <div key={i} className="img-container">
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, debitis enim expedita facere fugiat neque praesentium quod rem reprehenderit voluptatem.</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
                                    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
                                    <h3>#{i + 1}</h3>
                                </div>
                            ))}
                        </div>
                    </section>
                    <footer style={{backgroundColor: 'black'}}>

                    </footer>
                </article>
            </Grid2>
        </div>
    );
};


export default App;