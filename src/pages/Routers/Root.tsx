import {Outlet, useLocation} from "react-router-dom";
import {Tollbar} from "../../component/tollbar/Tollbar.tsx";
import {Footer} from "../../component/Footer.tsx";
import {useEffect} from "react";


export const Root = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div>
            <Tollbar/>
            <main>
                <Outlet/>
            </main>
          <Footer/>
        </div>
    )
}