import { FunctionComponent } from "react";
import Header from "../components/Header";
import FrameComponent8 from "../components/FrameComponent81";
import CTABanner from "../components/CTABanner";
import FooterSection2 from "../components/FooterSection2";
import "./JobOpeningPost.css";

const JobOpeningPost: FunctionComponent = () => {
  return (
    <div className="job-opening-post">
      <Header />
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
      <div className="hint6">
        <div className="signed-by-base-typography-p6" />
        <div className="text6">Contact Us</div>
        <div className="spacer-286" />
      </div>
      <CTABanner />
      <FooterSection2 />
    </div>
  );
};

export default JobOpeningPost;