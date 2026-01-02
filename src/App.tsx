import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {HomePage} from "./pages/homePage/HomePage.tsx";
import {Root} from "./pages/Routers/Root.tsx";
import {About} from "./pages/about/About.tsx";
import {Services} from "./pages/Services/Services.tsx";
import {Section1} from "./pages/Services/Section1.tsx";
import {Section2} from "./pages/Services/Section2.tsx";
import {Section3} from "./pages/Services/Section3.tsx";
import {Section4} from "./pages/Services/Section4.tsx";
import {Section5} from "./pages/Services/Section5.tsx";
import {Error404} from "./pages/errors/404.tsx";
import {ScrollSite} from "./pages/works/ScrollSite";

function App() {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <Root/>,
            errorElement: <Error404/>,
            children:[
                {index: true, element: <HomePage /> },
                {path: '/', element: <HomePage /> },
                {path: '/works', element: <ScrollSite /> },

            ]
        },
    ])

    return <RouterProvider router={router}/>

}


// const GallerySection = () => {
//     const cont3Ref = useRef(null);
//     const imgGroupRef = useRef(null);
//     const [scrollX, setScrollX] = useState(0);
//     const [isScrolling, setIsScrolling] = useState(false);
//     const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);
//     const totalImages = 5;
//     const imgWidth = window.innerWidth;
//
//     useEffect(() => {
//         const handleScroll = (event) => {
//             if (isScrolling && imgGroupRef.current && !allowVerticalScroll) {
//                 event.preventDefault();
//
//                 const delta = event.deltaY * 1.5;
//                 const maxScroll = (totalImages - 1) * imgWidth;
//
//                 setScrollX((prev) => {
//                     let newScrollX = prev + delta;
//
//                     if (newScrollX === maxScroll) {
//                         newScrollX = maxScroll;
//                         setAllowVerticalScroll(true);
//                     }
//
//                     if (newScrollX <= 0) {
//                         newScrollX = 0;
//                         setAllowVerticalScroll(true);
//                     }
//                     return Math.max(0, Math.min(newScrollX, maxScroll));
//                 });
//             }
//         };
//
//         const observer = new IntersectionObserver(
//             ([entry]) => {
//                 setIsScrolling(entry.isIntersecting);
//                 if (!entry.isIntersecting) {
//                     setAllowVerticalScroll(false);
//                 }
//             },
//             {threshold: 1}
//         );
//
//         if (cont3Ref.current) observer.observe(cont3Ref.current);
//
//         window.addEventListener("wheel", handleScroll, {passive: false});
//
//         return () => {
//             window.removeEventListener("wheel", handleScroll);
//             if (cont3Ref.current) observer.unobserve(cont3Ref.current);
//         };
//     }, [isScrolling, allowVerticalScroll]);
//
//     return (
//         <div ref={cont3Ref} className="cont-3">
//             <Grid2 size={12}>
//                 <article id="gallery">
//                     <section className="img-group-container">
//                         <div ref={imgGroupRef} className="img-group" style={{transform: `translateX(-${scrollX}px)`}}>
//                             {Array.from({length: totalImages}, (_, i) => (
//                                 <div key={i} className="img-container">
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, debitis enim expedita facere fugiat neque praesentium quod rem reprehenderit voluptatem.</span>
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
//                                     <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet asperiores aspernatur beatae cum est neque nobis nostrum repudiandae? Assumenda, dignissimos.</span>
//                                     <h3>#{i + 1}</h3>
//                                 </div>
//
//                             ))}
//                         </div>
//                     </section>
//                     <footer style={{width: '100vh', height: '100vh'}}>
//                         <div>
//                             <svg width="100vh" height="100%" viewBox="0 0 5120 337"
//                                  preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg"
//                                  className="s1uqj89y s1q6y8ki">
//                                 <path
//                                     d="M2262 93C2122.5 82.5987 2116 21.5 2096.5 21.5C2077 21.5 2070.5 77.5238 1920.5 93C1794.5 106 1786 62 1771.5 63.5C1757 65 1687 155.5 1580 142C1473 128.5 1446.5 90 1435 93C1423.5 96 1448.03 199.005 1340 214C1181.5 236 1155.5 142 1144 142C1132.5 142 1105.5 269 946.5 236C787.5 203 799 115 784 114.5C769 114 732.5 162 544 158C382 154.562 352.5 81 341 84.5C329.5 88 358 269 168 326C-22 383 -75.5 180 -75.5 180V0.5H5189.5L5193.5 46C5193.5 46 5200 94 5069.5 100.5C4939 107 4923.5 21.5 4906.5 21.5C4889.5 21.5 4870 35 4835 93.5C4800 152 4765.5 169.5 4643.5 173.5C4521.5 177.5 4436.5 69 4425.5 76.5C4414.5 84 4413.5 212 4235 222C4056.5 232 4045.5 92 4033.5 89C4021.5 86 3968.5 169.5 3823.5 172.5C3678.5 175.5 3573.5 104 3562.5 106.5C3551.5 109 3553.5 167.5 3396 201C3238.5 234.5 3171.5 168.5 3161 172.5C3150.5 176.5 3164 273 3076.5 294.5C2975.99 319.197 2935 228 2920 225.5C2905 223 2862 276.955 2749 245C2671.4 223.057 2672.5 149 2660.5 151.5C2648.5 154 2622.5 181.04 2548.5 158C2425 119.548 2427.5 53.5 2412 51C2396.5 48.5 2376 101.5 2262 93Z"
//                                     fill="white"></path>
//                             </svg>
//                         </div>
//                     </footer>
//                 </article>
//             </Grid2>
//         </div>
//     )
// }






export default App;