import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCard1.css";

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
  const serviceCardStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      alignSelf: propAlignSelf,
    };
  }, [propWidth, propAlignSelf]);

  return (
    <div className={`service-card ${className}`} style={serviceCardStyle}>
      <div className="card-isolated-media-top">
        <div className="card-backgrounds">
          <div className="card-background-instances" />
        </div>
        <div className="card-content">
          <div className="card-list">
            <div className="card-element-line-item">
              <div className="signed-by-base-card-element-" />
              <div className="paragraph2">Service</div>
            </div>
          </div>
          <div className="card-element-line-item1">
            <div className="signed-by-base-card-element-1" />
            <div className="paragraph3">Paragraph</div>
          </div>
        </div>
      </div>
      <div className="signed-by-base-card-isolate" />
      <div className="signed-by-base-card-isolate1" />
      <div className="card-element-line-item2">
        <div className="signed-by-base-card-element-2" />
        <b className="furniture">Home Furniture</b>
      </div>
    </div>
  );
};

export default ServiceCard1;
