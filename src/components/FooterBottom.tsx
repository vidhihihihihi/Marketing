import { FunctionComponent } from "react";
import "./FooterBottom.css";

export type FooterBottomType = {
  className?: string;
  chevronRightSmallName?: string;
  chevronRightSmallName1?: string;
  chevronRightSmallName2?: string;
  chevronRightSmallName3?: string;
  chevronRightSmallName4?: string;
  chevronRightSmallName5?: string;
};

const FooterBottom: FunctionComponent<FooterBottomType> = ({
  className = "",
  chevronRightSmallName,
  chevronRightSmallName1,
  chevronRightSmallName2,
  chevronRightSmallName3,
  chevronRightSmallName4,
  chevronRightSmallName5,
}) => {
  return (
    <div className={`footer-bottom ${className}`}>
      <div className="footer-navigation">
        <div className="important-links-wrapper">
          <div className="important-links2">Important Links</div>
        </div>
        <div className="important-link-items">
          <div className="important-link-item2">
            <div className="important-link-content1">
              <img
                className="chevron-right-small-icon3"
                loading="lazy"
                alt=""
                src="/chevron-right-small.svg"
              />
            </div>
            <div className="important-link-label-container-parent">
              <div className="important-link-label-container">
                <div className="important-link-label1">Link</div>
              </div>
              <img className="underline-icon18" alt="" src="/underline.svg" />
            </div>
          </div>
          <div className="important-link-item3">
            <div className="chevron-right-small-wrapper5">
              <img
                className="chevron-right-small-icon4"
                alt=""
                src="/chevron-right-small.svg"
              />
            </div>
            <div className="frame-parent23">
              <div className="text-wrapper5">
                <div className="text20">Link</div>
              </div>
              <img className="underline-icon19" alt="" src="/underline.svg" />
            </div>
          </div>
        </div>
        <div className="featured-services-item">
          <div className="service-link-icon">
            <img
              className="chevron-right-small-icon5"
              alt=""
              src="/chevron-right-small.svg"
            />
          </div>
          <div className="service-link">
            <div className="text-wrapper6">
              <div className="text21">Link</div>
            </div>
            <img className="underline-icon20" alt="" src="/underline.svg" />
          </div>
        </div>
      </div>
      <div className="services-parent">
        <div className="services">
          <div className="services-header">
            <div className="featured-services2">Featured Services</div>
            <div className="services-list">
              <div className="service-items">
                <div className="service-item">
                  <div className="link1">
                    <input className="chevron-right-small15" type="radio" />
                  </div>
                  <div className="title">
                    <div className="text-wrapper7">
                      <div className="text22">Link</div>
                    </div>
                    <img
                      className="underline-icon21"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
                <div className="service-item1">
                  <div className="chevron-right-small-wrapper6">
                    <input className="chevron-right-small16" type="radio" />
                  </div>
                  <div className="frame-parent24">
                    <div className="text-wrapper8">
                      <div className="text23">Link</div>
                    </div>
                    <img
                      className="underline-icon22"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="link-icon-parent">
                <div className="link-icon">
                  <input className="chevron-right-small17" type="radio" />
                </div>
                <div className="service-link-container">
                  <div className="service-link-content">
                    <div className="text24">Link</div>
                  </div>
                  <img
                    className="underline-icon23"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter">
            <div className="newsletter-section2">Newsletter Section</div>
            <div className="newsletter-items">
              <div className="newsletter-item">
                <div className="link2">
                  <input className="chevron-right-small18" type="radio" />
                </div>
                <div className="title1">
                  <div className="text-wrapper9">
                    <div className="text25">Link</div>
                  </div>
                  <img
                    className="underline-icon24"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
              <div className="newsletter-item1">
                <div className="chevron-right-small-wrapper7">
                  <input className="chevron-right-small19" type="radio" />
                </div>
                <div className="frame-parent25">
                  <div className="text-wrapper10">
                    <div className="text26">Link</div>
                  </div>
                  <img
                    className="underline-icon25"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="newsletter-link1">
              <div className="link-icon1">
                <input className="chevron-right-small20" type="radio" />
              </div>
              <div className="newsletter-link-content1">
                <div className="text-wrapper11">
                  <div className="text27">Link</div>
                </div>
                <img className="underline-icon26" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="copyright1">
          <div className="rentifi-all-rights2">
            © 2023 Rentifi. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="background3" />
    </div>
  );
};

export default FooterBottom;
