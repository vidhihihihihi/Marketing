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
          <div className="important-links4">Important Links</div>
        </div>
        <div className="important-links-list1">
          <div className="important-link-item4">
            <div className="important-link-content2">
              <input
                className="chevron-right-small27"
                type="radio"
                name="radioGroup-2"
              />
            </div>
            <div className="frame-parent41">
              <div className="important-link-name-wrapper">
                <div className="important-link-name1">Link</div>
              </div>
              <img className="underline-icon36" alt="" src="/underline.svg" />
            </div>
          </div>
          <div className="important-link-item5">
            <div className="chevron-right-small-wrapper16">
              <input
                className="chevron-right-small28"
                type="radio"
                name={chevronRightSmallName}
              />
            </div>
            <div className="frame-parent42">
              <div className="text-wrapper15">
                <div className="text36">Link</div>
              </div>
              <img className="underline-icon37" alt="" src="/underline.svg" />
            </div>
          </div>
        </div>
        <div className="important-link-item6">
          <div className="important-link-content3">
            <input
              className="chevron-right-small29"
              type="radio"
              name={chevronRightSmallName1}
            />
          </div>
          <div className="frame-parent43">
            <div className="important-link-name-container">
              <div className="important-link-name2">Link</div>
            </div>
            <img className="underline-icon38" alt="" src="/underline.svg" />
          </div>
        </div>
      </div>
      <div className="featured-services-header-parent">
        <div className="featured-services-header">
          <div className="featured-services-title">
            <div className="featured-services4">Featured Services</div>
            <div className="featured-services-list1">
              <div className="featured-service-item1">
                <div className="featured-service-content2">
                  <div className="featured-service-icons">
                    <input
                      className="chevron-right-small30"
                      type="radio"
                      name={chevronRightSmallName2}
                    />
                  </div>
                  <div className="frame-parent44">
                    <div className="featured-service-name-wrapper">
                      <div className="featured-service-name1">Link</div>
                    </div>
                    <img
                      className="underline-icon39"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
                <div className="featured-service-content3">
                  <div className="chevron-right-small-wrapper17">
                    <input
                      className="chevron-right-small31"
                      type="radio"
                      name={chevronRightSmallName3}
                    />
                  </div>
                  <div className="frame-parent45">
                    <div className="text-wrapper16">
                      <div className="text37">Link</div>
                    </div>
                    <img
                      className="underline-icon40"
                      alt=""
                      src="/underline.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="featured-service-item2">
                <div className="featured-service-content4">
                  <input
                    className="chevron-right-small32"
                    type="radio"
                    name={chevronRightSmallName4}
                  />
                </div>
                <div className="frame-parent46">
                  <div className="featured-service-name-container">
                    <div className="featured-service-name2">Link</div>
                  </div>
                  <img
                    className="underline-icon41"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="newsletter-section-parent">
            <div className="newsletter-section4">Newsletter Section</div>
            <div className="newsletter-list">
              <div className="newsletter-item3">
                <div className="newsletter-content1">
                  <input
                    className="chevron-right-small33"
                    type="radio"
                    name={chevronRightSmallName5}
                  />
                </div>
                <div className="frame-parent47">
                  <div className="newsletter-name-wrapper">
                    <div className="newsletter-name">Link</div>
                  </div>
                  <img
                    className="underline-icon42"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
              <div className="newsletter-item4">
                <div className="chevron-right-small-wrapper18">
                  <input
                    className="chevron-right-small34"
                    type="radio"
                    name={chevronRightSmallName6}
                  />
                </div>
                <div className="frame-parent48">
                  <div className="text-wrapper17">
                    <div className="text38">Link</div>
                  </div>
                  <img
                    className="underline-icon43"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="newsletter-item5">
              <div className="newsletter-content2">
                <input
                  className="chevron-right-small35"
                  type="radio"
                  name={chevronRightSmallName7}
                />
              </div>
              <div className="frame-parent49">
                <div className="newsletter-name-container">
                  <div className="newsletter-name1">Link</div>
                </div>
                <img className="underline-icon44" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="rentifi-all-rights-reserved-wrapper">
          <div className="rentifi-all-rights4">
            © 2023 Rentifi. All Rights Reserved.
          </div>
        </div>
      </div>
      <div className="footer-background3" />
    </div>
  );
};

export default FooterLinks;