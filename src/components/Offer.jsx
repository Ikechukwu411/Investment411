import React from "react";
import "./Choose.css";
import photo7 from "../assets/crpt.jpg";
import photo8 from "../assets/forex.jpg";
import photo9 from "../assets/loan.jpg";
import { MdTimer } from "react-icons/md";

const Offer = () => {
  return (
    <React.Fragment>
      <div className="container chooseContainer has-text-centered ">
        <h2 className="is-size-1 is-size-3 choose">Our Products</h2>
        <div className="columns">
          <div className="column mt-3 Earn">
            <h3 className="is-size-3">Crypto</h3>
            <img src={photo7} alt="" />
          </div>
          <div className="column mt-3 Earn">
            <h3 className="is-size-3">Forex Trading</h3>
            <img src={photo8} alt="" />
          </div>
          <div className="column mt-3 Earn">
            <h3 className="is-size-3">Loan</h3>
            <img src={photo9} alt="" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Offer;
