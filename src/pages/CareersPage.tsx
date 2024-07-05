import { FunctionComponent } from "react";
import Header1 from "../components/Header1";
import CTABanner from "../components/CTABanner";
import FooterSection1 from "../components/FooterSection1";
import "./CareersPage.css";

const CareersPage: FunctionComponent = () => {
  return (
    <div className="careers-page">
      <Header1 careersStartHere="Careers: Start Here" />
      <section className="company-culture">
        <div className="company-culture-content">
          <h2 className="heading">Heading</h2>
          <div className="few-small-paragraphs">Few small paragraphs</div>
        </div>
        <div className="open-positions">
          <div className="open-positions-list">
            <h2 className="current-openings">Current Openings</h2>
            <div className="job-item">
              <h3 className="job-opening-name">Job opening Name</h3>
              <div className="work-from-office-full-time-parent">
                <div className="work-from-office">
                  Work from office | Full time
                </div>
                <div className="view-post-">{`View Post ->`}</div>
              </div>
            </div>
          </div>
          <div className="job-listing">
            <h3 className="job-opening-name1">Job opening Name</h3>
            <div className="job-details">
              <div className="work-from-office1">
                Work from office | Full time
              </div>
              <div className="view-post-1">{`View Post ->`}</div>
            </div>
          </div>
          <div className="job-listing1">
            <h3 className="job-opening-name2">Job opening Name</h3>
            <div className="work-from-office-full-time-group">
              <div className="work-from-office2">
                Work from office | Full time
              </div>
              <div className="view-post-2">{`View Post ->`}</div>
            </div>
          </div>
        </div>
      </section>
      <CTABanner paragraph="Let’s Get Started" />
      <img className="navigation-icon" alt="" src="/vector-31.svg" />
      <img className="navigation-icon1" alt="" src="/vector-31.svg" />
      <div className="hint2">
        <div className="signed-by-base-typography-p2" />
        <div className="text2">Contact Us</div>
        <div className="spacer-282" />
      </div>
      <FooterSection1 />
    </div>
  );
};

export default CareersPage;
