import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import TradeLogo from "../../assets/SA (2).png";
import { AuthContext } from "../../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../Dashboard/Dashboard.css";
import { FaArrowLeft } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { FaGreaterThan } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Help = () => {
  const [isActive, setisActive] = useState(false);
  const { logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => console.error(error));
  };

  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <p className="logo is-size-4-desktop is-size-3-mobile">
              <img src={TradeLogo} alt="" />
            </p>
          </a>

          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={() => setisActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""} is-size-4`}>
          <div className="navbar-start is-hidden-desktop">
            <Link to="/dashboard" className="is-active navbar-item ">
              Dashboard
            </Link>
            <Link to="/help" className="navbar-item ">
              Help
            </Link>
            <Link to="/wallet" className="navbar-item ">
              Wallet
            </Link>
            <Link to="/profile" className="navbar-item ">
              Profile
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">User</a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" href="#">
                  Settings
                </Link>
                <Link className="navbar-item" onClick={logOutHandler}>
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="columns">
          <div className="column is-hidden-mobile">
            <aside className="menu pl-3 pt-6 is-size-4">
              <div className="menu-list">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/help" className="is-active">
                  Help
                </Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/profile">Profile</Link>
              </div>
            </aside>
          </div>
          <div className="column is-four-fifths bigColumn">
            <div className="container mt-6">
              <p>
                {" "}
                <Link className="arrowcircle" to="/dashboard">
                  <FaArrowLeft color="white" size={20} />
                </Link>
                <span className="is-size-4 ml-3 has-text-weight-bold">
                  Get Help
                </span>
              </p>
            </div>
            <div className="container box boxcall ">
              <div className="columns is-flex is-mobile justify-content-between">
                <div className="column mt-3">
                  <FiPhoneCall color="black" size={18} />
                </div>
                <div className="ml-5 column is-three-fifths">
                  <h1 className="is-size-4 has-text-weight-bold">Call Us</h1>
                  <p>Contact Call Center</p>
                </div>
                <div className="column mt-3">
                  <FaGreaterThan color="black" size={12} />
                </div>
              </div>
            </div>
            <div className="container box boxcall ">
              <div className="columns is-flex is-mobile justify-content-between">
                <div className="column mt-3">
                  <MdEmail color="black" size={18} />
                </div>
                <div className="ml-5 column is-three-fifths">
                  <h1 className="is-size-4 has-text-weight-bold">Email Us</h1>
                  <p>Send Us an Email</p>
                </div>
                <div className="column mt-3">
                  <FaGreaterThan color="black" size={12} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Help;
