import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../App.css";
import "../Dashboard/Dashboard.css";
const TransactionPage = () => {
  return (
    <section className="section transactpagebg">
      <div className="container">
        <Link to="/dashboard" className="arrowcircle">
          <FaArrowLeft color="white" size={20} />
        </Link>
        <h1 className="is-size-4 mt-4">No Transactions Here!!</h1>
      </div>
    </section>
  );
};

export default TransactionPage;
