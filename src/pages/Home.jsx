import React, { useState } from "react";
import photo from "../assets/leap-dogo.png";
import suitdogo from "../assets/suit-dogo.png";
import { BiLogoTelegram, BiLogoTwitter } from "react-icons/bi";
import { FaDog, FaRoad } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Home = () => {
  const [isClicked, setIsClicked] = useState(0);
  const handleHuntEvent = () => {
    if (isClicked > 1) return;
    toast.success("Hunt event starts Dec. 25th-31st");
    setIsClicked((prev) => prev + 1);
  };

  return (
    <div className="home">
      <div className="container">
        <div className="home-intro center-div">
          <h2>
            welcome to the <span>hunt</span>
          </h2>
          <p>
            <span className="special-text">DOGO</span> is the meme coin that's on a mission to hunt
            down the competition and reign supreme in the meme space. Built on the powerful and
            secure Ton Blockchain, <span className="special-text">$DOGO</span> is designed to lead
            the pack among meme coins. With a total supply of 1 billion, we have a clear vision and
            an unstoppable drive.
          </p>
          <div className="button-wrapper">
            <button onClick={handleHuntEvent}>
              <FaDog /> hunt event
            </button>
            <Link to="/timeline">
              <button>
                <FaRoad /> roadmap
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-photo center-div">
          <img src={photo} alt="" />
        </div>
        <div className="home-intro center-div">
          <h2>
            our <span>goal</span>
          </h2>
          <p>
            DOGO is more than just another meme coin—{" "}
            <span className="special-text">
              it's about community, ambition, and a relentless chase for dominance.
            </span>{" "}
            We’re here to disrupt the meme coin landscape and eventually stand out as the top
            contender. Trust the process, and you’ll be part of something extraordinary.
          </p>
        </div>
        <div className="hero-photo center-div">
          <img src={suitdogo} alt="" />
        </div>
        <div className="home-intro center-div">
          <h2>
            join the <span>dogo</span> community
          </h2>
          <p>
            Be part of a growing community that’s passionate, driven, and ready to take DOGO to the
            next level. Whether you’re a meme enthusiast, a crypto investor, or someone curious
            about the latest trends in the blockchain world, DOGO is the coin to watch.
          </p>
          <div className="button-wrapper">
            <Link to="https://t.me/dogo">
              <button>
                <BiLogoTelegram /> Telegram
              </button>
            </Link>
            <Link to="https://x.com">
              <button>
                <BiLogoTwitter /> Twitter
              </button>
            </Link>
          </div>
        </div>
        <div className="hero-intro center-div">
          What <span>instincts</span> and <span>skills</span> make the difference between a
          successful hunt and an empty trail, even for the most experienced hunter?
        </div>
      </div>
    </div>
  );
};

export default Home;
