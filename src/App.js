import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RouteError from "./components/RouteError";
import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Cart from "./components/Cart";
import RestaurentMenu from "./components/RestaurentMenu";

const AppLayout = () => {
    return(
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
              path: "/",
              element: <Body/>,
            },
            {
                path: "/about",
                element: <About/>,
                errorElement: <RouteError/>,
            },
            {
                path: "/contactus",
                element: <ContactUS/>,
                errorElement: <RouteError/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
                errorElement: <RouteError/>
            },
            {
                path: "/restaurentmenu/:resid",
                element: <RestaurentMenu/>,
                errorElement: <RouteError/>,
            },

        ],
        errorElement: <RouteError/>,
    },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);