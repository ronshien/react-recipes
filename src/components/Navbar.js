import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="the logo" />
      </Link>
      <ul className="navbar-nav">
        <li className="navbar-item">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link to="/recipes" className="nav-link">
            Recipes
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
