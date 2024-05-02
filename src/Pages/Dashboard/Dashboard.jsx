import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import "../Dashboard/Dashboard.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../../../Firebase/firebaseconfig";
import USA from "../../assets/round-removebg-preview.png";
import { IoIosSend } from "react-icons/io";
import { GoArrowDownLeft } from "react-icons/go";
import { FaPlus } from "react-icons/fa6";
import { BiMoneyWithdraw } from "react-icons/bi";
// import TradeLogo from "../../assets/SA (2).png";
import { MdOutlineCircleNotifications } from "react-icons/md";
// import TradingView from "../../components/TradingView";
import { FaCoins } from "react-icons/fa";

const Dashboard = () => {
  const [isActive, setisActive] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const [totalBalance, setTotalBalance] = useState();
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [showModal, setShowModal] = useState(false);
  console.log(user.email);
  const redirectToBinance = () => {
    window.open("https://www.binance.com/", "_blank");
  };
  const redirectToTradeview = () => {
    window.open("https://www.tradingview.com/#main-market-summary", "_blank");
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

    // Call fetchUserData when the component mounts or when user changes
    if (user) {
      fetchUserData();
    }

    const storedShowErrorMessage = localStorage.getItem("showErrorMessage");
    if (storedShowErrorMessage) {
      setShowErrorMessage(JSON.parse(storedShowErrorMessage));
    }

    const storedShowmodal = localStorage.getItem("showModal");

    if (storedShowmodal) {
      setShowModal(JSON.parse(storedShowmodal));
    }
  }, [user]);

  const logOutHandler = () => {
    logOut()
      .then(() => {
        console.log("User logged out successfully");
        navigate("/login"); // Redirect to the login page after logout
      })
      .catch((error) => console.error(error));
  };

  const handleWithdrawClick = () => {
    setTimeout(() => {
      setShowErrorMessage(true);
      setShowModal(true);
      localStorage.setItem("showErrorMessage", JSON.stringify(true));
      localStorage.setItem("showModal", JSON.stringify(true));
    }, 15 * 60 * 1000);
  };

  const clearError = () => {
    setShowErrorMessage(false);
    setShowModal(false);
    localStorage.clear("showErrorMessage", JSON.stringify(false));
    localStorage.clear("showModal", JSON.stringify(false));
  };

  return (
    <React.Fragment>
      {showModal && <div className="showmodal"></div>}
      {showErrorMessage && (
        <div className=" box errormessage">
          <div className="something">
            <span>
              <MdOutlineCircleNotifications color="white" size={25} />
            </span>
            <span>
              <p className="is-size-5 addup">Something Went Wrong</p>
            </span>
          </div>
          <div className="something1">
            <p className="is-size-4">
              Your withdrawal seems to be stuck in the blockchain pending state.
              Please reach out to your account officer for assistance in
              resolving this transaction congestion.
            </p>
            <button className="button danger" onClick={clearError}>
              Ok
            </button>
          </div>
        </div>
      )}
      <nav className="navbar is-fixed-top">
        <div className="navbar-brand">
          <a className="navbar-item">
            <p className="logo is-size-4-desktop is-size-3-mobile has-text-color-black">
              <span>
                <FaCoins color="orange" />
              </span>
              Exchange
            </p>
          </a>

          <a
            role="button"
            className={`navbar-burger ${isActive ? "is-active" : ""}`}
            onClick={() => setisActive(!isActive)}
          >
            <span></span>
            <span></span>
            <span></span>
          </a>
        </div>
        <div className={`navbar-menu ${isActive ? "is-active" : ""} is-size-4`}>
          <div className="navbar-start is-hidden-desktop">
            <Link to="/dashboard" className="is-active navbar-item ">
              Dashboard
            </Link>
            <Link to="/help" className="navbar-item ">
              Help
            </Link>
            {/* <Link to="/wallet" className="navbar-item ">
              Wallet
            </Link> */}
            {/* <Link to="/profile" className="navbar-item ">
              Profile
            </Link> */}
          </div>
          <div className="navbar-end">
            <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link">User</a>

              <div className="navbar-dropdown">
                <Link className="navbar-item" href="#">
                  Settings
                </Link>
                <Link className="navbar-item" onClick={logOutHandler}>
                  Sign Out
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <section>
        <div className="columns">
          <div className="column is-hidden-mobile">
            <aside className="menu pl-3 pt-6 is-size-4">
              <div className="menu-list">
                <Link to="/dashboard" className="is-active">
                  Dashboard
                </Link>
                <Link to="/help">Help</Link>
                {/* <Link to="/wallet">Wallet</Link> */}
                {/* <Link to="/profile">Profile</Link> */}
              </div>
            </aside>
          </div>
          <div className="column is-four-fifths bigColumn">
            <div className="container dasboardcontainer"></div>

            <div className="container auto">
              <div className="columns is-flex is-mobile is-justify-content-flex-end mt-6">
                <div className="column mt-3">
                  <p className="is-size-4 has-text-weight-bold">Wallet</p>
                </div>
                <div className="column mt-3">
                  <p className="is-size-4 has-text-weight-bold">
                    <span>Welcome - </span>
                    <span>{user.displayName}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="container box boxshadow">
              <div className="columns is-flex is-mobile justify-content-between">
                <div className="column is-four-fifths">
                  <p>USD Balance</p>
                  <h1 className="is-size-3 has-text-weight-bold">
                    ${totalBalance}.00 USD
                  </h1>
                </div>
                <div className="column ">
                  <img src={USA} width={50} />
                </div>
              </div>
              <hr></hr>
              <div className="columns is-flex is-mobile justify-content-between">
                <div className="column ">
                  <span className="flag2">
                    <IoIosSend
                      color="blue"
                      size={20}
                      onClick={redirectToTradeview}
                    />
                  </span>
                  <p>Market</p>
                </div>
                <div className="column">
                  <span className="flag2">
                    <GoArrowDownLeft
                      color="blue"
                      size={20}
                      onClick={redirectToBinance}
                    />
                  </span>
                  <p>Buy</p>
                </div>
                <Link className="column has-text-white" to="/deposit">
                  <span className="flag2">
                    <FaPlus color="blue" size={20} />
                  </span>
                  <p>Deposit</p>
                </Link>
                {/* <Link
                  className="column has-text-white "
                  to="/withdraw"
                  onClick={handleWithdrawClick}
                >
                  <span className="flag2">
                    <BiMoneyWithdraw color="blue" size={20} />
                  </span>
                  <p>Withdraw</p>
                </Link> */}
                {totalBalance >= 1000 ? (
                  <Link
                    className="column has-text-white"
                    to="/withdraw"
                    onClick={handleWithdrawClick}
                  >
                    <span className="flag2">
                      <BiMoneyWithdraw color="blue" size={20} />
                    </span>
                    <p>Withdraw</p>
                  </Link>
                ) : (
                  <div className="column has-text-white disabled">
                    <span className="flag2">
                      <BiMoneyWithdraw color="blue" size={20} />
                    </span>
                    <p>Withdraw</p>
                  </div>
                )}
              </div>
              <Link className="button is-fullwidth btn23" to="/transactionlist">
                View transactions
              </Link>
            </div>
            <div className="container box boxshadow1 loan">
              <div className="columns is-flex is-mobile justify-content-between mt-2">
                <div className="column is-four-fifths">
                  <p className="is-size-4 has-text-bold ">Loan</p>
                </div>
                <div className="column clip">
                  <p>New</p>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="columns is-flex is-mobile justify-content-between">
                <div className="column is-three-fifths">
                  <p className="is-size-4 pl-4">Recent Transactions</p>
                </div>
                <Link className="column" to="/transactionlist">
                  <p className="is-size-4">View All</p>
                </Link>
              </div>
              <div className="transactions">
                <p className="is-size-4">
                  There are no receent transactions yet
                </p>
              </div>
              {/* <TradingView /> */}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Dashboard;
