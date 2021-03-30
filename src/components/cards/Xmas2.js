import React from "react";
import styled from "styled-components";

const Xmas2 = () => {
  return (
    <Wrapper>
      <p>
        It's not what's under the christmas tree that matters. It's who's around
        it.
      </p>
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

export default Xmas2;
