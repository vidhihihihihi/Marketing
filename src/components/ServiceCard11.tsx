import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCard11.css";

export type ServiceCard1Type = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
};

const ServiceCard1: FunctionComponent<ServiceCard1Type> = ({
  className = "",
  propWidth,
  propAlignSelf,
}) => {
  const serviceCard1Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`service-card3 ${className}`} style={serviceCard1Style}>
      <div className="card-isolated-media-top3">
        <div className="service-card-icon-wrapper">
          <div className="service-card-icon" />
        </div>
        <div className="frame-parent11">
          <div className="card-element-line-item-wrapper">
            <div className="card-element-line-item9">
              <div className="signed-by-base-card-element-9" />
              <div className="paragraph15">Quality</div>
            </div>
          </div>
          <div className="card-element-line-item10">
            <div className="signed-by-base-card-element-10" />
            <div className="paragraph16">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate6" />
      <div className="signed-by-base-card-isolate7" />
      <div className="card-element-line-item11">
        <div className="signed-by-base-card-element-11" />
        <b className="furniture3">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard1;
