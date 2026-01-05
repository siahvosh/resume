import './App.css';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import {HomePage} from "./pages/homePage/HomePage.tsx";
import {Root} from "./pages/Routers/Root.tsx";
import {Error404} from "./pages/errors/404.tsx";
import {ScrollSite} from "./pages/works/ScrollSite";
import {Loading} from "./component/loading/Loading";
import * as React from "react";

function App() {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 5000);
        return () => clearTimeout(timer);
    }, []);


    if (loading) return <Loading />;
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

export default App;