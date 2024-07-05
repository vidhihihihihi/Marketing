import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import LandingBanner from "../components/LandingBanner";
import FrameComponent2 from "../components/FrameComponent2";
import ServiceCards from "../components/ServiceCards";
import ServiceCardThird from "../components/ServiceCardThird";
import LandingCta from "../components/LandingCta";
import Details from "../components/Details";
import Container from "../components/Container";
import LandingForm from "../components/LandingForm";
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
      <FrameComponent2 />
      <section className="services-content-wrapper">
        <div className="services-content">
          <ServiceCards />
          <ServiceCardThird />
        </div>
      </section>
      <LandingCta />
      <section className="container-wrapper">
        <div className="container">
          <div className="content">
            <h2 className="why-marketing-dna">{`Why Marketing DNA? `}</h2>
          </div>
          <Details />
          <Container />
        </div>
      </section>
      <LandingForm />
      <FooterSection />
    </div>
  );
};

export default LandingPageDraft;
