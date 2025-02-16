import './App.css'
import {Button, Grid2} from "@mui/material";
import {useEffect, useRef, useState} from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function App() {
    const [items] = useState([
        {title: 'Home', path: '/home'},
        {title: 'About', path: '/About'},
        {title: 'Ticket', path: '/Ticket'},
        {title: 'More', path: '/More'},
        // {title: 'Dashboard', path: '/Dashboard'},
    ])

    const [stepperDetail, setStepperDetail] = useState([
        {title: 'Simple', description: 'Animate every transform axis independently, without needing multiple elements.', showDetails: false},
        {title: 'BI Dashboard', description: 'Lorem ipsum dolor sit amet.', showDetails: false},
        {title: 'React library', description: 'Lorem ipsum dolor sit amet.', showDetails: false},
        {title: 'more', description: 'Lorem ipsum dolor sit amet.', showDetails: false},
    ]);

    const showHandler = (idx: any) => {
        console.log(idx)
        setStepperDetail((prevDetails) =>
            prevDetails.map((item, index) => ({
                ...item,
                showDetails: index === idx
            }))
        );
    }

    return (
        <div className="template">
            <div className={'cont-1'} style={{height: '100vh'}}>
                <div className={'toolbar'}>
                    <Grid2 container spacing={10} className={'grids'}>
                        {
                            items.map((item, index) => (
                                <Grid2 size={2} key={index}>
                                    <span className={"items"}>{item.title}</span>
                                </Grid2>
                            ))
                        }
                    </Grid2>
                </div>
                <div className={'home-page'}>
                    <Grid2 className={'text-box'}>
                        <span className={'text'}>Scale design & <span className={'text'}
                                                                      style={{color: '#EEB491'}}>dev</span></span>
                        <span className={'text'}>Dashboard BI</span>
                        <span className={'text'}>React library</span>
                        <span className={'description'}>Sync design and developer workflows in one powerful tool <br/> while making your procurement happy</span>
                        <Button className={'btn'} variant="contained">
                            <span style={{color: 'black'}}>Contact us</span>
                        </Button>
                    </Grid2>
                    <Grid2 className={'img-box'}>
                        <div>

                        </div>
                    </Grid2>

                </div>
            </div>
            <div className={'cont-2'} style={{height: '100vh', backgroundColor: 'black'}}>
                <div style={{display: 'flex', left: '0', position: 'absolute', alignItems: 'center'}}>
                    {/*<Grid2 className="step-box">*/}
                    {/*    <StepScroll/>*/}
                    {/*</Grid2>*/}
                    <Grid2 className={'step-box'}>

                        {
                            stepperDetail.map((item, index) => (
                                <span key={index} onClick={() => showHandler(index)} className={'text'}>{item.title}
                                    {item.showDetails &&
                                        <div>
                                            <div style={{fontWeight: '100', fontSize: '1rem', marginTop: ' 0.5rem', transition: 'all 2s ease'}}>
                                                {item.description}
                                            </div>
                                            <div style={{fontWeight: '100', fontSize: '1rem', marginTop: ' -1rem'}}>
                                                {item.description}
                                            </div>
                                        </div>
                                    }
                            </span>
                            ))
                        }

                    </Grid2>
                </div>
            </div>

        </div>
    )
}

const steps = [
    {id: 1, text: "مرحله اول: نمایش ساده"},
    {id: 2, text: "مرحله دوم: ترنسفورم اتفاق می‌افته"},
    {id: 3, text: "مرحله سوم: اسم نمایش داده میشه"},
    {id: 4, text: "مرحله 4: اسم نمایش داده میشه"},
    {id: 5, text: "مرحله 5: اسم نمایش داده میشه"},
];

const StepScroll = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [stepIndex, setStepIndex] = useState(0);
    const [visibleSteps, setVisibleSteps] = useState([steps[0]]);
    const [allowPageScroll, setAllowPageScroll] = useState(false);

    useEffect(() => {
        const handleScroll = (event: WheelEvent) => {
            if (allowPageScroll) return; // اگر اجازه اسکرول صفحه داده شده، بیخیال اسکرول داخلی شو

            event.preventDefault(); // جلوگیری از اسکرول صفحه

            if (event.deltaY > 0 && stepIndex < steps.length - 1) {
                // حرکت به مرحله بعد
                const nextIndex = stepIndex + 1;
                setStepIndex(nextIndex);
                setVisibleSteps((prev) => [...prev, steps[nextIndex]]);
            } else if (event.deltaY < 0 && stepIndex > 0) {
                // حرکت به مرحله قبل (در صورت نیاز)
                setStepIndex(stepIndex - 1);
                setVisibleSteps((prev) => prev.slice(0, -1));
            }

            if (stepIndex === steps.length - 1) {
                setAllowPageScroll(true); // بعد از آخرین مرحله، اجازه اسکرول کلی بده
            }
        };

        const element = containerRef.current;
        if (element) {
            element.addEventListener("wheel", handleScroll, { passive: false });
        }

        return () => {
            if (element) {
                element.removeEventListener("wheel", handleScroll);
            }
        };
    }, [stepIndex, allowPageScroll]);

    return (
        <div
            ref={containerRef}
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                overflow: "hidden",
                backgroundColor: "#111",
                color: "white",
                fontSize: "2rem",
            }}
        >
            <div style={{ overflowY: "auto", height: "80vh", width: "80vw" }}>
                {visibleSteps.map((step) => (
                    <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        style={{ marginBottom: "10px", textAlign: "center" }}
                    >
                        {step.text}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};


export default App
