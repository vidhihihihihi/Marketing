import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import "./FrameComponent41.css";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: FunctionComponent<FrameComponent4Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent10 ${className}`}>
      <div className="frame-child20" />
      <div className="team-member-image-wrapper">
        <div className="team-member-image" />
      </div>
      <FrameComponent6 />
      <div className="paragraph17">Paragraph</div>
      <div className="filled21" />
    </div>
  );
};

export default FrameComponent4;