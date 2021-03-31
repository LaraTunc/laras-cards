import React from "react";
import styled from "styled-components";

const Funny3 = () => {
  return (
    <Wrapper>
      <Img src=".././funny3.gif" alt="kris_jenner" />
      <Title>Thanks for being my Momager!</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  background-image: url(".././kimoji.png");
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  width: 60%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h6`
  background: #d9ecfa;
  color: #a51d00;
  text-align: center;
  opacity: 0.8;
  margin: 5% 0%;
`;

export default Funny3;
