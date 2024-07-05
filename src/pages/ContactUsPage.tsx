import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import CallToAction1 from "../components/CallToAction1";
import Contact from "../components/Contact";
import FrameComponent6 from "../components/FrameComponent6";
import FrameComponent5 from "../components/FrameComponent5";
import "./ContactUsPage.css";

const ContactUsPage: FunctionComponent = () => {
  return (
    <div className="contact-us-page">
      <img
        className="vector-icon11"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <img
        className="vector-icon12"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <Header1 />
      <CallToAction1 />
      <Contact />
      <footer className="footer-section">
        <div className="footer" />
        <div className="signed-by-base-breadcrumbs-el" />
        <div className="signed-by-base-breadcrumbs-el1" />
        <div className="signed-by-base-breadcrumbs-el2" />
        <div className="signed-by-base-breadcrumbs-el3" />
        <div className="signed-by-base-breadcrumbs-el4" />
        <div className="signed-by-base-breadcrumbs-el5" />
        <div className="signed-by-base-breadcrumbs-el6" />
        <div className="signed-by-base-breadcrumbs-el7" />
        <div className="signed-by-base-breadcrumbs-el8" />
        <div className="footer-content">
          <FrameComponent6 />
        </div>
        <FrameComponent5 />
      </footer>
    </div>
  );
};

export default ContactUsPage;
