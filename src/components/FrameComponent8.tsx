import { FunctionComponent } from "react";
import ServiceCard1 from "./ServiceCard11";
import ServiceCardInstance from "./ServiceCardInstance";
import ServiceCard from "./ServiceCard2";
import "./FrameComponent8.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: FunctionComponent<FrameComponentType> = ({
  className = "",
}) => {
  return (
    <section className={`why-choose-content-wrapper ${className}`}>
      <div className="why-choose-content">
        <div className="why-choose-marketing-dna-wrapper">
          <h3 className="why-choose-marketing">Why Choose Marketing DNA?</h3>
        </div>
        <div className="frame-parent40">
          <div className="service-card-parent">
            <ServiceCard1 />
            <ServiceCardInstance />
            <ServiceCard />
          </div>
          <div className="service-card-instance1">
            <div className="third-card">
              <ServiceCard1 propWidth="unset" propAlignSelf="stretch" />
            </div>
            <ServiceCardInstance propFlex="0.9789" />
            <ServiceCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;