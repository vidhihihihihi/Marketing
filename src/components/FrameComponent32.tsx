import { FunctionComponent } from "react";
import "./FrameComponent32.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={`client-logo-header-wrapper ${className}`}>
      <div className="client-logo-header">
        <div className="client-logo-title">
          <h2 className="glimpse-of-clients">Glimpse Of Clients</h2>
        </div>
        <div className="client-logo-container">
          <div className="client-logo-image-wrapper">
            <textarea className="client-logo-image" rows={11} cols={13} />
          </div>
          <textarea
            className="client-logo-container-child"
            rows={11}
            cols={13}
          />
          <textarea
            className="client-logo-container-item"
            rows={11}
            cols={13}
          />
          <div className="client-logo-navigation">
            <div className="client-logo-navigation-buttons">
              <div className="client-logo-nav-button" />
              <div className="vector-container">
                <img className="vector-icon17" alt="" src="/vector-71.svg" />
                <img
                  className="vector-icon18"
                  loading="lazy"
                  alt=""
                  src="/vector-81.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
