import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const MainNav = () => (
  <Navbar bg="light" expand="md">
    <Navbar.Brand href="/" className="mr-auto">MailBurst</Navbar.Brand>
    <Nav.Link href="/account">My Account</Nav.Link>
  </Navbar>
);

export default MainNav;
