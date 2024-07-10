import { FunctionComponent } from "react";
import "./ProfileCards.css";
import Member1 from "./member1.jpg"; // Add images for each team member


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
          name="Surbhi"
          designation="Designation"
          description="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. "
        />
        <ProfileCard
          image={Member1}
          name="John"
          designation="Designation"
          description="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. "
        />
        <ProfileCard
          image={Member1}
          name="Doe"
          designation="Designation"
          description="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. "
        />
        <ProfileCard
          image={Member1}
          name="Jane"
          designation="Designation"
          description="Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. "
        />
      </div>
    </section>
  );
};

export default ProfileCards;
