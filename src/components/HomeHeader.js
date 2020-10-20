import React from "react";
import { Link } from "react-router-dom";

const HomeHeader = () => {
  return (
    <section className="home-header">
      <section className="header-text-section">
        <h1 className="block home-header-text">
          A Yearbook is Worth a Thousand Memories
        </h1>
        <br />
        <h4 className="block home-header-text-2">
          Wekonnect can helps you preserve cherished memories
        </h4>
        <br />
        <Link to="/about" className="header-btn">
          Learn How
        </Link>
      </section>
    </section>
  );
};

export default HomeHeader;
