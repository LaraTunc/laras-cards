import React from 'react';
import styled from 'styled-components';

const Birthday1 = ()=>{
    return(
        <Wrapper>
            <Title>Happy Birthday!</Title>
            <Wrapper2>
                <Left><Img src=".././giphy.gif" alt="cat"/></Left>
                <Right><p>Insert message</p></Right>
            </Wrapper2>
        </Wrapper>
    );
};

const Wrapper = styled.div`
background: linen; 
max-width: 100%; 
max-height: 500px; 
padding: 10px;
font-family: sans-serif;
`;

const Title = styled.h1`
text-align:center;
color: maroon;
margin: 5px;
margin-bottom: 8px;
`;

const Wrapper2 = styled.div`
display:flex;
justify-content:space-between;
`;

const Img = styled.img`
max-width:100%;
max-height:100%;
display:block;
margin-left:auto;
margin-right:auto;
`;

const Left = styled.div`
flex:1;
`;

const Right = styled.div`
flex:1;
`;

export default Birthday1;
