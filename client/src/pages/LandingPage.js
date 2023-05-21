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
          <span id="img_text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
          </span>
        </section>

        <section className="features">
          <div className="feature">
            <h2>Decentralized Marketplace</h2>
            <p>
              Explore a diverse collection of music from talented independent
              artists.
            </p>
          </div>
          <div className="feature">
            <h2>Royalty Automation</h2>
            <p>
              Smart contracts ensure fair and transparent royalty distribution.
            </p>
          </div>
          <div className="feature">
            <h2>Community Engagement</h2>
            <p>
              Connect with fellow music enthusiasts and artists in our vibrant
              community.
            </p>
          </div>
        </section>

        <section className="cta-section">
          <h2>Join Handshake Today</h2>
          <p>
            Sign up to start exploring, purchasing, and supporting your favorite
            artists.
          </p>
          <button className="cta-button">Get Started</button>
        </section>

        <footer>
          <p>&copy; 2023 Handshake. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
