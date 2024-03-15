import React from "react";
import { FaBtc } from "react-icons/fa";
import { IoLogoUsd } from "react-icons/io";

import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-2">TradeHub</p>
              <ul>
                <li className="is-size-4 mb-2">
                  <b>Location</b>: United States, United Kingdom and Cyprus
                </li>
                <li className="is-size-4 mb-2">
                  <b>Phone/Text</b>: +1(216) 425-6086, +447448319510
                </li>
                <li className="is-size-4 mb-2">
                  <b>Email</b>: Tradehubconsult@gmail.com
                </li>
                <li className="is-size-4 mb-2">
                  <b>Address</b>: Clowes Street, Manchester M26EG, United
                  Kingdom
                </li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-2">Services</p>
              <ul>
                <li className="is-size-4 mb-2">Crypto-Currency</li>
                <li className="is-size-4 mb-2">Loan</li>
                <li className="is-size-4 mb-2">Forex Trading</li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-2">More Solutions From TradeHub</p>
              <ul>
                <li className="is-size-4 mb-2">Real-Estate</li>
                <li className="is-size-4 mb-2">Banking</li>
                <li className="is-size-4 mb-2">Forex Trading</li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-2">Wallet Address</p>
              <ul>
                <li className="is-size-4 mb-2">
                  <span>
                    {" "}
                    <FaBtc color="Orange" /> BTC -{" "}
                  </span>{" "}
                  <span>182P21tPN9KnjnsUZ4UGcWk76C36fM93c1</span>
                </li>
                <li className="is-size-4 mb-2">
                  <span>
                    {" "}
                    <IoLogoUsd color="green" /> USDT -{" "}
                  </span>{" "}
                  <span>TN2GsVugzcxsTA8cPRbSrfZqzYZ6zMQM7j</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
