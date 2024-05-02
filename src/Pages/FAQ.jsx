import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import "../App.css";
import FAQSec from "../components/FAQSec";
import Footer from "../components/Footer";
import Binance from "../components/Binance";

const faq = [
  {
    question: "How do I get started with cryptocurrency investment?",
    answer:
      "Sign up for an account. This usually involves providing some personal information and verifying your identity, as per regulatory requirements.",
  },
  {
    question: "Fund Your Account:?",
    answer:
      "Deposit funds into your exchange account using a fast and easy method preferred payment method i.e transfering cryto to Di-fi wallet address",
  },
  {
    question: "How do i start trading?",
    answer: "Ones your account is funded, Di-fi starts the trading for you.",
  },
  {
    question: "How Do I recieve my payment",
    answer:
      "Your Dashboard has a transfre button where yiu click and fill in your wallet address, then the transaction begins",
  },
  {
    question: "Is it secured",
    answer:
      "we understand that security is paramount when it comes to your financial and personal information. That's why we've implemented robust security measures to ensure that your data and assets are protected every step of the way.",
  },
];

const Frequent = () => {
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
    <div>
      <Binance />
      <Navbar />
      <section className="section FAQ"></section>
      <section className="section jobber">
        <div className="container has-text-centered">
          <h1 className="is-size-2" id="FAQh1">
            Frequently Asked Questions
          </h1>
          <div>
            <FAQSec faq={faq} />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Frequent;
