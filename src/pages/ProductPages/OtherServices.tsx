import { FunctionComponent } from "react";
import ProductBanner from "../../components/ProductPages/ProductBanner";
import AboutCards from "../../components/AboutUsPage/AboutCards";
import MainHeader from "../../components/MainHeader";
import BottomBanner from "../../components/ProductPages/BottomBanner";
import ClientGlimpse from "../../components/ProductPages/ClientGlimpse";
import LandingCta from "../../components/LandingPage/LandingCta";
import Testimonials from "../../components/LandingPage/Testimonials";
import FAQ from "../../components/LandingPage/Questions";
import LandingForm from "../../components/LandingPage/LandingForm";
import FooterSection from "../../components/FooterSection";
import "./product.css";


const OtherServices: FunctionComponent = () => {
  const OtherServicesCardsData = [
    { qualityText: "Web Designing", paragraphText: "Engage your audience across all major social platforms.", iconIndex: 1 },
    { qualityText: "UI/UX Designing", paragraphText: "Create compelling content that drives traffic and conversions.", iconIndex: 2 },
    { qualityText: "Logo Designing", paragraphText: "Maximize your ROI with targeted pay-per-click campaigns.", iconIndex: 3 },
    { qualityText: "Web/App Development", paragraphText: "Build customer relationships with personalized email strategies.", iconIndex: 4 },    
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="OTHER SERVICES"
        subheading="You've put in the effort to build your business. We're committed to helping your business thrive online."
      />
      <AboutCards sectionHeading="Other Services We Offer" cards={OtherServicesCardsData} />
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

export default OtherServices;
