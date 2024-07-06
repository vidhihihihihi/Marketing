
import { FunctionComponent } from "react";
import "./AboutMission.css";

export type AboutMissionType = {
  className?: string;
};

const AboutMission: FunctionComponent<AboutMissionType> = ({
  className = "",
}) => {
  return (
    <section className={`mission-values-wrapper ${className}`}>
      <div className="mission-values">
        <div className="mission-values-content">
          <div className="mission-section">
            <div className="section-header">
              <div className="header-line" />
              <h3 className="section-title">Our Mission</h3>
            </div>
            <p className="section-paragraph">Paragraph</p>
          </div>
          <div className="values-section">
            <div className="section-header">
              <div className="header-line" />
              <h3 className="section-title">Values</h3>
            </div>
            <p className="section-paragraph">Paragraph</p>
          </div>
          <div className="journey-section">
            <p className="journey-text">Let's Start Your Journey →</p>
            <div className="journey-line" />
          </div>
        </div>
        <div className="graphic-section">
          <div className="vertical-line" />
          <div className="graphic-text">Graphic</div>
        </div>
      </div>
    </section>
  );
};

export default AboutMission;