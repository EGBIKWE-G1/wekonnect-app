import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Navbar";
//  import Modal from "./Pages/Modal/Modal";
// import Modal from "./AdminSideNave/Modal"
// import Navber from "../../dashboard/Adminboard/";
import admin from "../dashboard/accets/admin.png";
// import admin from "../Adminboard/accets/admin.png";
// import Section from "../Section";

class Adminboard extends Component {
  render() {
    return (
      <div>
        {/* <img src="" alt=""></img> */}
        <section className="adminboard">
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

              <Link to="/Members">
                <li>
                  <a href=" #">
                    <span className="icon">
                      <i className="fas fa-users"></i>
                    </span>
                    <span className="title">Members</span>
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
                    <span className="title">Account</span>
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
          <div class="toggle" onclick="toggleMenu()"></div>
          <section className="container-Admin">
            <div className="member-Admin">
              <span>TOTAL MEMBERS </span>
              <div className="member-icon">
                <i className="fas fa-users"></i>
                <h2 className="member-Admin-num">24</h2>
                <i className="good fas fa-arrow-down">12% Since last month</i>
              </div>
              <i className="fas fa-arrow-alt-down"></i>
              <i class="fad fa-arrow-alt-down"></i>
            </div>     
            <div className="user">
              {" "}
              <span> LAST USER ACTIVITY </span>{" "}
              {/* <i class="fas fa-angle-double-down"></i> */}
              {/* <i className="fas fa-arrow-alt-down"></i> */}
              {/* <i class="fad fa-arrow-alt-down"></i> */}
              <div className="member-icon">
                <i className="fas fa-users"></i>
              </div>
              <h2 className="member-Admin-num">GODWIN</h2>
            </div>
            <div className="logout">
              <span> USER PROGRESS </span>
              <div className="member-icon">
                {/* <i className="fas fa-users"></i> */}
              </div>
              <i className="fas fa-chart-bar"></i>
              <h2 className="member-Admin-num">75.5%</h2>
            </div>
            <br />
          </section>
          
          
          <section className="container-Admin">
            <div className="member-Admin">
              <span>CHECK MESSAGE </span>
              <div className="member-icon">
                <i className="fas fa-envelope"></i>
                <h4 className="member-Admin-message">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing
                  <br />
                  elit. Placeat, nemo.
                </h4>
                {/* <i className="good fas fa-arrow-down">12% Since last month</i> */}
                {/* <h4>12% Since last month</h4> */}
              </div>

              <i className="fas fa-arrow-alt-down"></i>
              <i class="fad fa-arrow-alt-down"></i>
            </div>
            <div className="user">
              <span>Update My information</span>
              <div className="member-icon">
                <i className="fas fa-user"></i>
                <h4 className="member-Admin-message">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing
                  <br />
                  elit. Placeat, nemo.
                </h4>
              </div>
              <h2 className="member-Admin-num">GODWIN</h2>
            </div>
            <div className="logout">
              <span>Organisation Directory</span>
              <div className="member-icon">
                <i className="fas fa-users"></i>
                <h4 className="member-Admin-message">
                  Lorem ipsum dolor sit amet <br /> consectetur, adipisicing
                  <br />
                  elit. Placeat, nemo.
                </h4>
              </div>
              <h2 className="member-Admin-num">GODWIN</h2>
            </div>
          </section>
          {/* <Modal /> */}
        </section>
      </div>
    );
  }
}

export default Adminboard;
