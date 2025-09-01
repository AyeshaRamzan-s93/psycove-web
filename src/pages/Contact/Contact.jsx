import React from "react";
import "./Contact.css";

// Assets
import smallImg from "../../assets/contactus.png";
import mapImg from "../../assets/Map Figma.png";
import dropdown from "../../assets/chevron-down.png";

import locationIcon from "../../assets/mapContact.png";
import web from "../../assets/webContact.png";
import phoneIcon from "../../assets/phoneContact.png";

import arrowIcon from "../../assets/chevron-right.png";
import fbIcon from "../../assets/fbContact.png";
import twitterIcon from "../../assets/twitterContact.png";
import instaIcon from "../../assets/instaContact.png";

const Contact = () => {
  return (
    <section className="contact-section">
    <div className="contact">
      <div className="contact-container">
        
        {/* LEFT SIDE */}
        <div className="contact-left">
          <img src={smallImg} alt="Decor" className="contact-small-img" />
          <h2 className="contact-heading">Get in Touch With Our Caring Team</h2>
          <img src={mapImg} alt="Map" className="contact-map" />
        </div>

        {/* RIGHT SIDE */}
        <div className="contact-right">
          {/* Info rows */}
          <div className="contact-info">
            <div className="info-item">
              <img src={locationIcon} alt="Location" />
              <span>KLLG St, No.99, Pku City, ID 28289</span>
            </div>
            <div className="info-item">
              <img src={web} alt="Website" />
              <span>www.hellodomainsite.com</span>
            </div>
            <div className="info-item">
              <img src={phoneIcon} alt="Phone" />
              <span>0761-8523-398</span>
            </div>
          </div>

          {/* Contact form */}
          <form className="contact-form">
            {/* Name */}
            <input type="text" placeholder="Rometheme STD" className="form-input" />

            {/* Email + Phone */}
            <div className="form-row">
              <input type="email" placeholder="hello@domainsite.com" className="form-input" />
              <input type="text" placeholder="Phone Number" className="form-input" />
            </div>

            {/* Subject */}
            <div className="form-select">
              <input type="text" placeholder="Subject" className="form-input" />
              <span className="dropdown-icon"> <img src={dropdown} alt="DropDown Menu" /></span>
            </div>

            {/* Message */}
            <textarea placeholder="Message" className="form-input textarea"></textarea>

            {/* Send button */}
            <button type="submit" className="form-btn">
              <span>Send Message</span>
              <img src={arrowIcon} alt="Arrow" />
            </button>
          </form>

          {/* Social icons */}
          <div className="contact-socials">
            <img src={fbIcon} alt="Facebook" />
            <img src={twitterIcon} alt="Twitter" />
            <img src={instaIcon} alt="Instagram" />
          </div>
        </div>

      </div>
      </div>
    </section>
  );
};

export default Contact;
