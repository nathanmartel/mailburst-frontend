import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AccountForm from '../../components/Account/Form/Form';
import { useHistory } from 'react-router';

const ScreensSignup = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  
  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/api/v1/users/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
      }),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => console.log('fetch success: ', json))
      .then(history.push('/'))
      .catch((err) => console.error(err));
  };

  const accountFormProps = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    onEmailChange: handleEmailChange,
    onPasswordChange: handlePasswordChange,
    onFirstNameChange: handleFirstNameChange,
    onLastNameChange: handleLastNameChange,
    onSubmit: handleSubmit,
  };
  
  return (
    <Container className="p-3">
      <h1 className="header">Sign Up</h1>
      <AccountForm {...accountFormProps} />
    </Container>
  );
};

export default ScreensSignup;
