import React from "react";
import { Link } from "react-router-dom";

const Parallax = () => {
  return (
    <>
      <section class="jumbotron text-center" className="parallax">
        <hr className="hr-white" />
        <br />
        <h1 className="text-center">
          At WEkonnet, we preserve cherished memories
        </h1>
        <br />
        <br />
        <h3>
          {" "}
          <Link
            to="/signup"
            className="btn parallax-btn btn-lg text-center d-block mx-auto"
          >
            Get Started
          </Link>{" "}
        </h3>
        <br />
        <br />
        <hr className="hr-white" />
      </section>
    </>
  );
};

export default Parallax;
