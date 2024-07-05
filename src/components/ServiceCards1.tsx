import { FunctionComponent } from "react";
import ServiceCard1 from "./ServiceCard1";
import ServiceCardTwo from "./ServiceCardTwo";
import ServiceCard from "./ServiceCard";
import "./ServiceCards1.css";

export type ServiceCardsType = {
  className?: string;
};

const ServiceCards: FunctionComponent<ServiceCardsType> = ({
  className = "",
}) => {
  return (
    <div className={`service-cards1 ${className}`}>
      <div className="card-row">
        <div className="service-card-one">
          <ServiceCard1 />
          <ServiceCardTwo />
          <ServiceCard />
        </div>
        <div className="service-card-three">
          <div className="card-content-three">
            <ServiceCard1 propWidth="unset" propAlignSelf="stretch" />
          </div>
          <ServiceCardTwo propFlex="0.9789" />
          <ServiceCard />
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
