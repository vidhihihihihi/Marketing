import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import FrameComponent8 from "../components/FrameComponent8";
import FooterSection2 from "../components/FooterSection2";
import "./JobOpeningPost.css";

const JobOpeningPost: FunctionComponent = () => {
  return (
    <div className="job-opening-post">
      <Header1 careersStartHere="Job Opening Name" />
      <FrameComponent8 />
      <img
        className="header-image-icon"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <img
        className="header-image-icon1"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <div className="hint3">
        <div className="signed-by-base-typography-p3" />
        <div className="text3">Contact Us</div>
        <div className="spacer-283" />
      </div>
      <section className="cta-banner">
        <div className="cta-banner-child" />
        <h3 className="lets-get-started">Let’s Get Started</h3>
        <div className="contact-link">
          <div className="contact-link-content">
            <div className="contact-us-wrapper">
              <div className="contact-us">Contact Us</div>
            </div>
            <img
              className="contact-link-content-child"
              loading="lazy"
              alt=""
              src="/rectangle-271.svg"
            />
          </div>
        </div>
      </section>
      <FooterSection2 />
    </div>
  );
};

export default JobOpeningPost;
