import React from "react";
import styled from "styled-components";

const Funny5 = () => {
  return (
    <Wrapper>
      <p>This isn't a card. It's an e-hug.</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: lightyellow;
  max-width: 100%;
  max-height: 500px;
  padding: 10px;
  font-family: sans-serif;
`;

export default Funny5;
