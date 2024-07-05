import { FunctionComponent } from "react";
import "./ServiceCard3.css";

export type ServiceCardType = {
  className?: string;
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
}) => {
  return (
    <div className={`service-card8 ${className}`}>
      <div className="card-isolated-media-top8">
        <div className="card-isolated-media-top-inner1">
          <div className="frame-child22" />
        </div>
        <div className="card-element-line-item-parent1">
          <div className="card-element-line-item24">
            <div className="signed-by-base-card-element-24" />
            <div className="paragraph27">Service</div>
          </div>
          <div className="card-element-line-item25">
            <div className="signed-by-base-card-element-25" />
            <div className="paragraph28">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate16" />
      <div className="signed-by-base-card-isolate17" />
      <div className="card-element-line-item26">
        <div className="signed-by-base-card-element-26" />
        <b className="furniture8">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard;
