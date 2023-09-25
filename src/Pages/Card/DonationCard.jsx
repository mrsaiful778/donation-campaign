import swal from "sweetalert";


const DonationCard = ({ card }) => {

    const { id, picture, title, category, category_bg_color, card_bg_color, text_color, button_bg_color, description, price, } = card || {}




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
                swal("Already!", "You selected donate!", "try another");
            }

       }
       
    }


    return (

        <div>

            <div className="rounded-lg">
                <div>
                <img className="w-[1320px] h-[700px] " src={picture}  /><button style={{background: button_bg_color}} onClick={DonationCardBtn}>Donate {price}</button>
                </div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default DonationCard;