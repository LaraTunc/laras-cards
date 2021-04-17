import React, { useContext, useState } from "react";
import styled from "styled-components";
import { cards } from "./CardsData";
import { useHistory, useParams } from "react-router";
import Input from "./Input";
import Form from "./Form";
import Button from "./Button";
import { UserContext } from "./UserContext";
import Error from "./Error";
import Spinner from "./Spinner";
import { firstNameIsValid, lastNameIsValid, emailIsValid } from "./utils";

const SendCard = () => {
  const { cardId } = useParams();
  const {
    status,
    user,
    setStatus,
    customMessage,
    setCustomMessage,
  } = useContext(UserContext);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    from: {
      firstName: "",
      lastName: "",
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
  const cardType = card.type;

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    //validate form data for errors
    if (!firstNameIsValid(formData.from.firstName)) {
      setFormError("First name cannot be shorter than 2 characters.");
      setStatus("idle");
    } else if (!user && !lastNameIsValid(formData.from.lastName)) {
      setFormError("Last name cannot be shorter than 1 character.");
      setStatus("idle");
    } else if (user && !emailIsValid(user.email)) {
      setFormError("Sender email is incorrect.");
      setStatus("idle");
    } else if (!emailIsValid(formData.to.email)) {
      setFormError("Recipient email is incorrect.");
      setStatus("idle");
    } else {
      // start process if no form errors
      fetch(`${process.env.REACT_APP_API_URL}/send-card`, {
        mode: "no-cors",
        method: "POST",
        body: JSON.stringify({
          user,
          cardId,
          formData,
          customMessage,
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setStatus("idle");
          setCustomMessage("");
          if (json.status === 200) {
            // if successful push to success page
            history.push("/confirmation");
          } else {
            // if error display error
            setError("An error occurred please try again.");
            setStatus("idle");
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
          value={formData.from.firstName}
          placeholder={"First name"}
          onChange={(ev) => {
            setFormData({
              ...formData,
              from: { ...formData.from, firstName: ev.target.value },
            });
          }}
          highlight={
            clicked &&
            (firstNameIsValid(formData.from.firstName)
              ? "default"
              : "2px solid red")
          }
        />

        <Input
          type={"text"}
          value={formData.from.lastName}
          placeholder={"Last name"}
          onChange={(ev) => {
            setFormData({
              ...formData,
              from: { ...formData.from, lastName: ev.target.value },
            });
          }}
          highlight={
            clicked &&
            (lastNameIsValid(formData.from.lastName)
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

        {cardType === "custom" && (
          <>
            <Label>
              <b>Custom Message</b>
            </Label>
            <StyledTextarea
              type={"text"}
              value={customMessage}
              placeholder={"Custom Message"}
              onChange={(ev) => {
                setCustomMessage(ev.target.value);
              }}
            />
          </>
        )}

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
  width: 750px;
  height: 500px;
  display: flex;
  margin: 15px;
  font-size: 32px;
  font-weight: bold;
`;

const Label = styled.label`
  margin-top: 10px;
`;

const StyledTextarea = styled.textarea`
  border-radius: 5px;
  border: 1px solid lightgray;
  height: 5em;
  margin-top: 15px;
  &:focus {
    outline: none;
    box-shadow: 0 0 10px #9ecaed;
  }
`;

export default SendCard;
