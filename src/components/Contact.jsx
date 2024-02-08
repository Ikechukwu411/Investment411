import React from "react";
import "./contact.css";
import appscreen from "../assets/_app-screen.png";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <React.Fragment>
      <section className="section contact">
        <div className="container p-6">
          <button className="button is-large is-info">Get Started</button>
          <p className="is-size-4 mt-3">
            Contact an expert for help thats specific to you.
          </p>
          <a href="#" className="is-size-4 has-text-weight-bold">
            Contact an Expert
          </a>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <img src={appscreen} />
            </div>
            <div className="column has-text-centered-mobile">
              <p className="is-size-4 investPlan">Investment Plan</p>
              <h2 className="is-size-2">
                Crafting a strategic investment plan tailored to your financial
                goals.
              </h2>
              <p className="is-size-4">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Perferendis, autem qui? Autem deleniti eius quod voluptate iusto
                quae minima iste provident omnis officiis, nihil, accusantium
                eum magnam mollitia illum beatae.
              </p>
              <Link to="/investment" className="button is-info is-large mt-4">
                See More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
