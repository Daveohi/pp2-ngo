import React from "react";
import TopNav from "../Component/TopNav/TopNav";
import Sidebar from "../Component/Sidebar";
import Donations from "../Component/Donations/Donations";

const Donation = () => {
  return (
    <div className="dashboard-ngo-1" style={{ height: "1212px" }}>
      <TopNav />
          <Sidebar />
          <Donations />
    </div>
  );
};

export default Donation;
