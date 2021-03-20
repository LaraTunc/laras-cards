import React, { useContext } from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter,
  Switch,
  Route} from 'react-router-dom';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import Homepage from './Homepage';
import AboutUs from './AboutUs';
import SendCard from './SendCard';
import BirthdayCards from './BirthdayCards';
import { UserContext } from './UserContext';
import XmasCards from './XmasCards';
import ValentinesCards from './ValentinesCards';
import FunnyCards from './FunnyCards';
import CustomCards from './CustomCards';
import ContactUs from './ContactUs';

const App = ()=> {
  const { status, error } = useContext(UserContext);

  return (
    <BrowserRouter>
      <Wrapper>
        <Wrapper2>
          <GlobalStyles/>
          <Navbar/>
          { error 
          ? (<div>{error}</div>) 
          : status === "loading" 
          ? (<div>Loading</div>)
          : ( 
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
              <BirthdayCards />
            </Route>
            <Route exact path="/christmas">
              <XmasCards />
            </Route>
            <Route exact path="/valentines">
              <ValentinesCards/>
            </Route>
            <Route exact path="/funny">
              <FunnyCards/>
            </Route>
            <Route exact path="/custom">
              <CustomCards/>
            </Route>
            <Route exact path="/:cardId/send">
              <SendCard/>
            </Route>
            <Route exact path="/contact-us">
              <ContactUs/>
            </Route>
            <Route exact path="/portfolio">
              <div>This is my portfolio</div>
            </Route>
          </Switch>
          )}
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
