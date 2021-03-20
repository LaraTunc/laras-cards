import React, { useState } from 'react';
import styled from 'styled-components';
import { cards } from './cards/cardsData/cardsData';
import { useParams } from 'react-router';
import Input from './Input';
import Form from './Form';
import Button from './Button';

const SendCard = ()=>{
    const { cardId } = useParams();

    const [formData, setFormData] = useState({
        from: {
            fullName:'',
            email:''
        },
        to:{
            email:'',
        },
    });
    // const [formError, setFormError] = useState();

    console.log("cardId",cardId);
    console.log("cards[cardId]",cards[cardId]);
    
    const cardsArray = Object.values(cards);
    const card = cardsArray.find((cardObject)=>{
        return cardObject.id === cardId;
    });

    const handleClick = (ev)=>{
        ev.preventDefault();
        const selectedCardHtml =  cards[cardId].html;
        console.log("selectedCardHtml",selectedCardHtml);
        const selectedCardImagePath =  cards[cardId].imagePath[0];
        console.log("selectedCardImagePath",selectedCardImagePath);

        fetch("/sendCard", {
            method: "POST",
            body: JSON.stringify({formData, selectedCardHtml, selectedCardImagePath}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
        })

    };

    return(
        <>
            <Wrapper>
                {card.component}
            </Wrapper>

            <Form>
                <Label><b>From</b></Label>
                    <Input type={"text"} 
                        value={formData.from.fullName} 
                        placeholder={"Full name"}
                        onChange={(ev)=>{setFormData({...formData, from: {...formData.from,fullName: ev.target.value}})}}
                        required
                    />

                    <Input type={"email"} 
                        value={formData.from.email} 
                        placeholder={"Email"}
                        onChange={(ev)=>{setFormData({...formData, from: {...formData.from, email: ev.target.value} })}}
                        required
                    />

                <Label><b>To</b></Label>
                    <Input type={"email"} 
                        value={formData.to.email} 
                        placeholder={"Email"}
                        onChange={(ev)=>{setFormData({...formData, to: {...formData.to, email: ev.target.value} })}}
                        required
                    />

                <Button onClick={handleClick}>Send Card</Button>
            </Form>

        </>
    );
};

const Wrapper = styled.div`
width:90%;
margin:15px;
`;

const Label = styled.label`
margin-top: 10px;
`;

export default SendCard;