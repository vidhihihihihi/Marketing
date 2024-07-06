import { FunctionComponent } from "react";
import ServiceCards from "./ServiceCards";
import "./AboutServices.css";

export type AboutServicesType = {
  className?: string;
};

const AboutServices: FunctionComponent<AboutServicesType> = ({
  className = "",
}) => {
  return (
    <section className={`why-choose-content-wrapper ${className}`}>
      <div className="why-choose-content">
        <div className="why-choose-marketing-dna-wrapper">
          <h3 className="why-choose-marketing">Why Choose Marketing DNA?</h3>
        </div>    
            <ServiceCards />       
      </div>
    </section>
  );
};

export default AboutServices;