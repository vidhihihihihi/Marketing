import { FunctionComponent } from "react";
import "./PrimaryLinks.css";

export type PrimaryLinksType = {
  className?: string;
};

const PrimaryLinks: FunctionComponent<PrimaryLinksType> = ({
  className = "",
}) => {
  return (
    <div className={`primary-links ${className}`}>
      <div className="primary-header">
        <div className="important-links4">Important Links</div>
      </div>
      <div className="primary-items">
        <div className="primary-item">
          <div className="primary-link">
            <img
              className="chevron-right-small-icon6"
              alt=""
              src="/chevron-right-small.svg"
            />
          </div>
          <div className="primary-label">
            <div className="link-name-wrapper">
              <div className="link-name">Link</div>
            </div>
            <img className="underline-icon36" alt="" src="/underline.svg" />
          </div>
        </div>
        <div className="primary-item1">
          <div className="chevron-right-small-wrapper11">
            <img
              className="chevron-right-small-icon7"
              alt=""
              src="/chevron-right-small.svg"
            />
          </div>
          <div className="frame-parent43">
            <div className="text-wrapper15">
              <div className="text33">Link</div>
            </div>
            <img className="underline-icon37" alt="" src="/underline.svg" />
          </div>
        </div>
      </div>
      <div className="secondary-link">
        <div className="chevron-right-small-wrapper12">
          <img
            className="chevron-right-small-icon8"
            alt=""
            src="/chevron-right-small.svg"
          />
        </div>
        <div className="secondary-label">
          <div className="link-name-container">
            <div className="link-name1">Link</div>
          </div>
          <img className="underline-icon38" alt="" src="/underline.svg" />
        </div>
      </div>
    </div>
  );
};

export default PrimaryLinks;
