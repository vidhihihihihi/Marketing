import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./LandingCta.css";

export type LandingCtaType = {
  className?: string;
};

const LandingCta: FunctionComponent<LandingCtaType> = ({
  className = "",
}) => {
  const handleContactUsClick = () => {
    window.location.href = "/contact-us-page";
  };

  return (
    <section className={`banner-wrapper ${className}`}>
      <div className="banner">
      <div className="content-wrapper">
        <div className="cta-banner">Interested in an SEO or Advertising audit? We give you a full breakdown of any technical SEO or Ad issues and help you resolve them.</div>
        <div className="button">
          <Button
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#000",
              fontSize: "20px",
              background: "#5d90e4",
              borderRadius: "20px",
              "&:hover": { background: "#f9f9f9" },
              height: "34px",
            }}
            onClick={handleContactUsClick}
          >
            Contact Us
          </Button>
        </div>
        </div>
      </div>
    </section>
  );
};

export default LandingCta;
