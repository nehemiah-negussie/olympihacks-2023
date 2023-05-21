import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import "../styles/Smart.css";

const Smart = () => {
    const [partner, setPartner] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [coinType, setCoinType] = useState("");
    const [contractDuration, setContractDuration] = useState("");
    const [signedContract, setSignedContract] = useState(false);
    const [coinTypeOptions, setCoinTypeOptions] = useState([]);

    useEffect(() => {
        const connectToSolana = async () => {
            try {
                const connection = new Connection("https://api.devnet.solana.com");
                await window.solana.connect();
                const wallet = window.solana;
                const publicKey = wallet.publicKey;

                setWalletAddress(publicKey.toBase58());
                fetchTokenBalances(connection, publicKey);
            } catch (error) {
                console.error(error);
                alert("Failed to connect to Solana. Please try again.");
            }
        };

        connectToSolana();
    }, []);

    const fetchTokenBalances = async (connection, publicKey) => {
        const tokenAddresses = [
            "So11111111111111111111111111111111111111112", // Example token address
        ];


        const balances = {};
        for (const tokenAddress of tokenAddresses) {
            const publicKeyObj = new PublicKey(publicKey);

            // Fetch token balance using Solana-specific methods
            const balance = await connection.getTokenAccountBalance(publicKeyObj);
            const parsedBalance = balance.value.uiAmount;

            balances[tokenAddress] = parsedBalance;
        }
        setCoinTypeOptions(balances);

    };

    const handlePartnerChange = (event) => {
        setPartner(event.target.value);
    };

    const handleAmountChange = (event) => {
        setAmount(event.target.value);
    };

    const handleCoinTypeChange = (event) => {
        setCoinType(event.target.value);
        setAmount(""); // Reset amount when coin type changes
    };

    const handleContractDurationChange = (event) => {
        setContractDuration(event.target.value);
    };

    const handleSignedContractChange = () => {
        setSignedContract(!signedContract);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform any necessary actions with the form data and the user's wallet address
        console.log({
            partner,
            walletAddress,
            amount,
            coinType,
            contractDuration,
            signedContract,
        });

        // Reset the form fields
        setPartner("");
        setAmount("");
        setCoinType("");
        setContractDuration("");
        setSignedContract(false);
    };

    return (
        <div className="smart">
            <nav className="navbar2">
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
                        <option value="">Select a partner</option>
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
                        disabled
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
                    <select
                        name="coin-type"
                        id="coin-type-input"
                        value={coinType}
                        onChange={handleCoinTypeChange}
                    >
                        <option value="">Select a coin type</option>
                        {Object.entries(coinTypeOptions).map(([tokenAddress, balance]) => (
                            <option key={tokenAddress} value={tokenAddress}>
                                {tokenAddress} (Balance: {balance})
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="contract-duration-select">
                    Contract Duration:
                    <select
                        name="contract-duration"
                        id="contract-duration-select"
                        value={contractDuration}
                        onChange={handleContractDurationChange}
                    >
                        <option value="">Select a duration</option>
                        <option value="1">1 day</option>
                        <option value="7">7 days</option>
                        <option value="30">30 days</option>
                    </select>
                </label>

                <label htmlFor="signed-contract-checkbox">
                    Signed Contract:
                    <input
                        type="checkbox"
                        id="signed-contract-checkbox"
                        checked={signedContract}
                        onChange={handleSignedContractChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Smart;
