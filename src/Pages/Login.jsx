import React from "react";
import "../App.css";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
// import TradeLogo from "../assets/SA (2).png";
import { FaCoins } from "react-icons/fa";
// import Binance from "../components/Binance";

const Login = () => {
  return (
    <React.Fragment>
      <section className="section login">
        {/* <Binance /> */}
        <Link to="/" style={{ color: "black" }}>
          {/* <p className="has-text-centered pt-2"> */}
          <h1>
            <FaCoins size={25} color="orange" />
            <span className="is-size-3 has-text-weight-bold">Exchange</span>
          </h1>
          {/* </p> */}
        </Link>
        <div className="login-container">
          <h1 className="has-text-centered is-size-2 mt-4">Log-In</h1>
          <LoginForm />
        </div>
        <Link to="/resetpassword">
          <p className="has-text-centered is-size-4">Forgot Password?</p>
        </Link>
      </section>
    </React.Fragment>
  );
};

export default Login;
