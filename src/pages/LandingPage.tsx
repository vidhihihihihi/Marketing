import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import LandingBanner from "../components/LandingPage/LandingBanner";
import LandingWhoWeAre from "../components/LandingPage/LandingWhoWeAre";
import ServiceCards from "../components/LandingPage/ServiceCards";
import LandingCta from "../components/LandingPage/LandingCta";
import Details from "../components/LandingPage/Details";
import Testimonials from "../components/LandingPage/Testimonials";
import FAQ from "../components/LandingPage/Questions";
import LandingForm from "../components/LandingPage/LandingForm";
import FooterSection from "../components/FooterSection";
import "./LandingPage.css";



const LandingPage: FunctionComponent = () => {
  const LandingQuestions = [
    { question: 'What is digital marketing?', answer: 'The product dimensions are 10" x 8" x 6".' },
    { question: 'How digital marketing help businesses promote their services and products?', answer: 'Yes, this product is available in red, blue, and green.' },
    { question: 'What are the benefits of hiring a digital marketing company in India?', answer: 'This product comes with a 1-year limited warranty.' },
    { question: 'How Can One Evaluate The Solutions From A Digital Marketing Company In India?', answer: 'The product dimensions are 10" x 8" x 6".' },
    { question: 'Do I Need To Sign Any Contract While Hiring A Digital Marketing Agency?', answer: 'Yes, this product is available in red, blue, and green.' },
    { question: 'What is brand awareness in digital marketing?', answer: 'This product comes with a 1-year limited warranty.' },
  ];
  return (
    <div className="landing-page-draft-3">
      <MainHeader />
      <LandingBanner />
      <LandingWhoWeAre />
      <section className="services-content-wrapper">
        <div className="services-content">
           <ServiceCards />
        </div>
      </section>
      <LandingCta />      
          <div className="content">
            <h2 className="topic">Why Marketing DNA?</h2>
          </div>
          <Details />
          <div className="content">
            <h2 className="topic">What Our Clients Says</h2>
          </div>
          <Testimonials/>
          <FAQ 
        questionsAndAnswers={LandingQuestions}
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

export default LandingPage;
