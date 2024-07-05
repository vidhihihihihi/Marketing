import { FunctionComponent } from "react";
import "./CTABanner1.css";

export type CTABannerType = {
  className?: string;
};

const CTABanner: FunctionComponent<CTABannerType> = ({ className = "" }) => {
  return (
    <section className={`cta-banner1 ${className}`}>
      <div className="cta-banner-item" />
      <h3 className="lets-get-started">Let’s Get Started</h3>
      <div className="contact-link">
        <div className="contact-link-content">
          <div className="contact-us-container">
            <div className="contact-us1">Contact Us</div>
          </div>
          <img
            className="contact-link-content-child"
            loading="lazy"
            alt=""
            src="/rectangle-271.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default CTABanner;
