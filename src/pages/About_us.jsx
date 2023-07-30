import React from "react";
import Navbar from "../components/landing/navbar/landing-navbar";
import Footer from "../components/landing/footer/footer";

import slide1 from "../Assets/images/slide1.png";
import aida from "../Assets/images/aida.jpg";
import mahdi from "../Assets/images/mahdi.jpg";
import ali from "../Assets/images/ali.jpg";
import amir from "../Assets/images/amir.jpg";
import zeinab from "../Assets/images/zeinab.jpg";
import shadi from "../Assets/images/shadi.jpg";
import kaveh from "../Assets/images/kaveh.jpg";

function AboutUs() {
  return (
    <>
      <div className="about-wrap">
        <Navbar />
        <div className="about-header">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <svg
              width="300"
              height="200"
              viewBox="0 0 362 362"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M87 248.996C94.3515 248.887 109.024 246.408 117 240C117.506 239.593 117.989 239.2 118.451 238.82C124.886 231.802 132.517 223.046 139.348 214.342C135.524 217.368 129.012 222.618 119.5 230.5C102 245 80 243.5 64.5 235C52.1 228.2 46.3333 210.5 45 202.5V197H130.525C124.947 196.563 119.13 196.027 113.707 195.482L98.0012 194.5H88.4353L76.8295 167.972L79.2894 161.686L71.6859 158.711L68.7106 166.314L74.9972 168.774L86.2522 194.5H70.4353L57.1412 164.114L70.8192 144.573L71.1161 144.149L70.9412 143.662L65.554 128.655L68.434 122.549L61.0493 119.066L57.566 126.451L63.6716 129.331L68.8839 143.851L55.1808 163.427L54.8588 163.886L55.0838 164.401L68.2522 194.5L37 194.5C37 208.954 42.4259 222.817 52.084 233.037C61.388 242.883 73.8854 248.573 87 248.977V248.996ZM92.4119 170.713C92.3941 170.489 92.3797 170.276 92.3687 170.077L92.3611 170.2C92.1222 167.704 92 165.174 92 162.616C92 119.198 127.198 84 170.616 84C211.215 84 244.626 114.774 248.794 154.268C250.005 154.13 251.236 154.059 252.484 154.059C270.286 154.059 284.718 168.491 284.718 186.293C284.718 191.765 283.355 196.918 280.949 201.432C282.174 201.235 283.431 201.134 284.711 201.134C297.857 201.134 308.515 211.879 308.515 225.134C308.515 238.388 297.857 249.134 284.711 249.134C283.858 249.134 283.015 249.088 282.185 249H111.496C112.072 248.844 112.684 248.677 113.333 248.5C118.028 247.22 132.711 246.067 143.515 245.402C177.842 245.553 248.05 245.242 289 245C294.833 242.833 306 235.5 304 223.5C301.5 208.5 283 205.5 275.5 208.5C269.971 210.711 267.131 212.81 266.198 213.778C270.588 208.802 278.894 196.85 278.5 187C278 174.5 271 163.5 259 160.5C249.4 158.1 243.333 161.5 241.5 163.5C243.833 154.167 241.8 129.6 215 106C181.5 76.4999 137.5 96.4999 130.5 103C129.937 103.523 129.28 104.117 128.547 104.78L128.546 104.781C120.166 112.359 101.839 128.931 100 151C99.3737 158.515 99.1887 164.364 99.5831 169.006L99.5 169C99.8333 174.333 101.6 186 106 190C108.386 192.169 110.586 193.358 112.313 193.965C110.531 193.693 108.407 193.181 106.234 192.363L106.631 192.411C105.461 192.092 102.108 190.464 98.0615 186.511C94.9964 183.517 93.4298 177.828 92.7583 173.579C92.6258 172.629 92.5102 171.674 92.4119 170.713Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="about-about">
            <h3>About Mocha Cloud</h3>
            <div className="about-about-info">
              <div>
                Mocha Cloud is a cutting-edge programming environment in the
                cloud, empowering developers with advanced features and tools
                for enhanced productivity and collaboration.
              </div>
            </div>
          </div>
        </div>
        <div className="about-mission">
          <h3>Our Mission</h3>
          <div>
            At Mocha Cloud, our mission is to revolutionize the way programmers
            work by providing a seamless and intuitive cloud-based environment.
            We aim to empower developers of all levels to focus on their code,
            collaborate effortlessly, and bring their ideas to life.
          </div>
        </div>
        <div className="about-team">
          <h3 className="about-team-header">Our Team</h3>
          <div>
            <img src={kaveh} alt="" className="about-team-img" />
            <h5 className="about-team-role">Product Manager</h5>
            <h4>Kaveh Moradian</h4>
          </div>
          <div className="about-team-wrap">
            <div>
              <img src={aida} alt="" className="about-team-img" />
              <h5 className="about-team-role">Designer</h5>
              <h4>Aida Dehghan</h4>
            </div>
            <div>
              <img src={shadi} alt="" className="about-team-img" />
              <h5 className="about-team-role">Designer</h5>
              <h4>Shadi Baramaki</h4>
            </div>
          </div>
          <div className="about-team-wrap">
            <div>
              <img src={ali} alt="" className="about-team-img" />
              <h5 className="about-team-role">Front-end Developer</h5>
              <h4>Ali Naseh Ahadi</h4>
            </div>
            <div>
              <img src={amir} alt="" className="about-team-img" />
              <h5 className="about-team-role">Front-end Developer</h5>
              <h4>Amir Mehrzad</h4>
            </div>
          </div>
          <div className="about-team-wrap">
            <div>
              <img src={zeinab} alt="" className="about-team-img" />
              <h5 className="about-team-role">Back-end Developer</h5>
              <h4>Zeinab Dehghani</h4>
            </div>
            <div>
              <img src={mahdi} alt="" className="about-team-img" />
              <h5 className="about-team-role">Back-end Developer</h5>
              <h4>Mahdi Bani</h4>
            </div>
          </div>
          <div style={{ marginTop: "30px" }}>
            <img src={slide1} alt="" className="about-team-img" />
            <h5 className="about-team-role">Devops</h5>
            <h4>Mohammad Amin Fahimi</h4>
          </div>
          <div className="about-contact">
            <h2>Contact Us</h2>
            <div
              style={{
                marginTop: "20px",
                marginBottom: "15px",
                lineHeight: "180%",
              }}
            >
              <h3>We would love to hear from you!</h3>
              <h3>For any inquiries or feedback, please reach out to us at:</h3>
            </div>
            <p>Info@Mochacloud.ir</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AboutUs;
