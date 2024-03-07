import "./homepage.css";
import React from "react";
import HERO from "../Images/homeimg.png";
import Marquee from "react-fast-marquee";

const HomePage = () => {
  return (
    <div className="home">
      <div className="marquee-container">
        <div className="marquee">
          <span>
            |&nbsp;&nbsp; Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|&nbsp;&nbsp; Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;|&nbsp;&nbsp; Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|&nbsp;&nbsp; Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;|&nbsp;&nbsp; Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| |
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;||
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street
            &nbsp;&nbsp;| &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;|
            &nbsp;&nbsp;Belfort of Wall Street &nbsp;&nbsp;| &nbsp;&nbsp;Belfort
            of Wall Street &nbsp;&nbsp;|
          </span>
        </div>
      </div>
      <div className="content">
        <div className="text">
          <h3>SEASON 2</h3>
          <h1 className="bell">BELFORT OF WALL STREET</h1>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4KnimxwasGgDVW_EZJgrl8G2m3_yxPj9Tii0_FHMfs86yPQ/viewform"
            target="_blank"
          >
            <button>Register Now</button>
          </a>
        </div>
        <div className="date">
          <h3 className="month">FEB 28,29</h3>
        </div>
      </div>
      <div className="image">
        <img src={HERO} className="image" alt="image" />
      </div>
    </div>
  );
};

export default HomePage;
