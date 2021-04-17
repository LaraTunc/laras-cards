import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Title from "./Title";
import { UserContext } from "./UserContext";
import Error from "./Error";
import Spinner from "./Spinner";
import { emailIsValid, passwordIsValid } from "./utils";

const SignUp = () => {
  const { status, setUser, setStatus } = useContext(UserContext);
  const [error, setError] = useState();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState();
  const [clicked, setClicked] = useState();
  const history = useHistory();

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    //validate form data for errors
    if (!emailIsValid(formData.email)) {
      setFormError("Email is invalid.");
      setStatus("idle");
    } else if (!passwordIsValid(formData.password)) {
      setFormError(
        "Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter."
      );
      setStatus("idle");
    } else {
      // start process if no form errors
      fetch("/sign-up", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setStatus("idle");
          // if successful (200) setUser
          if (json.status === 201) {
            setUser(json.user);
            setError("");
            history.push("/");
          } else {
            // if error display error
            setError("An error occurred please try again.");
            setStatus("idle");
          }
        });
    }
  };

  return (
    <Wrapper>
      <Title>Sign Up</Title>
      <Form>
        <Input
          type={"email"}
          placeholder={"Enter email"}
          value={formData.email}
          onChange={(ev) => {
            setFormData({ ...formData, email: ev.target.value });
          }}
          highlight={
            clicked &&
            (emailIsValid(formData.email) ? "default" : "2px solid red")
          }
        />
        <Input
          type={"password"}
          placeholder={"Enter password"}
          value={formData.password}
          onChange={(ev) => {
            setFormData({ ...formData, password: ev.target.value });
          }}
          highlight={
            clicked &&
            (passwordIsValid(formData.password) ? "default" : "2px solid red")
          }
        />
        <Button onClick={handleClick}>
          {status === "idle" ? "Sign Up" : <Spinner />}
        </Button>
        {error && <Error>{error}</Error>}
        {formError && <Error>{formError}</Error>}
      </Form>
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

export default SignUp;
