import { FunctionComponent } from "react";
import "./AboutCompany.css";
import aboutgraphic from "./aboutgraphic.png";

export type AboutCompanyType = {
  className?: string;
};

const AboutCompany: FunctionComponent<AboutCompanyType> = ({
  className = "",
}) => {
  return (
      <div className="content-wrapper">
        <img src={aboutgraphic} alt="Company Overview" className="company-overview-image" />
        <div className="text-wrapper">
          <h3 className="about-our-company">About Our Company</h3>
          <div className="about-paragraph">
          At Marketing DNA, we believe that successful marketing is rooted 
          in understanding the unique 'DNA' of each business. Our mission is 
          to decode and enhance your brand's identity through innovative digital 
          marketing strategies and compelling content creation.
          <br/>
          <br/>
          Here, we pride ourselves on our client-centric approach. We take the time to 
          understand your business, your goals, and your challenges. This enables us to 
          create customized marketing solutions that deliver real results. Our collaborative 
          process ensures that you are always involved and informed, making it a true partnership.
          <br/>
          <br/>
          Ready to take your brand to new heights? Join us at Marketing DNA, and let’s create a 
          marketing strategy that truly reflects the essence of your business. Together, we can 
          unlock the potential of your brand and achieve extraordinary results.
          </div>
        </div>
      </div>
  );
};

export default AboutCompany;
