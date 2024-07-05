import { FunctionComponent } from "react";
import "./FrameComponent11.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`mission-values-wrapper ${className}`}>
      <div className="mission-values">
        <img className="mission-values-child" alt="" src="/rectangle-69.svg" />
        <div className="mission-values-container">
          <div className="frame-parent9">
            <div className="frame-parent10">
              <div className="mission-icon-parent">
                <div className="mission-icon" />
                <h3 className="our-mission">Our Mission</h3>
              </div>
              <div className="paragraph13">Paragraph</div>
            </div>
            <div className="rectangle-parent6">
              <div className="frame-child11" />
              <div className="values-parent">
                <h3 className="values">Values</h3>
                <div className="paragraph14">Paragraph</div>
              </div>
            </div>
            <div className="lets-start-your-journey-parent">
              <div className="lets-start-your">{`Let’s Start Your Journey ->`}</div>
              <div className="journey-button" />
            </div>
          </div>
        </div>
        <div className="values-graphic-parent">
          <img
            className="values-graphic-icon"
            loading="lazy"
            alt=""
            src="/vector-7.svg"
          />
          <div className="graphic-wrapper">
            <div className="graphic">Graphic</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
