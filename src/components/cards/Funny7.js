import React from "react";
import styled from "styled-components";

const Funny7 = () => {
  return (
    <Wrapper>
      <Img src=".././funny7.gif" alt="teddy_bear" />
      <Title>❤️ I'm (s)mitten with you ❤️</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #15242c;
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
  color: white;
  text-align: center;
  margin-top: 4%;
`;

export default Funny7;
