import { FunctionComponent } from "react";
import ExampleItem from "./ExampleItem";
import "./FrameComponent9.css";

export type FrameComponent9Type = {
  className?: string;
};

const FrameComponent9: FunctionComponent<FrameComponent9Type> = ({
  className = "",
}) => {
  return (
    <section className={`submission-options-wrapper ${className}`}>
      <div className="submission-options">
        <div className="submission-option">
          <div className="idea-submission-card">
            <h3 className="idea-submission">Idea Submission</h3>
            <div className="paragraph22">Paragraph</div>
            <b className="click-here">Click Here</b>
          </div>
        </div>
        <div className="example-card-parent">
          <div className="example-card">
            <img
              className="example-icon"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <h3 className="read-through-our">Read Through Our Top Examples</h3>
          </div>
          <div className="example-list">
            <ExampleItem />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
