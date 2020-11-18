import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import { AuthContext } from 'context/AuthContext';

const ScreensMyAccount = () => {

  const authContext = useContext(AuthContext);

  return (
    <Container className="p-3">
      <h1 className="header">{authContext.authState.userInfo.firstName}&rsquo;s Account</h1>
      <p>To come...</p>
    </Container>
  );
};

export default ScreensMyAccount;
