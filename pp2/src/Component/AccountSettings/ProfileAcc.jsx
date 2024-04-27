import React from 'react';
import "../AccountSettings/ProfileAcc.css";
import Stamp from '../AccountSettings/Stamp.png';

const ProfileAcc = () => {
  return (
    <div className="profile">
      <div className="tab-menu">
        <div className="profile-parent">
          <div className="payment-cards">Profile</div>
          <div className="rectangle-div" />
        </div>
        <div className="payment-cards-parent">
          <div className="payment-cards">Payment cards</div>
          <div className="frame-child27" />
        </div>
        <div className="payment-cards-parent">
          <div className="payment-cards">Documents</div>
          <div className="frame-child27" />
        </div>
      </div>
      <img className="image-stamp" alt="" src={Stamp} />
      <div className="input-frames">
        <div className="frame-parent21">
          <div className="organisations-name-parent">
            <div className="payment-cards">Organisation’s name</div>
            <div className="input-fill">
              <img className="profle-2-icon" alt="" src="/profle-2.svg" />

              <input
                className="type-your-name"
                placeholder="Child Health NGO"
              />
              <img className="see-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
          <div className="organisations-name-parent">
            <div className="payment-cards">Email Address</div>
            <div className="input-fill">
              <img className="profle-2-icon" alt="" src="/email.svg" />

              <input
                className="type-your-name"
                placeholder="childhealth@gmail.com"
              />
              <img className="see-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="organisations-name-parent">
            <div className="payment-cards">Phone Number</div>
            <div className="input-fill">
              <img className="profle-2-icon" alt="" src="/call.svg" />

              <input
                className="type-your-name"
                placeholder="Olatunde Onyinye"
              />
              <img className="see-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
          <div className="organisations-name-parent">
            <div className="payment-cards">CAC Number</div>
            <div className="input-fill">
              <img className="see-icon" alt="" src="/email.svg" />

              <input className="type-your-name" placeholder="IT234567" />
              <img className="see-icon" alt="" src="/see.svg" />
            </div>
          </div>
        </div>
        <div className="frame-parent21">
          <div className="organisations-name-parent">
            <div className="payment-cards">Area of Interest</div>
            <div className="input-fill">
              <img className="see-icon" alt="" src="/email.svg" />
              <input className="type-your-name" placeholder="Health" />
              <img className="profle-2-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
          <div className="organisations-name-parent">
            <div className="payment-cards">Country</div>
            <div className="input-fill">
              <img className="see-icon" alt="" src="/profle-2.svg" />
              <input className="type-your-name" placeholder="Nigeria" />
              <img className="profle-2-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
        </div>
        <div className="input-frames-inner">
          <div className="organisations-name-parent">
            <div className="payment-cards">City</div>
            <div className="input-fill">
              <img className="see-icon" alt="" src="/profle-2.svg" />
              <input className="type-your-name" placeholder="Lagos" />
              <img className="profle-2-icon" alt="" src="/dropdown1.svg" />
            </div>
          </div>
        </div>
      </div>

      <div className="button-8">
        <img className="home-icon3" alt="" src="/home2.svg" />
        <div className="button30">save Changes</div>
        <img className="home-icon3" alt="" src="/right-arrow1.svg" />
      </div>
    </div>
  );
}

export default ProfileAcc;
