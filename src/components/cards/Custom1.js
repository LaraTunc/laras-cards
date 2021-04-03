import React from "react";
import styled from "styled-components";

const Custom1 = () => {
  return (
    <Wrapper>
      <Title>Custom card</Title>
      <Wrapper2>
        <Left>
          <Img src=".././giphy.gif" alt="cat" />
        </Left>
        <Right>
          <p>Insert custom message</p>
        </Right>
      </Wrapper2>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: linen;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
`;

const Title = styled.p`
  text-align: center;
  color: maroon;
  margin: 5px;
  margin-bottom: 8px;
`;

const Wrapper2 = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  height: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
`;

export default Custom1;
