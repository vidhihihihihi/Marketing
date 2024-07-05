import { FunctionComponent } from "react";
import "./FrameComponent6.css";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: FunctionComponent<FrameComponent6Type> = ({
  className = "",
}) => {
  return (
    <div className={`team-member-description-conten-wrapper ${className}`}>
      <div className="team-member-description-conten">
        <h3 className="hi-im-surbhi-container">
          <span>Hi I’m</span>
          <span className="surbhi"> Surbhi</span>
        </h3>
        <div className="designation1">Designation</div>
      </div>
    </div>
  );
};

export default FrameComponent6;
