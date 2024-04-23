import React from "react";
import "../Mission box2/Missionbox2.css";

const Missionbox2 = () => {
  return (
    <div className="misson-box1">
      <div className="active-projects">
        <span>{`Overview `}</span>
        <span className="span1">*</span>
      </div>
      <div className="text-box1">
        <textarea
          className="weite-your-organisations"
          typeof="text"
          placeholder="write your organization’s mission here"
        />
      </div>
    </div>
  );
};

export default Missionbox2;
