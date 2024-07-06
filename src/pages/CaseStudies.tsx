import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import WriteForUsExample from "../components/WriteForUsPage/WriteForUsExample";
import FooterSection from "../components/FooterSection";
import "./CaseStudies.css";

const CaseStudies: FunctionComponent = () => {
  return (
    <div className="case-studies">
      <MainHeader />
      <section className="call-to-action">
        <div className="cta-background" />
        <h3 className="write-for-us1">Case Studies</h3>
        <div className="paragraph">Paragraph</div>
      </section>
      <div className="example-list">
            <WriteForUsExample/>
          </div>
          <div className="example-list">
            <WriteForUsExample/>
          </div>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;
