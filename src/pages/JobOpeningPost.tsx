import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import JobOpeningForm from "../components/JobOpeningForm";
import FooterSection from "../components/FooterSection";
import LandingCta from "../components/LandingCta";
import "./JobOpeningPost.css";

const JobOpeningPost: FunctionComponent = () => {
  return (
    <div className="job-opening-post">
      <MainHeader />
      <JobOpeningForm />
      <LandingCta/>
      <FooterSection />
    </div>
  );
};

export default JobOpeningPost;