import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

function Login() {
  return (
    <div className="container login-container">
      <div className="row">
        <div className="col-md-6 login-form-1">
          <h3>Members Login</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Phone Number"
                // value=""
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password "
                // value=""
                required
              />
            </div>
            <Link to="/Meboard">
            <div className="form-group">
              <input
                type="submit"
                className="btnSubmit"
                id="btn1"
                value="Login"
              />
            </div>
            </Link>
            <div className="form-group">
              <a href="w.forget" className="btnForgetPwd">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
        <div className="col-md-6 login-form-2">
          <div className="login-logo">
            <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
          </div>
          <h3>Admin Login</h3>
          <form>
            <div className="form-group">
              <input
                type="text"
                className="form-control"
                placeholder="Your Unique ID"
                // value=""
                required
              />
            </div>
            <div className="form-group">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                // value=""
                required
              />
            </div>
            <div className="form-group">
              <input type="submit" className="btnSubmit" value="Login" />
            </div>
            <div className="form-group">
              <a href="w.forget.html" className="btnForgetPwd" value="Login">
                Forget Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
