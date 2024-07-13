import { FunctionComponent, useMemo, type CSSProperties } from "react";
import icon1 from "./icon1.png";
import icon2 from "./icon2.png";
import icon3 from "./icon3.png";
import icon4 from "./icon4.png";
import icon5 from "./icon5.png";
import icon6 from "./icon6.png";
import "./Item.css";

const iconMap: { [key: string]: string } = {
  icon1, icon2, icon3, icon4, icon5, icon6
};

export type ItemType = {
  className?: string;
  propPadding?: CSSProperties["padding"];
  items: Array<{ icon: string; text: string }>;
};

const Item: FunctionComponent<ItemType> = ({ className = "", propPadding, items }) => {
  const itemStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`item ${className}`} style={itemStyle}>
      <div className="highlights">
        {items.map((item, index) => (
          <div key={index} className="list">
            <div className="highlight">
              <img src={iconMap[item.icon]} alt={`Icon ${index + 1}`} className="icon" />

                <div className="usp">{item.text}</div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Item;