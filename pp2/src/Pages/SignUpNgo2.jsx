import { memo } from "react";
import "../Styles/SignUpNgo.css";
import "../Styles/SignUpNgo2.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
// import Country from "../Component/CountrySelector";
import "../Styles/SignUpNgo.css"
import Holdhands from "../assets/Images/Holding Hands.png";
// import CountrySelector from "../Component/CountrySelector";

const SignUpNgo = memo(() => {
  const navigate = useNavigate();

  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle input change for organisation name
  const handleCountry = (e) => {
    setCountry(e.target.value);
  };
  // Function to handle input change for email
  const handleState = (e) => {
    setState(e.target.value);
  };
  // Function to handle input change for phone number
  const handlePassword = (e) => {
    setPassword(e.target.value);
    
  };
  // Function to handle input change for CAC number
  const handleConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
    
  };

  // Function to handle clicking the next button
  const handleSignUpClick = () => {
    if (!password || !confirmPassword) {
      alert("Please enter both password and confirm password");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    if (country && state && password && confirmPassword) {
      navigate("/dashborad");
      alert("Sign up successfull");
    } else {
      // Display error message or prevent navigation
      alert("Please fill in all fields");
    }
  };

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
                      
                      <input
                        type="text"
                        className="type-your-name"
                        placeholder="Nigeria"
                        value={country}
                        onChange={handleCountry}
                      />
                     
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
                      
                      <input
                        type="text"
                        className="type-your-name"
                        placeholder="Lagos"
                        value={state}
                        onChange={handleState}
                      />
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
                      
                      <input
                        type="password"
                        className="type-your-name"
                        placeholder="Password"
                        value={password}
                        onChange={handlePassword}
                      />
                      <img className="dropdown-icon" alt="" src="/see.svg" />
                    </div>
                  </div>
                  <div className="inputs-1">
                    <label className="country">Confirm Password</label>
                    <div className="input-fill">
                     
                      <input
                        type="password"
                        className="type-your-name"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        onChange={handleConfirmPassword}
                      />
                      <img className="see-icon1" alt="" src="/see@2x.png" />
                    </div>
                  </div>
                </div>
                <div className="by-signing-up-container">
                  <span className="by-signing-up">{`By signing up, you agree to our `}</span>
                  <span className="fund">terms and privacy policy</span>
                </div>
              </div>
              <button className="button13" onClick={handleSignUpClick}>
                {/* <img className="home-icon7" alt="" src="/home.svg" /> */}
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
              {/* <div className="rectangle-div" /> */}
              {/* <div className="frame-child8" /> */}
            </div>
            <div className="step-2-of">Step 2 of 2</div>
          </div>
        </div>
      </div>
    </form>
  );
});

export default SignUpNgo;
