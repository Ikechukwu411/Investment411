import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import About1 from "./Pages/About1.jsx";
import Investment from "./Pages/Investment.jsx";
import Frequent from "./Pages/FAQ.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";
import Analytics from "./Pages/Dashboard/Analytics.jsx";
import Feed from "./Pages/Dashboard/Feed.jsx";
import Transact from "./Pages/Dashboard/Transact.jsx";
import Wallet from "./Pages/Dashboard/Wallet.jsx";
import Profile from "./Pages/Dashboard/Profile.jsx";
import Withdraw from "./components/withdraw.jsx";
import Deposite from "./components/Deposite.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import DotLoader from "react-spinners/DotLoader.js";

const override = {
  display: "block",
  margin: "10rem auto",
  borderColor: "#3E8ED0",
};

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <React.Fragment className="load">
      {loading ? (
        <DotLoader
          className="load"
          color={"#3E8ED0"}
          size={100}
          aria-label="Loading Spinner"
          data-testid="loader"
          cssOverride={override}
        />
      ) : (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navbar />} />
              <Route index element={<Home />} />
              <Route path="about1" element={<About1 />} />
              <Route path="investment" element={<Investment />} />
              <Route path="Frequent" element={<Frequent />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Routes>

            <Routes>
              <Route
                path="/dashboard"
                element={
                  <PrivateRoute>
                    <Dashboard />
                  </PrivateRoute>
                }
              />
              <Route
                path="/analytics"
                element={
                  <PrivateRoute>
                    <Analytics />
                  </PrivateRoute>
                }
              />
              <Route
                path="/feed"
                element={
                  <PrivateRoute>
                    <Feed />
                  </PrivateRoute>
                }
              />
              <Route
                path="/transaction"
                element={
                  <PrivateRoute>
                    <Transact />
                  </PrivateRoute>
                }
              />
              <Route
                path="/wallet"
                element={
                  <PrivateRoute>
                    <Wallet />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/withdraw"
                element={
                  <PrivateRoute>
                    <Withdraw />
                  </PrivateRoute>
                }
              />
              <Route
                path="/deposit"
                element={
                  <PrivateRoute>
                    <Deposite />
                  </PrivateRoute>
                }
              />
            </Routes>
          </BrowserRouter>
        </div>
      )}
    </React.Fragment>
  );
};

export default App;
