import React from "react";
import "../Mission box/Missionbox1.css";

const Missionbox1 = () => {
  return (
    <div className="misson-box">
      <div className="organisations-mission-container">
        <span>Organisation’s Mission</span>
        <span className="span"> *</span>
      </div>
      <div className="text-box1">
        <textarea
          className="weite-your-organisations"
          typeof="text"
          placeholder="Write your organisation’s mission here"
        />
      </div>
    </div>
  );
};

export default Missionbox1;
