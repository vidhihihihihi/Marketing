import { FunctionComponent } from "react";
import PrimaryLinks from "./PrimaryLinks";
import ServiceLinks from "./ServiceLinks";
import "./FrameComponent51.css";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: FunctionComponent<FrameComponent5Type> = ({
  className = "",
}) => {
  return (
    <div className={`links-content-parent ${className}`}>
      <PrimaryLinks />
      <ServiceLinks
        propFlex="unset"
        propMinWidth="423.1px"
        propWidth="423.1px"
      />
      <div className="background4" />
    </div>
  );
};

export default FrameComponent5;
