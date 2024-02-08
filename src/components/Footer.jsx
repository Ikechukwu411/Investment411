import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container">
          <div className="columns">
            <div className="column">
              <p className="is-size-2">Di-fi</p>
              <ul>
                <li className="is-size-4 mb-2">
                  Location: Lorem ipsum dolor sit.
                </li>
                <li className="is-size-4 mb-2">
                  Phone: Lorem ipsum dolor sit.
                </li>
                <li className="is-size-4 mb-2">
                  Email: Lorem ipsum dolor sit.
                </li>
                <li className="is-size-4 mb-2">
                  Address: Lorem ipsum dolor sit.
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
              <p className="is-size-2">More Solutions From Di-fi</p>
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
