import { FunctionComponent } from "react";
import "./AboutBanner.css";

export type AboutBannerType = {
  className?: string;
};

const AboutBanner: FunctionComponent<AboutBannerType> = ({
  className = "",
}) => {
  return (
    <section className={`cta-background ${className}`}>
      <div className="cta-content-about">
        <h2 className="trust-the-process">
        Trust the process and grow together
        </h2>
        <div className="Result-driven">
        Result driven marketing company
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
