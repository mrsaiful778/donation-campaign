import swal from "sweetalert";

import './DonationCard.css'

const DonationCard = ({ card }) => {

    const { id, picture, title,  text_color, description, price, } = card || {}




    const DonationCardBtn = ()=>{

        const addedDonationList = [];

        const donationItems = JSON.parse(localStorage.getItem('donationitems'))
       if(!donationItems){
        addedDonationList.push(card)
        localStorage.setItem('donationitems', JSON.stringify(addedDonationList))
        swal("Good job!", "You donation done!", "success");

       }

       else{

        const isExits = donationItems.find(card => card.id === id)
        
        if(!isExits){
            addedDonationList.push(...donationItems,card)
            localStorage.setItem('donationitems', JSON.stringify(addedDonationList))
            swal("Good job!", "You donation done!", "success");
        }
            else{
                swal("Error!", "You already donated try another one!", "error");
            }

       }
       
    }


    return (
        <div className="px-8 md:px-36 mx-auto">
            <div className="flex justify-center items-center mt-16 relative">
                <img className="w-full" src={picture} alt="" />
                <div className="absolute detail text-xl flex p-3 md:p-6 lg:p-9">
                    <button onClick={DonationCardBtn} className='text-base md:text-xl py-2 px-3 md:py-4 md:px-6 rounded-xl text-white font-semibold' style={{backgroundColor:text_color}}>Donate ${price}</button>
                </div>
            </div>
            <div>
                <h2 className="text-[#0B0B0B] text-4xl font-bold my-10">{title}</h2>
                <h1 className="mb-10 text-[#0B0B0BB2]">{description}</h1>
            </div>
        </div>

    );
};

export default DonationCard;