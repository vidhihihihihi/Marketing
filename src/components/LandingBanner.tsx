import { FunctionComponent } from "react";
import "./LandingBanner.css";

export type LandingBannerType = {
  className?: string;
};

const LandingBanner: FunctionComponent<LandingBannerType> = ({
  className = "",
}) => {
  return (
    <section className={`cta-background-parent ${className}`}>
      <div className="cta-background1" />
      <div className="cta-content">
        <h2 className="cutting-edge-digital-marketing">
          Cutting-Edge Digital Marketing Company, No Fluff
        </h2>
        <div className="youve-put-in">
          You've put in the effort to build your business. We're committed to
          helping your business thrive online.
        </div>
      </div>
      <div className="cta-button">
        <div className="cta-button-child" />
        <div className="get-in-touch">Get in touch</div>
      </div>
    </section>
  );
};

export default LandingBanner;