import React from "react";
import TopNav from "../Component/TopNav/TopNav";
import Sidebar from "../Component/Sidebar";
import ProfileAcc from "../Component/AccountSettings/ProfileAcc";

const AccountPage = () => {
  return (
    <div className="dashboard-ngo-1">
      <TopNav />
      <Sidebar />
      <ProfileAcc />
    </div>
  );
};

export default AccountPage;
