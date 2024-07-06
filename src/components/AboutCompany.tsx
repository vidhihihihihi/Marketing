import { FunctionComponent } from "react";
import "./AboutCompany.css";

export type AboutCompanyType = {
  className?: string;
};

const AboutCompany: FunctionComponent<AboutCompanyType> = ({
  className = "",
}) => {
  return (
    <section className={`about-us-page-inner ${className}`}>
      <div className="frame-parent36">
        <div className="company-overview-image-parent">
          <div className="company-overview-image" />
          <div className="about-our-company-parent">
            <h3 className="about-our-company">About Our Company</h3>
            <div className="paragraph-wrapper">
              <div className="paragraph15">Paragraph</div>
            </div>
          </div>
        </div>
        <div className="meet-our-team-wrapper">
          <h3 className="meet-our-team">Meet Our Team</h3>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;