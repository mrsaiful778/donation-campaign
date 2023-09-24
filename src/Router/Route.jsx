import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Donation from "../Pages/Donation/donation";
import Statistics from "../Pages/Statistics/statistics";


const myCretedRoute = createBrowserRouter([
    {
        path : "/",
        element : <MainLayout></MainLayout>,
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
            }
            
        ]
    }
])
export default myCretedRoute;