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
  background: #dae7dd;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
  width: 100%;
`;

const Title = styled.p`
  text-align: center;
  color: maroon;
  margin: 5px;
`;

const Img = styled.img`
  height: 100%;
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default Birthday1;
