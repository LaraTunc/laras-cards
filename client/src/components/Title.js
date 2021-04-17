import React from "react";
import styled from "styled-components";

const Title = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

const Wrapper = styled.h1`
  margin-top: 30px;
`;

export default Title;
