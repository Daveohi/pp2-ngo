import "../Styles/GetStarted.css";
import "../Styles/LandingPage.css";
import Char from "../assets/Images/Characters.png";
import Morechar from "../assets/Images/amico.png";
// import Plant from "../assets/Images/plants.png";
// import Speech from "../assets/Images/speech-bubble.png";

const CreateAccountDesktop = () => {
  return (
    <div className="create-account-desktop">
      <div className="already-have-an-account-frame">
        <div className="already-have-an-account">
          <i className="fundngo">
            <span>Fund</span>
            <span className="ngo">NGO</span>
          </i>
          <div className="already-have-a-fundngo-account-parent">
            <div className="already-have-a">{`Already have a FundNGO account? `}</div>
            <div className="log-in">Log in</div>
          </div>
        </div>
      </div>
      <div className="get-started-container">
        <div className="lets-get-started-container">
          <p className="lets-get-started">Let’s get started!</p>
          <p className="first-tell-us">
            First, tell us what you are looking for.
          </p>
        </div>
        <div className="ngos-parent">
          <div className="ngos">
            <div className="frame-parent11">
              <div className="groupamico-parent">
                <div className="groupamico">
                  <img className="characters-icon" alt="" src={Morechar} />
                </div>
                <div className="i-want-to-reach-out-to-sponsor-parent">
                  <div className="lets-get-started-container">
                    I want to reach out to sponsors
                  </div>
                  <div className="get-access-to-container">
                    <p className="first-tell-us">Get access to grants</p>
                    <p className="first-tell-us">and fundings</p>
                  </div>
                </div>
              </div>
              <div className="button1">
                <img className="home-icon1" alt="" src="/home.svg" />
                <div className="button2">Get Started</div>
                <img className="home-icon1" alt="" src="/right-arrow.svg" />
              </div>
            </div>
          </div>
          <div className="sponsors">
            <div className="frame-parent12">
              <div className="groupamico-parent">
                <img className="groupamico" alt="" src={Char} />
                <div className="i-want-to-reach-out-to-sponsor-parent">
                  <div className="lets-get-started-container">
                    I want to get access to NGOs
                  </div>
                  <div className="get-access-to-container">
                    Fund verified NGOs
                  </div>
                </div>
              </div>
              <div className="button14">
                {/* <img className="home-icon1" alt="" src="/home.svg" /> */}
                <div className="button7">Get Started</div>
                {/* <img className="home-icon1" alt="" src="/right-arrow.svg" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountDesktop;
