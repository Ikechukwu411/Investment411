import React, { useState } from "react";
import "../components/Withdraw.css";
import { FaBitcoin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import photo1 from "../../src/assets/transaction icon.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const Withdraw = () => {
  const [isHidden, setisHidden] = useState(false);

  const Handleclick = (e) => {
    e.preventDefault();
    setisHidden(!isHidden);
  };
  return (
    <React.Fragment>
      <Link to="/dashboard">
        <FaArrowLeft size={25} color="blue" />
      </Link>
      <div className={`extradiv ${isHidden ? "thankyouReveal" : ""}`}>
        <div className="extraimgdiv">
          <img src={photo1} alt="" width={80} />
        </div>
        <div className="mt-3">
          <h3 className="is-size-3">Transaction Successful</h3>
          <p className="is-size-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            explicabo! Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, explicabo! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Excepturi, explicabo!
          </p>
          <button
            className="button mt-6 is-large col"
            role="button"
            onClick={() => {
              setisHidden(!isHidden);
            }}
          >
            Ok
          </button>
        </div>
      </div>
      <div className="box item">
        <div className="box">
          <h1 className="is-size-3">
            Balance <span>$50</span>
          </h1>
        </div>
        <p className="is-size-5">Total account balance</p>
        <form className="form ">
          <h2 className="has-text-centered is-size-3">
            {" "}
            Withdraw{" "}
            <span>
              <FaBitcoin color="orange" />
            </span>
          </h2>
          <div className="field">
            <label className="label is-size-4">Amount</label>
            <div className="control">
              <input
                className="input is-medium"
                type="number"
                placeholder="Text input"
              />
            </div>
          </div>
          <div className="field">
            <label className="label is-size-4">Wallet Address</label>
            <div className="control">
              <input
                className="input is-medium"
                type="text"
                placeholder="Text input"
              />
            </div>
          </div>
          <button className={`button is-info is-large `} onClick={Handleclick}>
            Transfer
          </button>
        </form>
        <div className="mt-4">
          <h3 className="is-size-3">Tip:</h3>
          <p className="is-size-5 ICO">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings:
                  " Please do not withdraw to the ICO or funding wallet address",
              }}
            />
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Withdraw;
