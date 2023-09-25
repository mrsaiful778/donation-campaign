import { useEffect, useState } from "react";
import MultipleDonation from "./MultipleDonation";




const Donation = () => {

    const [donation, setDonation] = useState ([])
    const [noDonation, setDonations]= useState(false)

    const [isSee, setIsSee] = useState(false)

    useEffect(()=>{
        const donationItems = JSON.parse(localStorage.getItem('donationitems'))





        if(donationItems){

            setDonation(donationItems)
        }
        else{
          
            setDonations('No Donation Now')
        }

    },[])
    console.log(donation);
    console.log(isSee);
    

    return (
        
        <div>
           {noDonation ? <p className="h-[80vh] flex justify-center items-center">{noDonation}
           </p> :
           <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    isSee ? donation.map((card )=> <MultipleDonation key={card.id} card={card}></MultipleDonation>)
                    : donation.slice(0.4).map((card) => <MultipleDonation key={card.id} card={card}></MultipleDonation>)
                }
            </div>
            <button onClick={()=> setIsSee(!isSee)} className="px-5 py-3 m-4 rounded-lg bg-green-400 block mx-auto">{isSee ? "See Less" : "See More"}</button>
            
            

            </div>}
        </div>
    );
};

export default Donation;