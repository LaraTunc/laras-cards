import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import AboutUs from './AboutUs';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);
  
  return (
    <BrowserRouter>
      <Wrapper>
        <Wrapper2>
          <GlobalStyles/>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Homepage/>
            </Route>
            <Route exact path="/about">
              <AboutUs/>
            </Route>
            <Route exact path="/account/login">
              <div>Login</div>
            </Route>
            <Route exact path="/birthday">
              <div>Birthday cards</div>
            </Route>
            <Route exact path="/christmas">
              <div>Christmas cards</div>
            </Route>
            <Route exact path="/valentines">
              <div>Valentine's day cards</div>
            </Route>
            <Route exact path="/funny">
              <div>Funny cards</div>
            </Route>
            <Route exact path="/custom">
              <div>Create your own card</div>
            </Route>
            <Route exact path="/contact-us">
              <div>Contact Us</div>
            </Route>
            <Route exact path="/pickup/ecard">
              <div>Pickup an e-card</div>
            </Route>
            <Route exact path="/portfolio">
              <div>This is my portfolio</div>
            </Route>
          </Switch>
        </Wrapper2>
        <Footer/>
      </Wrapper>
    </BrowserRouter>
  );
}

const Wrapper = styled.div`
min-height:100vh;
display:flex;
flex-direction:column; 
justify-content: space-between;
`;

const Wrapper2 = styled.div`
display:flex;
flex-direction:column; 
justify-content:flex-start;
align-items:center;
`;

export default App;
