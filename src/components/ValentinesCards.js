import React, { useContext } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { UserContext } from "./UserContext";
import PageTemplate from "./PageTemplate";
import { cards } from "./CardsData";

const ValentinesCards = ({ cardType }) => {
  const { selectedCard, setSelectedCard } = useContext(UserContext);
  let history = useHistory();

  const cardsArray = Object.values(cards);
  const valentinesCards = cardsArray.filter((card) => {
    return card.type === cardType;
  });

  const handleClick = (cardId) => {
    console.log("cardId", cardId);
    setSelectedCard(cardId);
    console.log("selectedCard", selectedCard);
    history.push(`/${cardId}/send`);
  };

  return (
    <PageTemplate cardType={cardType}>
      {valentinesCards.map((card) => {
        return (
          <Card onClick={() => handleClick(card.id)} tabindex="0" key={card.id}>
            {card.component}
          </Card>
        );
      })}
    </PageTemplate>
  );
};

const Card = styled.div`
  margin: 20px;
  width: 300px;
  height: 200px;
  font-size: 12px;
  font-weight: bold;
  &:hover {
    transform: scale(1.1);
  }
`;

export default ValentinesCards;
