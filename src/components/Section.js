import React, { Component } from "react";
import { Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Error from "../pages/Error";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";
import Adminboard from "./dashboard/Adminboard";
import Memberboard from "./dashboard/Adminboard";
import Members from "./dashboard/AdminSideNave/Members";
import Account from "./dashboard/AdminSideNave/Account";
import Message from "./dashboard/AdminSideNave/Message";
import SignOut from "./dashboard/AdminSideNave/SignOut";
import Addmember from "./dashboard/AdminSideNave/Addmember";
import Esther from "./dashboard/profile/Esther";
import Frank from "./dashboard/profile/Frank"
import Sandra from "./dashboard/profile/Sandra";
import Julie from "./dashboard/profile/Julie";
import Rachel from "./dashboard/profile/Rachel";
import Joseph from "./dashboard/profile/Joseph"
import James from "./dashboard/profile/James";
import David from "./dashboard/profile/David"
import Jennifer from "./dashboard/profile/Jennifer";
import Meboard from "./dashboard/Meboard";
import organisation from "./dashboard/AdminSideNave/organisation"
import Profile from "./dashboard/AdminSideNave/Profile"
import Password from "./dashboard/AdminSideNave/Password"
import UpdateProfile from "./dashboard/AdminSideNave/UpdateProfile";



export class Section extends Component {
  render() {
    return (
      <section>
        <Route path="/" component={Home} exact />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/error" component={Error} />
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/Adminboard" component={Adminboard} />
        <Route path="/memberboard" component={Memberboard} />
        <Route path="/members" component={Members} />
        <Route path="/account" component={Account} />
        <Route path="/message" component={Message} />
        <Route path="/signout" component={SignOut} />
        <Route path="/addmember" component={Addmember} />
        <Route path="/esther" component={Esther} />
        <Route path="/frank" component={Frank} />
        <Route path="/sandra" component={Sandra} />
        <Route path="/julie" component={Julie} />
        <Route path="/rachel" component={Rachel} />
        <Route path="/joseph" component={Joseph} />
        <Route path="/james" component={James} />
        <Route path="/david" component={David} />
        <Route path="/jennifer" component={Jennifer} />
        <Route path="/meboard" component={Meboard} />
        <Route path="/organisation" component={organisation} />
        <Route path="/profile" component={Profile} />
        <Route path="/password" component={Password} />
        <Route path="/updateprofile" component={UpdateProfile} />
      </section>
    );
  }
}

export default Section;
