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


const AnalyticsTracking: FunctionComponent = () => {
  const AnalyticsTrackingCardsData = [
    { qualityText: "Conversion Rate Optimization", paragraphText: "Engage your audience across all major social platforms.", iconIndex: 1 },
    { qualityText: "Google Analytics Setup and Tracking", paragraphText: "Create compelling content that drives traffic and conversions.", iconIndex: 2 }, 
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="ANALYTICAL SERVICE"
        subheading="You've put in the effort to build your business. We're committed to helping your business thrive online."
      />
      <AboutCards sectionHeading="Our Analytical Services" cards={AnalyticsTrackingCardsData} />
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

export default AnalyticsTracking;
