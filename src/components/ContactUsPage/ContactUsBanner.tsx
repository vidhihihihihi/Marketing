import { FunctionComponent } from "react";
import "./ContactUsBanner.css";

export type ContactUsBannerType = {
  className?: string;
};

const ContactUsBanner: FunctionComponent<ContactUsBannerType> = ({
  className = "",
}) => {
  return (
    <section className={`cta-background-parent-contact ${className}`}>
      <div className="cta-content-contact">
        <h2 className="cutting-edge">
          Cutting-Edge Digital Marketing Company, No Fluff
        </h2>
        <div className="youve-put">
          You've put in the effort to build your business. We're committed to
          helping your business thrive online.
        </div>
      </div>
    </section>
  );
};

export default ContactUsBanner;
