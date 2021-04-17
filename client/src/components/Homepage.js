import React from "react";
import styled from "styled-components";
import CardBubble from "./CardBubble";
import Title from "./Title";

const Homepage = () => {
  return (
    <>
      <Title>Pick a Card Type</Title>
      <Info>Send e-cards in an instant to anyone in your life!</Info>
      <Cards>
        <CardBubble
          path={"/birthday"}
          imgPath={"../.././birthday.png"}
          type={"Birthday"}
          color={"#caffc7"}
        />
        <CardBubble
          path={"/christmas"}
          imgPath={"../.././snowflake.png"}
          type={"Xmas"}
          color={"#c7fbff"}
        />
        <CardBubble
          path={"/valentines"}
          imgPath={"../.././heart.png"}
          type={"Valentine's Day"}
          color={"#ffcac7"}
        />
        <CardBubble
          path={"/funny"}
          imgPath={"../.././funny.png"}
          type={"Funny"}
          color={"#fff8c7"}
        />
        <CardBubble
          path={"/custom"}
          imgPath={"../.././custom.png"}
          type={"Custom"}
          color={"#ebc7ff"}
        />
      </Cards>
    </>
  );
};

const Cards = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
`;

const Info = styled.p`
  margin-top: 30px;
  margin-bottom: 15px;
  width: 70%;
  font-size: 25px;
  text-align: center;
`;

export default Homepage;
