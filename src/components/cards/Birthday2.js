import React from "react";
import styled from "styled-components";

const Birthday2 = () => {
  return (
    <Wrapper>
      <Title>
        Happy birthday to one of the few people whose birthday I can remember
        without a Facebook reminder.
      </Title>
      <Img src=".././birthday2.gif" alt="birthday_cake_dancing_guy" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: rgba(255, 238, 163, 255);
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h6`
  text-align: center;
  color: black;
  margin: 5px 0px;
`;

const Img = styled.img`
  max-width: 60%;
`;

export default Birthday2;
