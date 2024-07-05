import { FunctionComponent } from "react";
import "./FooterLinks.css";

export type FooterLinksType = {
  className?: string;
  chevronRightSmallName?: string;
  chevronRightSmallName1?: string;
  chevronRightSmallName2?: string;
  chevronRightSmallName3?: string;
  chevronRightSmallName4?: string;
  chevronRightSmallName5?: string;
  chevronRightSmallName6?: string;
  chevronRightSmallName7?: string;
};

const FooterLinks: FunctionComponent<FooterLinksType> = ({
  className = "",
  chevronRightSmallName,
  chevronRightSmallName1,
  chevronRightSmallName2,
  chevronRightSmallName3,
  chevronRightSmallName4,
  chevronRightSmallName5,
  chevronRightSmallName6,
  chevronRightSmallName7,
}) => {
  return (
    <div className={`footer-links1 ${className}`}>
      <div className="important-links-header-parent">
        <div className="important-links-header1">
          <div className="important-links3">Important Links</div>
        </div>
        <div className="important-links-list1">
          <div className="important-link-item4">
            <div className="important-link-content2">
              <input
                className="chevron-right-small21"
                type="radio"
                name="radioGroup-2"
              />
            </div>
            <div className="frame-parent30">
              <div className="important-link-name-wrapper">
                <div className="important-link-name1">Link</div>
              </div>
              <img className="underline-icon27" alt="" src="/underline.svg" />
            </div>
          </div>
          <div className="important-link-item5">
            <div className="chevron-right-small-wrapper8">
              <input
                className="chevron-right-small22"
                type="radio"
                name={chevronRightSmallName}
              />
            </div>
            <div className="frame-parent31">
              <div className="text-wrapper12">
                <div className="text28">Link</div>
              </div>
              <img className="underline-icon28" alt="" src="/underline.svg" />
            </div>
          </div>
        </div>
        <div className="important-link-item6">
          <div className="important-link-content3">
            <input
              className="chevron-right-small23"
              type="radio"
              name={chevronRightSmallName1}
            />
          </div>
          <div className="frame-parent32">
            <div className="important-link-name-container">
              <div className="important-link-name2">Link</div>
            </div>
            <img className="underline-icon29" alt="" src="/underline.svg" />
          </div>
        </div>
      </div>
      <div className="featured-services-header-parent">
        <div className="featured-services-header">
          <div className="featured-services-title">
            <div className="featured-services3">Featured Services</div>
            <div className="featured-services-list1">
              <div className="featured-service-item1">
                <div className="featured-service-content2">
                  <div className="featured-service-icons">
                    <input
                      className="chevron-right-small24"
                      type="radio"
                      name={chevronRightSmallName2}
                    />
                  </div>
                  <div className="frame-parent33">
                    <div className="featured-service-name-wrapper">
                      <div className="featured-service-name1">Link</div>
                    </div>
                    <img
                      className="underline-icon30"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
                <div className="featured-service-content3">
                  <div className="chevron-right-small-wrapper9">
                    <input
                      className="chevron-right-small25"
                      type="radio"
                      name={chevronRightSmallName3}
                    />
                  </div>
                  <div className="frame-parent34">
                    <div className="text-wrapper13">
                      <div className="text29">Link</div>
                    </div>
                    <img
                      className="underline-icon31"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="featured-service-item2">
                <div className="featured-service-content4">
                  <input
                    className="chevron-right-small26"
                    type="radio"
                    name={chevronRightSmallName4}
                  />
                </div>
                <div className="frame-parent35">
                  <div className="featured-service-name-container">
                    <div className="featured-service-name2">Link</div>
                  </div>
                  <img
                    className="underline-icon32"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter-section-parent">
            <div className="newsletter-section3">Newsletter Section</div>
            <div className="newsletter-list">
              <div className="newsletter-item2">
                <div className="newsletter-content1">
                  <input
                    className="chevron-right-small27"
                    type="radio"
                    name={chevronRightSmallName5}
                  />
                </div>
                <div className="frame-parent36">
                  <div className="newsletter-name-wrapper">
                    <div className="newsletter-name">Link</div>
                  </div>
                  <img
                    className="underline-icon33"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
              <div className="newsletter-item3">
                <div className="chevron-right-small-wrapper10">
                  <input
                    className="chevron-right-small28"
                    type="radio"
                    name={chevronRightSmallName6}
                  />
                </div>
                <div className="frame-parent37">
                  <div className="text-wrapper14">
                    <div className="text30">Link</div>
                  </div>
                  <img
                    className="underline-icon34"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="newsletter-item4">
              <div className="newsletter-content2">
                <input
                  className="chevron-right-small29"
                  type="radio"
                  name={chevronRightSmallName7}
                />
              </div>
              <div className="frame-parent38">
                <div className="newsletter-name-container">
                  <div className="newsletter-name1">Link</div>
                </div>
                <img className="underline-icon35" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="rentifi-all-rights-reserved-wrapper">
          <div className="rentifi-all-rights3">
            © 2023 Rentifi. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="footer-background2" />
    </div>
  );
};

export default FooterLinks;
