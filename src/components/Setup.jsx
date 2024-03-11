import React from "react";
import "./Setup.css";
import { SiGnuprivacyguard } from "react-icons/si";
import { MdOutlinePhonelinkSetup } from "react-icons/md";
import { RiLuggageDepositLine } from "react-icons/ri";
import { MdOutlinePayments } from "react-icons/md";

const Setup = () => {
  return (
    <React.Fragment>
      <section className="section mt-1">
        <div className="container has-text-centered setUp">
          <p className="is-size-3">Popular Tools</p>
          <h2 className="is-size-2">Set Up, Invest and Earn In A Minute</h2>
          <div className="columns mt-6">
            <div className="column box1">
              <SiGnuprivacyguard size={30} color="green" />
              <p className="is-size-2">Sign Up</p>
              <p className="is-size-4-mobile is-size-3-desktop">
                Register to begin your journey with us.
              </p>
            </div>
            <div className="column box1">
              <MdOutlinePhonelinkSetup size={30} color="orange" />
              <p className="is-size-2">Set Up Your Wallet</p>
              <p className="is-size-4-mobile is-size-3-desktop">
                Create a wallet today.
              </p>
            </div>
            <div className="column box1">
              <RiLuggageDepositLine size={30} color="blue" />
              <p className="is-size-2">Deposit</p>
              <p className="is-size-4-mobile is-size-3-desktop">
                Explore our various deposit options.
              </p>
            </div>
            <div className="column box1">
              <MdOutlinePayments size={30} color="gray" />
              <p className="is-size-2">Earn</p>
              <p className="is-size-4-mobile is-size-3-desktop">
                Earn with us today.
              </p>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Setup;
