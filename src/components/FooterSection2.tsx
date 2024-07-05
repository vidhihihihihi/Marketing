import { FunctionComponent } from "react";
import FooterContent from "./FooterContent";
import FooterLinks from "./FooterLinks";
import "./FooterSection2.css";

export type FooterSection2Type = {
  className?: string;
};

const FooterSection2: FunctionComponent<FooterSection2Type> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section3 ${className}`}>
      <div className="footer3" />
      <div className="signed-by-base-breadcrumbs-el27" />
      <div className="signed-by-base-breadcrumbs-el28" />
      <div className="signed-by-base-breadcrumbs-el29" />
      <div className="signed-by-base-breadcrumbs-el30" />
      <div className="signed-by-base-breadcrumbs-el31" />
      <div className="signed-by-base-breadcrumbs-el32" />
      <div className="signed-by-base-breadcrumbs-el33" />
      <div className="signed-by-base-breadcrumbs-el34" />
      <div className="chevron-icon5" />
      <div className="filled16" />
      <div className="filled17" />
      <div className="filled18" />
      <div className="filled19" />
      <div className="signed-by-base-breadcrumbs-el35" />
      <FooterContent />
      <FooterLinks
        chevronRightSmallName="radioGroup-2"
        chevronRightSmallName1="radioGroup-2"
        chevronRightSmallName2="radioGroup-1"
        chevronRightSmallName3="radioGroup-1"
        chevronRightSmallName4="radioGroup-1"
        chevronRightSmallName5="radioGroup-3"
        chevronRightSmallName6="radioGroup-3"
        chevronRightSmallName7="radioGroup-3"
      />
    </footer>
  );
};

export default FooterSection2;
