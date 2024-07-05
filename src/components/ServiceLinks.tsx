import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceLinks.css";

export type ServiceLinksType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
};

const ServiceLinks: FunctionComponent<ServiceLinksType> = ({
  className = "",
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const serviceLinksStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  return (
    <div className={`service-links ${className}`} style={serviceLinksStyle}>
      <div className="service-content">
        <div className="service-header">
          <div className="featured-services4">Featured Services</div>
          <div className="service-items1">
            <div className="service-item2">
              <div className="service-link1">
                <div className="chevron-right-small-wrapper13">
                  <input
                    className="chevron-right-small30"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="service-label">
                  <div className="link-name-frame">
                    <div className="link-name2">Link</div>
                  </div>
                  <img
                    className="underline-icon39"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
              <div className="service-link2">
                <div className="chevron-right-small-wrapper14">
                  <input
                    className="chevron-right-small31"
                    type="radio"
                    name="radioGroup-1"
                  />
                </div>
                <div className="frame-parent44">
                  <div className="text-wrapper16">
                    <div className="text34">Link</div>
                  </div>
                  <img
                    className="underline-icon40"
                    alt=""
                    src="/underline.svg"
                  />
                </div>
              </div>
            </div>
            <div className="newsletter-link2">
              <div className="chevron-right-small-wrapper15">
                <input
                  className="chevron-right-small32"
                  type="radio"
                  name="radioGroup-1"
                />
              </div>
              <div className="newsletter-label1">
                <div className="link-name-wrapper1">
                  <div className="link-name3">Link</div>
                </div>
                <img className="underline-icon41" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="newsletter1">
          <div className="newsletter-section4">Newsletter Section</div>
          <div className="newsletter-item5">
            <div className="newsletter-redirect">
              <div className="chevron-right-small-wrapper16">
                <input
                  className="chevron-right-small33"
                  type="radio"
                  name="radioGroup-2"
                />
              </div>
              <div className="newsletter-label-container">
                <div className="link-name-wrapper2">
                  <div className="link-name4">Link</div>
                </div>
                <img className="underline-icon42" alt="" src="/underline.svg" />
              </div>
            </div>
            <div className="newsletter-redirect1">
              <div className="chevron-right-small-wrapper17">
                <input
                  className="chevron-right-small34"
                  type="radio"
                  name="radioGroup-2"
                />
              </div>
              <div className="frame-parent45">
                <div className="text-wrapper17">
                  <div className="text35">Link</div>
                </div>
                <img className="underline-icon43" alt="" src="/underline.svg" />
              </div>
            </div>
          </div>
          <div className="empty-link">
            <div className="chevron-right-small-wrapper18">
              <input
                className="chevron-right-small35"
                type="radio"
                name="radioGroup-2"
              />
            </div>
            <div className="empty-label">
              <div className="link-name-wrapper3">
                <div className="link-name5">Link</div>
              </div>
              <img className="underline-icon44" alt="" src="/underline.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className="copyright2">
        <div className="rentifi-all-rights4">
          © 2023 Rentifi. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default ServiceLinks;
