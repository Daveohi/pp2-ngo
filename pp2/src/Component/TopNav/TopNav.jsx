import React from "react";
import "./TopNav.css";
import { BsFillBellFill, BsPersonCircle, BsSearch } from "react-icons/bs";

const TopNav = () => {
  return (
    <div className="top-navigation">
      <div className="ellipse-parent">
        <div className="frame-c" />
        <div className="frame-c" />
        <div className="frame-c" />
      </div>
      <div className="top-navigation-inner">
        <div className="ictwotone-search-parent">
          <BsSearch
            className="ictwotone-search-icon"
          />
          <input className="search-here" placeholder="Search here" />
        </div>
      </div>
      <div className="frame-p">
        <div className="child-health-ngo-parent">
          <b className="child-health-ngo">Child Health NGO</b>
          <div className="admin">Admin</div>
        </div>
        <BsPersonCircle className="frame-i" />
      </div>
      <BsFillBellFill className="top-navigation-child"  />
      <div className="dashboard">Dashboard</div>
    </div>
  );
};

export default TopNav;
