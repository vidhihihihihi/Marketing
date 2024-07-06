import { FunctionComponent } from "react";
import "./LandingBanner.css";

export type ContactUsBannerType = {
  className?: string;
};

const ContactUsBanner: FunctionComponent<ContactUsBannerType> = ({
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
    </section>
  );
};

export default ContactUsBanner;
