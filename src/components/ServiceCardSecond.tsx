import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCardSecond.css";

export type ServiceCardSecondType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ServiceCardSecond: FunctionComponent<ServiceCardSecondType> = ({
  className = "",
  propFlex,
}) => {
  const serviceCardSecondStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`service-card-second ${className}`}
      style={serviceCardSecondStyle}
    >
      <div className="service-card1">
        <div className="card-isolated-media-top1">
          <div className="card-background-second">
            <div className="card-background-instance-secon" />
          </div>
          <div className="card-content-second">
            <div className="card-element-line-item3">
              <div className="signed-by-base-card-element-3" />
              <div className="paragraph4">Service</div>
            </div>
            <div className="card-element-line-item4">
              <div className="signed-by-base-card-element-4" />
              <div className="paragraph5">Paragraph</div>
            </div>
          </div>
        </div>
        <div className="signed-by-base-card-isolate2" />
        <div className="signed-by-base-card-isolate3" />
        <div className="card-element-line-item5">
          <div className="signed-by-base-card-element-5" />
          <b className="furniture1">Home Furniture</b>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardSecond;
