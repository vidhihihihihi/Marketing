import { FunctionComponent } from "react";
import "./ProfileCards.css";

const ProfileCard: React.FC = () => {
  return (
    <div className="profile-card">
      <div className="frame-child21" />
      <div className="ellipse-container">
        <div className="frame-child22" />
      </div>
      <div className="hi-im-surbhi-parent">
        <h3 className="hi-im-surbhi-container1">
          <span>Hi I'm</span>
          <span className="surbhi1"> Surbhi</span>
        </h3>
        <div className="designation3">Designation</div>
      </div>
      <div className="paragraph-container">
        <div className="paragraph18">Paragraph</div>
      </div>
      <div className="filled22" />
      <div className="filled23" />
    </div>
  );
};

const ProfileCards: React.FC = () => {
  return (
    <div className="profile-cards-row">
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </div>
  );
};

export default ProfileCards;