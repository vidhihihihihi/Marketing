import { FunctionComponent } from "react";
import Item from "./Item";
import graphic from "./graphic.png";
import "./Details.css";

const itemsData = [
  { icon: "icon1", text: "Comprehensive Services" },
  { icon: "icon2", text: "Client-centric Approach" },
  { icon: "icon3", text: "Transparent Process" },
  { icon: "icon4", text: "Measurable Results" },
  { icon: "icon5", text: "Professional Commitment" },
  { icon: "icon6", text: "Guarenteed ROI" }
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