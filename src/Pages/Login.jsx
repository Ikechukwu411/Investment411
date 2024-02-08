import React from "react";
import Navbar from "../components/Navbar";
import "../App.css";

const Login = () => {
  return (
    <React.Fragment>
      <Navbar />
      <section className="section login">
        <div className="drop">
          <p className="has-text-centered pt-2">D</p>
        </div>
        <div className="login-container">
          <div className="greenBox">
            <h1>Di-fi</h1>
          </div>
          <form action="" className="form" id="form">
            <div className="field">
              <label className="label is-size-4">User-Name</label>
              <div className="control">
                <input
                  className="input is-link is-medium"
                  type="text"
                  id="username"
                  placeholder="John12345"
                />
              </div>
              <div className="error"></div>
            </div>
            <div className="field">
              <label className="label is-size-4">Password</label>
              <div className="control">
                <input
                  className="input is-link is-medium"
                  type="text"
                  id="password"
                  placeholder="Password here"
                />
              </div>
              <div className="error"></div>
            </div>
            <div className="has-text-centered">
              <p className="is-size-4 mb-3">
                <a href="/register">Dont You Have an Account ?</a>
              </p>
            </div>
            <button className="button is-info is-large mb-3">Log In</button>
          </form>
        </div>
        <p className="has-text-centered is-size-4">Forgot Password?</p>
      </section>
    </React.Fragment>
  );
};

export default Login;
