import React from 'react';
import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const Spinner = ()=>{
    return (
        <StyledSpinner/>
    );
};

const spin = keyframes`
    from {
        transform: rotate(0deg);
        }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSpinner = styled(FaSpinner)`
animation: ${spin} infinite 5s linear;
`;

export default Spinner;