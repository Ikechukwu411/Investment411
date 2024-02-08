import React from "react";
import FAQItem from "./FAQItem";

const FAQSec = ({ faq }) => {
  return (
    <div>
      {faq.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQSec;
