import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";
import axios from "axios";
import "../styles/Smart.css";

const Smart = () => {
    const [partners, setPartners] = useState([]);
    const [newPartner, setNewPartner] = useState("");
    const [walletAddress, setWalletAddress] = useState("");
    const [amount, setAmount] = useState("");
    const [coinType, setCoinType] = useState("");
    const [contractDuration, setContractDuration] = useState("");
    const [signedContract, setSignedContract] = useState(false);
    const [tokenAccounts, setTokenAccounts] = useState([]);
    const [maxAmount, setMaxAmount] = useState(0);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const connectToSolana = async () => {
            try {
                const connection = new Connection("https://api.devnet.solana.com");
                await window.solana.connect();
                const wallet = window.solana;
                const publicKey = wallet.publicKey;

                setWalletAddress(publicKey.toBase58());
                fetchTokenAccounts(connection, publicKey);
            } catch (error) {
                console.error(error);
                alert("Failed to connect to Solana. Please try again.");
            }
        };

        connectToSolana();
    }, []);

    useEffect(() => {
        if (tokenAccounts.length > 0 && coinType) {
            const selectedAccount = tokenAccounts.find(
                (account) => account.pubkey.toBase58() === coinType
            );
            if (selectedAccount) {
                const balance = selectedAccount.account.data.parsed.info.tokenAmount.uiAmount;
                setMaxAmount(balance);
            }
        } else {
            setMaxAmount(0);
        }
    }, [coinType, tokenAccounts]);

    const fetchTokenAccounts = async (connection, publicKey) => {
        const SPL_TOKEN_PROGRAM_ID = new PublicKey(
            "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"
        );

        try {
            const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
                publicKey,
                {
                    programId: SPL_TOKEN_PROGRAM_ID,
                }
            );
            setTokenAccounts(tokenAccounts.value);
        } catch (error) {
            console.error(error);
            alert("Failed to fetch token accounts. Please try again.");
        }
    };

    const handlePartnerChange = (event) => {
        const selectedOptions = Array.from(event.target.options)
            .filter((option) => option.selected)
            .map((option) => option.value);
        setPartners(selectedOptions);
    };

    const handleNewPartnerChange = (event) => {
        setNewPartner(event.target.value);
    };

    const handleNewPartnerSubmit = (event) => {
        event.preventDefault();

        if (newPartner.trim() !== "") {
            setPartners((prevPartners) => [...prevPartners, newPartner]);
            setNewPartner("");
        }
    };

    const handleAmountChange = (event) => {
        const inputAmount = event.target.value;
        if (inputAmount <= maxAmount) {
            setAmount(inputAmount);
        } else {
            console.log("Invalid amount");
        }
    };

    const handleCoinTypeChange = (event) => {
        setCoinType(event.target.value);
        setAmount("");
    };

    const handleContractDurationChange = (event) => {
        setContractDuration(event.target.value);
    };

    const handleSignedContractChange = () => {
        setSignedContract(!signedContract);
    };

    const handleFileChange = (event) => {
        setSelectedFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append("file", selectedFile);

        try {
            await axios.post("https://example.com/upload", formData, {});

            console.log({
                partners,
                walletAddress,
                amount,
                coinType,
                contractDuration,
                signedContract,
            });

            setPartners([]);
            setNewPartner("");
            setAmount("");
            setCoinType("");
            setContractDuration("");
            setSignedContract(false);
            setSelectedFile(null);
        } catch (error) {
            console.error(error);
            alert("Failed to submit the form. Please try again.");
        }
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
            <h1 id="contract_header">Contract Creator</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="partner-select">
                    Select Partners:
                    <select
                        name="partner"
                        id="partner-select"
                        multiple
                        value={partners}
                        onChange={handlePartnerChange}
                    >
                        {partners.map((partner) => (
                            <option key={partner} value={partner}>
                                {partner}
                            </option>
                        ))}
                    </select>
                </label>

                <label htmlFor="new-partner-input">
                    Add New Partner:
                    <input
                        type="text"
                        id="new-partner-input"
                        value={newPartner}
                        onChange={handleNewPartnerChange}
                    />
                    <button type="button" onClick={handleNewPartnerSubmit}>
                        Add
                    </button>
                </label>
                <div className="partners-container">
                    {partners.map((partner) => (
                        <div key={partner} class="column">
                            <h2>{partner}</h2>

                            {partners.concat(walletAddress).map((partner) => (
                                <>
                                    < input className="address" name={partner} placeholder={partner} />
                                </>
                            ))}
                        </div>
                    ))}
                </div>
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
                        type="number"
                        id="amount-input"
                        value={amount}
                        onChange={handleAmountChange}
                        min={0}
                        max={maxAmount}
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
                        {tokenAccounts.map((account) => (
                            <option
                                key={account.pubkey.toBase58()}
                                value={account.pubkey.toBase58()}
                            >
                                {account.pubkey.toBase58()} (Balance:{" "}
                                {account.account.data.parsed.info.tokenAmount.uiAmount})
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

                <label htmlFor="file-input">
                    Contract File:
                    <input
                        type="file"
                        id="file-input"
                        accept=".pdf"
                        onChange={handleFileChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form >
        </div >
    );
};

export default Smart;
