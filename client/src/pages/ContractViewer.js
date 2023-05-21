import React, { useEffect, useState } from "react";

function ContractViewer() {
  const [contractAddress, setContractAddress] = useState("");
  const [contractName, setContractName] = useState("");
  const [contractAmount, setContractAmount] = useState("");
  const [contractDuration, setContractDuration] = useState("");
  const [partnerWalletAddress, setPartnerWalletAddress] = useState("");

  useEffect(() => {
    // Simulated data for contract details
    const simulatedContractAddress = "<YOUR_CONTRACT_ADDRESS>";
    const simulatedContractName = "<YOUR_CONTRACT_NAME>";
    const simulatedContractAmount = "<YOUR_CONTRACT_AMOUNT>";
    const simulatedContractDuration = "<YOUR_CONTRACT_DURATION>";
    const simulatedPartnerWalletAddress = "<PARTNER_WALLET_ADDRESS>";

    setContractAddress(simulatedContractAddress);
    setContractName(simulatedContractName);
    setContractAmount(simulatedContractAmount);
    setContractDuration(simulatedContractDuration);
    setPartnerWalletAddress(simulatedPartnerWalletAddress);
  }, []);

  return (
    <div>
      <h1>Music Blockchain Contract Viewer</h1>

      <div id="contract-info">
        <h2>Contract Information</h2>
        <p>
          <strong>Contract Address:</strong> {contractAddress}
        </p>
        <p>
          <strong>Contract Name:</strong> {contractName}
        </p>
        <p>
          <strong>Contract Amount:</strong> {contractAmount}
        </p>
        <p>
          <strong>Contract Duration:</strong> {contractDuration}
        </p>
        <p>
          <strong>Partner Wallet Address:</strong> {partnerWalletAddress}
        </p>
      </div>
    </div>
  );
}

export default ContractViewer;
