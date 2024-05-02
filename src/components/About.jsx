import React from "react";
import "./About.css";
import { Link } from "react-router-dom";
import Image from "../assets/Image1.jpg";

const About = () => {
  return (
    <React.Fragment>
      <section className="section about">
        <div className="container ">
          <div className="columns">
            <div className="column aboutTxt mr-5">
              <img src={Image} />
            </div>
            <div className="column aboutTxt has-text-centered-mobile">
              <p className="is-size-4">About Us</p>
              <h2 className="is-size-2">
                We Are Revolutionized InvestMent Firm
              </h2>
              <p className="is-size-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Dolores rerum eligendi quae aliquam sit laboriosam asperiores
                nihil autem praesentium repudiandae similique quia, odio totam
                accusantium quo aspernatur provident mollitia architecto.
              </p>
              <Link
                to="/about1"
                className="button is-large is-info mt-6"
                id="readBtn"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
