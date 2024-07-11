import { FunctionComponent } from "react";
import DigitalMarketingBanner from "../../components/ProductPages/DigitalMarketingBanner";
import AboutCards from "../../components/AboutUsPage/AboutCards";
import MainHeader from "../../components/MainHeader";
import BottomBanner from "../../components/ProductPages/BottomBanner";
import ClientGlimpse from "../../components/ProductPages/ClientGlimpse";
import LandingCta from "../../components/LandingPage/LandingCta";
import Testimonials from "../../components/LandingPage/Testimonials";
import FAQ from "../../components/LandingPage/Questions";
import LandingForm from "../../components/LandingPage/LandingForm";
import FooterSection from "../../components/FooterSection";
import "./DigitalMarketing.css";


const DigitalMarketing: FunctionComponent = () => {
  const digitalMarketingCardsData = [
    { qualityText: "Social Media Marketing", paragraphText: "Engage your audience across all major social platforms.", iconIndex: 1 },
    { qualityText: "Search Marketing", paragraphText: "Create compelling content that drives traffic and conversions.", iconIndex: 2 },
    { qualityText: "Paid Advertising", paragraphText: "Maximize your ROI with targeted pay-per-click campaigns.", iconIndex: 3 },
    { qualityText: "Graphics Designing", paragraphText: "Build customer relationships with personalized email strategies.", iconIndex: 4 },    
  ];


  return (
    <div className="digital-marketing">
      <MainHeader />
      <DigitalMarketingBanner />
      <AboutCards sectionHeading="Our Digital Marketing Services" cards={digitalMarketingCardsData} />
      <LandingCta />
      <ClientGlimpse/>
      <BottomBanner /> 
            <h2 className="topic2">What Our Clients Says</h2>      
      <Testimonials />
      <FAQ/>
      <LandingForm />
      <FooterSection />
    </div>
  );
};

export default DigitalMarketing;
