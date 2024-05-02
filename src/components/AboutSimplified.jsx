import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const AboutSimplified = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container">
          <h1 className="is-size-1 has-text-centered mb-6">
            <span className="abt"> - About</span> Company -
          </h1>
          <div className="columns">
            <div className="column">
              <div className="video-container">
                <iframe
                  width="592"
                  height="333"
                  src="https://www.youtube.com/embed/41JCpzvnn_0"
                  title="What is Bitcoin?  Bitcoin Explained Simply"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div className="column companyIv has-text-centered-mobile">
              <h2 className="is-size-2" id="innovate">
                Innovative Investment Company
              </h2>
              <p className="mt-4 is-size-3 is-size-4-mobile mb-4">
                Since its inception in 2014, TradeHub has set out to disrupt the
                financial investment industry especially in relation to
                cryptocurrencies and securities. At TradeHub, we specialize in
                providing tailored investment solutions to help you achieve your
                financial goals. Whether youre planning for retirement, saving
                for your children's education, or looking to grow your wealth,
                we're here to assist you every step of the way.
              </p>
              <p className="is-size-3 is-size-4-mobile mt-5">
                TradeHub white glove boutique firm is known for our high
                operational excellence and standards. With a workforce of over
                700 UNIC (University of Nicosia) certified Cryptocurrency
                traders and specialized high technology bots, we work to bridge
                the gap between the profits of the professional trader and an
                amateur by bringing their profit ranges at par with each other.
              </p>

              <Link
                to="/register"
                className="button mt-6 is-medium is-link"
                id="getstarted"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSimplified;
