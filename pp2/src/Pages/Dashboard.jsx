import React from "react";
import "../Styles/Dashboard.css";
import Sidebar from "../Component/Sidebar";
import TopNav from "../Component/TopNav/TopNav";
import RecentActivity from "../Component/Overview/RecentActivity";
import Button from "../Component/Button/Button";
import RevenueTrend from "../Component/RevenueTrend/RevenueTrend";
import FundRaised from "../Component/FundRaised/FundRaised";
import FundRaised1 from "../Component/FundRaised1/FundRaised1";
import FundsToday from "../Component/FundsToday/FundsToday";
import Table from "../Component/Table/Table";



const DashboardNGO = () => {
  return (
    <div className="dashboard-ngo-1">
      <TopNav />
      <Sidebar />
      <div className="overview">Overview</div>
      <RecentActivity />
      <Button />
      <RevenueTrend />
      <FundRaised />
      <FundRaised1 />
      <FundsToday />
      <Table />
    </div>
  );
};

export default DashboardNGO;
