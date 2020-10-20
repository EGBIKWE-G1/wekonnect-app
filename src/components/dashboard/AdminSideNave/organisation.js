import React, { Component } from "react";
import { Link } from "react-router-dom";
// import admin from "../dashboard/accets/admin.png";
import admin from "../../dashboard/accets/admin.png";
import august from "../../dashboard/accets/august.jpg";
import andrea from "../../dashboard/accets/andrea.jpg";
// import daniel from "../../dashboard/accets/daniel.jpg";
// import geremie from "../../dashboard/accets/geremie.jpg";
import karolina from "../../dashboard/accets/karolina.jpg";
import andreas from "../../dashboard/accets/andreas.jpg";
import gustavo from "../../dashboard/accets/gustavo.jpg";
import quadio from "../../dashboard/accets/quadio.jpg";
import grabowska from "../../dashboard/accets/grabowska.jpg";
import piacs from "../../dashboard/accets/piacs.jpg";
import riche from "../../dashboard/accets/riche.jpg";
import Navbar from "../../Navbar";    
// import Modal from "../Modal/Modal"
// import Modal from "../AdminSideNave/Modal";

// import Footer from "../../Footer";

class organisation extends Component {
   
  render() {
    return (
      <div>
        <Navbar />
        <div className="navigation">
          <ul>
            <li>
              <img className="admin-img" src={admin} alt="Admin" />
              <span className="title">
                Katarina Smith <br /> Senior Developer
              </span>
            </li>

            <hr className="line" />

            <li>
              <Link to="/Adminboard">
                <a href=" #">
                  <span className="icon">
                    <i className="fas fa-user"></i>
                  </span>
                  <span className="title">Dashboard</span>
                </a>
              </Link>
            </li>

            <Link to="/organisation">
              <li>
                <a href=" #">
                  <span className="icon">
                    <i className="fas fa-users"></i>
                  </span>
                  <span className="title">organisation</span>
                </a>
              </li>
            </Link>

            <Link to="/Account">
              <li>
                <a href=" #">
                  <span className="icon">
                    <i className="fas fa-user"></i>
                    {/* <i className="fas fa-question-circle"></i> */}
                  </span>
                  <span className="title">Profile</span>
                </a>
              </li>
            </Link>

            <Link to="/Message">
              <li>
                <a href=" #">
                  <span className="icon">
                    <i className="fas fa-envelope"></i>
                    {/* <i className="fas fa-cog"></i> */}
                  </span>
                  <span className="title">Message</span>
                </a>
              </li>
            </Link>

            <Link to="/SignOut">
              <li>
                <a href=" #">
                  <span className="icon">
                    <i className="fas fa-sign-out-alt"></i>
                  </span>
                  <span className="title">Sign Out</span>
                </a>
              </li>
            </Link>
          </ul>
        </div>
        {/* 
        <div className="add-member-div">
          <h5>ADD MEMBERS</h5>
        </div> */}
        
        <h4 className="list-members">STRATUM TECHNOLOGY</h4>
        <div>
          <br />
          <section className="member-head">
          <Link to="/Esther">
            <div className="member-august-img">
              <img className="august" src={august} alt="Admin" />
              <h4 className="esther">Esther</h4>
              
              <button className="member-august-btns">More info</button>
            </div>
            </Link>

            <Link to="/Frank">
            <div className="member-august-img">
              <img className="august" src={andrea} alt="Admin" />
              <h4 className="esther">Frank</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>

            <Link to="/Sandra">
            <div className="member-august-img">
              <img className="august" src={karolina} alt="Admin" />
              <h4 className="esther">Sandra</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>
          </section>
          <br />
          <br />
          <section className="member-head">
          <Link to="/Julie">
            <div className="member-august-img">
              <img className="august" src={andreas} alt="Admin" />
              <h4 className="esther">Julie</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>

            <Link to="/Rachel">
            <div className="member-august-img">
              <img className="august" src={gustavo} alt="Admin" />
              <h4 className="esther">Rachel</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>

            <Link to="/Joseph">
            <div className="member-august-img">
              <img className="august" src={quadio} alt="Admin" />
              <h4 className="esther">Joseph</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>
          </section>
          <br />

          <section className="member-head">
          <Link to="/James">
            <div className="member-august-img">
              <img className="august" src={riche} alt="Admin" />
              <h4 className="esther">James</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>

            <Link to="/David">
            <div className="member-august-img">
              <img className="august" src={piacs} alt="Admin" />
              <h4 className="esther">David</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>

            <Link to="/Jennifer">
            <div className="member-august-img">
              <img className="august" src={grabowska} alt="Admin" />
              <h4 className="esther">Jennifer</h4>
              <button className="member-august-btn">More info</button>
            </div>
            </Link>
          </section>
        </div>
      </div>
    );
  }
}

export default organisation;
