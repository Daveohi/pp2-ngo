import { memo } from "react";
import "../Styles/SignUpNgo2.css";
// import "../Styles/SignUpNgo.css"
import Holdhands from "../assets/Images/Holding Hands.png";

const SignUpNgo = memo(() => {
  return (
    <form
      className="sign-up-ngo-desktop-2"
      id="form-ngo"
      name="Orgnisation Name"
      encType="multipart/form-data"
    >
      <img className="image-icon" alt="" src={Holdhands} />
      <div className="sign-up-container">
        <div className="container1">
          <div className="create-account">
            <i className="fundngo2">
              <span className="fund">Fund</span>
              <span className="log">NGO</span>
            </i>
            <div className="create-your-account">Create your account</div>
          </div>
          <div className="sign-up-info-container">
            <div className="sign-info-frame">
              <div className="input-container-parent">
                <div className="input-container">
                  <div className="inputs-1">
                    <label className="country">Country</label>
                    <div className="input-fill">
                      <img
                        className="profle-2-icon"
                        alt=""
                        src="/profle-2.svg"
                      />
                      <input type="text" className="type-your-name" placeholder="Nigeria"/>
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown.svg"
                      />
                    </div>
                  </div>
                  <div className="inputs-1">
                    <label className="country">State</label>
                    <div className="input-fill">
                      <img
                        className="profle-2-icon"
                        alt=""
                        src="/profle-2.svg"
                      />
                      <input className="type-your-name" placeholder="Lagos" />
                      <img
                        className="dropdown-icon"
                        alt=""
                        src="/dropdown.svg"
                      />
                    </div>
                  </div>
                  <div className="inputs-1">
                    <label className="country">Password</label>
                    <div className="input-fill">
                      <img className="profle-2-icon" alt="" src="/email.svg" />
                    <input type="password" className="type-your-name" placeholder="Password" />
                      <img className="dropdown-icon" alt="" src="/see.svg" />
                    </div>
                  </div>
                  <div className="inputs-1">
                    <label className="country">Confirm Password</label>
                    <div className="input-fill">
                      <img className="profle-2-icon" alt="" src="/email.svg" />
                    <input type="password" className="type-your-name" placeholder="Confirm Password" />
                      <img className="see-icon1" alt="" src="/see@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="by-signing-up-container">
                  <span className="by-signing-up">{`By signing up, you agree to our `}</span>
                  <span className="fund">terms and privacy policy</span>
                </div>
              </div>
              <button className="button13">
                <img className="home-icon7" alt="" src="/home.svg" />
                <div className="button3">Sign up</div>
                <img className="home-icon7" alt="" src="/right-arrow.svg" />
              </button>
            </div>
            <div className="already-have-an-container">
              <span className="already-have-an-account-log">
                <span className="already-have-an">
                  Already have an account?
                </span>
                <span className="log"> Log</span>
              </span>
              <span className="log">
                <span className="in1"> in</span>
              </span>
            </div>
          </div>
          <div className="slider">
            <div className="rectangle-parent">
              <div className="rectangle-div" />
              <div className="frame-child8" />
            </div>
            <div className="step-2-of">Step 2 of 2</div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default SignUpNgo;