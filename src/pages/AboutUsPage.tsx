import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import AboutBanner from "../components/AboutUsPage/AboutBanner";
import AboutCompany from "../components/AboutUsPage/AboutCompany";
import ProfileCards from "../components/AboutUsPage/ProfileCards";
import AboutMission from "../components/AboutUsPage/AboutMission";
import ServiceCards from "../components/LandingPage/ServiceCards";
import LandingCta from "../components/LandingPage/LandingCta";
import FooterSection from "../components/FooterSection";
import "./AboutUsPage.css";

const AboutUsPage: FunctionComponent = () => {
  return (
    <div className="about-us-page">
      <MainHeader />
      <AboutBanner/>
      <AboutCompany />
      <ProfileCards />
      <AboutMission />
      <ServiceCards />
      <LandingCta />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;