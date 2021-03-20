import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';
import Form from './Form';
import Input from './Input';
import Title from './Title';

const Login = ()=>{
    const handleClick = (ev)=>{
        ev.preventDefault();
    };

    return (
        <Wrapper>
            <Title>Login</Title>
            <Form> 
                <Input type={"email"} placeholder={"Enter email"} required={"required"}/>
                <Input type={"password"} placeholder={"Enter password"} required={"required"}/>
                <Button onClick={handleClick}>Login</Button>
            </Form>
            <StyledLink to="/account/reset-password">Forgot my password?</StyledLink>
            <StyledLink to="/account/sign-up">I don't have an account</StyledLink>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
`;

const StyledLink = styled(NavLink)`
color: gray;
margin-top: 5px;
`;

export default Login;