import { FunctionComponent } from "react";
import "./FrameComponent22.css";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: FunctionComponent<FrameComponent2Type> = ({
  className = "",
}) => {
  return (
    <div className={`testimonial-header-wrapper ${className}`}>
      <div className="testimonial-header">
        <div className="what-our-clients-says-wrapper">
          <h2 className="what-our-clients1">What our Clients Says</h2>
        </div>
        <div className="testimonial-slider">
          <div className="testimonial-cards">
            <div className="testimonial-card">
              <div className="testimonial-navigation">
                <img className="vector-icon19" alt="" src="/vector-2.svg" />
                <img
                  className="vector-icon20"
                  loading="lazy"
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
              <div className="testimonial-card-nav">
                <img className="vector-icon21" alt="" src="/vector-4.svg" />
                <img
                  className="vector-icon22"
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
            </div>
            <div className="testimonial-content">
              <div className="testimonial-author">
                <div className="author-image" />
                <h1 className="name1">Name</h1>
                <h2 className="designation4">Designation</h2>
              </div>
              <div className="testimonial-image" />
            </div>
          </div>
        </div>
        <div className="frame-parent42">
          <div className="testimonial-content-wrapper-wrapper">
            <textarea
              className="testimonial-content-wrapper"
              placeholder="Testimonials"
              rows={13}
              cols={23}
            />
          </div>
          <div className="testimonial-dots">
            <div className="testimonial-active-dot" />
            <div className="testimonial-dot" />
            <div className="testimonial-dot1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
