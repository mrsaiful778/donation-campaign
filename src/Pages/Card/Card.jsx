import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DonationCard from "./DonationCard";


const Card = (props) => {

    const [card, setCard] = useState({})

    const { id } = useParams()


    const cards = useLoaderData()

    useEffect(() => {

        const findCard = cards?.find(card => card.id == id)


        setCard(findCard)

    }, [id, cards])




    return (

        <div className="">
           
           <DonationCard card={card}></DonationCard>
           

        </div>
    );
};

export default Card;