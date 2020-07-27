import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { BrowserRouter, Switch } from 'react-router-dom';


const App = () => (
  <BrowserRouter>
    <Container className="p-3">
      <Jumbotron>
        <h1 className="header">Welcome To MailBurst</h1>
      </Jumbotron>
    </Container>
    <Switch>
    </Switch>
  </BrowserRouter>
);

export default App;
