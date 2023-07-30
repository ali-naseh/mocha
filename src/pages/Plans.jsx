import React from "react";
import Navbar from "../components/landing/navbar/landing-navbar";

import Plans from "../components/Dashboard/Main/Plans";
import Footer from "../components/landing/footer/footer";

const LandingPlans = () => {
  return (
    <div className="plans-wrap">
      <div>
        <Navbar />
        <Plans style={{ display: "flex", justifyContent: "center" }} />
      </div>
      <Footer />
    </div>
  );
};

export default LandingPlans;
