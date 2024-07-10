import { FunctionComponent } from "react";
import "./FooterSection.css";
import facebook from "./Assets/facebook.png";
import twitter from "./Assets/twitter.png";
import instagram from "./Assets/instagram.png";
import linkedin from "./Assets/linkedin.png";
import chevron_right from "./Assets/chevron_right.png"

export type FooterSectionType = {
  className?: string;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({ className = "" }) => {
  return (
    <footer className={`footer-section ${className}`}>
        <div className="logo-section">
          <div className="logo"onClick={() => window.location.href = "/"}>Logo</div>
            <div className="phone">
              <a href="tel:+918088698016">+91 8088698016</a>
            </div>
            <div className="email">
              <a href="mailto:assist@marketingdna.in">assist@marketingdna.in</a>
            </div>
          <div className="social-icons">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={instagram}/>
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook}/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedin}/>
            </a>
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter}/>
            </a>
          </div>
        </div>
        <div className="important-links">
          <h3>Important Links</h3>
          <ul>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="about-us-page">About us</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="contact-us-page">Contact Us</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="write-for-us">Write for us</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="careers-page">Career</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="faqs-page">FAQs</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="blogs-page">Blogs</a></li>
          </ul>
        </div>
        <div className="featured-services">
          <h3>Featured Services</h3>
          <ul>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">Search Engines Optimisation</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">Social Media Advertising</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">Content Marketing</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">Web Development</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">UI/UX Designing</a></li>
            <li><img src={chevron_right} alt="Chevron Right" className="chevron-icon"/><a href="#">Google Ads</a></li>
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
