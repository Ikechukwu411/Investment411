import React from "react";
import "./Choose.css";
import { FaMoneyCheck } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdTimer } from "react-icons/md";

const Choose = () => {
  return (
    <React.Fragment>
      <div className="container chooseContainer has-text-centered ">
        <h2 className="is-size-1 choose">
          Million Investors Choose Difi - Here is Why
        </h2>
        <div className="columns">
          <div className="column mt-6 Earn">
            <div className="faMoney">
              <FaMoneyCheck size={50} color="green" />
            </div>
            <h3 className="is-size-3">Invest & Earn at Ease</h3>
            <p className="is-size-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, ullam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, ullam!
            </p>
          </div>
          <div className="column mt-6 Earn">
            <div className="faMoney">
              <MdOutlineAnalytics size={50} color="orange" />
            </div>
            <h3 className="is-size-3">Trading Analysis</h3>
            <p className="is-size-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, ullam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, ullam!
            </p>
          </div>
          <div className="column mt-6 Earn">
            <div className="faMoney">
              <MdTimer size={50} color="gray" />
            </div>
            <h3 className="is-size-3">Loan</h3>
            <p className="is-size-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur, ullam! Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Consequatur, ullam!
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Choose;
