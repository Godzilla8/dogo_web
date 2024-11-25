import React from "react";
import "../style.scss";
import image from "../assets/suit-dogo.png";
import { BiArrowFromLeft, BiCaretRight } from "react-icons/bi";

const WelcomePage = ({ handleLaunch }) => {
  return (
    <div className="Welcome-page">
      <div className="welcome-page-wrapper">
        <div className="top-bar">
          <span>The Rise of the Meme Revolution</span>
          <h1>DOGO HUNT</h1>
        </div>
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="info-bar">
          <div className="info-one">
            <h2>Dogo Season is upon us...</h2>
          </div>
          <p>
            Dogo is hunting the Memespace and will gradually come out top of them all. Trust the
            process
          </p>
        </div>
        <div className="get-started">
          <div className="circle-left">
            <BiArrowFromLeft />
          </div>
          <div className="info" onClick={handleLaunch}>
            Get Started
            <div className="arrows">
              <span>
                <BiCaretRight />
              </span>
              <span>
                <BiCaretRight />
              </span>
              <span>
                <BiCaretRight />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
