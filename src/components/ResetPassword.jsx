import React, { useState } from "react";
import { auth } from "../../Firebase/firebaseconfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { Link } from "react-router-dom";
import "../App.css";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [resetSent, setResetSent] = useState(false);
  const [error, setError] = useState(null);

  const handleReset = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, email).then((res) => {
      setResetSent(true);
      setError(null);
      console.log(res);
    });
  };
  return (
    <div className="section reset">
      <div className="container box1">
        <h2 className="is-size-3">Password Reset</h2>
        {resetSent ? (
          <p>Reset email sent. Please check your inbox.</p>
        ) : (
          <form onSubmit={handleReset}>
            <input
              className="input"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="button ml-3 is-info mt-4" type="submit">
              Send Reset Email
            </button>
          </form>
        )}
        {error && <p>{error}</p>}
      </div>
      <Link to="/login">
        <p>Go Back To Login</p>
      </Link>
    </div>
  );
};

export default ResetPassword;
