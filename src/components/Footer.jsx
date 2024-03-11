import React from "react";
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
                <li className="is-size-4 mb-2">Location: United Kingdom</li>
                <li className="is-size-4 mb-2">
                  Phone/Text: +1(216) 425-6086, +447448319510
                </li>
                <li className="is-size-4 mb-2">
                  Email: Tradehubconsult@gmail.com
                </li>
                <li className="is-size-4 mb-2">
                  Address: Clowes Street, Manchester M26EG, United Kingdom
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
            <div className="column"></div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
