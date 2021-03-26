import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { UserContext } from './UserContext';
import Account from './Account';
import Error from './Error';

const MainAccount = ()=> {
    const { user, setUser } = useContext(UserContext);
    const [ error, setError ] = useState();

    useEffect(()=>{
        fetch("/getUser", {
            method: "POST",
            body: JSON.stringify({email: user.email, password: user.password}),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            // if successful (200) setUser
            if(json.status===200){
                setUser(json.user);
            } else {
                // if error display error 
                setError(json.error);
            }; 
        })
    },[]);

    return (
        <Account>
            <Wrapper>
                <h3>Account details</h3>
                {error && <Error>{error}</Error>}
                <Info><b>User name: </b>{user.userName}</Info> 
                <Info><b>User email: </b>{user.email}</Info>
                <Info><b>User password: </b>{user.password}</Info> 
                <Info><b>User type: </b>{user.type}</Info> 
            </Wrapper>
        </Account>
        
    );
};

const Wrapper = styled.div`
width: 100%;
height:100%;
display:flex;
flex-direction:column;
`;

const Info = styled.div`
margin-top:1em;
`;

export default MainAccount;