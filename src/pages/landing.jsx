import React from "react";
import Stars from "../components/landing/TwikilingStars/Stars";
import Landing1 from "../components/landing/landing1";
import Landing2 from "../components/landing/landing2";
import Landing3 from "../components/landing/landing3";
import Landing4 from "../components/landing/landing4";
import Landing5 from "../components/landing/landing5";
import Footer from "../components/landing/footer/footer";

function Lannding() {
  return (
    <>
      <Stars className="stars22" />
      <div className="landing-mainwrap">
        <Landing1 />
        <Landing2 />
        <Landing3 />
        <Landing4 />
        <Landing5 />
        <Footer />
      </div>
    </>
  );
}

export default Lannding;
