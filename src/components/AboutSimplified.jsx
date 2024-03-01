import React from "react";
import "../App.css";

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
                INNOVATIVE INVESTMENT COMPANY
              </h2>
              <p className="mt-4 is-size-3 is-size-4-mobile mb-4">
                Inception in 16th Nov 2021 Di-fi has set out to disrupt the
                Financial Investment Industry especially in relation to
                Cryptocurrencies and Securities
              </p>
              <p className="is-size-3 is-size-4-mobile mt-5">
                Di-fi white glove boutique firm known for our high operational
                excellence and standards. With a workforce of over 700 UNIC
                (University of Nicosia) certified Cryptocurrency traders and
                specialized high technology bots, we work to bridge the gap
                between the profits of the professional trader and an amateur by
                bringing their profit ranges at par with each other
              </p>
              <p className="mt-4 is-size-3 is-size-4-mobile">
                While offering unrivaled customer service by providing
                worry-free, cost-effective and time-saving investment models, we
                also ensure that your investment is best secure and protected
                from market volatility
              </p>

              <button className="button mt-6 is-medium is-link">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutSimplified;
