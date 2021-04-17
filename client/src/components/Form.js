import React from 'react';
import styled from 'styled-components';

const Form = ({children})=> {
    return (
        <StyledForm>{children}</StyledForm>
    );
};

const StyledForm = styled.form`
margin-bottom:15px;
display:flex;
flex-direction:column;
width:40%;
`;

export default Form;