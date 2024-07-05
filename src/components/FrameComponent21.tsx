import { FunctionComponent } from "react";
import "./FrameComponent21.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent5 ${className}`}>
      <div className="frame-child9" />
      <div className="ellipse-frame">
        <div className="frame-child10" />
      </div>
      <div className="hi-im-surbhi-group">
        <h3 className="hi-im-surbhi-container2">
          <span>Hi I’m</span>
          <span className="surbhi2"> Surbhi</span>
        </h3>
        <div className="designation3">Designation</div>
      </div>
      <div className="paragraph-frame">
        <div className="paragraph12">Paragraph</div>
      </div>
    </div>
  );
};

export default FrameComponent2;
