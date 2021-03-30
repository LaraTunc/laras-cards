import React from "react";
import styled from "styled-components";

const Funny6 = () => {
  return (
    <Wrapper>
      <p>
        Roses are Red. Violets are Blue. I have 5 fingers. The middle one is for
        you.
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

export default Funny6;
