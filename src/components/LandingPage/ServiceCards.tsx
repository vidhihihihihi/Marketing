import { FunctionComponent } from "react";
import { Link } from "react-router-dom"; // Assuming you're using React Router for routing
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import "./ServiceCards.css";

export type ServiceCardType = {
  className?: string;
  serviceText: string;
  paragraphText: string;
  linkTo: string; // New prop for the link URL
};

const ServiceCard: FunctionComponent<ServiceCardType> = ({
  className = "",
  serviceText,
  paragraphText,
  linkTo,
}) => {
  // Function to map serviceText to corresponding icon
  const getIconForService = (serviceText: string): string => {
    switch (serviceText.toLowerCase()) {
      case "digital marketing":
        return icon1;
      case "seo service":
        return icon2;
      case "social media marketing":
        return icon3;
      case "analytics & tracking":
        return icon4;
      case "web designing":
        return icon5;
      case "web development":
        return icon6;
      default:
        return ""; // Default icon or handle as needed
    }
  };

  const iconSrc = getIconForService(serviceText);

  return (
    <Link to={linkTo} className={`service-card ${className}`}>
      <div className="card-content">
        {iconSrc && <img src={iconSrc} alt={`${serviceText} icon`} className="service-icon" />}
        <div className="text-content">
          <b className="service-text">{serviceText}</b>
          <p className="paragraph-text">{paragraphText}</p>
        </div>
      </div>
    </Link>
  );
};

const ServiceCards: FunctionComponent = () => {
  const serviceCardsData: ServiceCardType[] = [
    { serviceText: "Digital Marketing", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/digital-marketing" },
    { serviceText: "SEO Service", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/seo-service" },
    { serviceText: "Social Media Marketing", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/social-media-marketing" },
    { serviceText: "Analytics & Tracking", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/analytics-&-tracking" },
    { serviceText: "Web Designing", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/other-services" },
    { serviceText: "Web Development", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", linkTo: "/other-services" },
  ];

  return (
    <div className="service-cards-container">
      <h2 className="section-heading">What we do</h2>
      <div className="service-cards">
        {serviceCardsData.map((card, index) => (
          <ServiceCard
            key={index}
            serviceText={card.serviceText}
            paragraphText={card.paragraphText}
            linkTo={card.linkTo}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;
