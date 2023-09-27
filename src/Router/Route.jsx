import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/donation";

import ErrorPages from "../Pages/ErrorPages/ErrorPages";
import Card from "../Pages/Card/Card";
import Statistics from "../Pages/Statistics/statistics";



const myCretedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
        errorElement : <ErrorPages></ErrorPages>,
        children : [
            {
                path : "/",
                element : <Home></Home>,
                loader : ()=> fetch('/donation.json')
            },
            {
                path : "/donation",
                element : <Donation></Donation>,
            },
            {
                path : "/statistics",
                element : <Statistics></Statistics>,
                loader : () => fetch ('/donation.json')
                
            },
            {
                path : "/cards/:id",
                element : <Card></Card>,
                loader : () => fetch('/donation.json')
            }
            
        ]
    }
])
export default myCretedRoute;