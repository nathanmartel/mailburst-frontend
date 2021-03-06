import React, { useState, useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { useHistory } from 'react-router';
import AccountLogin from 'components/Account/Login/Login';
import { loginUser } from 'services/services';
import { AuthContext } from 'context/AuthContext';

const ScreensLogin = () => {

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState('');
  const [loginError, setLoginError] = useState('');
  
  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setLoginError('');
    try {
      const response = await loginUser(email, password);
      authContext.setAuthState(response);
      setIsLoading(false);
      setLoginSuccess('Login successful!');
      setTimeout(() => { 
        history.push('/dashboard');
      }, 2500);
    }
    catch (error) {
      setIsLoading(false);
      setLoginError(error.message);
    }
  };

  const accountLoginProps = {
    email: email,
    password: password,
    onEmailChange: handleEmailChange,
    onPasswordChange: handlePasswordChange,
    onSubmit: handleSubmit,
    isLoading: isLoading
  };
  
  return (
    <Container className="p-3">
      <h1 className="header">Login</h1>
      <AccountLogin {...accountLoginProps} />
      {isLoading && <p>Logging in...</p> }
      {loginSuccess && <p>{loginSuccess}</p> }
      {loginError && <p>{loginError}</p> }
    </Container>
  );
};

export default ScreensLogin;
