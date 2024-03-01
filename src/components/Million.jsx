import React, { useEffect, useState } from "react";
import { FaHouseUser } from "react-icons/fa";
import { FaAward } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import "../App.css";
// import { FaCheckCircle } from "react-icons/fa";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const increment = target / 10000;
    let timer;

    const updateCounter = () => {
      if (count < target) {
        setCount((prevCount) => Math.ceil(prevCount + increment));
        timer = setTimeout(updateCounter, 1);
      } else {
        setCount(target);
      }
    };

    updateCounter();

    return () => clearTimeout(timer);
  }, [count, target]);

  return <div className="counter is-size-1">{count}</div>;
};

const Million = () => {
  return (
    <React.Fragment>
      <section className="section jobber millionusers">
        <div className="container">
          <h1 className="is-size-1 has-text-centered pt-6 used">
            Used By Millions of People All Over The World
          </h1>
          <div className="columns is-multiline has-text-centered mt-6 ">
            {/* <div className="column is-one-third">
              <div className="FaHouseUser">
                <FaHouseUser size={30} color="green" />
              </div>
              <Counter target={12000} />
              <span className="is-size-5 users1">Active Users</span>
            </div> */}

            {/* colum break */}

            {/* <div className="column is-one-third">
              <div className="FaAward">
                <FaAward size={30} color="orange" />
              </div>
              <Counter target={500} />
              <span className="is-size-5 awards1">Awards</span>
            </div> */}

            {/* colum break */}

            {/* <div className="column is-one-third">
              <div className="FaGlobeAmericas">
                <FaGlobeAmericas size={30} color="gray" />
              </div>
              <Counter target={60} />
              <span className="is-size-5 global1">Global Presence</span>
            </div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Million;
