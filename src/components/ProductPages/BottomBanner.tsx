import { FunctionComponent } from "react";
import { useNavigate } from "react-router-dom";
import "./BottomBanner.css";

export type BottomBannerType = {
  className?: string;
};

const BottomBanner: FunctionComponent<BottomBannerType> = ({
  className = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact-us-page");
  };

  return (

      <div className="banner2">
        <h2 className="ready-to-save">Ready to save money and get results?</h2>
        <h3 className="one-liner">Boost your business with our expert digital marketing solutions</h3>
        <div className="bottom-banner-button-container">
          <button className="bottom-banner-button" onClick={handleClick}>
            Click Here To Get Started
          </button>
        </div>
      </div>

  );
};

export default BottomBanner;