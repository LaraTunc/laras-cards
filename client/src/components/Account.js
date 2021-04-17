import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Title from './Title';
import { UserContext } from './UserContext';

const activeClassName = 'nav-item-active';

const Account = ({children})=>{
const { user } = useContext(UserContext);

    return (
        <Wrapper>
            {!user 
                ? <Title>You do not have an account yet.</Title> 
                : 
                <>
                <Title>My Account</Title>
                <Wrapper2>
                    <Navigation>
                        <div><StyledLink exact to="/account">Account details</StyledLink></div>
                        <div><StyledLink to="/account/history">History</StyledLink></div>
                        <div><StyledLink to="/account/reset-password">Reset password</StyledLink></div>
                        <div><StyledLink to="/account/logout">Logout</StyledLink></div>
                    </Navigation>
                    <Page>{children}</Page>
                </Wrapper2>
                </>
            }
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

const Wrapper2 = styled.div`
width: 100%;
height:100%;
margin: 5%;
display:flex;
`;

const Navigation = styled.div`
flex:1;
display:flex;
flex-direction:column;
`;

const Page = styled.div`
flex:2;
`;

const StyledLink = styled(NavLink).attrs({ activeClassName })`
text-decoration:none;
margin-left: 1em;
color:black;
:hover {
    border-bottom: 2px solid black;
};
&.${activeClassName} {
    border-bottom: 2px solid black;
};
`;

export default Account;