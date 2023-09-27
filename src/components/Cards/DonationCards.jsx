import { Link } from "react-router-dom";


const DonationCards = ({card}) => {

    const {id, picture, title, category, category_bg_color, card_bg_color,  text_color, button_bg_color, description, price,} = card || {}
    return (

        <div>
            <div style={{backgroundColor: card_bg_color}} className="w-[312px] h-[283px] rounded-lg  ">
               
            <Link to={`/cards/${id}`}>
                <div>
                    <img src={ picture}></img>
                </div>
                <div className="m-5 space-y-2">
                    <div className="flex">
                    <h1 style={{backgroundColor: category_bg_color, color: text_color}} className="px-4 rounded-lg">{category} </h1>
                    </div>
                    <h2 style={{color: text_color}}>{title}</h2>
                </div>
               
                </Link>
               
            </div>
        </div>
    );
};

export default DonationCards;