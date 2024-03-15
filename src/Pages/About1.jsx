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
                Introducing TradeHub: Your Gateway to Profitable Trading
                Opportunities!
              </h1>
              <p className="mt-4 is-size-4">
                Are you ready to take your trading ventures to the next level?
                Look no further than TradeHub, the ultimate platform designed to
                maximize your trading potential and secure your financial
                future.
              </p>
              <h3 className="mt-3 is-size-2">
                Why should you invest in TradeHub?
              </h3>
              <ul className="mt-6">
                <li className="mt-1 is-size-4">
                  <h2 className="is-size-3">Proven Profitability</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      With TradeHub, success isn't just a possibility — its a
                      reality. Countless users, including myself, have reaped
                      the rewards of our innovative platform, generating
                      consistent profits and achieving financial independence.
                    </span>
                  </p>
                </li>
                <li className="mt-6 is-size-4">
                  <h2 className="is-size-3">Innovative Features</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      TradeHub isn't your ordinary trading platform. Our
                      cutting-edge features, intuitive interface, and advanced
                      analytics empower users to make informed decisions and
                      execute trades with confidence. From real-time market data
                      to customizable trading strategies, we provide everything
                      you need to succeed in today's dynamic markets.
                    </span>
                  </p>
                </li>
                <li className="mt-6 is-size-4">
                  <h2 className="is-size-3">Unparalleled Support.</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      At TradeHub, we prioritize the success of our users above
                      all else. Our dedicated support team is available around
                      the clock to address any questions or concerns you may
                      have, ensuring that you always have the guidance you need
                      to thrive in the world of trading.
                    </span>
                  </p>
                </li>
                <li className="mt-6 is-size-4">
                  <h2 className="is-size-3">Global Reach.</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      Whether you're a seasoned investor or a novice trader,
                      TradeHub offers access to a diverse range of markets,
                      assets, and investment opportunities from around the
                      globe. With our platform, you can trade stocks, forex,
                      cryptocurrencies, commodities, and more—all from the
                      comfort of your own home.
                    </span>
                  </p>
                </li>
                <li className="mt-6 is-size-4">
                  <h2 className="is-size-3">Future-Proof Technology.</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      We understand that the world of trading is constantly
                      evolving, which is why we're committed to staying ahead of
                      the curve. From artificial intelligence and machine
                      learning to blockchain technology and decentralized
                      finance, TradeHub is at the forefront of innovation,
                      ensuring that our users always have access to the latest
                      tools and techniques.
                    </span>
                  </p>
                </li>
                <li className="mt-6 is-size-4">
                  <h2 className="is-size-3">Transparency and Security.</h2>
                  <p>
                    <span className="mr-4">
                      <FaHouseUser size={25} color="blue" />
                    </span>
                    <span>
                      Trust is the foundation of any successful trading
                      platform, which is why we prioritize transparency and
                      security above all else. With TradeHub, you can trade with
                      confidence, knowing that your funds are safe and your
                      transactions are secure.
                    </span>
                  </p>
                </li>
              </ul>
              <p className="mt-6 is-size-4">
                Don't miss out on this incredible opportunity to invest in
                TradeHub and secure your financial future. Join the thousands of
                successful traders who have already made the smart choice to
                partner with us. Together, we can unlock a world of profitable
                trading opportunities.
              </p>
              <button className="button is-large is-info mt-6">
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
