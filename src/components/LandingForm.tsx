import { FunctionComponent } from "react";
import "./LandingForm.css";

export type LandingFormType = {
  className?: string;
};

const LandingForm: FunctionComponent<LandingFormType> = ({
  className = "",
}) => {
  return (
    <section className={`form-wrapper ${className}`}>
      <div className="form">
        <div className="background1" />
        <div className="header1">
          <div className="container7">
            <div className="icon1" />
            <div className="talk-to-digital">
              Talk to Digital marketing Experts
            </div>
          </div>
        </div>
        <div className="content3">
          <div className="grid1">
            <div className="row">
              <div className="fields">
                <div className="pair">
                  <div className="name-input">
                    <img
                      className="rectangle-56-stroke"
                      alt=""
                      src="/rectangle-56-stroke.svg"
                    />
                    <img
                      className="first-name-icon"
                      alt=""
                      src="/first-name.svg"
                    />
                  </div>
                </div>
                <div className="pair1">
                  <div className="rectangle-57-stroke-parent">
                    <img
                      className="rectangle-57-stroke"
                      alt=""
                      src="/rectangle-56-stroke.svg"
                    />
                    <img
                      className="website-icon"
                      loading="lazy"
                      alt=""
                      src="/website.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="website-input">
                <div className="website-field">
                  <div className="website-placeholder-wrapper">
                    <div className="website-placeholder">
                      <img
                        className="rectangle-58-stroke"
                        alt=""
                        src="/rectangle-56-stroke.svg"
                      />
                      <img className="email-icon" alt="" src="/email.svg" />
                    </div>
                  </div>
                  <div className="email-input">
                    <div className="email-options">
                      <img
                        className="what-are-you-looking-for"
                        loading="lazy"
                        alt=""
                        src="/what-are-you-looking-for.svg"
                      />
                      <div className="email-choices">
                        <input
                          className="rectangle-62-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-1-icon"
                          loading="lazy"
                          alt=""
                          src="/option-1.svg"
                        />
                      </div>
                      <div className="email-choices1">
                        <input
                          className="rectangle-63-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-2-icon"
                          loading="lazy"
                          alt=""
                          src="/option-2.svg"
                        />
                      </div>
                      <div className="email-choices2">
                        <input
                          className="rectangle-64-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-3-icon"
                          loading="lazy"
                          alt=""
                          src="/option-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone-input">
                  <div className="phone-field">
                    <div className="rectangle-59-stroke-parent">
                      <img
                        className="rectangle-59-stroke"
                        alt=""
                        src="/rectangle-56-stroke.svg"
                      />
                      <img className="phone-icon" alt="" src="/phone.svg" />
                    </div>
                  </div>
                  <div className="inquiry-type-input">
                    <div className="inquiry-type-options">
                      <div className="inquiry-type-choices">
                        <input
                          className="rectangle-65-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-4-icon"
                          loading="lazy"
                          alt=""
                          src="/option-4.svg"
                        />
                      </div>
                      <div className="inquiry-type-choices1">
                        <input
                          className="rectangle-66-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-5-icon"
                          loading="lazy"
                          alt=""
                          src="/option-5.svg"
                        />
                      </div>
                      <div className="inquiry-type-choices2">
                        <input
                          className="rectangle-67-stroke"
                          type="checkbox"
                        />
                        <img
                          className="option-6-icon"
                          loading="lazy"
                          alt=""
                          src="/option-6.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="message-input">
            <div className="message-field">
              <div className="rectangle-68-stroke-parent">
                <img
                  className="rectangle-68-stroke"
                  alt=""
                  src="/rectangle-68-stroke.svg"
                />
                <img
                  className="message-icon"
                  loading="lazy"
                  alt=""
                  src="/message.svg"
                />
              </div>
            </div>
            <div className="submit-button">
              <div className="submit-button-container">
                <img
                  className="submit-button-container-child"
                  loading="lazy"
                  alt=""
                  src="/rectangle-27.svg"
                />
                <div className="send-message">Send Message</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingForm;
