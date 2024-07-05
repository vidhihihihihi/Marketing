import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import ServiceCards from "../components/ServiceCards";
import ServiceCardThird from "../components/ServiceCardThird";
import FrameComponent1 from "../components/FrameComponent1";
import Details from "../components/Details";
import Container from "../components/Container";
import FrameComponent from "../components/FrameComponent";
import FooterSection from "../components/FooterSection";
import "./LandingPageDraft.css";

const LandingPageDraft: FunctionComponent = () => {
  return (
    <div className="landing-page-draft-3">
      <FrameComponent4 />
      <FrameComponent3 />
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
      <FrameComponent1 />
      <section className="container-wrapper">
        <div className="container">
          <div className="content">
            <h2 className="why-marketing-dna">{`Why Marketing DNA? `}</h2>
          </div>
          <Details />
          <Container />
        </div>
      </section>
      <FrameComponent />
      <FooterSection />
    </div>
  );
};

export default LandingPageDraft;
