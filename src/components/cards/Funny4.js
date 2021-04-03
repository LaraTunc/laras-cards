import React from "react";
import styled from "styled-components";

const Funny4 = () => {
  return (
    <Wrapper>
      <Img src=".././funny4.gif" alt="kris_jenner" />
      <Title>It's always 5 o'clock in quarantine 🍼 </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffc0cb;
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
  margin: 5% 0%;
`;

export default Funny4;
