import React from "react";
// import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import "../App.css";

const Register = () => {
  return (
    <React.Fragment>
      {/* <Navbar /> */}
      {/* <section className="section signup mt-6">
        <div className="container signupContainer">
          <div className="columns">
            <div className="column welcome">
              <div className="topleft"></div>
              <div className="welcomeText">
                <h2 className="is-size-1-desktop is-size-2-mobile has-text-weight-bold">
                  Welcome
                </h2>
                <p className="is-size-3-desktop is-size-4-mobile mt-5">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius,
                  fugiat nihil dolorem eum magnam totam.
                </p>
                <a href="/login" className="button mt-5 is-large">
                  Sign In
                </a>
              </div>
              <div className="returnHome">
                <p className="mr-3 is-size-4 has-text-white">
                  Return to Home Page
                </p>
                <a href="/home">DI-FI</a>
              </div>
            </div>

            <div className="column data">
              <div className="dataText">
                <h1 className="is-size-1 has-text-centered-mobile">Sign Up</h1>
                <p className="is-size-3 has-text-centered-mobile">
                  Create Account.
                </p>
                <form action="" className="field" id="form">
                  <div className="field">
                    <label className="label is-medium">Email</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="email"
                        placeholder="Text input"
                        id="email"
                      />
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="field">
                    <label className="label is-medium">Password</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="password"
                        placeholder="Text input"
                        id="password"
                      />
                    </div>
                  </div>
                  <div className="field">
                    <label className="label is-medium">Confirm-password</label>
                    <div className="control">
                      <input
                        className="input is-medium"
                        type="password"
                        placeholder="Text input"
                        id="confirm"
                      />
                    </div>
                    <div className="error"></div>
                  </div>
                  <div className="field is-grouped">
                    <div className="control">
                      <button className="button is-info is-medium">
                        Submit
                      </button>
                    </div>
                    <div className="control">
                      <button className="button is-link is-light is-medium">
                        Cancel
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
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
