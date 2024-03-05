import React from "react";
import "../App.css";
import { FaBitcoin } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import CopyTextArea from "./CopyTextArea";

const Deposite = () => {
  return (
    <React.Fragment>
      <section className="section">
        <Link to="/dashboard">
          <FaArrowLeft size={25} color="blue" />
        </Link>
        <div className="container depositcontainer">
          <div className="box deposit">
            <h1 className="is-size-1">
              Deposit Crypto{" "}
              <span>
                <FaBitcoin color="orange" />
              </span>
            </h1>
            <p className="is-size-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              perferendis commodi, dolores labore modi illum.
            </p>
            <h3 className="mt-6 is-size-3 mb-6">USDT Wallet Address</h3>

            <CopyTextArea />
            <p className="is-size-4 mt-4">
              Upload Screen Shot For Confirmation
            </p>
            <form className="form">
              <div className="field">
                <label className="label is-size-4">Amount</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="file"
                    placeholder="Text input"
                  />
                </div>
              </div>
              <button className="button is-large is-info" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Deposite;
