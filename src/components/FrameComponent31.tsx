import { FunctionComponent } from "react";
import "./FrameComponent31.css";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  className = "",
}) => {
  return (
    <div className={`rectangle-parent4 ${className}`}>
      <div className="frame-child7" />
      <div className="ellipse-container">
        <div className="frame-child8" />
      </div>
      <div className="hi-im-surbhi-parent">
        <h3 className="hi-im-surbhi-container1">
          <span>Hi I’m</span>
          <span className="surbhi1"> Surbhi</span>
        </h3>
        <div className="designation2">Designation</div>
      </div>
      <div className="paragraph-container">
        <div className="paragraph11">Paragraph</div>
      </div>
      <div className="filled10" />
      <div className="filled11" />
    </div>
  );
};

export default FrameComponent3;
