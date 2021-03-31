import React from "react";
import styled from "styled-components";

const Funny7 = () => {
  return (
    <Wrapper>
      <Img src=".././funny7.gif" alt="teddy_bear" />
      <Title>I'm (s)mitten with you</Title>
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
`;

const Img = styled.img`
  width: 60%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h6`
  color: white;
  text-align: center;
  margin: 2% 0%;
`;

export default Funny7;
