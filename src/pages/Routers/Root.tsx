import {Outlet} from "react-router-dom";
import {Tollbar} from "../../component/tollbar/Tollbar.tsx";
import {Footer} from "../../component/Footer.tsx";


export const Root = () => {
    return (
        <>
            <Tollbar/>
            <main>
                <Outlet/>
            </main>
            <Footer/>

        </>
    )
}