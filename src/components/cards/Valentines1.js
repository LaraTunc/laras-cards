import React from "react";
import styled from "styled-components";

const Valentines1 = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <Div>
          <Img src=".././valentines1.gif" alt="lovers" />
        </Div>
        <Div />
      </Wrapper2>
      <Wrapper2>
        <Div />
        <Div2>
          <Img src=".././valentines1_1.gif" alt="lovers" />
        </Div2>
      </Wrapper2>
      <Title>You are my kind of weird! Happy Valentine's day.</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  width: 100%;
  height: 100%;
  font-family: sans-serif;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  * {
    flex: 1;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  * {
    flex: 1;
  }
`;

const Title = styled.p`
  text-align: center;
  position: absolute;
  top: 50%;
  width: 100%;
`;

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Div2 = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;

const Img = styled.img`
  max-width: 100%;
  min-width: 50%;
  max-height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default Valentines1;
