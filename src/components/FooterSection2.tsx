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
    <footer className={`footer-section7 ${className}`}>
      <div className="footer8" />
      <div className="signed-by-base-breadcrumbs-el63" />
      <div className="signed-by-base-breadcrumbs-el64" />
      <div className="signed-by-base-breadcrumbs-el65" />
      <div className="signed-by-base-breadcrumbs-el66" />
      <div className="signed-by-base-breadcrumbs-el67" />
      <div className="signed-by-base-breadcrumbs-el68" />
      <div className="signed-by-base-breadcrumbs-el69" />
      <div className="signed-by-base-breadcrumbs-el70" />
      <div className="chevron-icon6" />
      <div className="filled20" />
      <div className="filled21" />
      <div className="filled22" />
      <div className="filled23" />
      <div className="signed-by-base-breadcrumbs-el71" />
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