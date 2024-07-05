import { FunctionComponent } from "react";
import "./CTABanner.css";

export type CTABannerType = {
  className?: string;
  paragraph?: string;
};

const CTABanner: FunctionComponent<CTABannerType> = ({
  className = "",
  paragraph,
}) => {
  return (
    <section className={`c-t-a-banner ${className}`}>
      <div className="cta-banner1">
        <div className="cta-banner-item" />
        <div className="paragraph28">{paragraph}</div>
        <div className="contact-button">
          <div className="button-container3">
            <div className="contact-us-container">
              <a className="contact-us1">Contact Us</a>
            </div>
            <img
              className="button-container-inner"
              loading="lazy"
              alt=""
              src="/rectangle-271.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;