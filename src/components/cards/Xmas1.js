import React from "react";
import styled from "styled-components";

const Xmas1 = () => {
  return (
    <Wrapper>
      <Img src=".././xmas1.gif" alt="fireworks" />
      <Title>Merry Christmas and Happy Holidays!</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`;

const Img = styled.img`
  width: 100%;
  max-height: 80%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.p`
  width: 100%;
  text-align: center;
  color: white;
  margin-top: 3%;
`;

export default Xmas1;
