import { FunctionComponent, useState } from "react";
import "./LandingWhoWeAre.css";

export type LandingWhoWeAreType = {
  className?: string;
};

const LandingWhoWeAre: FunctionComponent<LandingWhoWeAreType> = ({
  className = "",
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <section className={`about-content-wrapper ${className}`}>
      <div className="about-content">
        <textarea
          className="about-intro-child"
          placeholder="Video showing Who We’re"
          rows={15}
          cols={25}
        />
        <div className="about-details">
          <div className="frame-container">
            <div className="frame-inner" />
            <div className="who-were">Who We’re</div>
          </div>
          <div className="about-paragraph">
            <div className={`about-paragraph-content ${isExpanded ? 'expanded' : ''}`}>
              Generating random paragraphs can be an excellent way for writers to get their creative flow going 
              at the beginning of the day. The writer has no idea what topic the random paragraph will be about 
              when it appears. This forces the writer to use creativity to complete one of three common writing 
              challenges. The writer can use the paragraph as the first one of a short story and build upon it. 
              A second option is to use the random paragraph somewhere in a short story they create. The third 
              option is to have the random paragraph be the ending paragraph in a short story. No matter which 
              of these challenges is undertaken, the writer is forced to use creativity to incorporate the paragraph 
              into their writing.
            </div>
            <div className="read-more-button" onClick={toggleReadMore}>
              {isExpanded ? 'Read Less' : 'Read More'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingWhoWeAre;
