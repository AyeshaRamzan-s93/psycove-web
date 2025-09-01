

import aboutImg from "../../../../assets/group.png"; 
import arrowIcon from "../../../../assets/chevron-right.png"; 
import "./AboutUsPreview.css";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-us-inner">
        <div className="about-us-content">
          {/* Left side */}
          <div className="about-left">
            <h2 className="about-heading">About Us</h2>
            <img src={aboutImg} alt="About" className="about-image" />
          </div>

          {/* Right side */}
          <div className="about-right1">
            <p className="about-text">
              We are a team of licensed psychologists, therapists, and mental health professionals dedicated to helping individuals navigate life’s challenges with compassion and clarity. 
               </p>
              <p className="about-text">Whether you're seeking support for anxiety, depression, relationship struggles, burnout, or simply want to grow, we’re here to walk beside you — not just as professionals. </p>
           
            <button className="about-button">
              Learn more  <span> <img src={arrowIcon} alt="Arrow" /></span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
