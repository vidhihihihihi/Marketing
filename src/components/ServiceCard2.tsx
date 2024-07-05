import { FunctionComponent } from "react";
import "./ServiceCard2.css";

export type ServiceCardType = {
  className?: string;
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
}) => {
  return (
    <div className={`service-card5 ${className}`}>
      <div className="card-isolated-media-top5">
        <div className="card-isolated-media-top-child">
          <div className="frame-child12" />
        </div>
        <div className="card-element-line-item-container">
          <div className="card-element-line-item15">
            <div className="signed-by-base-card-element-15" />
            <div className="paragraph19">Quality</div>
          </div>
          <div className="card-element-line-item16">
            <div className="signed-by-base-card-element-16" />
            <div className="paragraph20">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate10" />
      <div className="signed-by-base-card-isolate11" />
      <div className="card-element-line-item17">
        <div className="signed-by-base-card-element-17" />
        <b className="furniture5">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard;
