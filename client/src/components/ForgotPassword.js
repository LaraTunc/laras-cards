import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Error from "./Error";
import Form from "./Form";
import Input from "./Input";
import Spinner from "./Spinner";
import Title from "./Title";
import { UserContext } from "./UserContext";
import { emailIsValid } from "./utils";

const ForgotPassword = () => {
  const { status, setStatus } = useContext(UserContext);
  const [error, setError] = useState();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState();
  const [clicked, setClicked] = useState();

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    //validate form data for errors
    if (!emailIsValid(email)) {
      setFormError("Email is invalid");
      setStatus("idle");
    } else {
      // if validated start process
      fetch(`${process.env.REACT_APP_API_URL}/forgot-password`, {
        method: "POST",
        body: JSON.stringify({ email }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setStatus("idle");
          setError("");
          // if successful (200) display message and go to Login
          if (json.status === 200) {
            setMessage(json.message);
          } else {
            // if error display error
            setStatus("idle");
            setError("An error occurred please try again.");
          }
        });
    }
  };

  return (
    <Wrapper>
      {message ? (
        <Title>{message}</Title>
      ) : (
        <>
          <Title>Forgot Password</Title>
          <Form>
            <Input
              type={"email"}
              placeholder={"Enter email"}
              value={email}
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              highlight={
                clicked && (emailIsValid(email) ? "default" : "2px solid red")
              }
            />
            <Button onClick={handleClick}>
              {status === "idle" ? "Submit" : <Spinner />}
            </Button>
            {error && <Error>{error}</Error>}
            {formError && <Error>{formError}</Error>}
          </Form>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default ForgotPassword;
