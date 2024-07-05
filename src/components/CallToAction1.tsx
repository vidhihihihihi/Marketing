import { FunctionComponent } from "react";
import "./CallToAction1.css";

export type CallToAction1Type = {
  className?: string;
};

const CallToAction1: FunctionComponent<CallToAction1Type> = ({
  className = "",
}) => {
  return (
    <section className={`call-to-action2 ${className}`}>
      <div className="cta-content2">
        <div className="cta-wrapper">
          <div className="cta-heading">
            <h3 className="message-us">Message Us</h3>
            <div className="talk-to-a">Talk to a Digital Marketing Expert</div>
          </div>
        </div>
        <div className="cta-form">
          <div className="cta-form-child" />
          <div className="form-fields2">
            <div className="name-field1">
              <div className="name-input3">
                <div className="first-name-input">
                  <div className="first-name-container">
                    <img
                      className="rectangle-56-stroke3"
                      alt=""
                      src="/rectangle-56-stroke.svg"
                    />
                    <img
                      className="first-name-icon3"
                      loading="lazy"
                      alt=""
                      src="/first-name.svg"
                    />
                  </div>
                </div>
                <div className="first-name-input1">
                  <div className="rectangle-57-stroke-container">
                    <img
                      className="rectangle-57-stroke3"
                      alt=""
                      src="/rectangle-56-stroke.svg"
                    />
                    <img
                      className="website-icon2"
                      loading="lazy"
                      alt=""
                      src="/website.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="website-field1">
                <div className="website-input1">
                  <div className="website-container">
                    <div className="website-border">
                      <img
                        className="rectangle-58-stroke3"
                        alt=""
                        src="/rectangle-56-stroke.svg"
                      />
                      <img className="email-icon3" alt="" src="/email.svg" />
                    </div>
                  </div>
                  <div className="email-input3">
                    <div className="email-options1">
                      <img
                        className="what-are-you-looking-for2"
                        loading="lazy"
                        alt=""
                        src="/what-are-you-looking-for.svg"
                      />
                      <div className="options-container">
                        <input
                          className="rectangle-62-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-1-icon2"
                          loading="lazy"
                          alt=""
                          src="/option-1.svg"
                        />
                      </div>
                      <div className="options-container1">
                        <input
                          className="rectangle-63-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-2-icon2"
                          loading="lazy"
                          alt=""
                          src="/option-2.svg"
                        />
                      </div>
                      <div className="options-container2">
                        <input
                          className="rectangle-64-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-3-icon2"
                          loading="lazy"
                          alt=""
                          src="/option-3.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="phone-field2">
                  <div className="phone-number-input">
                    <div className="phone-border">
                      <img
                        className="rectangle-59-stroke3"
                        alt=""
                        src="/rectangle-56-stroke.svg"
                      />
                      <img
                        className="phone-icon3"
                        loading="lazy"
                        alt=""
                        src="/phone.svg"
                      />
                    </div>
                  </div>
                  <div className="message-input2">
                    <div className="message-options">
                      <div className="message-options-container">
                        <input
                          className="rectangle-65-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-4-icon2"
                          loading="lazy"
                          alt=""
                          src="/option-4.svg"
                        />
                      </div>
                      <div className="message-options-container1">
                        <input
                          className="rectangle-66-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-5-icon2"
                          loading="lazy"
                          alt=""
                          src="/option-5.svg"
                        />
                      </div>
                      <div className="message-options-container2">
                        <input
                          className="rectangle-67-stroke2"
                          type="checkbox"
                        />
                        <img
                          className="option-6-icon2"
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
          <div className="submit-button2">
            <div className="button-container3">
              <img
                className="rectangle-68-stroke3"
                alt=""
                src="/rectangle-68-stroke.svg"
              />
              <img
                className="message-icon2"
                loading="lazy"
                alt=""
                src="/message.svg"
              />
            </div>
          </div>
          <div className="footer8">
            <div className="footer-content5">
              <img
                className="footer-content-child"
                loading="lazy"
                alt=""
                src="/rectangle-27.svg"
              />
              <div className="send-message2">Send Message</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction1;
