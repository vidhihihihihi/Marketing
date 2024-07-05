import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./Item.css";

export type ItemType = {
  className?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const Item: FunctionComponent<ItemType> = ({ className = "", propPadding }) => {
  const itemStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={`item ${className}`} style={itemStyle}>
      <div className="highlights">
        <div className="list">
          <div className="highlight">
            <div className="icon" />
            <div className="container2">
              <div className="usp">USP</div>
            </div>
          </div>
        </div>
        <div className="list1">
          <div className="list-child" />
          <div className="description">
            <div className="usp1">USP</div>
          </div>
        </div>
        <div className="list2">
          <div className="list-item" />
          <div className="usp-wrapper">
            <div className="usp2">USP</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
