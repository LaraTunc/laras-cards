import React from "react";
import styled from "styled-components";

const Funny2 = () => {
  return (
    <Wrapper>
      <Title>I lose my head around you</Title>
      <Img src=".././funny2.png" alt="ned_stark" />
      <Div>
        <Img src=".././funny2_3.gif" alt="ned_stark" />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  max-width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

const Title = styled.h6`
  margin-top: 2%;
  text-align: center;
  width: 100%;
`;

const Img = styled.img`
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Div = styled.div`
  position: absolute;
  left: 5%;
  bottom: 5%;
  width: 40%;
`;

export default Funny2;
