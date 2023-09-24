

const DonationCards = ({card}) => {

    const {id, picture, title, category, category_bg_color, card_bg_color,  text_color, button_bg_color, description, price,} = card || {}
    return (

        <div>
            <div style={{backgroundColor: card_bg_color}} className="w-[312px] h-[283px] rounded-lg  ">
               
                <div>
                    <img src={ picture}></img>
                </div>
                <div className="m-5 space-y-2">
                    <h1 style={{color: category_bg_color}}>{category}</h1>
                    <h2 style={{color: text_color}}>{title}</h2>
                </div>
            </div>
        </div>
    );
};

export default DonationCards;