import React, { useState, useContext, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import { AuthContext } from '../../context/AuthContext';

const ScreensLogout = () => {

  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [logoutSuccess, setLogoutSuccess] = useState('');
  const [logoutError, setLogoutError] = useState('');
  
  useEffect(() => {
    setIsLoading(true);
    try {
      authContext.logout();
      setIsLoading(false);
      setLogoutSuccess('You have been logged out.');
      setTimeout(() => { 
      }, 2500);
    }
    catch (error) {
      setIsLoading(false);
      setLogoutError(error.message);
    }
  }, []);
 
  return (
    <Container className="p-3">
      <h1 className="header">Logout</h1>
      {isLoading && <p>Logging out...</p> }
      {logoutSuccess && <p>{logoutSuccess}</p> }
      {logoutError && <p>{logoutError}</p> }
    </Container>
  );
};

export default ScreensLogout;
