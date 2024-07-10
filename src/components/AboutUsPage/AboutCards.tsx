import { FunctionComponent } from "react";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import "./AboutCards.css";

export type AboutCardType = {
  className?: string;
  qualityText: string;
  paragraphText: string;
};

const AboutCard: FunctionComponent<AboutCardType> = ({
  className = "",
  qualityText,
  paragraphText,
}) => {
  const getIconForQuality = (qualityText: string): string => {
    switch (qualityText.toLowerCase()) {
      case "innovative solutions":
        return icon1;
      case "custom strategies":
        return icon2;
      case "data-driven approach":
        return icon3;
      case "targeted campaigns":
        return icon4;
      case "roi optimization":
        return icon5;
      case "brand enhancement":
        return icon6;
      default:
        return ""; 
    }
  };

  const iconSrc = getIconForQuality(qualityText);

  return (
    <div className={`quality-card ${className}`}>
      <div className="card-content">
        {iconSrc && <img src={iconSrc} alt={`${qualityText} icon`} className="quality-icon" />}
        <div className="text-content">
          <b className="quality-text">{qualityText}</b>
          <p className="paragraph-text">{paragraphText}</p>
        </div>
      </div>
    </div>
  );
};

const AboutCards: FunctionComponent = () => {
  const AboutCardsData: AboutCardType[] = [
    { qualityText: "Innovative Solutions", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
    { qualityText: "Custom Strategies", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
    { qualityText: "Data-Driven Approach", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
    { qualityText: "Targeted Campaigns", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
    { qualityText: "ROI Optimization", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
    { qualityText: "Brand Enhancement", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough," },
  ];

  return (
    <div className="quality-cards-container">
      <h2 className="section-heading">Why Choose Marketing DNA?</h2>
      <div className="quality-cards">
        {AboutCardsData.map((card, index) => (
          <AboutCard
            key={index}
            qualityText={card.qualityText}
            paragraphText={card.paragraphText}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCards;