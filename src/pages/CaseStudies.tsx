import { FunctionComponent } from "react";
import Header from "../components/Header";
import MarketingStats from "../components/MarketingStats";
import FooterSection4 from "../components/FooterSection4";
import "./CaseStudies.css";

const CaseStudies: FunctionComponent = () => {
  return (
    <div className="case-studies">
      <Header />
      <section className="case-study-intro">
        <div className="case-study-intro-background" />
        <a className="case-studies1">Case Studies</a>
        <div className="paragraph1">Paragraph</div>
      </section>
      <img className="vector-icon4" alt="" src="/vector-31.svg" />
      <img className="vector-icon5" alt="" src="/vector-31.svg" />
      <div className="hint5">
        <div className="signed-by-base-typography-p5" />
        <div className="text5">Contact Us</div>
        <div className="spacer-285" />
      </div>
      <div className="chevron-icon3" />
      <div className="filled5" />
      <div className="filled6" />
      <div className="filled7" />
      <div className="filled8" />
      <MarketingStats />
      <div className="case-studies-child" />
      <img className="vector-icon6" alt="" src="/vector-51.svg" />
      <div className="case-studies-item" />
      <img className="vector-icon7" alt="" src="/vector-51.svg" />
      <div className="case-studies-inner" />
      <img className="vector-icon8" alt="" src="/vector-51.svg" />
      <div className="rectangle-div" />
      <div className="case-studies-child1" />
      <div className="case-studies-child2" />
      <FooterSection4 />
    </div>
  );
};

export default CaseStudies;
