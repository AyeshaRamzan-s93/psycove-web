

// import { Link } from "react-router-dom";

// import { useState } from "react";

// import logo from "../../assets/logo.png";
// import bars from "../../assets/bars.png";

// import "./Navbar.css";

// const Navbar = () => {

//   const [menuOpen, setMenuOpen] = useState(false);


//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="navbar-links">
//           <Link to="/">Homepage</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>

//           {/* Bars icon in green circle */}
//           <div className="nav-bars">
//             <img src={bars} alt="Menu" />
//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import { useState } from "react";
// import { Link } from "react-router-dom";

// import logo from "../../assets/logo.png";
// import bars from "../../assets/bars.png";

// import locationIcon from "../../assets/location.png";
// import webIcon from "../../assets/web.png";
// import phoneIcon from "../../assets/phone.png";


// import "./Navbar.css";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <div className="navbar-logo">
//           <Link to="/">
//             <img src={logo} alt="Logo" />
//           </Link>
//         </div>

//         {/* Desktop Links */}
//         <div className="navbar-links">
//           <Link to="/">Homepage</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/contact">Contact Us</Link>

//           {/* Bars icon (shown only on mobile) */}
//           <div className="nav-bars" onClick={() => setMenuOpen(!menuOpen)}>
//             <img src={bars} alt="Menu" />
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
//         <Link to="/" onClick={() => setMenuOpen(false)}>Homepage</Link>
//         <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
//         <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import { useState } from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import locationIcon from "../../assets/location.png";
import webIcon from "../../assets/web.png";
import phoneIcon from "../../assets/phone.png";

import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        {/* Desktop Links */}
        <div className="navbar-links">
          <Link to="/">Homepage</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/pages">Pages</Link>
          <Link to="/contact">Contact Us</Link>

          {/* Bars icon (mobile trigger) */}
          <div className="nav-bars" onClick={() => setMenuOpen(!menuOpen)}>
            <img src={bars} alt="Menu" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setMenuOpen(false)}>Homepage</Link>
        <hr />
        <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
        <hr />
        <Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link>
        <hr />
        <Link to="/pages" onClick={() => setMenuOpen(false)}>Pages</Link>
        <hr />
        <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>

        {/* Bottom Info Section */}
        <div className="mobile-info">
          <div className="info-item1">
            <img src={locationIcon} alt="Location" />
            <span>KLLG St, No.99, Pku City, ID 28289</span>
          </div>
          <div className="info-item1">
            <img src={webIcon} alt="Website" />
            <span>www.hellodomainsite.com</span>
          </div>
          <div className="info-item1">
            <img src={phoneIcon} alt="Phone" />
            <span>0761-8523-398</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
