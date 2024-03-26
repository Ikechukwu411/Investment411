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
import Wallet from "./Pages/Dashboard/Wallet.jsx";
import Profile from "./Pages/Dashboard/Profile.jsx";
import Withdraw from "./components/withdraw.jsx";
import Deposite from "./components/Deposite.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import DotLoader from "react-spinners/DotLoader.js";
import AdminDashboard from "./Pages/Dashboard/AdminDashboard.jsx";
import TransactionPage from "./Pages/Dashboard/TransactionPage.jsx";
import Help from "./Pages/Dashboard/Help.jsx";
import ResetPassword from "./components/ResetPassword.jsx";

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
              <Route path="/@tr2fd7685adminuser" element={<AdminDashboard />} />
              <Route path="/resetpassword" element={<ResetPassword />} />
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
                path="/wallet"
                element={
                  <PrivateRoute>
                    <Wallet />
                  </PrivateRoute>
                }
              />
              {/* <Route
                path="/resetpassword"
                element={
                  <PrivateRoute>
                    <ResetPassword />
                  </PrivateRoute>
                }
              /> */}
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
              <Route
                path="/transactionlist"
                element={
                  <PrivateRoute>
                    <TransactionPage />
                  </PrivateRoute>
                }
              />
              <Route
                path="/help"
                element={
                  <PrivateRoute>
                    <Help />
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
