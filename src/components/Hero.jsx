import React from "react";
import "../components/Hero.css";
import Typewriter from "typewriter-effect";
// import Image from "../assets/investment.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="hero has-text-centered">
        <div className="hero-Text">
          <h1 className="is-size-1 is-whit">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: "Empower Your Future: Invest with Confidence.",
              }}
            />
          </h1>
          <p className="has-text-centered">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, quas!
          </p>

          <button className="is-large button mt-6">Get Started </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
