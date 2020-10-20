import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-dark bg-primary navbar-expand-lg nav-bg">
        <Link to="/" className="navbar-brand mb-0 h1 xtreme-bold">
          WEkonnet
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <section
          className="collapse navbar-collapse no-outline"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav mr-auto ">
            <li className="nav-item active">
              <Link to="/" className="nav-link">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link">
                SignUp
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link">
                SignIn
              </Link>
            </li>
          </ul>
        </section>
      </nav>
    </>
  );
};

export default Navbar;
