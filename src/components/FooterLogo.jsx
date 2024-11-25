import React from "react";
import coingecko from "../assets/coingecko.png";
import coinmarket from "../assets/coinmarket.png";
import dexscreener from "../assets/dexscreener.png";

const FooterLogo = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-logos">
        <img src={coingecko} alt="coingecko" />
        <img src={coinmarket} alt="coinmarket" />
        <img src={dexscreener} alt="dexscreener" />
      </div>
    </div>
  );
};

export default FooterLogo;
