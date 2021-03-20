import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { UserContext } from './UserContext';
import PageTemplate from './PageTemplate';
import { cards } from './cards/cardsData';


const BirthdayCards = ()=> {
    const { selectedCard, setSelectedCard } = useContext(UserContext);

    const cardsArray = Object.values(cards);
    const BirthdayCards = cardsArray.filter((card)=>{
        return card.type==="birthday";
    });

    let history = useHistory();
    const handleClick = (cardId)=>{
        console.log("cardId",cardId);
        setSelectedCard(cardId);
        console.log("selectedCard",selectedCard);
        history.push(`/${cardId}/send`);
    };

    return (
        <PageTemplate cardType={"Birthday"} >
            {BirthdayCards.map((card)=>{
                return <Card onClick={()=>handleClick(card.id)} tabindex="0"> {card.component} </Card>
            })}
        </PageTemplate>
    );
};

const Card = styled.div`
margin: 20px;
width: 25%;
&:hover {
    transform: scale(1.1);
};
border: 1px solid black;
`;


export default BirthdayCards;