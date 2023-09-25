import { useEffect, useState } from "react";
import MultipleDonation from "./MultipleDonation";




const Donation = ({card}) => {
    // const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price, } = card || {}


    const [donation, setDonation] = useState ([])
    const [noDonation, setDonations]= useState(false)
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
    

    return (
        
        <div>
           {noDonation ? <p className="h-[80vh] flex justify-center items-center">{noDonation}
           </p> :
           <div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                {
                    donation.map(card => <MultipleDonation key={card.id} card={card}></MultipleDonation>)
                }
            </div>

            </div>}
        </div>
    );
};

export default Donation;