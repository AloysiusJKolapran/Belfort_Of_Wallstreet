import React from "react";
import "./thrirdpage.css";
import HERO from "../Images/homeimg.png";

const thirdpage = () => {
  return (
    <>
      <div>
        <h1>Hello, World!</h1>
      </div>
      <div className="image">
        <img src={HERO} className="image" alt="image" />
      </div>
    </>
  );
};
export default thirdpage;
