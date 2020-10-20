import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import img1 from "../images/img1.jpg";

const About = () => {
  return (
    <div>
      <Navbar />
      <img className="about-img" src={img1} alt="About" />
      <h1 className="about-h1">ABOUT US</h1>
      <Footer />
    </div>
  );
};

export default About;
