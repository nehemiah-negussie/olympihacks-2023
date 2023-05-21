import React, { useState } from "react";
import "../styles/Smart.css";

const Smart = () => {
  const [partner, setPartner] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [amount, setAmount] = useState("");
  const [coinType, setCoinType] = useState("");
  const [securityRequirements, setSecurityRequirements] = useState("");
  const [contractDuration, setContractDuration] = useState("");

  const handlePartnerChange = (event) => {
    setPartner(event.target.value);
  };

  const handleWalletAddressChange = (event) => {
    setWalletAddress(event.target.value);
  };

  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };

  const handleCoinTypeChange = (event) => {
    setCoinType(event.target.value);
  };

  const handleSecurityRequirementsChange = (event) => {
    setSecurityRequirements(event.target.value);
  };

  const handleContractDurationChange = (event) => {
    setContractDuration(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform any necessary actions with the form data
    console.log({
      partner,
      walletAddress,
      amount,
      coinType,
      securityRequirements,
      contractDuration,
    });

    // Reset the form fields
    setPartner("");
    setWalletAddress("");
    setAmount("");
    setCoinType("");
    setSecurityRequirements("");
    setContractDuration("");
  };

  return (
    <div className="smart">
      <nav className="navbar">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/app">App</a>
          </li>
        </ul>
      </nav>

      <form onSubmit={handleSubmit}>
        <label htmlFor="partner-select">
          Select Partner:
          <select
            name="partner"
            id="partner-select"
            value={partner}
            onChange={handlePartnerChange}
          >
            <option value="partner1">Partner 1</option>
            <option value="partner2">Partner 2</option>
            <option value="partner3">Partner 3</option>
          </select>
        </label>

        <label htmlFor="wallet-address-input">
          Wallet Address:
          <input
            type="text"
            id="wallet-address-input"
            value={walletAddress}
            onChange={handleWalletAddressChange}
          />
        </label>

        <label htmlFor="amount-input">
          Amount:
          <input
            type="text"
            id="amount-input"
            value={amount}
            onChange={handleAmountChange}
          />
        </label>

        <label htmlFor="coin-type-input">
          Coin Type:
          <input
            type="text"
            id="coin-type-input"
            value={coinType}
            onChange={handleCoinTypeChange}
          />
        </label>

        <label htmlFor="security-requirements-input">
          Security Requirements:
          <input
            type="text"
            id="security-requirements-input"
            value={securityRequirements}
            onChange={handleSecurityRequirementsChange}
          />
        </label>

        <label htmlFor="contract-duration-select">
          Contract Duration:
          <select
            name="contract-duration"
            id="contract-duration-select"
            value={contractDuration}
            onChange={handleContractDurationChange}
          >
            <option value="1">1 day</option>
            <option value="7">7 days</option>
            <option value="30">30 days</option>
          </select>
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Smart;
