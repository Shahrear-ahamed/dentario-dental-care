import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../../../Assets/photos/logo/logo.png";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header>
      <Navbar className="shadow-sm">
        <Container>
          <Navbar.Brand onClick={() => navigate("/")} className="mouse">
            <img
              src={logo}
              className="d-inline-block align-top"
              alt="Dentario dental care logo"
            />
          </Navbar.Brand>
          <div>
            <button
              className="btn rounded-pill px-4 py-2 border border-2"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
