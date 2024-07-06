import { FunctionComponent } from "react";
import Item from "./Item";
import "./Details.css";

export type DetailsType = {
  className?: string;
};

const Details: FunctionComponent<DetailsType> = ({ className = "" }) => {
  return (
    <div className={`details ${className}`}>
      <div className="grid">
        <div className="column">
          <textarea
            className="item1"
            placeholder="Graphic related to Marketing "
            rows={18}
            cols={30}
          />
          <Item />
        </div>

      </div>
      <Item propPadding="24px 0px 0px" />
    </div>
  );
};

export default Details;
