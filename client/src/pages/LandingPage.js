import React from "react";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/app">App</Link>
          </li>
          <li>
            <Link to="/contract">Contract</Link>
          </li>
        </ul>
      </nav>

      <div className="content-section">
        <header>
          <h1>Welcome to Handshake</h1>
          <p id="subtitle">
            Streamline contract agreements and automate secure fund transfers.
          </p>
        </header>

        <section>
          <img
            id="collab_img"
            src="https://plus.unsplash.com/premium_photo-1663956045546-80dd104c018f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
            alt="Collaboration"
          />
          <section className="cta-section">
            <h2>Join Handshake Today</h2>
            <p>
              Sign up to start collaborating securely.
            </p>
            <a href="/app"><button className="cta-button">Get Started</button></a>
          </section>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Streamlined Contract Agreement Process</h2>
            <p>
              Handshake simplifies and accelerates the contract agreement process by providing a user-friendly platform where parties can collaborate, negotiate terms, and reach agreements seamlessly. With features such as real-time collaboration, revision tracking, and feedback management, Handshake eliminates the need for traditional, time-consuming methods and intermediaries, saving time and increasing efficiency.
            </p>
          </div>
          <div className="feature">
            <h2>Secure and Automated Fund Transfers</h2>
            <p>
              Handshake integrates secure payment gateways and blockchain-powered smart contracts to ensure swift and secure fund transfers. By leveraging smart contract technology, funds are automatically released upon fulfillment of agreed-upon milestones, providing both parties with confidence and transparency in the payment process. This eliminates the risk of payment disputes and promotes trust between artists and vendors.
            </p>
          </div>
          <div className="feature">
            <h2>Privacy and Data Security</h2>
            <p>
              Handshake prioritizes user privacy and data security by implementing robust authentication measures, encrypted communication protocols, and secure storage of sensitive information. Artists and vendors can trust that their personal and financial data is protected, providing a secure environment for contract negotiations and transactions.
            </p>
          </div>
        </section>



        <footer>
          <p>&copy; 2023 Handshake. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
