import React from "react";
import "../styles/LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landing-page">
      <header>
        <h1>Welcome to MusicChain</h1>
        <p>Discover and support independent artists on the blockchain</p>
      </header>
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
        <h2>Join MusicChain Today</h2>
        <p>
          Sign up to start exploring, purchasing, and supporting your favorite
          artists.
        </p>
        <button className="cta-button">Get Started</button>
      </section>
      <footer>
        <p>&copy; 2023 MusicChain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
