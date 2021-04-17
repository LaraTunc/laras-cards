import React from "react";
import styled from "styled-components";

const Funny3 = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <Img2 src=".././funny3_2.gif" alt="kris_jenner" />
        <Img src=".././funny3.gif" alt="kris_jenner" />
        <Img2 src=".././funny3_2.gif" alt="kris_jenner" />
      </Wrapper2>
      <Title>Thanks for being my Momager!</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #fde8bb;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  align-content: stretch;
`;

const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 45%;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const Img2 = styled.img`
  width: 15%;
  display: inline-block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.p`
  color: #a51d00;
  text-align: center;
  margin: 5% 0%;
`;

export default Funny3;
