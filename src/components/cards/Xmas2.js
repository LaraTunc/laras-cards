import React from "react";
import styled from "styled-components";

const Xmas2 = () => {
  return (
    <Wrapper>
      <Wrapper2>
        <div>
          <Img src=".././xmas2.gif" alt="fireworks" />
        </div>
        <Title>
          It's not what's under the christmas tree that matters. It's who's
          around it.
        </Title>
      </Wrapper2>
      <Img src=".././xmas2_2.png" alt="fireworks" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lightyellow;
  max-width: 100%;
  height: 100%;
  padding: 10px;
  font-family: sans-serif;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  * {
    flex: 1;
  }
`;

const Title = styled.h6`
  text-align: center;
  color: black;
`;

const Img = styled.img`
  max-width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export default Xmas2;
