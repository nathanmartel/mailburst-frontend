import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import AccountLogin from '../../components/Account/Login/Login';
import { loginUser } from '../../services/services';

const ScreensLogin = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError('');
    try {
      const user = await loginUser(email, password);
      console.log(user);
      setLoginLoading(false);
      setLoginSuccess('Login successful!');
      setTimeout(() => { 
        history.push('/');
      }, 2500);
    }
    catch (error) {
      setLoginLoading(false);
      setLoginError(error.message);
    }
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
      {loginLoading && <p>Logging in...</p> }
      {loginSuccess && <p>{loginSuccess}</p> }
      {loginError && <p>{loginError}</p> }
    </Container>
  );
};

export default ScreensLogin;
