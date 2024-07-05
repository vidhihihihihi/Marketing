import { FunctionComponent } from "react";
import CallToAction from "../components/CallToAction";
import ServiceCards from "../components/ServiceCards";
import MainHeader from "../components/MainHeader";
import FrameComponent3 from "../components/LandingBanner";
import BottomBanner from "../components/BottomBanner";
import FrameComponent2 from "../components/FrameComponent2";
import LandingCta from "../components/LandingCta";
import LandingForm from "../components/LandingForm";
import FooterSection from "../components/FooterSection";
import "./ProductPage.css";

const ProductPage: FunctionComponent = () => {
  return (
    <div className="product-page">
      <img
        className="vector-icon9"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <img
        className="vector-icon10"
        loading="lazy"
        alt=""
        src="/vector-31.svg"
      />
      <div className="hint6">
        <div className="signed-by-base-typography-p6" />
        <div className="text6">Contact Us</div>
        <div className="spacer-286" />
      </div>
      <div className="chevron-icon4" />
      <div className="filled9" />
      <div className="filled10" />
      <div className="filled11" />
      <div className="filled12" />
      <MainHeader />
      <CallToAction />
      <div className="divider">
        <img className="divider-left-icon" alt="" src="/vector-52.svg" />
        <img
          className="divider-right-icon"
          loading="lazy"
          alt=""
          src="/vector-6.svg"
        />
      </div>
      <main className="services">
        <section className="service-list">
          <div className="service-heading">
            <h2 className="seo-service">SEO Service</h2>
          </div>
          <ServiceCards />
          <MainHeader />
          <FrameComponent3 />
          <BottomBanner />
          <FrameComponent2 />
          <LandingCta />
          <LandingForm />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProductPage;
