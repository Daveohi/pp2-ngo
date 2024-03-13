import { useCallback } from "react";
import "../Styles/LandingPage.css";
// import "../Styles/PhoneLandingPage.css";
import Dad from "../assets/Images/dad & son.png";
import Children from "../assets/Images/children.png";
import Children2 from "../assets/Images/children 2.png";
import Face from "../assets/Images/child_face.png";
import Hands from "../assets/Images/hands.png";
import Twohands from "../assets/Images/two_hands.png";
import Twohands2 from "../assets/Images/two-hands.png";
import Give from "../assets/Images/charity_givers.png";
import Oneperson from "../assets/Images/oneperson.png";
import Carton from "../assets/Images/openboxes.png";
import Fourpeople from "../assets/Images/four_persons.png";
import Gifts from "../assets/Images/charity-givers.png";
import F51 from "../assets/Images/F51.png";
import F52 from "../assets/Images/F52.png";
import F53 from "../assets/Images/F53.png";
import Vector1 from "../assets/Images/Vector 1.png";
import Vector2 from "../assets/Images/Vector 2.png";
// import Video1 from "../assets/Images/Video1.png";
// import Video2 from "../assets/Images/Video2.png";
// import Video3 from "../assets/Images/Video3.png";
// import Video4 from "../assets/Images/Video4.png";
import groupicon1 from "../assets/Images/Write_Icon.png";
import groupicon2 from "../assets/Images/Paste_Icon.png";
import groupicon3 from "../assets/Images/Team_Icon.png";
import groupicon4 from "../assets/Images/Tick_Icon.png";
import MapIcon from "../assets/Images/mdi_location.png";
import Mail from "../assets/Images/Mail.png";
import Call from "../assets/Images/Phone.png";
import Add from "../assets/Images/Plus.png";
import Twitter from "../assets/Images/pajamas_twitter.png";
import Facebook from "../assets/Images/iconoir_facebook.png";
import Linkedin from "../assets/Images/pajamas_twitter.png";
import Tiktok from "../assets/Images/ph_tiktok-logo-light.png";
import Instagram from "../assets/Images/iconoir_instagram.png";
import { Link } from "react-router-dom";

