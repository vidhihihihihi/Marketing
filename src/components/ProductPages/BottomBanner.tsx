import { FunctionComponent } from "react";
import "./BottomBanner.css";

export type BottomBannerType = {
  className?: string;
};

const BottomBanner: FunctionComponent<BottomBannerType> = ({
  className = "",
}) => {
  return (
    <div className={`bottom-banner ${className}`}>
      <div className="banner2">
        <div className="banner-inner" />
        <h2 className="ready-to-save">Ready to save money and get results?</h2>
        <h3 className="one-liner">One liner</h3>
        <div className="bottom-banner-button-container">
          <div className="bottom-banner-button">
            <img
              className="bottom-banner-button-child"
              alt=""
              src="/rectangle-273.svg"
            />
            <div className="click-here-to">Click Here To Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
