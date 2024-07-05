import { FunctionComponent } from "react";
import ServiceCard1 from "./ServiceCard1";
import ServiceCardSecond from "./ServiceCardSecond";
import ServiceCard from "./ServiceCard";
import "./ServiceCardThird.css";

export type ServiceCardThirdType = {
  className?: string;
};

const ServiceCardThird: FunctionComponent<ServiceCardThirdType> = ({
  className = "",
}) => {
  return (
    <div className={`service-card-third ${className}`}>
      <div className="service-card-instance-third">
        <ServiceCard1 propWidth="unset" propAlignSelf="stretch" />
      </div>
      <ServiceCardSecond propFlex="0.9789" />
      <ServiceCard />
    </div>
  );
};

export default ServiceCardThird;
