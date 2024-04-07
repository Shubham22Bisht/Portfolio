import React from "react";
import data2 from "../assets/data2.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data2.projects.map((item, index) => (
          <TimelineItem
            heading={item.title}
            text={item.date}
            visit={item.url}
            index={index}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

const TimelineItem = ({ heading, text,visit, index }) => (
  <div
    className={`timelineItem ${
      index % 2 === 0 ? "leftTimeline" : "rightTimeline"
    }`}
  >
    <div>
      <h2>{heading}</h2>
      <a style= {{color:"aqua"}} href={visit}>Explore</a>
    </div>
  </div>
);

export default Timeline;