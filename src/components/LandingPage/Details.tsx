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
    <div className={`details ${className}`}>
      <div className="grid">
        <div className="column">
          <img
            src={graphic}
            alt="Marketing related graphic"
            className="marketing-image"
          />
          <Item items={itemsData.slice(0, 3)} />
        </div>
      </div>
      <Item items={itemsData.slice(3)} propPadding="24px 0px 0px" />
    </div>
  );
};

export default Details;
