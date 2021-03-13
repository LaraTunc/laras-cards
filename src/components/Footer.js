import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Footer = ()=> {
    return (
        <Wrapper>
            <StyledLink to="/contact-us">Contact Us</StyledLink>
            <div>|</div>
            <StyledLink to="/pickup/ecard">Pickup an e-card</StyledLink>
            <div>|</div>
            <StyledLink to="/portfolio">More from Lara</StyledLink>
        </Wrapper>
    );
};

const Wrapper = styled.div`
display:flex; 
justify-content:center;
align-items:center;
width:100%; 
height:40px;
background: yellowgreen;
`;

const StyledLink = styled(NavLink)`
color: black;
font-size: 14px;
text-decoration: none;
margin: 0px 15px;
&:hover {
    cursor: pointer;
};
`;

export default Footer;