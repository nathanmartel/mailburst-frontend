import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const AccountLogin = ({ 
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit 
}) => (
  <Form onSubmit={onSubmit}>
    <Form.Row>
      <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={email} onChange={onEmailChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" value={password} onChange={onPasswordChange} />
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">Login</Button>
  </Form>

);

export default AccountLogin;
