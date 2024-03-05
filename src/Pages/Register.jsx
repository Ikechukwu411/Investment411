import React from "react";
// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  return (
    <React.Fragment>
      <section className="section registerbackground mb-6">
        <div className="container ">
          <div className="box10">
            <div className="has-text-centered">
              <span className="dificolor is-size-2">D</span>
              <span className="is-size-1 ml-5 logoheader">Di-fi</span>
            </div>
            <form action="">
              <h1 className="is-size-1 has-text-centered">Register</h1>
              <div className="field">
                <label className="label is-size-4">Name</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4">Last Name</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Text input"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4">Email</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="email"
                    placeholder="email@gmail.com"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4">Password</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="password"
                    placeholder="123456"
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4">Confirm Password</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="password"
                    placeholder="12345"
                  />
                </div>
              </div>
              <button
                className="button is-info is-fullwidth is-medium mt-5"
                type="submit"
              >
                {" "}
                Submit
              </button>
              <p className="is-size-4 mt-4">
                Already a member ? <Link to="/login">Login here!</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
