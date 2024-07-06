import { FunctionComponent } from "react";
import ProductBanner from "../components/ProductPages/ProductBanner";
import ServiceCards from "../components/LandingPage/ServiceCards";
import MainHeader from "../components/MainHeader";
import BottomBanner from "../components/ProductPages/BottomBanner";
import LandingCta from "../components/LandingPage/LandingCta";
import Container from "../components/LandingPage/Container";
import LandingForm from "../components/LandingPage/LandingForm";
import FooterSection from "../components/FooterSection";
import "./ProductPage.css";

const ProductPage: FunctionComponent = () => {
  return (
    <div className="product-page">
      <MainHeader />
      <ProductBanner />
      <main className="services">
        <section className="service-list">
          <div className="service-heading">
            <h2 className="seo-service">SEO Service</h2>
          </div>
          <ServiceCards />
          <LandingCta />
          <div className="content">
            <h2 className="why-marketing-dna">{`Glimpse Of Clients`}</h2>
          </div>
          <BottomBanner />         
          <div className="content">
            <h2 className="why-marketing-dna">{`What Our Clients Says `}</h2>
          </div>
          <Container />
          <LandingForm />
        </section>
      </main>
      <FooterSection />
    </div>
  );
};

export default ProductPage;
