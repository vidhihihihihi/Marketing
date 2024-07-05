import { FunctionComponent, useMemo, type CSSProperties } from "react";
import "./ServiceCardInstance.css";

export type ServiceCardInstanceType = {
  className?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
};

const ServiceCardInstance: FunctionComponent<ServiceCardInstanceType> = ({
  className = "",
  propFlex,
}) => {
  const serviceCardInstanceStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  return (
    <div
      className={`service-card-instance ${className}`}
      style={serviceCardInstanceStyle}
    >
      <div className="service-card4">
        <div className="card-isolated-media-top4">
          <div className="image-container">
            <div className="image1" />
          </div>
          <div className="card-element-line-item-group">
            <div className="card-element-line-item12">
              <div className="signed-by-base-card-element-12" />
              <div className="paragraph17">Quality</div>
            </div>
            <div className="card-element-line-item13">
              <div className="signed-by-base-card-element-13" />
              <div className="paragraph18">Paragraph</div>
            </div>
          </div>
        </div>
        <div className="signed-by-base-card-isolate8" />
        <div className="signed-by-base-card-isolate9" />
        <div className="card-element-line-item14">
          <div className="signed-by-base-card-element-14" />
          <b className="furniture4">Home Furniture</b>
        </div>
      </div>
    </div>
  );
};

export default ServiceCardInstance;
