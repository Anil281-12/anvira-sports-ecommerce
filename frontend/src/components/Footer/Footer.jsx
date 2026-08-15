import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* About */}

        <div className="footer-section">

          <h2>ANVIRA SPORTS</h2>

          <p>
            Premium Sports Equipment, Jerseys,
            Shoes, Gym Accessories and
            Everything You Need For Every Game.
          </p>

        </div>

        {/* Quick Links */}

        <div className="footer-section">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Gym Equipment</li>

            <li>Men</li>

            <li>Women</li>

            <li>Kids</li>

            <li>Indoor Sports</li>

            <li>Outdoor Sports</li>

          </ul>

        </div>

        {/* Customer Support */}

        <div className="footer-section">

          <h3>Customer Support</h3>

          <ul>

            <li>Contact Us</li>

            <li>FAQs</li>

            <li>Shipping</li>

            <li>Returns</li>

            <li>Privacy Policy</li>

          </ul>

        </div>

        {/* Contact */}

        <div className="footer-section">

          <h3>Contact</h3>

          <p>
            <FaMapMarkerAlt /> Hyderabad,
            Telangana
          </p>

          <p>
            <FaEnvelope />
            support@anvirasports.com
          </p>

          <p>
            <FaPhoneAlt />
            +91 6305837464
          </p>

          <div className="social-icons">

            <FaFacebookF />

            <FaInstagram />

            <FaLinkedinIn />

            <FaYoutube />

          </div>

        </div>

      </div>

      <hr />

      <div className="footer-bottom">

        © 2026 ANVIRA SPORTS. All Rights Reserved.

      </div>

    </footer>
  );
}

export default Footer;