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
    { qualityText: "Web Designing", paragraphText: "Create a visually stunning and user-friendly website with our web designing services. Enhance your online presence with our professional web design solutions.", iconIndex: 1 },
    { qualityText: "UI/UX Designing", paragraphText: "Deliver a seamless user experience with our expert UI/UX design services. Enhance user satisfaction and engagement with our intuitive UI/UX designs.", iconIndex: 2 },
    { qualityText: "Logo Designing", paragraphText: "Establish a strong brand identity with our creative logo designing services. Make a lasting impression with a unique and professional logo from our design experts.", iconIndex: 3 },
    { qualityText: "Web/App Development", paragraphText: "Develop robust and scalable web and mobile applications with our expert development team. Turn your ideas into reality with our custom web and app development services.", iconIndex: 4 },    
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
        heading="Build Functional, user friendly and Scalable Websites"
        subheading="Robust development solutions for optimal performance and security."
      />
      <AboutCards sectionHeading="Other Services We Offer" cards={OtherServicesCardsData} />
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

export default OtherServices;
