import React, { useState } from "react";
import photo from "../assets/suit-dogo.png";
import PieChart from "../components/PieChart";
import PieChartDesc from "../components/PieChartDesc";

const Governance = () => {
  const [view, setView] = useState("a");

  const toggleNav = (state) => {
    view !== state && setView(state);
  };

  return (
    <div className="governance">
      <div className="g-image">
        <img src={photo} alt="" />
      </div>
      <div className="tokenomics-header">
        <span className={view === "a" ? "active" : ""} onClick={() => toggleNav("a")}>
          Allocation
        </span>
        <span className={view === "b" ? "active" : ""} onClick={() => toggleNav("b")}>
          Description
        </span>
      </div>
      <div className="tokenomics-view">
        {view === "a" && <PieChart />}
        {view === "b" && <PieChartDesc />}
      </div>
    </div>
  );
};

export default Governance;
