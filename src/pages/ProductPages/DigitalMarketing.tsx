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


const DigitalMarketing: FunctionComponent = () => {
  const digitalMarketingCardsData = [
    { qualityText: "Social Media Marketing", paragraphText: "Engage your audience and grow your brand with our comprehensive social media marketing. Leverage the power of social media to drive conversions and brand loyalty.", iconIndex: 1 },
    { qualityText: "Search Engine Marketing", paragraphText: "Drive qualified traffic to your website with our expert search engine marketing. Enhance your online presence with our tailored search engine marketing campaigns.", iconIndex: 2 },
    { qualityText: "Paid Advertising", paragraphText: "Maximize your reach and ROI with our targeted paid advertising strategies. Boost your brand visibility with our data-driven paid advertising solutions.", iconIndex: 3 },
    { qualityText: "Graphics Designing", paragraphText: "Transform your vision into stunning visuals with our professional graphics designing. Elevate your brand identity with our creative graphics design solutions.", iconIndex: 4 },    
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="Transform Your Brand with Comprehensive Digital Marketing"
        subheading="Integrated strategies that drive traffic, engagement, and growth"
      />
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
