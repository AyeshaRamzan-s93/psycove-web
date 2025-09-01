

import aboutImgLeft from "../../../../assets/Image.png";   
import aboutSmallImg from "../../../../assets/Image.png"; 

import "./AboutMain.css";

const AboutMain = () => {
  return (
    <section className="about-main">
      <div className="about-container">
        {/* Main Section Heading */}
        <h2 className="about-title">About Us</h2>

        {/* Left + Right content wrapper */}
        <div className="about-content">
          {/* Left side image */}
          <div className="about-left">
            <img src={aboutImgLeft} alt="About" className="about-main-img" />
          </div>

          {/* Right side */}
          <div className="about-rightt">
            <h3 className="about-subheading">Bridging The Gap In Mental Health Care</h3>

            {/* Breadcrumb-like text */}
            <p className="about-breadcrumb">
              Home <span>/ About Us</span>
            </p>

            {/* Small image */}
            <img
              src={aboutSmallImg}
              alt="About small"
              className="about-small-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMain;
