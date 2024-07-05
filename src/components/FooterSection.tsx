import { FunctionComponent } from "react";
import "./FooterSection.css";

export type FooterSectionType = {
  className?: string;
};

const FooterSection: FunctionComponent<FooterSectionType> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section ${className}`}>
      <div className="footer" />
      <div className="signed-by-base-breadcrumbs-el" />
      <div className="signed-by-base-breadcrumbs-el1" />
      <div className="signed-by-base-breadcrumbs-el2" />
      <div className="signed-by-base-breadcrumbs-el3" />
      <div className="signed-by-base-breadcrumbs-el4" />
      <div className="signed-by-base-breadcrumbs-el5" />
      <div className="signed-by-base-breadcrumbs-el6" />
      <div className="signed-by-base-breadcrumbs-el7" />
      <div className="signed-by-base-breadcrumbs-el8" />
      <div className="footer-content">
        <div className="frame-container">
          <div className="rectangle-group">
            <div className="frame-inner" />
            <div className="logo1">Logo</div>
          </div>
          <div className="image-7-parent">
            <img className="image-7-icon1" alt="" src="/image-7-1@2x.png" />
            <div className="social-link">
              <div className="social-platform">
                 
                <a className="a1" href="tel:+918088698016" target="_blank">
                  <span className="span1">+918088698016</span>
                </a>
              </div>
            </div>
          </div>
          <div className="image-8-parent">
            <img className="image-8-icon" alt="" src="/image-8@2x.png" />
            <div className="contact-info">
              <div className="assistmarketingdnain">
                 
                <a
                  className="assistmarketingdnain1"
                  href="mailto:assist@eterior.in"
                  target="_blank"
                >
                  <span className="assistmarketingdnain2">
                    assist@marketingdna.in
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="copyright-container-parent">
            <div className="copyright-container">
              <div className="copyright-border" />
              <div className="copyright-background" />
            </div>
            <div className="copyright-container1">
              <div className="copyright-container-child" />
              <div className="copyright-container-item" />
            </div>
          </div>
        </div>
      </div>
      <div className="important-links-container-parent">
        <div className="important-links-container">
          <div className="important-links-content">
            <div className="important-links-header">
              <div className="important-links">Important Links</div>
            </div>
            <div className="important-links-list">
              <div className="important-link-item">
                <div className="important-link-content">
                  <input
                    className="chevron-right-small"
                    type="radio"
                    name="radioGroup-2"
                  />
                </div>
                <div className="important-link-name-parent">
                  <div className="important-link-name">
                    <div className="important-link-label">Link</div>
                  </div>
                  <img className="underline-icon" alt="" src="/underline.svg" />
                </div>
              </div>
              <div className="important-link-item1">
                <div className="chevron-right-small-wrapper">
                  <input
                    className="chevron-right-small1"
                    type="radio"
                    name="radioGroup-2"
                  />
                </div>
                <div className="frame-div">
                  <div className="text-wrapper">
                    <div className="text1">Link</div>
                  </div>
                  <img
                    className="underline-icon1"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="services-link-container">
              <div className="services-link-content">
                <input
                  className="chevron-right-small2"
                  type="radio"
                  name="radioGroup-2"
                />
              </div>
              <div className="services-link-name-parent">
                <div className="services-link-name">
                  <div className="services-link-label">Link</div>
                </div>
                <img className="underline-icon2" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
          <div className="featured-services-container">
            <div className="featured-services-content">
              <div className="featured-services-list">
                <div className="featured-services">Featured Services</div>
                <div className="featured-services-items">
                  <div className="featured-service-item">
                    <div className="featured-service-content">
                      <div className="chevron-right-small-container">
                        <input
                          className="chevron-right-small3"
                          type="radio"
                          name="radioGroup-1"
                        />
                      </div>
                      <div className="featured-service-name-parent">
                        <div className="featured-service-name">
                          <div className="featured-service-label">Link</div>
                        </div>
                        <img
                          className="underline-icon3"
                          alt=""
                          src="/underline.svg"
                        />
                      </div>
                    </div>
                    <div className="featured-service-content1">
                      <div className="chevron-right-small-frame">
                        <input
                          className="chevron-right-small4"
                          type="radio"
                          name="radioGroup-1"
                        />
                      </div>
                      <div className="frame-parent1">
                        <div className="text-container">
                          <div className="text2">Link</div>
                        </div>
                        <img
                          className="underline-icon4"
                          alt=""
                          src="/underline.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="newsletter-container">
                    <div className="newsletter-content">
                      <input
                        className="chevron-right-small5"
                        type="radio"
                        name="radioGroup-1"
                      />
                    </div>
                    <div className="frame-parent2">
                      <div className="newsletter-label-wrapper">
                        <div className="newsletter-label">Link</div>
                      </div>
                      <img
                        className="underline-icon5"
                        alt=""
                        src="/underline.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="newsletter-link-container">
                <div className="newsletter-section">Newsletter Section</div>
                <div className="newsletter-link-items">
                  <div className="newsletter-link-item">
                    <div className="newsletter-link-content">
                      <input
                        className="chevron-right-small6"
                        type="radio"
                        name="radioGroup-3"
                      />
                    </div>
                    <div className="frame-parent3">
                      <div className="newsletter-link-label-wrapper">
                        <div className="newsletter-link-label">Link</div>
                      </div>
                      <img
                        className="underline-icon6"
                        alt=""
                        src="/underline.svg"
                      />
                    </div>
                  </div>
                  <div className="newsletter-link-item1">
                    <div className="chevron-right-small-wrapper1">
                      <input
                        className="chevron-right-small7"
                        type="radio"
                        name="radioGroup-3"
                      />
                    </div>
                    <div className="frame-parent4">
                      <div className="text-frame">
                        <div className="text3">Link</div>
                      </div>
                      <img
                        className="underline-icon7"
                        alt=""
                        src="/underline.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="newsletter-link">
                  <div className="container8">
                    <input
                      className="chevron-right-small8"
                      type="radio"
                      name="radioGroup-3"
                    />
                  </div>
                  <div className="container-group">
                    <div className="container9">
                      <div className="text4">Link</div>
                    </div>
                    <img
                      className="underline-icon8"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="copyright">
              <div className="rentifi-all-rights">
                © 2023 Rentifi. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
        <div className="background2">
          <div className="footer-background" />
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
