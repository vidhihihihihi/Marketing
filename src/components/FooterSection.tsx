import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import "./FooterSection.css";
import facebook from "./Assets/facebook.png";
import twitter from "./Assets/twitter.png";
import instagram from "./Assets/instagram.png";
import linkedin from "./Assets/linkedin.png";
import chevron_right from "./Assets/chevron_right.png";
import companylogo from "./main_logo.png";

export type FooterSectionType = {
  className?: string;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({ className = "" }) => {
  return (
    <footer className={`footer-section ${className}`}>
      <div className="logo-section">
        <div className="logo" onClick={() => window.location.href = "/"}>
          <img src={companylogo} alt="Company Logo" />
        </div>
        <div className="phone">
          <a href="tel:+918088698016">+91 8088698016</a>
        </div>
        <div className="email">
          <a href="mailto:info@marketingdna.in">info@marketingdna.in</a>
        </div>
        <div className="social-icons">
          <a href="https://www.instagram.com/marketingdnaindia/" target="_blank" rel="noopener noreferrer">
            <img src={instagram} alt="Instagram" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebook} alt="Facebook" />
          </a>
          <a href="https://www.linkedin.com/company/digital-marketing-in-dna/" target="_blank" rel="noopener noreferrer">
            <img src={linkedin} alt="LinkedIn" />
          </a>
          <a href="https://x.com" target="_blank" rel="noopener noreferrer">
            <img src={twitter} alt="Twitter" />
          </a>
        </div>
      </div>
      <div className="important-links">
        <h3>Important Links</h3>
        <ul>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/about-us-page">About us</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/contact-us-page">Contact Us</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/write-for-us">Write for us</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/careers-page">Career</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/case-studies">Case Studies</Link>
          </li>
        </ul>
      </div>
      <div className="featured-services">
        <h3>Featured Services</h3>
        <ul>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/seo-service">Search Engines Optimisation</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/social-media-marketing">Social Media Advertising</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/seo-service">Content Marketing</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/other-services">Web Development</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/other-services">UI/UX Designing</Link>
          </li>
          <li>
            <img src={chevron_right} alt="Chevron Right" className="chevron-icon" />
            <Link to="/analytics-&-tracking">Google Ads</Link>
          </li>
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
