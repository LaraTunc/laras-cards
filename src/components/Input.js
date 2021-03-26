import React from 'react';
import styled from 'styled-components';

const Input = ({children, value, type, placeholder, onChange, required, highlight})=> {
    return (
        <StyledInput type={type} value={value} placeholder={placeholder} onChange={onChange} required={required} highlight={highlight}>{children}</StyledInput>
    );
};

const StyledInput = styled.input`
border-radius:5px;
border: 1px solid lightgray;
height: 2em;
margin-top:15px;
&:focus{
    outline: none;
    box-shadow: 0 0 10px #9ecaed;
};
border: ${({highlight})=> highlight};
`;

export default Input;