import React from "react";

const RoadmapItem = ({ item }) => {
  return (
    <div className={`timeline-container ${item?.mainClass}`}>
      <div className="timeline-icon">
        <i className={item.iconClass}></i>
      </div>
      <div className="timeline-body">
        <h4 className="timeline-title">
          <span className="badge">{item.title}</span>
        </h4>
        <p>{item.text}</p>
        <p className="timeline-subtitle">{item.period}</p>
      </div>
    </div>
  );
};

export default RoadmapItem;
