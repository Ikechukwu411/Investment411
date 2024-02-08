import React, { useEffect } from "react";
import "../App.css";
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import Choose from "../components/Choose.jsx";
import About from "../components/About.jsx";
import Setup from "../components/Setup.jsx";
import Success from "../components/Success.jsx";
import Offer from "../components/Offer.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";
import NavbarBottom from "../components/NavbarBottom.jsx";

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
        <Choose />
      </div>
      <div className="jobber">
        <About />
      </div>
      <div className="jobber">
        <Setup />
      </div>
      <div className="jobber">
        <Success />
      </div>
      <div className="jobber">
        <Offer />
      </div>
      <div className="jobber">
        <Contact />
      </div>
      <NavbarBottom />
      <Footer />
    </React.Fragment>
  );
};

export default Home;
