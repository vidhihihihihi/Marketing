import { FunctionComponent } from "react";
import "./Contact.css";

export type ContactType = {
  className?: string;
};

const Contact: FunctionComponent<ContactType> = ({ className = "" }) => {
  return (
    <section className={`contact ${className}`}>
      <div className="contact-info2">
        <div className="contact-heading">
          <h3 className="get-in-touch3">Get In Touch</h3>
        </div>
        <div className="contact-details">
          <div className="email-info">
            <div className="email-details">
              <div className="email-icon-container">
                <div className="email-separator" />
              </div>
              <div className="email-container">
                <div className="email">Email</div>
              </div>
              <div className="email-container1">
                <a
                  className="assistmarketingdnain15"
                  href="mailto:assist@marketingdna.in"
                  target="_blank"
                >
                  assist@marketingdna.in
                </a>
              </div>
              <div className="email-container2">
                <a
                  className="assistmarketingdnain16"
                  href="mailto:assist@marketingdna.in"
                  target="_blank"
                >
                  assist@marketingdna.in
                </a>
              </div>
              <div className="social-separator" />
            </div>
            <div className="phone-info">
              <div className="phone-number-container" />
              <div className="social-media">
                <div className="social-media-heading">
                  <div className="social-media1">Social Media</div>
                  <div className="social-media-icons1">
                    <div className="social-media-icon-rows-parent">
                      <div className="social-media-icon-rows">
                        <div className="social-media-icon-shapes" />
                      </div>
                      <div className="facebook">Facebook</div>
                    </div>
                    <div className="frame-parent46">
                      <div className="rectangle-frame">
                        <div className="frame-child24" />
                      </div>
                      <div className="twitter">Twitter</div>
                    </div>
                    <div className="frame-parent47">
                      <div className="rectangle-wrapper1">
                        <div className="frame-child25" />
                      </div>
                      <div className="linkedin">LinkedIn</div>
                    </div>
                    <div className="frame-parent48">
                      <div className="rectangle-wrapper2">
                        <div className="frame-child26" />
                      </div>
                      <div className="instagram">Instagram</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="phone-number-heading-parent">
            <div className="phone-number-heading">
              <div className="phone">Phone</div>
            </div>
            <div className="phone-number-details">
              <div className="phone-number-value">
                <div className="phone-number-value-row">
                  <div className="phone-number-value1"> +918088698016</div>
                  <div className="phone-number-value2"> +918088698016</div>
                </div>
                <div className="phone-number-separator">
                  <div className="phone-number-separator-shape" />
                </div>
              </div>
              <div className="business-hours-content-wrapper">
                <div className="business-hours-content">
                  <div className="business-hours">Business Hours</div>
                  <div className="mon-sat-container">
                    <span className="mon-sat">Mon - Sat</span>
                    <span className="am-8pm">{`   10am - 8pm  `}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="address-content-wrapper">
            <div className="address-content">
              <div className="address">Address</div>
              <div className="no101-sy-no501">
                No.101, Sy No.50/1 Horamavu Agara Bangalore-560043
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
