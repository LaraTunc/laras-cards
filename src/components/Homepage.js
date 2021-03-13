import React from "react";
import styled from 'styled-components';
import CardBubble from "./CardBubble";
import Title from "./Title";

const Homepage = ()=> {
    return (
        <>
            <Title text={"Pick Card Type"}/>
            <Cards>
                <CardBubble path={"/birthday"} icon={"🎂"} type={"Birthday"}/>
                <CardBubble path={"/christmas"} icon={"❄️"} type={"Xmas"}/>
                <CardBubble path={"/valentines"} icon={"💖"} type={"Valentine's Day"}/>
                <CardBubble path={"/funny"} icon={"😂 "} type={"Funny"}/>
                <CardBubble path={"/custom"} icon={"⭐ "} type={"Custom"}/>
            </Cards>
        </>
    );
};

const Cards = styled.div`
display:flex;
justify-content:space-between;
margin-top: 30px;
`;

const Set = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`;

const Icon = styled.div`
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
width: 150px;
height: 150px;
background: beige;
`;

const Label = styled.div`
margin-top:15px;
`;

export default Homepage;