import React from "react";
import styled from 'styled-components';

const Title = ({text})=> {
    return(
        <Wrapper>{text}</Wrapper>
    );
};

const Wrapper = styled.h3`
margin-top: 30px;
`;

export default Title;