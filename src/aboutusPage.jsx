import React from "react";
import HERO1 from "../Images/poster.png";
import "./aboutusPage.css";

const aboutusPage = () => {
  return (
    <div className="about">
      <div className="marquee"></div>
      <div className="headimg">
        <div className="heading">
          <h1>
            <span className="yellow">WHAT IS&nbsp;</span>
            <span className="white">BELFORT OF WALLSTREET</span>
            <span className="yellow">&nbsp;?</span>
          </h1>
        </div>
        <div className="poster">
          <img src={HERO1} className="poster" alt="image" />
        </div>
      </div>
      <div className="contentdate">
        <div className="content2">
          <p>
            <span className="yellow">Belfort of Wall Street</span> by IEDC CCE,
            is where innovation meets entrepreneurship in a thrilling
            competition aimed at transforming ideas into impactful ventures.
            Through three dynamic rounds –{" "}
            <span className="yellow">Ideation, Prototyping</span> and Business
            Pitching, and Marketing participants showcase their creativity,
            business acumen, and marketing prowess.
          </p>
        </div>

        <div className="datetime">
          <div>
            <ul className="dateh">
              <li>30</li>
              <li>12k</li>
              <li>28,29</li>
            </ul>
            <ul className="sen">
              <li>Hours</li>
              <li>Prize Pool</li>
              <li>February</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutusPage;
