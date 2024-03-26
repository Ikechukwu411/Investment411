import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import TradeLogo from "../assets/SA (2).png";

const navbar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top shadow">
        <div className="container">
          <div className="navbar-brand">
            <a href="#" className="navbar-item">
              <label htmlFor="" className="is-size-2-desktop is-size-3-mobile ">
                <span>
                  {" "}
                  <img src={TradeLogo} alt="" />{" "}
                </span>
              </label>
            </a>
            <a
              href="#"
              role="button"
              className={`navbar-burger  ${isActive ? "is-active" : ""}`}
              onClick={() => {
                setIsActive(!isActive);
              }}
            >
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </a>
          </div>
          <div className={`navbar-menu ${isActive ? "is-active" : ""}`}>
            <div className="navbar-end py-4">
              <Link to="/" className="navbar-item is-size-4">
                Home
              </Link>
              <Link to="/about1" className="navbar-item is-size-4">
                About
              </Link>
              <Link to="/investment" className="navbar-item is-size-4">
                Investment Plan
              </Link>
              <Link to="/Frequent" className="navbar-item is-size-4">
                FAQ
              </Link>
              <div className="buttons is-inline-flex">
                <Link
                  to="/register"
                  className="navbar-item is-size-4 button is-info"
                >
                  Register
                </Link>
                <Link
                  to="/login"
                  className="navbar-item is-size-4-desktop button is-large is-info"
                >
                  Log In
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default navbar;
