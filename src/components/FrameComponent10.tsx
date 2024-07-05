import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./FrameComponent10.css";

export type FrameComponent10Type = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const FrameComponent10: FunctionComponent<FrameComponent10Type> = ({
  className = "",
  propFlex,
  propGap,
  propAlignSelf,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propGap, propAlignSelf]);

  return (
    <div className={`frame-parent39 ${className}`} style={frameDivStyle}>
      <div className="frame-wrapper3">
        <div className="best-helpful-b2b-marketing-sta-parent">
          <div className="best-helpful-b2b3">
            40 Best Helpful B2B Marketing Stats For You In 2024
          </div>
          <div className="best-helpful-b2b4">
            40 Best Helpful B2B Marketing Stats For You In 2024
          </div>
        </div>
      </div>
      <div className="ellipse-parent">
        <div className="frame-child18" />
        <img className="vector-icon12" alt="" src="/vector-51.svg" />
      </div>
    </div>
  );
};

export default FrameComponent10;
