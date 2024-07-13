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
    { qualityText: "On Page SEO", paragraphText: "Enhance your website's content and structure with our on-page SEO services. Boost your search engine rankings with our meticulous on-page SEO strategies.", iconIndex: 1 },
    { qualityText: "Off Page SEO", paragraphText: "Strengthen your online presence with our effective off-page SEO techniques.Increase your website's authority and backlinks with our off-page SEO services.", iconIndex: 2 },
    { qualityText: "Local SEO Service", paragraphText: "Attract more local customers with our specialized local SEO services. Improve your local search rankings and drive foot traffic with our local SEO strategies.", iconIndex: 3 },
    { qualityText: "Technical SEO Service", paragraphText: "Optimize your website's technical aspects for better performance with our technical SEO. Ensure your site is search-engine friendly with our technical SEO services.", iconIndex: 4 }, 
    { qualityText: "Content Marketing", paragraphText: "Engage and educate your audience with our compelling content marketing. Build brand authority and drive traffic with our strategic content marketing services.", iconIndex: 0 },
    { qualityText: "All SEO Services", paragraphText: "Improve your search engine rankings with our all-inclusive SEO services. Optimize your website for better visibility and traffic with our comprehensive SEO.", iconIndex: 5 },    
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="Boost Your Visibility with Expert SEO Services"
        subheading="Elevate your search rankings and attract organic traffic."
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
