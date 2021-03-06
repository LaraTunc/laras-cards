import React, { useContext, useState } from "react";
import styled from "styled-components";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";
import { UserContext } from "./UserContext";
import Account from "./Account";
import Spinner from "./Spinner";
import Error from "./Error";
import Title from "./Title";
import { passwordIsValid } from "./utils";

const ResetPassword = () => {
  const { status, user, setUser, setStatus } = useContext(UserContext);
  const [error, setError] = useState();
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [formError, setFormError] = useState();
  const [clicked, setClicked] = useState();

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setClicked(true);

    //validate form data for errors
    if (!passwordIsValid(newPassword)) {
      setFormError(
        "Password must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
      );
      setStatus("idle");
    } else {
      // if validated start process
      fetch(`${process.env.REACT_APP_API_URL}/reset-password`, {
        method: "POST",
        body: JSON.stringify({ _id: user._id, newPassword }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          // console.log(json);
          setStatus("idle");
          if (json.status === 200) {
            // if successful (200) show message
            setMessage(json.message);
            setUser(json.user);
            setError("");
          } else {
            // if error display error
            setError("An error occurred please try again.");
            setStatus("idle");
          }
        });
    }
  };

  return (
    <Account>
      <Wrapper>
        {message ? (
          <Title>{message}</Title>
        ) : (
          <>
            <h3>Reset password</h3>
            <Form>
              <Input
                type={"password"}
                placeholder={"Enter new password"}
                value={newPassword}
                onChange={(ev) => {
                  setNewPassword(ev.target.value);
                }}
                highlight={
                  clicked &&
                  (passwordIsValid(newPassword) ? "default" : "2px solid red")
                }
              />
              <Button onClick={handleClick}>
                {status === "idle" ? "Reset password" : <Spinner />}
              </Button>
              {error && <Error>{error}</Error>}
              {formError && <Error>{formError}</Error>}
            </Form>
          </>
        )}
      </Wrapper>
    </Account>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default ResetPassword;
