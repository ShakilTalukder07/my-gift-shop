import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home/Home";
import AboutUs from "../pages/about/AboutUs";
import Contact from "../pages/contact/Contact";
import Products from "../pages/Products/Products";
import Main from "../Layout/Main";
import ErrorElement from "../components/ErrorElement/ErrorElement";
import SignUp from "../pages/SignUp/SignUp";
import SignIn from "../pages/SignIn/SignIn";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>,
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
            },
            {
                path: '/products',
                element: <Products></Products>,
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>,
            },
            {
                path: "/signIn",
                element: <SignIn></SignIn>,
            }
        ]
    }
])

export default router;