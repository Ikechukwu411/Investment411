import React from "react";
import { FaCoins } from "react-icons/fa";

import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-2">
                <span>
                  <FaCoins color="orange" size={25} />
                </span>
                <span>Exchange</span>
              </p>
              <ul>
                <li className="is-size-4 mb-2">
                  <b>Location</b>: United States
                </li>
                <li className="is-size-4 mb-2">
                  <b>Phone/Text</b>: +1(44) 2249-0305, +447435457883
                </li>
                <li className="is-size-4 mb-2">
                  <b>Email</b>: contactus@exchangegecko.com
                </li>
                <li className="is-size-4 mb-2">
                  <b>Address</b>: Bespole Century Ciy, 10281 W Piico Blvd, Los
                  Angeles, CA 90064, United States
                </li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-2-desktop is-size-4-mobile">Services</p>
              <ul>
                <li className="is-size-4 mb-2">Crypto-Currency</li>
                <li className="is-size-4 mb-2">Loan</li>
                <li className="is-size-4 mb-2">Forex Trading</li>
              </ul>
            </div>
            <div className="column">
              <p className="is-size-2-desktop is-size-4-mobile">
                More Solutions From TradeHub
              </p>
              <ul>
                <li className="is-size-4 mb-2">Real-Estate</li>
                <li className="is-size-4 mb-2">Banking</li>
                <li className="is-size-4 mb-2">Forex Trading</li>
              </ul>
            </div>
            {/* <div className="column">
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
            </div> */}
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
