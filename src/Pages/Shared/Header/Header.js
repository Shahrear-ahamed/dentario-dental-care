import React from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../Assets/photos/logo/logo.png";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  // firebase user find
  const [user] = useAuthState(auth);
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} className="mouse">
            <img
              src={logo}
              style={{ width: "180px" }}
              className="d-inline-block align-top"
              alt="Dentario dental care logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <NavDropdown
                  title={user.displayName ? user.displayName : "User"}
                  id="basic-nav-dropdown"
                >
                  <p>{user?.email}</p>
                  <button
                    style={{ background: "transparent" }}
                    className="border-0"
                    onClick={() => signOut(auth)}
                  >
                    Log out
                  </button>
                </NavDropdown>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
