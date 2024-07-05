import { FunctionComponent } from "react";
import "./FrameComponent2.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <section className={`about-content-wrapper ${className}`}>
      <div className="about-content">
        <div className="about-intro">
          <textarea
            className="about-intro-child"
            placeholder="Video showing Who We’re
"
            rows={15}
            cols={25}
          />
          <div className="about-details">
            <div className="frame-container">
              <div className="rectangle-group">
                <div className="frame-inner" />
                <div className="who-were">Who We’re</div>
              </div>
              <div className="about-paragraph-wrapper">
                <div className="about-paragraph">
                  <div className="about-paragraph-content">
                    <div className="a-paragraph">A paragraph</div>
                  </div>
                  <div className="read-more-button">
                    <div className="read-more-button-child" />
                    <div className="read-more">Read More</div>
                  </div>
                </div>
              </div>
              <div className="services-title">
                <h2 className="what-we-do">What We Do?</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="about-separator">
          <div className="about-separator-left-parent">
            <img
              className="about-separator-left"
              alt=""
              src="/about-separator-left.svg"
            />
            <img
              className="about-separator-right"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
