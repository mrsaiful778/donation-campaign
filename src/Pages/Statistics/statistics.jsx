import { useEffect, useState } from "react";
import PieChartStyle from "./PieChart";
import { useLoaderData } from "react-router-dom";

const Statistics = () => {
    const [donation,setDonation] = useState(0)
    const [totalDonation,setTotalDonation] = useState(0)
    const loadDaonation = useLoaderData();

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donationitems'))

        setDonation(donationItems.length);
        const toTallDonation = loadDaonation.length - setTotalDonation.length;
        setTotalDonation(toTallDonation)
    },[loadDaonation])

   

    return (
        <div className=" max-w-screen-xl mx-auto gap-4 px-6">
           
           <PieChartStyle donation={donation} totalDonation={totalDonation}></PieChartStyle>
        </div>
    );
};

export default Statistics;