import React, { useState, Fragment } from "react";
import { useSelector } from "react-redux";

import {
  Navbar,
  Nav,
  NavbarBrand,
  NavItem,
  NavbarToggler,
  Collapse,
  Container,
} from "reactstrap";

import RegisterModal from "./auth/registerModel";
import Login from "./auth/login";

import Logout from "./auth/logout";

function AppNavbar() {
  const [isopen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen((v) => !v);
  };
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const authLinks = (
    <Fragment>
      <NavItem>
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.name}` : ""}</strong>
        </span>
      </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <RegisterModal />
      </NavItem>
      <NavItem>
        <Login />
      </NavItem>
    </Fragment>
  );

  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Brand</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isopen} navbar>
            <Nav className="ml-auto">
              {isAuthenticated ? authLinks : guestLinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default AppNavbar;
