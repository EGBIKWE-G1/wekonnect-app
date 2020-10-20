import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img6 from "../images/img6.jpg";
import img5 from "../images/img5.jpg";
import img2 from "../images/img2.jpg";

const carouselStyle = {
  color: "#fff",
  marginTop: "-200px",
  //   position: "relative",
  //   bottom: "375px",
};

const carouselStyle1 = {
  color: "#fff",
  //   position: "relative",
  //   bottom: "335px",
};

const carouselStyle2 = {
  //   position: "relative",
  //   bottom: "200px",
  pading: "10px 100px",
  textDecoration: "none",
  background: "white",
  color: "black",
  margin: "10px",
};

const Homeslider = () => {
  return (
    <section className="carousel-wrapper">
      <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
        <section style={{ position: "relative" }}>
          <img src={img6} alt="carousel-img" />
          <h1 style={carouselStyle}>A Yearbook is Worth a Thousand Memories</h1>
          <h3 style={carouselStyle1}>
            Wekonnect can helps you preserve cherished memories
          </h3>
          <a href="/" className="a-btn" type="button" style={carouselStyle2}>
            Learn How
          </a>
        </section>
        <section>
          <img src={img5} alt="carousel-img" />
          <h1 style={carouselStyle}>
            Moments worth remembering are found in a yearbook
          </h1>
          <h3 style={carouselStyle1}>
            We care about your most beautiful moments
          </h3>
          <a href="/" className="a-btn" type="button" style={carouselStyle2}>
            Learn More
          </a>
        </section>
        <section>
          <img src={img2} alt="carousel-img" />
          <h1 style={carouselStyle}> Creating a Yearbook is super easy </h1>
          <h3 style={carouselStyle1}>
            Sign Up and create a Yearbook in 5 minutes
          </h3>
          <a href="/" className="a-btn" type="button" style={carouselStyle2}>
            Learn More
          </a>
        </section>
      </Carousel>
    </section>
  );
};

export default Homeslider;
