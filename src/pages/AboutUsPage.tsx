import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import AboutBanner from "../components/AboutUsPage/AboutBanner";
import AboutCompany from "../components/AboutUsPage/AboutCompany";
import ProfileCards from "../components/AboutUsPage/ProfileCards";
import AboutMission from "../components/AboutUsPage/AboutMission";
import AboutCards from "../components/AboutUsPage/AboutCards";
import LandingCta from "../components/LandingPage/LandingCta";
import FooterSection from "../components/FooterSection";
import "./AboutUsPage.css";

const AboutUsPage: FunctionComponent = () => {
  const aboutUsCardsData = [
    { qualityText: "Innovative Solutions", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 0 },
    { qualityText: "Custom Strategies", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 1 },
    { qualityText: "Data-Driven Approach", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 2 },
    { qualityText: "Targeted Campaigns", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 3 },
    { qualityText: "ROI Optimization", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 4 },
    { qualityText: "Brand Enhancement", paragraphText: "If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough,", iconIndex: 5 },
  ];
  
  return (
    <div className="about-us-page">
      <MainHeader />
      <AboutBanner/>
      <AboutCompany />
      <ProfileCards />
      <AboutMission />
      <AboutCards sectionHeading="Why Choose Marketing DNA?" cards={aboutUsCardsData} />
      <LandingCta />
      <FooterSection />
    </div>
  );
};

export default AboutUsPage;