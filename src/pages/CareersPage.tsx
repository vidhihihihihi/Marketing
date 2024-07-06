import { FunctionComponent } from "react";
import MainHeader from "../components/MainHeader";
import LandingCta from "../components/LandingPage/LandingCta";
import FooterSection from "../components/FooterSection";
import "./CareersPage.css";

const CareersPage: FunctionComponent = () => {
  return (
    <div className="careers-page">
      <MainHeader/>
      <section className="company-info">
        <h3 className="trust-the-process">
          Careers: Start Here
        </h3>
        <div className="result-driven-marketing">
          Result driven marketing company
        </div>
        <div className="rectangle-parent">
          <div className="frame-child" />
          <div className="frame-item" />
        </div>
      </section>
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
      <LandingCta/>
      <FooterSection />
    </div>
  );
};

export default CareersPage;
