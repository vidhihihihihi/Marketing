import { FunctionComponent } from "react";
import "./FrameComponent13.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <div className={`form-container ${className}`}>
      <div className="form1">
        <div className="form-background" />
        <div className="form-heading">
          <div className="form-title">
            <div className="fill-out-the-form-wrapper">
              <h2 className="fill-out-the">Fill out the form</h2>
            </div>
            <div className="form-subtitle">
              <div className="form-subtitle-child" />
              <div className="to-receive-a">
                to receive a digital marketing consultation
              </div>
            </div>
          </div>
        </div>
        <div className="form-fields1">
          <div className="name-field">
            <div className="name-input1">
              <div className="name-wrapper">
                <img
                  className="rectangle-56-stroke2"
                  alt=""
                  src="/rectangle-56-stroke.svg"
                />
                <img
                  className="first-name-icon2"
                  alt=""
                  src="/first-name.svg"
                />
              </div>
            </div>
            <div className="name-input2">
              <div className="rectangle-57-stroke-group">
                <img
                  className="rectangle-57-stroke2"
                  alt=""
                  src="/rectangle-56-stroke.svg"
                />
                <img
                  className="website-icon1"
                  loading="lazy"
                  alt=""
                  src="/website.svg"
                />
              </div>
            </div>
          </div>
          <div className="email-website">
            <div className="email-field1">
              <div className="email-input2">
                <div className="email-wrapper">
                  <img
                    className="rectangle-58-stroke2"
                    alt=""
                    src="/rectangle-56-stroke.svg"
                  />
                  <img className="email-icon2" alt="" src="/email.svg" />
                </div>
              </div>
              <div className="service-selection">
                <div className="service-dropdown">
                  <img
                    className="what-are-you-looking-for1"
                    loading="lazy"
                    alt=""
                    src="/what-are-you-looking-for.svg"
                  />
                  <div className="dropdown-options">
                    <input className="rectangle-62-stroke1" type="checkbox" />
                    <img
                      className="option-1-icon1"
                      loading="lazy"
                      alt=""
                      src="/option-1.svg"
                    />
                  </div>
                  <div className="dropdown-options1">
                    <input className="rectangle-63-stroke1" type="checkbox" />
                    <img
                      className="option-2-icon1"
                      loading="lazy"
                      alt=""
                      src="/option-2.svg"
                    />
                  </div>
                  <div className="dropdown-options2">
                    <input className="rectangle-64-stroke1" type="checkbox" />
                    <img
                      className="option-3-icon1"
                      loading="lazy"
                      alt=""
                      src="/option-3.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="phone-business">
              <div className="phone-field1">
                <div className="phone-input1">
                  <img
                    className="rectangle-59-stroke2"
                    alt=""
                    src="/rectangle-56-stroke.svg"
                  />
                  <img className="phone-icon2" alt="" src="/phone.svg" />
                </div>
              </div>
              <div className="phone-options">
                <div className="options-form">
                  <div className="options-fields">
                    <input className="rectangle-65-stroke1" type="checkbox" />
                    <img
                      className="option-4-icon1"
                      loading="lazy"
                      alt=""
                      src="/option-4.svg"
                    />
                  </div>
                  <div className="options-fields1">
                    <input className="rectangle-66-stroke1" type="checkbox" />
                    <img
                      className="option-5-icon1"
                      loading="lazy"
                      alt=""
                      src="/option-5.svg"
                    />
                  </div>
                  <div className="options-fields2">
                    <input className="rectangle-67-stroke1" type="checkbox" />
                    <img
                      className="option-6-icon1"
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
        <div className="message-field-wrapper">
          <div className="message-field1">
            <div className="message-input1">
              <img
                className="rectangle-68-stroke2"
                alt=""
                src="/rectangle-68-stroke.svg"
              />
              <img
                className="message-icon1"
                loading="lazy"
                alt=""
                src="/message.svg"
              />
            </div>
          </div>
        </div>
        <div className="submit-button-wrapper">
          <div className="submit-button1">
            <img
              className="submit-button-child"
              loading="lazy"
              alt=""
              src="/rectangle-27.svg"
            />
            <div className="send-message1">Send Message</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
