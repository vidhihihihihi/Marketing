import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import FrameComponent8 from "../components/FrameComponent81";
import CTABanner from "../components/CTABanner";
import FooterSection from "../components/FooterSection";
import "./JobOpeningPost.css";

const JobOpeningPost: FunctionComponent = () => {
  return (
    <div className="job-opening-post">
      <MainHeader />
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
      <FooterSection />
    </div>
  );
};

export default JobOpeningPost;