import React from "react";
import styled from "styled-components";

const Birthday1 = () => {
  return (
    <Wrapper>
      <Left>
        <Img src=".././birthday1.gif" alt="cat" />
      </Left>
      <Right>
        <Title>Happy Birthday!</Title>
        <Title>Another year of you is a reason to celebrate.</Title>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linen;
  max-width: 100%;
  height: 100%;
  padding: 10px;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  text-align: center;
  color: maroon;
  margin: 5px;
  margin-bottom: 8px;
`;

const Img = styled.img`
  max-width: 80%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

export default Birthday1;
