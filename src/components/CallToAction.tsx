import { FunctionComponent } from "react";
import "./CallToAction.css";

export type CallToActionType = {
  className?: string;
};

const CallToAction: FunctionComponent<CallToActionType> = ({
  className = "",
}) => {
  return (
    <div className={`call-to-action1 ${className}`}>
      <div className="cta-background2" />
      <div className="cta-content1">
        <h2 className="a-big-line">
          A BIG LINE ON ANY OF THE PRODUCT (SEO/GRAPHIC/DIGITAL MARKETING)
        </h2>
      </div>
      <div className="youve-put-in1">
        You've put in the effort to build your business. We're committed to
        helping your business thrive online.
      </div>
      <div className="cta-buttons">
        <div className="button-container1">
          <div className="button-container-item" />
          <div className="book-consultation">Book Consultation</div>
        </div>
        <div className="button-container2">
          <div className="button-container-inner" />
          <div className="explore-pricing">Explore Pricing</div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
