import React from 'react';
import "./Button.css";

const Button = () => {
  return (
    <div className="button-btn">
      <img className="home-i" alt="" src="/home.svg" />
      <div className="profile-views-in">Last 30 days</div>
      <img className="dropdown-icon" alt="" src="/dropdown.svg" />
    </div>
  );
}

export default Button