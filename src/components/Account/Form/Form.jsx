import React from 'react';
import { Form, Button, Col } from 'react-bootstrap';

const AccountForm = ({ 
  email,
  password,
  firstName,
  lastName,
  role,
  onEmailChange,
  onPasswordChange,
  onFirstNameChange,
  onLastNameChange,
  onRoleChange,
  onSubmit 
}) => (
  <Form onSubmit={onSubmit}>
    
    {/* Refactor this 'Role' option - just testing! */}
    <Form.Row>
      <Form.Group as={Col} controlId="formGridRole">
        <Form.Label>Role</Form.Label>
        <Form.Control type="text" placeholder="Role" value={role} onChange={onRoleChange} />
      </Form.Group>
    </Form.Row>

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

    <Form.Row>
      <Form.Group as={Col} controlId="formGridFirstname">
        <Form.Label>First name</Form.Label>
        <Form.Control type="text" placeholder="First name" value={firstName} onChange={onFirstNameChange} />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastname">
        <Form.Label>Last name</Form.Label>
        <Form.Control type="text" placeholder="Last name" value={lastName} onChange={onLastNameChange} />
      </Form.Group>
    </Form.Row>

    <Form.Group controlId="formGridAddress1">
      <Form.Label>Address</Form.Label>
      <Form.Control placeholder="1234 Main St" />
    </Form.Group>

    <Form.Group controlId="formGridAddress2">
      <Form.Label>Address 2</Form.Label>
      <Form.Control placeholder="Apartment, studio, or floor" />
    </Form.Group>

    <Form.Row>
      <Form.Group as={Col} controlId="formGridCity">
        <Form.Label>City</Form.Label>
        <Form.Control />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridState">
        <Form.Label>State</Form.Label>
        <Form.Control as="select" defaultValue="Choose...">
          <option>Choose...</option>
          <option value="">N/A</option>
          <option value="AK">Alaska</option>
          <option value="AL">Alabama</option>
          <option value="AR">Arkansas</option>
          <option value="AZ">Arizona</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DC">District of Columbia</option>
          <option value="DE">Delaware</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="IA">Iowa</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="MA">Massachusetts</option>
          <option value="MD">Maryland</option>
          <option value="ME">Maine</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MO">Missouri</option>
          <option value="MS">Mississippi</option>
          <option value="MT">Montana</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="NE">Nebraska</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NV">Nevada</option>
          <option value="NY">New York</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="PR">Puerto Rico</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VA">Virginia</option>
          <option value="VT">Vermont</option>
          <option value="WA">Washington</option>
          <option value="WI">Wisconsin</option>
          <option value="WV">West Virginia</option>
          <option value="WY">Wyoming</option>
        </Form.Control>
      </Form.Group>

      <Form.Group as={Col} controlId="formGridZip">
        <Form.Label>Zip</Form.Label>
        <Form.Control />
      </Form.Group>
    </Form.Row>

    <Button variant="primary" type="submit">Sign Up</Button>
  </Form>

);

export default AccountForm;
