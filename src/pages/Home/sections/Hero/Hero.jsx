
import smallImg from "../../../../assets/Sub Heading.png";  
import arrowIcon from "../../../../assets/chevron-right.png";  
import contactImg from "../../../../assets/homephone.png";  
import heroMainImg from "../../../../assets/group.png"; 

import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          {/* Left side */}
          <div className="hero-left">
            {/* Small top image */}
            <img src={smallImg} alt="Decorative" className="hero-small-img" />

            {/* Main Heading */}
            <h1 className="hero-heading">
              Helping You Reconnect <br /> With Your True Self
            </h1>

            {/* Paragraph */}
            <p className="hero-text">
              Discover a supportive space where you can explore your thoughts,
              heal from within, and rediscover the person.
            </p>

            {/* Inline buttons/cta */}
            <div className="hero-actions">
              {/* Learn More Button */}
              <button className="hero-btn">
                Discover More
                <span>
                  <img src={arrowIcon} alt="Arrow" />
                </span>
              </button>

              {/* Contact Info */}
              <div className="hero-contact">
                <img src={contactImg} alt="Contact" className="contact-icon" />
                <div>
                  <p className="contact-label">Contact Us</p>
                  <p className="contact-number">0761-8523-398</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image */}
          <div className="hero-right">
            <img src={heroMainImg} alt="Hero" className="hero-main-img" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
