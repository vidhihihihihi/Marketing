import { FunctionComponent } from "react";
import "./FrameComponent61.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={`frame-parent49 ${className}`}>
      <div className="rectangle-parent14">
        <div className="frame-child27" />
        <div className="logo9">Logo</div>
      </div>
      <div className="brand-icon">
        <img
          className="image-7-icon9"
          loading="lazy"
          alt=""
          src="/image-7-11@2x.png"
        />
        <div className="brand-icon-label">
          <div className="div1">
             
            <a className="a11" href="tel:+918088698016" target="_blank">
              <span className="span9">+918088698016</span>
            </a>
          </div>
        </div>
      </div>
      <div className="contact-icon">
        <img
          className="image-8-icon5"
          loading="lazy"
          alt=""
          src="/image-81@2x.png"
        />
        <div className="contact-icon-label">
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
      <div className="social-icons">
        <div className="social-icon-shapes" />
        <div className="social-icon-container">
          <div className="social-icon-shape" />
        </div>
        <div className="social-icon-shapes1" />
        <div className="social-icon-shapes2" />
      </div>
    </div>
  );
};

export default FrameComponent6;
