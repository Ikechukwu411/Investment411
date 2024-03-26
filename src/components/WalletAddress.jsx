import React, { useState } from "react";

const WalletAddress = () => {
  const [selectedWallet, setSelectedWallet] = useState("");
  const walletAddresses = {
    USDT: "usdt_wallet_address",
    BTC: "btc_wallet_address",
    ETH: "eth_wallet_address",
  };

  const handleSelectChange = (event) => {
    setSelectedWallet(event.target.value);
  };

  const handleCopyClick = () => {
    const textarea = document.createElement("textarea");
    textarea.value = walletAddresses[selectedWallet];
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert(`Address copied: ${walletAddresses[selectedWallet]}`);
  };
  return (
    <div>
      <select value={selectedWallet} onChange={handleSelectChange}>
        <option value="">Select Wallet Address</option>
        <option value="USDT">USDT Wallet</option>
        <option value="BTC">BTC Wallet</option>
        <option value="ETH">ETH Wallet</option>
      </select>
      <button onClick={handleCopyClick} disabled={!selectedWallet}>
        Copy Address
      </button>
    </div>
  );
};

export default WalletAddress;
