import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import FrameComponent9 from "../components/FrameComponent9";
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
      <img
        className="vector-icon2"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <img
        className="vector-icon3"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <div className="hint4">
        <div className="signed-by-base-typography-p4" />
        <div className="text4">Contact Us</div>
        <div className="spacer-284" />
      </div>
      <div className="chevron-icon2" />
      <div className="filled1" />
      <div className="filled2" />
      <div className="filled3" />
      <div className="filled4" />
      <FrameComponent9 />
      <FooterSection />
    </div>
  );
};

export default WriteForUs;
