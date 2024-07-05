import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import CTABanner from "../components/CTABanner";
import FooterSection from "../components/FooterSection";
import "./AboutUsPage.css";

const AboutUsPage: FunctionComponent = () => {
  return (
    <div className="about-us-page">
      <Header />
      <section className="company-info">
        <h3 className="trust-the-process">
          trust the process and grow together
        </h3>
        <div className="result-driven-marketing">
          Result driven marketing company
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
      </section>
      <FrameComponent7 />
      <section className="frame-parent">
        <FrameComponent5 />
        <FrameComponent4 />
        <FrameComponent3 />
        <FrameComponent2 />
      </section>
      <FrameComponent1 />
      <img className="about-us-page-child" alt="" src="/rectangle-691.svg" />
      <div className="about-us-page-item" />
      <FrameComponent />
      <img className="vector-icon" alt="" src="/vector-31.svg" />
      <img className="vector-icon1" alt="" src="/vector-31.svg" />
      <div className="hint1">
        <div className="signed-by-base-typography-p1" />
        <div className="text1">Contact Us</div>
        <div className="spacer-281" />
      </div>
      <div className="chevron-icon1" />
      <div className="filled" />
      <CTABanner paragraph="Paragraph" />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;
