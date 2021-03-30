import React from "react";
import styled from "styled-components";

const Funny1 = () => {
  return (
    <Wrapper>
      <p>
        Dear Friend. You are on my mind today. Everyone else is on my nerves.
        Love, me
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

export default Funny1;
