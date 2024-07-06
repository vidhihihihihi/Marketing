import { FunctionComponent, CSSProperties } from "react";
import "./ServiceCards.css";

export type ServiceCardType = {
  className?: string;
  serviceText: string;
  paragraphText: string;
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
  serviceText,
  paragraphText,
}) => {
  return (
    <div className={`service-card ${className}`}>
      <div className="card-content">
        <div className="icon-placeholder" />
        <div className="text-content">
          <b className="service-text">{serviceText}</b>
          <p className="paragraph-text">{paragraphText}</p>
        </div>
      </div>
    </div>
  );
};

export type ServiceCardsType = {
  className?: string;
};

const ServiceCards: FunctionComponent<ServiceCardsType> = ({
  className = "",
}) => {
  return (
    <div className={`service-cards ${className}`}>
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
      <ServiceCard serviceText="Service" paragraphText="Paragraph" />
    </div>
  );
};

export default ServiceCards;
