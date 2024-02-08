import React from "react";
import "./Success.css";
import { FaQuoteLeft } from "react-icons/fa";

const Success = () => {
  return (
    <React.Fragment>
      <section className="section success has-text-centered">
        <div className="container box box2">
          <div className="FaQuoteLeft ml-6 mt-5">
            <FaQuoteLeft size={30} color="white" />
          </div>
          <p className="is-size-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut unde
            repellat sit officia dolorum optio cupiditate, repudiandae eum
            debitis enim omnis et maxime, dolor possimus.
          </p>
          <p className="is-size-4 has-text-weight-bold pb-6">
            {" "}
            - Jack Herrick, WikiHow Founder and CEO
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Success;
