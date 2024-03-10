import React from "react";
import RegisterForm from "../components/RegisterForm";

import "../App.css";

const Register = () => {
  return (
    <React.Fragment>
      <section className="section registerbackground mb-6">
        <div className="container ">
          <div className="box10">
            {/* <div className="has-text-centered">
              <span className="dificolor is-size-2">D</span>
              <span className="is-size-1 ml-5 logoheader">Di-fi</span>
            </div> */}
            <RegisterForm />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Register;
