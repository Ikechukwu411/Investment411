import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import TradeLogo from "../../assets/SA (2).png";

const Profile = () => {
  const [isActive, setisActive] = useState(false);
  const { user, logOut } = useContext(AuthContext);
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
            <img src={TradeLogo} alt="" />
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
            {/* <Link to="/wallet" className="navbar-item ">
              My Wallet
            </Link> */}
            <Link to="/profile" className="navbar-item ">
              Profile
            </Link>
            <Link to="/help" className="navbar-item ">
              Help
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
                <Link to="/wallet">Wallet</Link>
                <Link to="/profile" className="is-active">
                  Profile
                </Link>
              </div>
            </aside>
          </div>
          <div className="column is-four-fifths bigColumn"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Profile;
