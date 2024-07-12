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
    { qualityText: "Comprehensive Services", paragraphText: "We offer a full spectrum of digital marketing services, ensuring all your needs are met under one roof. From SEO to content creation, we provide integrated solutions that drive cohesive and impactful results.", iconIndex: 0 },
    { qualityText: "Client-centric  Approach", paragraphText: "Your success is our priority; we take the time to understand your business and tailor our strategies accordingly. Our collaborative process ensures your voice is heard and your goals are achieved.", iconIndex: 1 },
    { qualityText: "Transparent Process", paragraphText: "We believe in complete transparency, keeping you informed at every step of your marketing journey. Our detailed reports and open communication mean no surprises, only results.", iconIndex: 2 },
    { qualityText: "Measurable Results ", paragraphText: "Data-driven strategies allow us to deliver tangible and trackable outcomes that contribute directly to your business growth. We focus on key performance indicators to ensure your marketing investment pays off.", iconIndex: 3 },
    { qualityText: "Professional Commitment", paragraphText: "Our team of experts is dedicated to providing the highest level of service, professionalism, and expertise. We are committed to ongoing learning and innovation to stay ahead of industry trends and deliver cutting-edge solutions.", iconIndex: 4 },
    { qualityText: "Guarenteed ROI", paragraphText: "We are confident in our ability to generate a positive return on your investment through strategic, results-focused marketing efforts. Our goal is to maximize your marketing budget and ensure you see significant value.", iconIndex: 5 },
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