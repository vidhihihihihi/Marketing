import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import AboutCompany from "../components/AboutCompany";
import ProfileCards from "../components/ProfileCards";
import AboutMission from "../components/AboutMission";
import AboutServices from "../components/AboutServices";
import LandingCta from "../components/LandingCta";
import FooterSection from "../components/FooterSection";
import "./AboutUsPage.css";

const AboutUsPage: FunctionComponent = () => {
  return (
    <div className="about-us-page">
      <MainHeader />
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
      <AboutCompany />
      <ProfileCards />
      <AboutMission />
      <AboutServices />
      <LandingCta />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;