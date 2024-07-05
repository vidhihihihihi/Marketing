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
  const serviceCard2Style: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`service-card6 ${className}`} style={serviceCard2Style}>
      <div className="card-isolated-media-top6">
        <div className="service-card-icon-wrapper">
          <div className="service-card-icon" />
        </div>
        <div className="frame-parent39">
          <div className="card-element-line-item-container">
            <div className="card-element-line-item18">
              <div className="signed-by-base-card-element-18" />
              <div className="paragraph22">Quality</div>
            </div>
          </div>
          <div className="card-element-line-item19">
            <div className="signed-by-base-card-element-19" />
            <div className="paragraph23">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate12" />
      <div className="signed-by-base-card-isolate13" />
      <div className="card-element-line-item20">
        <div className="signed-by-base-card-element-20" />
        <b className="furniture6">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard1;