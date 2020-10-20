import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <section className="container-fluid text-justify">
          <section className="row text-justify ">
            <section className="col-lg-2 col-md-4 ml-4">
              <Link to="/" className="footer-brand">
                WEKONNET
              </Link>
              <br />
              <br />
              <p className="mt-2">
                <Link href="/" className=" font-weight-bold">
                  Home
                </Link>
              </p>
              <p>
                <Link href="/" className=" font-weight-bold">
                  About US
                </Link>
              </p>
              <p>
                <Link href="/" className=" font-weight-bold">
                  Contact Us
                </Link>
              </p>
              <p>
                <Link href="/" className=" font-weight-bold">
                  Sign Up
                </Link>
              </p>
              <p>
                <Link href="/" className=" font-weight-bold">
                  Sign In
                </Link>
              </p>
            </section>

            <section className="col-lg-2 col-md-4 ml-4">
              <p className="mt-2 font-weight-bold">ABOUT US</p>
              <br />
              <p className="mt-0.5">
                <Link to="/">Our Mission</Link>
              </p>
              <p>
                <Link to="/">Our Vision</Link>
              </p>
              <p>
                <Link to="/">Our Team</Link>
              </p>
              <p>
                <Link to="/">Our Blog</Link>
              </p>
            </section>

            <section className=" footer-center col-lg-3 col-md-4 mb-4 ml-4 mt-2 text-justify">
              <p className="font-weight-bold">CONTACT US</p>
              <br />

              <section>
                <p>
                  <i className="fa fa-map-marker"></i> Lagos Nigeria.
                </p>
              </section>
              <section>
                <p>
                  <i className="fa fa-phone"></i> +234 808 000 0000
                </p>
                <p>
                  <i className="fa fa-phone"></i> +234 808 000 0000
                </p>
              </section>
              <section>
                <p>
                  <i className="fa fa-envelope"></i>
                  <Link to="/">contact@wekonnet.com</Link>
                </p>
              </section>
              <section>
                <p>
                  <i className="fa fa-facebook"></i>
                  <Link to="/">Follow Us On Facebook</Link>
                </p>
              </section>
              <section>
                <p>
                  <i className="fa fa-twitter"></i>
                  <Link to="/">Follow Us On Twitter</Link>
                </p>
              </section>
            </section>

            <section className="col-lg-4 col-md-4 mb-3 mt-2">
              <p className="font-weight-bold">OUR ADVANTAGE</p>
              <br />
              <p>Easy Design</p>
              <p>Printable Yearbooks</p>
              <p>Unlimited Number of Users</p>
              <p>Beautiful Interface</p>
              <p>Easy Photo Upload</p>
              <p>Multiple Design Options</p>
              <p>Unlimited Storage Options</p>
              <p>Collaborative Editing</p>
            </section>
          </section>
          <hr className="hr-white2" />
          <p className=" text-center font-weight-bold">
            WEKONNET Technologies &copy; 2020
          </p>
        </section>
      </section>
    </>
  );
};

export default Footer;
