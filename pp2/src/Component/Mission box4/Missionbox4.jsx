import React from "react";
import "../Mission box4/Missionbox4.css";

const Missionbox4 = () => {
  return (
    <div className="misson-box4">
      <div className="active-projects">
        <span>{`Organisation’s vision `}</span>
        <span className="span1">*</span>
      </div>
      <div className="text-box1">
        <textarea
          className="weite-your-organisations"
          typeof="text"
          placeholder="write your organization’s vision here"
        />
      </div>
    </div>
  );
};

export default Missionbox4;
