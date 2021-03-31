import React from "react";
import styled from "styled-components";

const Funny6 = () => {
  return (
    <Wrapper>
      <Title>
        Roses are Red.
        <br />
        Violets are Blue.
        <br />I have 5 fingers.
        <br />
        The middle one is for you.
      </Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: black;
  background-image: url(".././funny6.gif");
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Title = styled.p`
  font-size: larger;
  color: white;
  text-align: center;
`;

export default Funny6;
