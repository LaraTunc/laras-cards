import React from "react";
import styled from "styled-components";

const Valentines2 = () => {
  return (
    <Wrapper>
      <Img src=".././valentines2.gif" alt="heart" />
      <Title>You are my whole heart... Happy Valentine's day</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  max-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h6`
  text-align: center;
  color: white;
  width: 100%;
  padding: 10px;
`;

export default Valentines2;
