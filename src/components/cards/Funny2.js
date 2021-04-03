import React from "react";
import styled from "styled-components";

const Funny2 = () => {
  return (
    <Wrapper>
      <Title>I lose my head around you...</Title>
      <Img1 src=".././funny2.png" alt="ned_stark" />
      <Img2 src=".././funny2_3.gif" alt="got" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  font-family: sans-serif;
  display: flex;
  align-items: stretch;
  align-content: stretch;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  border: 1px solid black;
`;

const Title = styled.p`
  margin-top: 2%;
  text-align: center;
  width: 100%;
  z-index: 5;
`;

const Img1 = styled.img`
  position: absolute;
  right: 0%;
  bottom: 0%;
  height: 85%;
`;

const Img2 = styled.img`
  position: absolute;
  left: 5%;
  bottom: 5%;
  height: 60%;
`;

export default Funny2;
