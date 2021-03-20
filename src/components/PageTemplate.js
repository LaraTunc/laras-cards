import React from 'react';
import styled from 'styled-components';

const PageTemplate = ({cardType, children})=> {
    return (
        <Wrapper>
            <Title>{cardType} Cards</Title>
            <CardWrapper>
                {children}
            </CardWrapper>
        </Wrapper>
    );
};

const Wrapper = styled.div`
width: 90%;
`;

const Title = styled.h1`
text-align:center;
padding: 25px;
`;

const CardWrapper = styled.div`
display: flex;
`;


export default PageTemplate;
