

import { useNavigate } from "react-router-dom";
import arrowIcon from "../../assets/chevron-right.png"; 
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="notfound-wrapper">
      <div className="notfound-box">
        <div className="notfound-content">
          <h1 className="notfound-title">404</h1>
          <h2 className="notfound-heading">Page Not Found</h2>
          <p className="notfound-text">
            Just like in life, sometimes you take a path expecting something… and end up somewhere unexpected.
          </p>

          <button className="notfound-btn" onClick={() => navigate("/")}>
            <span>Back to Home</span>
            <img src={arrowIcon} alt="Arrow" />
          </button>
        </div>
      </div>
    </section>
  );
}
