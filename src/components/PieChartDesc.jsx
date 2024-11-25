import React from "react";
import { FaGlassWaterDroplet, FaPeopleGroup, FaShop, FaTeamspeak } from "react-icons/fa6";
import { GiAirBalloon, GiShakingHands } from "react-icons/gi";

const PIECHART_DESC = [
  {
    icon: <GiAirBalloon />,
    title: "Aidrop",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid modi ratione maxime laborum eius quibusdam minus.",
    percent: 50,
  },
  {
    icon: <FaGlassWaterDroplet />,
    title: "Liquidity",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid modi ratione maxime laborum eius quibusdam minus.",
    percent: 30,
  },
  {
    icon: <GiShakingHands />,
    title: "Marketing",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid modi ratione maxime laborum eius quibusdam minus.",
    percent: 15,
  },
  {
    icon: <FaPeopleGroup />,
    title: "Team",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aliquid modi ratione maxime laborum eius quibusdam minus.",
    percent: 5,
  },
];

const PieChartDesc = () => {
  return (
    <div className="piechart-desc">
      {PIECHART_DESC.map((card) => (
        <div key={card.title} className="pie-card">
          <div className="icon">{card.icon}</div>
          <h1>{card.title}</h1>
          <div className="desc">{card.desc}</div>
          <div className="percentage">{card.percent}%</div>
          <div className="percent-bar">
            <div className="bar" style={{ width: `${card.percent}%` }}></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PieChartDesc;
