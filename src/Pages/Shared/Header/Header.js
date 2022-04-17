import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
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
      <Navbar className="shadow-sm">
        <Container className="d-flex justify-content-between">
          <Navbar.Brand onClick={() => navigate("/")} className="mouse">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Dentario dental care logo"
            />
          </Navbar.Brand>
          <Nav className="">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            {user ? (
              <button
                style={{ background: "transparent" }}
                className="border-0"
                onClick={() => signOut(auth)}
              >
                Log out
              </button>
            ) : (
              <Nav.Link as={Link} to="/login">
                Login
              </Nav.Link>
            )}
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
