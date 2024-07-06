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
import "./LandingPageDraft.css";

const LandingPageDraft: FunctionComponent = () => {
  return (
    <div className="landing-page-draft-3">
      <MainHeader />
      <LandingBanner />
      <div className="landing-page-draft-3-child" />
      <div className="hint">
        <div className="signed-by-base-typography-p" />
        <div className="text">Contact Us</div>
        <div className="spacer-28" />
      </div>
      <img
        className="chevron-icon"
        loading="lazy"
        alt=""
        src="/chevron-icon-4.svg"
      />
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

export default LandingPageDraft;
