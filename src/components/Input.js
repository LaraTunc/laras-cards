import React from 'react';
import styled from 'styled-components';

const Input = ({children, type, placeholder, onChange, required})=> {
    return (
        <StyledInput type={type} placeholder={placeholder} onChange={onChange} required={required}>{children}</StyledInput>
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
`;

export default Input;