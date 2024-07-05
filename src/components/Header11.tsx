import { FunctionComponent } from "react";
import Header from "./Header";
import "./Header11.css";

export type Header1Type = {
  className?: string;
};

const Header1: FunctionComponent<Header1Type> = ({ className = "" }) => {
  return (
    <section className={`header5 ${className}`}>
      <Header />
      <div className="testimonial1">
        <div className="testimonial-background" />
        <h3 className="banner3">Banner</h3>
        <div className="youve-put-in2">
          You've put in the effort to build your business. We're committed to
          helping your business thrive online.
        </div>
      </div>
    </section>
  );
};

export default Header1;
