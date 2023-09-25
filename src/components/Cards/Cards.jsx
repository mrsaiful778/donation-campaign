import DonationCards from "./DonationCards";


const Cards = ({cards}) => {

    console.log(cards);
    return (
        
        <div className="py-10">
           

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card => <DonationCards key={card.id} card={card}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default Cards;