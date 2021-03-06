import React, { useContext } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import Account from "./Account";
import Button from "./Button";
import Spinner from "./Spinner";
import { UserContext } from "./UserContext";

const Logout = () => {
  const { status, setUser, setStatus } = useContext(UserContext);
  const history = useHistory();

  const handleClick = (ev) => {
    ev.preventDefault();
    setStatus("loading");
    setUser();
    setStatus("idle");
    history.push("/");
  };

  return (
    <Account>
      <Wrapper>
        <Button onClick={handleClick}>
          {status === "idle" ? "Logout" : <Spinner />}
        </Button>
      </Wrapper>
    </Account>
  );
};

const Wrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default Logout;
