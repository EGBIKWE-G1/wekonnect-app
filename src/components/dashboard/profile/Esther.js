import React, { Component } from "react";
import august from "../../dashboard/accets/august.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";




class Esther extends Component {
  render() {
    return (
      <div>
      <div className="">
      <Navbar />
      <br />
      <br />
      <br />
       <img className="august-page-img" src={august} alt="Admin" />
       <div className="info-content">
        <h2>Esther Bette</h2>
        <h2>estherbette@gmail.com</h2>
        <h2>08083410811</h2>
        <h2>Lawyer</h2>
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

export default Esther;
