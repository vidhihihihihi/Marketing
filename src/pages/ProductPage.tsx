import { FunctionComponent } from "react";
import Header from "../components/Header";
import CallToAction from "../components/CallToAction";
import ServiceCards from "../components/ServiceCards";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent3 from "../components/FrameComponent3";
import BottomBanner from "../components/BottomBanner";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
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
      <Header />
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
          <FrameComponent4 />
          <FrameComponent3 />
          <BottomBanner />
          <FrameComponent2 />
          <FrameComponent1 />
          <FrameComponent />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProductPage;
