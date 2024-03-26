import React, { useState } from "react";
import "../App.css";
import { FaBitcoin } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import WalletAddress from "./WalletAddress";
import "./../Pages/Dashboard/Dashboard.css";

const Deposite = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const handleImageUpload = (event) => {
    setSelectedImage(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setIsSending(true);

    if (!selectedImage) {
      alert("Please select an image.");
      setIsSending(false);
      return;
    }

    try {
      // Initialize Firebase Storage

      // Send email with the image URL using EmailJS
      const serviceID = "service_w1e1fwc";
      const templateID = "template_cumf88j";
      const userID = "DlG3U4EeyORAHfYlA";

      await emailjs.send(serviceID, templateID, userID);

      alert("Email sent successfully!");
      setSelectedImage(null);
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send email. Please try again.");
    }

    setIsSending(false);
  };

  return (
    <React.Fragment>
      <section className="section bigColumn">
        <Link to="/dashboard" className="arrowcircle">
          <FaArrowLeft size={25} color="white" />
        </Link>
        <div className="container depositcontainer">
          <div className="box deposit">
            <h1 className="is-size-3">
              Deposit Crypto{" "}
              <span>
                <FaBitcoin color="orange" />
              </span>
            </h1>
            <p className="is-size-4">
              please select your preferred cryptocurrency option below. Whether
              it's Bitcoin, Ethereum, or another digital asset, our platform
              ensures secure and efficient transactions
            </p>
            <h3 className="mt-6 is-size-3 mb-6">USDT Wallet Address</h3>

            <WalletAddress />

            {/* <CopyTextArea /> */}
            <p className="is-size-4 mt-4">
              Upload Screen Shot For Confirmation
            </p>
            {/* <form className="form">
              <div className="field">
                <label className="label is-size-4">Amount</label>
                <div className="control">
                  <input
                    className="input is-medium"
                    type="file"
                    placeholder="Text input"
                  />
                </div>
              </div>
              <button className="button is-large is-info" type="submit">
                Submit
              </button>
            </form> */}

            <form onSubmit={handleSubmit}>
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
              />
              {/* Hidden input to include the image in the form data */}
              <input type="hidden" name="image" value={selectedImage} />
              <button className="button" type="submit" disabled={isSending}>
                {isSending ? "Sending..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Deposite;
