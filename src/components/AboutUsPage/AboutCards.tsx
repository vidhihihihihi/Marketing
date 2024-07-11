import { FunctionComponent } from "react";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import "./AboutCards.css";

const icons = [icon1, icon2, icon3, icon4, icon5, icon6];

export type AboutCardType = {
  className?: string;
  qualityText: string;
  paragraphText: string;
  iconIndex: number; // New property to specify which icon to use
};

export type AboutCardsProps = {
  sectionHeading: string;
  cards: AboutCardType[];
};

const AboutCard: FunctionComponent<AboutCardType> = ({
  className = "",
  qualityText,
  paragraphText,
  iconIndex,
}) => {
  const iconSrc = icons[iconIndex % icons.length]; // Use modulo to ensure we always have a valid icon

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

const AboutCards: FunctionComponent<AboutCardsProps> = ({ sectionHeading, cards }) => {
  return (
    <div className="quality-cards-container">
      <h2 className="section-heading">{sectionHeading}</h2>
      <div className="quality-cards">
        {cards.map((card, index) => (
          <AboutCard
            key={index}
            qualityText={card.qualityText}
            paragraphText={card.paragraphText}
            iconIndex={card.iconIndex}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutCards;