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

    const AnalyticsQuestions = [
      { question: 'What is digital marketing?', answer: 'The product dimensions are 10" x 8" x 6".' },
      { question: 'How digital marketing help businesses promote their services and products?', answer: 'Yes, this product is available in red, blue, and green.' },
      { question: 'What are the benefits of hiring a digital marketing company in India?', answer: 'This product comes with a 1-year limited warranty.' },
      { question: 'How Can One Evaluate The Solutions From A Digital Marketing Company In India?', answer: 'The product dimensions are 10" x 8" x 6".' },
      { question: 'Do I Need To Sign Any Contract While Hiring A Digital Marketing Agency?', answer: 'Yes, this product is available in red, blue, and green.' },
      { question: 'What is brand awareness in digital marketing?', answer: 'This product comes with a 1-year limited warranty.' },
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

export default AnalyticsTracking;
