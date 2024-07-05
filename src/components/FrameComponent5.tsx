import { FunctionComponent } from "react";
import FrameComponent6 from "./FrameComponent6";
import "./FrameComponent5.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent2 ${className}`}>
      <div className="frame-child4" />
      <div className="frame-child5" />
      <div className="ellipse-wrapper">
        <div className="ellipse-div" />
      </div>
      <FrameComponent6 />
      <div className="paragraph9">Paragraph</div>
    </div>
  );
};

export default FrameComponent5;
