import React, { useContext } from "react";
import styled from "styled-components";
import { UserContext } from "../UserContext";

const Custom2 = () => {
  const { customMessage } = useContext(UserContext);
  return (
    <Wrapper>
      <Wrapper2>
        <Img src=".././custom2_2.gif" alt="gif2" />
        <Img1 src=".././custom2.gif" alt="gif" />
        <Img src=".././custom2_2.gif" alt="gif2" />
      </Wrapper2>
      <Title>{customMessage ? customMessage : "Insert custom message"}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: #ecf87f;
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Wrapper2 = styled.div`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin-top: 5%;
  margin-bottom: 5%;
`;

const Img1 = styled.img`
  max-height: 100%;
  max-width: 40%;
`;

const Img = styled.img`
  max-width: 25%;
  height: 70%;
`;

const Title = styled.p`
  text-align: center;
  color: black;
  margin: 5px;
`;

export default Custom2;
