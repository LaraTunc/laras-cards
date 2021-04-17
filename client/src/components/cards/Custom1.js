import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Custom1 = () => {
  const { customMessage } = useContext(UserContext);
  return (
    <Wrapper>
      <Left>
        <Img src=".././custom1.gif" alt="gif" />
      </Left>
      <Right>
        <Title>{customMessage ? customMessage : "Insert custom message"}</Title>
      </Right>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linen;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: stretch;
  align-content: stretch;
  height: 100%;
  width: 100%;
`;

const Left = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Img = styled.img`
  max-height: 80%;
`;

const Title = styled.p`
  text-align: center;
  color: maroon;
  margin: 5px;
`;

export default Custom1;
