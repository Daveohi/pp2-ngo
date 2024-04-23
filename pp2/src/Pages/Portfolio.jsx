import React from "react";
import TopNav from "../Component/TopNav/TopNav";
import Sidebar from "../Component/Sidebar";
import Missionbox1 from "../Component/Mission box/Missionbox1";
import Missionbox2 from "../Component/Mission box2/Missionbox2";
import Missionbox3 from "../Component/Mission box3/Missionbox3";
import Missionbox4 from "../Component/Mission box4/Missionbox4";
import Mediagallery from "../Component/Media Gallery/Mediagallery";
import Url from "../Component/URL/Url";
import Button4 from "../Component/Button4/Button4";

const Portfolio = () => {
  return (
    <div className="dashboard-ngo-1" style={{ height: "1212px" }}>
      <TopNav />
      <Sidebar  />
      <div className="overview">Welcome to your organisation’s portfolio</div>
      <Missionbox1 />
      <Missionbox2 />
      <Missionbox3 />
      <Missionbox4 />
      <Mediagallery />
      <Url />
      <Button4 />
    </div>
  );
};

export default Portfolio;
