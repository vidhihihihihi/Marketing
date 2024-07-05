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
    <div className={`rectangle-parent9 ${className}`}>
      <div className="frame-child17" />
      <div className="frame-child18" />
      <div className="ellipse-wrapper">
        <div className="frame-child19" />
      </div>
      <FrameComponent6 />
      <div className="paragraph16">Paragraph</div>
    </div>
  );
};

export default FrameComponent5;