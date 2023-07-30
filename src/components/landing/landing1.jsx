import React from "react";
import Navbar from "./navbar/landing-navbar";

const Landing1 = () => {
  return (
    <>
      <div className="landing1-wrap">
        <div className="lb1">.</div>
        <Navbar />

        <p className="landing1-text">
          Code And Create In The Cloud
          <br />
          With <strong className="landing1-strong">Mocha</strong> Cloud
        </p>
        <div className="landing1-des">
          Build projects quickly without the need for any setup or
          configuration.
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="landing1-btn">
            <a
              href="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Get Started {"  >"}{" "}
            </a>
          </button>
        </div>
        <div class="arrow bounce"></div>
        <div> .</div>
      </div>
    </>
  );
};
export default Landing1;
