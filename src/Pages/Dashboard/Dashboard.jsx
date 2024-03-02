import React, { useState, useEffect } from "react";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { FaBitcoin } from "react-icons/fa";

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const Dashboard = () => {
  const [isActive, setisActive] = useState(false);
  const [newsData, setNewsData] = useState(null);

  useEffect(() => {
    const fetchNewsData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=tesla&from=2024-02-02&sortBy=publishedAt&apiKey=ab6a5f7f8c374418a21364cadbed97b7&pageSize=5&language=en"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setNewsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchNewsData();
  }, []);

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
            <Link to="/dashboard" className="is-active">
              Dashboard
            </Link>
            <Link to="/analytics">Analytics</Link>
            <Link to="/feed">Feed</Link>
            <Link to="/transaction">Transactions</Link>
            <Link to="/wallet">Wallet</Link>
            <Link to="/profile">Profile</Link>
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
                      <span className="ml-3 is-size-3">John</span>
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
                    <a
                      className="button is-responsive is-info is-large"
                      href="https://www.binance.com/en"
                    >
                      Buy
                    </a>
                    <a
                      className="button is-responsive is-info is-large ml-5"
                      href="/withdraw"
                    >
                      Withdraw
                    </a>
                    <a
                      className="button is-responsive is-info is-large ml-5"
                      href="/deposit"
                    >
                      Deposit
                    </a>
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
                    <h2 className="is-size-3 textcolor">
                      Latest Business News
                    </h2>
                    {newsData ? (
                      <ul>
                        {newsData.articles.map((article, index) => (
                          <li key={index}>
                            <h3 className="is-size-5 textcolor">
                              {article.title}
                            </h3>
                            <p>{article.description}</p>
                            <a
                              href={article.url}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Read more
                            </a>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Loading...</p>
                    )}
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
