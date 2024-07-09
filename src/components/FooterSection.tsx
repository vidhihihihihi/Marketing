import { FunctionComponent } from "react";
import "./FooterSection.css";

export type FooterSectionType = {
  className?: string;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({ className = "" }) => {
  return (
    <footer className={`footer-section ${className}`}>
        <div className="logo-section">
          <div className="logo">Logo</div>
            <div className="phone">
              <a href="tel:+918088698016">+91 8088698016</a>
            </div>
            <div className="email">
              <a href="mailto:assist@marketingdna.in">assist@marketingdna.in</a>
            </div>
          <div className="social-icons">
            <img src="/path-to-your-icon1.png"/>
            <img src="/path-to-your-icon2.png"/>
            <img src="/path-to-your-icon3.png"/>
            <img src="/path-to-your-icon4.png"/>
          </div>
        </div>
        <div className="important-links">
          <h3>Important Links</h3>
          <ul>
            <li><a href="about-us-page">About us</a></li>
            <li><a href="contact-us-page">Contact Us</a></li>
            <li><a href="write-for-us">Write for us</a></li>
            <li><a href="careers-page">Career</a></li>
            <li><a href="faqs-page">FAQs</a></li>
            <li><a href="blogs-page">Blogs</a></li>
          </ul>
        </div>
        <div className="featured-services">
          <h3>Featured Services</h3>
          <ul>
            <li><a href="#">Search Engines Optimisation</a></li>
            <li><a href="#">Social Media Advertising</a></li>
            <li><a href="#">Content Marketing</a></li>
            <li><a href="#">Web Development</a></li>
            <li><a href="#">UI/UX Designing</a></li>
            <li><a href="#">Google Ads</a></li>
          </ul>
        </div>
        <div className="newsletter-section">
          <h3>Newsletter Section</h3>
          <div className="newsletter-signup">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      <div className="footer-bottom">
        <p>© 2024 DNA Marketing. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
