import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const NotFound = () => (
  <Container className="p-3">
    <h1 className="header">Not Found</h1>
    <Link to="/">
      <Button variant="primary" type="button">Go Home</Button>
    </Link>
  </Container>
);

export default NotFound;
