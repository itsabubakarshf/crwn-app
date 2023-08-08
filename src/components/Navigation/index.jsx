import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./index.scss";
import { ReactSVG } from "react-svg";

const NavBar = () => {
  return (
    <>
        <div className="navigation">
          <Link className="logo-container" to="/">
            <ReactSVG src="../../../src/assets/crown.svg"/>
          </Link>
          <div className="nav-links-container">
            <Link className="nav-link" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/shop">
              Shope
            </Link>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
            <Link className="nav-link" to="/sign-in">
              SignIn
            </Link>
          </div>
        </div>
      <Outlet />
    </>
  );
};

export default NavBar;
