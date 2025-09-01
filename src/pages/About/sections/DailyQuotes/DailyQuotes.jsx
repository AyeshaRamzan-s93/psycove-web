

import "./DailyQuotes.css";

import facebook from "../../../../assets/fbContact.png";
import instagram from "../../../../assets/instaContact.png";
import twitter from "../../../../assets/twitterContact.png";

const DailyQuotes = () => {
  return (
    <section className="quotes-section">
      <div className="quotes-container">
        <div className="quotes-content">
          {/* LEFT SIDE */}
          <div className="quotes-left">
            <h2 className="quotes-heading">DAILY QUOTES</h2>

            {/* Author */}
            <div className="quotes-author">
              <div className="author-circle"></div>
              <div className="author-info">
                <h4>Dr. Nathalia Brooks</h4>
                <p>Mental Health Consultant</p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="quotes-right">
            <h3 className="quotes-text">
              “It's Not What Happens To You, But{" "}
              <span>How You React</span> To It That Matters.”
            </h3>
            <div className="share-box">
              <span>Share on:</span>
              <div className="share-icons">
                <img src={facebook} alt="Facebook" />
                <img src={instagram} alt="Twitter" />
                <img src={twitter} alt="LinkedIn" />
              </div>
            </div>
          </div>
        </div>

        {/* STATS ROW */}
        <div className="quotes-stats">
          <div className="stat">
            <h4>
              25<span className="sup">+</span>
            </h4>
            <p>Years of Experience</p>
          </div>
          <div className="stat">
            <h4>
              98<span className="sup">%</span>
            </h4>
            <p>Client Satisfaction</p>
          </div>
          <div className="stat">
            <h4>
              30<span className="sup">+</span>
            </h4>
            <p>Expert Psychologists</p>
          </div>
          <div className="stat">
            <h4>
              1.5<span className="sup">k</span>
            </h4>
            <p>Sessions Delivered</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyQuotes;
