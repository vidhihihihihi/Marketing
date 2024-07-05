import { FunctionComponent } from "react";
import FooterBottom from "./FooterBottom";
import "./FooterSection11.css";

export type FooterSection1Type = {
  className?: string;
};

const FooterSection1: FunctionComponent<FooterSection1Type> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section2 ${className}`}>
      <div className="footer2" />
      <div className="signed-by-base-breadcrumbs-el18" />
      <div className="signed-by-base-breadcrumbs-el19" />
      <div className="signed-by-base-breadcrumbs-el20" />
      <div className="signed-by-base-breadcrumbs-el21" />
      <div className="signed-by-base-breadcrumbs-el22" />
      <div className="signed-by-base-breadcrumbs-el23" />
      <div className="signed-by-base-breadcrumbs-el24" />
      <div className="signed-by-base-breadcrumbs-el25" />
      <div className="filled12" />
      <div className="filled13" />
      <div className="filled14" />
      <div className="filled15" />
      <div className="signed-by-base-breadcrumbs-el26" />
      <div className="footer-content1">
        <div className="footer-top">
          <div className="rectangle-parent8">
            <div className="frame-child16" />
            <div className="logo5">Logo</div>
          </div>
          <div className="footer-social">
            <img className="image-7-icon5" alt="" src="/image-7-11@2x.png" />
            <div className="footer-social-link">
              <div className="footer-social-platform">
                <div className="footer-social-platform-container">
                   
                  <a className="a6" href="tel:+918088698016" target="_blank">
                    <span className="span5">+918088698016</span>
                  </a>
                </div>
                <div className="chevron-icon4" />
              </div>
            </div>
          </div>
          <div className="footer-contact">
            <img
              className="image-8-icon2"
              loading="lazy"
              alt=""
              src="/image-81@2x.png"
            />
            <div className="footer-contact-details">
              <div className="assistmarketingdnain6">
                 
                <a
                  className="assistmarketingdnain7"
                  href="mailto:assist@eterior.in"
                  target="_blank"
                >
                  <span className="assistmarketingdnain8">
                    assist@marketingdna.in
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-links">
            <div className="footer-links-divider" />
            <div className="footer-link-item">
              <div className="footer-link" />
            </div>
            <div className="footer-links-divider1" />
            <div className="footer-links-divider2" />
          </div>
        </div>
      </div>
      <FooterBottom />
    </footer>
  );
};

export default FooterSection1;
