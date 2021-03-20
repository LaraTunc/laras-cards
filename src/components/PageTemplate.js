import React from 'react';
import styled from 'styled-components';

const PageTemplate = ({cardType, children})=> {
    const capitalize = (word) => {
        if (typeof word !== 'string') return ''
        return word.charAt(0).toUpperCase() + word.slice(1)
    };
    const formattedCardType=capitalize(cardType);

    return (
        <Wrapper>
            <Title>{formattedCardType} Cards</Title>
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
