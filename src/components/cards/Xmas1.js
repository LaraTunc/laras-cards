import React from "react";
import styled from "styled-components";

const Xmas1 = () => {
  return (
    <Wrapper>
      <Title>Merry Christmas and Happy Holidays!</Title>
      <Img src=".././xmas1.gif" alt="fireworks" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  max-width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h6`
  position: absolute;
  width: 100%;
  text-align: center;
  color: white;
  top: 50%;
  z-index: 5;
`;

export default Xmas1;
