import { useState } from "react";
import "./Footer.css";
import {
  Phone,
  Clock,
  MapPin,
  Mail
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      return;
    }

    setStatus("success");
    setEmail("");
    setTimeout(() => setStatus(""), 4000);
  };

  return (
    <>
      <footer className="footer">
        {/* ===== Contact ===== */}
        <div className="footer-section">
          <h4>Contact</h4>

          <p><Phone size={16} /> +91 9347874316</p>
          <p><Clock size={16} /> Monday – Friday</p>
          <p>10:00 AM – 06:00 PM</p>

          <p className="address">
            <MapPin size={16} />
          3rd FLOOR, SIGMA ARCADE,G3/G4,<br />
            HAL OLD AIRPORT RD, NEAR TULASI THEATER,<br />
            MARATHAHALLI VILLAGE,<br/>
            MARATHAHALLI, BENGALURU, KARNATAKA - 560037
          </p>
        </div>

        {/* ===== Industries ===== */}
        <div className="footer-section">
          <h4>Industries</h4>
          <ul>
            <li><Link to="/industries/banking">Banking</Link></li>
            <li><Link to="/industries/education">Education</Link></li>
            <li><Link to="/industries/healthcare">Healthcare</Link></li>
            <li><Link to="/industries/insurance">Insurance</Link></li>
          </ul>
        </div>

        {/* ===== Services ===== */}
        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li><Link to="/services/mobile-app-development">Mobile App Development</Link></li>
            <li><Link to="/services/application-development">Application Development</Link></li>
            <li><Link to="/services/software-development">Software Development</Link></li>
            <li><Link to="/services/cloud-computing">Cloud Computing</Link></li>
            <li><Link to="/services/software-testing">Software Testing</Link></li>
          </ul>
        </div>

        {/* ===== Subscribe ===== */}
        <div className="footer-section subscribe">
          <h4>Subscribe</h4>
          <p>Get the latest updates and insights.</p>

          <form className="subscribe-box" onSubmit={handleSubscribe}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>

          {status === "error" && (
            <p className="subscribe-error">
              Please enter a valid email address.
            </p>
          )}

          {status === "success" && (
            <p className="subscribe-success">
              Thank you for subscribing!
            </p>
          )}

          <p className="note">
            <Mail size={14} /> Weekly newsletter & business tips
          </p>
        </div>
      </footer>

      {/* ===== Footer Bottom Bar ===== */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Softgrade Solutions Private Limited.
          All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
