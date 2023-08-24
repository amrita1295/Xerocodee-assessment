import { createBrowserRouter } from "react-router-dom";
import Login from './components/Login';
import SignUp from "./components/SignUp";
import Page1 from "./components/Pages/Page1";
import Hosting from "./components/Pages/Hosting";
import SelfHosting from "./components/Pages/SelfHosting"
import GitHub from "./components/Pages/GitHub"


const router = createBrowserRouter([
    {
        path: "/",
        element: <Login></Login>,
    },
    {
        path: "/login",
        element: <Login></Login>,
    },
    {
        path: "/signup",
        element: <SignUp></SignUp>,
    },
    {
        path: "/page1",
        element: <Page1></Page1>,
    },
    {
        path: "/hosting",
        element: <Hosting></Hosting>,
    },
    {
        path: "/selfhosting",
        element: <SelfHosting></SelfHosting>,
    },
    {
        path:"/repos/:inputValue",
        element:<GitHub></GitHub>
    }
]);

export default router;