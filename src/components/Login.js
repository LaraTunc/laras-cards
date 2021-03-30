import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import Title from "./Title";
import { UserContext } from "./UserContext";
import Error from "./Error";
import Spinner from "./Spinner";
import { emailIsValid, passwordIsValid } from "./utils";

const Login = () => {
  const { status, setUserId, setUser, setStatus } = useContext(UserContext);
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
        "Password cannot be shorter than 3 characters. For now. Fix this to 8."
      );
      setStatus("idle");
    } else {
      // start process if no form errors
      fetch("/login", {
        method: "POST",
        body: JSON.stringify({ ...formData }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          setStatus("idle");
          // if successful (200) setUser
          if (json.status === 200) {
            setUserId(json.userId);
            setUser(json.user);
            setError("");
            history.push("/");
          } else {
            // if error display error
            setError(json.error);
          }
        });
    }
  };

  return (
    <Wrapper>
      <Title>Login</Title>
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
          {status === "idle" ? "Login" : <Spinner />}
        </Button>
        {error && <Error>{error}</Error>}
        {formError && <Error>{formError}</Error>}
      </Form>
      <StyledLink to="/forgot-password">Forgot my password?</StyledLink>
      <StyledLink to="/sign-up">I don't have an account</StyledLink>
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

const StyledLink = styled(NavLink)`
  color: gray;
  margin-top: 5px;
`;

export default Login;
