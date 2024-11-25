import React from "react";
import "./roadmap.scss";
import RoadmapItem from "./RoadmapItem";
import roadMapInfo from "../utils/roadMapData";

const Roadmap = () => {
  return (
    <div className="container">
      <div className="timeline">
        {roadMapInfo.map((item, index) => (
          <RoadmapItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
