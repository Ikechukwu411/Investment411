import React, { useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import { PiGlobeStandBold } from "react-icons/pi";
import { GiSilverBullet } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdRadioButtonChecked } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import Footer from "../components/Footer";
import Binance from "../components/Binance";

let tvScriptLoadingPromise;

const Investment = () => {
  const onLoadScriptRef = useRef();
  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(
      () => onLoadScriptRef.current && onLoadScriptRef.current()
    );

    return () => (onLoadScriptRef.current = null);

    function createWidget() {
      if (
        document.getElementById("tradingview_228a9") &&
        "TradingView" in window
      ) {
        new window.TradingView.widget({
          autosize: true,
          symbol: "BINANCE:BTCUSDT",
          interval: "D",
          timezone: "Etc/UTC",
          theme: "dark",
          style: "1",
          locale: "en",
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: "tradingview_228a9",
        });
      }
    }
  }, []);

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
      <Binance />
      <Navbar />
      <section className="section herosection"></section>
      <section className="section jobber">
        <div className="container has-text-centered fontsize">
          <h2 className="is-size-2-desktop is-size-3-mobile">
            Best Investment Plan To Accelerate Your Wealth Fast
          </h2>
          <p className="is-size-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sed
            accusamus temporibus similique recusandae sint?
          </p>
          <div className="columns mt-5">
            <div className="column box5">
              <PiGlobeStandBold size={40} color="green" />
              <h3 className="is-size-3" id="standard">
                Standard
              </h3>
              <p className="is-size-5">Lorem ipsum dolor sit amet.</p>
              <h3 className="is-size-3">20%</h3>
              <button className="button mt-2 " id="button">
                Get Started
              </button>
              <ul>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Minimum amount - 100usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Maximum amount - 499usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Payout - 12hrs</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Customer Support - 24/7</span>
                </li>
              </ul>
            </div>
            <div className="column box5">
              <GiSilverBullet size={40} color="orange" />
              <h3 className="is-size-3" id="standard">
                Deluxe
              </h3>
              <p className="is-size-5">Lorem ipsum dolor sit amet.</p>
              <h3 className="is-size-3">40%</h3>
              <button className="button mt-2 " id="button">
                Get Started
              </button>
              <ul>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Minimum amount - 500usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Maximum amount - 1000usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Payout - 24hrs</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Customer Support - 24/7</span>
                </li>
              </ul>
            </div>
            <div className="column box5">
              <IoDiamondOutline size={40} color="Indigo" />
              <h3 className="is-size-3" id="standard">
                Premium
              </h3>
              <p className="is-size-5">Lorem ipsum dolor sit amet.</p>
              <h3 className="is-size-3">50%</h3>
              <button className="button mt-2 " id="button">
                Get Started
              </button>
              <ul>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Minimum amount - 1000usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Maximum amount - 1000 Above</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Payout - 24hrs</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Customer Support - 24/7</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section jobber" id="bgcolor">
        <div className="container has-text-centered-mobile">
          <div className="columns">
            <div className="column chooseTxt">
              <p className="is-size-4">Why Choose Us</p>
              <h1 className="is-size-3">
                Revolutionizing finance through cutting-edge blockchain and
                decentralized innovation
              </h1>
              <ul className="mt-3">
                <li>
                  <span>
                    <FaCheckCircle size={20} color="orange" />
                  </span>{" "}
                  <span className="ml-3 is-size-4">
                    Cryptocurrency Price Alerts
                  </span>
                </li>
                <li>
                  <span>
                    <FaCheckCircle size={20} color="orange" />
                  </span>{" "}
                  <span className="ml-3 is-size-4">
                    Cryptocurrency Price Alerts
                  </span>
                </li>
                <li>
                  <span>
                    <FaCheckCircle size={20} color="orange" />
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
      <section className="section jobber">
        <div className="container has-text-centered-mobile">
          <h2 className="is-size-3">Trading View Chart</h2>
          <div
            className="tradingview-widget-container"
            style={{ height: "100%", width: "100%" }}
          >
            <div
              id="tradingview_228a9"
              style={{ height: 500, width: "100%" }}
            />
            <div className="tradingview-widget-copyright">
              <a href="https://www.tradingview.com/" rel="noopener nofollow">
                <span className="blue-text">
                  Track all markets on TradingView
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </React.Fragment>
  );
};

export default Investment;
