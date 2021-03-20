import React, { useContext } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import { UserContext } from './UserContext';
import PageTemplate from './PageTemplate';

const XmasCards = ({cardType})=> {
    const { selectedCard, setSelectedCard } = useContext(UserContext);

    let history = useHistory();
    const handleClick = (cardId)=>{
        console.log("cardId",cardId);
        setSelectedCard(cardId);
        console.log("selectedCard",selectedCard);
        history.push(`/${cardId}/send`);
    };

    return (
        <PageTemplate cardType={cardType} >
            <Card onClick={()=>handleClick("xmas1")} tabindex="0">Xmas Card 1</Card>
        </PageTemplate>
    );
};

const Card = styled.div`
width: 300px;
height:150px;
&:hover {
    transform: scale(1.1);
};
`;


export default XmasCards;