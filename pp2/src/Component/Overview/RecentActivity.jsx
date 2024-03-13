import React from 'react';
import "./RecentActivity.css";

const RecentActivity = () => {
    return (
    <div className="recent-activity">
      <div className="recent-activity1">Recent Activity</div>
      <div className="divv">
        <div className="childd" />
        <div className="profile-views-in">
          24 profile views in the last two days
        </div>
      </div>
      <div className="div-1">
        <div className="childd" />
        <div className="profile-views-in">New campaign created</div>
      </div>
      <div className="div-2">
        <div className="childd" />
        <div className="profile-views-in">
          you secured three donations today.
        </div>
      </div>
    </div>
  );
}

export default RecentActivity