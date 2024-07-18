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


const SocialMediaMarketing: FunctionComponent = () => {
  const SocialMediaMarketingCardsData = [
    { qualityText: "Facebook Marketing", paragraphText: "Connect with your audience on Facebook and boost your brand with our expert marketing. Drive engagement and conversions with our targeted Facebook marketing strategies.", iconIndex: 1 },
    { qualityText: "LinkedIn Marketing", paragraphText: "Enhance your professional network and brand presence with our LinkedIn marketing. Generate quality leads and build relationships with our LinkedIn marketing services.", iconIndex: 2 },
    { qualityText: "Instagram Marketing", paragraphText: "Boost your brand's visual appeal and engagement with our Instagram marketing. Leverage Instagram's platform to grow your audience and drive sales with our strategies.", iconIndex: 3 },
    { qualityText: "Youtube Marketing", paragraphText: "Expand your reach and engage your audience with our YouTube marketing services. Create impactful video content and grow your channel with our YouTube marketing.", iconIndex: 4 },    
  ];

  const AnalyticsQuestions = [
    { question: 'What Is Social Media Marketing?', answer: 'The product dimensions are 10" x 8" x 6".' },
    { question: 'What Are The Benefits Of Social Media Marketing Services?', answer: 'Yes, this product is available in red, blue, and green.' },
    { question: 'How Often Will I Get Reports?', answer: 'This product comes with a 1-year limited warranty.' },
    { question: 'What SMM Package Should I Choose?', answer: 'The product dimensions are 10" x 8" x 6".' },
    { question: 'How Can I Trust Marketing DNA?', answer: 'Yes, this product is available in red, blue, and green.' },
    { question: 'What Details Do I Have to Provide?', answer: 'This product comes with a 1-year limited warranty.' },
  ];


  return (
    <div className="product-main">
      <MainHeader />
      <ProductBanner 
        heading="Engage and Grow with Social Media Marketing"
        subheading="Build a strong online presence and connect with your audience."
      />
      <AboutCards sectionHeading="Our Social Media Marketing Services" cards={SocialMediaMarketingCardsData} />
      <LandingCta />
      <ClientGlimpse/>
      <BottomBanner /> 
            <h2 className="topic2">What Our Clients Says</h2>      
      <Testimonials />
      <FAQ 
        questionsAndAnswers={AnalyticsQuestions}
        title="Frequently Asked Questions"
        subtitle="Have more questions? We’d be happy to answer them!"
        contactButtonText="Get in touch"
        contactButtonLink="/contact-us-page"
        />
      <LandingForm />
      <FooterSection />
    </div>
  );
};

export default SocialMediaMarketing;
