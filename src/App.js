import React, { Component } from "react";
import Section from "./components/Section";
// import Modal from "./Pages/Modal/Modal";
// import Modal from "./components/dashboard/AdminSideNave/Modal"
// import Form from "./pages/Registration/Form";
// import "./DashBoard.css";

// import { Router } from "react-router-dom";

import { BrowserRouter as Router } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Section />
          {/* <Modal /> */}
        </div>
      </Router>
    );
  }
}

export default App;
