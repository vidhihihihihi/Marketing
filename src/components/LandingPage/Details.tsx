import { FunctionComponent } from "react";
import Item from "./Item";
import graphic from "./graphic.png";
import "./Details.css";

const itemsData = [
  { icon: "icon1", text: "Innovative Solutions" },
  { icon: "icon2", text: "Custom Strategies" },
  { icon: "icon3", text: "Data-Driven Approach" },
  { icon: "icon4", text: "Targeted Campaigns" },
  { icon: "icon5", text: "ROI Optimization" },
  { icon: "icon6", text: "Brand Enhancement" }
];

export type DetailsType = {
  className?: string;
};

const Details: FunctionComponent<DetailsType> = ({ className = "" }) => {
  return (
    <div className={`details-new ${className}`}>
      <div className="image-container">
        <img
          src={graphic}
          alt="Marketing related graphic"
          className="marketing-image"
        />
      </div>
      <div className="qualitynew-content-container">
        <div className="columnnew">
          <Item items={itemsData.slice(0, 3)} />
        </div>
        <div className="columnnew">
          <Item items={itemsData.slice(3)} />
        </div>
      </div>
    </div>
  );
};

export default Details;