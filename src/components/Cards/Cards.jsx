import DonationCards from "./DonationCards";


const Cards = ({cards}) => {

    console.log(cards);
    return (
        
        <div>
            <h1 className="text-2xl text-center">all donation cards</h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    cards?.map(card => <DonationCards key={card.id} card={card}></DonationCards>)
                }
            </div>
        </div>
    );
};

export default Cards;