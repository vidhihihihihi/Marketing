import { FunctionComponent } from "react";
import "./ServiceCard.css";

export type ServiceCardType = {
  className?: string;
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
}) => {
  return (
    <div className={`service-card2 ${className}`}>
      <div className="card-isolated-media-top2">
        <div className="card-isolated-media-top-inner">
          <div className="frame-item" />
        </div>
        <div className="card-element-line-item-parent">
          <div className="card-element-line-item6">
            <div className="signed-by-base-card-element-6" />
            <div className="paragraph4">Service</div>
          </div>
          <div className="card-element-line-item7">
            <div className="signed-by-base-card-element-7" />
            <div className="paragraph5">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate4" />
      <div className="signed-by-base-card-isolate5" />
      <div className="card-element-line-item8">
        <div className="signed-by-base-card-element-8" />
        <b className="furniture2">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard;
