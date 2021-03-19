import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { cards } from './cards/data/cardsData';
import Birthday1 from './cards/Birthday1';
import { UserContext } from './UserContext';
import { useParams } from 'react-router';

const SendCard = ()=>{
    const { cardId } = useParams();
    const { selectedCard } = useContext(UserContext);

    const [formData, setFormData] = useState({
        from: {
            fullName:'',
            email:''
        },
        to:{
            email:'',
        },
        customMessage:'',
    });
    // const [formError, setFormError] = useState();

    console.log("selectedCard",selectedCard);
    console.log("cards[selectedCard]",cards[selectedCard]);

    const handleClick = (ev)=>{
        ev.preventDefault();
        const selectedCardHtml =  cards[selectedCard].html;
        console.log("selectedCardHtml",selectedCardHtml);
        const selectedCardImagePath =  cards[selectedCard].image[0];
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
                {cardId==="birthday1" 
                ? <Birthday1/> 
                : cardId==="birthday2" 
                ? <div>Birthday2</div> 
                : <div>Card not found</div>}
            </Wrapper>

            <Form>
                <label><b>From</b></label>
                    <label>Full Name</label>
                    <input type="text" 
                        value={formData.from.fullName} 
                        onChange={(ev)=>{setFormData({...formData, from: {...formData.from,fullName: ev.target.value}})}}
                    />

                    <label>Email</label>
                    <input type="email" 
                        value={formData.from.email} 
                        onChange={(ev)=>{setFormData({...formData, from: {...formData.from, email: ev.target.value} })}}
                    />

                <label><b>To</b></label>
                    <label>Email</label>
                    <input type="email" 
                        value={formData.to.email} 
                        onChange={(ev)=>{setFormData({...formData, to: {...formData.to, email: ev.target.value} })}}
                    />

                <label><b>Custom Message</b></label>
                <input type="text" 
                    value={formData.customMessage} 
                    onChange={(ev)=>{setFormData({...formData, customMessage: ev.target.value})}}
                />

                <button onClick={handleClick}>Send Card</button>
            </Form>

        </>
    );
};

const Wrapper = styled.div`
width:90%;
margin:15px;
`;

const Form = styled.form`
margin-bottom:15px;
display:flex;
flex-direction:column;
width:40%;
`;

export default SendCard;