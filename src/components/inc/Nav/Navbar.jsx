import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            Navbar Logo
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/about"} className="nav-link active">
                  About
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/contact"} className="nav-link active">
                  Contact
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/blog"} className="nav-link active">
                  Blog
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/cart"} className="nav-link active">
                  Cart
                </Link>
              </li>

              <li className="nav-item">
                <Link to={"/sign-up"} className="nav-link active">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
