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
    { qualityText: "Conversion Rate Optimization", paragraphText: "Maximize your website's performance and increase conversions with our CRO services. Turn visitors into customers with our effective conversion rate optimization strategies.", iconIndex: 1 },
    { qualityText: "Google Analytics Setup and Tracking", paragraphText: "Gain insights into your website's performance with our Google Analytics setup and tracking. Make data-driven decisions with our comprehensive Google Analytics services.", iconIndex: 2 }, 
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="Make Informed Decisions with Analytics & Tracking"
        subheading="Gain valuable insights to optimize your marketing strategies."
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
