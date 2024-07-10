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
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
            </p>
          </div>
          <div className="values-section">
            <div className="section-header">
              <div className="header-line" />
              <h3 className="section-title">Values</h3>
            </div>
            <p className="section-paragraph">
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
              Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph.
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
