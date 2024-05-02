import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "../App.css";
import { PiGlobeStandBold } from "react-icons/pi";
import { GiSilverBullet } from "react-icons/gi";
import { IoDiamondOutline } from "react-icons/io5";
import { MdRadioButtonChecked } from "react-icons/md";
import { Link } from "react-router-dom";

const InvestmentPlan = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <React.Fragment>
      <section className="section jobber mt-6-mobile">
        <div className="container has-text-centered fontsize">
          <h2 className="is-size-2-desktop is-size-3-mobile mt-6-mobile">
            Best Investment Plan To Accelerate Your Wealth
          </h2>
          {/* <p className="is-size-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste sed
            accusamus temporibus similique recusandae sint?
          </p> */}
          <div className="columns mt-5 plans">
            <div className="column box5" data-aos="fade-left">
              <PiGlobeStandBold size={40} color="green" />
              <h3 className="is-size-3" id="standard">
                Standard
              </h3>
              <p className="is-size-5">
                Gain at least <b>20%</b>
              </p>
              {/* <h3 className="is-size-3">20%</h3> */}
              <Link
                className="button is-large mt-2 mb-4 is-info"
                to="/register"
                id="getstarted"
              >
                Get Started
              </Link>
              <ul>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Minimum amount - 200usd</span>
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
                  <span className="is-size-4">Payout - 48hrs</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Customer Support - 24/7</span>
                </li>
              </ul>
            </div>
            <div className="column box5" data-aos="fade-down">
              <GiSilverBullet size={40} color="orange" />
              <h3 className="is-size-3" id="standard">
                Deluxe
              </h3>
              <p className="is-size-5">
                Gain at least <b>40%</b>
              </p>
              {/* <h3 className="is-size-3">40%</h3> */}
              <Link
                className="button is-large mt-2 mb-4 is-info"
                to="/register"
                id="getstarted"
              >
                Get Started
              </Link>
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
                  <span className="is-size-4">Maximum amount - 5000usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Payout - 72hrs</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Customer Support - 24/7</span>
                </li>
              </ul>
            </div>
            <div className="column box5" data-aos="fade-right">
              <IoDiamondOutline size={40} color="Indigo" />
              <h3 className="is-size-3" id="standard">
                Premium
              </h3>
              <p className="is-size-5">
                Gain at least <b>50%</b>
              </p>
              {/* <h3 className="is-size-3">50%</h3> */}
              <Link
                className="button is-large mt-2 mb-4 is-info"
                to="/register"
                id="getstarted"
              >
                Get Started
              </Link>
              <ul>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Minimum amount - 5000usd</span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">
                    Maximum amount - 10000 Above
                  </span>
                </li>
                <li className="is-size-5">
                  <span>
                    <MdRadioButtonChecked color="orange" />
                  </span>{" "}
                  <span className="is-size-4">Payout - 72hrs</span>
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
    </React.Fragment>
  );
};

export default InvestmentPlan;
