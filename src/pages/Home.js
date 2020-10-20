import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Homeslider from "../components/Homeslider";
import HomeHeader from "../components/HomeHeader";
import Parallax from "../components/Parallax";
import Footer from "../components/Footer";
import beautiful_interface from "../images/beautiful-interface.png";
import chat from "../images/chat.png";
import easydesign from "../images/easy-design.jpg";
import easyintegrationlms from "../images/easy-integration-lms.png";
import easyphotoupload from "../images/easy-photo-upload.jpg";
import googlephotos from "../images/google-photos.png";
import multipletemplatetypes from "../images/multiple-template-types.png";
import printableyearbooks from "../images/printable-yearbooks.png";
import responsivedesign from "../images/responsive-design.jpg";
import Unlimitedstorage from "../images/unlimited-storage.png";
import unlimiteduser from "../images/unlimited-user.png";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* <Homeslider /> */}
      <HomeHeader />
      <section className="jumbotron text-center" id="jumbotron1">
        <section className="class1">
          <h2 className="wekonnet-color bold" id="id1">
            WHAT WE DO
          </h2>
          <h4 className="text-secondary pl-100 pr-100">
            We help students, schools, businesses, organizations, etc. create
            long-lasting memories by having a copy of their members stored
            online in a beautiful and attractive form. We know that pictures can
            get lost accidentally and memories fade over time. With WEkonnet,
            you don't have to bother about losing memories. They are stored
            forever! Their are several features that emhance the experiemce of
            our application. Yearbooks produced with us is also printable and
            can be exported to pdf format.
          </h4>
        </section>
      </section>

      <section className="container-fluid wekonnet-bg">
        <h2 className="text-center wekonnet-color bold mb-15 pt-50">
          WHY CHOOSE US
        </h2>
        <section className="top-features-container">
          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={easydesign}
              />
            </section>
            <section className="top-features-item ">
              <h2 className="text-primary text-center">Easy Design</h2>
              <h4 className="text-center text-muted bold">
                With the ease of design, you can create a Yearbook in minutes
              </h4>
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <h2 className="text-secondary text-center">
                Unlimited Number of Users
              </h2>
              <h4 className="text-center text-muted bold">
                Our robust platform can accommmodate an unlimited number of
                users
              </h4>
            </section>
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={unlimiteduser}
              />
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={beautiful_interface}
              />
            </section>
            <section className="top-features-item">
              <h2 className="text-info text-center">Beautiful Interface</h2>
              <h4 className="text-center text-muted bold">
                We pay extreme details to the design and interface of the
                application. An amazing User experience is a priority to us
              </h4>
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <h2 className="text-success text-center">Printable Yearbooks</h2>
              <h4 className="text-center text-muted bold">
                You can easily export the Yearbook to PDF and print if you
                desire. This is a Pro feature
              </h4>
            </section>
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={printableyearbooks}
              />
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={Unlimitedstorage}
              />
            </section>
            <section className="top-features-item">
              <h2 className="text-danger text-center">Unlimited Storage</h2>
              <h4 className="text-center text-muted bold">
                Our integration with Google Photos make it possible to add as
                many photos as you like.
              </h4>
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <h2 className="text-info text-center">Responsive Design</h2>
              <h4 className="text-center text-muted bold">
                Create, view, edit and use the application in any device! From
                Smart watches to phone and TV.
              </h4>
            </section>
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={responsivedesign}
              />
            </section>
          </section>

          <section className="top-feature-sub-container">
            <section className="top-features-item">
              <img
                className="features-img"
                alt="features-img"
                src={easyphotoupload}
              />
            </section>
            <section className="top-features-item">
              <h2 className="text-danger text-center">Easy Photo Upload</h2>
              <h4 className="text-center text-muted bold">
                Add photos to your collection with ease. The upload area is very
                intuitive and user-friendly
              </h4>
            </section>
          </section>
        </section>
      </section>

      <section className="jumbotron">
        <section className="container">
          <h3
            className="text-center wow wekonnet-color fadeInDown"
            data-wow-delay="0.1s"
          >
            <strong>TOP FEATURES</strong>
          </h3>
          <section className="container-fluid">
            <section className="row">
              <section
                className="col-lg-3 col-md-3 text-center mt-3 mb-4 wow fadeInLeft"
                data-wow-delay="0.2s"
              >
                <img
                  className="img-fluid img-thumbnail rounded-circle mb-2 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src={chat}
                  alt="chat"
                />
                <h4
                  className="text-center text-primary font-weight-bold wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Customized Chatrooms for Users
                </h4>
                <h5
                  className="font-weight-bold wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  Easy chat between users in groups. Users can also share files
                  and pictures among themselves with ease.
                </h5>
              </section>

              <section
                className="col-lg-3 col-md-3 text-center mt-3 mb-4 wow fadeInLeft"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid img-thumbnail rounded-circle mb-2 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src={googlephotos}
                  alt="googlephotos"
                />
                <h4
                  className="text-center text-primary font-weight-bold wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Easy Integration with Google Photos
                </h4>
                <h5
                  className="font-weight-bold wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  Seamlessly sync pictures between your yearbook and Google
                  photos.
                </h5>
              </section>

              <section
                className="col-lg-3 col-md-3 text-center mt-3 mb-4 wow fadeInRight"
                data-wow-delay="0.1s"
              >
                <img
                  className="img-fluid img-thumbnail rounded-circle mb-2 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src={multipletemplatetypes}
                  alt=""
                />
                <h4
                  className="text-center text-primary font-weight-bold wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Multiple Template Types
                </h4>
                <h5
                  className="font-weight-bold wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  We have templates for different organization types, whether
                  secondary schools, universities, Churches, Mosques, etc.
                </h5>
              </section>

              <section
                className="col-lg-3 col-md-3 text-center mt-3 mb-4 wow fadeInRight"
                data-wow-delay="0.2s"
              >
                <img
                  className="img-fluid img-thumbnail rounded-circle mb-2 wow fadeInUp"
                  data-wow-delay="0.3s"
                  src={easyintegrationlms}
                  alt=""
                />
                <h4
                  className="text-center text-primary font-weight-bold wow fadeInUp"
                  data-wow-delay="0.4s"
                >
                  Easy Integration with different LMS
                </h4>
                <h5
                  className="font-weight-bold wow fadeInUp"
                  data-wow-delay="0.6s"
                >
                  In case you are a school owner or administrator, our website
                  can integrate with over 100 Learning Management Systems.
                </h5>
              </section>
            </section>
          </section>
        </section>
      </section>
      <Parallax />

      <Footer />
    </>
  );
};

export default Home;
