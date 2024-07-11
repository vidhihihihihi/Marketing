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


const SEOService: FunctionComponent = () => {
  const SEOServiceCardsData = [
    { qualityText: "On Page SEO", paragraphText: "Engage your audience across all major social platforms.", iconIndex: 1 },
    { qualityText: "Off Page SEO", paragraphText: "Create compelling content that drives traffic and conversions.", iconIndex: 2 },
    { qualityText: "Local SEO Service", paragraphText: "Maximize your ROI with targeted pay-per-click campaigns.", iconIndex: 3 },
    { qualityText: "Technical SEO Service", paragraphText: "Build customer relationships with personalized email strategies.", iconIndex: 4 }, 
    { qualityText: "Content Marketing", paragraphText: "Build customer relationships with personalized email strategies.", iconIndex: 0 },    
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="SEO SERVICES"
        subheading="You've put in the effort to build your business. We're committed to helping your business thrive online."
      />
      <AboutCards sectionHeading="Our SEO Services" cards={SEOServiceCardsData} />
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

export default SEOService;
