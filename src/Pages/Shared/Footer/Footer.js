import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Assets/photos/logo/logo-1.png";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className=" bg-dark">
      <div className="footer-top footer-top container py-4 d-flex justify-content-between ">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <Link className="d-block text-decoration-none text-white" to="/about">
            About
          </Link>
          <Link className="d-block text-decoration-none text-white" to="/blog">
            Blog
          </Link>
          <Link
            className="d-block text-decoration-none text-white"
            to="/register"
          >
            Register
          </Link>
          <Link
            className="d-block text-decoration-none text-white"
            to="/service"
          >
            Service
          </Link>
        </div>
      </div>
      <div className="text-center text-white py-4 align-center border-white border-top">
        <p className="mb-0">
          <small>Copyright &copy; {year} Dentario Dental Care</small>
        </p>
      </div>
    </footer>
  );
};

export default Footer;