import React from "react";
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

const App = () => {
  return (
    <React.Fragment>
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
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/transaction" element={<Transact />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/deposit" element={<Deposite />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
