import React from 'react';
import { useContext } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { AuthContext } from 'context/AuthContext';

const MainNav = () => {
  
  const authContext = useContext(AuthContext);
  
  return (
    <Navbar bg="light" expand="md">
      <Navbar.Brand href="/" className="mr-auto">MailBurst</Navbar.Brand>
      { authContext.authState._id ? (
        <>
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/account">My Account</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </>
      ) : (
        <>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </>
      )}
    </Navbar>
  );
};

export default MainNav;
