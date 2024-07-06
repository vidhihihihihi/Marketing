import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import LandingBanner from "../components/LandingPage/LandingBanner";
import LandingWhoWeAre from "../components/LandingPage/LandingWhoWeAre";
import ServiceCards from "../components/LandingPage/ServiceCards";
import LandingCta from "../components/LandingPage/LandingCta";
import Details from "../components/LandingPage/Details";
import Container from "../components/LandingPage/Container";
import LandingForm from "../components/LandingPage/LandingForm";
import FooterSection from "../components/FooterSection";
import "./LandingPage.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className="landing-page-draft-3">
      <MainHeader />
      <LandingBanner />
      <div className="landing-page-draft-3-child" />    
      <LandingWhoWeAre />
      <section className="services-content-wrapper">
        <div className="services-content">
           <ServiceCards />

        </div>
      </section>
      <LandingCta />
      <section className="container-wrapper">
        <div className="container">
          <div className="content">
            <h2 className="why-marketing-dna">{`Why Marketing DNA? `}</h2>
          </div>
          <Details />
          <div className="content">
            <h2 className="why-marketing-dna">{`What Our Clients Says `}</h2>
          </div>
          <Container />
        </div>
      </section>
      <LandingForm />
      <FooterSection />
    </div>
  );
};

export default LandingPage;