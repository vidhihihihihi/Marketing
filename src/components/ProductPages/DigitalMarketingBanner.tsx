import { FunctionComponent } from "react";
import "./DigitalMarketingBanner.css";

const DigitalMarketingBanner: FunctionComponent = () => {
  return (
    <div className="digital-marketing-banner">
      <div className="banner-content">
        <h1 className="banner-heading">DIGITAL MARKETING SERVICE</h1>
        <p className="banner-subheading">
          You've put in the effort to build your business. We're committed to
          helping your business thrive online.
        </p>
        <a href="/contact-us-page" className="cta-button">
          Book Consultation
        </a>
      </div>
    </div>
  );
};

export default DigitalMarketingBanner;