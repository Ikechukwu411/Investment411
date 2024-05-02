import React from "react";
import "../components/Newcomponents.css";
import Image1 from "../assets/About Imgae1.jpg";
// import image2 from "../assets/AboutImage2.jpg";
import { Link } from "react-router-dom";

const welcomeText = ` Welcome to Exchangegecko! Explore the world of digital currencies
and discover endless possibilities for financial
innovation.`;

const welcometext2 = `Whether you're a seasoned investor or just getting
started, we're here to provide valuable insights, resources, and
tools to help you make informed decisions. Dive into our
comprehensive guides, stay up-to-date with the latest market
trends, and join our vibrant community of crypto enthusiasts.
Embark on your crypto journey with us today and unlock the future
of finance!`;

const Newcomponent = () => {
  return (
    <React.Fragment>
      <div className="container " id="container">
        <div className="columns">
          <div className="column" id="bigletter">
            <h1 className="is-size-3-desktop is-size-5-mobile">
              {welcomeText}
            </h1>
            <hr />
            <p className="is-size-3-desktop is-size-5-mobile">{welcometext2}</p>
            <Link to="/about1" className="button mt-3 " id="button">
              {" "}
              Read More
            </Link>
          </div>
          <div className="column position__Image ">
            <img src={Image1} id="image1" />
            {/* <img src={image2} id="image2" width={350} /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Newcomponent;
