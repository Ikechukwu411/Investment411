import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <React.Fragment>
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <p className="logo is-size-4-desktop is-size-3-mobile">DI-FI</p>
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
            <a href="#" className="navbar-item">
              Dashboard
            </a>
            <a href="/analytics" className="navbar-item">
              Analytics
            </a>
            <a href="" className="navbar-item">
              Feed
            </a>
            <a href="" className="navbar-item">
              Transactions
            </a>
            <a href="" className="navbar-item">
              Wallet
            </a>
            <a href="" className="navbar-item">
              Profile
            </a>
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">
                <img
                  src="./Images/Loan.jpg"
                  alt="User"
                  width="28"
                  height="28"
                />
              </a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" href="#">
                  Settings
                </Link>
                <Link className="navbar-item" href="#">
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
                <Link to="/analytics">Analytics</Link>
                <Link to="/feed">Feed</Link>
                <Link to="/transaction">Transactions</Link>
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
