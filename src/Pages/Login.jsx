import React from "react";
import "../App.css";
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <React.Fragment>
      <section className="section login">
        <div className="drop">
          <p className="has-text-centered pt-2">D</p>
        </div>
        <div className="login-container">
          <h1 className="has-text-centered is-size-2 mt-4">Log-In</h1>
          <LoginForm />
        </div>
        <p className="has-text-centered is-size-4">Forgot Password?</p>
      </section>
    </React.Fragment>
  );
};

export default Login;
