import { FunctionComponent } from "react";
import "./FrameComponent31.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent11 ${className}`}>
      <div className="frame-child21" />
      <div className="ellipse-container">
        <div className="frame-child22" />
      </div>
      <div className="hi-im-surbhi-parent">
        <h3 className="hi-im-surbhi-container1">
          <span>Hi I’m</span>
          <span className="surbhi1"> Surbhi</span>
        </h3>
        <div className="designation3">Designation</div>
      </div>
      <div className="paragraph-container">
        <div className="paragraph18">Paragraph</div>
      </div>
      <div className="filled22" />
      <div className="filled23" />
    </div>
  );
};

export default FrameComponent3;