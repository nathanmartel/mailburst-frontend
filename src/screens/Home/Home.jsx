import React from 'react';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

const Home = () => (
  <Container className="p-3">
    <Jumbotron>
      <h1 className="header">Welcome To MailBurst</h1>
      <Button href="/campaign/create" size="lg">Create a Campaign</Button>
    </Jumbotron>
  </Container>
);

export default Home;
