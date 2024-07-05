import { FunctionComponent } from "react";
import "./FrameComponent42.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={`banner-container ${className}`}>
      <div className="banner1">
        <div className="banner-item" />
        <div className="banner-heading">
          <div className="cta-banner-1">{`CTA Banner ---> Write few lines`}</div>
        </div>
        <div className="banner-button">
          <img
            className="banner-button-child"
            alt=""
            src="/rectangle-272.svg"
          />
          <div className="book-free-consultation-container">
            <p className="book-free-consultation">Book Free Consultation</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
