import { FunctionComponent } from "react";
import FooterContent from "./FooterContent";
import FooterLinks from "./FooterLinks";
import "./FooterSection4.css";

export type FooterSection4Type = {
  className?: string;
};

const FooterSection4: FunctionComponent<FooterSection4Type> = ({
  className = "",
}) => {
  return (
    <footer className={`footer-section5 ${className}`}>
      <div className="footer5" />
      <div className="signed-by-base-breadcrumbs-el45" />
      <div className="signed-by-base-breadcrumbs-el46" />
      <div className="signed-by-base-breadcrumbs-el47" />
      <div className="signed-by-base-breadcrumbs-el48" />
      <div className="signed-by-base-breadcrumbs-el49" />
      <div className="signed-by-base-breadcrumbs-el50" />
      <div className="signed-by-base-breadcrumbs-el51" />
      <div className="signed-by-base-breadcrumbs-el52" />
      <div className="signed-by-base-breadcrumbs-el53" />
      <FooterContent />
      <FooterLinks />
    </footer>
  );
};

export default FooterSection4;
