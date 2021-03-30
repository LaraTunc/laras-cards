import React, { useContext, useState } from "react";
import styled from "styled-components";
import { cards } from "./cards/cardsData/cardsData";
import { useHistory, useParams } from "react-router";
import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import { UserContext } from "./UserContext";
import Error from "./Error";
import Spinner from "./Spinner";
import { fullNameIsValid, emailIsValid } from "./utils";

const SendCard = () => {
  const { cardId } = useParams();
  const { status, user, userId, setStatus } = useContext(UserContext);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    from: {
      fullName: "",
      email: "",
    },
    to: {
      email: "",
    },
  });
  const [formError, setFormError] = useState();
  const [clicked, setClicked] = useState();
  const history = useHistory();

  // find card based on id and get it's component
  const cardsArray = Object.values(cards);
  const card = cardsArray.find((cardObject) => {
    return cardObject.id === cardId;
  });
  const cardComponent = card.component;

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    //validate form data for errors
    if (!fullNameIsValid(formData.from.fullName)) {
      setFormError("Full name cannot be shorter than 2 characters.");
      setStatus("idle");
    } else if (!user && !emailIsValid(formData.from.email)) {
      setFormError("Sender email is incorrect.");
      setStatus("idle");
    } else if (user && !emailIsValid(user.email)) {
      setFormError("Sender email is incorrect.");
      setStatus("idle");
    } else if (!emailIsValid(formData.to.email)) {
      setFormError("Recipient email is incorrect.");
      setStatus("idle");
    } else {
      // start process if no form errors
      const selectedCardHtml = card.html;
      const selectedCardAttachments = card.attachments;
      // sanitize email data
      fetch("/send-card", {
        method: "POST",
        body: JSON.stringify({
          userId,
          cardId,
          formData,
          selectedCardHtml,
          selectedCardAttachments,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStatus("idle");
          if (json.status === 200) {
            // if successful push to success page
            setStatus("idle");
            history.push("/confirmation");
          } else {
            // if error display error
            setError(json.error);
          }
        });
    }
  };

  return (
    <>
      <Wrapper>{cardComponent}</Wrapper>

      <Form>
        <Label>
          <b>From</b>
        </Label>
        <Input
          type={"text"}
          value={formData.from.fullName}
          placeholder={"Full display name"}
          onChange={(ev) => {
            setFormData({
              ...formData,
              from: { ...formData.from, fullName: ev.target.value },
            });
          }}
          highlight={
            clicked &&
            (fullNameIsValid(formData.from.fullName)
              ? "default"
              : "2px solid red")
          }
        />

        <Input
          type={"email"}
          value={user ? user.email : formData.from.email}
          placeholder={user ? "" : "Email"}
          onChange={
            user
              ? () => {}
              : (ev) => {
                  setFormData({
                    ...formData,
                    from: { ...formData.from, email: ev.target.value },
                  });
                }
          }
          highlight={
            clicked &&
            (user
              ? emailIsValid(user.email)
                ? "default"
                : "2px solid red"
              : emailIsValid(formData.from.email)
              ? "default"
              : "2px solid red")
          }
        />

        <Label>
          <b>To</b>
        </Label>
        <Input
          type={"email"}
          value={formData.to.email}
          placeholder={"Email"}
          onChange={(ev) => {
            setFormData({
              ...formData,
              to: { ...formData.to, email: ev.target.value },
            });
          }}
          highlight={
            clicked &&
            (emailIsValid(formData.to.email) ? "default" : "2px solid red")
          }
        />

        <Button onClick={handleClick}>
          {status === "idle" ? "Send Card" : <Spinner />}
        </Button>
        {error && <Error>{error}</Error>}
        {formError && <Error>{formError}</Error>}
      </Form>
    </>
  );
};

const Wrapper = styled.div`
  width: 90%;
  margin: 15px;
`;

const Label = styled.label`
  margin-top: 10px;
`;

export default SendCard;
