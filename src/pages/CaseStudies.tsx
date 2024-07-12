import { FunctionComponent, useState } from "react";
import { Link } from "react-router-dom";
import MainHeader from "../components/MainHeader";
import FooterSection from "../components/FooterSection";
import "./CaseStudies.css";

// Import images
import casestudy1 from "../components/Assets/casestudy1.jpg";
import casestudy2 from "../components/Assets/casestudy2.jpeg";
import casestudy3 from "../components/Assets/casestudy3.jpg";

interface CaseStudy {
  id: string;
  image: string;
  stat: string;
  label: string;
  name?: string;
}

const caseStudies: CaseStudy[] = [
  { id: "1", image: casestudy1, stat: "+707%", label: "Interaction Rate", name: "Whistleblower Law Firm" },
  { id: "2", image: casestudy2, stat: "+20%", label: "Organic Sessions", name: "Whistleblower Law Firm" },
  { id: "3", image: casestudy1, stat: "+129%", label: "Instagram Engagement Rate", name: "Whistleblower Law Firm" },
  { id: "4", image: casestudy1, stat: "+360%", label: "Organic Traffic", name: "Whistleblower Law Firm" },
  { id: "5", image: casestudy2, stat: "+137", label: "Highest Number of", name: "Whistleblower Law Firm" },
  { id: "6", image: casestudy1, stat: "+291%", label: "Ad Sales", name: "Whistleblower Law Firm" },
  { id: "7", image: casestudy1, stat: "+150%", label: "Conversion Rate", name: "Whistleblower Law Firm" },
  { id: "8", image: casestudy2, stat: "+$642K", label: "Adds-to-Cart Value", name: "Whistleblower Law Firm" },
];

const CaseStudies: FunctionComponent = () => {
  const [hoveredStudy, setHoveredStudy] = useState<string | null>(null);

  return (
    <div className="case-studies">
      <MainHeader />
      <div className="case-studies-banner">
        <h1>Case Studies</h1>
        <h2>Team Up With DNA – The Next Amazing Case Study Could Be Yours!</h2>
        <Link to="/contact-us-page" className="create-story-btn">Create Your Story</Link>
      </div>
      <div className="case-studies-grid">
        {caseStudies.map((study) => (
          <Link to={`/case-study/${study.id}`} key={study.id} className="case-study-item">
            <div
              className="case-study-content"
              onMouseEnter={() => setHoveredStudy(study.id)}
              onMouseLeave={() => setHoveredStudy(null)}
            >
              <img src={study.image} alt={study.name} className="case-study-image" />
              <div className="case-study-overlay">
                <div className="case-study-stat">{study.stat}</div>
                <div className="case-study-label">{study.label}</div>
                {hoveredStudy === study.id && (
                  <div className="case-study-name">{study.name}</div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <FooterSection />
    </div>
  );
};

export default CaseStudies;