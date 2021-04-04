import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';


const navBar = () => (
  <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/">Dashboard</Nav.Link>
      <Nav.Link href="/list">View Employee</Nav.Link>
    </Nav>
  </Navbar>
);



export default navBar;
