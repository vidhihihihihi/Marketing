import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import WriteForUsExample from "../components/WriteForUsPage/WriteForUsExample";
import FooterSection from "../components/FooterSection";
import "./WriteForUs.css";

const WriteForUs: FunctionComponent = () => {
  return (
    <div className="write-for-us">
      <MainHeader />
      <section className="call-to-action">
        <div className="cta-background" />
        <h3 className="write-for-us1">Write For Us</h3>
        <div className="paragraph">Paragraph</div>
      </section>
      <section className="write-for-us-inner">
        <div className="guidelines-parent">
          <h3 className="guidelines">Guidelines</h3>
          <b className="content-relevance">Content Relevance:</b>
          <b className="originality">Originality:</b>
          <b className="writing-style-and">Writing Style and Structure:</b>
          <b className="seo-considerations">SEO Considerations:</b>
          <b className="author-bio-and">Author Bio and Backlinks:</b>
          <b className="please-note">Please Note:</b>
        </div>
      </section>
      <section className={`submission-options-wrapper`}>
      <div className="submission-options">
        <div className="submission-option">
          <div className="idea-submission-card">
            <h3 className="idea-submission">Idea Submission</h3>
            <div className="paragraph22">Paragraph</div>
            <b className="click-here">Click Here</b>
          </div>
        </div>
        <div className="example-card-parent">
          <div className="example-card">
            <img
              className="example-icon"
              loading="lazy"
              alt=""
              src="/vector-8.svg"
            />
            <h3 className="read-through-our">Read Through Our Top Examples</h3>
          </div>
          <div className="example-list">
            <WriteForUsExample/>
          </div>
        </div>
      </div>
    </section>
      <FooterSection />
    </div>
  );
};

export default WriteForUs;
