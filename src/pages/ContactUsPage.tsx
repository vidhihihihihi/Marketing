import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import ContactUsBanner from "../components/ContactUsPage/ContactUsBanner";
import LandingForm from "../components/LandingPage/LandingForm";
import ContactUs from "../components/ContactUsPage/ContactUs";
import FooterSection from "../components/FooterSection";
import "./ContactUsPage.css";

const ContactUsPage: FunctionComponent = () => {
  return (
    <div className="contact-us-page">
      <MainHeader />
      <ContactUsBanner />
      <div className="content-container">
        <div className="left-side">
          <h2>Message Us</h2>
          <p>We are at your service.</p>
        </div>
        <div className="right-side">
          <LandingForm />
        </div>
      </div>
      <ContactUs/>
      <FooterSection />      
    </div>
  );
};

export default ContactUsPage;
