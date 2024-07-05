import { FunctionComponent } from "react";
import "./FrameComponent81.css";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: FunctionComponent<FrameComponent8Type> = ({
  className = "",
}) => {
  return (
    <section className={`job-description-wrapper ${className}`}>
      <div className="job-description">
        <div className="job-description-content">
          <div className="job-opening-details">Job Opening Details</div>
        </div>
        <div className="career-form">
          <div className="career-form-child" />
          <div className="form-fields">
            <div className="name-and-phone">
              <div className="name-phone-inputs">
                <div className="name-phone-fields">
                  <img
                    className="rectangle-56-stroke1"
                    alt=""
                    src="/rectangle-56-stroke.svg"
                  />
                  <img
                    className="first-name-icon1"
                    loading="lazy"
                    alt=""
                    src="/first-name.svg"
                  />
                </div>
              </div>
              <div className="name-phone-inputs1">
                <div className="rectangle-58-stroke-parent">
                  <img
                    className="rectangle-58-stroke1"
                    alt=""
                    src="/rectangle-56-stroke.svg"
                  />
                  <img
                    className="phone-icon1"
                    loading="lazy"
                    alt=""
                    src="/phone1.svg"
                  />
                </div>
              </div>
            </div>
            <div className="email-and-company">
              <div className="email-company-fields">
                <div className="email-field">
                  <div className="email-input1">
                    <img
                      className="rectangle-57-stroke1"
                      alt=""
                      src="/rectangle-56-stroke.svg"
                    />
                    <img
                      className="email-icon1"
                      loading="lazy"
                      alt=""
                      src="/email1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="company-field">
                <img
                  className="rectangle-59-stroke1"
                  alt=""
                  src="/rectangle-56-stroke.svg"
                />
                <div className="current-company">Current Company</div>
              </div>
            </div>
          </div>
          <div className="experience-question-wrapper">
            <div className="experience-question">
              <div className="how-many-years">
                How many years of experience do you have?
              </div>
              <div className="experience-options">
                <div className="experience-buttons">
                  <div className="experience-button-pairs">
                    <div className="frame-parent26">
                      <input className="frame-input" type="checkbox" />
                      <div className="option-1">Option 1</div>
                    </div>
                    <div className="frame-parent27">
                      <input className="frame-input1" type="checkbox" />
                      <div className="option-11">Option 1</div>
                    </div>
                  </div>
                  <div className="experience-button-pairs1">
                    <div className="frame-parent28">
                      <input className="frame-input2" type="checkbox" />
                      <div className="option-12">Option 1</div>
                    </div>
                    <div className="frame-parent29">
                      <input className="frame-input3" type="checkbox" />
                      <div className="option-13">Option 1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-upload">
            <div className="resume-field">
              <div className="resume-label">
                <div className="resumecv">Resume/CV*</div>
              </div>
              <div className="upload-button-parent">
                <div className="upload-button">
                  <div className="upload-content">
                    <div className="upload">{`UPLOAD `}</div>
                  </div>
                  <img
                    className="upload-button-child"
                    loading="lazy"
                    alt=""
                    src="/rectangle-69.svg"
                  />
                </div>
                <div className="drag-drop-area">
                  <img
                    className="rectangle-68-stroke1"
                    alt=""
                    src="/rectangle-68-stroke1.svg"
                  />
                  <div className="or-drag-files">or drag files here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
