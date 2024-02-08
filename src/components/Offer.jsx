import React from "react";
import "./Choose.css";
import { FaMoneyCheck } from "react-icons/fa6";
import { MdOutlineAnalytics } from "react-icons/md";
import { MdTimer } from "react-icons/md";

const Offer = () => {
  return (
    <React.Fragment>
      <div className="container chooseContainer has-text-centered mt-6">
        <h2 className="is-size-1 choose">Our Products</h2>
        <div className="columns">
          <div className="column mt-6 Earn">
            <div className="faMoney">
              <FaMoneyCheck size={50} color="green" />
            </div>
            <h3 className="is-size-3">Crypto - Currency</h3>
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
            <h3 className="is-size-3">Forex Trading</h3>
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

export default Offer;
