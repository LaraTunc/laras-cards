import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Title from './Title';

const ContactConfirmation = ()=>{
    return (
        <Wrapper>
            <Title>Your message has been successfully sent!</Title>
            <StyledLink to="/"><Button>Click here to return to homepage.</Button></StyledLink>
        </Wrapper>
    );
};


const Wrapper = styled.div`
height: 100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`;

const StyledLink = styled(NavLink)`
text-decoration:none;
`;

export default ContactConfirmation;