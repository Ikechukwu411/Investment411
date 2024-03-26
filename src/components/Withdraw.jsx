import React, { useState, useEffect, useContext } from "react";
import "../components/Withdraw.css";
import { FaBitcoin } from "react-icons/fa";
import Typewriter from "typewriter-effect";
import photo1 from "../../src/assets/transaction icon.png";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../Firebase/firebaseconfig";
import { AuthContext } from "../../Context/AuthContext";
import DotLoader from "react-spinners/DotLoader.js";

const override = {
  display: "block",
  margin: "10rem auto",
  borderColor: "#3E8ED0",
};

const Withdraw = () => {
  const [isHidden, setisHidden] = useState(false);
  const [totalBalance, setTotalBalance] = useState();
  const [isLoading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  const Handleclick = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
    setTimeout(() => {
      setisHidden(!isHidden);
    }, 3000);
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Query the users collection for the document where userId matches user.uid
        const querySnapshot = await getDocs(collection(db, "users"));
        querySnapshot.forEach((doc) => {
          const userData = doc.data();
          if (userData.userId === user.uid) {
            // Found the document for the current user
            setTotalBalance(userData.amount);
            return; // Exit the loop since we found the document
          }
        });
      } catch (error) {
        console.error("Error fetching user data: ", error);
      }
    };
    if (user) {
      fetchUserData();
    }
  }, [user]);

  return (
    <React.Fragment className="load">
      {isLoading ? (
        <DotLoader
          className="load"
          color={"#3E8ED0"}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
      ) : (
        <section className="section">
          <Link to="/dashboard">
            <FaArrowLeft size={25} color="blue" />
          </Link>
          <div className={`extradiv ${isHidden ? "thankyouReveal" : ""}`}>
            <div className="extraimgdiv">
              <img src={photo1} alt="" width={80} />
            </div>
            <div className="mt-3">
              <h3 className="is-size-3">Transaction Successful</h3>
              <p className="is-size-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi, explicabo! Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Excepturi, explicabo! Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Excepturi, explicabo!
              </p>
              <button
                className="button mt-6 is-large col"
                role="button"
                onClick={() => {
                  setisHidden(!isHidden);
                }}
              >
                Ok
              </button>
            </div>
          </div>
          <div className="box item">
            <div className="box">
              <h1 className="is-size-3">
                Balance <span>${totalBalance}.00</span>
              </h1>
            </div>
            <p className="is-size-5">Total account balance</p>
            <form className="form " onSubmit={Handleclick}>
              <h2 className="has-text-centered is-size-3">
                {" "}
                Withdraw{" "}
                <span>
                  <FaBitcoin color="orange" />
                </span>
              </h2>
              <div className="field">
                <label className="label is-size-4">Amount</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="number"
                    placeholder="Text input"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label className="label is-size-4">Wallet Address</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="text"
                    placeholder="Text input"
                    required
                  />
                </div>
              </div>
              <button
                className={`button is-info is-large `}
                // onClick={Handleclick}
              >
                Transfer
              </button>
            </form>
            <div className="mt-4">
              <h3 className="is-size-3">Tip:</h3>
              <p className="is-size-5 ICO">
                <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    strings:
                      " Please do not withdraw to the ICO or funding wallet address",
                  }}
                />
              </p>
            </div>
          </div>
        </section>
      )}
    </React.Fragment>
  );
};

export default Withdraw;
