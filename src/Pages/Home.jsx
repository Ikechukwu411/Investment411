import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Setup from "../components/Setup.jsx";
import Footer from "../components/Footer.jsx";
import Offer from "../components/Offer.jsx";
import Certify1 from "../components/Certify1.jsx";
import AboutSimplified from "../components/AboutSimplified.jsx";
import TradingView from "../components/TradingView.jsx";
import Million from "../components/Million.jsx";
import InvestmentPlan from "../components/InvestmentPlan.jsx";
import FourthSection from "../components/FourthSection.jsx";
import Roots from "../components/Roots.jsx";
import TabComponent from "../components/Tab.jsx";

const Home = () => {
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
      <Hero />
      <div className="jobber">
        <AboutSimplified />
      </div>
      <div className="jobber">
        <Setup />
      </div>
      <div className="jobber">
        <TradingView />
      </div>
      <div className="jobber">
        <Million />
      </div>
      <div className="jobber">
        <InvestmentPlan />
      </div>
      <div className="jobber">
        <Roots />
      </div>
      <div className="jobber">
        <FourthSection />
      </div>
      <div className="jobber">
        <Certify1 />
      </div>
      <div className="jobber">
        <TabComponent />
      </div>
      <div className="jobber">
        <Offer />
      </div>
      {/* <NavbarBottom /> */}
      <Footer />
    </React.Fragment>
  );
};

export default Home;
