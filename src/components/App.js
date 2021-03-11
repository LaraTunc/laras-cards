import React, { useState, useEffect } from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter,
  Switch,
  Route } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  const [bacon, setBacon] = useState(null);

  useEffect(() => {
    fetch('/bacon')
      .then(res => res.json())
      .then(data => setBacon(data));
  }, []);
  
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Navbar/>
      <Switch>
        <Route exact path="/">
          <div>{bacon ? `Homepage ${bacon}` : "No bacon"}</div>
        </Route>
        <Route exact path="/birthday">
          <div>Birthday cards</div>
        </Route>
        <Route exact path="/christmas">
          <div>Christmas cards</div>
        </Route>
        <Route exact path="/funny">
          <div>Funny cards</div>
        </Route>
        <Route exact path="/custom">
          <div>Create your own cards</div>
        </Route>
      </Switch>
      <div>Footer</div>
    </BrowserRouter>
  );
}

export default App;
