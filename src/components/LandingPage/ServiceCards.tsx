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
    { serviceText: "Digital Marketing", paragraphText: "Our comprehensive digital marketing services encompass everything from strategy development to execution, ensuring your brand reaches its full potential online. We create integrated campaigns that drive traffic, increase engagement, and boost conversions.", linkTo: "/digital-marketing" },
    { serviceText: "SEO Service", paragraphText: "Boost your online visibility and attract more organic traffic with our expert SEO services. We optimize your website to rank higher in search engine results, ensuring your target audience finds you easily.", linkTo: "/seo-service" },
    { serviceText: "Social Media Marketing", paragraphText: "Engage with your audience and build a strong online presence through our targeted social media marketing strategies. We create compelling content and manage your social media profiles to enhance brand awareness and foster customer loyalty.", linkTo: "/social-media-marketing" },
    { serviceText: "Analytics & Tracking", paragraphText: "Make data-driven decisions with our comprehensive analytics and tracking services. We provide detailed insights into your marketing performance, helping you understand what works and how to optimize your strategies for better results.", linkTo: "/analytics-&-tracking" },
    { serviceText: "Web Designing", paragraphText: "Create a stunning and user-friendly online presence with our professional web design services. We design visually appealing and intuitive websites that reflect your brand’s identity and provide an exceptional user experience.", linkTo: "/other-services" },
    { serviceText: "Web Development", paragraphText: "Bring your website to life with our robust web development services. We build functional, responsive, and scalable websites using the latest technologies to ensure optimal performance and security.", linkTo: "/other-services" },
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
