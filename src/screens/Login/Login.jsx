import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import AccountLogin from '../../components/Account/Login/Login';

const ScreensLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`${process.env.REACT_APP_URL}/api/v1/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': true
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      credentials: 'include'
    })
      .then(res => res.json())
      .then(json => console.log('fetch success: ', json))
      .then(history.push('/'))
      .catch((err) => console.error(err));
  };

  const accountLoginProps = {
    email: email,
    password: password,
    onEmailChange: handleEmailChange,
    onPasswordChange: handlePasswordChange,
    onSubmit: handleSubmit,
  };
  
  return (
    <Container className="p-3">
      <h1 className="header">Login</h1>
      <AccountLogin {...accountLoginProps} />
    </Container>
  );
};

export default ScreensLogin;
