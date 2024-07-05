import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import "./FrameComponent1.css";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  className = "",
}) => {
  return (
    <section className={`banner-wrapper ${className}`}>
      <div className="banner">
        <div className="banner-child" />
        <div className="cta-banner-">{`CTA Banner ---> Write few lines`}</div>
        <div className="button">
          <Button
            className="container1"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#555",
              fontSize: "15",
              background: "#f9f9f9",
              borderRadius: "20px",
              "&:hover": { background: "#f9f9f9" },
              height: 34,
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
