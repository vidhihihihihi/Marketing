import { FunctionComponent } from "react";
import PrimaryLinks from "./PrimaryLinks";
import ServiceLinks from "./ServiceLinks";
import "./FooterSection5.css";

export type FooterSectionType = {
  className?: string;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section7 ${className}`}>
      <div className="footer7" />
      <div className="signed-by-base-breadcrumbs-el63" />
      <div className="signed-by-base-breadcrumbs-el64" />
      <div className="signed-by-base-breadcrumbs-el65" />
      <div className="signed-by-base-breadcrumbs-el66" />
      <div className="signed-by-base-breadcrumbs-el67" />
      <div className="signed-by-base-breadcrumbs-el68" />
      <div className="signed-by-base-breadcrumbs-el69" />
      <div className="signed-by-base-breadcrumbs-el70" />
      <div className="signed-by-base-breadcrumbs-el71" />
      <div className="footer-content4">
        <div className="brand-info">
          <div className="rectangle-parent13">
            <div className="frame-child23" />
            <div className="logo8">Logo</div>
          </div>
          <div className="social-icon">
            <img className="image-7-icon8" alt="" src="/image-7-11@2x.png" />
            <div className="social-label">
              <div className="div">
                 
                <a className="a10" href="tel:+918088698016" target="_blank">
                  <span className="span8">+918088698016</span>
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info1">
            <img className="image-8-icon4" alt="" src="/image-81@2x.png" />
            <div className="contact-label">
              <div className="assistmarketingdnain12">
                 
                <a
                  className="assistmarketingdnain13"
                  href="mailto:assist@eterior.in"
                  target="_blank"
                >
                  <span className="assistmarketingdnain14">
                    assist@marketingdna.in
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="legal-container-parent">
            <div className="legal-container" />
            <div className="legal-content">
              <div className="legal-border" />
            </div>
            <div className="legal-icons">
              <div className="legal-icon" />
              <div className="legal-icon1" />
            </div>
          </div>
        </div>
      </div>
      <div className="site-links">
        <div className="links-content">
          <PrimaryLinks />
          <ServiceLinks />
        </div>
        <div className="footer-background3">
          <div className="background-shape1" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
