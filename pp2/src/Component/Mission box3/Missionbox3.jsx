import React from "react";
import "../Mission box3/Missionbox3.css";

const Missionbox3 = () => {
  return (
    <div className="misson-box2">
      <div className="active-projects">Active Projects</div>
      <div className="text-box1">
        <textarea
          className="weite-your-organisations"
          typeof="text"
          placeholder="Include any active projects here"
        />
      </div>
    </div>
  );
};

export default Missionbox3;
