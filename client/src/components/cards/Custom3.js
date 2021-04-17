import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Custom3 = () => {
  const { customMessage } = useContext(UserContext);
  return (
    <Wrapper>
      <Title>{customMessage ? customMessage : "Insert custom message"}</Title>
      <Img src=".././custom3.gif" alt="gif" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #87aca3;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  width: 100%;
`;

const Title = styled.p`
  text-align: center;
  color: black;
  margin-top: 3%;
`;

const Img = styled.img`
  max-height: 80%;
  width: 100%;
`;

export default Custom3;
