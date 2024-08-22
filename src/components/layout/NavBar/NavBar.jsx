import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import Logout from 'components/auth/Logout';

const NavBar = () => {
  const [showAccount, setShowAccount] = useState(false);

  const handleAccountClick = () => {
    setShowAccount(!showAccount);
  };

  const isLoggedIn = localStorage.getItem('token');

  return (
    <Navbar bg="light" expand="lg" className="px-5 shadow mt-5 sticky-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          <span style={{ color: '#DAA520' }}>Royal Horizon Hotel</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 navbar-nav-scroll">
            <Nav.Link as={NavLink} to="/browse-all-rooms">
              Browse all rooms
            </Nav.Link>
            {isLoggedIn && (
              <Nav.Link as={NavLink} to="/admin">
                Admin
              </Nav.Link>
            )}
          </Nav>
          <Nav className="d-flex">
            <Nav.Link as={NavLink} to="/find-booking">
              Find my booking
            </Nav.Link>
            <Dropdown show={showAccount} onToggle={handleAccountClick}>
              <Dropdown.Toggle as={Nav.Link} className="nav-link dropdown-toggle">
                Account
              </Dropdown.Toggle>
              <Dropdown.Menu align="end">
                {isLoggedIn
                  ? <Logout />
                  : (
                    <Dropdown.Item as={Link} to="/login">
                      Login
                    </Dropdown.Item>
                  )}
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
