import React from "react";
import Navbar from "../components/Navbar";
// import richelieus from "../../dashboard/accets/richelieus.jpg";
import richelieus from "../components/dashboard/accets/richelieus.jpg";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div>
      <Navbar />
       <img className="riche" src={richelieus} alt="Admin" />
      <Footer />
    </div>
  );
};
      
export default Contact;
