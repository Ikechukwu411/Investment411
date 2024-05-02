import React from "react";
// import photo2 from "../assets/difi Certificate.png";
import certify from "../assets/Untitled design.png";

const Certify1 = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container has-text-centered">
          <h1 className="is-size-2 mb-4 is-size-3">
            Trade Conformity and Market Advancement
          </h1>
          <div className="certificate">
            <img src={certify} alt="" width={350} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Certify1;
