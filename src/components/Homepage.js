import React from "react";
import styled from 'styled-components';
import CardBubble from "./CardBubble";
import Title from "./Title";

const Homepage = ()=> {
    return (
        <>
            <Title text={"Pick Card Type"}/>
            <Cards>
                <CardBubble path={"/birthday"} imgPath={"../.././birthday.png"} type={"Birthday"}/>
                <CardBubble path={"/christmas"} imgPath={"../.././snowflake.png"} type={"Xmas"}/>
                <CardBubble path={"/valentines"} imgPath={"../.././heart.png"} type={"Valentine's Day"}/>
                <CardBubble path={"/funny"} imgPath={"../.././funny.png"} type={"Funny"}/>
                <CardBubble path={"/custom"} imgPath={"../.././star.png"} type={"Custom"}/>
            </Cards>
        </>
    );
};

const Cards = styled.div`
display:flex;
justify-content:space-between;
margin-top: 30px;
`;

export default Homepage;