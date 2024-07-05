import { FunctionComponent } from "react";
import "./FrameComponent7.css";

export type FrameComponent7Type = {
  className?: string;
};

const FrameComponent7: FunctionComponent<FrameComponent7Type> = ({
  className = "",
}) => {
  return (
    <section className={`about-us-page-inner ${className}`}>
      <div className="frame-parent8">
        <div className="company-overview-image-parent">
          <div className="company-overview-image" />
          <div className="about-our-company-parent">
            <h3 className="about-our-company">About Our Company</h3>
            <div className="paragraph-wrapper">
              <div className="paragraph8">Paragraph</div>
            </div>
          </div>
        </div>
        <div className="meet-our-team-wrapper">
          <h3 className="meet-our-team">Meet Our Team</h3>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