const LandingPage = () => {
  const onNavContainerClick = useCallback(() => {
    // Please sync "Sign up NGO Desktop 2" to the project
  }, []);

  return (
    <div className="landing-page">
      <div className="nav-container" onClick={onNavContainerClick}>
        <div className="nav-frame">
          <div className="nav-bar">
            <div className="fundngo-parent">
              <i className="fundngo">
                <span>Fund</span>
                <span className="ngo">NGO</span>
              </i>
              <div className="component-7">
                <div className="component-2">
                  <div className="home">Home</div>
                  <div className="component-2-child" />
                </div>
                <div className="component-3">
                  <div className="about">About</div>
                </div>
                <div className="component-3">
                  <div className="about">NGOs</div>
                </div>
                <div className="component-3">
                  <div className="about">Investors</div>
                </div>
                <div className="component-3">
                  <div className="about">Contact us</div>
                </div>
              </div>
            </div>
            <div className="button-parent">
              <div className="button">
                <img className="home-icon" alt="" src="" />
                <button className="button1">Log in</button>
                <img className="home-icon" alt="" src="/right-arrow.svg" />
              </div>
              <Link
                className="button2"
                to="/getstarted"
                style={{ textDecoration: "none" }}
              >
                <button className="button3">Create account</button>
                <img className="home-icon" alt="" src="/right-arrow.svg" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="frame-parent">
        <div className="connecting-lmpactful-ngos-with-parent">
          <div className="connecting-lmpactful-ngos">
            Connecting lmpactful NGOs with Conscious Investors.
          </div>
          <div className="our-platform-bridges">
            Our platform bridges the gap between verified NGOs with impactful
            projects and socially conscious investors seeking to create positive
            change.
          </div>
        </div>
        <div className="button4">
          <img className="home-icon" alt="" src="/home.svg" />
          <button className="button5">Get started now</button>
          <img className="home-icon" alt="" src="/right-arrow.svg" />
        </div>
      </div>
      <div className="frame-group">
        <img className="frame-child" alt="" src="" />
        <img className="frame-child" alt="" src="" />
        <img className="frame-child" alt="Dad & son" src={Dad} />
        <img className="frame-icon" alt="" src={Children} />
        <img className="frame-child" alt="" src={Children2} />
        <img className="frame-child" alt="" src={Face} />
        <img className="frame-child" alt="" src="" />
        <img className="frame-child" alt="" src="" />
      </div>
      <div className="frame-container">
        <img className="frame-child5" alt="" src={Hands} />
        <img className="frame-child6" alt="" src={Twohands} />
        <img className="frame-child6" alt="" src={Twohands2} />
      </div>
      <div className="frame-div">
        <div className="frame-parent1">
          <div className="our-mission-and-vision-wrapper">
            <div className="our-mission-and">Our Mission and Vision</div>
          </div>
          <div className="at-fundngo-we-container">
            <p className="at-fundngo-we">{`At FundNGO, we are driven by a singular mission: to connect investors with impactful NGOs, fostering positive change and sustainable solutions worldwide. Our platform is built on transparency, trust, and the shared commitment to empower communities through strategic investments in meaningful projects. `}</p>
            <p className="at-fundngo-we">&nbsp;</p>
            <p className="at-fundngo-we">
              We believe that by bridging the gap between investors and NGOs, we
              can catalyze social and environmental progress while creating
              lasting benefits for both parties. Through collaboration and
              innovation, we aim to revolutionize the way social impact is
              achieved.
            </p>
          </div>
        </div>
        <div className="button6">
          <img className="home-icon" alt="" src="/home.svg" />
          <div className="button1">Learn more</div>
          <img className="home-icon" alt="" src="/right-arrow.svg" />
        </div>
      </div>
      <div className="history">
        <div className="our-history-wrapper">
          <div className="our-mission-and">Our History</div>
        </div>
        <div className="frame-parent2">
          <div className="frame-parent3">
            <div className="the-spark-of-inspiration-parent">
              <div className="the-spark-of-container">
                <p className="at-fundngo-we">The Spark of Inspiration</p>
              </div>
              <div className="in-the-early">
                In the early days, FundNGO was merely a concept, a vision
                sparked by the desire to make a meaningful difference in the
                world. It all began with a conversation, that ignited the
                journey towards creating a platform that could connect investors
                with impactful NGOs.
              </div>
            </div>
            <div className="nurturing-growth-parent">
              <div className="nurturing-growth">Nurturing Growth</div>
              <div className="what-started-as">
                What started as an idea soon evolved into a comprehensive plan,
                with each step carefully orchestrated to bring our vision to
                life. From assembling a talented team to refining our strategy,
                we worked tirelessly to nurture the growth of our platform,
                overcoming challenges and seizing opportunities along the way.
              </div>
            </div>
            <div className="building-bridges-parent">
              <div className="building-bridges">Building Bridges</div>
              <div className="as-our-platform">
                As our platform matured, so too did our impact. We focused on
                building bridges forging connections between investors eager to
                make a difference and NGOs with the potential to drive real
                change.
              </div>
            </div>
          </div>
          <div className="line-parent">
            <div className="line-div" />
            <div className="wrapper">
              <div className="our-mission-and">1</div>
            </div>
            <div className="container">
              <div className="our-mission-and">2</div>
            </div>
            <div className="frame">
              <div className="our-mission-and">3</div>
            </div>
          </div>
        </div>
      </div>
      <div className="total-impactful-projects-suppo-wrapper">
        <div className="our-mission-and">
          Total Impactful Projects Supported
        </div>
      </div>
      <div className="frame-parent4">
        <div className="connecting-lmpactful-ngos-with-parent">
          <div className="million">$10 million+</div>
          <div className="total-funds-raised">Total funds raised</div>
        </div>
        <div className="parent">
          <div className="div3">200+</div>
          <div className="total-funds-raised">NGO’s partnered with</div>
        </div>
        <div className="parent">
          <div className="div4">1000+</div>
          <div className="total-funds-raised">Investors engaged in</div>
        </div>
      </div>
      <div className="discover-how-to-make-an-impact-parent">
        <div className="our-mission-and">Discover How to Make An Impact</div>
        <div className="empower-change-through">
          {" "}
          Empower change through strategic investment and learn how your
          contributions can drive positive change, foster sustainable solutions
          and empower communities.
        </div>
      </div>
      <div className="frame-parent5">
        <div className="for-verified-ngos-parent">
          <div className="for-verified-ngos">For verified NGO’s</div>
          <div className="how-to-get">How to get started</div>
        </div>
        <div className="frame-parent6">
          <div className="system-uiconscreate-parent">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon1} />
            </div>
            <div className="create-an-account">
              Create an account by registering your NGO and create a profile on
              our platform.
            </div>
          </div>
          <div className="system-uiconscreate-parent">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon2} />
            </div>
            <div className="submit-project-proposals">
              Submit project proposals by providing detailed information about
              your organization, project objectives, budget, and expected
              outcomes.
            </div>
          </div>
          <div className="system-uiconscreate-parent">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon3} />
            </div>
            <div className="our-team-evaluates">
              Our team evaluates each proposal to ensure alignment with our
              mission and impact criteria
            </div>
          </div>
          <div className="system-uiconscreate-parent">
            <div className="material-symbols-lightdomain-">
              <img className="group-icon" alt="" src={groupicon4} />
            </div>
            <div className="once-verified-your">
              Once verified, your project will be listed on our platform for
              potential investors to explore and support.
            </div>
          </div>
        </div>
      </div>
      <img className="image-1-icon" alt="" src={Give} />
      <div className="frame-parent7">
        <div className="for-verified-ngos-parent">
          <div className="for-verified-ngos">For investors</div>
          <div className="how-to-get">How to get started</div>
        </div>
        <div className="frame-parent6">
          <div className="system-uiconscreate-group">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon1} />
            </div>
            <div className="browse-projects-to">
              Browse projects to explore a diverse range of verified projects
              that align with your interests and values.
            </div>
          </div>
          <div className="iconoirsubmit-document-group">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon2} />
            </div>
            <div className="review-details-to">
              Review details to delve into project descriptions, impact metrics,
              and funding needs, empowering you to make informed investment
              decisions.
            </div>
          </div>
          <div className="system-uiconscreate-parent">
            <div className="system-uiconscreate">
              <img className="group-icon" alt="" src={groupicon3} />
            </div>
            <div className="make-contributions-to">
              Make contributions to support projects by making financial
              contributions directly through our platform, facilitating
              impactful change.
            </div>
          </div>
          <div className="system-uiconscreate-parent">
            <div className="material-symbols-lightdomain-">
              <img className="group-icon" alt="" src={groupicon4} />
            </div>
            <div className="track-impact-to">
              Track impact to stay updated on the progress and outcomes of
              funded projects, enabling you to witness the real-world impact of
              your investments firsthand.
            </div>
          </div>
        </div>
      </div>
      <img className="image-3-icon" alt="" src={Oneperson} />
      <div className="our-verified-ngos-parent">
        <div className="our-mission-and">Our Verified NGO’s</div>
        <div className="empower-change-through">
          We showcase organizations that have gotten funding from us and
          undergone various impactful projects to support their communities
        </div>
      </div>
      <div className="frame-parent9">
        <div className="image-6-parent">
          <img className="image-6-icon" alt="" src={Carton} />
          <div className="health-for-all-initiative-is-c-parent">
            <div className="health-for-all">
              Health for All Initiative is committed to ensuring access to
              essential healthcare services for vulnerable populations. Their
              projects focus on providing medical care, promoting disease
              prevention, and improving healthcare infrastructure in undeserved
              areas.
            </div>
            <div className="learn-more">Learn more</div>
          </div>
        </div>
        <div className="image-6-parent">
          <img className="image-6-icon" alt="" src={Fourpeople} />
          <div className="at-green-earth-alliance-their-parent">
            <div className="at-green-earth">{`At Green earth alliance, their projects focus on reforestation, wildlife conservation, and sustainable agriculture practices. They work tirelessly to combat climate change and biodiversity loss, ensuring a greener and a more sustainable world for all. `}</div>
            <div className="learn-more">Learn more</div>
          </div>
        </div>
        <div className="image-6-parent">
          <img className="image-6-icon" alt="" src={Gifts} />
          <div className="nourish-every-soul-is-dedicate-parent">
            <div className="nourish-every-soul">
              Nourish Every Soul is dedicated to combating food insecurity and
              hunger in communities around the world. Their mission is to ensure
              that no one goes to bed hungry. In food relief projects, they
              provide nutritious meals, food distribution programs, and many
              more.
            </div>
            <div className="learn-more">Learn more</div>
          </div>
        </div>
      </div>
      <div className="button8">
        <img className="home-icon" alt="" src="/home.svg" />
        <button className="button5">Browse verified NGO’s</button>
        <img className="home-icon" alt="" src="/right-arrow.svg" />
      </div>
      <div className="investors1">
        <div className="our-partners-and">Our Partners and Investors</div>
        <img className="investors-child" alt="" src={Vector2} />
        <img className="investors-item" alt="" src={Vector1} />
      </div>
      <div className="youve-got-questions-weve-go-parent">
        <div className="our-mission-and">{`You’ve Got Questions, We’ve Got Answers `}</div>
        <div className="unlock-clarity-and">
          Unlock clarity and gain confidence with our comprehensive answers to
          all your questions, guiding you towards informed decisions.
        </div>
      </div>
      <div className="landing-page-inner">
        <div className="frame-parent10">
          <div className="how-does-fundngo-works-wrapper">
            <div className="for-verified-ngos">How does FundNGO works?</div>
          </div>
          <img className="icoutline-add-icon" alt="" src={Add} />
        </div>
      </div>
      <br />

      <div className="landing-page-child">
        <div className="frame-parent10">
          <div className="how-does-fundngo-works-wrapper">
            <div className="for-verified-ngos">Who can use FundNGO?</div>
          </div>
          <img className="icoutline-add-icon" alt="" src={Add} />
        </div>
      </div>

      <div className="landing-page-inner1">
        <div className="frame-parent10">
          <div className="how-does-fundngo-works-wrapper">
            <div className="for-verified-ngos">Is my donation secure?</div>
          </div>
          <img className="icoutline-add-icon" alt="" src={Add} />
        </div>
      </div>
      
      <div className="frame-parent13">
        <div className="phplay-fill-wrapper">
          <div className="phplay-fill">
            <img className="vector-icon4" alt="" src="" />
          </div>
        </div>
        <div className="phplay-fill-container">
          <div className="phplay-fill">
            <img className="vector-icon4" alt="" src="" />
          </div>
        </div>
        <div className="phplay-fill-frame">
          <div className="phplay-fill">
            <img className="vector-icon4" alt="" src="" />
          </div>
        </div>
        <div className="phplay-fill-wrapper1">
          <div className="phplay-fill">
            <img className="vector-icon4" alt="" src="" />
          </div>
        </div>
      </div>
      <div className="vector-parent">
        <img className="group-child" alt="" src="/vector-4.svg" />
        <i className="our-sucess-stories">Our sucess stories</i>
      </div>
      <div className="recent-blogs-parent">
        <div className="our-mission-and">Recent Blogs</div>
        <div className="unlock-clarity-and">
          Unlock clarity and gain confidence with our comprehensive answers to
          all your questions, guiding you towards informed decisions.
        </div>
      </div>
      <div className="frame-parent14">
        <img className="frame-c8" alt="" src={F51} />
        <div className="jan-3-2024-parent">
          <div className="for-verified-ngos">Jan 3, 2024</div>
          <div className="empowering-change-how">
            Empowering Change: How strategic investments are transforming
            communities.
          </div>
        </div>
      </div>
      <div className="frame-parent15">
        <img className="frame-c8" alt="" src={F52} />
        <div className="jan-3-2024-group">
          <div className="for-verified-ngos">Jan 3, 2024</div>
          <div className="impact-from-the">
            Impact from the field; Stories of impact amd innovation.
          </div>
        </div>
      </div>
      <div className="frame-parent16">
        <img className="frame-c8" alt="" src={F53} />
        <div className="jan-3-2024-group">
          <div className="for-verified-ngos">Jan 3, 2024</div>
          <div className="navigating-the-world">
            Navigating the world of philanthropy; Tips and trends for effective
            giving.
          </div>
        </div>
      </div>
      <div className="button10">
        <img className="home-icon" alt="" src="/home.svg" />
        <div className="button5">Read more blogs</div>
        <img className="home-icon" alt="" src="/right-arrow.svg" />
      </div>
      <div className="still-in-doubt-were-just-a-c-parent">
        <div className="our-mission-and">{`Still in Doubt, We’re just a Click Away `}</div>
        <div className="unlock-clarity-and">
          Unlock clarity and gain confidence with our comprehensive answers to
          all your questions, guiding you towards informed decisions.
        </div>
      </div>
      <div className="frame-parent17">
        <div className="phmicrosoft-teams-logo-thin-container">
          <div className="system-uiconscreate">
            <img className="mdilocation-icon" alt="" src={MapIcon} />
          </div>
          <div className="address-parent">
            <div className="for-verified-ngos">Address</div>
            <div className="fundngo-nigeria-office">
              FundNGO Nigeria Office, 123B Main street, Ikeja Lagos, Nigeria.
            </div>
          </div>
        </div>
        <div className="phmicrosoft-teams-logo-thin-container">
          <div className="system-uiconscreate">
            <img className="mdilocation-icon" alt="" src={Mail} />
          </div>
          <div className="address-parent">
            <div className="for-verified-ngos">Email</div>
            <div className="infofundngong">Info@fundngo.ng</div>
          </div>
        </div>
        <div className="phmicrosoft-teams-logo-thin-container">
          <div className="system-uiconscreate">
            <img className="mdilocation-icon" alt="" src={Call} />
          </div>
          <div className="address-parent">
            <div className="for-verified-ngos">Phone number</div>
            <div className="infofundngong">Info@fundngo.ng</div>
          </div>
        </div>
      </div>
      <div className="send-message-parent">
        <div className="send-message">Send Message</div>
        <div className="inputs-2-parent">
          <div className="inputs-2">
            <div className="email-address">Email Address</div>
            <div className="input-fill">
              <img className="email-icon" alt="" src="/email.svg" />
              <input
                className="type-your-name"
                type="email"
                placeholder="Email"
              />
              <img className="email-icon" alt="" src="/dropdown.svg" />
            </div>
          </div>
          <div className="inputs-2">
            <div className="for-verified-ngos">Type your message</div>
            <div className="input-fill1">
              <img className="email-icon" alt="" />
              <textarea
                className="type-your-name"
                type="text"
                placeholder="Send a message"
              />
              <img className="email-icon" alt="" src="/dropdown.svg" />
            </div>
          </div>
          <div className="button12">
            <img className="home-icon" alt="" src="/home.svg" />
            <button className="button5">Send</button>
            <img className="home-icon" alt="" src="/right-arrow.svg" />
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="join-our-newsletter-parent">
          <div className="join-our-newsletter">Join our newsletter</div>
          <div className="be-the-very">
            Be the very first to get news on FundNGO in your mailbox.
          </div>
        </div>
        <div className="input-fill-parent">
          <div className="input-fill2">
            <img className="email-icon" alt="" src="/email.svg" />
            <input
              className="type-your-name"
              type="email"
              placeholder="Email Address"
            />
            <img className="email-icon" alt="" src="/dropdown.svg" />
          </div>
          <div className="button14">
            <img className="home-icon" alt="" src="/home.svg" />
            <button className="button7">Subscribe</button>
            <img className="home-icon" alt="" src="/right-arrow.svg" />
          </div>
        </div>
        <div className="footer-child" />
        <div className="footer-item" />
        <div className="terms-of-service">Terms of service</div>
        <div className="privacy-policy">Privacy Policy</div>
        <div className="security">Security</div>
        <div className="frame-parent18">
          <div className="find-investors-parent">
            <b className="find-investors">Find Investors</b>
            <div className="investors-in-nigeria">Investors in Nigeria</div>
            <div className="investors-in-nigeria">Investors in Africa</div>
            <div className="investors-in-nigeria">Investors in Europe</div>
            <div className="investors-in-nigeria">Investors in Asia</div>
            <div className="investors-in-nigeria">Popular investors</div>
            <div className="investors-in-nigeria">
              Most recognized investors
            </div>
          </div>
          <div className="find-investors-parent">
            <b className="find-ngos">Find NGO’s</b>
            <div className="investors-in-nigeria">NGO’s in Nigeria</div>
            <div className="investors-in-nigeria">NGO’s in Africa</div>
            <div className="investors-in-nigeria">NGO’s in Europe</div>
            <div className="investors-in-nigeria">NGO’s in Asia</div>
            <div className="investors-in-nigeria">Verified NGO’s</div>
          </div>
          <div className="find-investors-parent">
            <b className="about-fundngos">About FundNGO’s</b>
            <div className="investors-in-nigeria">How Fund NGO works</div>
            <div className="investors-in-nigeria">{`Why choose us `}</div>
            <div className="investors-in-nigeria">Finding investors</div>
            <div className="investors-in-nigeria">Blogs and awards</div>
            <div className="investors-in-nigeria">Careers at FundNGO</div>
            <div className="investors-in-nigeria">FundNGO reviews</div>
            <div className="investors-in-nigeria">Success stories</div>
            <div className="investors-in-nigeria">Events and opportunities</div>
          </div>
          <div className="find-investors-parent">
            <b className="resources">Resources</b>
            <div className="investors-in-nigeria">
              Pitch your idea into investment
            </div>
            <div className="investors-in-nigeria">
              Cold email writing to inverstors
            </div>
            <div className="investors-in-nigeria">Ace your interviews</div>
            <div className="investors-in-nigeria">Strategic investing</div>
            <div className="investors-in-nigeria">Get consultations</div>
            <div className="investors-in-nigeria">Business plan templates</div>
            <div className="investors-in-nigeria">Resume templates</div>
          </div>
        </div>
        <div className="fundngo-group">
          <i className="fundngo1">
            <span>Fund</span>
            <span className="ngo">NGO</span>
          </i>
          <div className="be-the-very">
            <span>{`Empowering `}</span>
            <span className="ngo">Impact</span>
            <span>, One Investment at a Time.</span>
          </div>
        </div>
        <div className="follow-us-on-parent">
          <div className="follow-us-on">Follow us on</div>
          <div className="pajamastwitter-parent">
            <div className="pajamastwitter">
              <img className="vector-icon8" alt="" src={Twitter} />
            </div>
            <div className="pajamastwitter">
              <img className="iconoirfacebook" alt="" src={Facebook} />
            </div>
            <div className="pajamastwitter">
              <img className="iconoirfacebook" alt="" src={Linkedin} />
            </div>
            <div className="pajamastwitter">
              <img className="iconoirfacebook" alt="" src={Tiktok} />
            </div>
            <div className="pajamastwitter">
              <img className="iconoirfacebook" alt="" src={Instagram} />
            </div>
          </div>
        </div>
        <div className="fundngo-all-rights">
          @ 2024 FundNGO. All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
