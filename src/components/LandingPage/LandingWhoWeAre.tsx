import { FunctionComponent, useState } from "react";
import "./LandingWhoWeAre.css";
import whoWeAreVideo from './WhoWeAreVideo.mp4';

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
      <video 
            className="about-intro-video"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={whoWeAreVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        <div className="about-details">
          <div className="frame-container">
            <div className="frame-inner" />
            <div className="who-were">Who We Are</div>
          </div>
          <div className="about-paragraph">
            <div className={`about-paragraph-content ${isExpanded ? 'expanded' : ''}`}>
            Founded by a team of passionate marketers and creative storytellers, Marketing DNA is a full-service digital 
            marketing agency dedicated to helping businesses grow and thrive in the digital landscape. With years of 
            experience and a deep understanding of the latest marketing trends and technologies, we are equipped to take 
            your brand to the next level.
           <br/> <br/>
            What sets us apart is our commitment to diversity and empowerment. As a proudly women-led company, we bring 
            a unique perspective to the marketing industry, championing creativity, collaboration, and innovation. Our 
            leadership team comprises talented women who excel in their fields and are driven by a shared vision of inclusivity 
            and excellence.
            <br/> <br/>
            At Marketing DNA, we believe that diversity is a key driver of creativity and innovation. Our diverse team reflects 
            a wide range of experiences and insights, allowing us to develop marketing strategies that resonate with a broad audience. 
            We are dedicated to fostering an environment where everyone’s ideas are valued and where women can thrive and lead.
            <br/> <br/>
            Our team is passionate about making a difference for our clients. We take the time to understand your business, your goals, 
            and your challenges, ensuring that our solutions are tailored to meet your unique needs. Whether you're a startup looking to 
            make a mark or an established company aiming to expand your reach, Marketing DNA is your trusted partner in achieving digital success.
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
