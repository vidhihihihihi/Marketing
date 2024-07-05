import { FunctionComponent } from "react";
import FooterContent from "./FooterContent";
import FooterBottom from "./FooterBottom";
import "./FooterSection3.css";

export type FooterSection3Type = {
  className?: string;
};

const FooterSection3: FunctionComponent<FooterSection3Type> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section4 ${className}`}>
      <div className="footer4" />
      <div className="signed-by-base-breadcrumbs-el36" />
      <div className="signed-by-base-breadcrumbs-el37" />
      <div className="signed-by-base-breadcrumbs-el38" />
      <div className="signed-by-base-breadcrumbs-el39" />
      <div className="signed-by-base-breadcrumbs-el40" />
      <div className="signed-by-base-breadcrumbs-el41" />
      <div className="signed-by-base-breadcrumbs-el42" />
      <div className="signed-by-base-breadcrumbs-el43" />
      <div className="signed-by-base-breadcrumbs-el44" />
      <FooterContent />
      <FooterBottom
        chevronRightSmallName="radioGroup-1"
        chevronRightSmallName1="radioGroup-1"
        chevronRightSmallName2="radioGroup-1"
        chevronRightSmallName3="radioGroup-2"
        chevronRightSmallName4="radioGroup-2"
        chevronRightSmallName5="radioGroup-2"
      />
    </footer>
  );
};

export default FooterSection3;
