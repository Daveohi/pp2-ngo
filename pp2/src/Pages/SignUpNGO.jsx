import react, { useState } from "react";
// import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/SignUpNgo.css";
import Holdhands from "../assets/Images/Holding Hands.png";

const SignUpNgoPage = () => {
  const navigate = useNavigate();

  const [organisationName, setOrganisationName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [cacNumber, setCacNumber] = useState("");
  const [areaOfInterest, setAreaOfInterest] = useState("");

  // Function to handle input change for organisation name
  const handleOrganisationNameChange = (e) => {
    setOrganisationName(e.target.value);
  };
  // Function to handle input change for email
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  // Function to handle input change for phone number
  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };
  // Function to handle input change for CAC number
  const handleCacNumberChange = (e) => {
    setCacNumber(e.target.value);
  };
  // Function to handle input change for area of interest
  const handleAreaOfInterestChange = (e) => {
    setAreaOfInterest(e.target.value);
  };

  // Function to handle clicking the next button
  const handleNextButtonClick = () => {
    if (
      organisationName &&
      email &&
      phoneNumber &&
      cacNumber &&
      areaOfInterest
    ) {
      navigate("/signupngo2");
    } else {
      // Display error message or prevent navigation
      alert("Please fill in all fields and agree to terms.");
    }
  };

  //   const onSignUpNGODesktop1Click = useCallback(() => {
  //     navigate("/sign-up-ngo-desktop-2");
  //   }, [navigate]);

  return (
    <div className="sign-up-ngo-desktop-1">
      <img className="image-icon1" alt="" src={Holdhands} />
      <div className="sign-up-container1">
        <div className="container2">
          <div className="create-account1">
            <i className="fundngo3">
              <span>Fund</span>
              <span className="ngo3">NGO</span>
            </i>
            <div className="create-your-account1">Create your account</div>
          </div>
          <div className="sign-up-info-container1">
            <div className="sign-info-frame1">
              <div className="input-container-group">
                <div className="input-container1">
                  <div className="inputs-11">
                    <label type="text" className="organisation-name">
                      Organisation Name
                    </label>
                    <div className="input-fill4">
                      <img className="call-icon" alt="" src="/profle-2.svg" />
                      <input
                        type="name"
                        className="type-your-name4"
                        placeholder="Becky Deborah"
                        value={organisationName}
                        onChange={handleOrganisationNameChange}
                      />
                      <img
                        className="dropdown-icon2"
                        alt=""
                        src="/dropdown.svg"
                      />
                    </div>
                  </div>
                  <div className="inputs-11">
                    <label className="email-address">Email Address</label>
                    <div className="input-fill4">
                      <img className="call-icon" alt="" src="/email.svg" />
                      <input
                        type="Email"
                        className="type-your-name4"
                        placeholder="Olatunde@gmail.com"
                        value={email}
                        onChange={handleEmailChange}
                      />
                      <img
                        className="dropdown-icon2"
                        alt=""
                        src="/dropdown.svg"
                      />
                    </div>
                  </div>
                  <div className="inputs-11">
                    <label className="organisation-name">Phone Number</label>
                    <div className="input-fill4">
                      <img className="call-icon" alt="" src="/call.svg" />
                      <input
                        type="number"
                        className="type-your-name4"
                        placeholder="07012345678"
                        value={phoneNumber}
                        onChange={handlePhoneNumberChange}
                      />
                      <img
                        className="dropdown-icon2"
                        alt=""
                        src="/dropdown.svg"
                      />
                    </div>
                  </div>
                  <div className="inputs-11">
                    <label className="organisation-name">CAC Number </label>
                    <div className="input-fill4">
                      <img className="dropdown-icon2" alt="" src="/email.svg" />
                      <input
                        type="number"
                        className="type-your-name4"
                        placeholder="IT234567"
                        value={cacNumber}
                        onChange={handleCacNumberChange}
                      />
                      <img className="dropdown-icon2" alt="" src="/see.svg" />
                    </div>
                  </div>
                  <div className="inputs-11">
                    <label className="organisation-name">
                      Area of interest
                    </label>
                    <div className="input-fill4">
                      <img className="dropdown-icon2" alt="" src="/email.svg" />
                      <input
                        type="text"
                        className="type-your-name4"
                        placeholder="Health"
                        value={areaOfInterest}
                        onChange={handleAreaOfInterestChange}
                      />
                      <img className="call-icon" alt="" src="/dropdown.svg" />
                    </div>
                  </div>
                </div>
                <div className="by-signing-up-container1">
                  <span>{`By signing up, you agree to our `}</span>
                  <span className="terms-and-privacy1">
                    terms and privacy policy
                  </span>
                </div>
              </div>
              <button className="button15" onClick={handleNextButtonClick}>Next
              </button>
            </div>
            <div className="already-have-an-container1">
              <span className="already-have-an-account-log1">
                <span>Already have an account?</span>
                <span className="ngo3"> Log</span>
              </span>
              <span className="ngo3">
                <span className="in3"> in</span>
              </span>
            </div>
          </div>
          <div className="slider1">
            <div className="rectangle-container">
              <div className="frame-child11" />
              <div className="frame-child12" />
            </div>
            <div className="step-1-of">Step 1 of 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpNgoPage;
