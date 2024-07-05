import { FunctionComponent } from "react";
import ServiceCard1 from "./ServiceCard1";
import ServiceCardSecond from "./ServiceCardSecond";
import ServiceCard from "./ServiceCard";
import "./ServiceCards.css";

export type ServiceCardsType = {
  className?: string;
};

const ServiceCards: FunctionComponent<ServiceCardsType> = ({
  className = "",
}) => {
  return (
    <div className={`service-cards ${className}`}>
      <ServiceCard1 />
      <ServiceCardSecond />
      <ServiceCard />
    </div>
  );
};

export default ServiceCards;
