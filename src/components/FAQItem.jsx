import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import "../App.css";

const FAQItem = ({ answer, question }) => {
  const [isOpen, setIsopen] = useState(false);

  const toggleAccording = () => {
    setIsopen(!isOpen);
  };

  return (
    <React.Fragment>
      <div className="box">
        <div className="columns">
          <div className="column">
            <p className="is-size-3" id="isOpen">
              {question}
            </p>
          </div>
          <div className="column">
            <IoMdArrowDropdown
              onClick={toggleAccording}
              size={30}
              color="blue"
            />
          </div>
        </div>
        {isOpen && (
          <p className="answer is-size-4" id="isOpen">
            {answer}
          </p>
        )}
      </div>
    </React.Fragment>
  );
};

export default FAQItem;
