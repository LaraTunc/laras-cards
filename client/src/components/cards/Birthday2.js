import React from "react";
import styled from "styled-components";

const Birthday2 = () => {
  return (
    <Wrapper>
      <Title>
        Happy birthday to one of the few people whose birthday I can remember
        without a Facebook reminder.
      </Title>
      <Img src=".././birthday2.gif" alt="birthday_cake" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ffa07a;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  align-content: stretch;
`;

const Title = styled.p`
  text-align: center;
  color: #5e2605;
  font-weight: bolder;
  margin: 2%;
  margin-top: 5%;
`;

const Img = styled.img`
  height: 60%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2%;
`;

export default Birthday2;
