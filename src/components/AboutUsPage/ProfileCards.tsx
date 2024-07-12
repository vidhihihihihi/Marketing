import { FunctionComponent } from "react";
import "./ProfileCards.css";
import Member1 from "./member1.jpeg";
import Member2 from "./member2.jpeg";
import Member3 from "./member3.jpeg";
import Member4 from "./member4.png"; // Add images for each team member


type TeamMemberProps = {
  image: string;
  name: string;
  designation: string;
  description: string;
};

const ProfileCard: FunctionComponent<TeamMemberProps> = ({ image, name, designation, description }) => {
  return (
    <div className="profile-card">
      <div className="ellipse-container">
        <img src={image} alt={`${name}`} className="profile-image" />
      </div>
      <div className="hi-im-surbhi-parent">
        <h3 className="hi-im-surbhi-container1">
          <span>Hi I'm</span>
          <span className="surbhi1"> {name}</span>
        </h3>
        <div className="designation3">{designation}</div>
      </div>
      <div className="paragraph-container">
        <div className="paragraph18">{description}</div>
      </div>
    </div>
  );
};

const ProfileCards: FunctionComponent = () => {
  return (
    <section className="meet-our-team-section">
      <h2 className="meet-our-team-heading">Meet Our Team</h2>
      <div className="profile-cards-row">
        <ProfileCard
          image={Member1}
          name="Nurain Lakhani"
          designation="Strategic Business Consultant"
          description="Transforming challenges into opportunities with tailored solutions and industry-leading insights."
        />
        <ProfileCard
          image={Member2}
          name="Shanta Narang"
          designation="Senior SEO Strategist"
          description="With 15 Years of Expertise, Driving organic growth through data-driven strategies and cutting-edge optimization techniques."
        />
        <ProfileCard
          image={Member3}
          name="Surbhi Sagar"
          designation="Visionary Founder and Chief Executive Officer"
          description="Steering the company's strategic direction and fostering a culture of innovation and excellence."
        />
        <ProfileCard
          image={Member4}
          name="Vidhi Gupta"
          designation="Chief Technology Officer"
          description="Spearheading technological advancements and ensuring robust, scalable solutions for our clients. "
        />
      </div>
    </section>
  );
};

export default ProfileCards;
