import React from "react";
import styled from "styled-components";

const Birthday2 = () => {
  return (
    <Wrapper>
      <p>
        Happy birthday to one of the few people whose birthday I can remember
        without a Facebook reminder.
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

export default Birthday2;
