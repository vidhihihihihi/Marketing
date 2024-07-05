import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent41";
import FrameComponent3 from "../components/FrameComponent31";
import FrameComponent2 from "../components/FrameComponent21";
import FrameComponent1 from "../components/FrameComponent11";
import FrameComponent from "../components/FrameComponent8";
import CTABanner from "../components/CTABanner";
import FooterSection from "../components/FooterSection1";
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
      <img className="vector-icon11" alt="" src="/vector-31.svg" />
      <img className="vector-icon12" alt="" src="/vector-31.svg" />
      <div className="hint6">
        <div className="signed-by-base-typography-p6" />
        <div className="text6">Contact Us</div>
        <div className="spacer-286" />
      </div>
      <div className="chevron-icon4" />
      <div className="filled12" />
      <CTABanner paragraph="Paragraph" />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;