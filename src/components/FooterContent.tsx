import { FunctionComponent } from "react";
import "./FooterContent.css";

export type FooterContentType = {
  className?: string;
};

const FooterContent: FunctionComponent<FooterContentType> = ({
  className = "",
}) => {
  return (
    <div className={`footer-content5 ${className}`}>
      <div className="footer-top1">
        <div className="rectangle-parent14">
          <div className="frame-child28" />
          <div className="logo10">Logo</div>
        </div>
        <div className="social-media-icon">
          <img
            className="image-7-icon10"
            loading="lazy"
            alt=""
            src="/image-7-11@2x.png"
          />
          <div className="social-media-name">
            <div className="social-media-handle-container">
               
              <a className="a13" href="tel:+918088698016" target="_blank">
                <span className="span10">+918088698016</span>
              </a>
            </div>
          </div>
        </div>
        <div className="social-media-icon1">
          <img
            className="image-8-icon5"
            loading="lazy"
            alt=""
            src="/image-81@2x.png"
          />
          <div className="social-media-name1">
            <div className="assistmarketingdnain17">
               
              <a
                className="assistmarketingdnain18"
                href="mailto:assist@eterior.in"
                target="_blank"
              >
                <span className="assistmarketingdnain19">
                  assist@marketingdna.in
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="social-media-icons1">
          <div className="social-media-icon-placeholders" />
          <div className="social-media-icon-placeholder">
            <div className="social-media-icon-placeholder1" />
          </div>
          <div className="social-media-icon-placeholders1" />
          <div className="social-media-icon-placeholders2" />
        </div>
      </div>
    </div>
  );
};

export default FooterContent;