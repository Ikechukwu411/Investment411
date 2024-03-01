import React from "react";
import { FaCheckDouble } from "react-icons/fa";

const Roots = () => {
  return (
    <React.Fragment>
      <section className="section">
        <div className="container ">
          <h2 className="has-text-centered is-size-2 mb-3">
            Take advantage of proven solutions to achieve cryptocoin success
          </h2>
          <p className="has-text-centered is-size-4">
            Our roots go back to 2010 - right around the beginning of the
            revolution that would become known today as Bitcoin. Following the
            boom of this industry, we quickly began to see some of the common
            issues that were present when people tried to become involved. We
            took this need into account along with our own personal ambition to
            develop an integrated platform that was able to both satisfy the
            needs of investors and meet their expectations with sufficient
            returns on their investments. Since then, we have maintained our
            focus as a company that looks towards the future and transforms the
            opportunities offered to our valued clients.
          </p>
          <div className="columns mt-6">
            <div className="column is-flex ">
              <div>
                <FaCheckDouble size={25} color="blue" />
              </div>
              <div className="ml-5">
                <span className="has-text-weight-bold ml-4 mr-3 is-size-4">
                  Security:
                </span>
                <span className="is-size-4">High Tech</span>
              </div>
            </div>
            <div className="column is-flex ">
              <div>
                <FaCheckDouble size={25} color="blue" />
              </div>
              <div className="ml-5">
                <span className="has-text-weight-bold ml-4 mr-3 is-size-4">
                  Corporate:
                </span>
                <span className="is-size-4">Blueback Global</span>
              </div>
            </div>
            <div className="column is-flex ">
              <div>
                <FaCheckDouble size={25} color="blue" />
              </div>
              <div className="ml-5">
                <span className="has-text-weight-bold ml-4 mr-3 is-size-4">
                  Insured:
                </span>
                <span className="is-size-4">
                  AIICO Insurance American International
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Roots;
