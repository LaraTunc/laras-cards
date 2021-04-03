import React from "react";
import styled from "styled-components";

const Funny6 = () => {
  return (
    <Wrapper>
      <Img src=".././funny6.gif" alt="stars" />
      <Title>
        🌹 Roses are Red 🌹
        <br />
        💠 Violets are Blue 💠
        <br />I have 5 fingers.
        <br />
        The middle one is for you.
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  height: 100%;
  width: 100%;
`;

const Img = styled.img`
  width: 100%;
  max-height: 65%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.p`
  color: white;
  text-align: center;
  margin-top: 1%;
`;

export default Funny6;
