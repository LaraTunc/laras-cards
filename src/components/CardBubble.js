import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const CardBubble = ({path, imgPath, type})=> {
    return (
        <Wrapper>
            <StyledLink exact to={path}><Img src={imgPath} alt={type}/></StyledLink>
            <Label>{type}</Label>
        </Wrapper>
    );
};

const Wrapper = styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin: 15px;
`;

const StyledLink = styled(NavLink)`
text-decoration: none;
display:flex;
justify-content:center;
align-items:center;
border-radius:50%;
width: 150px;
height: 150px;
background: beige;
&:hover {
    transform: scale(1.1);
};
`;

const Img = styled.img`
max-width:70%; 
max-height:70%;
`;

const Label = styled.div`
margin-top:15px;
`;

export default CardBubble;