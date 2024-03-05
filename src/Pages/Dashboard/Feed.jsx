import React, { useState } from "react";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";

const Feed = () => {
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
            <Link to="/dashboard" className="is-active navbar-item ">
              Dashboard
            </Link>
            <Link to="/analytics" className="navbar-item ">
              Analytics
            </Link>
            <Link to="/feed" className="navbar-item ">
              Feed
            </Link>
            <Link to="/transaction" className="navbar-item ">
              Transactions
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
                <Link to="/feed" className="is-active">
                  Feed
                </Link>
                <Link to="/transaction">Transactions</Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/profile">Profile</Link>
              </div>
            </aside>
          </div>
          <div className="column is-four-fifths bigColumn"></div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feed;
