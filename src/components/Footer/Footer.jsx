


import "./Footer.css";
import logo from "../../assets/footer-logo.png"; 
import arrowImg from "../../assets/chevron-right.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import twitter from "../../assets/twitter.png";
import location from "../../assets/location.png";
import web from "../../assets/web.png";
import phone from "../../assets/phone.png";
import scrollbtn from "../../assets/scroll.png"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Column */}
        <div className="footer-left">
          <img src={logo} alt="Logo" className="footer-logo" />
          <p className="footer-text">
            Taking care of your mental health isn’t a luxury – it’s a step
            toward becoming your most authentic self.
          </p>

          <div className="footer-socials">
            <h2>Get In Touch</h2>
            <a href="#"><img src={facebook} alt="facebook"/></a>
            <a href="#"><img src={instagram} alt="instagram"/></a>
            <a href="#"><img src={twitter} alt="twitter"/></a>
          </div>
        </div>

        {/* Right Column */}
        <div className="footer-right">
          
          {/* Row: Quick Links + Contact */}
          <div className="footer-columns">
            <div className="footer-links">
              <h4>Quick Link</h4>
              <div className="footer-link-columns">
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                  <li><a href="/services">Services</a></li>
                  <li><a href="/contact">Contact Us</a></li>
                </ul>
                <ul>
                  <li><a href="/faqs">FAQs</a></li>
                  <li><a href="/articles">Articles</a></li>
                </ul>
              </div>
            </div>

            <div className="footer-contact">
              <h4>Contact Us</h4>
              <ul>
                <li><img src={location} alt="Location"/> <span>KLLG St, No.99, Pku City, ID 28289</span></li>
                <li><img src={web} alt="Domain"/> <span>www.hellodomainsite.com</span></li>
                <li><img src={phone} alt="Phone"/> <span>0761-8523-398</span></li>
              </ul>
            </div>
          </div>

          

          <div className="footer-email">
            <input type="email" placeholder="Email" />
            <button type="submit">
              <span className="inline-btn">Subscribe Now</span>
              <span className="inline-arrow">
                <img src={arrowImg} alt="arrow" />
              </span>
            </button>
          </div>

        </div>
      </div>

      {/* Bottom Section */}

      <div className="footer-bottom">
          <hr className="footer-line" />
          <img src={scrollbtn} alt="Scroll Up" className="footer-circle" />
          
      </div>
          <p className="footer-copy">
            Copyright © 2025 Rometheme. All Rights Reserved.
          </p>

      

    </footer>
  );
};

export default Footer;
