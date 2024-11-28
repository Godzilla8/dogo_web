import React from "react";
import { FaGlassWaterDroplet, FaPeopleGroup, FaShop, FaTeamspeak } from "react-icons/fa6";
import { GiAirBalloon, GiShakingHands } from "react-icons/gi";

const PIECHART_DESC = [
  {
    icon: <GiAirBalloon />,
    title: "Aidrop",
    desc: "Half of the total supply is reserved for community airdrops, rewarding early supporters and building a strong and engaged DOGO community.",
    percent: 50,
  },
  {
    icon: <FaGlassWaterDroplet />,
    title: "Liquidity",
    desc: "300M $DOGO is allocated to liquidity, ensuring smooth trading, stability, and support for DOGO’s growth across decentralized exchanges.",
    percent: 30,
  },
  {
    icon: <GiShakingHands />,
    title: "Marketing",
    desc: "150M $DOGO of the supply fuels marketing campaigns and strategic partnerships, driving visibility and expanding DOGO’s influence in the crypto space.",
    percent: 15,
  },
  {
    icon: <FaPeopleGroup />,
    title: "Team",
    desc: "50M $DOGO is set aside for the core team, aligning incentives with long-term success and maintaining a committed, focused development effort.",
    percent: 5,
  },
];

const specialText = {
  fontWeight: "900",
  color: "#000",
};

const PieChartDesc = () => {
  return (
    <div className="piechart-desc">
      {PIECHART_DESC.map((card) => {
        const [a, b, ...otherText] = card.desc.split(" ");
        return (
          <div key={card.title} className="pie-card">
            <div className="icon">{card.icon}</div>
            <h1>{card.title}</h1>
            <div className="desc">
              <span style={specialText}>
                {a} {b}
              </span>{" "}
              {otherText.join(" ")}
            </div>
            <div className="percentage">{card.percent}%</div>
            <div className="percent-bar">
              <div className="bar" style={{ width: `${card.percent}%` }}></div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PieChartDesc;
