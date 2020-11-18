import React, { useState, useContext } from 'react';
import { useHistory, useParams } from 'react-router';
import Container from 'react-bootstrap/Container';
import AccountForm from 'components/Account/Form/Form';
import { fetchUser, patchUser } from 'services/services';
import { AuthContext } from 'context/AuthContext';
import { useEffect } from 'react';

const ScreensUserEdit = () => {

  const authContext = useContext(AuthContext);
  const { userId } = useParams();
  const [oldUser, setOldUser] = useState({});
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [role, setRole] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState('');
  const [signupError, setSignupError] = useState('');

  const history = useHistory();
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleRoleChange = (e) => setRole(e.target.value);
  
  // Refactor this silly brute force approach
  const handleSubmit = async(e) => {
    e.preventDefault();
    setIsLoading(true);
    setSignupError('');
    const newInfo = {};
    if (oldUser['firstName'] !== firstName) 
      newInfo['firstName'] = firstName;
    if (oldUser['lastName'] !== lastName) 
      newInfo['lastName'] = lastName;
    if (oldUser['role'] !== role) 
      newInfo['role'] = role;
    console.log('newInfo is', newInfo);

    try {
      await patchUser(userId, newInfo);
      setIsLoading(false);
      setSignupSuccess('Edit successful!');
      setTimeout(() => { 
        history.push('/dashboard');
      }, 2500);
    }
    catch (error) {
      setIsLoading(false);
      setSignupError(error.message);
    }
    setIsLoading(false);
  };

  const accountFormProps = {
    email: email,
    password: password,
    firstName: firstName,
    lastName: lastName,
    role: role,
    onEmailChange: handleEmailChange,
    onPasswordChange: handlePasswordChange,
    onFirstNameChange: handleFirstNameChange,
    onLastNameChange: handleLastNameChange,
    onRoleChange: handleRoleChange,
    onSubmit: handleSubmit,
    isLoading: isLoading
  };

  useEffect(() => {
    async function getUser() {
      console.log('userId is', userId);
      const fetchedUser = await fetchUser(userId);
      setOldUser(fetchedUser);
      setEmail(fetchedUser.email);
      setFirstName(fetchedUser.firstName);
      setLastName(fetchedUser.lastName);
      setRole(fetchedUser.role);
    }
    setIsLoading(true);
    getUser();
    setIsLoading(false);
  }, []);
  
  return (
    <Container className="p-3">
      <h1 className="header">Edit User</h1>
      <AccountForm {...accountFormProps} />
      {isLoading && <p>Submitting...</p> }
      {signupSuccess && <p>{signupSuccess}</p> }
      {signupError && <p>{signupError}</p> }
    </Container>
  );
};

export default ScreensUserEdit;
