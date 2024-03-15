import React from "react";
import { IoLogoUsd } from "react-icons/io";
import { FaBtc } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { BsBank2 } from "react-icons/bs";

import "../App.css";

const Payment = () => {
  return (
    <React.Fragment>
      <sections className="section">
        <h1 className="is-size-2-desktop is-size-3-mobile has-text-centered">
          Payments We Accept
        </h1>
        <div className="container paymentwe ">
          <div className="columns mt-5">
            <div className="column">
              <span>
                <FaBtc size={25} color="orange" />
              </span>
              <span>
                <p className="is-size-3">BTC</p>
              </span>
            </div>
            <div className="column">
              <span>
                <IoLogoUsd color="green" size={25} />
              </span>
              <span>
                <p className="is-size-3">USDT</p>
              </span>
            </div>
            <div className="column">
              <span>
                <SiCashapp color="green" size={30} />
              </span>
              <span>
                <p className="is-size-3">CashApp</p>
              </span>
            </div>
            <div className="column">
              <span>
                <BsBank2 color="orange" size={30} />
              </span>
              <span>
                <p className="is-size-3">Direct Bank Transfer</p>
              </span>
            </div>
            <div className="column">
              <span>
                <FaCcPaypal color="blue" size={30} />
              </span>
              <span>
                <p className="is-size-3">PayPal</p>
              </span>
            </div>
          </div>
        </div>
      </sections>
    </React.Fragment>
  );
};

export default Payment;
