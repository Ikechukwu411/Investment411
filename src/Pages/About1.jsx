import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { FaHouseUser } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import AboutImage from "../assets/Image1.jpg";
import AboutImage2 from "../assets/Image2.jpg";
import AboutImage3 from "../assets/image3.jpg";
import AboutImage4 from "../assets/Aboutus.jpg";
import Offer from "../components/Offer";
import Footer from "../components/Footer";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 10000;
    let timer;

    const updateCounter = () => {
      if (count < target) {
        setCount((prevCount) => Math.ceil(prevCount + increment));
        timer = setTimeout(updateCounter, 1);
      } else {
        setCount(target);
      }
    };

    updateCounter();

    return () => clearTimeout(timer);
  }, [count, target]);

  return <div className="counter is-size-1">{count}</div>;
};

const About1 = () => {
  useEffect(() => {
    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      threshold: 0.15,
    });

    const boxes = document.querySelectorAll(".jobber");

    boxes.forEach((tag) => {
      observer.observe(tag);
    });

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <React.Fragment>
      <Navbar />
      <section className="section aboutHero ">
        <div className="container">
          <div className="aboutHeroText">
            <h1 className="is-size-1">About Us</h1>
            <nav className="breadcrumb" aria-label="breadcrumbs">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>

                <li className="is-active">
                  <a href="#" aria-current="page">
                    About US
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
      <section className="section jobber">
        <div className="container">
          <h1 className="is-size-1 has-text-centered pt-6 used">
            Used By Millions of People All Over The World
          </h1>
          <div className="columns has-text-centered mt-6">
            <div className="column">
              <div className="FaHouseUser">
                <FaHouseUser size={30} color="green" />
              </div>
              <Counter target={12000} />
              <span className="is-size-5 users1">Active Users</span>
            </div>

            {/* colum break */}

            <div className="column">
              <div className="FaAward">
                <FaAward size={30} color="orange" />
              </div>
              <Counter target={500} />
              <span className="is-size-5 awards1">Awards</span>
            </div>

            {/* colum break */}

            <div className="column">
              <div className="FaGlobeAmericas">
                <FaGlobeAmericas size={30} color="gray" />
              </div>
              <Counter target={60} />
              <span className="is-size-5 global1">Global Presence</span>
            </div>
          </div>
        </div>
      </section>
      <section className="section aboutInfo jobber">
        <div className="container has-text-centered-mobile">
          <div className="columns">
            <div className="column">
              <div className="columns is-mobile is-multiline">
                <div className="column">
                  <img src={AboutImage} />
                </div>
                <div className="column">
                  <img src={AboutImage2} />
                </div>
              </div>
              <div className="columns is-mobile is-multiline">
                <div className="column">
                  <img src={AboutImage3} />
                </div>
                <div className="column">
                  <img src={AboutImage4} />
                </div>
              </div>
            </div>
            <div className="column aboutInfotxt ml-6">
              <p className="is-size-3">About Us</p>
              <h1 className="is-size-1">
                Crypto Currency Investment was revolutionized by us.
              </h1>
              <p className="mt-4 is-size-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
                aliquid ab perspiciatis maiores voluptatem autem fugit sapiente
                necessitatibus hic cum? Lorem ipsum dolor sit, amet consectetur
                adipisicing elit. Sequi aliquid ab perspiciatis maiores
                voluptatem autem fugit sapiente necessitatibus hic cum?
              </p>
              <ul className="mt-6">
                <li className="mt-2 is-size-4">
                  <h2 className="is-size-3">Lorem ipsum dolor sit amet.</h2>
                  <span className="mr-4">
                    <FaHouseUser size={25} color="blue" />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci voluptas quas minus provident, iusto molestiae.
                  </span>
                </li>
                <li className="mt-2 is-size-4">
                  <h2 className="is-size-3">Lorem ipsum dolor sit amet.</h2>
                  <span className="mr-4">
                    <FaHouseUser size={25} color="blue" />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci voluptas quas minus provident, iusto molestiae.
                  </span>
                </li>
                <li className="mt-2 is-size-4">
                  <h2 className="is-size-3">Lorem ipsum dolor sit amet.</h2>
                  <span className="mr-4">
                    <FaHouseUser size={25} color="blue" />
                  </span>
                  <span>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Adipisci voluptas quas minus provident, iusto molestiae.
                  </span>
                </li>
              </ul>
              <button className="button is-large is-info mt-3">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section offerSec jobber">
        <Offer />
      </section>
      <section className="section jobber">
        <div className="container">
          <div className="columns">
            <div className="column chooseTxt has-text-centered-mobile">
              <p className="is-size-4">Why Choose Us</p>
              <h1 className="is-size-3">
                Revolutionizing finance through cutting-edge blockchain and
                decentralized innovation
              </h1>
              <ul className="mt-3">
                <li>
                  <span>
                    <FaCheckCircle size={20} color="blue" />
                  </span>{" "}
                  <span className="ml-3 is-size-4">
                    Cryptocurrency Price Alerts
                  </span>
                </li>
                <li>
                  <span>
                    <FaCheckCircle size={20} color="blue" />
                  </span>{" "}
                  <span className="ml-3 is-size-4">
                    Cryptocurrency Price Alerts
                  </span>
                </li>
                <li>
                  <span>
                    <FaCheckCircle size={20} color="blue" />
                  </span>{" "}
                  <span className="ml-3 is-size-4">
                    Cryptocurrency Price Alerts
                  </span>
                </li>
              </ul>
            </div>
            <div className="column">
              <div className="iframe-container">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9NOPxwn04hE"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default About1;
