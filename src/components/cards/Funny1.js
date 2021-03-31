import React from "react";
import styled from "styled-components";

const Funny1 = () => {
  return (
    <Wrapper>
      <Img src=".././funny1.gif" alt="grumpy_cat" />
      <Title>Dear Friend,</Title>
      <Title>You are on my mind today.</Title>
      <Title>Everyone else is on my nerves.</Title>
      <Title>Love, me</Title>
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
  margin-left: 15%;
  margin-right: 15%;
  margin-bottom: 2%;
`;

const Title = styled.p`
  text-align: center;
  color: white;
  width: 100%;
`;

export default Funny1;
