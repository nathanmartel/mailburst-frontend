import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router';
import Container from 'react-bootstrap/Container';
import AccountForm from 'components/Account/Form/Form';
import { signupUser } from 'services/services';
import { AuthContext } from 'context/AuthContext';

const ScreensSignup = () => {

  const authContext = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState('');
  const [signupError, setSignupError] = useState('');

  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setSignupError('');
    try {
      const response = await signupUser(email, password, firstName, lastName);
      authContext.setAuthState(response);
      setIsLoading(false);
      setSignupSuccess('Signup successful!');
      setTimeout(() => { 
        history.push('/');
      }, 2500);
    }
    catch (error) {
      setIsLoading(false);
      setSignupError(error.message);
    }
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
    isLoading: isLoading
  };
  
  return (
    <Container className="p-3">
      <h1 className="header">Sign Up</h1>
      <AccountForm {...accountFormProps} />
      {isLoading && <p>Submitting...</p> }
      {signupSuccess && <p>{signupSuccess}</p> }
      {signupError && <p>{signupError}</p> }
    </Container>
  );
};

export default ScreensSignup;
