import React, { Component } from "react";
import andreas from "../../dashboard/accets/andreas.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";


class Julie extends Component {
  render() {
    return (
      <div>
      <div className="">
      <Navbar />
      <br />
      <br />
      <br />
       <img className="august-page-img" src={andreas} alt="Admin" />
       <div className="info-content">
        <h2>Julie Sharon</h2>
        <h2>juliesharon@gmail.com</h2>
        <h2>08083410811</h2>
        <h2>Doctor</h2>
        <h2>Female</h2>
        <h2>Benue state</h2>
        <h2>Cvilla Road 44, lekki scheme2</h2>
        <h2>Lagos</h2>
        <h2>shodi</h2>
        <h2>Nigeria</h2>
        </div>
        <Footer />
      </div>
      </div>
    );
  }
}

export default Julie;
