import React from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const activeClassName = 'nav-item-active';


const Navbar = ()=>{
    return (
        <NavArea>
            <Logo src=".././logo.png" alt="logo"/>
            <Links>
                <StyledLink exact to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                <StyledLink to="/account/login">Login</StyledLink>
            </Links>
        </NavArea>
    );
};

const NavArea = styled.div`
width: 100%;
height: 60px;
padding: 5px;
background: gray;
display:flex;
justify-content: space-between;
`;

const Logo = styled.img`
height:100%;
`;

const Links = styled.div`
display:flex; 
justify-content: end;
align-items:center;
`;

const StyledLink = styled(NavLink).attrs({ activeClassName })`
color: black;
font-size: 20px;
text-decoration: none;
margin: 0px 15px;
&:hover {
    border-bottom: 2px solid black;
};
&:visited {
    text-decoration: none;
};
&.${activeClassName} {
    border-bottom: 2px solid black;
};
`;

export default Navbar; 