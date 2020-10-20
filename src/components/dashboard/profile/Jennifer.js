import React, { Component } from "react";
import grabowska from "../../dashboard/accets/grabowska.jpg";
import Navbar from "../../Navbar";
import Footer from "../../Footer";





class Jennifer extends Component {
  render() {
    return (
     <div>
      <div className="">
      <Navbar />
      <br />
      <br />
      <br />
       <img className="august-page-img" src={grabowska} alt="Admin" />
       <div className="info-content">
        <h2>Jennifer Lauren</h2>
        <h2>jenniferlauren@gmail.com</h2>
        <h2>08090410411</h2>
        <h2>Doctor</h2>
        <h2>Fmale</h2>
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

export default Jennifer;
