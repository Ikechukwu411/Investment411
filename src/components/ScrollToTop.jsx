import React, { useEffect, useState } from "react";
import "../components/ScrollTop.css";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 20) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };
  return (
    <React.Fragment>
      <button
        className={`scroll-to-top-button ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
        title="Go to top"
      >
        &#8593;
      </button>
    </React.Fragment>
  );
};

export default ScrollToTop;
