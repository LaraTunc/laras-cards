import React, { useContext } from 'react';
import styled from 'styled-components';
import Account from './Account';
import { UserContext } from './UserContext';

const History = ()=> {
    const { user } = useContext(UserContext);
    const userSentCards = Object.values(user.sentCards);

    return (
        <Account>
            <Wrapper>
                <h3>Account history</h3>
                <Info><b>Sent cards</b></Info>
                {userSentCards.map((card)=>{
                    return (
                        <Border key={card.sentCardId}>
                            <Info>Date: {card.date}</Info>
                            <Info>To: {card.to}</Info>
                            <Info>Sent card ID: {card.cardId}</Info>
                        </Border>
                    );
                })}
            </Wrapper>
        </Account>
    );
};

const Wrapper = styled.div`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
`;

const Info = styled.div`
margin-top:1em;
`;

const Border = styled.div`
width: 80%;
padding-bottom: 1em;
border-bottom : 1px solid black;
`;

export default History;