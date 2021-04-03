import React from "react";
import styled from "styled-components";

const Funny5 = () => {
  return (
    <Wrapper>
      <Title>This isn't a card. It's an e-hug.</Title>
      <Img src=".././funny5.gif" alt="teddy_bear" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #83ceff;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

const Img = styled.img`
  height: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.p`
  color: black;
  text-align: center;
  margin: 2% 0%;
`;

export default Funny5;
