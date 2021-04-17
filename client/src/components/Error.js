import React from 'react';
import styled from 'styled-components';

const Error = ({children})=>{
    return(
        <Wrapper>{children}</Wrapper>
    );
};

const Wrapper = styled.div`
padding:10px; 
margin-top: 15px;
margin-bottom: 15px;
border-radius:5px;
background: #FFCCCC;
`;

export default Error;