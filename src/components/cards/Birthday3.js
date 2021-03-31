import React from "react";
import styled from "styled-components";

const Birthday3 = () => {
  return (
    <Wrapper>
      <Img src=".././birthday3.gif" alt="birthday_candles" />
      <Title>
        I hope you have a great day today and the year ahead is full of many
        blessings.
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  max-width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h6`
  text-align: center;
  color: white;
  margin: 5px;
  margin-bottom: 8px;
`;

const Img = styled.img`
  max-width: 60%;
`;

export default Birthday3;
