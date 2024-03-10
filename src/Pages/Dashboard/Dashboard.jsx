import React, { useState, useContext } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";
import Progress2 from "./Progress2";
import { useNavigate } from "react-router-dom";

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const Dashboard = () => {
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
                <Link to="/dashboard" className="is-active">
                  Dashboard
                </Link>
                <Link to="/analytics">Analytics</Link>
                <Link to="/feed">Feed</Link>
                <Link to="/transaction">Transactions</Link>
                <Link to="/wallet">Wallet</Link>
                <Link to="/profile">Profile</Link>
              </div>
            </aside>
          </div>
          <div className="column is-four-fifths bigColumn">
            <div className="container dasboardcontainer">
              <div className="box graph">
                <div className="columns">
                  <div className="column p-4">
                    <p>
                      <span className="ml-3 is-size-3">Welcome</span>
                      <span className="ml-3 is-size-3">{user.displayName}</span>
                    </p>
                    <p>Total Balance</p>
                    <h1 className="is-size-1-desktop is-size-3-mobile mt-3-mobile">
                      $0 - USD
                      <span className="ml-3">
                        <FaBitcoin color="orange" size={45} />
                      </span>
                    </h1>
                  </div>
                  <div className="column mt-5">
                    <Link
                      className="button is-responsive is-info is-large"
                      to="https://www.binance.com/en"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Buy
                    </Link>
                    <Link
                      className="button is-responsive is-info is-large ml-5"
                      to="/withdraw"
                    >
                      Withdraw
                    </Link>
                    <Link
                      className="button is-responsive is-info is-large ml-5"
                      to="/deposit"
                    >
                      Deposit
                    </Link>
                    <button
                      disabled
                      className="button  is-responsive mt-6-mobile is-info is-large ml-2"
                    >
                      Loan
                    </button>
                  </div>
                </div>
              </div>
              <div className="box tags"></div>
              <div className="columns mt-4 box">
                <div className="column is-half ">
                  <h2 className="is-size-3 textcolor">Transactions History</h2>
                  <div className="">
                    <table className="table is-fullwidth">
                      <thead>
                        <tr>
                          <th className="  is-size-4 textcolor">
                            Deposit/withdraw
                          </th>
                          <th className=" is-size-4 textcolor">Amount</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            {account3.movements.map((mov, index) => {
                              return (
                                <li
                                  key={index}
                                  className={`is-size-4 m-2 ${
                                    mov > 0 ? "bggray" : "white"
                                  }`}
                                >
                                  {mov}
                                </li>
                              );
                            })}
                          </td>
                          <td>
                            {account3.movements.map((mov, index) => {
                              const transactionType =
                                mov > 0 ? "deposited" : "withdraw";
                              return (
                                <li
                                  key={index}
                                  className={`is-size-4 m-2 ${
                                    mov > 0 ? "bggray" : "white"
                                  }`}
                                >
                                  {transactionType}
                                </li>
                              );
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="column is-half">
                  <div>
                    <h2 className="is-size-3 textcolor">User Engangement</h2>
                    <Progress2 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
