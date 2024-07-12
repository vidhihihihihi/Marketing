import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./AboutMission.css";
import missionGraphic from "./mission_graphic.png";

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
            <p className="section-paragraph">
            At Marketing DNA, our mission is to empower businesses by providing 
            innovative and effective digital marketing solutions that drive growth 
            and success. As a women-led company, we are committed to fostering diversity, 
            creativity, and collaboration, ensuring that every client's unique needs are 
            met with tailored strategies that reflect their brand's DNA.
             
            </p>
          </div>
          <div className="values-section">
            <div className="section-header">
              <div className="header-line" />
              <h3 className="section-title">Values</h3>
            </div>
            <p className="section-paragraph">
            Our vision is to be the leading digital marketing agency 
            that champions the power of diversity and inclusivity in 
            the marketing industry. We aspire to create a future where businesses 
            of all sizes can thrive in the digital landscape, supported by cutting-edge 
            marketing techniques and a team of passionate, creative professionals. 
            By continuously pushing the boundaries of what's possible, we aim to set 
            new standards in digital marketing excellence and make a positive impact on the global business community.
            </p>
          </div>
          <div className="journey-section">
            <Link to="/contact-us-page" className="journey-link">
              <p className="journey-text">Let's Start Your Journey →</p>
            </Link>
          </div>
        </div>
        <div className="graphic-section">
          <img src={missionGraphic} alt="Mission Graphic" className="graphic-image" />
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
