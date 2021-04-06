import React from "react";
import GlobalStyles from "./GlobalStyles";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Homepage from "./Homepage";
import AboutUs from "./AboutUs";
import SendCard from "./SendCard";
import BirthdayCards from "./BirthdayCards";
import XmasCards from "./XmasCards";
import ValentinesCards from "./ValentinesCards";
import FunnyCards from "./FunnyCards";
import CustomCards from "./CustomCards";
import ContactUs from "./ContactUs";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import SignUp from "./SignUp";
import ResetPassword from "./ResetPassword";
import MainAccount from "./MainAccount";
import History from "./History";
import Confirmation from "./Confirmation";
import Logout from "./Logout";

const App = () => {
  return (
    <BrowserRouter>
      <Wrapper>
        <Wrapper2>
          <GlobalStyles />
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
            <Route exact path="/about">
              <AboutUs />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
            <Route exact path="/forgot-password">
              <ForgotPassword />
            </Route>
            <Route exact path="/account">
              <MainAccount />
            </Route>
            <Route exact path="/account/reset-password">
              <ResetPassword />
            </Route>
            <Route exact path="/account/history">
              <History />
            </Route>
            <Route exact path="/account/logout">
              <Logout />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>
            <Route exact path="/birthday">
              <BirthdayCards cardType={"birthday"} />
            </Route>
            <Route exact path="/christmas">
              <XmasCards cardType={"xmas"} />
            </Route>
            <Route exact path="/valentines">
              <ValentinesCards cardType={"valentines"} />
            </Route>
            <Route exact path="/funny">
              <FunnyCards cardType={"funny"} />
            </Route>
            <Route exact path="/custom">
              <CustomCards cardType={"custom"} />
            </Route>
            <Route exact path="/:cardId/send">
              <SendCard />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/portfolio">
              <div>This is my portfolio</div>
            </Route>
          </Switch>
        </Wrapper2>
        <Footer />
      </Wrapper>
    </BrowserRouter>
  );
};

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Wrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
