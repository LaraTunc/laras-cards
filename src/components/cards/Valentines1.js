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
        <Div>
          <Img src=".././valentines1_1.gif" alt="lovers" />
        </Div>
      </Wrapper2>
      <Title>You are my kind of weird! Happy Valentine's day.</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: white;
  max-width: 100%;
  height: 100%;
  font-family: sans-serif;
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px 0px;
  * {
    flex: 1;
  }
`;

const Wrapper2 = styled.div`
  display: flex;
  * {
    flex: 1;
  }
`;

const Title = styled.h6`
  text-align: center;
  position: absolute;
  top: 50%;
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
  width: 100%;
  height: 100%;
`;

export default Valentines1;
