import React, { useContext } from "react";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { UserContext } from "./UserContext";

const activeClassName = 'nav-item-active';

const Navbar = ()=>{
    const { userId } = useContext(UserContext);

    return (
        <Wrapper>
            <LogoLink exact to="/"><Logo src=".././logo.png" alt="logo"/></LogoLink>
            <Links>
                <StyledLink exact to="/">Home</StyledLink>
                <StyledLink to="/about">About</StyledLink>
                {userId 
                    ? <StyledLink to="/account">Account</StyledLink>
                    : <StyledLink to="/login">Login</StyledLink> 
                }
            </Links>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
height: 60px;
padding: 5px;
background: yellowgreen;
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

const LogoLink = styled(NavLink)`
text-decoration: none;
`;

export default Navbar; 