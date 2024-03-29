import React from "react";
import "./Sidebar.css";
import {
  BsBoxArrowRight,
  BsCoin,
  BsColumns,
  BsColumnsGap,
  BsFileText,
  BsGear,
  BsMegaphone,
  BsShieldLock,
} from "react-icons/bs";
import VECTOR from "../assets/Images/Vector 15.png";
import HELP from "../assets/Images/mdi_help-outline.png";

const Sidebar = () => {
  return (
    <div className="sidemenu">
      <img className="sidemenu-child" alt="" src={VECTOR} />
      <div className="fund-ngo-wrapper">
        <i className="fund-ngo">
          <span>Fund</span>
          <span className="ngoo">NGO</span>
        </i>
      </div>
      <div className="sidemenu-item" />
      <div className="sidemenu-inner">
        <div className="frame-g">
          <div className="fluentboard-20-filled-parent">
            <BsColumns className="fluentboard-20-filled-icon" />
            <div className="switch-board">Switch Board</div>
          </div>
          <div className="material-symbolslogout-parent">
            <BsBoxArrowRight className="fluentboard-20-filled-icon" />
            <div className="log-out">Log Out</div>
          </div>
        </div>
      </div>
      <div className="manage-frame">
        <div className="mange-container">
          <div className="manage">MANAGE</div>
          <div className="manage-frame1">
            <div className="dashboard1">
              <div className="icround-dashboard-parent">
                <BsColumnsGap className="fluentboard-20-filled-icon" />
                <div className="dashboard2">Dashboard</div>
              </div>
            </div>
            <div className="campaigns">
              <BsMegaphone className="fluentboard-20-filled-icon" />
              <div className="portfolio">Portfolio</div>
            </div>
            <div className="campaigns">
              <BsCoin className="fluentboard-20-filled-icon" />
              <div className="donations">Donations</div>
            </div>
            <div className="campaigns">
              <BsFileText className="fluentboard-20-filled-icon" />
              <div className="reports">Reports</div>
            </div>
          </div>
        </div>
      </div>
      <div className="account-management">
        <div className="account-container">
          <div className="account-here">ACCOUNT MANAGEMENT</div>
          <div className="framecontainer">
            <div className="campaigns">
              <BsGear className="fluentboard-20-filled-icon" />
              <div className="donations">Account settings</div>
            </div>
            <div className="campaigns">
              <BsShieldLock className="fluentboard-20-filled-icon" />
              <div className="donations">Security</div>
            </div>
            <div className="campaigns">
              <img className="fluentboard-20-filled-icon" alt="" src={HELP} />
              <div className="help-support">{`Help & Support`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
