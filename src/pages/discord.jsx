import React from "react";
import Footer from "../components/landing/footer/footer";

import Navbar from "../components/landing/navbar/landing-navbar";

import Discord from "../Assets/images/discord2.svg";
import Link from "../Assets/images/link.svg";

function DiscordPage() {
  return (
    <>
      <div className="discord-wrap">
        <Navbar />
        <div className="discord-info">
          <img className="discord-img" src={Discord} alt="" />
          <h3>Join Our Community on Discord!</h3>
          <h5 className="discord-desc">
            Join our vibrant Discord community for programmers! Join now and
            engage, learn, collaborate, and stay updated. Happy coding!
          </h5>
          <button className="discord-btn">
            Join Discord Server <img src={Link} alt="" />
          </button>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default DiscordPage;
