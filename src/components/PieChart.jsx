import React from "react";
import { FaCoins } from "react-icons/fa6";

const PieChart = () => {
  return (
    <div className="piechart-wrapper">
      <div className="piechart">
        <div></div>
      </div>
      <div className="indicators">
        <div className="col">
          <span style={{ backgroundColor: "#cb6040" }}></span>Airdrop
        </div>
        <div className="col">
          <span style={{ backgroundColor: "#257180" }}></span>Liquidity
        </div>
        <div className="col">
          <span style={{ backgroundColor: "#f2e5b5" }}></span>Marketing/Partnership
        </div>
        <div className="col">
          <span style={{ backgroundColor: "#fd8b51" }}></span>Team
        </div>
      </div>
      <div className="coin-supply">
        <FaCoins />
        Total Supply - 1 Billion $DOGO
      </div>
    </div>
  );
};

export default PieChart;
