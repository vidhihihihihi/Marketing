import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import ContactUsBanner from "../components/ContactUsBanner";
import LandingForm from "../components/LandingForm";
import Contact from "../components/Contact";
import FooterSection from "../components/FooterSection";
import "./ContactUsPage.css";

const ContactUsPage: FunctionComponent = () => {
  return (
    <div className="contact-us-page">
      <MainHeader />
      <ContactUsBanner />
      <LandingForm />
      <Contact />
      <FooterSection />      
    </div>
  );
};

export default ContactUsPage;
